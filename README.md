# Quantum Beauty Group website

The public QBG marketing, education-booking, BlendIQ, and account site. Built with Next.js App Router, TypeScript, Tailwind CSS, and shadcn-style UI primitives.

## Local development

1. Install dependencies with `npm ci`.
2. Copy `.env.example` to `.env.local` and add the service credentials needed for the features you are testing.
3. Start the app with `npm run dev`.

The marketing pages render without service credentials. Supabase is required for authentication and account features; Stripe is required for subscription checkout and billing; SMTP settings are required for contact, booking, and beta-request delivery.

## Consulting: Stripe Connect OAuth

The consulting connection flow starts at `GET /api/stripe/connect` and returns to
`GET /api/stripe/connect/callback`. Configure these server environment variables:

```dotenv
STRIPE_SECRET_KEY=sk_test_replace_with_your_platform_secret_key
STRIPE_CONNECT_CLIENT_ID=ca_replace_with_your_platform_client_id
STRIPE_CONNECT_REDIRECT_URI=https://quantumbeautygroup.com/api/stripe/connect/callback
```

Use your platform account's secret key and Connect client ID from the same Stripe
mode (test or live). Register the exact callback URL in your
[Stripe Connect OAuth settings](https://dashboard.stripe.com/settings/connect/onboarding-options/oauth).
For local testing, register and set
`http://localhost:3000/api/stripe/connect/callback` instead. Production uses HTTPS.

Send clients to `/api/stripe/connect` in their browser to begin authorization.
This route creates a random state token in an HttpOnly, SameSite=Lax cookie that
expires after ten minutes and redirects to Stripe. In production the cookie is
Secure and uses the `__Host-` prefix to prevent subdomain cookie injection. The
callback compares the returned state with the browser cookie before exchanging
the code, clears the cookie, logs only the connected account ID, and returns a
JSON success message. A direct Stripe authorization link bypassing the start
route will fail state validation. Start and callback must use the same host.

The token exchange uses the existing Stripe SDK and
[Stripe's OAuth token endpoint](https://docs.stripe.com/connect/oauth-reference#post-token)
with automatic retries disabled because authorization codes are single-use.
The callback contains a TODO for storing `stripe_user_id`; database persistence
and associating the connection with a verified consulting client remain to be
implemented when the consulting account model is defined.

## Quality checks

- `npm run lint` checks Next.js, React, accessibility, and TypeScript rules.
- `npx tsc --noEmit` checks types.
- `npm run build` creates the production build.
- `npm run test:stripe-connect` checks OAuth state validation and the callback
  outcomes with a mocked Stripe SDK; it makes no live Stripe requests.

## Design system

Shared color, typography, radius, surface, and dark-mode values live in `app/globals.css`. Reusable interface primitives live in `components/ui`; compose those primitives instead of introducing one-off control styles.
