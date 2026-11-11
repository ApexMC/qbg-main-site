"use client";

import { useRef, useState, type CSSProperties } from "react";
import {
  ArrowLeft,
  Banknote,
  CalendarDays,
  Clock,
  Coffee,
  LayoutDashboard,
  Menu,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const defaultColor = "#ec287a";
const luminanceWeights = [0.2126, 0.7152, 0.0722];

const metrics = [
  { label: "Appointments today", value: "3", note: "2 completed · 1 remaining", icon: CalendarDays },
  { label: "Earned today", value: "$425.00", note: "Completed services, tips & retail", icon: Banknote },
  { label: "Expected total", value: "$640.00", note: "Earned + remaining service prices", icon: TrendingUp },
  { label: "Service time booked", value: "6h 20m", note: "Across today’s booked appointments", icon: Clock },
];

const appointments = [
  { time: "9:00 AM", client: "Jordan M.", service: "Dimensional color", status: "Completed" },
  { time: "12:30 PM", client: "Taylor R.", service: "Haircut & style", status: "Completed" },
  { time: "3:00 PM", client: "Casey L.", service: "Partial highlights", status: "Awaiting completion" },
];

const panel = "rounded-2xl border border-[#2a2a2a] bg-[#0c0c0c]";
const demoButton = "transition-none focus-visible:ring-(--demo-highlight) focus-visible:border-(--demo-highlight)";

export default function DashboardDemo() {
  const [color, setColor] = useState(defaultColor);
  const [showBook, setShowBook] = useState(false);
  const heading = useRef<HTMLHeadingElement>(null);
  const luminance = luminanceWeights.reduce((total, weight, index) => {
    const start = 1 + index * 2;
    const normalized = parseInt(color.slice(start, start + 2), 16) / 255;
    const linear = normalized <= 0.04045
      ? normalized / 12.92
      : ((normalized + 0.055) / 1.055) ** 2.4;
    return total + linear * weight;
  }, 0);

  // Keep accent text readable on the dark dashboard as the picker moves.
  const minHighlightLuminance = 0.215;
  const whiteMix = luminance < minHighlightLuminance
    ? (minHighlightLuminance - luminance) / (1 - luminance)
    : 0;

  const theme = {
    "--demo-accent": color,
    "--demo-highlight": `color-mix(in srgb-linear, var(--demo-accent), white ${whiteMix * 100}%)`,
    "--demo-on-accent": luminance >= 0.179 ? "#000" : "#fff",
    "--demo-tint": "color-mix(in srgb, var(--demo-accent) 18%, #171717)",
    "--demo-edge": "color-mix(in srgb, var(--demo-accent) 42%, #404040)",
  } as CSSProperties;

  function openView(book: boolean) {
    setShowBook(book);
    requestAnimationFrame(() => heading.current?.focus());
  }

  return (
    <section id="dashboard-demo" aria-labelledby="dashboard-demo-title" className="scroll-mt-24 border-t border-border py-10 sm:py-14">
      <div className="qbg-container" style={theme}>
        <div className="mx-auto grid max-w-lg items-start gap-5 md:max-w-3xl md:grid-cols-[13rem_minmax(0,1fr)] md:gap-8">
          <div className="md:pt-3">
            <p className="qbg-eyebrow">Interactive demo</p>
            <h2 id="dashboard-demo-title" className="mt-2 text-3xl font-bold tracking-tight">Make it yours</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              See how the BlendIQ dashboard looks in your brand’s colors.
            </p>

            <label className="mt-3 inline-flex cursor-pointer items-center gap-2.5 rounded-xl border bg-card p-1.5 pr-3">
              <input
                type="color"
                value={color}
                onInput={(event) => setColor(event.currentTarget.value)}
                className="size-10 shrink-0 cursor-pointer rounded-lg border bg-background p-1 focus-visible:outline-2 focus-visible:outline-offset-2"
              />
              <span className="flex flex-col gap-0.5">
                <span className="text-sm font-medium">Theme color</span>
                <span aria-hidden="true" className="font-mono text-xs uppercase text-muted-foreground">{color}</span>
              </span>
            </label>
          </div>

          <div aria-label="BlendIQ dashboard preview" role="region" className="min-w-0 rounded-2xl border border-[#333] bg-[#171717] text-white shadow-lg">
            <div className="flex items-center gap-2.5 border-b border-[#333] px-3 py-2 sm:px-4">
              <DropdownMenu modal={false}>
                <DropdownMenuTrigger asChild>
                  <Button type="button" variant="ghost" size="icon" aria-label="Demo menu" className={`text-(--demo-highlight) hover:bg-white/10 ${demoButton}`}>
                    <Menu aria-hidden="true" className="size-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onSelect={() => openView(false)}>Home</DropdownMenuItem>
                  <DropdownMenuItem onSelect={() => openView(true)}>Appointment book</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <span className="grid size-8 shrink-0 place-items-center rounded-lg border border-(--demo-edge) bg-(--demo-tint) text-(--demo-highlight)">
                <LayoutDashboard aria-hidden="true" className="size-4" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold">{showBook ? "Appointment book" : "Home"}</p>
                <p className="text-xs text-neutral-400">{showBook ? "Today’s schedule" : "Your day at a glance"}</p>
              </div>
              <span className="rounded-full bg-neutral-800 px-2.5 py-1 text-xs font-bold">PRO</span>
            </div>

            <div className="space-y-3 p-3 sm:p-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400">Wednesday, November 4</p>
                <h3 ref={heading} tabIndex={-1} className="mt-1 scroll-mt-24 text-xl font-bold tracking-tight outline-none sm:text-2xl">
                  {showBook ? "Today’s appointments" : "Good evening, Amanda."}
                </h3>
                <p className="mt-1 text-sm text-neutral-400">
                  {showBook ? "Your client roster in appointment order." : "A fresh look at your day behind the chair."}
                </p>
              </div>

              {showBook ? (
                <>
                  <Button type="button" variant="ghost" className={`text-(--demo-highlight) hover:bg-white/10 ${demoButton}`} onClick={() => openView(false)}>
                    <ArrowLeft aria-hidden="true" /> Back to dashboard
                  </Button>
                  <ul className={`${panel} divide-y divide-neutral-800`}>
                    {appointments.map(({ time, client, service, status }) => (
                      <li key={time} className="flex flex-wrap items-center gap-x-4 gap-y-1 p-4 sm:p-5">
                        <p className="w-17 text-xs font-medium tabular-nums text-(--demo-highlight)">{time}</p>
                        <div className="min-w-24 flex-1">
                          <p className="text-sm font-semibold">{client}</p>
                          <p className="text-xs text-neutral-400">{service}</p>
                        </div>
                        <span className="rounded-full bg-neutral-800 px-2 py-1 text-xs text-neutral-300">{status}</span>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <>
                  <Button type="button" size="sm" className={`h-9 bg-(--demo-accent) text-(--demo-on-accent) hover:bg-(--demo-accent) hover:underline ${demoButton}`} onClick={() => openView(true)}>
                    <CalendarDays aria-hidden="true" /> Appointment book
                  </Button>

                  <dl className="grid grid-cols-2 gap-2">
                    {metrics.map(({ label, value, note, icon: Icon }) => (
                      <div key={label} className={`${panel} p-2.5 sm:p-3`}>
                        <dt className="flex items-center gap-1.5 text-xs font-medium text-neutral-400">
                          <Icon aria-hidden="true" className="size-4 shrink-0 text-(--demo-highlight)" />
                          {label}
                        </dt>
                        <dd className="mt-1 text-lg font-semibold tracking-tight tabular-nums sm:text-xl">{value}</dd>
                        <dd className="text-xs text-neutral-400">{note}</dd>
                      </div>
                    ))}
                  </dl>

                  <div className="flex items-center gap-3 rounded-2xl border border-(--demo-edge) bg-(--demo-tint) p-3">
                    <Coffee aria-hidden="true" className="size-5 shrink-0 text-(--demo-highlight)" />
                    <div>
                      <h4 className="text-sm font-semibold">Up next</h4>
                      <p className="text-xs text-neutral-300">No upcoming appointments</p>
                    </div>
                  </div>

                  <div className={`${panel} p-3`}>
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <h4 className="text-sm font-semibold">Today’s client roster</h4>
                        <p className="text-xs text-neutral-400">In appointment order · Nov 4</p>
                      </div>
                      <Button type="button" variant="ghost" size="sm" className={`text-(--demo-highlight) hover:bg-white/10 ${demoButton}`} onClick={() => openView(true)}>
                        View all<span className="sr-only"> appointments</span>
                      </Button>
                    </div>
                    <div className="mt-2 flex items-center justify-between gap-3 text-xs" aria-hidden="true">
                      <span className="text-neutral-400">2 of 3 completed</span>
                      <span className="font-semibold">67%</span>
                    </div>
                    <div role="progressbar" aria-label="Appointments completed" aria-valuenow={2} aria-valuemax={3} aria-valuetext="2 of 3 completed" className="mt-2 h-1.5 overflow-hidden rounded-full bg-neutral-800">
                      <div className="h-full w-2/3 rounded-full bg-(--demo-highlight)" />
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
