"use client";

import { useState } from "react";
import {
  keynoteSpeakers,
  tutorialSessions,
  specialSession,
  wiePanel,
  industrialPanel,
  type Speaker,
} from "@/lib/programData";

function initials(name: string) {
  const cleaned = name.replace(/^(Shri\.?|Smt\.?|Dr\.?|Prof\.?|Mr\.?)\s+/i, "");
  const parts = cleaned.split(" ").filter(Boolean);
  return (parts[0]?.[0] ?? "") + (parts[1]?.[0] ?? "");
}

function Avatar({ name, photoSrc }: { name: string; photoSrc?: string }) {
  if (photoSrc) {
    // eslint-disable-next-line @next/next/no-img-element
    return (
      <img
        src={photoSrc}
        alt={name}
        className="w-16 h-16 rounded-full object-cover border-2 border-[#003f87]/10 shrink-0"
      />
    );
  }
  return (
    <div className="w-16 h-16 rounded-full bg-[#003f87] text-white flex items-center justify-center font-serif font-bold text-lg shrink-0">
      {initials(name)}
    </div>
  );
}

function SpeakerCard({ speaker }: { speaker: Speaker }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-lg border border-[#003f87]/10 bg-white p-5">
      <div className="flex items-start gap-4">
        <Avatar name={speaker.name} photoSrc={speaker.photoSrc} />
        <div className="flex-1 min-w-0">
          <p className="font-serif font-bold text-[16px] text-[#0A1330]">
            {speaker.name}
          </p>
          <p className="text-[13px] text-[#0A1330]/60 mt-0.5">{speaker.title}</p>
          {speaker.talkTitle && (
            <p className="text-[14px] font-semibold text-[#003f87] mt-2">
              {speaker.talkTitle}
            </p>
          )}
        </div>
      </div>
      {speaker.bio && (
        <>
          <button
            onClick={() => setOpen(!open)}
            className="mt-3 text-[13px] font-semibold text-[#c9631a] hover:underline"
          >
            {open ? "Hide bio" : "Read bio"}
          </button>
          {open && (
            <p className="mt-2 text-[13px] text-[#0A1330]/75 leading-relaxed">
              {speaker.bio}
            </p>
          )}
        </>
      )}
    </div>
  );
}

function PanelistRow({ name, title }: { name: string; title: string }) {
  return (
    <div className="flex items-center gap-3 rounded-md border border-[#003f87]/10 bg-white px-4 py-3">
      <Avatar name={name} />
      <div>
        <p className="font-semibold text-[14px] text-[#0A1330]">{name}</p>
        <p className="text-[12px] text-[#0A1330]/60">{title}</p>
      </div>
    </div>
  );
}

