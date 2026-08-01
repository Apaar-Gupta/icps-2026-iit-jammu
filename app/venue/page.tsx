import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Venue | ICPS 2026",
  description:
    "Conference venue details and directions for ICPS 2026, hosted at IIT Jammu, India.",
};

type Route = {
  title: string;
  distance: string;
  steps: string[];
};

const routes: Route[] = [
  {
    title: "From Jammu Airport (approx. 17 km)",
    distance: "17 km · ~35 min by road",
    steps: [
      "Exit the airport and take the Jammu–Srinagar National Highway (NH-44) heading towards Nagrota / Udhampur.",
      "Continue on NH-44 past Nagrota town.",
      "Turn towards Jagti village as per the IIT Jammu signboard on NH-44.",
      "The campus gate is a short drive from the NH-44 turn-off, on your right.",
    ],
  },
  {
    title: "From Jammu Tawi Railway Station (approx. 19 km)",
    distance: "19 km · ~40 min by road",
    steps: [
      "From the railway station, head towards the Jammu–Srinagar National Highway (NH-44).",
      "Take a prepaid taxi or auto, or board a bus plying towards Nagrota / Udhampur.",
      "Stay on NH-44 until the Jagti / IIT Jammu signboard.",
      "Turn off NH-44 towards Jagti village to reach the campus.",
    ],
  },
  {
    title: "From Jammu Bus Stand (approx. 10 km)",
    distance: "10 km · ~25 min by road",
    steps: [
      "From the general bus stand, head out towards NH-44 in the direction of Nagrota.",
      "Continue along NH-44, following signs for Nagrota / Udhampur.",
      "Watch for the IIT Jammu signboard indicating the turn towards Jagti village.",
      "Follow the approach road to the campus gate.",
    ],
  },
  {
    title: "By Road (NH-44)",
    distance: "Well connected via National Highway 44",
    steps: [
      "IIT Jammu's permanent campus is located directly along NH-44 in Jagti village, Nagrota tehsil.",
      "The campus is well signposted from the highway and is easily reachable by private vehicle, taxi, or bus from anywhere in Jammu city.",
    ],
  },
];

export default function VenuePage() {
  return (
    <main className="bg-[#FBF7F0] text-[#0A1330]">

      {/* ================= HERO SECTION ================= */}

      <header className="relative h-[430px] md:h-[520px] overflow-hidden flex items-center justify-center">

        {/* Background Image */}
        <Image
          src="/images/iit-jammu.jpg"
          alt="Indian Institute of Technology Jammu"
          fill
          priority
          className="object-cover object-center scale-105 opacity-55 z-10"
        />

        {/* Blue Overlay */}
        <div className="absolute inset-0 bg-[#003f87]/55"></div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#003f87]/65 via-[#003f87]/35 to-[#003f87]/75"></div>

        {/* Decorative Glow */}
        <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/10 blur-3xl" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">

          <p className="text-sm md:text-base font-semibold uppercase tracking-[0.35em] text-orange-300 mb-5">
            Conference Venue
          </p>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
            Indian Institute of Technology Jammu
          </h1>

          <p className="mt-6 text-xl md:text-3xl text-white/90">
            ICPS 2026 will be hosted at IIT Jammu, India
          </p>

        </div>

      </header>

      {/* ================= ABOUT ================= */}

      <section className="max-w-4xl mx-auto px-4 py-16">
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c9631a] mb-2">
          About the Venue
        </p>

        <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#003f87] mb-2">
          IIT Jammu
        </h2>

        <div className="w-16 h-[3px] bg-[#c9631a] rounded-full mb-6" />

        <div className="space-y-5 text-[#0A1330]/90 leading-relaxed text-[15px]">

          <p>
            The <strong>Indian Institute of Technology Jammu (IIT Jammu)</strong>,
            established in 2016, is one of the newer IITs built to extend
            world-class technical education and research to the northern
            region of India. Its permanent campus spans approximately
            400 acres at Jagti, along National Highway 44 (NH-44), set
            against the backdrop of the Trikuta Hills.
          </p>

          <p>
            IIT Jammu's campus is equipped with modern academic blocks,
            research laboratories, innovation centers, incubation facilities,
            and residential infrastructure supporting a vibrant research
            ecosystem.
          </p>

          <p>
            The <strong>Department of Electrical Engineering</strong> actively
            contributes to research in <strong>Power Systems, Smart Grids,
            Renewable Energy, Power Electronics, Control Systems,
            Artificial Intelligence</strong>, and many other emerging areas.
          </p>

          <p>
            We look forward to welcoming delegates from around the world to
            the picturesque campus of IIT Jammu for ICPS 2026.
          </p>

        </div>
      </section>

      {/* ================= HOW TO REACH ================= */}

      <section className="bg-white border-y border-[#003f87]/10">

        <div className="max-w-4xl mx-auto px-4 py-16">

          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c9631a] mb-2">
            Directions
          </p>

          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#003f87] mb-2">
            How to Reach IIT Jammu
          </h2>

          <div className="w-16 h-[3px] bg-[#c9631a] rounded-full mb-3" />

          <p className="text-[#0A1330]/60 text-sm mb-10">
            Below are directions to help you reach the IIT Jammu campus
            from major transit points in Jammu city.
          </p>

          <div className="space-y-8">

            {routes.map((route) => (

              <div
                key={route.title}
                className="rounded-xl border border-[#003f87]/10 overflow-hidden shadow-sm"
              >

                <div className="bg-[#003f87] text-white px-5 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between">

                  <h3 className="font-semibold">
                    {route.title}
                  </h3>

                  <span className="text-orange-200 text-xs">
                    {route.distance}
                  </span>

                </div>

                <ul className="px-5 py-4 space-y-2 text-sm list-disc list-inside text-[#0A1330]/90">

                  {route.steps.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}

                </ul>

              </div>

            ))}

          </div>

          <p className="mt-10 text-xs text-[#0A1330]/60">
            <strong>Address:</strong> Indian Institute of Technology Jammu,
            Jagti, PO Nagrota, NH-44, Jammu, Jammu & Kashmir – 181221.
          </p>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="bg-[#003f87] text-white/70">

        <div className="max-w-6xl mx-auto px-4 py-6 text-center text-sm">

          © {new Date().getFullYear()} ICPS 2026. All Rights Reserved.

          <br />

          Department of Electrical Engineering, Indian Institute of Technology Jammu.

        </div>

      </footer>

    </main>
  );
}