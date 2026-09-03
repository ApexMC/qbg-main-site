import BookAClassSelector from "@/components/home/BookAClass";
import HomeHeader from "@/components/home/HomeHeader";
import VideoBanner from "@/components/home/VideoHeader";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-100 font-sans dark:bg-zinc-950 relative z-0">
      {/* Hero Section */}
      <HomeHeader />
      <VideoBanner />

      {/* Who We Are Section */}
      <section id="who-we-are" className="border-y border-zinc-200 dark:border-zinc-900 w-full bg-zinc-50 dark:bg-black py-24 scroll-mt-24">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            Who We Are
          </h2>
          <div className="mt-3 flex justify-center" aria-hidden="true">
            <div className="h-1 w-24 rounded-full bg-pink-300" />
          </div>
          <p className="mt-8 text-center text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
            The Quantum Beauty Group believes education should evolve as fast as our industry does.<br/><br/>
            We are a group of licensed professionals who do the studying so all you have to worry about is your passion for your craft. We know that convenience and efficiency are necessities that help us all thrive. That’s why we deliver our services wherever ever you are, whether that’s in-person, virtual or through our app-BlendIQ.<br/><br/>
            Welcome to The Quantum Beauty Group, the shift that the beauty industry needs to survive. We aren’t your traditional beauty education, we’re are education in motion that strives to keep your passion a priority with simple yet effective tools and knowledge that is elevated because you deserve better!<br/><br/><br/>Xoxo,<br/>The Quantum Beauty Group
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href="/about"
              className="mt-8 rounded-lg bg-pink-300 px-6 py-3 text-sm font-semibold text-white hover:bg-pink-600 transition-colors"
            >
              Meet Our Team
            </a>
          </div>
        </div>
      </section>

      {/* BlendIQ Section */}
      <section id="blend-iq" className="border-y border-zinc-200 dark:border-zinc-900 w-full bg-zinc-100 dark:bg-zinc-900 py-24 relative overflow-hidden scroll-mt-24">
        {/* Floating Images - Row on Mobile, Floating on Desktop */}
        <div className="lg:hidden flex flex-wrap justify-center gap-4 mb-8 px-6">
          <div className="floating-image w-16">
            <Image
              src="https://srsntfksbi7e9pli.public.blob.vercel-storage.com/images/blendiq/floating_appointmentbook.png"
              alt="Appointment Book"
              width={200}
              height={200}
              className="w-full h-auto"
            />
          </div>
          <div className="floating-image w-16">
            <Image
              src="https://srsntfksbi7e9pli.public.blob.vercel-storage.com/images/blendiq/floating_backbarbutler.png"
              alt="Backbar Butler"
              width={200}
              height={200}
              className="w-full h-auto"
            />
          </div>
          <div className="floating-image w-16">
            <Image
              src="https://srsntfksbi7e9pli.public.blob.vercel-storage.com/images/blendiq/floating_clientvault.png"
              alt="Client Vault"
              width={200}
              height={200}
              className="w-full h-auto"
            />
          </div>
          <div className="floating-image w-16">
            <Image
              src="https://srsntfksbi7e9pli.public.blob.vercel-storage.com/images/blendiq/floating_financetracker.png"
              alt="Finance Tracker"
              width={200}
              height={200}
              className="w-full h-auto"
            />
          </div>
          <div className="floating-image w-16">
            <Image
              src="https://srsntfksbi7e9pli.public.blob.vercel-storage.com/images/blendiq/floating_formula.png"
              alt="Formula Selector"
              width={200}
              height={200}
              className="w-full h-auto"
            />
          </div>
          <div className="floating-image w-16">
            <Image
              src="https://srsntfksbi7e9pli.public.blob.vercel-storage.com/images/blendiq/floating_onlinebooking.png"
              alt="Online Bookings"
              width={200}
              height={200}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Floating Images - Desktop Only */}
        <div className="hidden lg:block absolute inset-0 pointer-events-none">
          <div className="floating-image absolute top-8 left-[5%] md:top-[10%] w-32 lg:w-40">
            <Image
              src="https://srsntfksbi7e9pli.public.blob.vercel-storage.com/images/blendiq/floating_appointmentbook.png"
              alt="Appointment Book"
              width={200}
              height={200}
              className="w-full h-auto opacity-75"
            />
          </div>
          <div className="floating-image absolute top-5 right-[5%] md:right-[8%] w-32 lg:w-40">
            <Image
              src="https://srsntfksbi7e9pli.public.blob.vercel-storage.com/images/blendiq/floating_backbarbutler.png"
              alt="Backbar Butler"
              width={200}
              height={200}
              className="w-full h-auto opacity-75"
            />
          </div>
          <div className="floating-image absolute top-[35%] left-[2%] md:left-[5%] w-32 lg:w-36">
            <Image
              src="https://srsntfksbi7e9pli.public.blob.vercel-storage.com/images/blendiq/floating_clientvault.png"
              alt="Client Vault"
              width={200}
              height={200}
              className="w-full h-auto opacity-75"
            />
          </div>
          <div className="floating-image absolute top-[30%] right-[3%] md:right-[6%] w-32 lg:w-36">
            <Image
              src="https://srsntfksbi7e9pli.public.blob.vercel-storage.com/images/blendiq/floating_financetracker.png"
              alt="Finance Tracker"
              width={200}
              height={200}
              className="w-full h-auto opacity-75"
            />
          </div>
          <div className="floating-image absolute bottom-[15%] left-[8%] md:left-[12%] w-32 lg:w-40">
            <Image
              src="https://srsntfksbi7e9pli.public.blob.vercel-storage.com/images/blendiq/floating_formula.png"
              alt="Formula Selector"
              width={200}
              height={200}
              className="w-full h-auto opacity-75"
            />
          </div>
          <div className="floating-image absolute bottom-[12%] right-[8%] md:right-[10%] w-32 lg:w-40">
            <Image
              src="https://srsntfksbi7e9pli.public.blob.vercel-storage.com/images/blendiq/floating_onlinebooking.png"
              alt="Online Bookings"
              width={200}
              height={200}
              className="w-full h-auto opacity-75"
            />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <div style={{ textAlign: "center" }}>
            <div className="text-center leading-none">
              <div style={{ textAlign: "center" }}>
                <span className="gradient-text" style={{ "--text-size": "4rem" } as React.CSSProperties}>
                  BLEND IQ
                </span>
              </div>

              <h2 className="text-1xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 mt-0">
                PRE-RELEASE
              </h2>
            </div>
          </div>
          <div className="mx-auto max-w-3xl px-6">
            <p className="mt-8 text-center text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
              We got tired of booking software that charges you more for basic features, isn't intuitive to use in a fast-paced salon environment, and clutters your experience with junk you never use. <br/><br/>
              Our new platform is designed by a team of experts with a combined 42 years of salon 
              experience aiming to help beauty professionals streamline their workflow, 
              manage their business, and deliver exceptional results to their clients.
            </p>
            
            <div className="mt-12 flex justify-center">
              <div className="group rounded-lg p-0.5 bg-transparent hover:bg-linear-to-r hover:from-pink-500 hover:via-yellow-400 hover:to-pink-500 transition-all duration-300">
                <Link
                  href="/blend-iq"
                  className="block rounded-lg bg-zinc-900 dark:bg-zinc-50 px-6 py-3 text-sm font-semibold text-white dark:text-zinc-900 transition-colors duration-300"
                >
                  Learn More About BlendIQ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="focus-points" className="border-y border-zinc-200 dark:border-zinc-900 w-full bg-zinc-50 dark:bg-black py-24 relative overflow-hidden scroll-mt-24">
        <h1 className="text-center text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          FOCUS POINTS
        </h1>
        <div className="mt-3 mb-12 flex justify-center" aria-hidden="true">
            <div className="h-1 w-24 rounded-full bg-pink-300" />
        </div>
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* CARD 1 */}
            <Link
              href="/business"
              className="group block cursor-pointer relative isolate z-0">
              <span className="pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-r from-pink-400 via-yellow-400 to-pink-400 opacity-0 blur-2xl transition-all duration-300 group-hover:opacity-60 will-change-transform" style={{ transform: 'translateZ(0)' }} />
              <div className="relative z-10 mt-4 space-y-5 text-center rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
                <Image
                  src="https://srsntfksbi7e9pli.public.blob.vercel-storage.com/images/focus-points/focuspoint-business.png"
                  alt="Business"
                  width={160}
                  height={160}
                  className="mx-auto rounded-full object-cover"
                />

                <h3 className="text-3xl font-semibold text-zinc-700 dark:text-zinc-200">
                  Business
                </h3>

                <p className="mt-6 text-zinc-400 dark:text-zinc-400">
                  Behind the scenes of behind the chair.
                </p>

                <ul className="mt-4 text-sm text-zinc-400 dark:text-zinc-400 space-y-1">
                  <li>• Social Media</li>
                  <li>• Business Finance</li>
                  <li>• Customer Retention</li>
                </ul>
              </div>
            </Link>

            {/* CARD 2 */}
            <Link
              href="/education"
              className="group block cursor-pointer relative isolate z-0">
              <span className="pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-r from-pink-400 via-yellow-400 to-pink-400 opacity-0 blur-2xl transition-all duration-300 group-hover:opacity-60 will-change-transform" style={{ transform: 'translateZ(0)' }} />
              <div className="relative z-10 mt-4 space-y-5 text-center rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
                <Image
                  src="https://srsntfksbi7e9pli.public.blob.vercel-storage.com/images/focus-points/focuspoint-education.png"
                  alt="Education"
                  width={160}
                  height={160}
                  className="mx-auto rounded-full object-cover"
                />

                <h3 className="text-3xl font-semibold text-zinc-700 dark:text-zinc-200">
                  Educator
                </h3>

                <p className="mt-6 text-zinc-400 dark:text-zinc-400">
                  Effectively convey your knowledge.
                </p>

                <ul className="mt-4 text-sm text-zinc-400 dark:text-zinc-400 space-y-1">
                  <li>• Class Engagement</li>
                  <li>• Engaging Facilitation</li>
                  <li>• Structural Methodology</li>
                </ul>
              </div>
            </Link>

            {/* CARD 3 */}
            <Link
              href="/cosmetology"
              className="group block cursor-pointer relative isolate z-0">
              <span className="pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-r from-pink-400 via-yellow-400 to-pink-400 opacity-0 blur-2xl transition-all duration-300 group-hover:opacity-60 will-change-transform" style={{ transform: 'translateZ(0)' }} />
              <div className="relative z-10 mt-4 space-y-5 text-center rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
                  <Image
                    src="https://srsntfksbi7e9pli.public.blob.vercel-storage.com/images/focus-points/focuspoint-cosmetology.png"
                    alt="Cosmetology"
                    width={160}
                    height={160}
                    className="mx-auto rounded-full object-cover"
                  />

                  <h3 className="text-3xl font-semibold text-zinc-700 dark:text-zinc-200">
                    Cosmetology
                  </h3>

                  <p className="mt-6 text-zinc-400 dark:text-zinc-400">
                    Produce reliably stunning results for your clients, every time.
                  </p>

                  <ul className="mt-4 text-sm text-zinc-400 dark:text-zinc-400 space-y-1">
                    <li>• Consistent Coloring</li>
                    <li>• Precise Cutting</li>
                    <li>• Mindful Styling</li>
                  </ul>
              </div>
            </Link>

            {/* CARD 4 */}
            <Link
              href="/esthetics"
              className="group block cursor-pointer relative isolate z-1">
              <span className="pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-r from-pink-400 via-yellow-400 to-pink-400 opacity-0 blur-2xl transition-all duration-300 group-hover:opacity-60 will-change-transform" style={{ transform: 'translateZ(0)' }} />
              <div className="relative z-10 mt-4 space-y-5 text-center rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
                <Image
                  src="https://srsntfksbi7e9pli.public.blob.vercel-storage.com/images/focus-points/focuspoint-skinandlashes.png"
                  alt="Esthetics"
                  width={160}
                  height={160}
                  className="mx-auto rounded-full object-cover"
                />

                <h3 className="text-3xl font-semibold text-zinc-700 dark:text-zinc-200">
                  Esthetics
                </h3>

                <p className="mt-6 text-zinc-400 dark:text-zinc-400">
                  From makeup to waxing, master the art of skincare and beauty enhancement.
                </p>

                <ul className="mt-4 text-sm text-zinc-400 dark:text-zinc-400 space-y-1">
                  <li>• Lashes</li>
                  <li>• Skin / Waxing</li>
                  <li>• Makeup</li>
                </ul>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section id="book-a-class" className="w-full bg-zinc-100 dark:bg-zinc-900 py-24 relative overflow-hidden">
        <div className="relative z-10">
          <div style={{ textAlign: "center" }}>
            <h1 className="mb-2 text-center text-4xl font-bold leading-none">
                  BOOK A CLASS
            </h1>
            <h2 className="text-sm text-center font-bold text-zinc-600 dark:text-zinc-400">
              View our class <a href="/class-pricing-guide" className="text-pink-500 hover:underline">pricing overview</a>
            </h2>
            <BookAClassSelector />
          </div>
        </div>
      </section>
    </div>
  );
}
