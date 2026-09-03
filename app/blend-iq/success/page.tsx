import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { session_id } = await searchParams;

  if (!session_id) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-black text-white">
        <div>
          <h1 className="text-2xl text-center font-bold">Missing session</h1>
          <p className="text-center">No Checkout Session ID was provided.</p>
        </div>
      </main>
    );
  }

  const session = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ["subscription", "customer"],
  });

  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="max-w-lg w-full rounded-2xl border border-white/10 bg-white/5 p-8">
        <h1 className="text-3xl font-bold mb-4">Payment successful</h1>
        <p className="mb-4">
          Thanks! Your checkout was completed successfully.
        </p>

        <div className="space-y-2 text-sm text-white/80">
          <p><strong>Session:</strong> {session.id}</p>
          <p><strong>Customer email:</strong> {session.customer_details?.email ?? "—"}</p>
          <p><strong>Status:</strong> {session.status}</p>
        </div>

        <p className="mt-6 text-sm text-white/60">
          Your account access will update automatically.
        </p>
      </div>
    </main>
  );
}