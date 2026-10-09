import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Visa Support | ICPS 2027",
  description:
    "Visa invitation and support letter information for international participants attending ICPS 2027 at IIT Jammu.",
};

export default function VisaSupportPage() {
  return (
    <main className="bg-[#FBF7F0] text-[#0A1330] min-h-screen">
      
      {/* Hero Section */}
      <header className="relative bg-[#003f87] text-white overflow-hidden">
        {/* Background decorative elements */}
        <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-blue-400/10 blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-4 pt-16 pb-14 text-center">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-orange-300 mb-3">
            International Participants
          </p>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Visa Support
          </h1>

          <p className="mt-4 text-white/80 text-lg max-w-2xl mx-auto">
            Visa invitation and support letter information for participants
            attending ICPS 2027 at IIT Jammu.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-4 py-16">

        {/* Introduction */}
        <div className="mb-10">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c9631a] mb-2">
            Visa Invitation Letter
          </p>

          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#003f87] mb-2">
            Visa Support for International Participants
          </h2>

          <div className="w-16 h-[3px] bg-[#c9631a] rounded-full mb-6" />

          <div className="space-y-5 text-[#0A1330]/90 leading-relaxed text-[15px]">
            <p>
              International participants attending the{" "}
              <strong>
                International Conference on Power Systems (ICPS) 2027
              </strong>{" "}
              at the Indian Institute of Technology Jammu may request an
              official visa invitation/support letter from the conference
              organizers.
            </p>

            <p>
              Participants who require a visa to travel to India are requested
              to contact the conference organizers well in advance of their
              planned travel dates.
            </p>

            <p>
              To request a visa support letter, please send an email to the
              conference team with the required details mentioned below.
            </p>
          </div>
        </div>

        {/* Email Request Card */}
        <div className="rounded-lg border border-[#003f87]/15 bg-white shadow-sm overflow-hidden mb-10">
          <div className="bg-[#003f87] text-white px-6 py-4">
            <h3 className="font-serif text-xl font-bold">
              Request Visa Support
            </h3>
          </div>

          <div className="px-6 py-7">
            <p className="text-[#0A1330]/80 text-[15px] leading-relaxed mb-6">
              Please send your visa support request to the following official
              conference email address:
            </p>

            <div className="bg-[#FBF7F0] border border-[#003f87]/10 rounded-md px-5 py-4 mb-6">
              <p className="text-xs uppercase tracking-wider font-semibold text-[#c9631a] mb-1">
                Conference Email
              </p>

              <p className="text-lg font-semibold text-[#003f87] break-all">
                icps-2027@iitjammu.ac.in
              </p>
            </div>

            <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=icps-2027@iitjammu.ac.in&su=Visa%20Support%20Request%20-%20ICPS%202027"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center px-6 py-3 rounded-md bg-[#c9631a] text-white font-semibold hover:bg-[#a94f15] transition-colors"
>
  Request Visa Support →
</a>
          </div>
        </div>

        {/* Required Information */}
        <div className="mb-10">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c9631a] mb-2">
            Information Required
          </p>

          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#003f87] mb-2">
            Please Include the Following
          </h2>

          <div className="w-16 h-[3px] bg-[#c9631a] rounded-full mb-6" />

          <p className="text-[#0A1330]/80 text-[15px] leading-relaxed mb-5">
            To help us process your request efficiently, please include the
            following information in your email:
          </p>

          <div className="bg-white border border-[#003f87]/10 rounded-lg p-6">
            <ul className="space-y-4 text-[15px] text-[#0A1330]/90">
              <li className="flex gap-3">
                <span className="text-[#c9631a] font-bold">•</span>
                <span>
                  <strong>Full Name:</strong> Name exactly as mentioned in
                  your passport.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="text-[#c9631a] font-bold">•</span>
                <span>
                  <strong>Passport Number:</strong> Valid passport number.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="text-[#c9631a] font-bold">•</span>
                <span>
                  <strong>Nationality:</strong> Your country of citizenship.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="text-[#c9631a] font-bold">•</span>
                <span>
                  <strong>Affiliation:</strong> University, institution, or
                  organization.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="text-[#c9631a] font-bold">•</span>
                <span>
                  <strong>Paper ID and Title:</strong> If you are an author
                  presenting a paper at ICPS 2027.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="text-[#c9631a] font-bold">•</span>
                <span>
                  <strong>Expected Arrival and Departure Dates:</strong>{" "}
                  Planned dates of travel to and from India.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="text-[#c9631a] font-bold">•</span>
                <span>
                  <strong>Passport Copy:</strong> A scanned copy of the
                  passport identification page, if required by the organizers.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Important Note */}
        <div className="rounded-lg border-l-4 border-[#c9631a] bg-white px-6 py-5 shadow-sm">
          <h3 className="font-semibold text-[#003f87] mb-2">
            Important Note
          </h3>

          <p className="text-sm text-[#0A1330]/75 leading-relaxed">
            The visa support letter is intended to facilitate the visa
            application process for eligible ICPS 2027 participants. Issuance
            of a visa remains subject to the rules, requirements, and decision
            of the relevant Indian authorities. Participants are advised to
            apply for their visa well in advance of their intended travel
            dates.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#003f87] text-white/70 text-sm">
        <div className="max-w-6xl mx-auto px-4 py-6 text-center">
          © {new Date().getFullYear()} ICPS 2027. All rights reserved. | ICPS
          2027 is organized by the Department of Electrical Engineering, IIT
          Jammu.
        </div>
      </footer>
    </main>
  );
}