import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AceEngineSection } from "@/components/AceEngineSection";
import { ServiceArchitecture } from "@/components/ServiceArchitecture";
import { AceLoop } from "@/components/AceLoop";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AceEngineSection />
        <ServiceArchitecture />
        <AceLoop />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
