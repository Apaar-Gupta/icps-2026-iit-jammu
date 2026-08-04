import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accommodation | ICPS 2026",
  description:
    "Accommodation facilities for ICPS 2026, hosted at IIT Jammu, India.",
};

// NOTE: text copied as-is from ICPS 2025 for reference — update as needed
// for ICPS 2026 / IIT Jammu. All hrefs are left as "#" placeholders — fill
// in the real links yourself.
//
// IMPORTANT: The "Accommodation in Nearby Hotels" table below (hotel names,
// "IITH" references, distances, travel times) is copied verbatim from the
// ICPS 2025 / IIT Hyderabad site as a structural reference only — these are
// Hyderabad-area hotels and will need to be replaced with IIT Jammu-area
// hotels. Some rows in the original sheet were not fully visible/legible
// and have been left out rather than guessed at — check the original for
// the complete list.

type Hotel = {
  name: string;
  roomType: string;
  single: string;
  double: string;
  website: string;
  distance: string;
  travelTime: string;
};

const hotels: Hotel[] = [
  {
    name: "At Home",
    roomType: "Standard Room (250 sq ft)",
    single: "Discounts Available",
    double: "Discounts Available",
    website: "https://athomehyd.com/",
    distance: "46",
    travelTime: "65 mins",
  },
  {
    name: "At Home",
    roomType: "2 BHK Flat (1650 sq ft)",
    single: "Discounts Available",
    double: "Discounts Available",
    website: "https://athomehyd.com/",
    distance: "46",
    travelTime: "65 mins",
  },
  {
    name: "At Home",
    roomType: "3 BHK Flat (1950 sq ft)",
    single: "Discounts Available",
    double: "Discounts Available",
    website: "https://athomehyd.com/",
    distance: "46",
    travelTime: "65 mins",
  },
  {
    name: "Deccan Serai 3*",
    roomType: "Executive Room (250–290 sq ft)",
    single: "Discounts Available",
    double: "Discounts Available",
    website: "hitechcity.deccanserai.com",
    distance: "50",
    travelTime: "70 mins",
  },
  {
    name: "Deccan Serai 3*",
    roomType: "Executive Room with Balcony (320 sq ft)",
    single: "Discounts Available",
    double: "Discounts Available",
    website: "hitechcity.deccanserai.com",
    distance: "50",
    travelTime: "70 mins",
  },
  {
    name: "Deccan Serai 3*",
    roomType: "Executive Suite Room (325 sq ft)",
    single: "Discounts Available",
    double: "Discounts Available",
    website: "hitechcity.deccanserai.com",
    distance: "50",
    travelTime: "70 mins",
  },
  {
    name: "Deccan Serai Grande 4*",
    roomType: "Business Room (375 sq ft)",
    single: "Discounts Available",
    double: "Discounts Available",
    website: "gachibowli.deccanserai.com",
    distance: "44",
    travelTime: "55 mins",
  },
];

