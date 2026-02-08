'use client'

import { Navbar } from '@/components/layout/Navbar'
import { CTAFooter } from '@/components/layout/Footer'
import { MouseGlow } from '@/components/effects/MouseGlow'
import { ScrollSpiral } from '@/components/effects/ScrollSpiral'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Button } from '@/components/ui/Button'
import { ContactModal } from '@/components/home/ContactModal'
import { ArrowRight } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: [0.4, 0, 0.2, 1] } }),
}

export default function AboutPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [contactOpen, setContactOpen] = useState(false)

  return (
    <div className="min-h-screen animate-bg-breathe" data-testid="about-page">
      <ScrollSpiral />
      <MouseGlow />
      <Navbar />
      <main>
        <section ref={ref} className="relative py-32 lg:py-44 overflow-hidden" data-testid="about-hero">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, hsl(216 100% 50% / 0.04) 0%, transparent 70%)' }} />
          <div className="section-container relative z-10">
            <div className="max-w-2xl mx-auto text-center">
              <motion.p custom={0} variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'}
                className="text-xs font-medium tracking-[0.2em] uppercase mb-4" style={{ color: 'hsl(var(--primary))' }}>About ACE inovations</motion.p>
              <motion.h1 custom={1} variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter text-foreground leading-tight">
                Built by engineers, <span className="gradient-text">for builders</span>.
              </motion.h1>
              <motion.p custom={2} variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'}
                className="mt-6 text-base md:text-lg leading-relaxed" style={{ color: 'hsl(var(--body))' }}>
                ACE inovations is a modern engineering and growth studio. We combine world-class software development with agentic AI workflows to deliver end-to-end digital solutions that scale.
              </motion.p>
              <motion.div custom={3} variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'}
                className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="premium" size="xl" onClick={() => setContactOpen(true)} className="btn-glow" data-testid="about-cta-btn">
                  Start a Project <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
                <Button variant="outline-premium" size="xl" asChild>
                  <a href="mailto:hello@aceinovations.dev">hello@aceinovations.dev</a>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <CTAFooter />
      <ContactModal open={contactOpen} onOpenChange={setContactOpen} />
    </div>
  )
}
