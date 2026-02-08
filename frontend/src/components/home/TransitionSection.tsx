'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
}

export const TransitionSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative py-24 lg:py-36" data-testid="transition-section">
      <div className="absolute left-0 right-0 top-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, hsl(var(--border)), transparent)' }} />
      <div className="absolute left-0 right-0 bottom-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, hsl(var(--border)), transparent)' }} />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 50% 50% at 50% 50%, hsl(216 100% 50% / 0.03), transparent 70%)' }} />

      <div className="section-container relative z-10">
        <motion.div variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-extrabold tracking-tighter leading-[1.12] text-foreground">
            We help businesses{' '}
            <span className="gradient-text">launch faster</span>,{' '}
            automate workflows, and{' '}
            <span className="gradient-text">reduce operational friction</span>.
          </h2>
        </motion.div>
      </div>
    </section>
  )
}
