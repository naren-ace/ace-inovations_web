'use client'

import { Navbar } from '@/components/layout/Navbar'
import { CTAFooter } from '@/components/layout/Footer'
import { MouseGlow } from '@/components/effects/MouseGlow'
import { ScrollSpiral } from '@/components/effects/ScrollSpiral'
import { FluidShape } from '@/components/effects/FluidShape'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Button } from '@/components/ui/Button'
import { ContactModal } from '@/components/home/ContactModal'
import { ArrowRight, Rocket, Workflow, Search } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: [0.4, 0, 0.2, 1] } }),
}

const products = [
  {
    icon: Rocket,
    status: 'Internal Beta',
    statusColor: 'hsl(216 100% 50%)',
    statusBg: 'hsl(216 100% 50% / 0.08)',
    mission: 'Mission: Launch Faster.',
    title: 'ACE Velocity Agent',
    description: 'Autonomous DevOps layer for instant scaffolding and CI/CD. From repository creation to production deployment in minutes, not days. The Velocity Agent handles environment configuration, pipeline setup, and infrastructure provisioning automatically.',
    tags: ['Instant project scaffolding', 'Automated CI/CD pipelines', 'Infrastructure-as-code generation', 'Environment orchestration'],
  },
  {
    icon: Workflow,
    status: 'In Development',
    statusColor: 'hsl(259 72% 58%)',
    statusBg: 'hsl(259 72% 58% / 0.08)',
    mission: 'Mission: Automate Workflows.',
    title: 'ACE Flow-Bot',
    description: 'Intelligent orchestration agent connecting disparate enterprise systems. Flow-Bot learns your operational patterns, identifies bottlenecks, and autonomously routes work across tools and teams.',
    tags: ['Cross-system orchestration', 'Pattern recognition', 'Autonomous routing', 'Bottleneck detection'],
  },
  {
    icon: Search,
    status: 'R&D Phase',
    statusColor: 'hsl(216 100% 50%)',
    statusBg: 'hsl(216 100% 50% / 0.08)',
    mission: 'Mission: Reduce Operational Friction.',
    title: 'ACE Friction-Scanner',
    description: 'Diagnostic AI for auditing technical debt and system bottlenecks. Friction-Scanner continuously monitors your codebase, infrastructure, and workflows to surface the invisible costs slowing your team down.',
    tags: ['Technical debt analysis', 'Performance bottleneck detection', 'Workflow inefficiency mapping', 'Prioritized remediation plans'],
  },
]

function HeroSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [contactOpen, setContactOpen] = useState(false)

  return (
    <>
      <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden pt-16" data-testid="labs-hero">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 80% 60% at 70% 40%, hsl(216 100% 50% / 0.04), transparent 60%)' }} />
        <div className="section-container relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(100vh-4rem)]">
            <div className="flex flex-col justify-center py-16 lg:py-0">
              <motion.div custom={0} variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} className="mb-8">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-wide uppercase"
                  style={{ background: 'hsl(259 72% 58% / 0.06)', color: 'hsl(var(--accent))', border: '1px solid hsl(259 72% 58% / 0.12)' }}
                  data-testid="labs-badge">
                  <span className="w-1.5 h-1.5 rounded-full animate-status-pulse" style={{ background: 'hsl(259 72% 58%)' }} />
                  Internal R&D
                </span>
              </motion.div>
              <motion.h1 custom={1} variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tighter text-foreground" data-testid="labs-headline">
                ACE Labs: <span className="gradient-text">Internal R&D</span>.
              </motion.h1>
              <motion.p custom={2} variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'}
                className="mt-6 text-base md:text-lg leading-relaxed max-w-xl" style={{ color: 'hsl(var(--body))' }}>
                Where we build the agents, frameworks, and tools that power our engineering squads. These are the proprietary systems behind our speed.
              </motion.p>
              <motion.div custom={3} variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} className="mt-10">
                <Button variant="premium" size="lg" onClick={() => setContactOpen(true)} className="btn-glow" data-testid="labs-explore-btn">
                  Explore Our Stack <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </motion.div>
            </div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }} className="hidden lg:flex items-center justify-center">
              <div className="relative w-full aspect-square max-w-lg">
                <FluidShape />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <ContactModal open={contactOpen} onOpenChange={setContactOpen} />
    </>
  )
}

function ProductsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="relative py-24 lg:py-32" data-testid="products-section">
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {products.map((product, i) => (
            <motion.div
              key={product.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className={`glass-card-hover rounded-xl p-7 flex flex-col ${i === 2 ? 'lg:col-span-2 lg:max-w-[calc(50%-0.75rem)]' : ''}`}
              data-testid={`product-card-${i}`}
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ background: product.statusBg }}>
                  <product.icon className="w-5 h-5" style={{ color: product.statusColor }} />
                </div>
                <span className="px-3 py-1 text-[10px] font-semibold tracking-wider uppercase rounded-full"
                  style={{ background: product.statusBg, color: product.statusColor }}>
                  {product.status}
                </span>
              </div>
              <p className="text-xs font-medium tracking-[0.15em] uppercase mb-2" style={{ color: 'hsl(var(--primary))' }}>
                {product.mission}
              </p>
              <h3 className="text-xl font-bold text-foreground tracking-tight mb-3">{product.title}</h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: 'hsl(var(--body))' }}>{product.description}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {product.tags.map(tag => (
                  <span key={tag} className="px-3 py-1.5 text-xs font-medium rounded-full"
                    style={{ background: 'hsl(var(--surface-subtle))', color: 'hsl(var(--body))', border: '1px solid hsl(var(--border) / 0.5)' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PhilosophySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [contactOpen, setContactOpen] = useState(false)

  return (
    <>
      <section ref={ref} className="relative py-24 lg:py-32" style={{ background: 'hsl(var(--surface-subtle))' }} data-testid="labs-philosophy">
        <div className="absolute left-0 right-0 top-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, hsl(var(--border)), transparent)' }} />
        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <motion.p custom={0} variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'}
                className="text-xs font-medium tracking-[0.2em] uppercase mb-4" style={{ color: 'hsl(var(--accent))' }}>Philosophy</motion.p>
              <motion.h2 custom={1} variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'}
                className="text-3xl sm:text-4xl font-extrabold tracking-tighter text-foreground leading-tight">
                We don&apos;t hide the fact that we use AI. <span className="gradient-text">We celebrate it.</span>
              </motion.h2>
            </div>
            <div className="space-y-6">
              <motion.p custom={2} variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'}
                className="text-base leading-relaxed" style={{ color: 'hsl(var(--body))' }}>
                At ACE inovations, we aren&apos;t just consumers of technology; we are builders of it. ACE Labs is our internal innovation hub where we develop proprietary agents and frameworks to solve the friction we see in the market every day.
              </motion.p>
              <motion.p custom={3} variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'}
                className="text-base leading-relaxed" style={{ color: 'hsl(var(--body))' }}>
                By automating the &ldquo;solved&rdquo; problems of software, we free our human experts to solve your unique business challenges. Our Labs products are the engine behind our speed.
              </motion.p>
              <motion.div custom={4} variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
                <Button variant="premium" size="lg" onClick={() => setContactOpen(true)} className="btn-glow" data-testid="labs-philosophy-cta">
                  Start a Project <ArrowRight className="w-4 h-4 ml-1" />
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

export default function LabsPage() {
  return (
    <div className="min-h-screen animate-bg-breathe" data-testid="labs-page">
      <ScrollSpiral />
      <MouseGlow />
      <Navbar />
      <main>
        <HeroSection />
        <ProductsSection />
        <PhilosophySection />
      </main>
      <CTAFooter />
    </div>
  )
}
