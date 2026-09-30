import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { isValidStripeConnectState, stripeConnectStateCookie } from "../../../../../lib/stripe-connect";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;
  const code = params.get("code");
  const state = params.get("state");
  const cookie = stripeConnectStateCookie();
  const expectedState = request.cookies.get(cookie.name)?.value;

  function respond(body: { error: string } | { success: true; message: string }, status: number) {
    const response = NextResponse.json(body, {
      status,
      headers: { "Cache-Control": "no-store", "Referrer-Policy": "no-referrer" },
    });
    // Consume the browser's state on every outcome; retries must start a new flow.
    response.cookies.set(cookie.name, "", { ...cookie.options, maxAge: 0 });
    return response;
  }

  // Validate state before handling a code or Stripe's access_denied response.
  if (params.getAll("state").length !== 1 || !isValidStripeConnectState(state, expectedState)) {
    return respond({ error: "Invalid or missing OAuth state. Please start the connection again." }, 400);
  }

  if (params.has("error")) {
    return respond({ error: "Stripe authorization was declined or could not be completed." }, 400);
  }

  if (!code || params.getAll("code").length !== 1) {
    return respond({ error: "Missing or invalid Stripe authorization code." }, 400);
  }

  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    return respond({ error: "Stripe Connect is not configured." }, 500);
  }

  try {
    // OAuth codes are single-use. Do not automatically retry the token exchange.
    const stripe = new Stripe(secretKey, { maxNetworkRetries: 0, timeout: 10_000 });
    // The SDK POSTs to https://connect.stripe.com/oauth/token using the secret key.
    const token = await stripe.oauth.token({
      grant_type: "authorization_code",
      code,
    });

    const stripeUserId = token.stripe_user_id;
    if (!stripeUserId) {
      console.error("Stripe Connect OAuth response did not include stripe_user_id.");
      return respond({ error: "Stripe did not return a connected account ID." }, 502);
    }

    console.info("Stripe Connect account connected:", stripeUserId);
    // TODO: Save stripeUserId to the database, associated with the consulting
    // client's verified record for this OAuth flow.

    return respond({ success: true, message: "Your Stripe account is now connected to QBG." }, 200);
  } catch (error) {
    // Never log the authorization code, secret key, or full OAuth token response.
    console.error("Stripe Connect OAuth token exchange failed.");
    if (error instanceof Stripe.errors.StripeInvalidGrantError) {
      return respond({ error: "The authorization code is invalid or expired. Please reconnect." }, 400);
    }
    return respond({ error: "Unable to connect your Stripe account. Please start the connection again." }, 502);
  }
}
