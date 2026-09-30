import { randomBytes, timingSafeEqual } from "node:crypto";

export function stripeConnectStateCookie() {
  const secure = process.env.NODE_ENV === "production";

  return {
    name: secure ? "__Host-stripe_connect_state" : "stripe_connect_state",
    options: {
      httpOnly: true,
      secure,
      sameSite: "lax" as const,
      path: "/",
      maxAge: 10 * 60,
    },
  };
}

export function createStripeConnectState() {
  return randomBytes(32).toString("hex");
}

export function isValidStripeConnectState(
  state: string | null,
  expectedState: string | undefined,
) {
  // Validate the fixed length before using a constant-time comparison.
  if (
    !state ||
    !expectedState ||
    !/^[a-f0-9]{64}$/.test(state) ||
    !/^[a-f0-9]{64}$/.test(expectedState)
  ) {
    return false;
  }

  return timingSafeEqual(Buffer.from(state, "hex"), Buffer.from(expectedState, "hex"));
}
