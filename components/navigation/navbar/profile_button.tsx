'use client';
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import createClient from "@/app/supabase/client";

export default function ProfileButton({ user }: { user: any }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const supabase = createClient();

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("click", onClickOutside);
    return () => document.removeEventListener("click", onClickOutside);
  }, []);

const displayName =
    user?.user_metadata?.full_name ??
    (user?.email ? user.email.split("@")[0] : "");
const initials = displayName
  .split(" ")
  .map((n: string) => n[0])
  .slice(0, 2)
  .join("")
  .toUpperCase();

  return (
    <div className="relative" ref={ref}>
      <button onClick={() => setOpen(v => !v)} className="h-12 px-4 rounded-lg bg-zinc-200 dark:bg-zinc-800 flex items-center gap-3">
        <div className="h-8 w-8 rounded-full bg-zinc-400 dark:bg-zinc-600 flex items-center justify-center font-bold text-sm">
          {initials}
        </div>
        <span className="font-medium text-sm truncate max-w-40 text-zinc-800 dark:text-zinc-200">Hi, {displayName.split(" ")[0]}!</span>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 rounded-md bg-white dark:bg-zinc-800 shadow-lg py-2 z-50">
          <Link href="/account" className="block px-4 py-2 text-sm text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-700" onClick={() => setOpen(false)}>
            Account
          </Link>
          <button onClick={() => { supabase.auth.signOut(), setOpen(false);}} className="w-full text-left block px-4 py-2 text-sm text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-700">
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}