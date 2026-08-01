import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | ICPS 2026",
  description: "Contact details for ICPS 2026, hosted at IIT Jammu, India.",
};

// NOTE: names/emails copied as-is from ICPS 2025 for reference —
// replace with the actual ICPS 2026 / IIT Jammu contacts before publishing.
const contactCards = [
  {
    label: "General Chair",
    name: "Prof. Ravikumar Bhimasingu",
    lines: ["Department of Electrical Engineering, IIT Hyderabad"],
    email: "chair@icps2025.in",
  },
  {
    label: "For General Inquiries",
    name: "General Conference Queries",
    lines: [
      "If you have any general inquiries about the conference, please contact us at:",
    ],
    email: "icps2025@ee.iith.ac.in",
  },
];

export default function ContactUsPage() {
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
            Contact Us
          </h1>
        </div>
      </header>

      {/* Intro */}
      <section className="max-w-3xl mx-auto px-4 pt-16 pb-4 text-center">
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c9631a] mb-2">
          Get in Touch
        </p>
        <p className="text-[#0A1330]/80 leading-relaxed">
          If you have any questions or require further clarification
          regarding ICPS 2026, please feel free to reach out to us. Our team
          will be pleased to provide the necessary support.
        </p>
      </section>

      {/* Contact cards */}
      <section className="max-w-3xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {contactCards.map((card) => (
            <div
              key={card.label}
              className="rounded-lg border border-[#003f87]/10 bg-white overflow-hidden shadow-sm flex flex-col"
            >
              <div className="bg-[#003f87] text-white px-5 py-3">
                <h2 className="font-semibold text-[15px]">{card.label}</h2>
              </div>
              <div className="px-5 py-5 flex-1 flex flex-col gap-2">
                <p className="font-semibold text-[15px] text-[#0A1330]">
                  {card.name}
                </p>
                {card.lines.map((line, i) => (
                  <p key={i} className="text-[13px] text-[#0A1330]/70 leading-relaxed">
                    {line}
                  </p>
                ))}
                <a
                  href={`mailto:${card.email}`}
                  className="mt-2 inline-flex items-center gap-2 text-[#003f87] font-semibold text-sm hover:text-[#c9631a] transition-colors"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 6-10 7L2 6" />
                  </svg>
                  {card.email}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Organizing institute */}
        <div className="mt-6 rounded-lg border border-[#003f87]/10 bg-white overflow-hidden shadow-sm">
          <div className="bg-[#003f87] text-white px-5 py-3">
            <h2 className="font-semibold text-[15px]">Organizing Institute</h2>
          </div>
          <div className="px-5 py-5 flex items-start gap-3">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#003f87"
              strokeWidth="2"
              className="mt-0.5 shrink-0"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <p className="text-[14px] text-[#0A1330]/80">
              <span className="font-semibold text-[#0A1330]">Address: </span>
              Department of Electrical Engineering, IIT Jammu, India
            </p>
          </div>
        </div>
      </section>

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