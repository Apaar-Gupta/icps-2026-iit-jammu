import Image from "next/image";
import { organizers } from "@/lib/siteData";

export default function Organizers() {
  return (
    <section id="organizers" className="max-w-5xl mx-auto px-4 py-16 text-center">
      <p className="eyebrow mb-2">Hosted by</p>
      <h2 className="section-heading mb-8">Organizers</h2>

      {organizers.length === 0 ? (
        <p className="text-navy-800/60 text-sm">
          Add organizer logos in <code>lib/siteData.ts</code> (e.g. IIT Jammu).
        </p>
      ) : (
        <div className="flex flex-wrap justify-center items-center gap-12">
          {organizers.map((o) => (
            <a key={o.name} href={o.url ?? "#"} className="relative w-32 h-16">
              <Image src={o.logo} alt={o.name} fill className="object-contain" />
            </a>
          ))}
        </div>
      )}
    </section>
  );
}
