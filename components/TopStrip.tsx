import { topStrip } from "@/lib/siteData";

export default function TopStrip() {
  // Enough repeats so one group is always wider than the screen
  const repeats = Array.from({ length: 4 });

  return (
    <div className="overflow-hidden whitespace-nowrap border-b border-navy-900/10 bg-cream text-saffron-600">
      <div className="marquee-track py-2 text-sm font-medium">
        {[0, 1].map((group) => (
          <div
            key={group}
            className="marquee-group"
            aria-hidden={group === 1}
          >
            {repeats.map((_, i) => (
              <span key={i} className="px-12">
                {topStrip.text}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}