export default function ProgramPage() {
  const [showKeynotes, setShowKeynotes] = useState(true);
  const [showTutorials, setShowTutorials] = useState(false);
  const [showSpecial, setShowSpecial] = useState(false);
  const [showWie, setShowWie] = useState(false);
  const [showIndustrial, setShowIndustrial] = useState(false);

  return (
    <main className="bg-[#FBF7F0] text-[#0A1330]">
      {/* Hero */}
      <header className="relative bg-[#003f87] text-white overflow-hidden">
        <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
        <div className="relative max-w-5xl mx-auto px-4 pt-16 pb-14 text-center">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-orange-300 mb-3">
            ICPS 2026
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Keynote Speakers &amp; Tutorial Sessions
          </h1>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-16 space-y-14">
        {/* Overview */}
        <section>
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c9631a] mb-2">
            Overview
          </p>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#003f87] mb-4">
            Overview
          </h2>
          <p className="text-[#0A1330]/85 leading-relaxed text-[15px] mb-3">
            ICPS 2026 features a strong set of keynote talks and tutorials
            addressing current challenges and developments in modern power
            and energy systems. The sessions cover grid operations,
            renewable integration, electricity markets, energy storage,
            digital substations, cyber security, data-center-driven demand
            growth, and emerging AI applications in the power sector.
          </p>
          <p className="text-[#0A1330]/85 leading-relaxed text-[15px]">
            The program brings together experts from industry, government,
            and academia to share practical insights, recent initiatives,
            and technical advancements. Participants will gain a focused
            understanding of key trends shaping future power systems and the
            skills needed to work with new technologies and operational
            approaches.
          </p>
        </section>

        {/* Keynote Speakers */}
        <section>
          <button
            onClick={() => setShowKeynotes(!showKeynotes)}
            className="w-full flex items-center justify-between gap-4 mb-6"
          >
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#003f87]">
              Keynote Speakers
            </h2>
            <svg
              width="16" height="16" viewBox="0 0 10 10"
              className={`shrink-0 transition-transform text-[#003f87] ${showKeynotes ? "rotate-180" : ""}`}
            >
              <path d="M1 3l4 4 4-4" stroke="currentColor" fill="none" strokeWidth="1.5" />
            </svg>
          </button>
          {showKeynotes && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {keynoteSpeakers.map((s) => (
                <SpeakerCard key={s.name} speaker={s} />
              ))}
            </div>
          )}
        </section>

        {/* Tutorial Sessions */}
        <section>
          <button
            onClick={() => setShowTutorials(!showTutorials)}
            className="w-full flex items-center justify-between gap-4 mb-6"
          >
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#003f87]">
              Tutorial Sessions
            </h2>
            <svg
              width="16" height="16" viewBox="0 0 10 10"
              className={`shrink-0 transition-transform text-[#003f87] ${showTutorials ? "rotate-180" : ""}`}
            >
              <path d="M1 3l4 4 4-4" stroke="currentColor" fill="none" strokeWidth="1.5" />
            </svg>
          </button>
          {showTutorials && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {tutorialSessions.map((s) => (
                <SpeakerCard key={s.name} speaker={s} />
              ))}
            </div>
          )}
        </section>

        {/* Special Session */}
        <section>
          <button
            onClick={() => setShowSpecial(!showSpecial)}
            className="w-full flex items-center justify-between gap-4 mb-2"
          >
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#003f87]">
              {specialSession.title}
            </h2>
            <svg
              width="16" height="16" viewBox="0 0 10 10"
              className={`shrink-0 transition-transform text-[#003f87] ${showSpecial ? "rotate-180" : ""}`}
            >
              <path d="M1 3l4 4 4-4" stroke="currentColor" fill="none" strokeWidth="1.5" />
            </svg>
          </button>
          <p className="text-[13px] text-[#0A1330]/60 mb-6">
            <strong className="text-[#0A1330]/80">Chairman:</strong> {specialSession.chairman}
          </p>
          {showSpecial && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {specialSession.panelists.map((p) => (
                <SpeakerCard key={p.name} speaker={p} />
              ))}
            </div>
          )}
        </section>

        {/* WIE Panel */}
        <section>
          <button
            onClick={() => setShowWie(!showWie)}
            className="w-full flex items-center justify-between gap-4 mb-2"
          >
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#003f87]">
              Women in Engineering (WIE) Panel
            </h2>
            <svg
              width="16" height="16" viewBox="0 0 10 10"
              className={`shrink-0 transition-transform text-[#003f87] ${showWie ? "rotate-180" : ""}`}
            >
              <path d="M1 3l4 4 4-4" stroke="currentColor" fill="none" strokeWidth="1.5" />
            </svg>
          </button>
          <p className="text-[13px] text-[#0A1330]/60 mb-3">
            <strong className="text-[#0A1330]/80">Chairman:</strong> {wiePanel.chairman}
          </p>
          <p className="text-[#0A1330]/85 leading-relaxed text-[14px] mb-6">
            ICPS 2026 is happy to host a Women in Engineering (WIE) panel
            featuring distinguished leaders from research, industry, system
            operations, and advanced technology domains. The session
            highlights the contributions, challenges, and future pathways
            for women shaping the global power and energy landscape.
          </p>
          {showWie && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {wiePanel.panelists.map((p) => (
                <PanelistRow key={p.name} name={p.name} title={p.title} />
              ))}
            </div>
          )}
        </section>

        {/* Industrial Panel Discussion */}
        <section>
          <button
            onClick={() => setShowIndustrial(!showIndustrial)}
            className="w-full flex items-center justify-between gap-4 mb-2"
          >
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#003f87]">
              Industrial Panel Discussion
            </h2>
            <svg
              width="16" height="16" viewBox="0 0 10 10"
              className={`shrink-0 transition-transform text-[#003f87] ${showIndustrial ? "rotate-180" : ""}`}
            >
              <path d="M1 3l4 4 4-4" stroke="currentColor" fill="none" strokeWidth="1.5" />
            </svg>
          </button>
          <p className="text-[13px] text-[#0A1330]/60 mb-6">
            <strong className="text-[#0A1330]/80">Chairman:</strong> {industrialPanel.chairman}
          </p>
          {showIndustrial && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {industrialPanel.panelists.map((p) => (
                <PanelistRow key={p.name} name={p.name} title={p.title} />
              ))}
            </div>
          )}
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
