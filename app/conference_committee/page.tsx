import type { Metadata } from "next";
import Footer from "@/components/Footer";
import { committeeGroups } from "@/lib/committeeData";

export const metadata: Metadata = {
  title: "Conference Committee | ICPS 2027",
  description:
    "Organizing committee of ICPS 2027, hosted at IIT Jammu, India.",
};

export default function CommitteePage() {
  return (
    <main>
      <section className="bg-[#003f87] py-16 md:py-20 text-center text-white">
        <p className="eyebrow text-saffron-300">ICPS 2027</p>
        <h1 className="mt-3 font-display text-3xl md:text-5xl font-extrabold">
          Conference Committee
        </h1>
        <p className="mt-3 text-white/80 max-w-2xl mx-auto px-4">
          Meet the organizing team behind ICPS 2027, hosted by IIT Jammu.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-6">
          {committeeGroups.map((group) => (
            <div
              key={group.position}
              className="rounded-lg overflow-hidden border border-navy-100 bg-white shadow-sm"
            >
              <div className="bg-[#003f87] px-5 py-3">
                <h2 className="font-display font-bold text-white text-sm md:text-base">
                  {group.position}
                </h2>
                {group.responsibility && (
                  <p className="text-white/70 text-xs mt-0.5">
                    {group.responsibility}
                  </p>
                )}
              </div>
              <ul className="px-5 py-4 space-y-2">
                {group.members.map((member) => (
                  <li
                    key={member}
                    className="flex items-start gap-2 text-sm text-navy-800"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-saffron-500 shrink-0" />
                    {member}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
