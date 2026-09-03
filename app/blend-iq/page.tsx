import FeatureShowcaseCard from "@/components/blendiq/feature_showcase";
import ClientSmsConfiguration from "@/components/blendiq/sms_configuration";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-zinc-900 relative z-0">
      {/* BlendIQ Section */}
      <section className="w-full bg-zinc-50 dark:bg-zinc-900 py-24 relative overflow-hidden">

        {/* Content */}
        <div className="relative z-10">
          <div style={{ textAlign: "center" }}>
            <div className="text-center leading-none">
              <p className="mb-4 text-[0.75rem] font-semibold tracking-wide text-black dark:text-zinc-50 uppercase">
                Introducing
              </p>

              <div style={{ textAlign: "center" }}>
                <span className="gradient-text" style={{ "--text-size": "4rem" } as React.CSSProperties}>
                  BLEND IQ
                </span>
              </div>

              <h2 className="text-1xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 mt-0">
                PRE-RELEASE
              </h2>

              <div className="mt-16 mb-20 flex justify-center items-center md:-space-x-25 sm:-space-x-10" aria-hidden="true">
                <div className="w-full max-w-35 sm:max-w-45 md:max-w-80 z-10">
                  <Image
                    src="https://srsntfksbi7e9pli.public.blob.vercel-storage.com/images/blendiq/header-finance.png"
                    alt="Finance tracker preview"
                    width={450}
                    height={400}
                    className="w-full h-auto rounded-lg object-cover"
                  />
                </div>
                <div className="w-full max-w-35 sm:max-w-45 md:max-w-80 z-15">
                  <Image
                    src="https://srsntfksbi7e9pli.public.blob.vercel-storage.com/images/blendiq/header-scheduler.png"
                    alt="Scheduler preview"
                    width={450}
                    height={400}
                    className="w-full h-auto rounded-lg object-cover"
                  />
                </div>
                <div className="w-full max-w-35 sm:max-w-45 md:max-w-80 z-10">
                  <Image
                    src="https://srsntfksbi7e9pli.public.blob.vercel-storage.com/images/blendiq/header-vault.png"
                    alt="Client vault preview"
                    width={450}
                    height={400}
                    className="w-full h-auto rounded-lg object-cover"
                  />
                </div>
              </div>

              <h1 className="text-center mb-18 text-[2rem] md:text-[3rem] font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                Built for solo & commission<br/>beauty professionals
              </h1>

              <FeatureShowcaseCard />

              <h1 className="mt-24 text-center mb-12 text-[2rem] md:text-[3rem] font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                Unlimited SMS reminders<br/>for your clients
              </h1>
              <div className="flex justify-center mb-8">
                <ClientSmsConfiguration
                  appointmentCreationEnabled={true}
                  remindersEnabled={true}
                  reminderLeadDays={3}
                />
              </div>

              <h1 className="mt-24 text-center mb-24 text-[3rem] md:text-[6rem] font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                ... $16.99/month
              </h1>

              <h1 className="mt-18 text-center text-[2rem] md:text-[4rem] font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                Available Soon On
              </h1>

              <div className="mt-16 mb-20 flex justify-center gap-8" aria-hidden="true">
                <Image
                  src="https://srsntfksbi7e9pli.public.blob.vercel-storage.com/images/blendiq/apple_logo.png"
                  alt="Apple logo"
                  width={50}
                  height={50}
                  className="rounded-lg"
                />
                <Image
                  src="https://srsntfksbi7e9pli.public.blob.vercel-storage.com/images/blendiq/android_logo.png"
                  alt="Android logo"
                  width={50}
                  height={50}
                  className="rounded-lg"
                />
                <Image
                  src="https://srsntfksbi7e9pli.public.blob.vercel-storage.com/images/blendiq/windows_logo.png"
                  alt="Windows logo"
                  width={50}
                  height={50}
                  className="rounded-lg"
                />
                <Image
                  src="https://srsntfksbi7e9pli.public.blob.vercel-storage.com/images/blendiq/chrome_logo.png"
                  alt="Chrome logo"
                  width={50}
                  height={50}
                  className="rounded-lg"
                />
                <Image
                  src="https://srsntfksbi7e9pli.public.blob.vercel-storage.com/images/blendiq/macOS_logo.png"
                  alt="macOS logo"
                  width={50}
                  height={50}
                  className="rounded-lg"
                />
              </div>
              
              <Link
                href="/blend-iq/get-beta-access"
                className="gradient-button uppercase"
              >
                Apply For Beta Access
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
