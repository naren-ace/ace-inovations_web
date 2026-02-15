'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Button } from '@/components/ui/Button'
import { ContactModal } from '@/components/home/ContactModal'
import { ArrowRight } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.65, ease: [0.4, 0, 0.2, 1] } }),
}

export const PhilosophySection = ({ cms }: { cms?: any }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [contactOpen, setContactOpen] = useState(false)

  const label = cms?.label || 'Philosophy'
  const hp1 = cms?.headingPart1 || "We don\u2019t hide the fact that we use AI."
  const hhl = cms?.headingHighlight || 'We celebrate it.'
  const body = cms?.body || "At ACE Innovations, technology isn\u2019t a shortcut\u2014it\u2019s a force multiplier. We use it to handle solved problems so our team can focus on what actually matters: your unique business logic, complex workflows, and competitive differentiation.\n\nThe result? Faster delivery without sacrificing quality, security, or scalability."
  const btnText = cms?.ctaButtonText || 'Start a Project'

  return (
    <>
      <section ref={ref} className="relative py-24 lg:py-32" style={{ background: 'hsl(var(--surface-subtle))' }} data-testid="philosophy-section">
        <div className="absolute left-0 right-0 top-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, hsl(var(--border)), transparent)' }} />
        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div custom={0} variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
              <p className="text-xs font-medium tracking-[0.2em] uppercase mb-4" style={{ color: 'hsl(var(--accent))' }}>{label}</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tighter text-foreground leading-tight">
                {hp1}{' '}<span className="gradient-text">{hhl}</span>
              </h2>
            </motion.div>
            <div className="space-y-6">
              <motion.div custom={1} variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'}
                className="text-base leading-relaxed" style={{ color: 'hsl(var(--body))' }}>
                {body.split('\n\n').map((paragraph: string, i: number) => (
                  <p key={i} className={i > 0 ? 'mt-4' : ''}>{paragraph}</p>
                ))}
              </motion.div>
              <motion.div custom={2} variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
                <Button variant="premium" size="lg" onClick={() => setContactOpen(true)} className="btn-glow">
                  {btnText} <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <ContactModal open={contactOpen} onOpenChange={setContactOpen} />
    </>
  )
}
