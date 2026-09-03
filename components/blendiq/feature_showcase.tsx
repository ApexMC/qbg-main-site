"use client";

import { useState } from "react";
import {
  CalendarCheck,
  ContactRound,
  CalendarDays,
  DollarSign,
  ShelvingUnit,
  Calculator,
  WandSparkles,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    title: "Online Booking",
    icon: CalendarCheck,
    imageSrc: "https://srsntfksbi7e9pli.public.blob.vercel-storage.com/images/blendiq/OnlineBooking_Render_Web.png",
    pages: [
      {
        title: "A smoother way for clients to book",
        description: "Let clients request appointments online through a clean, simple booking experience customized for your brand down to the link.",
        bullets: ["No client account required to book", "Simple Service Selection", "SMS Confirmations"],
      },
      {
        title: "Built for busy stylists",
        description:
          "Keep booking organized without needing to go back and forth through messages all day.",
        bullets: ["Simple website and service setup", "Maintain availability and review requests", "Custom booking link"],
      },
    ],
  },
  {
    title: "Client Vault",
    icon: ContactRound,
    imageSrc: "https://srsntfksbi7e9pli.public.blob.vercel-storage.com/images/blendiq/ClientVault_Render_Web.png",
    pages: [
      {
        title: "Every client detail in one place",
        description:
          "Store notes, formulas, service history, preferences, and important client information inside one organized vault.",
        bullets: ["Appointment history", "Saved Services", "Photo library"],
      },
      {
        title: "Remember what matters",
        description:
          "Quickly reference past services and personal details so every appointment feels customized.",
        bullets: ["Before / After photos", "Visit history", "Favorite formulas"],
      },
    ],
  },
  {
    title: "Appointment Book",
    icon: CalendarDays,
    imageSrc: "https://srsntfksbi7e9pli.public.blob.vercel-storage.com/images/blendiq/AppointmentBook_Render_Web.png",
    pages: [
      {
        title: "Your schedule, simplified",
        description:
          "View and manage appointments in a clean calendar-style layout built for salon professionals.",
        bullets: ["Daily schedule", "Upcoming appointments", "Client-linked bookings"],
      },
    ],
  },
  {
    title: "Finance Tracker",
    icon: DollarSign,
    imageSrc: "https://srsntfksbi7e9pli.public.blob.vercel-storage.com/images/blendiq/FinanceTracker_Render_Web.png",
    pages: [
      {
        title: "Know your numbers",
        description:
          "Track income, expenses, and business snapshots without needing a complicated finance system.",
        bullets: ["Revenue tracking", "Expense logs", "Weekly snapshots"],
      },
      {
        title: "See what your business is doing",
        description:
          "Understand where your money is coming from and where it is going so you can make better decisions.",
        bullets: ["Service income", "Product costs", "Simple reporting"],
      },
    ],
  },
  {
    title: "Backbar Butler",
    icon: ShelvingUnit,
    imageSrc: "https://srsntfksbi7e9pli.public.blob.vercel-storage.com/images/blendiq/BackbarButler_Render_Web.png",
    pages: [
      {
        title: "Smarter backbar tracking",
        description:
          "Keep an eye on product usage, inventory, and what needs to be restocked before you run out.",
        bullets: ["Product tracking", "Usage awareness", "Restock reminders"],
      },
    ],
  },
  {
    title: "Level Calculator",
    icon: Calculator,
    imageSrc: "https://srsntfksbi7e9pli.public.blob.vercel-storage.com/images/blendiq/LevelCalculator_Render_Web.png",
    pages: [
      {
        title: "Color support at your fingertips",
        description:
          "Quickly reference starting levels, target levels, and formulation guidance during the consultation process.",
        bullets: ["Starting level", "Target level", "Lift planning"],
      },
    ],
  },
  {
    title: "Formula Selector",
    icon: WandSparkles,
    imageSrc: "https://srsntfksbi7e9pli.public.blob.vercel-storage.com/images/blendiq/FormulaSelector_Render_Web.png",
    pages: [
      {
        title: "Choose formulas faster",
        description:
          "Use guided formula support to help organize, save, and reference color formulas with confidence.",
        bullets: ["Formula ideas", "Saved formulas", "Color notes"],
      },
      {
        title: "Built for repeatable results",
        description:
          "Create a cleaner formula workflow so you can reference what worked and build consistency over time.",
        bullets: ["Gloss formulas", "Toner notes", "Client-specific records"],
      },
    ],
  },
];

