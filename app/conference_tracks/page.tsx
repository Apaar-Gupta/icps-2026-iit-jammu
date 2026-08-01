import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conference Tracks | ICPS 2026",
  description:
    "Conference tracks for ICPS 2026, hosted at IIT Jammu, India.",
};

// NOTE: track titles/topics copied as-is from ICPS 2025 for reference —
// update as needed for ICPS 2026 / IIT Jammu. The contact email in the
// intro is left unlinked as "#" — add the mailto link yourself.

type Track = { title: string; topics: string[] };

const tracks: Track[] = [
  {
    title: "Track 1: Smart Grid and Power Systems",
    topics: [
      "Smart Generation, Transmission & Distribution",
      "Active Distribution Networks",
      "Power Electronics & Smart Grid Control",
      "Smart Grid Modeling",
      "HVDC, FACTS, and Transmission Systems",
      "Wide Area Monitoring & Automation",
      "Power Quality Management",
      "Smart Systems Energy Management",
    ],
  },
  {
    title: "Track 2: Renewable Energy Systems",
    topics: [
      "Grid Integration of Renewable Energy",
      "Energy Storage & Grid Integration",
      "Microgrids and Decentralized Systems",
      "Electrification and Decarbonization",
    ],
  },
  {
    title: "Track 3: Artificial Intelligence and Data Analytics in Power Grids",
    topics: [
      "AI in Power System Management",
      "Machine Learning & Data Analytics for Power Grids",
      "Signal Processing for Power Systems",
      "Load, Generation, & Price Forecasting",
      "IoT and Data Analytics in Power Grids",
    ],
  },
  {
    title: "Track 4: Power System Protection, Stability, and Optimization",
    topics: [
      "Power System Protection",
      "System Stability and Control",
      "Grid Optimization Techniques",
      "Advanced Power Apparatus and Simulation",
    ],
  },
  {
    title: "Track 5: Grid Resilience and Security",
    topics: [
      "Flexibility & Resilience of Grids",
      "Cybersecurity in Power Systems",
      "Physical and Cyber Security of Grids",
    ],
  },
  {
    title: "Track 6: Power System Planning and Operations",
    topics: [
      "Power System Planning & Reliability",
      "Restructuring, Economics, and Markets",
      "System Operations and Control",
    ],
  },
  {
    title: "Track 7: Control in Power Systems/Power Electronics",
    topics: [
      "Power Electronics in Smart Grids",
      "Grid Control Strategies",
      "Condition Monitoring and Asset Management",
    ],
  },
  {
    title: "Track 8: Electric Vehicles and Drives",
    topics: [
      "EV-Grid Interaction",
      "Control of Electric Drives",
      "EV Charging Infrastructure",
      "Smart Charging & V2G Systems",
    ],
  },
  {
    title: "Track 9: Emerging Technologies in Power Grids",
    topics: ["Micro, Nano & Pico Grids", "Smart Homes & Building Automation"],
  },
  {
    title: "Track 10: Grid Policy and Regulations",
    topics: ["Power Sector Policies & Regulations"],
  },
];

export default function TracksPage() {
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
            Conference Tracks
          </h1>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-16">
        {/* Intro */}
        <section className="max-w-3xl mx-auto text-center mb-14">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c9631a] mb-2">
            Paper Submission
          </p>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#003f87] mb-4">
            Track Selection
          </h2>
          <p className="text-[#0A1330]/85 leading-relaxed text-[15px]">
            The ICPS 2026 conference features a diverse range of tracks, each
            designed to showcase cutting-edge research in various fields of
            power systems, energy, and technology. We encourage authors to
            select the track that best aligns with the content of their
            paper to ensure appropriate review and session scheduling. If
            you have any doubts regarding the appropriate track for your
            submission, please do not hesitate to contact us at{" "}
            
            <a
              className="text-[#003f87] font-semibold underline decoration-[#c9631a]/40 hover:text-[#c9631a] transition-colors"
            >
              chair@icps2025.in
            </a>{" "}
            for guidance.
          </p>
        </section>

        {/* Track cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tracks.map((track) => (
            <div
              key={track.title}
              className="rounded-lg border border-[#003f87]/10 bg-white overflow-hidden shadow-sm flex flex-col"
            >
              <div className="bg-[#003f87] text-white px-5 py-3">
                <h3 className="font-semibold text-[15px] leading-snug">
                  {track.title}
                </h3>
              </div>
              <ul className="px-5 py-4 space-y-2 flex-1">
                {track.topics.map((topic) => (
                  <li
                    key={topic}
                    className="flex items-start gap-2 text-[14px] text-[#0A1330]/85"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#c9631a] shrink-0" />
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
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