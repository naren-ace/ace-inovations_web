'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import { Button } from '@/components/ui/Button'
import { TypewriterText } from '@/components/effects/TypewriterText'
import { GradientMesh } from '@/components/effects/GradientMesh'
import { KeywordMarquee } from '@/components/home/KeywordMarquee'
import { ContactModal } from '@/components/home/ContactModal'
import { ArrowRight, ChevronRight } from 'lucide-react'

// Lazy-load globe to avoid SSR issues with Three.js
const HeroGlobe = dynamic(
  () => import('@/components/effects/HeroGlobe').then(m => ({ default: m.HeroGlobe })),
  { ssr: false }
)

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: 0.15 + i * 0.1, duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  }),
}

export const HeroSection = ({ cms }: { cms?: any }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [contactOpen, setContactOpen] = useState(false)

  const badge = cms?.badgeText || 'INNOVATE. ELEVATE. ACE IT.'
  const ctaText = cms?.ctaButtonText || 'Start a Project'
  const secText = cms?.secondaryButtonText || 'Explore the ACE Engine'
  const subtitle = cms?.narrative || 'We combine world-class software engineering with agentic AI workflows to deliver end-to-end digital platforms that scale globally.'

  const line1Parts = [
    { text: cms?.headlinePart1 || 'Engineering the ' },
    { text: cms?.headlineHighlight || 'Next Generation', highlight: true },
  ]

  const line2Parts = [
    { text: cms?.headlinePart2 || 'of Digital Platforms.' },
  ]

  const scrollToEngine = () => {
    const el = document.getElementById('engine')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const line1Length = line1Parts.reduce((sum, p) => sum + p.text.length, 0)

  return (
    <>
      <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden" data-testid="hero-section">
        {/* Ambient gradient mesh background */}
        <div className="absolute inset-0" style={{ zIndex: 0 }}>
          <GradientMesh />
        </div>

        {/* 3D Globe — offset to the right, clipped to hero bounds */}
        <div
          className="absolute top-0 bottom-0 hidden lg:block"
          style={{ zIndex: 2, left: '40%', right: 0 }}
        >
          <HeroGlobe />
        </div>

        {/* Content */}
        <div className="section-container relative w-full" style={{ zIndex: 10 }}>
          <div className="grid lg:grid-cols-2 gap-8 items-center min-h-screen pt-20 pb-8">
            {/* Left column — text */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              {/* Badge */}
              <motion.div custom={0} variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} className="mb-6">
                <span
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-wide uppercase"
                  style={{ background: 'hsl(216 100% 50% / 0.06)', color: 'hsl(var(--primary))', border: '1px solid hsl(216 100% 50% / 0.12)' }}
                  data-testid="hero-badge"
                >
                  <span className="w-1.5 h-1.5 rounded-full animate-status-pulse" style={{ background: 'hsl(142 76% 36%)' }} />
                  {badge}
                </span>
              </motion.div>

              {/* Typewriter headline */}
              <motion.div custom={1} variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
                <h1
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] xl:text-[3.8rem] font-extrabold leading-[1.1] text-foreground"
                  style={{ letterSpacing: '-0.04em' }}
                  data-testid="hero-headline"
                >
                  <span className="block whitespace-nowrap">
                    <TypewriterText parts={line1Parts} speed={120} showCursorWhenDone={false} />
                  </span>
                  <span className="block whitespace-nowrap mt-1">
                    <TypewriterText parts={line2Parts} speed={120} delayMs={line1Length * 120 + 400} />
                  </span>
                </h1>
              </motion.div>

              {/* Subtitle */}
              <motion.p custom={2} variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'}
                className="mt-5 text-base md:text-lg leading-relaxed max-w-lg"
                style={{ color: 'hsl(var(--body))' }}
                data-testid="hero-subheadline"
              >
                {subtitle}
              </motion.p>

              {/* CTAs */}
              <motion.div custom={3} variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'}
                className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start"
              >
                <Button variant="premium" size="lg" onClick={() => setContactOpen(true)} className="btn-glow" data-testid="hero-start-project-btn">
                  {ctaText}
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
                <Button variant="ghost-gradient" size="lg" onClick={scrollToEngine} data-testid="hero-explore-btn">
                  {secText}
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </motion.div>

              {/* Marquee */}
              <motion.div custom={4} variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} className="mt-12 w-full lg:max-w-lg">
                <KeywordMarquee />
              </motion.div>
            </div>

            {/* Right column — space for the globe (the globe is position:absolute) */}
            <div className="hidden lg:block" />
          </div>
        </div>
      </section>

      <ContactModal open={contactOpen} onOpenChange={setContactOpen} />
    </>
  )
}
