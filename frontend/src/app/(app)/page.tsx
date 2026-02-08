'use client'

import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { MouseGlow } from '@/components/effects/MouseGlow'
import { HeroSection } from '@/components/home/Hero'
import { TransitionSection } from '@/components/home/TransitionSection'
import { PhilosophySection } from '@/components/home/PhilosophySection'
import { AceEngineSection } from '@/components/home/AceEngineSection'
import { AceSquadsSection } from '@/components/home/AceSquadsSection'
import { AceLoop } from '@/components/home/AceLoop'
import { InsightsSection } from '@/components/home/InsightsSection'
import { CTASection } from '@/components/home/CTASection'
import { StickySection } from '@/components/home/StickySection'

export default function HomePage() {
  return (
    <div className="min-h-screen animate-bg-breathe" data-testid="home-page">
      <MouseGlow />
      <Navbar />

      <main>
        <HeroSection />

        <TransitionSection />

        <PhilosophySection />

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
  )
}
