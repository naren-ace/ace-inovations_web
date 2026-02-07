import { Navbar } from "@/components/Navbar";
import { MouseGlow } from "@/components/MouseGlow";
import { HeroSection } from "@/components/HeroSection";
import { TransitionSection } from "@/components/TransitionSection";
import { AceEngineSection } from "@/components/AceEngineSection";
import { AceSquadsSection } from "@/components/AceSquadsSection";
import { AceLoop } from "@/components/AceLoop";
import { InsightsSection } from "@/components/InsightsSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { StickySection } from "@/components/StickySection";

export default function HomePage() {
  return (
    <div className="min-h-screen animate-bg-breathe">
      <MouseGlow />
      <Navbar />

      <main>
        <HeroSection />

        <TransitionSection />

        <StickySection zIndex={10}>
          <AceEngineSection />
        </StickySection>

        <StickySection zIndex={11} overlap>
          <AceSquadsSection />
        </StickySection>

        <StickySection zIndex={12}>
          <AceLoop />
        </StickySection>

        <StickySection zIndex={13} overlap>
          <InsightsSection />
        </StickySection>

        <StickySection zIndex={14}>
          <CTASection />
        </StickySection>
      </main>

      <Footer />
    </div>
  );
}
