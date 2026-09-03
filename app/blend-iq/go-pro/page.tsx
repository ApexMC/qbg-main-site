"use client";

import Image from "next/image";
import createClient from "@/app/supabase/client";
import { useEffect, useState } from "react";
import router from "next/router";

export default function CheckoutPage() {
  const [user, setUser] = useState<any | null>(null);
    const supabase = createClient();
  
    useEffect(() => {
      supabase.auth.getUser().then(({ data }) => setUser(data?.user ?? null));
      const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
        setUser(session?.user ?? null);
      });
      return () => sub?.subscription?.unsubscribe?.();
    }, []);
  
  async function handleCheckout() {
    if (!user) {
      window.location.href = "/sign-in";
      return;
    }
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        lookupKey: "pro_monthly",
        user: user?.id,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error(data);
      alert(data.error || "Something went wrong.");
      return;
    }

    window.location.href = data.url;
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="mt-12 mb-12 max-w-lg w-full rounded-2xl border border-white/10 bg-white/5 p-8">
        <h1 className="text-3xl text-center font-bold mb-6">
          BlendIQ{" "}
          <span className="gradient-text" style={{ "--text-size": "2rem" } as React.CSSProperties}>
            PRO
          </span>
        </h1>
        <div className="border-t mb-6 border-gray-200" />
        <div className="flex flex-row items-center mb-12 justify-center">
          <div className="relative inline-block">
            <div className="absolute -bottom-4 left-2/5 z-10 -translate-x-1/2 rounded-full border border-black bg-linear-to-r from-yellow-600 to-yellow-500 px-3 py-1 text-xs font-bold tracking-[0.2em] text-white shadow-md">
              PRO
            </div>

            <Image
              src="https://srsntfksbi7e9pli.public.blob.vercel-storage.com/images/logos/logo.png"
              alt="BlendIQ PRO Preview"
              width={75}
              height={400}
              className="rounded-lg mt-4 mr-6"
            />
          </div>
          <p className="text-zinc-200 text-3xl font-bold mt-2 ml-6">
            $14.99/month
          </p>
        </div>
        <div className="border-t mb-8 border-gray-200" />
        <div className="flex flex-col md:flex-row items-center mb-8 gap-6 md:gap-12 justify-center">
          <ul className="md:mb-8 w-fit mx-auto space-y-2 text-left text-md text-zinc-200">
            <li>• Client Vault</li>
            <li>• Appointment Book</li>
            <li>• Finance Tracker</li>
            <li>• Backbar Butler</li>
            <li>• Online Booking</li>
            <li>• Finance Tracker</li>
            <li>• Level Calculator</li>
            <li>• Formula Selector</li>
          </ul>
          <ul className="md:mb-8 w-fit mx-auto space-y-2 text-left text-md text-zinc-200">
            <li>✅ Unlimited Storage</li>
            <li>✅ Unlimited SMS Notifications</li>
          </ul>
        </div>

        <button
          onClick={() => (user ? handleCheckout() : window.location.href = "/sign-in")}
          className="w-full rounded-full px-5 py-3 font-semibold bg-pink-500 hover:bg-pink-400 transition">
          {user ? "Go Pro" : "Sign in to subscribe"}
        </button>
      </div>
    </main>
  );
}