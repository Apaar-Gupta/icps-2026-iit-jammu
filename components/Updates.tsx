import { updates } from "@/lib/siteData";

export default function Updates() {
  return (
    <section id="updates" className="bg-white border-y border-navy-900/5">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <p className="eyebrow mb-2">Latest</p>
        <h2 className="section-heading mb-2">Updates</h2>
        <div className="divider-rule mb-3" />
        <p className="text-navy-800/60 text-sm mb-8">
          The latest conference updates, including announcements and changes, will be
          posted here.
        </p>

        <div className="rounded-lg border border-navy-900/10 divide-y divide-navy-900/10">
          {updates.map((u, i) => (
            <div key={i} className="px-5 py-4 text-sm leading-relaxed">
              <span className="font-semibold text-navy-900">{u.date}</span>
              <span className="text-navy-800/40 mx-1">:</span>
              {u.href ? (
                <a href={u.href} className="text-saffron-600 hover:underline">
                  {u.text}
                </a>
              ) : (
                <span className="text-navy-800/90">{u.text}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
