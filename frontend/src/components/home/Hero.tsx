'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Button } from '@/components/ui/Button'
import { TypewriterText } from '@/components/effects/TypewriterText'
import { NeuralLab } from '@/components/effects/NeuralLab'
import { KeywordMarquee } from '@/components/home/KeywordMarquee'
import { ContactModal } from '@/components/home/ContactModal'
import { ArrowRight, ChevronRight } from 'lucide-react'

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
  const subtitle = cms?.narrative || 'ACE inovations is a modern engineering and growth studio. We combine world-class software development with agentic AI workflows to deliver end-to-end digital solutions that scale.'

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
      <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden pt-16" data-testid="hero-section">
        {/* Background */}
        <div className="absolute inset-0" style={{ zIndex: 0 }}>
          <NeuralLab />
        </div>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            zIndex: 1,
            background: 'radial-gradient(ellipse 80% 60% at 50% 40%, hsl(216 100% 50% / 0.04), transparent 60%), radial-gradient(ellipse 50% 50% at 80% 80%, hsl(259 72% 58% / 0.03), transparent 50%)',
          }}
        />

        {/* Content */}
        <div className="section-container relative w-full" style={{ zIndex: 10 }}>
          <div className="flex flex-col items-center text-center min-h-[calc(100vh-4rem)] justify-center py-16">
            {/* Badge */}
            <motion.div custom={0} variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} className="mb-8">
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-wide uppercase"
                style={{ background: 'hsl(216 100% 50% / 0.06)', color: 'hsl(var(--primary))', border: '1px solid hsl(216 100% 50% / 0.12)' }}
                data-testid="hero-badge"
              >
                <span className="w-1.5 h-1.5 rounded-full animate-status-pulse" style={{ background: 'hsl(142 76% 36%)' }} />
                {badge}
              </span>
            </motion.div>

            {/* Typewriter headline — two lines, slow typing */}
            <motion.div custom={1} variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} className="w-full">
              <h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-extrabold leading-[1.12] text-foreground"
                style={{ letterSpacing: '-0.04em' }}
                data-testid="hero-headline"
              >
                <span className="block whitespace-nowrap">
                  <TypewriterText parts={line1Parts} speed={70} showCursorWhenDone={false} />
                </span>
                <span className="block whitespace-nowrap mt-1">
                  <TypewriterText parts={line2Parts} speed={70} delayMs={line1Length * 70 + 200} />
                </span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p custom={2} variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'}
              className="mt-6 text-base md:text-lg leading-relaxed max-w-2xl"
              style={{ color: 'hsl(var(--body))' }}
              data-testid="hero-subheadline"
            >
              {subtitle}
            </motion.p>

            {/* CTAs */}
            <motion.div custom={3} variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'}
              className="mt-10 flex flex-wrap gap-4 justify-center"
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
            <motion.div custom={4} variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} className="mt-14 w-full">
              <KeywordMarquee />
            </motion.div>
          </div>
        </div>
      </section>

      <ContactModal open={contactOpen} onOpenChange={setContactOpen} />
    </>
  )
}
