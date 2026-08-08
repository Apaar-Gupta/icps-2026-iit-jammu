import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Explore Jammu | ICPS 2026",
  description:
    "A guide to the heritage sites, temples, and scenic spots near IIT Jammu for ICPS 2026 delegates.",
};

type Spot = {
  name: string;
  distance: string;
  image: string;
  // Which part of the photo to keep in frame when it gets cropped.
  // Try "center" (default), "top", "bottom", or a precise value like "50% 20%".
  imagePosition?: string;
  description: string;
  reach: string;
};

const spots: Spot[] = [
    {
    name: "Vaishno Devi (Katra base camp)",
    distance: "33 km from campus",
    image: "/images/vaishno-devi.jpg",
    description:
      "The base town for the Vaishno Devi shrine, one of India's most-visited pilgrimage sites, set in the Trikuta Hills. The shrine itself is reached by an uphill trek (or pony/helicopter ride) of about 12 km from Katra.",
    reach:
      "Regular cabs and shared taxis run from Jammu to Katra, around an hour's drive from campus.",
  },
  {
    name: "Raghunath Temple",
    distance: "12 km from campus",
    image: "/images/raghunath-temple.avif",
    imagePosition: "top",
    description:
      "One of northern India's largest temple complexes, built in the mid-19th century under Maharaja Ranbir Singh. Several shrines sit under a single roof right in the heart of Jammu city.",
    reach:
      "A cab or auto from campus onto NH-44 towards Jammu city takes about 30–40 minutes depending on traffic.",
  },
  {
    name: "Bahu Fort",
    distance: "16 km from campus",
    image: "/images/bahu-fort.jpg",
    description:
      "A centuries-old fort on the banks of the Tawi River, believed to have been founded by Raja Bahulochan. It now houses a temple to Bawe Wali Mata and overlooks the terraced Bagh-e-Bahu gardens.",
    reach:
      "Just past Jammu city center — roughly 35–45 minutes from campus via NH-44.",
  },
  
  {
    name: "Mansar Lake",
    distance: "63 km from campus",
    image: "/images/mansar-lake.jpg",
    description:
      "A scenic lake ringed by forested hills, considered sacred and linked to the Mahabharata. J&K Tourism runs boating on the lake, and a few ancient temples sit along its banks.",
    reach:
      "Best reached by cab, around 1.5–2 hours each way — worth planning as a half-day trip.",
  },
  {
    name: "Patnitop",
    distance: "95 km from campus",
    image: "/images/patnitop.jpeg",
    description:
      "A hill station on the Jammu–Srinagar highway known for its pine forests, cooler climate, and one of Asia's highest ropeways.",
    reach:
      "About a 2.5–3 hour drive along NH-44 — best done as a full-day excursion if your schedule allows.",
  },
];

export default function ExploreJammuPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#003F87] text-white text-center py-20 px-4">
        <p className="eyebrow mb-3 text-2xl">IIT JAMMU</p>
        <h1 className="font-display text-4xl md:text-5xl font-bold [font-variant-numeric:lining-nums]">
          Explore Jammu
        </h1>
        <p className="mt-4 text-white/80 max-w-2xl mx-auto">
          A quick guide for ICPS 2026 delegates — heritage temples, forts,
          and scenic spots near the IIT Jammu campus.
        </p>
      </section>

      {/* Intro + spot cards */}
      <section className="bg-cream py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-navy-900/80 max-w-3xl mb-12 leading-relaxed md:ml-48">
            IIT Jammu&apos;s permanent campus sits at Jagti, along NH-44,
            close to the Trikuta Hills and about 20 km from Jammu airport
            and Jammu Tawi Railway Station. The city and the surrounding
            region offer plenty to see if you have a few extra hours before
            or after the conference — from temples and forts in the city to
            lakes and hill stations a short drive away.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {spots.map((spot) => (
              <div
                key={spot.name}
                className="bg-white rounded-lg shadow-sm border border-navy-900/10 overflow-hidden flex flex-col"
              >
                {/* photo */}
                <div className="relative w-full h-56 md:h-64">
                  <Image
                    src={spot.image}
                    alt={spot.name}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                    style={{ objectPosition: spot.imagePosition ?? "center" }}
                  />
                </div>

                {/* name + distance */}
                <div className="bg-[#003F87] px-6 py-4 flex items-center justify-between gap-4">
                  <h2 className="font-semibold text-white text-lg">
                    {spot.name}
                  </h2>
                  <span className="text-xs font-medium text-white/80 whitespace-nowrap">
                    {spot.distance}
                  </span>
                </div>

                <div className="px-6 py-5 flex-1 flex flex-col gap-4">
                  <p className="text-navy-900/80 text-sm leading-relaxed">
                    {spot.description}
                  </p>
                  <div className="mt-auto pt-4 border-t border-navy-900/10">
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#003F87] mb-1">
                      How to reach
                    </p>
                    <p className="text-sm text-navy-900/70">{spot.reach}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}