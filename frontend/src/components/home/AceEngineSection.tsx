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

function CapCard({ cap, index, isInView }: { cap: any; index: number; isInView: boolean }) {
  const Icon = iconMap[cap.icon] || Cpu
  const isEven = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: 0.15 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative p-6 rounded-xl border transition-all duration-300 hover:shadow-lg"
      style={{
        background: 'hsl(var(--card) / 0.6)',
        borderColor: 'hsl(var(--border) / 0.5)',
        backdropFilter: 'blur(8px)',
      }}
      data-testid={`engine-card-${index}`}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: isEven
            ? 'radial-gradient(ellipse at 30% 20%, hsl(var(--primary) / 0.04), transparent 70%)'
            : 'radial-gradient(ellipse at 30% 20%, hsl(var(--accent) / 0.04), transparent 70%)',
        }}
      />

      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 relative z-10"
        style={{
          background: isEven ? 'hsl(var(--primary) / 0.08)' : 'hsl(var(--accent) / 0.08)',
        }}
      >
        <Icon
          className="w-5 h-5"
          strokeWidth={1.5}
          style={{ color: isEven ? 'hsl(var(--primary))' : 'hsl(var(--accent))' }}
        />
      </div>

      <h3 className="text-sm font-bold text-foreground mb-2 relative z-10 tracking-tight">
        {cap.title}
      </h3>
      <p className="text-sm leading-relaxed relative z-10" style={{ color: 'hsl(var(--caption))' }}>
        {cap.description}
      </p>
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
      className="relative py-24 lg:py-32 overflow-hidden"
      data-testid="engine-section"
    >
      {/* Subtle dot pattern background */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: 'radial-gradient(circle, hsl(var(--foreground)) 0.5px, transparent 0.5px)',
          backgroundSize: '32px 32px',
        }}
      />

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

        {/* 6-card grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {caps.map((cap: any, i: number) => (
            <CapCard key={cap.title || i} cap={cap} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  )
}
