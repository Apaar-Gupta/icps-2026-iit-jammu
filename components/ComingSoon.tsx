// Shared placeholder shown on pages that are temporarily set to
// "To be announced". The original page content for each of these routes is
// kept in its source file (renamed to a non-exported, non-rendered function)
// so it can be restored later — see the NOTE comment at the top of each
// page.tsx that uses this component.
export default function ComingSoon({ title }: { title: string }) {
  return (
    <main className="bg-[#FBF7F0] text-[#0A1330] min-h-[60vh]">
      <header className="relative bg-[#003f87] text-white overflow-hidden">
        <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
        <div className="relative max-w-5xl mx-auto px-4 pt-16 pb-14 text-center">
          <p className="text-xl font-semibold tracking-[0.25em] uppercase text-orange-300 mb-3">
            ICPS 2027
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            {title}
          </h1>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <p className="text-2xl md:text-3xl font-serif font-bold text-[#003f87] mb-3">
          To be announced
        </p>
        <p className="text-[#0A1330]/70 text-[15px] leading-relaxed">
          Details for this section will be published here closer to the
          conference. Please check back soon.
        </p>
      </div>

      <footer className="bg-[#003f87] text-white/70 text-sm">
        <div className="max-w-6xl mx-auto px-4 py-6 text-center">
          © {new Date().getFullYear()} ICPS 2027. All rights reserved. | ICPS
          2027 is organized by the Department of Electrical Engineering, IIT
          Jammu.
        </div>
      </footer>
    </main>
  );
}
