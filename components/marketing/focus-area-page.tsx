import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type FocusAreaPageProps = {
  title: string;
  description: string;
  image: string;
  topics: string[];
};

export default function FocusAreaPage({
  title,
  description,
  image,
  topics,
}: FocusAreaPageProps) {
  return (
    <main>
      <section className="qbg-section">
        <div className="qbg-container grid items-start gap-12 lg:grid-cols-[minmax(18rem,24rem)_1fr] lg:gap-16">
          <div className="mx-auto w-full max-w-sm space-y-6 lg:mx-0">
            <div className="mx-auto w-full max-w-xs">
              <Image
                src={image}
                alt={`${title} education at Quantum Beauty Group`}
                width={400}
                height={400}
                className="aspect-square w-full rounded-[1.5rem] border border-border object-cover shadow-xl"
                priority
              />
            </div>
            <Card className="shadow-sm">
              <CardHeader>
                <p className="qbg-eyebrow">Class topics</p>
                <CardTitle className="mt-2 text-2xl">Shape a class for your team</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-3">
                  {topics.map((topic) => (
                    <li
                      key={topic}
                      className="flex items-center gap-3 rounded-xl bg-muted p-4 text-sm font-medium"
                    >
                      <Check className="size-4 shrink-0 text-primary" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
          <div>
            <h2 className="font-bold text-xl">We Support</h2>
            <h1 className="mt-2 text-5xl font-bold tracking-[-0.045em] sm:text-6xl">{title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">{description}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/#book-a-class">
                  Build Your Class <ArrowRight />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/services">See Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
