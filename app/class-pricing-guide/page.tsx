import Link from "next/link";

const virtualClasses = [
  {
    title: "Virtual Class",
    price: "$50/Hr",
    description: "A live virtual class designed to educate, inspire, and introduce modern techniques in a lower-commitment virtual format.",
    details: [
      "Unlimited seats for your whole team",
      "Great for students, apprentices, and licensed professionals",
      "Certificates of completion awarded to all attendees",
      "Typically 1–3 hours",
    ],
  },
];

const privateTrainings = [
  {
    title: "In-Person Class",
    price: "+ $100/Hr",
    description: "A private, customizable in-salon education for schools, salons, or apprentices wanting a hands-in focused workshop.",
    details: [
      "Great for students, apprentices, and licensed professionals",
      "Learner-centered education tailored to your team’s needs",
      "Certificates of completion awarded to all attendees",
      "Scenario sessions and model calls can be requested for two day classes",
      "Typically 4–6 hours — Minimum of 4 hours.",
    ],
},
];

const addons = [
  "Custom workbook or digital class guide",
  "Mannequin or materials package",
  "Branded certificate or completion materials",
  "Extended Q+A or coaching session",
  "Additional attendee fee above included headcount",
  "CE/admin support where applicable",
];

const faqs = [
  {
    question: "Is travel included in the class price?",
    answer: "Local travel is included at no cost within 30 miles of Evansville, IN. Additional travel, overnight stays, and fly-in bookings are quoted separately.",
  },
  {
    question: "How are fly-in trainings priced?",
    answer: "Fly-in trainings are priced as instruction fee plus airfare and lodging costs.",
  },
  {
    question: "Do you offer custom quotes for schools and salon teams?",
    answer: "Yes. Private bookings can be customized based on class content, length, audience size, materials, travel requirements, and more.",
  },
  {
    question: "Are materials included?",
    answer: "All classes include digital materials by default. Physical kits, mannequins, and specialty materials for in-person classes are typically priced separately unless otherwise noted.",
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl mx-auto text-center mb-12">
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-pink-500 mb-3">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base md:text-lg text-zinc-600 dark:text-zinc-400">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function PriceCard({
  title,
  price,
  description,
  details,
}: {
  title: string;
  price: string;
  description: string;
  details?: string[];
}) {
  return (
    <div className="rounded-3xl border min-h-90 border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur p-6 shadow-sm">
      <div className="flex items-center justify-center gap-6">
        <div>
            <div className="flex flex-row items-center justify-between gap-4">
              <div className="flex flex-col lg:flex-row lg:items-center items-start gap-2">
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                      {title}
                  </h3>
                  {title === "Virtual Class" ? (
                      <div className="rounded-full bg-linear-to-r from-blue-600 via-blue-500 to-blue-600">
                          <p className="text-xs font-bold uppercase text-white px-2 py-1">
                              Zoom
                          </p>
                      </div>
                  ) : (
                      <div className="rounded-full bg-linear-to-r from-pink-500 via-pink-400 to-pink-500">
                          <p className="text-xs font-bold uppercase text-white px-2 py-1">
                              Consultation Required
                          </p>
                      </div>
                  )}
              </div>
              
              <div className="shrink-0 rounded-2xl bg-pink-50 dark:bg-zinc-800 px-4 py-3 text-right border border-pink-100 dark:border-zinc-700">
                <p className="text-xs uppercase text-zinc-500 dark:text-zinc-400">
                  {title === "Virtual Class" ? "" : "Travel & Materials"}
                </p>
                <p className="text-1xl md:text-2xl font-bold text-pink-600 dark:text-pink-400">
                  {price}
                </p>
              </div>
            </div>
            <p className="mt-3 text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {description}
            </p>
        </div>
      </div>

      {details?.length ? (
        <ul className="mt-6 space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
          {details.map((detail) => (
            <li key={detail} className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-pink-500 shrink-0" />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-50">
      <section className="relative overflow-hidden border-b border-zinc-200 dark:border-zinc-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(236,72,153,0.15),transparent_35%),radial-gradient(circle_at_bottom,rgba(244,114,182,0.1),transparent_30%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-pink-500">
              Education Pricing
            </p>
            <h1 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight">
              Professional beauty education,
              <span className="block text-pink-500">priced with clarity.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              Explore virtual class pricing, private in-person class rates, and
              travel guidance for local, regional, and fly-in education
              experiences.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/#book-a-class"
                className="inline-flex items-center justify-center rounded-full bg-pink-500 px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90">
                Request a Class
              </Link>
              <Link
                href="/#focus-points"
                className="inline-flex items-center justify-center rounded-full border border-zinc-300 dark:border-zinc-700 px-6 py-3 text-sm font-semibold transition hover:bg-zinc-100 dark:hover:bg-zinc-900">
                View Classes
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-8xl px-6 py-20 border-y border-zinc-200 dark:border-zinc-900 bg-white dark:bg-black">
        <SectionHeading
          eyebrow="Class Models"
          title="Pricing Overview"
          description="Built for teams and individuals alike looking for accessible, high-impact education."
        />
        <div className="grid justify-center items-center gap-12 lg:grid-cols-2">
            {virtualClasses.map((item) => (
                <PriceCard
                key={item.title}
                title={item.title}
                price={item.price}
                description={item.description}
                details={item.details}
                />
            ))}

            {privateTrainings.map((item) => (
            <PriceCard
                key={item.title}
                title={item.title}
                price={item.price}
                description={item.description}
                details={item.details}
            />
            ))}
        </div>
      </section>

      <section className="mx-auto max-w-full px-10 py-20 border-y border-zinc-200 dark:border-zinc-900 bg-white dark:bg-zinc-950">
        <SectionHeading
          eyebrow="Travel"
          title="Travel + Fly-In Pricing"
        />

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8">
            <h3 className="text-2xl font-bold">Travel Structure</h3>
            <div className="mt-6 space-y-5 text-zinc-700 dark:text-zinc-300">
              <div>
                <p className="font-semibold text-zinc-900 dark:text-zinc-50">
                    Local travel
                </p>
                <p className="mt-1">
                    Travel within 30 miles of Evanville, IN is included for all class bookings.
                </p>
              </div>
              <div>
                <p className="font-semibold text-zinc-900 dark:text-zinc-50">
                    Regional travel
                </p>
                <p className="mt-1">
                    Our on-site rate for locations further than our local travel limit is $0.70/mile. All details including route information will be outlined on your pre-confirmation invoice.
                </p>
              </div>
              <div>
                <div className="flex md:flex-row items-center md:gap-2">
                    <p className="font-semibold text-zinc-900 dark:text-zinc-50">
                        Fly-in bookings
                    </p>
                    <p className="text-zinc-600 dark:text-zinc-500">
                        (exceeds 6 hours of drive time)
                    </p>
                </div>
                <p className="mt-1">
                    Fly-in classes are priced dependant on airfare. All details will be outlined on your pre-confirmation invoice.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-pink-200 dark:border-pink-900/50 bg-pink-50/70 dark:bg-pink-950/20 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-pink-500">
                Travel & Material Policy
            </p>
            <h3 className="mt-4 text-2xl font-bold">——————</h3>
            <ul className="mt-6 space-y-4 text-sm text-zinc-700 dark:text-zinc-300">
              <li>Overnight stays quoted separately</li>
              <li>Regional and fly-in bookings require custom quote</li>
              <li>Materials and kits priced per attendee</li>
              <li>Mannequins are provided and may be kept for an additional fee</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading
          eyebrow="FAQ"
          title="Common Questions"
          description="Clairfying answers to our most commonly asked questions..."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8"
            >
              <h3 className="text-lg font-bold">{faq.question}</h3>
              <p className="mt-3 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-950 px-6 py-20 text-white">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-pink-400">
              Ready to Book?
            </p>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-black dark:text-white">
              Let’s build the right class experience for your team.
            </h2>
            <p className="mt-5 leading-relaxed text-zinc-700 dark:text-zinc-300">
              Reach out for public event details, private training inquiries,
              travel quotes, or custom school and salon education packages.
            </p>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/#book-a-class"
              className="inline-flex items-center justify-center rounded-full bg-pink-500 px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Book A Class
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border bg-zinc-800 dark:bg-zinc-800 border-white/20 px-6 py-3 text-sm font-semibold transition hover:bg-white/10"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}