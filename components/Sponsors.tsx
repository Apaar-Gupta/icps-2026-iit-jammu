import Image from "next/image";
import { sponsorTiers, technicalCoSponsors } from "@/lib/siteData";

export default function Sponsors() {
  const hasAnySponsor = sponsorTiers.some((t) => t.sponsors.length > 0);

  return (
    <section id="sponsors" className="bg-white border-y border-navy-900/5">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <p className="eyebrow mb-2">Support</p>
        <h2 className="section-heading mb-2">Financial Sponsors</h2>
        <div className="divider-rule mb-10" />

        {!hasAnySponsor && (
          <p className="text-navy-800/60 text-sm mb-10">
            Sponsorship announcements will appear here as they are confirmed.
          </p>
        )}

        <div className="space-y-10">
          {sponsorTiers.map(
            (group) =>
              group.sponsors.length > 0 && (
                <div key={group.tier}>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-navy-700 mb-4">
                    {group.tier}
                  </h3>
                  <div className="flex flex-wrap items-center gap-8">
                    {group.sponsors.map((s) => (
                      <a
                        key={s.name}
                        href={s.url ?? "#"}
                        className="relative w-32 h-16 grayscale hover:grayscale-0 transition-all"
                      >
                        <Image
                          src={s.logo}
                          alt={s.name}
                          fill
                          className="object-contain"
                        />
                      </a>
                    ))}
                  </div>
                </div>
              )
          )}
        </div>

        {technicalCoSponsors.length > 0 && (
          <div className="mt-14">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-navy-700 mb-4">
              Financial and Technical Co-sponsors
            </h3>
            <div className="flex flex-wrap items-center gap-8">
              {technicalCoSponsors.map((s) => (
                <div key={s.name} className="relative w-28 h-14">
                  <Image src={s.logo} alt={s.name} fill className="object-contain" />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