export default function AccommodationPage() {
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
            Accommodation Facilities
          </h1>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-16 space-y-10">
        {/* Top note */}
        <div className="rounded-md border-l-4 border-[#003f87] bg-[#003f87]/5 px-5 py-4">
          <p className="text-[14px] text-[#0A1330]/85 leading-relaxed">
            <strong className="text-[#003f87]">Note:</strong> Limited
            International Guest House (IGH) accommodation is available.
            Details and request form are provided at the bottom of this
            page.
          </p>
        </div>

        {/* Accommodation for Students */}
        <section className="rounded-lg border border-[#c9631a]/30 bg-[#c9631a]/5 px-6 py-8">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#003f87] mb-2">
            Accommodation for Students
          </h2>
          <div className="w-16 h-[3px] bg-[#c9631a] rounded-full mb-6" />

          <p className="text-[#0A1330]/85 leading-relaxed text-[15px] mb-4">
            Accommodation for students is being provided at student hostels
            (single occupancy) for ICPS 2026 participants. Please note the
            following important details
          </p>

          <ul className="space-y-3 text-[14px] text-[#0A1330]/85 leading-relaxed list-disc list-inside mb-4">
            <li>
              <strong>Deadline for Booking</strong>: All accommodation
              requests must be submitted by{" "}
              <strong>[booking deadline]</strong>. After this date,
              accommodations may no longer be available.
            </li>
            <li>
              Accommodation availability is on a first-come, first-served
              basis. We encourage you to book as early as possible to secure
              your preferred option.
            </li>
          </ul>

          <p className="text-[#0A1330]/85 leading-relaxed text-[15px] mb-8">
            Please{" "}
            <a
              href="#"
              className="text-[#003f87] font-semibold underline decoration-[#c9631a]/40 hover:text-[#c9631a] transition-colors"
            >
              fill the accommodation request form
            </a>{" "}
            to book your stay in the student hostels at IITH.
          </p>

          {/* Hostel Amenities */}
          <h3 className="font-semibold text-[#003f87] text-[16px] mb-3 pb-2 border-b border-[#003f87]/15">
            Hostel Amenities
          </h3>
          <ul className="space-y-2 text-[14px] text-[#0A1330]/85 leading-relaxed list-disc list-inside mb-8">
            <li>
              Rooms include cot, table, chair, mattress, bedsheet, blanket,
              and pillow.
            </li>
            <li>
              Accommodation fee: <strong>₹350 per day</strong>.
            </li>
          </ul>

          {/* Check-in / Check-out Policy */}
          <h3 className="font-semibold text-[#003f87] text-[16px] mb-3 pb-2 border-b border-[#003f87]/15">
            Check-in / Check-out Policy
          </h3>
          <ul className="space-y-2 text-[14px] text-[#0A1330]/85 leading-relaxed list-disc list-inside mb-8">
            <li>
              Each day of accommodation counts if you check in before 11:59
              PM.
            </li>
            <li>Check-out must be completed by 9:00 AM the next day.</li>
            <li>Payment is non-refundable.</li>
          </ul>

          {/* Rules & Policies */}
          <h3 className="font-semibold text-[#003f87] text-[16px] mb-3 pb-2 border-b border-[#003f87]/15">
            Rules &amp; Policies
          </h3>
          <ul className="space-y-2 text-[14px] text-[#0A1330]/85 leading-relaxed list-disc list-inside mb-4">
            <li>Accommodation is strictly for registered student participants.</li>
            <li>Payment is non-refundable.</li>
            <li>No external guests or family members are allowed in hostel rooms.</li>
            <li>
              Participants must follow IIT Hyderabad hostel regulations and
              maintain decorum.
            </li>
            <li>Participants are responsible for their personal belongings.</li>
          </ul>

          <p className="text-[#0A1330]/85 leading-relaxed text-[15px] mb-8">
            For the complete list of hostel rules and guidelines, please
            refer to the official{" "}
            <a
              href="#"
              className="text-[#003f87] font-semibold underline decoration-[#c9631a]/40 hover:text-[#c9631a] transition-colors"
            >
              IIT Hyderabad Hostel Rules &amp; Regulations
            </a>
            .
          </p>

          {/* Useful Links */}
          <h3 className="font-semibold text-[#003f87] text-[16px] mb-4 pb-2 border-b border-[#003f87]/15">
            Useful Links
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center justify-center text-center px-6 py-3 rounded-md bg-[#c9631a] hover:bg-[#c9631a]/90 text-white font-semibold text-sm transition-colors shadow-sm"
            >
              Accommodation Request Form
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center text-center px-6 py-3 rounded-md bg-[#c9631a] hover:bg-[#c9631a]/90 text-white font-semibold text-sm transition-colors shadow-sm"
            >
              Hostel Rules &amp; Regulations
            </a>
          </div>
        </section>

        {/* International Guest House */}
        <section className="rounded-lg border border-[#c9631a]/30 bg-[#c9631a]/5 px-6 py-8">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#003f87] mb-2">
            International Guest House (IGH) Accommodation
          </h2>
          <div className="w-16 h-[3px] bg-[#c9631a] rounded-full mb-6" />

          <p className="text-[#0A1330]/85 leading-relaxed text-[15px] mb-8">
            A limited number of International Guest House (IGH) rooms are
            available on campus. Interested participants may submit a
            request using the form below. Please note that submitting the
            form <strong>does not guarantee</strong> a room — allocation is
            made strictly on a <strong>First-Come, First-Served</strong>{" "}
            basis based on the timestamp of form submission.
          </p>

          {/* Process */}
          <h3 className="font-semibold text-[#003f87] text-[16px] mb-3 pb-2 border-b border-[#003f87]/15">
            Process
          </h3>
          <ul className="space-y-2 text-[14px] text-[#0A1330]/85 leading-relaxed list-disc list-inside mb-8">
            <li>All requests will be collected through the IGH request form.</li>
            <li>
              A payment link will be sent to the earliest applicants (in
              order of submission) within 1–2 days.
            </li>
            <li>
              Accommodation is confirmed only after successful payment,
              following which a confirmation email will be issued.
            </li>
            <li>
              If payment is not completed within the specified time, the
              request will move automatically to the next participant in
              the queue.
            </li>
          </ul>

          {/* Important Notes */}
          <h3 className="font-semibold text-[#003f87] text-[16px] mb-3 pb-2 border-b border-[#003f87]/15">
            Important Notes
          </h3>
          <ul className="space-y-2 text-[14px] text-[#0A1330]/85 leading-relaxed list-disc list-inside mb-8">
            <li>
              <strong>No cancellation policy:</strong> Once paid, bookings
              cannot be cancelled.
            </li>
            <li>Allocation is strictly First-Come, First-Served.</li>
            <li>Filling the request form does not guarantee IGH accommodation.</li>
          </ul>

          <div className="flex justify-center">
            <a
              href="#"
              className="inline-flex items-center justify-center text-center px-6 py-3 rounded-md bg-[#c9631a] hover:bg-[#c9631a]/90 text-white font-semibold text-sm transition-colors shadow-sm"
            >
              IGH Accommodation Request Form
            </a>
          </div>
        </section>

        {/* Accommodation in Nearby Hotels */}
        <section className="rounded-lg border border-[#c9631a]/30 bg-[#c9631a]/5 px-6 py-8">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#003f87] mb-2">
            Accommodation in Nearby Hotels
          </h2>
          <div className="w-16 h-[3px] bg-[#c9631a] rounded-full mb-6" />

          <p className="text-[#0A1330]/85 leading-relaxed text-[15px] mb-4">
            Below is a list of hotels that have kindly agreed to potentially
            offer discounted rates for attendees of the ICPS 2026 conference.
            Please note that this list is provided solely for your reference
            and does not imply any endorsement or recommendation by the
            conference organizers. Attendees are advised to make bookings
            based on their own preferences and judgments. Bookings are made
            at your own risk, and we encourage you to check reviews and
            policies before confirming your stay.
          </p>

          <p className="text-[#0A1330]/85 leading-relaxed text-[15px] mb-8">
            <strong>Important:</strong> To avail of any potential discounts,
            please make sure to clearly mention that your booking is for the
            &ldquo;ICPS 2026 Conference&rdquo; at the time of reservation.
          </p>

          {/* Hotel Table */}
          <div className="overflow-x-auto rounded-lg border border-[#003f87]/10 shadow-sm bg-white">
            <table className="w-full border-collapse text-sm min-w-[900px]">
              <thead>
                <tr>
                  <th
                    rowSpan={2}
                    className="bg-[#003f87] text-white font-semibold text-left px-4 py-3 align-middle border border-white/10"
                  >
                    Hotel Name
                  </th>
                  <th
                    rowSpan={2}
                    className="bg-[#003f87] text-white font-semibold text-left px-4 py-3 align-middle border border-white/10"
                  >
                    Type of Rooms
                  </th>
                  <th
                    colSpan={2}
                    className="bg-[#003f87] text-white font-semibold text-center px-4 py-2 border border-white/10"
                  >
                    Special Discount Rates for ICPS 2026
                  </th>
                  <th
                    rowSpan={2}
                    className="bg-[#003f87] text-white font-semibold text-left px-4 py-3 align-middle border border-white/10"
                  >
                    Website
                  </th>
                  <th
                    rowSpan={2}
                    className="bg-[#003f87] text-white font-semibold text-center px-4 py-3 align-middle border border-white/10"
                  >
                    Distance from IITH (kms)
                  </th>
                  <th
                    rowSpan={2}
                    className="bg-[#003f87] text-white font-semibold text-center px-4 py-3 align-middle border border-white/10"
                  >
                    Travel Time (Approx)
                  </th>
                </tr>
                <tr>
                  <th className="bg-[#003f87]/90 text-white font-semibold text-center px-4 py-2 border border-white/10">
                    Single Occupancy
                  </th>
                  <th className="bg-[#003f87]/90 text-white font-semibold text-center px-4 py-2 border border-white/10">
                    Double Occupancy
                  </th>
                </tr>
              </thead>
              <tbody>
                {hotels.map((hotel, i) => (
                  <tr
                    key={`${hotel.name}-${hotel.roomType}`}
                    className={i % 2 === 0 ? "bg-white" : "bg-[#003f87]/[0.03]"}
                  >
                    <td className="px-4 py-3 border border-[#003f87]/10 text-[#0A1330]/90 font-medium">
                      {hotel.name}
                    </td>
                    <td className="px-4 py-3 border border-[#003f87]/10 text-[#0A1330]/85">
                      {hotel.roomType}
                    </td>
                    <td className="px-4 py-3 border border-[#003f87]/10 text-center text-[#0A1330]/85">
                      {hotel.single}
                    </td>
                    <td className="px-4 py-3 border border-[#003f87]/10 text-center text-[#0A1330]/85">
                      {hotel.double}
                    </td>
                    <td className="px-4 py-3 border border-[#003f87]/10 text-[#0A1330]/85">
                      <a
                        href="#"
                        className="text-[#003f87] font-semibold underline decoration-[#c9631a]/40 hover:text-[#c9631a] transition-colors"
                      >
                        {hotel.website}
                      </a>
                    </td>
                    <td className="px-4 py-3 border border-[#003f87]/10 text-center text-[#0A1330]/85">
                      {hotel.distance}
                    </td>
                    <td className="px-4 py-3 border border-[#003f87]/10 text-center text-[#0A1330]/85">
                      {hotel.travelTime}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-3 text-[13px] text-[#0A1330]/60">
            Hotel list above is copied from the ICPS 2025 / IIT Hyderabad
            reference sheet — replace with IIT Jammu-area hotels. The
            original sheet had a few additional rows that weren&apos;t fully
            legible; add those in once you have the full list.
          </p>
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