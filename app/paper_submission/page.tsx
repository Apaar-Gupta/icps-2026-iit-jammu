import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paper Submission Guidelines | ICPS 2026",
  description:
    "Author and paper submission guidelines for ICPS 2026, hosted at IIT Jammu, India.",
};

// NOTE: text copied as-is from ICPS 2025 for reference — update as needed
// for ICPS 2026 / IIT Jammu. All hrefs are left as "#" placeholders —
// fill in the real links yourself.

type Guideline = { label: string; body: React.ReactNode };

const guidelines: Guideline[] = [
  { label: "Language", body: "All submissions must be in English." },
  {
    label: "Originality",
    body: "Papers must be original and not under consideration for publication elsewhere.",
  },
  {
    label: "Format",
    body: (
      <>
        Papers must adhere to the IEEE two-column format. They should not
        exceed six (6) A4 pages in length. Submit papers as a PDF file (max.
        size: 2MB).{" "}
        
          <a href="https://www.ieee.org/conferences/publishing/templates.html"
          className="text-[#003f87] font-semibold underline decoration-[#c9631a]/40 hover:text-[#c9631a] transition-colors"
        >
          Download the IEEE template here
        </a>
        .
      </>
    ),
  },
  {
    label: "Plagiarism",
    body: (
      <>
        All papers will undergo a plagiarism check. Papers with a similarity
        index of 15% or higher (excluding references) may be rejected
        without review. Check{" "}
        
         <a href="https://www.ieee.org/publications/rights/plagiarism.html"
          className="text-[#003f87] font-semibold underline decoration-[#c9631a]/40 hover:text-[#c9631a] transition-colors"
        >
          IEEE Plagiarism Policy
        </a>{" "}
        for more details.
      </>
    ),
  },
  {
    label: "Submission Portal",
    body: (
      <>
        Only submissions made through the{" "}
        
          <a href="https://cmt3.research.microsoft.com/icps2025"
          className="text-[#003f87] font-semibold underline decoration-[#c9631a]/40 hover:text-[#c9631a] transition-colors"
        >
          CMT Portal
        </a>{" "}
        will be accepted.
      </>
    ),
  },
  {
    label: "Track Selection",
    body: (
      <>
        Choose the track that best matches the content of your paper for
        appropriate session scheduling and reviewer assignment. The list of
        tracks is available{" "}
        
          <a href="conference_tracks"
          className="text-[#003f87] font-semibold underline decoration-[#c9631a]/40 hover:text-[#c9631a] transition-colors"
        >
          here
        </a>
        .
      </>
    ),
  },
  {
    label: "Review Process",
    body: (
      <>
        All submitted papers will undergo a{" "}
        <strong>single-blind review</strong> process. This means that the
        identities of the authors will be known to the reviewers, but the
        authors will not know the identities of the reviewers. Reviewers&apos;
        comments must be addressed in the final version of the paper.
      </>
    ),
  },
  {
    label: "Final Submission",
    body: "Paper title and author order must remain unchanged in the final submission.",
  },
];

const steps = [
  {
    text: (
      <>
        Log in to the{" "}
        
          <a href="https://cmt3.research.microsoft.com/icps2025"
          className="text-[#003f87] font-semibold underline decoration-[#c9631a]/40 hover:text-[#c9631a] transition-colors"
        >
          CMT Submission Portal
        </a>
        .
      </>
    ),
  },
  { text: "Select the track that best matches your paper." },
  { text: "Complete the submission form with your details." },
  { text: "Upload your paper in PDF format." },
];

export default function SubmissionPage() {
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
            Paper Submission Guidelines
          </h1>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 py-16 space-y-14">
        {/* Author and Paper Submission Guidelines */}
        <section>
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c9631a] mb-2">
            For Authors
          </p>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#003f87] mb-2">
            Author and Paper Submission Guidelines
          </h2>
          <div className="w-16 h-[3px] bg-[#c9631a] rounded-full mb-6" />
          <p className="text-[#0A1330]/85 leading-relaxed text-[15px] mb-6">
            The following guidelines must be strictly adhered to while
            submitting your manuscript to ICPS 2026:
          </p>

          <div className="space-y-3">
            {guidelines.map((g) => (
              <div
                key={g.label}
                className="rounded-lg border border-[#003f87]/10 bg-white px-5 py-4"
              >
                <p className="text-[13px] font-bold uppercase tracking-wide text-[#003f87] mb-1">
                  {g.label}
                </p>
                <p className="text-[14px] text-[#0A1330]/85 leading-relaxed">
                  {g.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Submission Portal Details */}
        <section>
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c9631a] mb-2">
            Portal
          </p>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#003f87] mb-2">
            Submission Portal Details
          </h2>
          <div className="w-16 h-[3px] bg-[#c9631a] rounded-full mb-6" />

          <div className="rounded-lg border-l-4 border-[#c9631a] bg-[#c9631a]/5 px-5 py-4 mb-5">
            <p className="text-[13px] font-bold uppercase tracking-wide text-[#c9631a] mb-1">
              Important Notice
            </p>
            <p className="text-[14px] text-[#0A1330]/85 leading-relaxed">
              It is proposed to use the CMT portal for paper submissions. The
              approval from CMT is currently pending and will be updated
              here once finalized. Authors are requested to follow the CMT
              link for submissions, adhering to the conference timeline once
              approval is granted.
            </p>
          </div>

          
           <a href="https://cmt3.research.microsoft.com/icps2025"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#003f87] hover:bg-[#003f87]/90 text-white font-semibold text-sm transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
            CMT Submission Portal
          </a>

          <p className="mt-6 text-[13px] text-[#0A1330]/60 leading-relaxed">
            <strong className="text-[#0A1330]/80">Acknowledgement:</strong> The{" "}
            
             <a href="https://cmt3.research.microsoft.com/"
              className="text-[#003f87] font-semibold underline decoration-[#c9631a]/40 hover:text-[#c9631a] transition-colors"
            >
              Microsoft CMT service
            </a>{" "}
            was used for managing the peer-reviewing process for this
            conference. This service was provided for free by Microsoft and
            they bore all expenses, including costs for Azure cloud services
            as well as for software development and support.
          </p>
        </section>

        {/* Steps */}
        <section>
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c9631a] mb-2">
            How To
          </p>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#003f87] mb-2">
            Steps for Submitting Your Paper
          </h2>
          <div className="w-16 h-[3px] bg-[#c9631a] rounded-full mb-6" />

          <ol className="space-y-3">
            {steps.map((step, i) => (
              <li
                key={i}
                className="flex items-start gap-4 rounded-lg border border-[#003f87]/10 bg-white px-5 py-4"
              >
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#003f87] text-white text-sm font-bold shrink-0">
                  {i + 1}
                </span>
                <p className="text-[14px] text-[#0A1330]/85 leading-relaxed pt-0.5">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>
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