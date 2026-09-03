import {
  CircleUser,
} from "lucide-react";

type ClientSmsConfigurationProps = {
  appointmentCreationEnabled?: boolean;
  remindersEnabled?: boolean;
  reminderLeadDays?: 1 | 2 | 3 | 4 | 5;
};

export default function ClientSmsConfiguration({
  appointmentCreationEnabled = true,
  remindersEnabled = true,
  reminderLeadDays = 2,
}: ClientSmsConfigurationProps) {
  return (
    <div className="mx-auto w-full max-w-5xl px-6">
      <div className="mx-auto max-w-5xl rounded-3xl justify-center border border-zinc-200 bg-white p-6 shadow-2xl shadow-zinc-200/70 dark:border-zinc-800 dark:bg-zinc-950 dark:shadow-black/30">
        <div className="flex flex-col mb-6 items-center">
          <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
            Client Messaging
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-white">
            SMS Configuration
          </h2>
          <p className="mt-2 max-w-xl text-center text-sm text-zinc-600 dark:text-zinc-400">
            Control which automated text messages are sent to each of your clients for their appointments.
          </p>
        </div>

        <div className="mb-4 rounded-2xl border border-zinc-200 bg-zinc-50 p-3 dark:border-zinc-800 dark:bg-zinc-900/60">
          <div className="rounded-xl bg-white p-2 text-sm text-zinc-600 shadow-sm dark:bg-zinc-950 dark:text-zinc-400">
            <div className="flex items-center justify-center gap-2">
              <CircleUser />
              <p className="font-medium text-zinc-950 dark:text-white">
                Doe, Jane
              </p>
            </div>
            <p className="mt-1">
              +1(123)456-7890
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {/* Appointment Creation SMS */}
          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900/60">
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <h3 className="font-semibold text-zinc-950 dark:text-white">
                  Appointment Creation
                </h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  Send a confirmation text when a new appointment is booked.
                </p>
              </div>

              <StatusToggle enabled={appointmentCreationEnabled} />
            </div>

            <div className="rounded-xl bg-white p-4 text-sm text-zinc-600 shadow-sm dark:bg-zinc-950 dark:text-zinc-400">
              <p className="font-medium text-zinc-950 dark:text-white">
                Message status
              </p>
              <p className="mt-1">
                {appointmentCreationEnabled
                  ? "Clients will receive an SMS when their appointment is created."
                  : "No creation confirmation SMS will be sent."}
              </p>
            </div>
          </div>

          {/* Reminder Lead Days SMS */}
          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900/60">
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <h3 className="font-semibold text-zinc-950 dark:text-white">
                  Appointment Reminder
                </h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  Send a reminder before the upcoming appointment.
                </p>
              </div>

              <StatusToggle enabled={remindersEnabled}/>
            </div>

            <div className="rounded-xl bg-white p-4 shadow-sm dark:bg-zinc-950">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-sm font-medium text-zinc-950 dark:text-white">
                  Reminder lead days
                </p>
                <span className="text-sm text-zinc-500 dark:text-zinc-400">
                  {remindersEnabled ? `${reminderLeadDays} days prior` : "Disabled"}
                </span>
              </div>

              <div className="grid grid-cols-5 gap-2">
                {[1, 2, 3, 4, 5].map((day) => {
                  const isSelected = remindersEnabled && reminderLeadDays === day;

                  return (
                    <div
                      key={day}
                      className={[
                        "flex h-10 items-center justify-center rounded-xl border text-sm font-medium transition",
                        isSelected
                          ? "border-zinc-950 bg-zinc-950 text-white dark:border-white dark:bg-green-500 dark:text-zinc-950"
                          : "border-zinc-200 bg-zinc-50 text-zinc-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-500",
                        !remindersEnabled && "opacity-40",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                    >
                      {day}
                    </div>
                  );
                })}
              </div>

              <p className="mt-3 text-xs text-zinc-500 dark:text-zinc-400">
                Select how many days before the appointment the client should be
                reminded.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatusToggle({ enabled }: { enabled: boolean }) {
  return (
    <div
      className={[
        "relative flex h-7 w-12 shrink-0 items-center rounded-full p-1 transition",
        enabled
          ? "bg-green-500 dark:bg-green-500"
          : "bg-zinc-300 dark:bg-zinc-700",
      ].join(" ")}
      aria-label={enabled ? "Enabled" : "Disabled"}
    >
      <div
        className={[
          "h-5 w-5 rounded-full bg-white shadow-sm transition dark:bg-zinc-950",
          enabled ? "translate-x-5" : "translate-x-0",
        ].join(" ")}
      />
    </div>
  );
}