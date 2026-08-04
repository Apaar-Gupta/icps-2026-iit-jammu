import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sponsorship | ICPS 2026",
  description:
    "Sponsorship opportunities and tiers for ICPS 2026, hosted at IIT Jammu, India.",
};

// NOTE: text/figures copied as-is from ICPS 2025 for reference — update as
// needed for ICPS 2026 / IIT Jammu. All hrefs / mailtos are left as "#"
// placeholders — fill in the real links yourself.

type Tier = {
  name: string;
  icon: string;
  amount: string;
  benefits: string[];
};

const tiers: Tier[] = [
  {
    name: "Platinum Sponsor",
    icon: "💎",
    amount: "Rs. 8 Lakhs + GST",
    benefits: [
      "Logo on the conference banner.",
      "Slide display of logo at the start of each session.",
      "Company logo on homepage & hyperlink to company website.",
      "Exhibition space*.",
      "Complimentary registration** for 8 delegates.",
      "Invitation to the conference dinner for registered delegates.",
    ],
  },
  {
    name: "Gold Sponsor",
    icon: "🥇",
    amount: "Rs. 6 Lakhs + GST",
    benefits: [
      "Slide display of logo at the start of each session.",
      "Company logo on homepage & hyperlink to company website.",
      "Exhibition space*.",
      "Complimentary registration** for 6 delegates.",
      "Invitation to the conference dinner for registered delegates.",
    ],
  },
  {
    name: "Silver Sponsor",
    icon: "🏛️",
    amount: "Rs. 4 Lakhs + GST",
    benefits: [
      "Company logo on homepage & hyperlink to company website.",
      "Exhibition space*.",
      "Complimentary registration** for 4 delegates.",
      "Invitation to the conference dinner for registered delegates.",
    ],
  },
  {
    name: "Bronze Sponsor",
    icon: "🔴",
    amount: "Rs. 2 Lakhs + GST",
    benefits: [
      "Company logo on homepage & hyperlink to company website.",
      "Exhibition space*.",
      "Complimentary registration** for 2 delegates.",
      "Invitation to the conference dinner for registered delegates.",
    ],
  },
  {
    name: "Copper",
    icon: "🏪",
    amount: "Rs. 50,000 + GST",
    benefits: ["Exhibition space*.", "Complimentary registration** for 1 delegate."],
  },
];

const paymentTerms: string[] = [
  "Once we receive the Google form, you will be contacted for the sponsorship agreement.",
  "Invoice will be issued on receipt of the signed agreement.",
  "Payments must be cleared within 30 days of raising the invoice or by [sponsorship payment deadline], whichever is earlier.",
  "Otherwise, participation may be cancelled with applicable charges.",
];

export default function SponsorshipPage() {
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
            Sponsorship Opportunities
          </h1>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-16 space-y-14">
        {/* Become a Sponsor */}
        <section>
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c9631a] mb-2">
            Sponsorship
          </p>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#003f87] mb-2">
            Become a Sponsor of ICPS 2026
          </h2>
          <div className="w-16 h-[3px] bg-[#c9631a] rounded-full mb-6" />

          <div className="space-y-5 text-[#0A1330]/85 leading-relaxed text-[15px]">
            <p>
              ICPS 2026 provides a unique opportunity to highlight your
              organization&apos;s innovations in the power systems and energy
              technology sectors. Sponsorship offers your company high
              visibility among a diverse audience of industry professionals,
              academic researchers, and technical experts. With a strong
              focus on smart technologies, renewable energy, and AI-driven
              solutions, the conference serves as a key platform for engaging
              with stakeholders who are driving the future of global power
              systems.
            </p>

            <p>
              For sponsorship-related queries or to express interest in
              supporting ICPS 2026, please contact us at{" "}
              <a
                href="#"
                className="text-[#003f87] font-semibold underline decoration-[#c9631a]/40 hover:text-[#c9631a] transition-colors"
              >
                chair@icps2026.in
              </a>
              .
            </p>
          </div>
        </section>

        {/* Sponsorship Tiers */}
        <section>
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c9631a] mb-2">
            Tiers
          </p>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#003f87] mb-2">
            Sponsorship Tiers
          </h2>
          <div className="w-16 h-[3px] bg-[#c9631a] rounded-full mb-6" />

          <p className="text-[#0A1330]/85 leading-relaxed text-[15px] mb-8">
            Multiple sponsorship tiers are available, each offering tailored
            benefits to maximize your organization&apos;s exposure and
            participation. A summary of the sponsorship tiers is also
            available in this{" "}
            <a
              href="#"
              className="text-[#003f87] font-semibold underline decoration-[#c9631a]/40 hover:text-[#c9631a] transition-colors"
            >
              sponsorship flyer
            </a>
            .
          </p>

          {/* Tier Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className="rounded-lg border border-[#003f87]/20 overflow-hidden shadow-sm bg-white"
              >
                <div className="bg-[#003f87]/10 px-5 py-4">
                  <h3 className="font-semibold text-[#003f87] text-[16px] sm:text-[17px] flex items-center gap-2">
                    <span aria-hidden="true">{tier.icon}</span>
                    {tier.name} ({tier.amount})
                  </h3>
                </div>
                <ul className="px-5 py-4 space-y-2 text-[14px] text-[#0A1330]/85 leading-relaxed list-disc list-inside">
                  {tier.benefits.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-6 text-[13px] text-[#0A1330]/60">
            * and ** terms (exhibition space and complimentary registration
            details) to be specified in the sponsorship agreement.
          </p>
        </section>

        {/* Sponsorship Application & Terms */}
        <section>
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c9631a] mb-2">
            Application
          </p>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#003f87] mb-2">
            Sponsorship Application &amp; Important Terms
          </h2>
          <div className="w-16 h-[3px] bg-[#c9631a] rounded-full mb-6" />

          <p className="text-[#0A1330]/85 leading-relaxed text-[15px] mb-6">
            Please Scan or Click this code to fill the Sponsorship Form
          </p>

          {/* QR code placeholder */}
          <div className="flex justify-center mb-6">
            <a
              href="#"
              className="w-40 h-40 flex items-center justify-center border border-[#003f87]/20 bg-white rounded-md text-[12px] text-[#0A1330]/50 text-center px-3"
            >
              QR code image goes here
            </a>
          </div>

          <p className="text-[#0A1330]/85 leading-relaxed text-[15px] mb-10">
            Alternatively, you can fill the sponsorship form by clicking{" "}
            <a
              href="#"
              className="text-[#003f87] font-semibold underline decoration-[#c9631a]/40 hover:text-[#c9631a] transition-colors"
            >
              here
            </a>
            .
          </p>

          <h3 className="font-semibold text-[#003f87] text-[16px] mb-3 pb-2 border-b border-[#003f87]/15">
            Important Sponsorship Process &amp; Payment Terms:
          </h3>

          <ul className="space-y-2 text-[14px] text-[#0A1330]/85 leading-relaxed list-disc list-inside">
            {paymentTerms.map((term, i) => (
              <li key={i}>{term}</li>
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