import { topStrip } from "@/lib/siteData";

export default function TopStrip() {
  return (
    <div className="bg-cream text-saffron-600 border-b border-navy-900/10 overflow-hidden whitespace-nowrap">
      <div className="inline-flex animate-marquee py-2 text-sm font-medium">
        <a
          
          className="px-6 hover:text-saffron-500 transition-colors"
        >
          {topStrip.text}
        </a>
        {/* duplicated so the strip loops seamlessly */}
        <a
          
          aria-hidden="true"
          className="px-6 hover:text-saffron-500 transition-colors"
        >
          {topStrip.text}
        </a>
      </div>
    </div>
  );
}
