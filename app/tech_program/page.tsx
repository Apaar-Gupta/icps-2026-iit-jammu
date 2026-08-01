"use client";

import { useState } from "react";
import { daySchedules, paperSessions, posterSession } from "@/lib/techProgramData";

export default function TechProgramPage() {
  const [openDay, setOpenDay] = useState<number | null>(0);
  const [openSession, setOpenSession] = useState<number | null>(null);
  const [posterOpen, setPosterOpen] = useState(false);

  return (
    <main className="bg-[#FBF7F0] text-[#0A1330]">
      {/* Hero */}
      <header className="relative bg-[#003f87] text-white overflow-hidden">
        <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
        <div className="relative max-w-5xl mx-auto px-4 pt-16 pb-14 text-center">
          <p className="text-xl font-semibold tracking-[0.25em] uppercase text-orange-300 mb-3">
            ICPS 2026
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Technical Program
          </h1>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-16 space-y-14">
        {/* Program at a glance */}
        <section>
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c9631a] mb-2">
            Overview
          </p>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#003f87] mb-2">
            Program at a Glance
          </h2>
          <div className="w-16 h-[3px] bg-[#c9631a] rounded-full mb-6" />
          <p className="text-[#0A1330]/85 leading-relaxed text-[15px] mb-6 max-w-3xl">
            The ICPS 2026 Technical Program spans over a three-day program
            and features a structured blend of tutorials, keynote lectures,
            parallel paper sessions, poster presentations, and thematic
            discussions spanning multiple tracks within power systems, power
            electronics, optimization, data analytics, and emerging
            technologies.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#003f87] hover:bg-[#003f87]/90 text-white font-semibold text-sm transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 3v12m0 0 4-4m-4 4-4-4" />
                <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
              </svg>
              Program Overview
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-[#003f87] text-[#003f87] hover:bg-[#003f87]/5 font-semibold text-sm transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 3v12m0 0 4-4m-4 4-4-4" />
                <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
              </svg>
              Session-wise Schedule
            </a>
          </div>

          <div className="rounded-md border-l-4 border-[#c9631a] bg-[#c9631a]/5 px-4 py-3 mb-3">
            <p className="text-[14px] text-[#0A1330]/85">
              <strong className="text-[#c9631a]">Note:</strong> This is the
              tentative technical program. Room/venue allocation and final
              timing updates will follow.
            </p>
          </div>
          <div className="rounded-md border-l-4 border-[#003f87] bg-[#003f87]/5 px-4 py-3">
            <p className="text-[14px] text-[#0A1330]/85">
              <strong className="text-[#003f87]">Paper placement details</strong>{" "}
              for all oral and poster sessions are provided in the{" "}
              <em>Paper Session Allocation</em> section further down this
              page.
            </p>
          </div>
        </section>

        {/* Day-wise schedule */}
        <section>
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c9631a] mb-2">
            Schedule
          </p>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#003f87] mb-6">
            Day-wise Schedule
          </h2>

          <div className="space-y-3">
            {daySchedules.map((d, i) => {
              const isOpen = openDay === i;
              return (
                <div
                  key={d.day}
                  className="rounded-lg border border-[#003f87]/10 bg-white overflow-hidden"
                >
                  <button
                    onClick={() => setOpenDay(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="font-semibold text-[15px] text-[#003f87]">
                      {d.day} — {d.dateLabel}
                    </span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 10 10"
                      className={`shrink-0 transition-transform text-[#003f87] ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <path d="M1 3l4 4 4-4" stroke="currentColor" fill="none" strokeWidth="1.5" />
                    </svg>
                  </button>
                  {isOpen && (
                    <div className="border-t border-[#003f87]/10">
                      <p className="px-5 pt-4 pb-2 text-[13px] text-[#0A1330]/60 italic">
                        {d.note}
                      </p>
                      <div className="overflow-x-auto px-5 pb-5">
                        <table className="w-full text-sm min-w-[600px]">
                          <thead>
                            <tr className="bg-[#003f87] text-white text-left">
                              <th className="px-3 py-2 font-semibold rounded-l-md">Time</th>
                              <th className="px-3 py-2 font-semibold">Session</th>
                              <th className="px-3 py-2 font-semibold rounded-r-md">Details</th>
                            </tr>
                          </thead>
                          <tbody>
                            {d.rows.map((row, ri) => (
                              <tr
                                key={ri}
                                className={ri % 2 === 0 ? "bg-white" : "bg-[#003f87]/[0.03]"}
                              >
                                <td className="px-3 py-2 align-top font-semibold text-[#003f87] whitespace-nowrap">
                                  {row.time}
                                </td>
                                <td className="px-3 py-2 align-top font-medium text-[#0A1330]">
                                  {row.session}
                                </td>
                                <td className="px-3 py-2 align-top text-[#0A1330]/80">
                                  {row.details}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Paper Session Details */}
        <section>
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c9631a] mb-2">
            Allocation
          </p>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#003f87] mb-2">
            Paper Session Details
          </h2>
          <div className="w-16 h-[3px] bg-[#c9631a] rounded-full mb-3" />
          <p className="text-[#0A1330]/85 leading-relaxed text-[15px] mb-6 max-w-3xl">
            Below is the complete listing of papers assigned to each
            technical session. The sessions have been structured by theme to
            ensure coherence and smooth flow of presentations. Click on a
            session title below to expand and view the complete paper
            allotment for each session.
          </p>

          <div className="space-y-3">
            {paperSessions.map((s, i) => {
              const isOpen = openSession === i;
              return (
                <div
                  key={s.title}
                  className="rounded-lg border border-[#003f87]/10 bg-white overflow-hidden"
                >
                  <button
                    onClick={() => setOpenSession(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="font-semibold text-[14px] text-[#003f87]">
                      {s.title}{" "}
                      <span className="font-normal text-[#0A1330]/50">
                        ({s.time})
                      </span>
                    </span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 10 10"
                      className={`shrink-0 transition-transform text-[#003f87] ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <path d="M1 3l4 4 4-4" stroke="currentColor" fill="none" strokeWidth="1.5" />
                    </svg>
                  </button>
                  {isOpen && (
                    <div className="overflow-x-auto border-t border-[#003f87]/10 px-5 py-4">
                      <table className="w-full text-sm min-w-[600px]">
                        <thead>
                          <tr className="bg-[#003f87] text-white text-left">
                            <th className="px-3 py-2 font-semibold rounded-l-md w-16">Paper ID</th>
                            <th className="px-3 py-2 font-semibold">Title</th>
                            <th className="px-3 py-2 font-semibold rounded-r-md">Authors</th>
                          </tr>
                        </thead>
                        <tbody>
                          {s.papers.map((p, pi) => (
                            <tr
                              key={p.id}
                              className={pi % 2 === 0 ? "bg-white" : "bg-[#003f87]/[0.03]"}
                            >
                              <td className="px-3 py-2 align-top font-semibold text-[#003f87]">
                                {p.id}
                              </td>
                              <td className="px-3 py-2 align-top text-[#0A1330]">
                                {p.title}
                              </td>
                              <td className="px-3 py-2 align-top text-[#0A1330]/70">
                                {p.authors}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Poster Session Details */}
        <section>
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c9631a] mb-2">
            Posters
          </p>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#003f87] mb-2">
            Poster Session Details
          </h2>
          <div className="w-16 h-[3px] bg-[#c9631a] rounded-full mb-6" />
          <p className="text-[#0A1330]/85 leading-relaxed text-[15px] mb-6 max-w-3xl">
            Below is the complete listing of papers assigned to the poster
            session. Authors are requested to be present at their posters
            during the dedicated poster session time.
          </p>

          <div className="rounded-lg border border-[#003f87]/10 bg-white overflow-hidden">
            <button
              onClick={() => setPosterOpen(!posterOpen)}
              className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="font-semibold text-[14px] text-[#003f87]">
                {posterSession.title}{" "}
                <span className="font-normal text-[#0A1330]/50">
                  ({posterSession.time})
                </span>
              </span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 10 10"
                className={`shrink-0 transition-transform text-[#003f87] ${
                  posterOpen ? "rotate-180" : ""
                }`}
              >
                <path d="M1 3l4 4 4-4" stroke="currentColor" fill="none" strokeWidth="1.5" />
              </svg>
            </button>
            {posterOpen && (
              <div className="overflow-x-auto border-t border-[#003f87]/10 px-5 py-4">
                <table className="w-full text-sm min-w-[600px]">
                  <thead>
                    <tr className="bg-[#003f87] text-white text-left">
                      <th className="px-3 py-2 font-semibold rounded-l-md w-16">Paper ID</th>
                      <th className="px-3 py-2 font-semibold">Title</th>
                      <th className="px-3 py-2 font-semibold rounded-r-md">Authors</th>
                    </tr>
                  </thead>
                  <tbody>
                    {posterSession.papers.map((p, pi) => (
                      <tr
                        key={p.id}
                        className={pi % 2 === 0 ? "bg-white" : "bg-[#003f87]/[0.03]"}
                      >
                        <td className="px-3 py-2 align-top font-semibold text-[#003f87]">
                          {p.id}
                        </td>
                        <td className="px-3 py-2 align-top text-[#0A1330]">
                          {p.title}
                        </td>
                        <td className="px-3 py-2 align-top text-[#0A1330]/70">
                          {p.authors}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-[#003f87] text-white/70 text-sm">
        <div className="max-w-6xl mx-auto px-4 py-6 text-center">
          © {new Date().getFullYear()} ICPS 2026. All rights reserved. | ICPS
          2026 is organized by the Department of Electrical Engineering, IIT
          Jammu.
        </div>
      </footer>
    </main>
  );
}
