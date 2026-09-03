"use client";

import { useState } from "react";
import US_STATES  from "@/utils/us_states";

export default function BetaTestForm() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      subject: "BlendIQ Beta Test Request",
      message: "Occupation: " + String(formData.get("occupation") || "") + "\n" +
               "Salon/Shop Name: " + String(formData.get("salonShopName") || "") + "\n" +
               "Address: " + String(formData.get("address") || "") + ", " + String(formData.get("city") || "") + ", " + String(formData.get("state") || "") + " " + String(formData.get("zipCode") || ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) throw new Error(data?.error || "Failed to send message.");

      setStatus("success");
      setMessage("Thanks! Your message has been sent.");
      form.reset();
    } catch (err: any) {
      setStatus("error");
      setMessage(err?.message || "Something went wrong. Please try again.");
    }
  }

  return (
    <form
        onSubmit={onSubmit}
        className="mt-10 space-y-5 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
        <div className="grid gap-5 md:grid-cols-2">
        <div>
            <label className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
            Name
            </label>
            <input
            name="name"
            required
            className="mt-2 w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 outline-none focus:ring-2 focus:ring-pink-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-50"
            />
        </div>

        <div>
            <label className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
            Email
            </label>
            <input
            name="email"
            type="email"
            required
            className="mt-2 w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 outline-none focus:ring-2 focus:ring-pink-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-50"
            />
        </div>
        </div>

        <div>
        <label className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
            Occupation
        </label>
        <textarea
            name="occupation"
            required
            rows={1}
            className="mt-2 w-full resize-none rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 outline-none focus:ring-2 focus:ring-pink-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-50"
        />
        </div>

        <div>
        <label className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
            Salon / Shop Name
        </label>
        <textarea
            name="salonShopName"
            required
            rows={1}
            className="mt-2 w-full resize-none rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 outline-none focus:ring-2 focus:ring-pink-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-50"
        />
        </div>

        <div className="mx-auto flex justify-center" aria-hidden="true">
            <div className="h-1.5 w-sm rounded-full bg-linear-to-r from-pink-500 via-red-500 to-yellow-500" />
        </div>

        {/*Address Section*/}
        <div className="grid gap-5 md:grid-cols-2">
            <div>
                <label className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
                    Address
                </label>
                <textarea
                    name="address"
                    required
                    rows={1}
                    className="mt-2 w-full resize-none rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 outline-none focus:ring-2 focus:ring-pink-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-50"
                />
            </div>
            <div>
                <label className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
                    City
                </label>
                <textarea
                    name="city"
                    required
                    rows={1}
                    className="mt-2 w-full resize-none rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 outline-none focus:ring-2 focus:ring-pink-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-50"
                />
            </div>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
            <div>
                <label className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
                    State
                </label>
                <select 
                    name="state"
                    required
                    className="mt-2 w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 outline-none focus:ring-2 focus:ring-pink-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-50">
                    <option value="">Choose a state</option>

                    {US_STATES.map((state) => (
                        <option key={state.value} value={state.value}>
                        {state.label}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
                    Zip Code
                </label>
                <input
                    name="zipCode"
                    required
                    type="text"
                    inputMode="numeric"
                    pattern="\d*"
                    maxLength={10}
                    className="mt-2 w-full resize-none rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 outline-none focus:ring-2 focus:ring-pink-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-50"
                />
            </div>
            <div>
                <label className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
                    Country
                </label>
                <input
                    name="country"
                    readOnly
                    value="United States"
                    type="text"
                    className="mt-2 w-full resize-none rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-50"
                />
            </div>
        </div>

        <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 inline-flex items-center justify-center rounded-lg bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-zinc-800 disabled:opacity-60 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
        {status === "sending" ? "Sending..." : "Submit Request"}
        </button>

        {message ? (
        <p
            className={`text-sm ${
            status === "success"
                ? "text-emerald-600 dark:text-emerald-400"
                : status === "error"
                ? "text-red-600 dark:text-red-400"
                : "text-zinc-600 dark:text-zinc-400"
            }`}
        >
            {message}
        </p>
        ) : null}
    </form>
  );
}