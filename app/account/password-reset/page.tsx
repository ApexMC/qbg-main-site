"use client";

import { FormEvent, useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  {
    auth: { flowType: "implicit" },
  }
);

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [messageClass, setMessageClass] = useState<"" | "qbg-success" | "qbg-error">("");
  const [isReady, setIsReady] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const updateMessage = (
    text: string,
    cls: "" | "qbg-success" | "qbg-error" = ""
  ) => {
    setMessage(text);
    setMessageClass(cls);
  };

  useEffect(() => {
    async function initFromHash() {
      try {
        const hash = window.location.hash.startsWith("#")
          ? window.location.hash.slice(1)
          : "";

        const params = new URLSearchParams(hash);
        const type = params.get("type");
        const access_token = params.get("access_token");
        const refresh_token = params.get("refresh_token");

        if (type !== "recovery" || !access_token || !refresh_token) {
          throw new Error("Invalid or expired reset link. Please request a new one.");
        }

        const { error } = await supabase.auth.setSession({
          access_token,
          refresh_token,
        });

        if (error) throw error;

        window.history.replaceState(
          {},
          document.title,
          window.location.pathname + window.location.search
        );
        setIsReady(true);
      } catch (err) {
        const errorMessage =
          err instanceof Error
            ? err.message
            : "Invalid or expired reset link. Please request a new one.";

        updateMessage(errorMessage, "qbg-error");
        setIsDisabled(true);
      }
    }

    initFromHash();
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    updateMessage("");

    const pw = password.trim();

    if (pw.length < 8) {
      updateMessage("Password must be at least 8 characters.", "qbg-error");
      return;
    }

    const { data } = await supabase.auth.getSession();

    if (!data?.session) {
      updateMessage("Session missing. Reopen the reset link.", "qbg-error");
      return;
    }

    const { error } = await supabase.auth.updateUser({ password: pw });

    if (error) {
      updateMessage(error.message, "qbg-error");
      return;
    }

    updateMessage(
      "Password updated successfully. You can return to the app and log in.",
      "qbg-success"
    );

    await supabase.auth.signOut();
    setPassword("");
  }

  return (
      <div className="min-h-[75vh] bg-zinc-50 dark:bg-black relative z-0">
        <main className="mx-auto w-full max-w-md px-6 py-16">
          <Card>
            <CardHeader>
              <CardTitle>Reset Password</CardTitle>
              <CardDescription>
                {message && (
                  messageClass === "qbg-success" ? (
                    <p className={`mt-2 text-green-500 ${messageClass}`}>{message}</p>
                  ) : (
                    <p className={`mt-2 text-red-500 ${messageClass}`}>{message}</p>
                  ))
                }
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="new-password" className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
                    New Password
                  </label>
                  <input
                    type="password"
                    id="new-password"
                    name="new-password"
                    required
                    disabled={isDisabled}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter a strong new password"
                    className="mt-2 w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 outline-none focus:ring-2 focus:ring-pink-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-50"
                  />
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                    Tip: Use at least 8 characters with a mix of letters, numbers &amp; symbols.
                  </p>
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-pink-500 px-4 py-2 text-sm font-medium text-white hover:bg-pink-600 disabled:opacity-50"
                  disabled={isDisabled || !isReady}
                >
                  Update Password
                </button>
              </form>
            </CardContent>
          </Card>
        </main>
      </div>
  );
}