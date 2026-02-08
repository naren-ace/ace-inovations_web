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
import { ArrowRight, Compass, Code2, TrendingUp, Zap, Handshake, Layers } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: [0.4, 0, 0.2, 1] } }),
}

const roles = [
  {
    icon: Compass,
    title: 'The Architect',
    description: 'Systems thinker who translates business goals into scalable technical blueprints. Owns the technical vision and ensures every component works as one cohesive system.',
    color: 'primary',
  },
  {
    icon: Code2,
    title: 'The Engineer',
    description: 'Full-stack builder powered by AI-augmented workflows. Ships production-grade code at velocity with industrial-quality standards and automated testing pipelines.',
    color: 'accent',
  },
  {
    icon: TrendingUp,
    title: 'The Growth Specialist',
    description: 'Data-driven operator who instruments every touchpoint for growth. Technical SEO, funnel optimization, and performance engineering baked in from day one.',
    color: 'primary',
  },
]

const advantages = [
  {
    icon: Zap,
    title: 'ACE Engine Powered',
    description: 'Every squad runs on our proprietary AI-augmented delivery platform, multiplying output without sacrificing quality.',
  },
  {
    icon: Handshake,
    title: 'Zero Handoff Friction',
    description: 'One integrated unit means decisions happen in real-time. No tickets between departments, no waiting for approvals across teams.',
  },
  {
    icon: Layers,
    title: 'Full-Stack Ownership',
    description: 'From strategy to code to growth, your squad owns the entire stack. One team, one mission, one velocity.',
  },
]

function HeroSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [contactOpen, setContactOpen] = useState(false)

  return (
    <>
      <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden pt-16" data-testid="squads-hero">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 80% 60% at 70% 40%, hsl(216 100% 50% / 0.04), transparent 60%)' }} />
        <div className="section-container relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(100vh-4rem)]">
            <div className="flex flex-col justify-center py-16 lg:py-0">
              <motion.div custom={0} variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} className="mb-8">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-wide uppercase"
                  style={{ background: 'hsl(216 100% 50% / 0.06)', color: 'hsl(var(--primary))', border: '1px solid hsl(216 100% 50% / 0.12)' }}
                  data-testid="squads-badge">
                  <span className="w-1.5 h-1.5 rounded-full animate-status-pulse" style={{ background: 'hsl(142 76% 36%)' }} />
                  The ACE Model
                </span>
              </motion.div>
              <motion.h1 custom={1} variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tighter text-foreground" data-testid="squads-headline">
                ACE Squads: <span className="gradient-text">High-Velocity Units</span>.
              </motion.h1>
              <motion.p custom={2} variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'}
                className="mt-6 text-base md:text-lg leading-relaxed max-w-xl" style={{ color: 'hsl(var(--body))' }}>
                We don&apos;t assemble freelancers. We deploy integrated, high-velocity units where an Architect, Engineer, and Growth Specialist operate as one&mdash;powered by the ACE Engine.
              </motion.p>
              <motion.div custom={3} variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} className="mt-10">
                <Button variant="premium" size="lg" onClick={() => setContactOpen(true)} className="btn-glow" data-testid="squads-deploy-btn">
                  Deploy a Squad <ArrowRight className="w-4 h-4 ml-1" />
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

function RolesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="relative py-24 lg:py-32" data-testid="roles-section">
      <div className="section-container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.p custom={0} variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'}
            className="text-xs font-medium tracking-[0.2em] uppercase mb-4" style={{ color: 'hsl(var(--primary))' }}>The Integrated Model</motion.p>
          <motion.h2 custom={1} variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tighter text-foreground leading-tight">
            One Unit. Three Disciplines.
          </motion.h2>
          <motion.p custom={2} variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'}
            className="mt-4 text-base md:text-lg leading-relaxed" style={{ color: 'hsl(var(--body))' }}>
            Each ACE Squad combines architecture, engineering, and growth expertise into a single unit that moves at startup speed with enterprise precision.
          </motion.p>
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
          {roles.map((role, i) => (
            <motion.div key={role.title} custom={3 + i} variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'}
              className="glass-card-hover rounded-xl p-7 flex flex-col" data-testid={`role-card-${i}`}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                style={{ background: role.color === 'primary' ? 'hsl(216 100% 50% / 0.08)' : 'hsl(259 72% 58% / 0.08)' }}>
                <role.icon className="w-5 h-5" style={{ color: role.color === 'primary' ? 'hsl(var(--primary))' : 'hsl(var(--accent))' }} />
              </div>
              <h3 className="text-lg font-bold text-foreground tracking-tight mb-3">{role.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'hsl(var(--body))' }}>{role.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function AdvantageSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="relative py-24 lg:py-32" style={{ background: 'hsl(var(--surface-subtle))' }} data-testid="advantage-section">
      <div className="absolute left-0 right-0 top-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, hsl(var(--border)), transparent)' }} />
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <motion.p custom={0} variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'}
              className="text-xs font-medium tracking-[0.2em] uppercase mb-4" style={{ color: 'hsl(var(--primary))' }}>The Advantage</motion.p>
            <motion.h2 custom={1} variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'}
              className="text-3xl sm:text-4xl font-extrabold tracking-tighter text-foreground leading-tight">
              Not Freelancers. <span className="gradient-text">High-Velocity Units</span>.
            </motion.h2>
            <motion.p custom={2} variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'}
              className="mt-4 text-base leading-relaxed" style={{ color: 'hsl(var(--body))' }}>
              Traditional outsourcing assembles individuals who have never worked together. ACE Squads are pre-integrated teams with shared tooling, processes, and a single mission: shipping your product at maximum velocity.
            </motion.p>
          </div>
          <div className="space-y-5">
            {advantages.map((adv, i) => (
              <motion.div key={adv.title} custom={3 + i} variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'}
                className="glass-card-hover rounded-xl p-6 flex items-start gap-4" data-testid={`advantage-card-${i}`}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: 'hsl(216 100% 50% / 0.08)' }}>
                  <adv.icon className="w-5 h-5" style={{ color: 'hsl(var(--primary))' }} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground tracking-tight mb-1">{adv.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'hsl(var(--body))' }}>{adv.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function SquadsPage() {
  return (
    <div className="min-h-screen animate-bg-breathe" data-testid="squads-page">
      <ScrollSpiral />
      <MouseGlow />
      <Navbar />
      <main>
        <HeroSection />
        <RolesSection />
        <AdvantageSection />
      </main>
      <CTAFooter />
    </div>
  )
}
