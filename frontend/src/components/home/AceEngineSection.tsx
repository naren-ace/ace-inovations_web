'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Cpu, Layers, GitBranch, Shield, Lightbulb, Rocket, Code2, TrendingUp, Zap } from 'lucide-react'

const iconMap: Record<string, any> = {
  cpu: Cpu, layers: Layers, 'git-branch': GitBranch, shield: Shield,
  lightbulb: Lightbulb, rocket: Rocket, code: Code2, zap: Zap, growth: TrendingUp,
}

const defaultCapabilities = [
  { icon: 'lightbulb', title: 'Product Strategy', description: 'From market research to technical roadmaps — we define the right problem before engineering the solution.' },
  { icon: 'cpu', title: 'AI-Augmented Development', description: 'Our engineers work alongside AI agents that handle boilerplate, testing, and docs — so we focus on your business logic.' },
  { icon: 'layers', title: 'Scalable Architecture', description: 'Architecture that performs under pressure — designed to handle 10x growth without 10x complexity.' },
  { icon: 'shield', title: 'Security-First Design', description: 'Enterprise-grade security at every layer — authentication, encryption, audit trails, and zero-trust principles.' },
  { icon: 'code', title: 'Full-Stack Engineering', description: 'End-to-end development from cloud infrastructure to pixel-perfect interfaces, powered by modern frameworks.' },
  { icon: 'growth', title: 'Growth Engineering', description: 'Technical SEO, funnel instrumentation, and performance optimization to drive sustainable traction post-launch.' },
]

// Bento grid span definitions — creates asymmetric layout
const bentoSpans = [
  'sm:col-span-2', // Wide card
  'sm:col-span-1', // Normal
  'sm:col-span-1', // Normal
  'sm:col-span-1', // Normal
  'sm:col-span-1', // Normal
  'sm:col-span-2', // Wide card
]

function BentoCard({ cap, index, isInView }: { cap: any; index: number; isInView: boolean }) {
  const Icon = iconMap[cap.icon] || Cpu
  const isWide = index === 0 || index === 5
  const isEven = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: 0.1 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={`bento-card group relative p-7 ${isWide ? 'lg:p-9' : ''} ${bentoSpans[index]}`}
      data-testid={`engine-card-${index}`}
    >
      {/* Hover glow overlay */}
      <div
        className="absolute inset-0 rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-600 pointer-events-none"
        style={{
          background: isEven
            ? 'radial-gradient(ellipse at 20% 20%, hsl(216 100% 50% / 0.06), transparent 60%)'
            : 'radial-gradient(ellipse at 20% 20%, hsl(270 80% 65% / 0.06), transparent 60%)',
        }}
      />

      {/* Corner accent line */}
      <div
        className="absolute top-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: isEven
            ? 'linear-gradient(90deg, transparent, hsl(216 100% 50% / 0.4), transparent)'
            : 'linear-gradient(90deg, transparent, hsl(270 80% 65% / 0.4), transparent)',
        }}
      />

      <div className="relative z-10">
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-400 group-hover:scale-110"
          style={{
            background: isEven ? 'hsl(216 100% 50% / 0.08)' : 'hsl(270 80% 65% / 0.08)',
            border: `1px solid ${isEven ? 'hsl(216 100% 50% / 0.12)' : 'hsl(270 80% 65% / 0.12)'}`,
          }}
        >
          <Icon
            className="w-5 h-5"
            strokeWidth={1.5}
            style={{ color: isEven ? 'hsl(var(--primary))' : 'hsl(var(--accent))' }}
          />
        </div>

        <h3 className="text-base font-bold text-foreground mb-2 tracking-tight">
          {cap.title}
        </h3>
        <p className={`text-sm leading-relaxed ${isWide ? 'max-w-md' : ''}`} style={{ color: 'hsl(var(--caption))' }}>
          {cap.description}
        </p>
      </div>
    </motion.div>
  )
}

export const AceEngineSection = ({ cms }: { cms?: any }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const label = cms?.label || 'What We Build'
  const heading = cms?.heading || 'Engineering meets intelligence.'
  const desc = cms?.description || "We don\u2019t just write code — we orchestrate intelligence. Our AI-augmented squads combine strategy, engineering, and growth into a single high-velocity unit to deliver systems that scale."
  const caps = cms?.capabilities?.length ? cms.capabilities : defaultCapabilities

  return (
    <section
      id="engine"
      ref={ref}
      className="relative py-24 lg:py-36 overflow-hidden"
      data-testid="engine-section"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 50% 40% at 20% 50%, hsl(216 100% 50% / 0.03), transparent 60%), radial-gradient(ellipse 40% 40% at 80% 60%, hsl(270 80% 65% / 0.025), transparent 50%)',
      }} />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-xs font-medium tracking-[0.2em] uppercase mb-4"
            style={{ color: 'hsl(var(--primary))' }}
          >
            {label}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tighter text-foreground leading-tight"
          >
            {heading}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 text-base md:text-lg leading-relaxed max-w-xl"
            style={{ color: 'hsl(var(--body))' }}
          >
            {desc}
          </motion.p>
        </div>

        {/* Bento Grid — 2 col base, asymmetric */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {caps.map((cap: any, i: number) => (
            <BentoCard key={cap.title || i} cap={cap} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  )
}
