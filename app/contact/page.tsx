import ContactForm from "@/components/team/contact_form";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-black">
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl text-center font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          Contact Us
        </h1>
        <p className="mt-3 text-center text-zinc-600 dark:text-zinc-400">
          Send us a message and we’ll get back to you as soon as we can.
        </p>
        <ContactForm />
      </section>
    </main>
  );
}