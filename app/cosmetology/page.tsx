import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import TestimonialCard from "@/components/home/TestimonialCard";

export default function Cosmetology() {
    return (
      <main className="min-h-screen bg-zinc-50 dark:bg-black relative z-0">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 px-4 py-10 sm:px-6 sm:py-12 md:grid-cols-[auto_1fr] md:gap-12 lg:gap-20 lg:px-8 lg:py-16">
            <div className="flex flex-col md:flex-row mt-8 gap-12 items-center justify-center">
                <div className="mt-8 flex flex-col items-center gap-6 md:gap-8">
                    <div className="flex items-center justify-center rounded-full bg-zinc-50 dark:bg-zinc-900">
                        <Image
                            src="https://srsntfksbi7e9pli.public.blob.vercel-storage.com/images/focus-points/focuspoint-cosmetology.png"
                            alt="Cosmetology"
                            width={250}
                            height={250}
                            className="h-auto w-36 sm:w-44 md:w-52 lg:w-60"
                        />
                    </div>

                    <h1 className="text-2xl font-bold sm:text-3xl">
                        Cosmetology
                    </h1>

                    <Card className="min-w-85 mt-4 border border-zinc-200 dark:border-zinc-800">
                        <CardHeader>
                            <CardTitle className="font-bold text-center text-2xl">
                                Topics
                            </CardTitle>
                            <CardDescription className="text-center">
                                Some inspiring topics to get you started.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="px-8 items-center justify-center text-lg">
                            <p className="text-center text-zinc-600 dark:text-zinc-400">
                                Formula vs Formulation
                            </p>
                            <p className="text-center text-zinc-600 dark:text-zinc-400">
                                Science-Backed Beauty
                            </p>
                            <p className="text-center text-zinc-600 dark:text-zinc-400">
                                Express Balayaging
                            </p>
                            <p className="text-center text-zinc-600 dark:text-zinc-400">
                                Lived-In Layers
                            </p>
                            <p className="text-center text-zinc-600 dark:text-zinc-400">
                                Service Blueprinting
                            </p>
                        </CardContent>
                    </Card>
                </div>
                <div className="my-auto mx-auto flex justify-center" aria-hidden="true">
                    <div className="h-1 w-175 md:h-175 md:w-1 rounded-full bg-zinc-50 dark:bg-zinc-800" />
                </div>
            </div>

            <div className="flex flex-col items-center w-full md:text-left mt-12">
                <h2 className="text-center font-bold leading-relaxed sm:text-lg text-xl mb-10">
                    Cosmetology is where passion becomes skill. We teach the "why" behind the beauty –– so you can create with confidence. Here's some inspo-topics to get you started with your class.
                </h2>

                {/*
                <div className="flex flex-wrap items-center justify-center gap-8">
                    <TestimonialCard
                        member={{
                            name: "Amanda Dowell",
                            message: "Cosmetology is amazing!",
                            img: "https://srsntfksbi7e9pli.public.blob.vercel-storage.com/images/focus-points/focuspoint-cosmetology.png",
                        }}
                    />
                    <TestimonialCard
                        member={{
                            name: "Jane Doe",
                            message: "Cosmetology is amazing!",
                            img: "https://srsntfksbi7e9pli.public.blob.vercel-storage.com/images/focus-points/focuspoint-cosmetology.png",
                        }}
                    />
                    <TestimonialCard
                        member={{
                            name: "John Smith",
                            message: "Cosmetology is amazing!",
                            img: "https://srsntfksbi7e9pli.public.blob.vercel-storage.com/images/focus-points/focuspoint-cosmetology.png",
                        }}
                    />
                </div>
                */}
            </div>
        </div>
      </main>
    );
}