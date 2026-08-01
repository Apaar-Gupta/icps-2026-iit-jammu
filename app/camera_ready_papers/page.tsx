"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import Image from "next/image";

// NOTE: Metadata export doesn't work in a "use client" file — if you want
// the page <title>/description set via Next's metadata API, move that
// export into a separate server component wrapper, or just set
// document.title manually. Left out here since this page needs client-side
// state for the accordion.

// NOTE: text copied as-is from ICPS 2025 for reference — update as needed
// for ICPS 2026 / IIT Jammu. All hrefs are left as "#" placeholders —
// fill in the real links yourself. The two example screenshots referenced
// in Step 6 are NOT included (can't copy them from another site) — add
// your own screenshots at /public/images/example1.png and example2.png.

const overview = [
  {
    label: "Final Camera-Ready Paper Preparation",
    text: "Prepare the final version of your paper according to the prescribed formatting guidelines. Make sure that the reviewer comments are addressed in the camera-ready version.",
  },
  {
    label: "Inclusion of IEEE Copyright Notice",
    text: "Insert the official IEEE copyright notice in the footer (left column) of the first page of your paper.",
  },
  {
    label: "PDF eXpress Compliance Check",
    text: "Validate your paper using IEEE PDF eXpress to confirm compatibility with IEEE Xplore requirements.",
  },
  {
    label: "Camera-Ready Paper Submission",
    text: "Submit the PDF eXpress-verified camera-ready version of your paper through the submission portal.",
  },
  {
    label: "Copyright Form Submission",
    text: "Complete and submit the IEEE Electronic Copyright Form (eCF).",
  },
  {
    label: "Verifying Submissions in CMT",
    text: "Check the CMT Author Console to ensure that both your camera-ready paper and copyright form have been uploaded successfully. CMT does not send automatic notifications when these submissions are completed.",
  },
  {
    label: "Author Registration",
    text: "Ensure that at least one author registers for the conference with a full registration.",
  },
  {
    label: "Conference Presentation",
    text: "At least one of the authors must present the paper at the conference. Papers not presented will not be forwarded for IEEE Xplore.",
  },
];

type Step = { title: string; body: ReactNode };

