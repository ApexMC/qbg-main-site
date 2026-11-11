import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  Check,
  Clock3,
  GraduationCap,
  Laptop,
  MapPin,
  PenTool,
  Play,
  RefreshCw,
  Users,
  Video,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Education & Program Development Services",
  description:
    "Explore custom and on-demand beauty education, plus curriculum and program development for beauty schools and apprenticeship programs.",
  path: "/services",
});

const liveLearningFeatures = [
  {
    icon: MapPin,
    title: "In-person classes",
    description:
      "Hands-on instruction designed for schools, salons, teams, and working professionals.",
  },
  {
    icon: Laptop,
    title: "Virtual classes",
    description:
      "Interactive learning delivered live, wherever your students or team happen to be.",
  },
  {
    icon: Users,
    title: "Built for your audience",
    description:
      "Relevant sessions shaped around experience level, goals, and real-world needs.",
  },
];

const onDemandFeatures = [
  "Video-based lessons available when the learner is ready",
  "Flexible pacing that fits around school, work, and clients",
  "Practical education that can be revisited and put to use",
];

const programFeatures = [
  {
    title: "Curriculum review",
    description:
      "We assess what is currently being taught, identify gaps, and highlight opportunities to make learning more relevant.",
  },
  {
    title: "Content updates",
    description:
      "Programs evolve alongside industry expectations, emerging practices, and the changing needs of today’s learners.",
  },
  {
    title: "Learning experience design",
    description:
      "We help turn subject-matter expertise into organized, engaging lessons that support understanding and retention.",
  },
  {
    title: "Program partnership",
    description:
      "Schools and apprenticeship programs gain a thoughtful collaborator for continued refinement—not just a one-time review.",
  },
];

