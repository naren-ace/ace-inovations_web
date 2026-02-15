'use client'

import { Navbar } from '@/components/layout/Navbar'
import { CTAFooter } from '@/components/layout/Footer'
import { MouseGlow } from '@/components/effects/MouseGlow'
import { ScrollSpiral } from '@/components/effects/ScrollSpiral'
import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Button } from '@/components/ui/Button'
import { ContactModal } from '@/components/home/ContactModal'
import { ArrowRight, Target, Cpu, Users, Lightbulb, Shield, Rocket, Eye, Compass, Zap, Code2 } from 'lucide-react'

const iconMap: Record<string, any> = {
  target: Target, cpu: Cpu, shield: Shield, lightbulb: Lightbulb,
  users: Users, rocket: Rocket, zap: Zap, code: Code2,
}

const defaultValues = [
  { icon: 'target', title: 'Outcome-Obsessed', description: 'We measure success by shipped products and business impact, not hours logged or lines of code written.' },
  { icon: 'cpu', title: 'AI-Native Engineering', description: "We don't bolt AI on as an afterthought. Agentic workflows are woven into every stage of our delivery process." },
  { icon: 'shield', title: 'Enterprise Integrity', description: 'Production-grade code. Comprehensive testing. Zero shortcuts. We build systems that scale under pressure.' },
  { icon: 'lightbulb', title: 'Radical Transparency', description: "Real-time project visibility. No black boxes. You see exactly what we're building, how, and why." },
  { icon: 'users', title: 'Integrated Teams', description: 'Our squads combine architecture, engineering, and growth expertise into a single unit that moves at startup speed.' },
  { icon: 'rocket', title: 'Velocity Without Compromise', description: 'We ship 3-5x faster than traditional agencies by leveraging proprietary AI tooling and battle-tested processes.' },
]

function HeroSection({ cms }: { cms?: any }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [contactOpen, setContactOpen] = useState(false)

  const hero = cms?.hero || {}
  const label = hero.label || 'About ACE inovations'
  const h1 = hero.headingPart1 || 'Platforms engineered to'
  const highlight = hero.headingHighlight || 'think, adapt, and scale'
  const intro = hero.intro || 'ACE inovations is a modern engineering and growth studio. We combine world-class software development with agentic AI workflows to deliver end-to-end digital solutions that scale.'
  const ctaText = hero.ctaButtonText || 'Start a Project'
  const email = hero.email || 'hello@aceinovations.dev'

  return (
    <>
      <section ref={ref} className="relative pt-28 pb-16 lg:pt-36 lg:pb-20 overflow-hidden" data-testid="about-hero">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, hsl(216 100% 50% / 0.04) 0%, transparent 70%)' }} />
        <div className="section-container relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <motion.p initial={{ opacity: 0, y: 16 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-xs font-medium tracking-[0.2em] uppercase mb-4" style={{ color: 'hsl(var(--primary))' }}>{label}</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter text-foreground leading-tight">
              {h1} <span className="gradient-text">{highlight}</span>.
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 text-base md:text-lg leading-relaxed" style={{ color: 'hsl(var(--body))' }}>{intro}</motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="premium" size="xl" onClick={() => setContactOpen(true)} className="btn-glow" data-testid="about-cta-btn">
                {ctaText} <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
              <Button variant="outline-premium" size="xl" asChild><a href={`mailto:${email}`}>{email}</a></Button>
            </motion.div>
          </div>
        </div>
      </section>
      <ContactModal open={contactOpen} onOpenChange={setContactOpen} />
    </>
  )
}

