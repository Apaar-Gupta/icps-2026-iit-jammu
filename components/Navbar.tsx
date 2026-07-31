"use client";

import { useState } from "react";
import Link from "next/link";
import { navMenu, conference } from "@/lib/siteData";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(
    null
  );

  return (
    <nav className="sticky top-0 z-50 bg-navy-900 text-cream shadow-lg shadow-navy-950/30">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <Link
          href="/"
          className="font-display font-bold text-lg tracking-wide whitespace-nowrap"
        >
          {conference.shortName}
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-7">
          {navMenu.map((item) => (
            <li key={item.label} className="relative group">
              {item.dropdown ? (
                <>
                  <button className="flex items-center gap-1 px-4 py-2 text-sm font-semibold rounded-md hover:bg-navy-700 transition-colors">
                    {item.label}
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      className="mt-0.5 opacity-70 transition-transform group-hover:rotate-180"
                    >
                      <path
                        d="M1 3l4 4 4-4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        fill="none"
                      />
                    </svg>
                  </button>
                  <div className="invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 absolute left-0 top-full pt-2 transition-all duration-150">
                    <div className="bg-navy-800 rounded-md shadow-xl overflow-hidden min-w-[220px] border border-navy-700">
                      {item.dropdown.map((sub) => (
                        <a
                          key={sub.label}
                          href={sub.href}
                          className="block px-4 py-2.5 text-sm hover:bg-navy-700 hover:text-saffron-400 transition-colors"
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
                  className="block px-4 py-2 text-sm font-semibold rounded-md hover:bg-navy-700 transition-colors"
                >
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2"
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

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden border-t border-navy-700 bg-navy-900">
          {navMenu.map((item) => (
            <div key={item.label} className="border-b border-navy-800">
              {item.dropdown ? (
                <>
                  <button
                    className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold"
                    onClick={() =>
                      setOpenMobileDropdown((v) =>
                        v === item.label ? null : item.label
                      )
                    }
                  >
                    {item.label}
                    <span>{openMobileDropdown === item.label ? "−" : "+"}</span>
                  </button>
                  {openMobileDropdown === item.label && (
                    <div className="bg-navy-800 pb-2">
                      {item.dropdown.map((sub) => (
                        <a
                          key={sub.label}
                          href={sub.href}
                          className="block px-6 py-2 text-sm text-cream/80 hover:text-saffron-400"
                        >
                          {sub.label}
                        </a>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <a href={item.href} className="block px-4 py-3 text-sm font-semibold">
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
