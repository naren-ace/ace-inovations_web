'use client'

import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Compass, PenTool, Zap, Rocket } from 'lucide-react'

const iconMap: Record<string, any> = {
  '01': Compass,
  '02': PenTool,
  '03': Zap,
  '04': Rocket,
}

const defaultSteps = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    stepLabel: 'Understand',
    description: 'We decode your business DNA — mapping users, market dynamics, and technical constraints to define the right problem before writing a single line of code.',
  },
  {
    number: '02',
    title: 'Architecture & Design',
    stepLabel: 'Design',
    description: 'System blueprints and interface design evolve in parallel. Every decision balances technical scalability with intuitive user experience.',
  },
  {
    number: '03',
    title: 'Sprint Development',
    stepLabel: 'Build',
    description: 'AI-augmented engineering squads ship production-grade features at 3x velocity — with automated testing, code review, and zero-compromise quality gates.',
  },
  {
    number: '04',
    title: 'Launch & Iterate',
    stepLabel: 'Ship',
    description: "We don't disappear after launch. Continuous monitoring, data-driven iteration, and performance optimization ensure your product thrives long-term.",
  },
]

function StepCard({ step, index, total }: { step: any; index: number; total: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const Icon = iconMap[step.number] || Compass
  const isEven = index % 2 === 0

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="relative group"
      data-testid={`process-step-${step.number}`}
    >
      {/* Connector line — hidden on last card and on mobile */}
      {index < total - 1 && (
        <div className="hidden lg:block absolute top-[36px] left-[calc(50%+36px)] right-0 translate-x-[0] h-px z-0"
          style={{ width: 'calc(100% - 72px)', left: 'calc(50% + 36px)' }}>
          <motion.div
            className="h-full w-full"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: index * 0.15 + 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{
              transformOrigin: 'left',
              background: 'linear-gradient(90deg, hsl(var(--primary) / 0.4), hsl(var(--accent) / 0.2))',
            }}
          />
        </div>
      )}

      {/* Step number badge */}
      <div className="flex justify-center mb-6">
        <motion.div
          whileHover={{ scale: 1.08 }}
          transition={{ type: 'spring', stiffness: 400, damping: 15 }}
          className="relative w-[72px] h-[72px] rounded-2xl flex items-center justify-center z-10"
          style={{
            background: isEven
              ? 'linear-gradient(135deg, hsl(var(--primary) / 0.12), hsl(var(--primary) / 0.04))'
              : 'linear-gradient(135deg, hsl(var(--accent) / 0.12), hsl(var(--accent) / 0.04))',
            border: `1px solid ${isEven ? 'hsl(var(--primary) / 0.2)' : 'hsl(var(--accent) / 0.2)'}`,
          }}
        >
          <Icon
            className="w-7 h-7"
            style={{ color: isEven ? 'hsl(var(--primary))' : 'hsl(var(--accent))' }}
            strokeWidth={1.5}
          />
          {/* Glow ring on hover */}
          <div
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              boxShadow: isEven
                ? '0 0 24px hsl(var(--primary) / 0.15), inset 0 0 12px hsl(var(--primary) / 0.05)'
                : '0 0 24px hsl(var(--accent) / 0.15), inset 0 0 12px hsl(var(--accent) / 0.05)',
            }}
          />
        </motion.div>
      </div>

      {/* Step number */}
      <div className="text-center mb-2">
        <span
          className="text-[11px] font-mono font-semibold tracking-[0.25em] uppercase"
          style={{ color: isEven ? 'hsl(var(--primary))' : 'hsl(var(--accent))' }}
        >
          Step {step.number}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-foreground text-center mb-1 tracking-tight">
        {step.title}
      </h3>

      {/* Step label */}
      <p
        className="text-xs font-semibold tracking-[0.15em] uppercase text-center mb-4"
        style={{ color: isEven ? 'hsl(var(--primary) / 0.7)' : 'hsl(var(--accent) / 0.7)' }}
      >
        {step.stepLabel}
      </p>

      {/* Description */}
      <p
        className="text-sm leading-relaxed text-center max-w-[280px] mx-auto"
        style={{ color: 'hsl(var(--body))' }}
      >
        {step.description}
      </p>
    </motion.div>
  )
}

export const AceLoop = ({ cms }: { cms?: any }) => {
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' })

  const label = cms?.label || 'Our Process'
  const heading = cms?.heading || 'The ACE Loop.'
  const desc = cms?.description || 'A battle-tested methodology that transforms ambitious ideas into production-ready platforms — systematically, predictably, and at velocity.'
  const steps = cms?.steps?.length ? cms.steps : defaultSteps

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative py-24 lg:py-36 overflow-hidden"
      data-testid="process-section"
    >
      {/* Subtle background — very faint dot pattern instead of heavy grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, hsl(var(--foreground)) 0.5px, transparent 0.5px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="section-container relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-20 lg:mb-24">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-xs font-medium tracking-[0.2em] uppercase mb-4"
            style={{ color: 'hsl(var(--primary))' }}
          >
            {label}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tighter text-foreground leading-tight"
          >
            {heading}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 text-base md:text-lg leading-relaxed"
            style={{ color: 'hsl(var(--body))' }}
          >
            {desc}
          </motion.p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
          {steps.map((step: any, i: number) => (
            <StepCard key={step.number || i} step={step} index={i} total={steps.length} />
          ))}
        </div>

        {/* Bottom accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={headerInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 lg:mt-24 mx-auto max-w-xs h-px"
          style={{
            transformOrigin: 'center',
            background: 'linear-gradient(90deg, transparent, hsl(var(--primary) / 0.3), hsl(var(--accent) / 0.3), transparent)',
          }}
        />
      </div>
    </section>
  )
}
