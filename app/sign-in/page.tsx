"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, FormEvent, useEffect } from "react";
import createClient from "@/app/supabase/client";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes"

export default function SignInPage() {
  const [activeTab, setActiveTab] = useState<"signin" | "signup">("signin");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  const handleSignIn = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;

      router.push("/");
      router.refresh();
    } catch (err: any) {
      setError(err.message || "Failed to sign in");
    } finally {
      setLoading(false);
    }
  };

  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const lightSrc = "https://srsntfksbi7e9pli.public.blob.vercel-storage.com/images/logos/LogoxIconLight.png";
  const darkSrc = "https://srsntfksbi7e9pli.public.blob.vercel-storage.com/images/logos/LogoxIcon.png";
  const src = !mounted ? lightSrc : (theme === "light" ? lightSrc : darkSrc);

  const handleSignUp = async (e: FormEvent) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
          },
        },
      });

      if (error) throw error;

      setError("Check your email to confirm your account!");
    } catch (err: any) {
      setError(err.message || "Failed to sign up");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mx-auto max-w-2xl px-6 py-16">
      <div className="space-y-5 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
        <Image
          src={src}
          alt="QBG Logo"
          width={350}
          height={350}
          className="mx-auto"
        />

        {/* Tabs */}
        <div className="flex border-b border-zinc-200 dark:border-zinc-800">
          <button
            type="button"
            onClick={() => {
              setActiveTab("signin");
              setError("");
              setPassword("");
              setConfirmPassword("");
            }}
            className={`flex-1 py-3 text-sm font-medium transition-colors ${
              activeTab === "signin"
                ? "border-b-2 border-pink-500 text-pink-500"
                : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50"
            }`}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveTab("signup");
              setError("");
              setPassword("");
              setConfirmPassword("");
            }}
            className={`flex-1 py-3 text-sm font-medium transition-colors ${
              activeTab === "signup"
                ? "border-b-2 border-pink-500 text-pink-500"
                : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50"
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* Sign In Form */}
        {activeTab === "signin" && (
          <form onSubmit={handleSignIn} className="space-y-5">
            <h1 className="text-3xl text-center font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
              Sign In
            </h1>
            <p className="mt-3 text-center text-zinc-600 dark:text-zinc-400">
              Welcome back to Quantum Beauty Group!
            </p>

            {error && (
              <div className="rounded-lg bg-red-50 dark:bg-red-900/20 p-3 text-sm text-red-600 dark:text-red-400">
                {error}
              </div>
            )}

            <div className="space-y-5">
              <div>
                <label className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-2 w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 outline-none focus:ring-2 focus:ring-pink-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-50"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-2 w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 outline-none focus:ring-2 focus:ring-pink-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-50"
                />
              </div>

              <div className="text-center">
                <Link href="/forgot-password" className="text-sm text-pink-500 hover:underline">
                  Forgot Password?
                </Link>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-pink-500 px-4 py-2 text-sm font-medium text-white hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {loading ? "Signing In..." : "Sign In"}
              </button>
            </div>
          </form>
        )}

        {/* Sign Up Form */}
        {activeTab === "signup" && (
          <form onSubmit={handleSignUp} className="space-y-5">
            <h1 className="text-3xl text-center font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
              Sign Up
            </h1>
            <p className="mt-3 text-center text-zinc-600 dark:text-zinc-400">
              Join Quantum Beauty Group today!
            </p>

            {error && (
              <div className={`rounded-lg p-3 text-sm ${
                error.includes("Check your email") 
                  ? "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400"
                  : "bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400"
              }`}>
                {error}
              </div>
            )}

            <div className="space-y-5">
              <div>
                <label className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
                  Full Name
                </label>
                <input
                  name="fullName"
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-2 w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 outline-none focus:ring-2 focus:ring-pink-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-50"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-2 w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 outline-none focus:ring-2 focus:ring-pink-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-50"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
                  Confirm Password
                </label>
                <input
                  name="confirmPassword"
                  type="password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="mt-2 mb-6 w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 outline-none focus:ring-2 focus:ring-pink-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-50"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-pink-500 px-4 py-2 text-sm font-medium text-white hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {loading ? "Signing Up..." : "Sign Up"}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}