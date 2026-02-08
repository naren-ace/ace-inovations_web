'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Button } from '@/components/ui/Button'
import { LogicNodeIcon } from '@/components/brand/LogicNodeIcon'
import { FluidShape } from '@/components/effects/FluidShape'
import { KeywordMarquee } from '@/components/home/KeywordMarquee'
import { ContactModal } from '@/components/home/ContactModal'
import { ArrowRight } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.65, ease: [0.4, 0, 0.2, 1] },
  }),
}

export const HeroSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [contactOpen, setContactOpen] = useState(false)

  return (
    <>
      <section ref={ref} className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden pt-20" data-testid="hero-section">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, hsl(216 100% 50% / 0.05) 0%, transparent 70%)' }}
        />

        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <motion.div custom={0} variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-8"
                style={{ background: 'hsl(216 100% 50% / 0.06)', border: '1px solid hsl(216 100% 50% / 0.12)' }}
              >
                <span className="w-1.5 h-1.5 rounded-full animate-status-pulse" style={{ background: 'hsl(142 76% 36%)' }} />
                <span className="text-xs font-medium tracking-wide" style={{ color: 'hsl(var(--primary))' }}>
                  Engineering the Next Generation
                </span>
              </motion.div>

              <motion.h1 custom={1} variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'}
                className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-extrabold tracking-tighter leading-[1.08] text-foreground"
                data-testid="hero-headline"
              >
                We build digital platforms that{' '}
                <span className="gradient-text">scale</span>.
              </motion.h1>

              <motion.p custom={2} variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'}
                className="mt-6 text-base md:text-lg leading-relaxed max-w-lg"
                style={{ color: 'hsl(var(--body))' }}
              >
                ACE inovations is a modern engineering &amp; growth studio.
                We combine world-class software development with agentic AI
                workflows to ship production-grade systems at velocity.
              </motion.p>

              <motion.div custom={3} variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'}
                className="mt-10 flex flex-wrap items-center gap-4"
              >
                <Button variant="header-dark" size="xl" onClick={() => setContactOpen(true)} className="btn-glow" data-testid="hero-cta-btn">
                  Start a Project
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
                <Button variant="ghost-gradient" size="xl" asChild data-testid="hero-secondary-btn">
                  <a href="#engine">Our Capabilities</a>
                </Button>
              </motion.div>
            </div>

            <motion.div custom={2} variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'}
              className="hidden lg:flex items-center justify-center"
            >
              <div className="w-[420px] h-[420px] relative">
                <FluidShape />
                <div className="absolute inset-0 flex items-center justify-center">
                  <LogicNodeIcon size={80} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="mt-auto pt-16">
          <KeywordMarquee />
        </div>
      </section>

      <ContactModal open={contactOpen} onOpenChange={setContactOpen} />
    </>
  )
}