export default function ServicesPage() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-border/70">
        <div className="qbg-container relative grid gap-12 py-20 sm:py-24 lg:grid-cols-[minmax(0,1fr)_19rem] lg:items-end lg:py-32">
          <div className="max-w-4xl">
            <p className="qbg-eyebrow">What we do</p>
            <h1 className="mt-5 text-5xl font-bold tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              Education that keeps the beauty industry{" "}
              <span className="text-pink-400">moving forward.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
              We create practical learning experiences and stronger programs for
              beauty professionals, schools, and apprentices. Every service is
              grounded in what the industry needs now—and where it is going next.
            </p>
          </div>

          <nav
            aria-label="Services on this page"
            className="border-l-2 border-primary/25 pl-6"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
              Explore services
            </p>
            <ol className="mt-5 space-y-4 text-sm font-semibold">
              <li>
                <a
                  href="#education"
                  className="group flex items-center justify-between gap-4 transition-colors hover:text-primary"
                >
                  <span>
                    <span className="mr-3 text-primary">01</span>Education
                  </span>
                  <ArrowDown className="size-4 transition-transform group-hover:translate-y-1" />
                </a>
              </li>
              <li>
                <a
                  href="#program-development"
                  className="group flex items-center justify-between gap-4 transition-colors hover:text-primary"
                >
                  <span>
                    <span className="mr-3 text-primary">02</span>Program development
                  </span>
                  <ArrowDown className="size-4 transition-transform group-hover:translate-y-1" />
                </a>
              </li>
            </ol>
          </nav>
        </div>
      </section>

      <section id="education" className="qbg-section scroll-mt-24">
        <div className="qbg-container">
          <div className="grid gap-8 border-b border-border pb-12 lg:grid-cols-[10rem_1fr] lg:gap-14">
            <div className="flex items-start gap-3 text-primary">
              <span className="text-sm font-bold">01</span>
              <span className="mt-2 h-px flex-1 bg-primary/40" />
            </div>
            <div className="max-w-3xl">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-secondary text-primary">
                <GraduationCap className="size-6" />
              </div>
              <h2 className="mt-6 text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
                Education
              </h2>
              <p className="mt-5 text-lg leading-8 text-muted-foreground">
                Learning should be useful, approachable, and easy to carry into
                the real world. Choose a tailored in-person experience or learn at your
                own pace through our video-based education.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <article className="rounded-4xl border border-border bg-card p-7 shadow-sm sm:p-9">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                    Learn together
                  </p>
                  <h3 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                    Custom Classes
                  </h3>
                </div>
                <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <BookOpen className="size-5" />
                </div>
              </div>
              <p className="mt-5 leading-7 text-muted-foreground">
                Instructor-led education with room for conversation, questions,
                and direct support—offered in person or virtually.
              </p>
              <ul className="mt-8 space-y-5">
                {liveLearningFeatures.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <li key={feature.title} className="flex gap-4">
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                        <Icon className="size-4" />
                      </span>
                      <div>
                        <h4 className="font-semibold">{feature.title}</h4>
                        <p className="mt-1 text-sm leading-6 text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
              <Button asChild variant="outline" className="mt-9 rounded-full">
                <Link href="/#book-a-class">
                  Explore custom classes <ArrowRight />
                </Link>
              </Button>
            </article>

            <article className="relative overflow-hidden rounded-4xl bg-foreground p-7 text-background shadow-lg sm:p-9 dark:bg-card dark:text-card-foreground">
              <div className="relative">
                <div className="-mx-7 -mt-7 mb-7 flex flex-wrap items-center gap-x-3 gap-y-1 border-b border-white/10 bg-orange-300 px-7 py-3 text-primary-foreground sm:-mx-9 sm:-mt-9 sm:mb-9 sm:px-9">
                  <span className="text-xs font-bold uppercase tracking-[0.2em]">
                    Coming soon
                  </span>
                  <span className="text-xs text-primary-foreground/75">
                    Video learning is on the way!
                  </span>
                </div>
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-pink-300 dark:text-primary">
                      Learn on your time
                    </p>
                    <h3 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                      On-demand education
                    </h3>
                  </div>
                  <div className="relative flex size-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Video className="size-5" />
                    <span className="absolute -bottom-1 -right-1 flex size-5 items-center justify-center rounded-full bg-background text-foreground">
                      <Play className="size-2.5 fill-current" />
                    </span>
                  </div>
                </div>
                <p className="mt-5 leading-7 text-background/70 dark:text-muted-foreground">
                  Our video-based education solution makes continued learning
                  more accessible, repeatable, and easier to fit into a full day.
                </p>
                <ul className="mt-8 space-y-4">
                  {onDemandFeatures.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm leading-6">
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary">
                        <Check className="size-3 text-primary-foreground" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-9 flex items-center gap-3 border-t border-background/15 pt-6 text-sm text-background/70 dark:border-border dark:text-muted-foreground">
                  <Clock3 className="size-4 text-pink-300 dark:text-primary" />
                  Learn where you are, when it works for you.
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section
        id="program-development"
        className="scroll-mt-24 border-y border-border bg-card/60 py-20 sm:py-24 lg:py-28"
      >
        <div className="qbg-container grid gap-12 lg:grid-cols-[minmax(18rem,0.75fr)_minmax(0,1.25fr)] lg:gap-20">
          <div>
            <div className="flex items-start gap-3 text-primary">
              <span className="text-sm font-bold">02</span>
              <span className="mt-2 h-px w-20 bg-primary/40" />
            </div>
            <div className="mt-10 flex size-12 items-center justify-center rounded-2xl bg-secondary text-primary">
              <PenTool className="size-6" />
            </div>
            <h2 className="mt-6 text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
              Program development
            </h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              We partner with beauty schools and apprenticeship programs to
              review, refine, and update curriculum as industry standards and
              learner needs change.
            </p>
            <p className="mt-4 leading-7 text-muted-foreground">
              The goal is a program that stays current without losing sight of
              strong foundations, required learning, or the people in the room.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-[2rem] border border-border bg-border sm:grid-cols-2">
            {programFeatures.map((feature, index) => (
              <article key={feature.title} className="bg-background p-7 sm:p-8">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs font-bold tracking-[0.18em] text-primary">
                    0{index + 1}
                  </span>
                  {index === 1 ? (
                    <RefreshCw className="size-5 text-primary" />
                  ) : index === 2 ? (
                    <BookOpen className="size-5 text-primary" />
                  ) : (
                    <Check className="size-5 text-primary" />
                  )}
                </div>
                <h3 className="mt-10 text-xl font-bold tracking-tight">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="qbg-section">
        <div className="qbg-container">
          <div className="relative overflow-hidden rounded-[2rem] bg-primary px-7 py-12 text-primary-foreground sm:px-12 sm:py-14 lg:flex lg:items-end lg:justify-between lg:gap-12">
            <div
              aria-hidden="true"
              className="absolute -right-12 -top-24 size-72 rounded-full border-[3rem] border-white/10"
            />
            <div className="relative max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary-foreground/75">
                Let’s build what’s next
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-[-0.035em] sm:text-4xl">
                Looking for education that fits your learners?
              </h2>
              <p className="mt-4 leading-7 text-primary-foreground/80">
                Tell us about your class, team, school, or program. We’ll help
                you find the right place to begin.
              </p>
            </div>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="relative mt-8 shrink-0 rounded-full lg:mt-0"
            >
              <Link href="/contact">
                Start a conversation <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
