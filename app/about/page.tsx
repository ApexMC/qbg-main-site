import TeamCard from "@/components/team/team_card";
import { team } from "@/components/team/team";

const teamSections = ["Beauty Ambassadors", "Technical Operations"];

export default function About() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black relative z-0">
      <main className="relative w-full max-w-5xl px-6 py-16 z-0">
        <h1 className="text-center text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          Meet your team.
        </h1>

        <p className="mt-3 text-center max-w-2xl mx-auto text-zinc-600 dark:text-zinc-400">
          A small crew with big energy.<br />Here to guide you through the ever changing world of beauty education; helping you work smarter and live better.
        </p>

        {teamSections.map((section) => {
          const members = team.filter((member) => member.team === section);

          return (
            <div
              key={section}
              className="text-center mt-20 mb-30 font-bold text-3xl text-zinc-900 dark:text-zinc-50"
            >
              <h1>{section}</h1>
              <div className="mt-10 mb-20 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-3 relative z-0">
                {members.map((member, i) => {
                  const offsetClass = i % 3 === 1 ? "sm:translate-y-12" : "";
                  return (
                    <TeamCard
                      key={member.name}
                      member={member}
                      offsetClass={offsetClass}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </main>
    </div>
  );
}