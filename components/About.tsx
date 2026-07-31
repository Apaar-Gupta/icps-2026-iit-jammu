import { conference, aboutParagraphs } from "@/lib/siteData";

export default function About() {
  return (
    <section id="about" className="max-w-4xl mx-auto px-4 py-16">
      <p className="eyebrow mb-2">About</p>
      <h2 className="section-heading mb-2">{conference.shortName}</h2>
      <div className="divider-rule mb-6" />
      <div className="space-y-5 text-navy-800/90 leading-relaxed text-[15px]">
        {aboutParagraphs.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
    </section>
  );
}
