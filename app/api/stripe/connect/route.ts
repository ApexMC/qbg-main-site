import { NextResponse } from "next/server";
import { createStripeConnectState, stripeConnectStateCookie } from "../../../../lib/stripe-connect";

export const runtime = "nodejs";

export async function GET() {
  const clientId = process.env.STRIPE_CONNECT_CLIENT_ID;
  const redirectUri = process.env.STRIPE_CONNECT_REDIRECT_URI;

  if (!clientId || !redirectUri || !process.env.CONSULTING_STRIPE_SECRET_KEY) {
    return NextResponse.json(
      { error: "Stripe Connect is not configured." },
      { status: 500, headers: { "Cache-Control": "no-store" } },
    );
  }

  const state = createStripeConnectState();
  const authorizeUrl = new URL("https://connect.stripe.com/oauth/authorize");
  authorizeUrl.search = new URLSearchParams({
    response_type: "code",
    client_id: clientId,
    scope: "read_write",
    redirect_uri: redirectUri,
    state,
  }).toString();

  const response = NextResponse.redirect(authorizeUrl, 303);
  response.headers.set("Cache-Control", "no-store");
  const cookie = stripeConnectStateCookie();
  response.cookies.set(cookie.name, state, cookie.options);
  return response;
}
