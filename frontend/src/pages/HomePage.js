import { Navbar } from "@/components/Navbar";
import { MouseGlow } from "@/components/MouseGlow";
import { HeroSection } from "@/components/HeroSection";
import { AceEngineSection } from "@/components/AceEngineSection";
import { ServiceArchitecture } from "@/components/ServiceArchitecture";
import { AceLoop } from "@/components/AceLoop";
import { AceLabsSection } from "@/components/AceLabsSection";
import { InsightsSection } from "@/components/InsightsSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { StickySection } from "@/components/StickySection";

export default function HomePage() {
  return (
    <div className="min-h-screen animate-bg-breathe">
      {/* Mouse-following purple glow */}
      <MouseGlow />

      <Navbar />

      <main>
        <HeroSection />

        <StickySection zIndex={10}>
          <AceEngineSection />
        </StickySection>

        <StickySection zIndex={11} overlap>
          <ServiceArchitecture />
        </StickySection>

        <StickySection zIndex={12}>
          <AceLoop />
        </StickySection>

        <StickySection zIndex={13} overlap>
          <AceLabsSection />
        </StickySection>

        <StickySection zIndex={14}>
          <InsightsSection />
        </StickySection>

        <StickySection zIndex={15} overlap>
          <CTASection />
        </StickySection>
      </main>

      <Footer />
    </div>
  );
}
