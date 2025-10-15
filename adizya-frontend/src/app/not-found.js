"use client";

import Link from "next/link";
import localFont from "next/font/local";

const hellasFun = localFont({
  src: "../..//public/fonts/HellasFunPlain.ttf",
  display: "swap",
})

const pearlJean = localFont({
  src: "../../public/fonts/PearlJean.ttf",
  display: "swap",
})

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f9eac6] text-[#19213E]">
      <h1 className={`text-6xl ${hellasFun.className} font-bold mb-4`}>404</h1>
      <p className={`text-2xl ${hellasFun.className} mb-6`}>Oops! Page not found.</p>
      <Link
        href="/"
        className={`px-6 py-3 rounded-lg bg-[#19213E] text-white hover:bg-[#555] transition ${pearlJean.className}`}
      >
        Go Home
      </Link>
    </div>
  );
}
