'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Button } from '@/components/ui/Button'
import { LogicNodeIcon } from '@/components/brand/LogicNodeIcon'
import { FluidShape } from '@/components/effects/FluidShape'
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

export const HeroSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [contactOpen, setContactOpen] = useState(false)

  const scrollToEngine = () => {
    const el = document.getElementById('engine')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden pt-16" data-testid="hero-section">
        {/* Subtle background radial glows */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 70% 40%, hsl(216 100% 50% / 0.04), transparent 60%), radial-gradient(ellipse 50% 50% at 20% 80%, hsl(259 72% 58% / 0.03), transparent 50%)',
          }}
        />

        <div className="section-container relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(100vh-4rem)]">
            {/* Left: Content */}
            <div className="flex flex-col justify-center py-16 lg:py-0">
              <motion.div custom={0} variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} className="mb-8">
                <span
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-wide uppercase"
                  style={{ background: 'hsl(216 100% 50% / 0.06)', color: 'hsl(var(--primary))', border: '1px solid hsl(216 100% 50% / 0.12)' }}
                  data-testid="hero-badge"
                >
                  <span className="w-1.5 h-1.5 rounded-full animate-status-pulse" style={{ background: 'hsl(142 76% 36%)' }} />
                  AI-Augmented Engineering Studio
                </span>
              </motion.div>

              <motion.h1 custom={1} variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tighter text-foreground"
                data-testid="hero-headline"
              >
                Engineering the{' '}
                <span className="gradient-text">Next Generation</span>{' '}
                of Digital Platforms.
              </motion.h1>

              <motion.p custom={2} variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'}
                className="mt-6 text-base md:text-lg leading-relaxed max-w-xl"
                style={{ color: 'hsl(var(--body))' }}
                data-testid="hero-subheadline"
              >
                A modern engineering and growth studio. We integrate world-class
                software development with agentic AI workflows.
              </motion.p>

              <motion.div custom={3} variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'}
                className="mt-10 flex flex-wrap gap-4"
              >
                <Button variant="premium" size="lg" onClick={() => setContactOpen(true)} className="btn-glow" data-testid="hero-start-project-btn">
                  Start a Project
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
                <Button variant="ghost-gradient" size="lg" onClick={scrollToEngine} data-testid="hero-explore-btn">
                  Explore the ACE Engine
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </motion.div>

              <motion.div custom={4} variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} className="mt-14">
                <KeywordMarquee />
              </motion.div>
            </div>

            {/* Right: Fluid Shape */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="hidden lg:flex items-center justify-center"
            >
              <div className="relative w-full aspect-square max-w-lg">
                <FluidShape />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <ContactModal open={contactOpen} onOpenChange={setContactOpen} />
    </>
  )
}
