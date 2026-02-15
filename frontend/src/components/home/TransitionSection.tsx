'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
}

export const TransitionSection = ({ cms }: { cms?: any }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const t1 = cms?.textBefore1 || 'We help businesses'
  const h1 = cms?.highlight1 || 'launch faster'
  const tm = cms?.textMiddle || ', automate workflows, and'
  const h2 = cms?.highlight2 || 'reduce operational friction'
  const ta = cms?.textAfter || '.'

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
            {t1}{' '}
            <span className="gradient-text">{h1}</span>
            {tm}{' '}
            <span className="gradient-text">{h2}</span>
            {ta}
          </h2>
        </motion.div>
      </div>
    </section>
  )
}
