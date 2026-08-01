import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Call for Papers | ICPS 2026",
  description:
    "Call for Papers for ICPS 2026, hosted at IIT Jammu, India.",
};

// NOTE: text copied as-is from ICPS 2025 for reference — update dates,
// theme wording, and topics as needed for ICPS 2026 / IIT Jammu.
// All hrefs below are left as "#" placeholders — fill in the real
// links yourself once the pages/files exist.

const topics = [
  "Smart Grid and Power Systems",
  "Renewable Energy Systems",
  "Artificial Intelligence and Data Analytics in Power Grids",
  "Power System Protection, Stability, and Optimization",
  "Grid Resilience and Security",
  "Power System Planning and Operations",
  "Control in Power Systems/Power Electronics",
  "Electric Vehicles and Drives",
  "Emerging Technologies in Power Grids",
  "Grid Policy and Regulations",
];

const importantDates = [
  {
    label: "Full Paper Submission Deadline",
    
    current: "31 August 2025",
  },
  { label: "Notification of Acceptance", current: "31 Aug 2025 (onwards)" },
];

export default function CallForPapersPage() {
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
            Call for Papers
          </h1>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 py-16 space-y-14">
        {/* Intro */}
        <section>
          <p className="text-[#0A1330]/85 leading-relaxed text-[15px]">
            The <strong>Indian Institute of Technology (IIT) Jammu</strong> is
            excited to host the 12th edition of the{" "}
            <strong>International Conference on Power Systems (ICPS 2026)</strong>,
            which will take place from <strong>7th to 9th December 2025</strong>.
            Since its establishment in 2004 by prominent academicians from
            India and Nepal, ICPS has become a leading biennial event,
            bringing together experts to explore groundbreaking advancements
            in power systems.
          </p>

          
            <a href="#"
            className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#003f87] hover:bg-[#003f87]/90 text-white font-semibold text-sm transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 3v12m0 0 4-4m-4 4-4-4" />
              <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
            </svg>
            Download Call for Papers (PDF)
          </a>
        </section>

        {/* Conference Theme */}
        <section>
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c9631a] mb-2">
            Theme
          </p>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#003f87] mb-2">
            Conference Theme
          </h2>
          <div className="w-16 h-[3px] bg-[#c9631a] rounded-full mb-6" />
          <p className="text-[#0A1330]/85 leading-relaxed text-[15px]">
            The theme of ICPS 2026 is{" "}
            <strong>
              &ldquo;Leveraging Smart Technologies for Clean, Resilient, and
              Secure Power Systems&rdquo;
            </strong>
            . The conference will highlight the transformative role of
            emerging technologies in creating power systems that are
            sustainable, secure, and resilient. As the power sector adapts to
            meet global demands for energy security and sustainability, ICPS
            2026 will explore key innovations in smart grids, renewable
            energy integration, and AI-driven solutions.
          </p>
        </section>

        {/* Topics of Interest */}
        <section>
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c9631a] mb-2">
            Scope
          </p>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#003f87] mb-2">
            Topics of Interest
          </h2>
          <div className="w-16 h-[3px] bg-[#c9631a] rounded-full mb-6" />
          <p className="text-[#0A1330]/85 leading-relaxed text-[15px] mb-5">
            We invite authors to submit original research papers that explore
            topics related to, but not limited to, the following areas:
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {topics.map((topic) => (
              <li
                key={topic}
                className="flex items-start gap-2 rounded-md border border-[#003f87]/10 bg-white px-4 py-3 text-[14px] text-[#0A1330]/90"
              >
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#c9631a] shrink-0" />
                {topic}
              </li>
            ))}
          </ul>

          <p className="mt-6 text-[#0A1330]/85 leading-relaxed text-[15px]">
            A comprehensive list of thematic areas can be found in the{" "}
            <a href="conference_tracks" className="text-[#003f87] font-semibold underline decoration-[#c9631a]/40 hover:text-[#c9631a] transition-colors">
              conference tracks page
            </a>
            .
          </p>
          <p className="mt-3 text-[#0A1330]/85 leading-relaxed text-[15px]">
            Furthermore, we welcome papers that are closely related to the
            topics mentioned above, even if not specifically listed.
            Contributions from industry professionals are particularly
            welcomed.
          </p>
        </section>

        {/* Submission Guidelines */}
        <section>
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c9631a] mb-2">
            For Authors
          </p>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#003f87] mb-2">
            Submission Guidelines
          </h2>
          <div className="w-16 h-[3px] bg-[#c9631a] rounded-full mb-6" />
          <p className="text-[#0A1330]/85 leading-relaxed text-[15px]">
            Prospective authors are invited to submit original technical
            papers that have not been previously published or submitted
            elsewhere. The papers should follow the IEEE conference format,
            formatted in two columns, with a maximum length of six A4 pages.
            All submitted papers will undergo a{" "}
            <strong>single-blind review</strong> process, where reviewers
            will be aware of the authors&apos; identities, but authors will
            remain anonymous. The authors&apos; names and affiliations must
            be included in the submission.
          </p>
          <p className="mt-3 text-[#0A1330]/85 leading-relaxed text-[15px]">
            All papers will be peer-reviewed for their technical content and
            relevance to the conference scope by the technical program
            committee. Detailed submission guidelines can be found{" "}
            <a href="paper_submission" className="text-[#003f87] font-semibold underline decoration-[#c9631a]/40 hover:text-[#c9631a] transition-colors">
              here
            </a>{" "}
            
          </p>
        </section>

        {/* Important Dates */}
        <section>
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c9631a] mb-2">
            Timeline
          </p>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#003f87] mb-2">
            Important Dates
          </h2>
          <div className="w-16 h-[3px] bg-[#c9631a] rounded-full mb-6" />

          <div className="overflow-hidden rounded-lg border border-[#003f87]/10">
            <table className="w-full text-sm">
              <tbody>
                {importantDates.map((row, i) => (
                  <tr
                    key={row.label}
                    className={i % 2 === 0 ? "bg-white" : "bg-[#003f87]/[0.03]"}
                  >
                    <td className="px-5 py-3 text-[#0A1330]/85 font-medium">
                      {row.label}
                    </td>
                    <td className="px-5 py-3 text-[#003f87] font-semibold text-right">
                      {row.current}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <p className="text-center text-[#0A1330]/70 text-[15px]">
          We look forward to your contributions and to welcoming you at ICPS
          2026!
        </p>
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