const steps: Step[] = [
  {
    title: "Step 1: Final Camera-Ready Paper Preparation",
    body: (
      <>
        <p className="mb-3">
          Please adhere strictly to the IEEE conference format and address
          all reviewer comments in your submission.
        </p>
        <ul className="space-y-2 list-disc list-inside">
          <li>
            Paper title and author order must remain unchanged in the final
            submission.
          </li>
          <li>
            Papers must adhere to the IEEE two-column format. Please follow
            the IEEE two-column A4 size standard conference format for
            preparing your final manuscript. Download the IEEE template{" "}
            <a href="https://www.ieee.org/conferences/publishing/templates.html" className="text-[#003f87] font-semibold underline decoration-[#c9631a]/40 hover:text-[#c9631a] transition-colors">
              here
            </a>
            .
          </li>
          <li>
            Revise your paper based on reviewers&apos; comments/suggestions.
            The reviewer&apos;s comments are available on the conference
            Microsoft CMT site.
          </li>
          <li>
            The final paper must not exceed six (6) pages including
            references.
          </li>
          <li>
            Ensure the similarity index remains below 15%, excluding
            references, in accordance with the{" "}
            <a href="https://www.ieee.org/publications/rights/plagiarism.html" className="text-[#003f87] font-semibold underline decoration-[#c9631a]/40 hover:text-[#c9631a] transition-colors">
              IEEE Plagiarism Policy
            </a>
            .
          </li>
          <li>
            Save your paper as a PDF file with a maximum size of 3 MB, and
            then proceed to the subsequent steps before submitting it to the
            CMT portal.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Step 2: Inclusion of IEEE Copyright Notice",
    body: (
      <>
        <p className="mb-3">
          Please include the correct IEEE copyright notice at the
          bottom-left corner of the first page of your paper. The notice
          should match exactly as given below. If you are uncertain about
          which notice applies to you, please contact{" "}
          <a href="#" className="text-[#003f87] font-semibold underline decoration-[#c9631a]/40 hover:text-[#c9631a] transition-colors">
            Dr. Rupesh Wandhare
          </a>
          .
        </p>
        <ul className="space-y-2 list-disc list-inside">
          <li>
            For papers in which all authors are employed by the US
            government, the copyright notice is: U.S. Government work not
            protected by U.S. copyright.
          </li>
          <li>
            For papers in which all authors are employed by a Crown
            government (UK, Canada, and Australia), the copyright notice is:
            979-8-3315-5599-3/25/$31.00 ©2025 Crown.
          </li>
          <li>
            For papers in which all authors are employed by the European
            Union, the copyright notice is: 979-8-3315-5599-3/25/$31.00
            ©2025 European Union.
          </li>
          <li>
            For all other papers the copyright notice is:
            979-8-3315-5599-3/25/$31.00 ©2025 IEEE.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Step 3: PDF eXpress Check",
    body: (
      <>
        <p className="mb-3">
          The IEEE PDF eXpress tool is mandatory for validating that your
          paper meets IEEE digital library standards. Completing this step
          ensures your paper can be seamlessly archived and accessed.
        </p>
        <ul className="space-y-2 list-disc list-inside">
          <li>
            Confirm that your source document is final and requires no
            further edits before proceeding.
          </li>
          <li>
            Visit the{" "}
            <a href="https://ieee-pdf-express.org/" className="text-[#003f87] font-semibold underline decoration-[#c9631a]/40 hover:text-[#c9631a] transition-colors">
              IEEE PDF eXpress website
            </a>{" "}
            to create or log in to your account.
          </li>
          <li>
            <strong>For first-time users:</strong> Register by selecting
            &ldquo;New Users - Click Here&rdquo; and enter the Conference ID:{" "}
            <strong>67276X</strong>, your email, and a secure password.
          </li>
          <li>
            <strong>Returning users:</strong> Log in with your existing
            credentials and verify your contact information is up to date.
          </li>
          <li>
            Upload your PDF file to perform the compliance check and make
            necessary corrections if any errors are detected.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Step 4: Camera-Ready Paper Submission",
    body: (
      <>
        <p className="mb-3">
          Once your paper passes the PDF eXpress compliance check, upload
          the final camera-ready PDF through the Author Console in the
          conference management tool (CMT).
        </p>
        <ul className="space-y-2 list-disc list-inside mb-4">
          <li>
            Rename your verified PDF to <strong>PIDxxx</strong> where{" "}
            <em>xxx</em> is your assigned paper ID in CMT.
          </li>
          <li>
            Ensure the paper title, author names, and order remain unchanged
            from your original submission.
          </li>
          <li>
            Upload both the paper (PIDxxx PDF) and the Response to Reviewers
            file on the CMT portal.
          </li>
        </ul>
        <p className="mb-3">
          Access the CMT submission portal using the button below:
        </p>
        <a
          href="https://cmt3.research.microsoft.com/icps2025"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#003f87] hover:bg-[#003f87]/90 text-white font-semibold text-sm transition-colors"
        >
          CMT Submission Portal
        </a>
      </>
    ),
  },
  {
    title: "Step 5: Submission of the Copyright Form",
    body: (
      <>
        <p className="mb-3">
          Once you have uploaded the camera-ready paper (verified through
          IEEE PDF eXpress), complete the copyright transfer process.
        </p>
        <ol className="space-y-2 list-decimal list-inside mb-3">
          <li>
            In CMT, click on &ldquo;Submit IEEE Copyright Form&rdquo; to open
            the Copyright Form Submission page.
          </li>
          <li>
            Follow the link to the IEEE eCF website and complete the form
            online.
          </li>
          <li>Download the completed form and upload it back into the CMT portal.</li>
        </ol>
        <p className="text-[13px] text-[#0A1330]/60 italic">
          Note: The corresponding author may submit the copyright form on
          behalf of all co-authors.
        </p>
      </>
    ),
  },
  {
    title: "Step 6: Verifying Submissions in CMT",
    body: (
      <>
        <p className="mb-3">
          Please note that the <strong>CMT system does not automatically
          send notification emails</strong> when the camera-ready paper or
          IEEE copyright form is uploaded. Authors should manually confirm
          successful submissions through the CMT Author Console.
        </p>
        <p className="mb-4">
          In the CMT Author Portal, when your{" "}
          <strong>camera-ready paper is uploaded successfully</strong>, the
          option <em>&ldquo;Edit Camera-Ready Submission&rdquo;</em> will
          appear next to your paper title. If this option is not visible,
          the paper has not yet been submitted.
        </p>

        <div className="relative w-full h-72 rounded-md border border-dashed border-[#003f87]/30 bg-white overflow-hidden mb-2">
  <Image
    src="/images/example1.png"
    alt="CMT Author Console example showing submitted and non-submitted papers"
    fill
    className="object-contain"
  />
</div>
        <p className="text-[13px] text-[#0A1330]/70 mb-6">
          The bottom paper in the image corresponds to a{" "}
          <strong>submitted</strong> camera-ready paper (shows &ldquo;Edit
          Camera-Ready Submission&rdquo;), while the one above indicates a{" "}
          <strong>non-submitted</strong> paper.
        </p>

        <p className="mb-3">
          For the <strong>IEEE Copyright Form</strong>, after clicking{" "}
          <em>&ldquo;Submit IEEE Copyright Form&rdquo;</em> in CMT, a
          successful upload will show the <strong>uploaded PDF file</strong>{" "}
          just above the <em>&ldquo;Drop files here&rdquo;</em> section.
        </p>
        <div className="relative w-full h-72 rounded-md border border-dashed border-[#003f87]/30 bg-white overflow-hidden">
  <Image
    src="/images/example2.png"
    alt="Copyright form successfully uploaded example"
    fill
    className="object-contain"
  />
</div>
      </>
    ),
  },
  {
    title: "Step 7: Author Registration",
    body: (
      <>
        <p className="mb-3">
          At least one author from each accepted paper must register for
          the conference with a full registration to ensure inclusion in the
          proceedings.
        </p>
        <p>
          Registration details and deadlines can be found{" "}
          <a href="/registration" className="text-[#003f87] font-semibold underline decoration-[#c9631a]/40 hover:text-[#c9631a] transition-colors">
            here
          </a>
          .
        </p>
      </>
    ),
  },
  {
    title: "Step 8: Paper Presentation at the Conference",
    body: (
      <>
        <p className="mb-2">
          Presentation of your accepted paper at the conference is mandatory
          to ensure its inclusion in the proceedings and submission to IEEE
          Xplore for potential indexing.
        </p>
        <p>Presentation guidelines will be posted on the conference website shortly.</p>
      </>
    ),
  },
];

export default function CameraReadyPage() {
  const [openStep, setOpenStep] = useState<number | null>(0);

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
            Camera-Ready Paper Submission Guidelines
          </h1>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 py-16 space-y-14">
        {/* Intro */}
        <section>
          <p className="text-[#0A1330]/85 leading-relaxed text-[15px]">
            To ensure that accepted papers are published in the conference
            proceedings and considered for inclusion in the{" "}
            <strong>IEEE Xplore Digital Library</strong>, authors are
            required to complete the steps outlined below. The detailed
            steps are organized into collapsible sections below. Simply
            click on each step&apos;s heading to expand or collapse the
            information as needed.
          </p>
        </section>

        {/* Overview */}
        <section>
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c9631a] mb-2">
            Overview
          </p>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#003f87] mb-2">
            Process Outline for Final Paper Submission
          </h2>
          <div className="w-16 h-[3px] bg-[#c9631a] rounded-full mb-6" />
          <p className="text-[#0A1330]/85 leading-relaxed text-[15px] mb-6">
            The submission process consists of the following key steps.
            These steps provide an overview; please expand each section
            below for detailed instructions:
          </p>

          <div className="space-y-3">
            {overview.map((item, i) => (
              <div
                key={item.label}
                className="rounded-lg border border-[#003f87]/10 bg-white px-5 py-4"
              >
                <p className="text-[13px] font-bold text-[#003f87] mb-1">
                  {i + 1}. {item.label}
                </p>
                <p className="text-[14px] text-[#0A1330]/80 leading-relaxed">
                  {item.text}
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