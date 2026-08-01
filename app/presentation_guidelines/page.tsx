"use client";

import { useState } from "react";
import type { ReactNode } from "react";

// NOTE: text copied as-is from ICPS 2025 for reference — update dates,
// durations, and file-size limits as needed for ICPS 2026 / IIT Jammu.
// All hrefs are left as "#" placeholders — fill in the real links
// (template downloads, upload form) yourself.

const overview = [
  "All accepted papers must be presented at ICPS 2026 to be eligible for IEEE Xplore submission.",
  "Authors must upload the final presentation PDF using the form linked below.",
  "Poster presenters are required to bring a printed poster (A0 size). No upload required.",
];

type Step = { title: string; body: ReactNode };

const steps: Step[] = [
  {
    title: "Step 1: Oral Presentation Guidelines",
    body: (
      <>
        <p className="mb-3">
          Oral presentations at ICPS 2026 follow a tightly managed schedule.
          Please review the guidelines below to ensure a smooth and timely
          session:
        </p>
        <ul className="space-y-2 list-disc list-inside">
          <li>
            <strong>Total duration:</strong> 15 minutes (including Q&amp;A)
          </li>
          <li>
            <strong>PDF is the preferred format</strong> for all
            presentation uploads. If you prepare your slides in PPT/PPTX,
            please convert them to <strong>PDF</strong> before submission.
          </li>
          <li>
            The maximum file size allowed is <strong>10 MB</strong>.
            Compress the PDF if needed.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Step 2: Oral and Poster Presentation Templates",
    body: (
      <>
        <p className="mb-4">
          Authors may optionally use the official ICPS 2026 presentation
          template:
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#003f87] hover:bg-[#003f87]/90 text-white font-semibold text-sm transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 3v12m0 0 4-4m-4 4-4-4" />
              <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
            </svg>
            Download Oral Presentation Template
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-[#003f87] text-[#003f87] hover:bg-[#003f87]/5 font-semibold text-sm transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 3v12m0 0 4-4m-4 4-4-4" />
              <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
            </svg>
            Download Poster Presentation Template
          </a>
        </div>
      </>
    ),
  },
  {
    title: "Step 3: Uploading Your Final Presentation (Oral Presentations Only)",
    body: (
      <>
        <p className="mb-4">
          Please upload the final PDF version of your oral presentation
          using the link below:
        </p>
        <a
          href="#"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#003f87] hover:bg-[#003f87]/90 text-white font-semibold text-sm transition-colors mb-4"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6" />
          </svg>
          Upload Presentation (Google Form)
        </a>
        <div className="rounded-md border-l-4 border-[#c9631a] bg-[#c9631a]/5 px-4 py-3">
          <p className="text-[14px] text-[#0A1330]/85">
            <strong className="text-[#c9631a]">Upload Deadline:</strong> 5
            December 2026
          </p>
          <p className="text-[13px] text-[#0A1330]/60 mt-1">
            No modifications will be accepted after the deadline.
          </p>
        </div>
      </>
    ),
  },
  {
    title: "Step 4: Poster Presentation Guidelines",
    body: (
      <>
        <p className="mb-3">
          Poster presenters must bring a printed poster to the conference.
        </p>
        <ul className="space-y-2 list-disc list-inside">
          <li>
            <strong>No online upload</strong> is required for posters.
          </li>
          <li>
            Poster boards support <strong>A0 size</strong> (841 × 1189 mm)
            in portrait orientation.
          </li>
          <li>
            Please ensure high-quality printing with readable fonts and
            clear visuals.
          </li>
        </ul>
      </>
    ),
  },
];

const additionalNotes = [
  "Volunteers will be available at each session room to assist presenters.",
  "Presentation files for oral sessions will be loaded onto the room computer before the session starts.",
  "It is recommended to test your slides during the break before your session.",
];

export default function PresentationGuidelinesPage() {
  const [openStep, setOpenStep] = useState<number | null>(0);

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
            Instructions for Paper &amp; Poster Presentations
          </h1>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 py-16 space-y-14">
        {/* Intro */}
        <section>
          <p className="text-[#0A1330]/85 leading-relaxed text-[15px]">
            This page provides essential guidelines for authors presenting
            their work at <strong>ICPS 2026</strong>. Please read the
            instructions carefully and complete the presentation upload
            before the deadline.
          </p>
        </section>

        {/* Overview */}
        <section>
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c9631a] mb-2">
            Overview
          </p>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#003f87] mb-2">
            Overview
          </h2>
          <div className="w-16 h-[3px] bg-[#c9631a] rounded-full mb-6" />

          <div className="space-y-3">
            {overview.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-lg border border-[#003f87]/10 bg-white px-5 py-4"
              >
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#c9631a] shrink-0" />
                <p className="text-[14px] text-[#0A1330]/85 leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Accordion steps */}
        <section>
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c9631a] mb-2">
            Details
          </p>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#003f87] mb-6">
            Step-by-Step Instructions
          </h2>

          <div className="space-y-3">
            {steps.map((step, i) => {
              const isOpen = openStep === i;
              return (
                <div
                  key={step.title}
                  className="rounded-lg border border-[#003f87]/10 bg-white overflow-hidden"
                >
                  <button
                    onClick={() => setOpenStep(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="font-semibold text-[15px] text-[#003f87]">
                      {step.title}
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
                    <div className="px-5 pb-5 text-[14px] text-[#0A1330]/85 leading-relaxed border-t border-[#003f87]/10 pt-4">
                      {step.body}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Additional Notes */}
        <section>
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c9631a] mb-2">
            Good to Know
          </p>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#003f87] mb-2">
            Additional Notes
          </h2>
          <div className="w-16 h-[3px] bg-[#c9631a] rounded-full mb-6" />

          <ul className="space-y-2">
            {additionalNotes.map((note, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-[14px] text-[#0A1330]/85 leading-relaxed"
              >
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#003f87] shrink-0" />
                {note}
              </li>
            ))}
          </ul>
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