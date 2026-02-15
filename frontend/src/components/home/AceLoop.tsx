'use client'

import { motion, useInView } from 'framer-motion'
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

// Bento layout: first step spans full width, last step spans full width, middle two side by side
const bentoCols = [
  'md:col-span-2',  // Full width
  'md:col-span-1',  // Half
  'md:col-span-1',  // Half
  'md:col-span-2',  // Full width
]

function StepBentoCard({ step, index, isInView }: { step: any; index: number; isInView: boolean }) {
  const Icon = iconMap[step.number] || Compass
  const isEven = index % 2 === 0
  const isWide = index === 0 || index === 3

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className={`bento-card group relative p-7 ${isWide ? 'lg:p-9' : ''} ${bentoCols[index]}`}
      data-testid={`process-step-${step.number}`}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-600 pointer-events-none"
        style={{
          background: isEven
            ? 'radial-gradient(ellipse at 10% 10%, hsl(216 100% 50% / 0.06), transparent 50%)'
            : 'radial-gradient(ellipse at 10% 10%, hsl(270 80% 65% / 0.06), transparent 50%)',
        }}
      />

      <div className={`relative z-10 ${isWide ? 'flex items-start gap-6' : ''}`}>
        {/* Step icon + number */}
        <div className={`${isWide ? '' : 'mb-5'}`}>
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center relative transition-transform duration-400 group-hover:scale-105"
            style={{
              background: isEven
                ? 'linear-gradient(135deg, hsl(216 100% 50% / 0.10), hsl(216 100% 50% / 0.03))'
                : 'linear-gradient(135deg, hsl(270 80% 65% / 0.10), hsl(270 80% 65% / 0.03))',
              border: `1px solid ${isEven ? 'hsl(216 100% 50% / 0.15)' : 'hsl(270 80% 65% / 0.15)'}`,
            }}
          >
            <Icon
              className="w-7 h-7"
              style={{ color: isEven ? 'hsl(var(--primary))' : 'hsl(var(--accent))' }}
              strokeWidth={1.5}
            />
          </div>
        </div>

        <div className={`flex-1 ${isWide ? '' : ''}`}>
          <div className="flex items-center gap-3 mb-2">
            <span
              className="text-[11px] font-mono font-semibold tracking-[0.25em] uppercase"
              style={{ color: isEven ? 'hsl(var(--primary))' : 'hsl(var(--accent))' }}
            >
              Step {step.number}
            </span>
            <span
              className="text-[10px] font-semibold tracking-[0.15em] uppercase px-2 py-0.5 rounded-full"
              style={{
                color: isEven ? 'hsl(var(--primary))' : 'hsl(var(--accent))',
                background: isEven ? 'hsl(216 100% 50% / 0.06)' : 'hsl(270 80% 65% / 0.06)',
              }}
            >
              {step.stepLabel}
            </span>
          </div>

          <h3 className="text-lg font-bold text-foreground tracking-tight mb-2">
            {step.title}
          </h3>

          <p
            className={`text-sm leading-relaxed ${isWide ? 'max-w-lg' : ''}`}
            style={{ color: 'hsl(var(--body))' }}
          >
            {step.description}
          </p>
        </div>
      </div>
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
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 45% 35% at 60% 40%, hsl(270 80% 65% / 0.025), transparent 50%), radial-gradient(ellipse 40% 30% at 30% 70%, hsl(216 100% 50% / 0.03), transparent 50%)',
      }} />

      <div className="section-container relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
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

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {steps.map((step: any, i: number) => (
            <StepBentoCard key={step.number || i} step={step} index={i} isInView={headerInView} />
          ))}
        </div>
      </div>
    </section>
  )
}
