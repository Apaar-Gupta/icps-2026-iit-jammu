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
    <nav className="sticky top-0 z-50 bg-[#003f87] text-white shadow-lg shadow-black/20">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <Link
          href="/"
          className="font-display font-bold text-lg tracking-wide whitespace-nowrap"
        >
          {conference.shortName}
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-7">
          {navMenu.map((item) => (
            <li key={item.label} className="relative group">
              {item.dropdown ? (
                <>
                  <button className="flex items-center gap-1 px-4 py-2 text-sm font-semibold rounded-md hover:bg-[#0052ad] transition-colors duration-200">
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

                  {/* Dropdown */}
                  <div className="invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 absolute left-0 top-full pt-2 transition-all duration-200">
                    <div className="bg-[#003f87] rounded-md shadow-xl overflow-hidden min-w-[220px] border border-blue-700">
                      {item.dropdown.map((sub) => (
                        <a
                          key={sub.label}
                          href={sub.href}
                          className="block px-4 py-2.5 text-sm text-white hover:bg-[#0052ad] hover:text-yellow-300 transition-colors"
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
                  className="block px-4 py-2 text-sm font-semibold rounded-md hover:bg-[#0052ad] transition-colors duration-200"
                >
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
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

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="md:hidden border-t border-blue-700 bg-[#003f87]">
          {navMenu.map((item) => (
            <div key={item.label} className="border-b border-blue-700">
              {item.dropdown ? (
                <>
                  <button
                    className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold hover:bg-[#0052ad] transition-colors"
                    onClick={() =>
                      setOpenMobileDropdown((v) =>
                        v === item.label ? null : item.label
                      )
                    }
                  >
                    {item.label}
                    <span className="text-lg">
                      {openMobileDropdown === item.label ? "−" : "+"}
                    </span>
                  </button>

                  {openMobileDropdown === item.label && (
                    <div className="bg-[#004a99] pb-2">
                      {item.dropdown.map((sub) => (
                        <a
                          key={sub.label}
                          href={sub.href}
                          className="block px-6 py-2 text-sm text-white/80 hover:bg-[#0052ad] hover:text-yellow-300 transition-colors"
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
                  className="block px-4 py-3 text-sm font-semibold hover:bg-[#0052ad] transition-colors"
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