import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Registration | ICPS 2026",
  description:
    "Conference registration details and fees for ICPS 2026, hosted at IIT Jammu, India.",
};

// NOTE: text/figures copied as-is from ICPS 2025 for reference — update as
// needed for ICPS 2026 / IIT Jammu. All hrefs are left as "#" placeholders —
// fill in the real links yourself.

type FeeRow = {
  category: string;
  indianEarly: string;
  indianStandard: string;
  intlEarly: string;
  intlStandard: string;
};

const feeRows: FeeRow[] = [
  {
    category: "Non-IEEE Member (Full Registration)",
    indianEarly: "₹ 11,700/-",
    indianStandard: "₹ 13,000/-",
    intlEarly: "$ 405/-",
    intlStandard: "$ 450/-",
  },
  {
    category: "IEEE Member (Full Registration)",
    indianEarly: "₹ 9,900/-",
    indianStandard: "₹ 11,000/-",
    intlEarly: "$ 360/-",
    intlStandard: "$ 400/-",
  },
  {
    category: "Student (Non-IEEE)",
    indianEarly: "₹ 4,500/-",
    indianStandard: "₹ 5,000/-",
    intlEarly: "$ 153/-",
    intlStandard: "$ 170/-",
  },
  {
    category: "Student (IEEE Member)",
    indianEarly: "₹ 4,050/-",
    indianStandard: "₹ 4,500/-",
    intlEarly: "$ 144/-",
    intlStandard: "$ 160/-",
  },
  {
    category: "IEEE Life Member",
    indianEarly: "₹ 4,500/-",
    indianStandard: "₹ 5,000/-",
    intlEarly: "$ 153/-",
    intlStandard: "$ 170/-",
  },
];

export default function RegistrationPage() {
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
            Conference Registration Details
          </h1>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-16 space-y-14">
        {/* Register CTA */}
        <section className="text-center">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c9631a] mb-2">
            Registration
          </p>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#003f87] mb-6">
            Register for ICPS 2026
          </h2>

          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-md bg-[#c9631a] hover:bg-[#c9631a]/90 text-white font-semibold text-sm transition-colors shadow-sm"
          >
            Register Here
          </a>
        </section>

        {/* Registration Fees */}
        <section>
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c9631a] mb-2">
            Fees
          </p>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#003f87] mb-2">
            Registration Fees
          </h2>
          <div className="w-16 h-[3px] bg-[#c9631a] rounded-full mb-6" />

          <p className="text-[#0A1330]/85 leading-relaxed text-[15px] mb-8">
            The registration fees for ICPS 2026 are outlined below. We
            encourage you to register before the deadlines to take advantage
            of the Early Bird registration discounts. The fees provide access
            to all conference activities, including technical sessions,
            breakfasts, lunches, dinners, and coffee breaks.
          </p>

          {/* Fee Table */}
          <div className="overflow-x-auto rounded-lg border border-[#003f87]/10 shadow-sm">
            <table className="w-full border-collapse text-sm min-w-[640px]">
              <thead>
                <tr>
                  <th
                    rowSpan={2}
                    className="bg-[#003f87] text-white font-semibold text-left px-5 py-4 align-middle border border-white/10"
                  >
                    Category
                  </th>
                  <th
                    colSpan={2}
                    className="bg-[#003f87] text-white font-semibold text-center px-5 py-3 border border-white/10"
                  >
                    Indian / SAARC Authors
                  </th>
                  <th
                    colSpan={2}
                    className="bg-[#003f87] text-white font-semibold text-center px-5 py-3 border border-white/10"
                  >
                    International Authors
                  </th>
                </tr>
                <tr>
                  <th className="bg-[#003f87]/90 text-white font-semibold text-center px-5 py-3 border border-white/10">
                    Early Bird
                  </th>
                  <th className="bg-[#003f87]/90 text-white font-semibold text-center px-5 py-3 border border-white/10">
                    Standard
                  </th>
                  <th className="bg-[#003f87]/90 text-white font-semibold text-center px-5 py-3 border border-white/10">
                    Early Bird
                  </th>
                  <th className="bg-[#003f87]/90 text-white font-semibold text-center px-5 py-3 border border-white/10">
                    Standard
                  </th>
                </tr>
              </thead>
              <tbody>
                {feeRows.map((row, i) => (
                  <tr
                    key={row.category}
                    className={i % 2 === 0 ? "bg-white" : "bg-[#003f87]/[0.03]"}
                  >
                    <td className="px-5 py-4 border border-[#003f87]/10 text-[#0A1330]/90 font-medium">
                      {row.category}
                    </td>
                    <td className="px-5 py-4 border border-[#003f87]/10 text-center text-[#0A1330]/85">
                      {row.indianEarly}
                    </td>
                    <td className="px-5 py-4 border border-[#003f87]/10 text-center text-[#0A1330]/85">
                      {row.indianStandard}
                    </td>
                    <td className="px-5 py-4 border border-[#003f87]/10 text-center text-[#0A1330]/85">
                      {row.intlEarly}
                    </td>
                    <td className="px-5 py-4 border border-[#003f87]/10 text-center text-[#0A1330]/85">
                      {row.intlStandard}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Important Notes */}
          <div className="mt-10">
            <h3 className="font-semibold text-[#003f87] text-[16px] mb-3 pb-2 border-b border-[#003f87]/15">
              Important Notes:
            </h3>
            <ul className="space-y-2 text-[14px] text-[#0A1330]/85 leading-relaxed list-disc list-inside">
              <li>
                The conference fee for SAARC country participants will be
                equivalent to that for Indian citizens.
              </li>
              <li>
                Each full registration is valid for one paper. An additional
                paper can be included for ₹4,000 extra (INR) or $100 (USD).
                However, <strong>please note</strong> that{" "}
                <strong>
                  only one additional paper is allowed per full registration
                </strong>{" "}
                (by paying the additional paper charge). For more than two
                papers, additional full registrations with applicable charges
                are required.
              </li>
              <li>
                Student registrations allow for presenting the paper at the
                conference, but at least one of the authors must register
                with a full registration for the paper to be included in the
                conference proceedings and submitted to IEEE Xplore.
              </li>
              <li>
                Registration includes access to all conference activities,
                including technical sessions, breakfasts, lunches, dinners,
                and coffee breaks.
              </li>
              <li>All registration fees are non-refundable.</li>
              <li>
                Additional transaction fees may apply depending on the
                payment method.
              </li>
            </ul>

            <div className="text-center mt-8">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-md bg-[#c9631a] hover:bg-[#c9631a]/90 text-white font-semibold text-sm transition-colors shadow-sm"
              >
                Register Here
              </a>
            </div>
          </div>
        </section>

        {/* Visa and Invitation Letters */}
        <section>
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c9631a] mb-2">
            Visa
          </p>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#003f87] mb-2">
            Visa and Invitation Letters
          </h2>
          <div className="w-16 h-[3px] bg-[#c9631a] rounded-full mb-6" />

          <div className="space-y-5 text-[#0A1330]/85 leading-relaxed text-[15px]">
            <p>
              International authors requiring a conference VISA should
              ensure they meet the eligibility criteria, such as holding a
              valid passport and being eligible to visit India.
            </p>
            <p>
              Invitation letters for visa applications will only be provided
              to participants who have completed their registration. Some
              details may be needed as per the visa requirements, and we
              will request the necessary information when you contact us at{" "}
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