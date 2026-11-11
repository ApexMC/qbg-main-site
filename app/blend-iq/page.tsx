import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Smartphone } from "lucide-react";
import DashboardDemo from "@/components/blendiq/dashboard-demo";
import FeatureShowcaseCard from "@/components/blendiq/feature_showcase";
import ClientSmsConfiguration from "@/components/blendiq/sms_configuration";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "BlendIQ Salon Business Software",
  description:
    "Simplify booking, client notes, formulas, finances, inventory, and reminders with salon software designed for independent beauty professionals.",
  path: "/blend-iq",
});
const platforms = [["apple_logo.png", "Apple"], ["android_logo.png", "Android"], ["windows_logo.png", "Windows"], ["chrome_logo.png", "Web"], ["macOS_logo.png", "macOS"]] as const;

export default function BlendIqPage() {
  return (
    <main>
      <section className="qbg-section overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center justify-center">
          <div className="flex flex-col items-center text-center">
            <Badge variant="secondary">
              Now accepting beta applications
            </Badge>
            <p className="qbg-gradient-text mt-6 text-6xl font-black tracking-[-0.07em] sm:text-8xl">
              BLEND IQ
            </p>
            <h1 className="mx-auto mt-6 max-w-4xl text-balance text-4xl font-bold tracking-tight sm:text-6xl">
              The business side of beauty, finally simplified.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground px-6">
              Built for solo and commission beauty professionals who want capable tools without the clutter, surprise fees, or desk-job learning curve.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg">
                <Link href="/blend-iq/get-beta-access">
                  Apply for beta access 
                  <ArrowRight />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#dashboard-demo">Try the demo</a>
              </Button>
              <Button asChild size="lg" variant="ghost">
                <a href="#features">Explore features</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section 
        id="features" 
        className="qbg-section scroll-mt-24 border-y border-border bg-card/60">
        <div className="qbg-container">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Built for solo & commission beauty professionals
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Move between the parts of your business without moving between a dozen apps.
            </p>
          </div>
          <FeatureShowcaseCard />
        </div>
      </section>

      <section className="qbg-section">
        <div className="qbg-container flex flex-col items-center gap-12">
          <div>
            <span className="flex size-12 items-center justify-center rounded-2xl bg-secondary text-primary">
              <Smartphone />
            </span>
            <h2 className="mt-5 text-4xl font-bold tracking-tight">
              Client reminders without counting every text.
            </h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              Keep clients in the loop with configurable appointment messages and unlimited SMS reminders included with Pro.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {["Appointment-created confirmations", "Flexible reminder timing", "Clear client communication"].map((item) =>
                <li key={item} className="flex items-center gap-3">
                  <Check className="size-4 text-primary" />{item}
                </li>
              )}
            </ul>
          </div>
          <ClientSmsConfiguration appointmentCreationEnabled remindersEnabled reminderLeadDays={3} />
        </div>
      </section>

      <DashboardDemo />

      <section className="qbg-section border-t border-border bg-zinc-900 text-white">
        <div className="qbg-container text-center">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-primary">
            BlendIQ Pro
          </p>
          <h2 className="mt-4 text-5xl font-bold">
            $14.99 <span className="text-xl font-normal opacity-70">/ month</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg opacity-75">
            All core tools, unlimited storage, and unlimited SMS notifications in one straightforward membership.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            {platforms.map(([image, label]) =>
              <Image
                key={image}
                src={`https://srsntfksbi7e9pli.public.blob.vercel-storage.com/images/blendiq/${image}`}
                alt={label}
                width={44}
                height={44}
                className="size-10 object-contain"
              />
            )}
          </div>
          <Button asChild size="lg" className="mt-9">
            <Link href="/blend-iq/get-beta-access">
              Apply for beta access
              <ArrowRight
              />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
