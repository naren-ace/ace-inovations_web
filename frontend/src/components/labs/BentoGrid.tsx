'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { TerminalAnimation } from '@/components/effects/TerminalAnimation'
import { GlitchText } from '@/components/effects/GlitchText'
import { Map, Hammer, Shield, Activity, Music } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  }),
}

interface CardData {
  id: string
  title: string
  hook: string
  deepDive: string
  icon: React.ElementType
  gridArea: string
  hasTerminal?: boolean
  hasGlitch?: boolean
  accentColor: string
}

const cards: CardData[] = [
  {
    id: 'atlas',
    title: 'Atlas',
    hook: 'Visualizing the hidden architecture of your growth.',
    deepDive:
      'Deep-tier topological mapping engineered to isolate operational friction. Atlas performs high-fidelity dependency analysis to identify the 20% of system bottlenecks causing 80% of scaling drag.',
    icon: Map,
    gridArea: 'atlas',
    hasTerminal: true,
    accentColor: '#6366f1',
  },
  {
    id: 'forge',
    title: 'Forge',
    hook: 'Where vision is transformed into high-velocity code.',
    deepDive:
      'A proprietary synthesis layer that extracts independent business logic to generate modular, scale-first frameworks. Forge utilizes agentic reasoning to ensure every build is decoupled and future-proof.',
    icon: Hammer,
    gridArea: 'forge',
    hasGlitch: true,
    accentColor: '#a855f7',
  },
  {
    id: 'sentinel',
    title: 'Sentinel',
    hook: 'Automated enterprise-grade security for growing brands.',
    deepDive:
      'Zero-trust verification protocols that enforce 2026-standard security at the kernel level. Sentinel performs real-time vulnerability hunting and 24/7 vigilance over data assets.',
    icon: Shield,
    gridArea: 'sentinel',
    hasGlitch: true,
    accentColor: '#6366f1',
  },
  {
    id: 'pulse',
    title: 'Pulse',
    hook: 'Real-time performance heartbeat for every system layer.',
    deepDive:
      'Continuous monitoring agent that surfaces anomalies before they become incidents. Pulse maintains a live performance graph across your entire infrastructure stack.',
    icon: Activity,
    gridArea: 'pulse',
    accentColor: '#22d3ee',
  },
  {
    id: 'orchestra',
    title: 'Orchestra',
    hook: 'Harmonizing multi-agent workflows into unified execution.',
    deepDive:
      'A meta-orchestration layer that coordinates autonomous agents, resolving conflicts and optimizing resource allocation across concurrent agentic pipelines.',
    icon: Music,
    gridArea: 'orchestra',
    accentColor: '#f472b6',
  },
]

function BentoCard({ card, index }: { card: CardData; index: number }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      className="group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300"
      style={{
        background: 'hsl(var(--card))',
        border: '1px solid hsl(var(--border) / 0.5)',
        gridArea: card.gridArea,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-testid={`bento-card-${card.id}`}
      whileHover={{ y: -3 }}
    >
      {/* Purple glow border on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          boxShadow: `inset 0 0 0 1.5px ${card.accentColor}44, 0 0 24px ${card.accentColor}18, 0 0 48px ${card.accentColor}08`,
        }}
      />

      {/* Terminal animation background for Atlas */}
      {card.hasTerminal && <TerminalAnimation />}

      {/* Card content */}
      <div className={`relative z-10 p-6 md:p-8 h-full flex flex-col ${card.id === 'forge' ? 'justify-end min-h-[320px]' : card.id === 'sentinel' ? 'justify-between min-h-[280px]' : 'justify-between min-h-[180px]'}`}>
        {/* Top row: icon + status dot */}
        <div className="flex items-center justify-between mb-4">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ background: `${card.accentColor}12` }}
          >
            <card.icon className="w-5 h-5" style={{ color: card.accentColor }} />
          </div>
          <div className="flex items-center gap-2">
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: card.accentColor }}
            />
            <span
              className="text-[10px] font-semibold tracking-wider uppercase"
              style={{ color: `${card.accentColor}99` }}
            >
              {card.id}
            </span>
          </div>
        </div>

        {/* Title with optional glitch */}
        <h3 className="text-xl md:text-2xl font-bold text-foreground tracking-tight mb-3">
          {card.hasGlitch ? (
            <GlitchText text={card.title} isHovered={isHovered} />
          ) : (
            card.title
          )}
        </h3>

        {/* Hook text — always visible */}
        <p
          className="text-sm leading-relaxed mb-3"
          style={{ color: 'hsl(var(--body))' }}
          data-testid={`bento-hook-${card.id}`}
        >
          {card.hook}
        </p>

        {/* Deep-dive — revealed on hover */}
        <motion.div
          initial={false}
          animate={{
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 8,
            height: isHovered ? 'auto' : 0,
          }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="overflow-hidden"
          data-testid={`bento-deepdive-${card.id}`}
        >
          <p
            className="text-xs leading-relaxed pt-2 border-t"
            style={{
              color: 'hsl(var(--caption))',
              borderColor: `${card.accentColor}20`,
            }}
          >
            {card.deepDive}
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}

export function BentoGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="relative py-24 lg:py-32" data-testid="bento-grid-section">
      <div className="section-container relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p
            className="text-xs font-medium tracking-[0.2em] uppercase mb-4"
            style={{ color: 'hsl(var(--accent))' }}
          >
            The Powerhouse
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tighter text-foreground leading-tight">
            Five systems. <span className="gradient-text">One mission.</span>
          </h2>
          <p
            className="mt-4 text-base max-w-2xl mx-auto"
            style={{ color: 'hsl(var(--body))' }}
          >
            Each tool in the ACE Labs arsenal is purpose-built to eliminate a
            specific class of engineering friction.
          </p>
        </motion.div>

        {/* Bento grid with template areas */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-6xl mx-auto grid gap-4"
          style={{
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridTemplateRows: 'auto auto auto auto',
            gridTemplateAreas: `
              "atlas     atlas     pulse"
              "forge     forge     orchestra"
              "forge     forge     sentinel"
              ".         .         sentinel"
            `,
          }}
        >
          {cards.map((card, i) => (
            <BentoCard key={card.id} card={card} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
