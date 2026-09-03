"use client";

import { useState } from "react";
import US_STATES  from "@/utils/us_states";
import CLASS_SUBJECTS from "@/utils/class_subjects";

type BookingType = "virtual" | "inPerson";

export default function BookAClassSelector() {
  const [bookingType, setBookingType] = useState<BookingType>("virtual");
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");
  const [subMessage, setSubMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      subject: "New Class Booking: " + (bookingType === "virtual" ? "Virtual" : "In-Person"),
      message: "Primary Class Subject: " + String(formData.get("primaryClassSubject") || "") + "\n" +
               "Number of Attendees: " + String(formData.get("numberOfAttendees") || "") + "\n" +
               "Role: " + String(formData.get("role") || "") + "\n" +
               (bookingType === "inPerson" ? "Venue Type: " + String(formData.get("venueType") || "") : "") + "\n" +
               "Venue Name: " + String(formData.get("venueName") || "") + "\n" +
               (bookingType === "inPerson" ? "Address: " + String(formData.get("address") || "") + ", " + String(formData.get("city") || "") + ", " + String(formData.get("state") || "") + " " + String(formData.get("zipCode") || "") : "") + "\n"
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
      setMessage("Thanks! Your class request has been sent.");
      setSubMessage("Our education team will reach out directly as soon as possible to finalize your details.");
      form.reset();
    } catch (err: any) {
      setStatus("error");
      setMessage(err?.message || "Something went wrong. Please try again.");
      setSubMessage("If the error persists, please notify the development team at dev@quantumbeautygroup.com");
    }
  }

  return (
    <section className="w-full max-w-3xl mx-auto px-6 py-8">
      <div className="text-center mb-8">
        <p className="text-zinc-600 dark:text-zinc-400">
          Choose how you'd like to attend.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex w-full max-w-md mx-auto rounded-full bg-zinc-100 dark:bg-zinc-800 p-1 mb-10">
        <button
          type="button"
          onClick={() => setBookingType("virtual")}
          className={`flex-1 rounded-full px-5 py-3 text-sm font-semibold transition ${
            bookingType === "virtual"
              ? "bg-white shadow text-black dark:bg-zinc-900 dark:text-white"
              : "text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white"
          }`}
        >
          Virtual
        </button>

        <button
          type="button"
          onClick={() => setBookingType("inPerson")}
          className={`flex-1 rounded-full px-5 py-3 text-sm font-semibold transition ${
            bookingType === "inPerson"
              ? "bg-white shadow text-black dark:bg-zinc-900 dark:text-white"
              : "text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white"
          }`}
        >
          In-Person
        </button>
      </div>

      {/* Form Card */}
        <form
            onSubmit={onSubmit}
            className="relative overflow-hidden mt-10 space-y-5 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
            {bookingType === "virtual" ? (
                <>
                <div className=" absolute inset-x-0 top-0 h-6 bg-linear-to-r from-blue-500 via-blue-600 to-blue-500">
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-white/30" />
                    <div className="relative flex h-full items-center justify-center px-4">
                        <span className="text-sm font-bold text-white">
                            Hosted Via Zoom
                        </span>
                    </div>
                </div>
                </>
            ) : ( null)
            } 

            <div className="mt-3 grid gap-5 md:grid-cols-2">
                <div>
                    <label className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
                        Name
                    </label>
                    <input
                        name="name"
                        type="text"
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
                <div>
                    <label className="block text-sm font-medium">
                    Number of Attendees
                    </label>
                    <input
                        name="numberOfAttendees"
                        type="number"
                        placeholder={bookingType === "virtual" ? "How many will attend virtually?" : "How many will attend in person?"}
                        className="mt-2 w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 outline-none focus:ring-2 focus:ring-pink-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-50"
                    />
                </div>
                <div>
                    <label className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
                        Your Role
                    </label>
                    <textarea
                        name="role"
                        placeholder="Owner, Director, etc."
                        required
                        rows={1}
                        className="mt-2 w-full resize-none rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 outline-none focus:ring-2 focus:ring-pink-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-50"
                    />
                </div>
            </div>

            {bookingType === "inPerson" ? (
                <>
                <div>
                    <label className="block text-sm font-medium">
                        Venue Type
                    </label>
                    <input
                        name="venueType"
                        type="text"
                        placeholder="School, Salon, Other"
                        className="mt-2 w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 outline-none focus:ring-2 focus:ring-pink-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-50"
                    />
                </div>
                </>
            ) : (
                null
            )}

            <div>
                <label className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
                    Primary Class Subject
                </label>
                <select 
                    name="primaryClassSubject"
                    required
                    className="mt-2 w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 outline-none focus:ring-2 focus:ring-pink-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-50">
                    <option value="">Choose a subject</option>

                    {CLASS_SUBJECTS.map((subject) => (
                    <option key={subject.value} value={subject.value}>
                        {subject.label}
                    </option>
                ))}
                </select>
            </div>

            <div>
                <label className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
                    Venue Name
                </label>
                <textarea
                    name="venueName"
                    required
                    rows={1}
                    className="mt-2 w-full resize-none rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 outline-none focus:ring-2 focus:ring-pink-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-50"
                />
            </div>
            
            {bookingType === "inPerson" ? (
                <>
                <div className="mt-8 mb-8 mx-auto flex justify-center" aria-hidden="true">
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
                </>)
            : (null)
            }
            

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
                {message} <br/> {subMessage}
            </p>
            ) : null}
        </form>
    </section>
  );
}