export default function FeatureShowcaseCard() {
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
  const [activePageIndex, setActivePageIndex] = useState(0);

  const activeFeature = features[activeFeatureIndex];
  const activePage = activeFeature.pages[activePageIndex];
  const ActiveIcon = activeFeature.icon;

  const hasMultiplePages = activeFeature.pages.length > 1;

  const selectFeature = (index: number) => {
    setActiveFeatureIndex(index);
    setActivePageIndex(0);
  };

  const goPreviousPage = () => {
    setActivePageIndex((current) =>
      current === 0 ? activeFeature.pages.length - 1 : current - 1
    );
  };

  const goNextPage = () => {
    setActivePageIndex((current) =>
      current === activeFeature.pages.length - 1 ? 0 : current + 1
    );
  };

  return (
    <div className="mx-auto w-full max-w-5xl px-6">
      <div className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-white shadow-2xl shadow-zinc-200/70 dark:border-zinc-800 dark:bg-zinc-950 dark:shadow-black/30">
        <div className="border-b border-zinc-200 bg-zinc-50/80 p-3 dark:border-zinc-800 dark:bg-zinc-900/60">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {features.map((feature, index) => {
              const FeatureIcon = feature.icon;
              const isActive = activeFeatureIndex === index;
              return (
                <button
                  key={feature.title}
                  onClick={() => selectFeature(index)}
                  className={`flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition ${
                    isActive
                      ? "bg-zinc-950 text-white dark:bg-white dark:text-zinc-950"
                      : "bg-white text-zinc-600 hover:bg-zinc-100 dark:bg-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-800"
                  }`}
                >
                  <FeatureIcon className="size-4" />
                  {feature.title}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid gap-8 p-6 md:grid-cols-[0.6fr_1fr] md:p-8">
          <div className="flex justify-center">
            <div className="flex items-center justify-center h-full w-full rounded-[1.8rem] bg-zinc-100 dark:bg-zinc-900">
                <img
                    src={activeFeature.imageSrc}
                    alt={`${activeFeature.title} app screen`}
                    className="h-auto w-[50%] md:w-[80%]"
                />
            </div>
          </div>

          <div className="flex flex-col rounded-[1.5rem] border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900/70">
            <div className="mb-4 flex items-center gap-3 justify-center">
              <div className="flex size-11 items-center justify-center rounded-2xl bg-zinc-950 text-white dark:bg-white dark:text-zinc-950">
                <ActiveIcon className="size-5" />
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                  {activeFeature.title}
                </p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  Page {activePageIndex + 1} of {activeFeature.pages.length}
                </p>
              </div>
            </div>

            <div className="min-h-65 rounded-[1.25rem] bg-white p-6 shadow-sm dark:bg-zinc-950">
              <h3 className="text-2xl font-bold tracking-tight text-zinc-950 dark:text-white">
                {activePage.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                {activePage.description}
              </p>

              <div className="mt-6 grid gap-3">
                {activePage.bullets.map((bullet) => (
                  <div
                    key={bullet}
                    className="rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm font-medium text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300"
                  >
                    {bullet}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between">
              <div className="flex gap-2">
                {activeFeature.pages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActivePageIndex(index)}
                    className={`size-2.5 rounded-full transition ${
                      activePageIndex === index
                        ? "bg-zinc-950 dark:bg-white"
                        : "bg-zinc-300 dark:bg-zinc-700"
                    }`}
                    aria-label={`Go to ${activeFeature.title} page ${index + 1}`}
                  />
                ))}
              </div>

              {hasMultiplePages && (
                <div className="flex gap-2">
                  <button
                    onClick={goPreviousPage}
                    className="flex size-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200 dark:hover:bg-zinc-800"
                    aria-label="Previous page"
                  >
                    <ArrowLeft className="size-4" />
                  </button>

                  <button
                    onClick={goNextPage}
                    className="flex size-10 items-center justify-center rounded-full bg-zinc-950 text-white transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
                    aria-label="Next page"
                  >
                    <ArrowRight className="size-4" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}