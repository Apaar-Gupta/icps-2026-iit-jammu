"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { navMenu, conference } from "@/lib/siteData";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(
    null
  );

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#003f87] text-white shadow-lg shadow-black/20">
      <div className="mx-auto flex h-20 w-full max-w-[1440px] items-center justify-between gap-4 px-4 lg:px-6">
        {/* ================= Left: Logo + Name ================= */}
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <div className="relative h-14 w-36 sm:h-16 sm:w-44 shrink-0">
            <Image
              src="/images/iit-logo-2.png"
              alt="IIT Jammu Logo"
              fill
              priority
              quality={100}
              sizes="(max-width: 640px) 144px, 176px"
              className="object-contain object-left"
            />
          </div>

          <span className="font-display ml-1 text-2xl font-bold tracking-wide whitespace-nowrap sm:ml-2 sm:text-3xl">
            {conference.shortName}
          </span>
        </Link>

        {/* ================= Right: Links + Flag + Toggle ================= */}
        <div className="flex min-w-0 items-center gap-3 xl:gap-4">
          {/* Desktop navigation */}
          <ul className="hidden xl:flex items-center gap-1">
            {navMenu.map((item) => (
              <li key={item.label} className="relative group">
                {item.dropdown ? (
                  <>
                    <button className="flex items-center gap-1 whitespace-nowrap rounded-md px-3 py-2 text-sm font-semibold transition-colors duration-200 hover:bg-[#0052ad]">
                      {item.label}
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        className="mt-0.5 opacity-80 transition-transform group-hover:rotate-180"
                      >
                        <path
                          d="M1 3l4 4 4-4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          fill="none"
                        />
                      </svg>
                    </button>

                    {/* Dropdown (right-aligned so it never overflows the screen) */}
                    <div className="invisible absolute right-0 top-full translate-y-1 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                      <div className="min-w-[220px] overflow-hidden rounded-md border border-blue-700 bg-[#003f87] shadow-xl">
                        {item.dropdown.map((sub) => (
                          <a
                            key={sub.label}
                            href={sub.href}
                            className="block whitespace-nowrap px-4 py-2.5 text-sm text-white transition-colors hover:bg-[#0052ad] hover:text-yellow-300"
                          >
                            {sub.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <a
                    href={item.href}
                    className="block whitespace-nowrap rounded-md px-3 py-2 text-sm font-semibold transition-colors duration-200 hover:bg-[#0052ad]"
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>

          {/* Indian flag, always inside the bar */}
          <div className="relative h-7 w-10 shrink-0 overflow-hidden rounded shadow-md md:h-8 md:w-12">
            <Image
              src="/images/indian-flag.gif"
              alt="Indian Flag"
              fill
              unoptimized
              sizes="48px"
              className="object-cover"
            />
          </div>

          {/* Mobile toggle */}
          <button
            className="shrink-0 p-2 xl:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              {mobileOpen ? (
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M3 6h18M3 12h18M3 18h18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* ================= Mobile / tablet navigation ================= */}
      {mobileOpen && (
        <div className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-blue-700 bg-[#003f87] xl:hidden">
          {navMenu.map((item) => (
            <div key={item.label} className="border-b border-blue-700">
              {item.dropdown ? (
                <>
                  <button
                    className="flex w-full items-center justify-between px-4 py-3 text-sm font-semibold transition-colors hover:bg-[#0052ad]"
                    onClick={() =>
                      setOpenMobileDropdown((v) =>
                        v === item.label ? null : item.label
                      )
                    }
                  >
                    {item.label}
                    <span className="text-lg">
                      {openMobileDropdown === item.label ? "\u2212" : "+"}
                    </span>
                  </button>

                  {openMobileDropdown === item.label && (
                    <div className="bg-[#004a99] pb-2">
                      {item.dropdown.map((sub) => (
                        <a
                          key={sub.label}
                          href={sub.href}
                          className="block px-6 py-2 text-sm text-white/80 transition-colors hover:bg-[#0052ad] hover:text-yellow-300"
                        >
                          {sub.label}
                        </a>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <a
                  href={item.href}
                  className="block px-4 py-3 text-sm font-semibold transition-colors hover:bg-[#0052ad]"
                >
                  {item.label}
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}