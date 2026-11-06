import Image from "next/image";

// Partner / co-organizer logo strip shown right below the Hero, matching the
// ICPS 2025 reference site. Replace the `logo` paths below with the real
// files once supplied (drop them in public/images/) — the slots and layout
// are already wired up.
const partnerLogos: { name: string; logo: string }[] = [
  { name: "IIT Jammu", logo: "/images/partners/iit-jammu.png" },
  { name: "Grid-India", logo: "/images/partners/grid-india.png" },
  { name: "IEEE", logo: "/images/partners/ieee.png" },
  { name: "IEEE Jammu Section", logo: "/images/partners/ieee-delhi-section.jpg" },
  { name: "IEEE UP Section", logo: "/images/partners/ieee-up-section.png" },
  {
    name: "IEEE PES/IAS/PELS Joint Chapter",
    logo: "/images/partners/ieee-pes-ias-pels.png",
  },
];

export default function PartnerLogos() {
  return (
    <section className="bg-white border-b border-navy-900/5">
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {partnerLogos.map((p) => (
            <div key={p.name} className="relative w-48 h-24 sm:w-32 sm:h-20">
              <Image
                src={p.logo}
                alt={p.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