function MissionVisionSection({ cms }: { cms?: any }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const m = cms?.mission || {}
  const v = cms?.vision || {}

  return (
    <section ref={ref} className="relative py-16 lg:py-20" style={{ background: 'hsl(var(--surface-subtle))' }} data-testid="mission-section">
      <div className="absolute left-0 right-0 top-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, hsl(var(--border)), transparent)' }} />
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <motion.div initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.6 }} className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'hsl(var(--primary) / 0.08)' }}>
                <Compass className="w-5 h-5" style={{ color: 'hsl(var(--primary))' }} strokeWidth={1.5} />
              </div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: 'hsl(var(--primary))' }}>Our Mission</p>
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl sm:text-3xl font-extrabold tracking-tighter text-foreground leading-tight mb-5">
              {m.heading || 'Eliminate the gap between'} <span className="gradient-text">{m.headingHighlight || 'vision and execution'}</span>.
            </motion.h2>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }} className="space-y-3">
              <p className="text-sm leading-relaxed" style={{ color: 'hsl(var(--body))' }}>{m.body1 || 'We build custom platforms and marketplaces from the ground up, automate and improve existing systems, and develop our own SaaS products — like AI-powered dashboards and intelligent assistants — that help businesses operate at a higher level.'}</p>
              <p className="text-sm leading-relaxed" style={{ color: 'hsl(var(--body))' }}>{m.body2 || 'Whether you need a new platform launched, an existing one supercharged, or a turnkey AI solution integrated into your workflow — ACE delivers production-grade systems at startup speed.'}</p>
            </motion.div>
          </div>
          <div>
            <motion.div initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.6, delay: 0.15 }} className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'hsl(var(--accent) / 0.08)' }}>
                <Eye className="w-5 h-5" style={{ color: 'hsl(var(--accent))' }} strokeWidth={1.5} />
              </div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: 'hsl(var(--accent))' }}>Our Vision</p>
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-2xl sm:text-3xl font-extrabold tracking-tighter text-foreground leading-tight mb-5">
              {v.heading || 'A world where'} <span className="gradient-text">{v.headingHighlight || 'every founder ships'}</span> {v.headingAfter || 'like a Fortune 500.'}
            </motion.h2>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.35 }} className="space-y-3">
              <p className="text-sm leading-relaxed" style={{ color: 'hsl(var(--body))' }}>{v.body1 || "We envision a future where the quality of your engineering isn't determined by the size of your team or budget."}</p>
              <p className="text-sm leading-relaxed" style={{ color: 'hsl(var(--body))' }}>{v.body2 || 'Our goal is to become the engineering partner of choice for ambitious founders.'}</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ValuesSection({ cms }: { cms?: any }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const vals = cms?.values?.length ? cms.values : defaultValues

  return (
    <section ref={ref} className="relative py-16 lg:py-20" data-testid="values-section">
      <div className="section-container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.p initial={{ opacity: 0, y: 16 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.5 }}
            className="text-xs font-medium tracking-[0.2em] uppercase mb-3" style={{ color: 'hsl(var(--primary))' }}>Our Values</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tighter text-foreground leading-tight">
            Principles that <span className="gradient-text">drive every decision</span>.
          </motion.h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {vals.map((value: any, i: number) => {
            const Icon = iconMap[value.icon] || Target
            const isEven = i % 2 === 0
            return (
              <motion.div key={value.title} initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                className="glass-card-hover rounded-xl p-6 flex flex-col" data-testid={`value-card-${i}`}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: isEven ? 'hsl(216 100% 50% / 0.08)' : 'hsl(259 72% 58% / 0.08)' }}>
                  <Icon className="w-5 h-5" strokeWidth={1.5} style={{ color: isEven ? 'hsl(var(--primary))' : 'hsl(var(--accent))' }} />
                </div>
                <h3 className="text-base font-bold text-foreground tracking-tight mb-2">{value.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'hsl(var(--body))' }}>{value.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function ContactSection({ cms }: { cms?: any }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' })

  const c = cms?.contact || {}
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value })); setError('')
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return
    setSubmitting(true); setError('')
    try {
      const res = await fetch('/api/leads', { method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: formData.name, email: formData.email, company: formData.company || undefined, painPoints: formData.message, source: 'contact-form', status: 'new' }) })
      if (!res.ok) throw new Error('Failed')
      setSubmitted(true)
    } catch { setError('Something went wrong. Please try again.') }
    finally { setSubmitting(false) }
  }

  return (
    <section ref={ref} id="contact" className="relative py-16 lg:py-20" style={{ background: 'hsl(var(--surface-subtle))' }} data-testid="contact-section">
      <div className="absolute left-0 right-0 top-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, hsl(var(--border)), transparent)' }} />
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <motion.p initial={{ opacity: 0, y: 16 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.5 }} className="text-xs font-medium tracking-[0.2em] uppercase mb-3" style={{ color: 'hsl(var(--primary))' }}>Get in Touch</motion.p>
            <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }} className="text-3xl sm:text-4xl font-extrabold tracking-tighter text-foreground leading-tight">
              {c.heading || "Let's build something"} <span className="gradient-text">{c.headingHighlight || 'extraordinary'}</span>.
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }} className="mt-4 text-sm leading-relaxed" style={{ color: 'hsl(var(--body))' }}>
              {c.description || 'Whether you have a detailed spec or just an idea on a napkin — we want to hear about it. Our team responds within 24 hours.'}
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }} className="mt-6 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'hsl(216 100% 50% / 0.06)' }}>
                  <svg className="w-4 h-4" style={{ color: 'hsl(var(--primary))' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Email</p>
                  <a href={`mailto:${c.email || 'hello@aceinovations.dev'}`} className="text-sm hover:text-primary transition-colors" style={{ color: 'hsl(var(--body))' }}>{c.email || 'hello@aceinovations.dev'}</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'hsl(259 72% 58% / 0.06)' }}>
                  <svg className="w-4 h-4" style={{ color: 'hsl(var(--accent))' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Response Time</p>
                  <p className="text-sm" style={{ color: 'hsl(var(--body))' }}>{c.responseTime || 'Within 24 hours, typically same day'}</p>
                </div>
              </div>
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="rounded-2xl p-6 lg:p-7" style={{ background: 'hsl(var(--card))', border: '1px solid hsl(var(--border) / 0.6)', boxShadow: '0 20px 60px -15px hsl(0 0% 0% / 0.08)' }} data-testid="contact-form">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4" style={{ background: 'hsl(142 76% 36% / 0.08)' }}>
                    <svg className="w-7 h-7" style={{ color: 'hsl(142 76% 36%)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Message Sent!</h3>
                  <p className="text-sm" style={{ color: 'hsl(var(--body))' }}>We&apos;ll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  {error && <div className="mb-4 p-3 rounded-lg text-sm text-red-600" style={{ background: 'hsl(0 72% 51% / 0.06)', border: '1px solid hsl(0 72% 51% / 0.15)' }}>{error}</div>}
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-sm font-medium text-foreground block mb-1.5">Name <span className="text-red-500">*</span></label>
                      <input name="name" value={formData.name} onChange={handleChange} placeholder="Your name" className="w-full h-10 px-3 rounded-lg border bg-background text-foreground text-sm outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" style={{ borderColor: 'hsl(var(--border))' }} />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground block mb-1.5">Email <span className="text-red-500">*</span></label>
                      <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="you@company.com" className="w-full h-10 px-3 rounded-lg border bg-background text-foreground text-sm outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" style={{ borderColor: 'hsl(var(--border))' }} />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground block mb-1.5">Company</label>
                    <input name="company" value={formData.company} onChange={handleChange} placeholder="Your company" className="w-full h-10 px-3 rounded-lg border bg-background text-foreground text-sm outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" style={{ borderColor: 'hsl(var(--border))' }} />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground block mb-1.5">How can we help? <span className="text-red-500">*</span></label>
                    <textarea name="message" value={formData.message} onChange={handleChange} rows={3} placeholder="Tell us about your project..." className="w-full px-3 py-2 rounded-lg border bg-background text-foreground text-sm resize-none outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" style={{ borderColor: 'hsl(var(--border))' }} />
                  </div>
                  <Button variant="premium" size="lg" type="submit" className="w-full btn-glow" disabled={submitting}>
                    {submitting ? 'Sending...' : 'Send Message'} {!submitting && <ArrowRight className="w-4 h-4 ml-2" />}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default function AboutPage() {
  const [cms, setCms] = useState<any>(null)

  useEffect(() => {
    fetch('/api/globals/about')
      .then(res => res.json())
      .then(data => setCms(data))
      .catch(() => {})
  }, [])

  return (
    <div className="min-h-screen animate-bg-breathe" data-testid="about-page">
      <ScrollSpiral />
      <MouseGlow />
      <Navbar />
      <main>
        <HeroSection cms={cms} />
        <MissionVisionSection cms={cms} />
        <ValuesSection cms={cms} />
        <ContactSection cms={cms} />
      </main>
      <CTAFooter />
    </div>
  )
}
