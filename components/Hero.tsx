import Image from "next/image";
import { conference, navLinks, coSponsors } from "@/lib/siteData";

export default function Hero() {
  return (
    <header className="relative overflow-hidden text-cream min-h-[560px] md:min-h-[640px] flex items-center">
      {/* full-bleed background image */}
      <Image
        src="/images/ICPSLogo.png"
        alt="ICPS 2026 background"
        fill
        priority
        className="object-cover object-center z-0"
      />

      {/* dark overlay so the text stays readable over the photo */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-navy-950/85 via-navy-900/70 to-navy-950/90" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 py-20 flex flex-col items-center text-center">
        <p className="eyebrow mb-3">{conference.edition} Edition</p>
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          {conference.fullName}
        </h1>
        <p className="mt-4 text-cream/80 text-lg">at {conference.venue}</p>

        <div className="mt-8 flex flex-wrap justify-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-6 py-3 rounded-md bg-saffron-500 hover:bg-saffron-400 text-navy-950 font-semibold transition-colors shadow-lg shadow-saffron-500/20"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Organizer / co-sponsor logo strip */}
        {coSponsors.length > 0 && (
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 opacity-90">
            {coSponsors.map((s) => (
              <div key={s.name} className="relative w-24 h-14">
                <Image src={s.logo} alt={s.name} fill className="object-contain" />
              </div>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
