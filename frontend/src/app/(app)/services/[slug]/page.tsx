'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { Navbar } from '@/components/layout/Navbar'
import { CTAFooter } from '@/components/layout/Footer'
import { ScrollSpiral } from '@/components/effects/ScrollSpiral'
import { MouseGlow } from '@/components/effects/MouseGlow'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Button } from '@/components/ui/Button'
import { ContactModal } from '@/components/home/ContactModal'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

interface ServiceData {
  title: string
  slug: string
  shortDescription: string
  colorTheme: string
  page: {
    heroHeading: string
    heroDescription: string
    ctaButtonText: string
    features: { title: string; description: string }[]
    whyUsHeading: string
    whyUsBody: string
    deliverables: { item: string }[]
  }
}

function ServiceHero({ data }: { data: ServiceData }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [contactOpen, setContactOpen] = useState(false)

  return (
    <>
      <section ref={ref} className="relative pt-28 pb-16 lg:pt-36 lg:pb-20 overflow-hidden" data-testid="service-hero">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle, ${data.colorTheme === 'purple' ? 'hsl(259 72% 58% / 0.04)' : 'hsl(216 100% 50% / 0.04)'} 0%, transparent 70%)` }} />
        <div className="section-container relative z-10">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-xs font-medium tracking-[0.2em] uppercase mb-4"
              style={{ color: data.colorTheme === 'purple' ? 'hsl(var(--accent))' : 'hsl(var(--primary))' }}
            >{data.title}</motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tighter text-foreground leading-tight"
            >{data.page.heroHeading}</motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 text-base md:text-lg leading-relaxed max-w-2xl" style={{ color: 'hsl(var(--body))' }}
            >{data.page.heroDescription}</motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8"
            >
              <Button variant="premium" size="xl" onClick={() => setContactOpen(true)} className="btn-glow" data-testid="service-cta-btn">
                {data.page.ctaButtonText} <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      <ContactModal open={contactOpen} onOpenChange={setContactOpen} />
    </>
  )
}

function FeaturesSection({ features, colorTheme }: { features: { title: string; description: string }[]; colorTheme: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const isPurple = colorTheme === 'purple'

  return (
    <section ref={ref} className="relative py-16 lg:py-20" data-testid="service-features">
      <div className="section-container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-xs font-medium tracking-[0.2em] uppercase mb-3"
            style={{ color: isPurple ? 'hsl(var(--accent))' : 'hsl(var(--primary))' }}
          >What We Do</motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tighter text-foreground leading-tight"
          >Key capabilities.</motion.h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card-hover rounded-xl p-6" data-testid={`feature-card-${i}`}
            >
              <div className="w-2 h-2 rounded-full mb-4" style={{ background: i % 2 === 0 ? 'hsl(var(--primary))' : 'hsl(var(--accent))' }} />
              <h3 className="text-base font-bold text-foreground tracking-tight mb-2">{f.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'hsl(var(--body))' }}>{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhyUsSection({ heading, body, deliverables }: { heading: string; body: string; deliverables: { item: string }[] }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="relative py-16 lg:py-20" style={{ background: 'hsl(var(--surface-subtle))' }} data-testid="service-why-us">
      <div className="absolute left-0 right-0 top-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, hsl(var(--border)), transparent)' }} />
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-xs font-medium tracking-[0.2em] uppercase mb-3" style={{ color: 'hsl(var(--primary))' }}
            >Why ACE</motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-2xl sm:text-3xl font-extrabold tracking-tighter text-foreground leading-tight mb-5"
            >{heading}</motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-sm leading-relaxed" style={{ color: 'hsl(var(--body))' }}
            >{body}</motion.p>
          </div>
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-xs font-medium tracking-[0.2em] uppercase mb-5" style={{ color: 'hsl(var(--accent))' }}
            >What We Deliver</motion.p>
            <div className="space-y-3">
              {deliverables.map((d, i) => (
                <motion.div
                  key={d.item}
                  initial={{ opacity: 0, x: -16 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" style={{ color: 'hsl(var(--primary))' }} />
                  <p className="text-sm text-foreground">{d.item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function ServicePage() {
  const params = useParams()
  const slug = params?.slug as string
  const [service, setService] = useState<ServiceData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!slug) return
    fetch(`/api/services?where[slug][equals]=${slug}&limit=1`)
      .then(res => res.json())
      .then(data => {
        if (data.docs?.[0]) setService(data.docs[0])
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [slug])

  if (loading) {
    return (
      <div className="min-h-screen animate-bg-breathe">
        <Navbar />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      </div>
    )
  }

  if (!service) {
    return (
      <div className="min-h-screen animate-bg-breathe">
        <Navbar />
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
          <h1 className="text-2xl font-bold text-foreground mb-2">Service not found</h1>
          <p className="text-sm" style={{ color: 'hsl(var(--body))' }}>The service you&apos;re looking for doesn&apos;t exist.</p>
        </div>
        <CTAFooter />
      </div>
    )
  }

  return (
    <div className="min-h-screen animate-bg-breathe" data-testid="service-page">
      <ScrollSpiral />
      <MouseGlow />
      <Navbar />
      <main>
        <ServiceHero data={service} />
        {service.page.features?.length > 0 && (
          <FeaturesSection features={service.page.features} colorTheme={service.colorTheme} />
        )}
        {service.page.whyUsBody && (
          <WhyUsSection
            heading={service.page.whyUsHeading}
            body={service.page.whyUsBody}
            deliverables={service.page.deliverables || []}
          />
        )}
      </main>
      <CTAFooter />
    </div>
  )
}
