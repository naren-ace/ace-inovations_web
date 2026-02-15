'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Search, CheckCircle, ArrowRight, Shield, Zap, BarChart3 } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: [0.4, 0, 0.2, 1] } }),
}

const defaultAuditPoints = [
  { icon: Search, text: 'Architecture & codebase health review' },
  { icon: Zap, text: 'Performance bottleneck identification' },
  { icon: Shield, text: 'Security posture assessment' },
  { icon: BarChart3, text: 'Scalability & growth readiness score' },
]

export const LeadMagnet = ({ cms }: { cms?: any }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({ name: '', email: '', painPoints: '' })

  const badgeText = cms?.badgeText || 'Free for qualified projects'
  const hp1 = cms?.headingPart1 || 'Get a Free'
  const hhl = cms?.headingHighlight || 'Platform Audit'
  const desc = cms?.description || "Our engineers will analyse your current platform, identify friction points, and deliver an actionable improvement roadmap \u2014 at no cost."
  const formHeading = cms?.formHeading || 'Request Your Free Audit'
  const formDesc = cms?.formDescription || "No commitment required. We'll review your platform and send a detailed report."
  const submitText = cms?.submitButtonText || 'Get My Free Audit'

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    setError('')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email) return

    setSubmitting(true)
    setError('')

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          painPoints: formData.painPoints || 'Requested free platform audit',
          source: 'lead-magnet-audit',
          status: 'new',
        }),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => null)
        throw new Error(data?.errors?.[0]?.message || 'Failed to submit. Please try again.')
      }

      setSubmitted(true)
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section ref={ref} className="relative py-24 lg:py-32 overflow-hidden" data-testid="lead-magnet-section">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(180deg, hsl(var(--surface-subtle)), hsl(var(--background)), hsl(var(--surface-subtle)))' }} />
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, hsl(var(--border)), transparent)' }} />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.div custom={0} variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-medium tracking-wide uppercase mb-6"
                style={{ background: 'hsl(142 76% 36% / 0.06)', color: 'hsl(142 76% 36%)', border: '1px solid hsl(142 76% 36% / 0.12)' }}>
                <span className="w-1.5 h-1.5 rounded-full animate-status-pulse" style={{ background: 'hsl(142 76% 36%)' }} />
                {badgeText}
              </span>
            </motion.div>

            <motion.h2 custom={1} variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tighter text-foreground leading-tight">
              {hp1} <span className="gradient-text">{hhl}</span>.
            </motion.h2>

            <motion.p custom={2} variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'}
              className="mt-5 text-base md:text-lg leading-relaxed" style={{ color: 'hsl(var(--body))' }}>
              {desc}
            </motion.p>

            <motion.div custom={3} variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'}
              className="mt-8 space-y-4">
              {defaultAuditPoints.map((point, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: 'hsl(216 100% 50% / 0.06)' }}>
                    <point.icon className="w-4 h-4" style={{ color: 'hsl(var(--primary))' }} />
                  </div>
                  <p className="text-sm font-medium text-foreground">{point.text}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div custom={4} variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
            <div className="rounded-2xl p-7 lg:p-8"
              style={{
                background: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border) / 0.6)',
                boxShadow: '0 20px 60px -15px hsl(0 0% 0% / 0.08), 0 8px 20px -8px hsl(0 0% 0% / 0.04)',
              }}
              data-testid="lead-magnet-form">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mb-5"
                    style={{ background: 'hsl(142 76% 36% / 0.08)' }}>
                    <CheckCircle className="w-7 h-7" style={{ color: 'hsl(142 76% 36%)' }} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">You&apos;re In!</h3>
                  <p className="text-sm" style={{ color: 'hsl(var(--body))' }}>
                    We&apos;ll reach out within 24 hours to schedule your free platform audit.
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-foreground tracking-tight">{formHeading}</h3>
                    <p className="text-sm mt-1.5" style={{ color: 'hsl(var(--caption))' }}>{formDesc}</p>
                  </div>
                  {error && (
                    <div className="mb-4 p-3 rounded-lg text-sm text-red-600" style={{ background: 'hsl(0 72% 51% / 0.06)', border: '1px solid hsl(0 72% 51% / 0.15)' }}>
                      {error}
                    </div>
                  )}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-foreground block mb-1.5">Name <span className="text-red-500">*</span></label>
                      <input name="name" value={formData.name} onChange={handleChange} placeholder="Your full name"
                        className="w-full h-10 px-3 rounded-lg border bg-background text-foreground text-sm outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" style={{ borderColor: 'hsl(var(--border))' }} />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground block mb-1.5">Work Email <span className="text-red-500">*</span></label>
                      <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="you@company.com"
                        className="w-full h-10 px-3 rounded-lg border bg-background text-foreground text-sm outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" style={{ borderColor: 'hsl(var(--border))' }} />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground block mb-1.5">What&apos;s your biggest pain point?</label>
                      <textarea name="painPoints" value={formData.painPoints} onChange={handleChange} rows={3}
                        placeholder="e.g., Slow page load times, scaling issues, technical debt..."
                        className="w-full px-3 py-2 rounded-lg border bg-background text-foreground text-sm resize-none outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" style={{ borderColor: 'hsl(var(--border))' }} />
                    </div>
                    <Button variant="premium" size="lg" type="submit" className="w-full btn-glow" disabled={submitting}>
                      {submitting ? 'Submitting...' : submitText} {!submitting && <ArrowRight className="w-4 h-4 ml-2" />}
                    </Button>
                    <p className="text-[11px] text-center" style={{ color: 'hsl(var(--caption))' }}>
                      No spam. No sales calls unless you want one.
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
