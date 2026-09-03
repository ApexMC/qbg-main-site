export default function HomeHeader() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6">
      <div className="mt-12 mb-16 rounded-2xl border border-zinc-200 bg-zinc-50 p-3 dark:border-zinc-800 dark:bg-zinc-900/60">
        <div className="rounded-xl bg-white p-2 text-sm text-zinc-600 shadow-sm dark:bg-zinc-950 dark:text-zinc-400">
          <div className="flex justify-center w-full max-w-5xl flex-col py-24 px-6 bg-zinc-50 dark:bg-zinc-950">
              <h1 className="text-center text-4xl font-bold tracking-tight text-pink-300 dark:text-pink-300">
                  EVOLVED EDUCATION
              </h1>

              <div className="my-6 flex justify-center" aria-hidden="true">
                  <div className="h-1.5 w-lg rounded-full bg-pink-300 dark:bg-pink-300" />
              </div>

              <h1 className="text-center text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                TOOLS TO MANAGE <span className="underline decoration-2 underline-offset-4">YOUR</span> BUSINESS
              </h1>
              <div className ="flex flex-row items-center justify-center mt-8">
                <a
                  href="#book-a-class"
                  className="mr-8 rounded-lg bg-pink-300 px-6 py-3 text-sm font-semibold text-white hover:bg-pink-400 transition-colors">
                  BOOK A CLASS
                </a>

                <a
                  href="#blend-iq"
                  className="ml-8 rounded-lg bg-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-50 hover:bg-zinc-500 transition-colors dark:bg-zinc-900 dark:text-zinc-50 dark:hover:bg-zinc-500">
                  SEE TOOLS
                </a>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}