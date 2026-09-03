import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function Esthetics() {
    return (
      <main className="min-h-screen bg-zinc-50 dark:bg-black relative z-0">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-8 px-4 py-10 sm:px-6 sm:py-12 md:grid-cols-[auto_1fr] md:gap-12 lg:gap-20 lg:px-8 lg:py-16">
            <div className="mt-8 flex flex-col items-center gap-6 md:gap-8">
                <div className="flex items-center justify-center rounded-full bg-zinc-50 dark:bg-zinc-900">
                    <Image
                        src="https://srsntfksbi7e9pli.public.blob.vercel-storage.com/images/focus-points/focuspoint-esthetics.png"
                        alt="Esthetics"
                        width={250}
                        height={250}
                        className="h-auto w-36 sm:w-44 md:w-52 lg:w-60"
                    />
                </div>

                <h1 className="text-2xl font-bold sm:text-3xl">
                    Esthetics
                </h1>

                <Card className="min-w-85 mt-4 border border-zinc-200 dark:border-zinc-800">
                    <CardHeader>
                        <CardTitle className="font-bold text-center">
                            Topics
                        </CardTitle>
                        <CardDescription className="text-center">
                            Some inspiring topics to get you started.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="px-8 items-center justify-center">
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
                            Service Bluepriting
                        </p>
                    </CardContent>
                </Card>
            </div>

            <div className="w-full max-w-2xl text-center md:text-left">
                <h2 className="text-center font-bold leading-relaxed sm:text-lg md:text-xl lg:text-2xl">
                    Coming Soon.
                </h2>
            </div>
        </div>
      </main>
    );
}