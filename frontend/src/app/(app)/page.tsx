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
import { CTASection } from '@/components/home/CTASection'
import { StickySection } from '@/components/home/StickySection'

export default function HomePage() {
  return (
    <div className="relative overflow-x-hidden" data-testid="home-page">
      <MouseGlow />
      <Navbar />

      <main>
        <HeroSection />

        <StickySection zIndex={10}>
          <TransitionSection />
        </StickySection>

        <StickySection zIndex={20}>
          <PhilosophySection />
        </StickySection>

        <StickySection zIndex={30}>
          <AceEngineSection />
        </StickySection>

        <StickySection zIndex={40}>
          <AceSquadsSection />
        </StickySection>

        <StickySection zIndex={50}>
          <AceLoop />
        </StickySection>

        <StickySection zIndex={60}>
          <CTASection />
        </StickySection>
      </main>

      <Footer />
    </div>
  )
}
