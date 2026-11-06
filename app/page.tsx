import TopStrip from "@/components/TopStrip";
import Hero from "@/components/Hero";
import PartnerLogos from "@/components/PartnerLogos";
import About from "@/components/About";
import Sponsors from "@/components/Sponsors";
import ImportantDates from "@/components/ImportantDates";
import Updates from "@/components/Updates";
import Organizers from "@/components/Organizers";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main>
      <TopStrip/>
      <Hero />
      <PartnerLogos />
      <About />
      <Sponsors />
      <ImportantDates />
      <Updates />
      <Organizers />
      <Footer />
    </main>
  );
}
