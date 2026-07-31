import { importantDates } from "@/lib/siteData";

export default function ImportantDates() {
  return (
    <section id="dates" className="max-w-4xl mx-auto px-4 py-16">
      <p className="eyebrow mb-2">Timeline</p>
      <h2 className="section-heading mb-2">Important Dates</h2>
      <div className="divider-rule mb-8" />

      <div className="overflow-hidden rounded-lg border border-navy-900/10">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-navy-900 text-cream text-left">
              <th className="px-5 py-3 font-semibold">Event</th>
              <th className="px-5 py-3 font-semibold">Date</th>
            </tr>
          </thead>
          <tbody>
            {importantDates.map((row, i) => (
              <tr
                key={row.event}
                className={i % 2 === 0 ? "bg-white" : "bg-navy-900/[0.03]"}
              >
                <td className="px-5 py-3 text-navy-800">{row.event}</td>
                <td className="px-5 py-3 text-navy-900 font-medium">
                  {row.struckDate && (
                    <span className="line-through text-navy-800/40 mr-2">
                      {row.struckDate}
                    </span>
                  )}
                  {row.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
