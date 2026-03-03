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

        {/*
          3D Globe:
          - Mobile: full background, centered, semi-transparent
          - Tablet (md): shifted right
          - Desktop (lg): more right, bigger space
        */}
        <div
          className="absolute inset-0 md:left-[30%] lg:left-[40%]"
          style={{ zIndex: 2 }}
        >
          <div className="w-full h-full opacity-30 md:opacity-100">
            <HeroGlobe />
          </div>
        </div>

        {/* Content */}
        <div className="section-container relative w-full" style={{ zIndex: 10 }}>
          <div className="flex flex-col items-center text-center md:items-start md:text-left min-h-screen justify-center pt-20 pb-8">
            {/* Badge */}
            <motion.div custom={0} variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} className="mb-6">
              <span
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-medium tracking-wide uppercase"
                style={{ background: 'hsl(216 100% 50% / 0.06)', color: 'hsl(var(--primary))', border: '1px solid hsl(216 100% 50% / 0.12)' }}
                data-testid="hero-badge"
              >
                <span className="w-1.5 h-1.5 rounded-full animate-status-pulse" style={{ background: 'hsl(142 76% 36%)' }} />
                {badge}
              </span>
            </motion.div>

            {/* Typewriter headline — responsive sizing, natural wrapping */}
            <motion.div custom={1} variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} className="max-w-2xl lg:max-w-none">
              <h1
                className="text-[1.75rem] sm:text-4xl md:text-[2.75rem] lg:text-[3.2rem] xl:text-[3.8rem] font-extrabold leading-[1.3] text-foreground"
                style={{ letterSpacing: '-0.04em' }}
                data-testid="hero-headline"
              >
                <span className="block lg:whitespace-nowrap">
                  <TypewriterText parts={line1Parts} speed={120} showCursorWhenDone={false} />
                </span>
                <span className="block lg:whitespace-nowrap mt-2 sm:mt-3">
                  <TypewriterText parts={line2Parts} speed={120} delayMs={line1Length * 120 + 400} />
                </span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p custom={2} variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'}
              className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg leading-relaxed max-w-md md:max-w-lg"
              style={{ color: 'hsl(var(--body))' }}
              data-testid="hero-subheadline"
            >
              {subtitle}
            </motion.p>

            {/* CTAs */}
            <motion.div custom={3} variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'}
              className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto"
            >
              <Button variant="premium" size="lg" onClick={() => setContactOpen(true)} className="btn-glow w-full sm:w-auto" data-testid="hero-start-project-btn">
                {ctaText}
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
              <Button variant="ghost-gradient" size="lg" onClick={scrollToEngine} className="w-full sm:w-auto" data-testid="hero-explore-btn">
                {secText}
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </motion.div>

            {/* Marquee */}
            <motion.div custom={4} variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} className="mt-10 sm:mt-12 w-full md:max-w-lg">
              <KeywordMarquee />
            </motion.div>
          </div>
        </div>
      </section>

      <ContactModal open={contactOpen} onOpenChange={setContactOpen} />
    </>
  )
}
