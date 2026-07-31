import { footer } from "@/lib/siteData";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-cream/70 text-sm">
      <div className="max-w-6xl mx-auto px-4 py-6 text-center">
        {footer.text}
      </div>
    </footer>
  );
}
