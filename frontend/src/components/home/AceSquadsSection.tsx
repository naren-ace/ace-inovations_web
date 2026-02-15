'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Lightbulb, Code2, Rocket, Target } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.65, ease: [0.4, 0, 0.2, 1] } }),
}

const iconMap: Record<string, any> = { lightbulb: Lightbulb, code: Code2, rocket: Rocket, target: Target }

const defaultPillars = [
  { icon: 'lightbulb', title: 'Product Strategy', description: 'We embed with your team to understand your market, users, and competitive landscape. From discovery to roadmap, every decision is grounded in data and domain expertise.', capabilities: [{ text: 'Market & user research' }, { text: 'Product roadmapping' }, { text: 'Technical feasibility analysis' }, { text: 'Competitive positioning' }] },
  { icon: 'code', title: 'Technical Engineering', description: 'Full-stack development powered by AI-augmented workflows. We build scalable, maintainable systems using modern architectures and battle-tested engineering practices.', capabilities: [{ text: 'Full-stack development' }, { text: 'AI-augmented delivery' }, { text: 'Cloud-native architecture' }, { text: 'CI/CD & DevOps' }] },
  { icon: 'rocket', title: 'Growth Operations', description: 'Launching is only the beginning. We instrument your product for growth, optimizing funnels, performance, and visibility to drive sustainable traction.', capabilities: [{ text: 'Technical SEO' }, { text: 'Funnel instrumentation' }, { text: 'Performance optimization' }, { text: 'Analytics & attribution' }] },
]

export const AceSquadsSection = ({ cms }: { cms?: any }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const label = cms?.label || 'ACE Squads'
  const heading = cms?.heading || 'Integrated Expertise.'
  const desc = cms?.description || 'Our squads combine three disciplines into a single, high-velocity unit. No silos. No handoff friction. Just seamless execution.'
  const pillars = cms?.pillars?.length ? cms.pillars : defaultPillars

  return (
    <section id="squads" ref={ref} className="relative py-24 lg:py-32" style={{ background: 'hsl(var(--surface-subtle))' }} data-testid="squads-section">
      <div className="absolute left-0 right-0 top-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, hsl(var(--border)), transparent)' }} />
      <div className="section-container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.p custom={0} variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} className="text-xs font-medium tracking-[0.2em] uppercase mb-4" style={{ color: 'hsl(var(--primary))' }}>{label}</motion.p>
          <motion.h2 custom={1} variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tighter text-foreground leading-tight">{heading}</motion.h2>
          <motion.p custom={2} variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} className="mt-4 text-base md:text-lg leading-relaxed" style={{ color: 'hsl(var(--body))' }}>{desc}</motion.p>
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
          {pillars.map((pillar: any, i: number) => {
            const color = i % 2 === 0 ? 'primary' : 'accent'
            const Icon = iconMap[pillar.icon] || Lightbulb
            const capList = pillar.capabilities || []
            return (
              <motion.div key={pillar.title || i} custom={3 + i} variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'}
                className="glass-card-hover rounded-xl p-7 flex flex-col" data-testid={`squad-card-${i}`}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: color === 'primary' ? 'hsl(216 100% 50% / 0.08)' : 'hsl(259 72% 58% / 0.08)' }}>
                  <Icon className="w-5 h-5" style={{ color: color === 'primary' ? 'hsl(var(--primary))' : 'hsl(var(--accent))' }} />
                </div>
                <h3 className="text-lg font-bold text-foreground tracking-tight mb-3">{pillar.title}</h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: 'hsl(var(--body))' }}>{pillar.description}</p>
                <ul className="mt-auto space-y-2.5">
                  {capList.map((cap: any, ci: number) => (
                    <li key={ci} className="flex items-center gap-2.5 text-sm">
                      <span className="w-1 h-1 rounded-full shrink-0" style={{ background: color === 'primary' ? 'hsl(var(--primary))' : 'hsl(var(--accent))' }} />
                      <span style={{ color: 'hsl(var(--body))' }}>{typeof cap === 'string' ? cap : cap.text}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
