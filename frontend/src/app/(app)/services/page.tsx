'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Navbar } from '@/components/layout/Navbar'
import { CTAFooter } from '@/components/layout/Footer'
import { ScrollSpiral } from '@/components/effects/ScrollSpiral'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Globe, Smartphone, Cpu, TrendingUp, Code2, Settings } from 'lucide-react'

const iconMap: Record<string, any> = {
  globe: Globe, smartphone: Smartphone, cpu: Cpu,
  'trending-up': TrendingUp, code: Code2, settings: Settings,
}

const colorMap: Record<string, { color: string; bg: string; glow: string }> = {
  blue: { color: 'hsl(216 100% 50%)', bg: 'hsl(216 100% 50% / 0.08)', glow: 'hsl(216 100% 50% / 0.06)' },
  purple: { color: 'hsl(270 80% 65%)', bg: 'hsl(270 80% 65% / 0.08)', glow: 'hsl(270 80% 65% / 0.06)' },
}

interface ServiceItem {
  title: string
  slug: string
  shortDescription: string
  icon: string
  colorTheme: string
  page?: { heroDescription?: string }
}

export default function ServicesPage() {
  const [services, setServices] = useState<ServiceItem[]>([])
  const [loading, setLoading] = useState(true)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  useEffect(() => {
    fetch('/api/services?sort=order&limit=20')
      .then(res => res.json())
      .then(data => {
        if (data.docs?.length) setServices(data.docs)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  return (
    <div className="min-h-screen animate-bg-breathe" data-testid="services-page">
      <ScrollSpiral />
      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-12 lg:pt-40 lg:pb-16 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{
            background: 'radial-gradient(ellipse 60% 40% at 40% 30%, hsl(216 100% 50% / 0.04), transparent 60%), radial-gradient(ellipse 40% 40% at 70% 70%, hsl(270 80% 65% / 0.03), transparent 50%)',
          }} />
          <div className="section-container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-xs font-medium tracking-[0.2em] uppercase mb-4"
                style={{ color: 'hsl(var(--primary))' }}
              >
                Our Services
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter text-foreground leading-tight"
                data-testid="services-hero-heading"
              >
                End-to-end engineering for{' '}
                <span className="gradient-text">ambitious products</span>.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6 text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
                style={{ color: 'hsl(var(--body))' }}
              >
                From platform architecture to growth engineering — we deliver production-grade systems with AI-augmented precision.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section ref={ref} className="relative pb-24 lg:pb-32">
          <div className="section-container relative z-10">
            {loading ? (
              <div className="flex items-center justify-center py-20">
                <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {services.map((svc, i) => {
                  const Icon = iconMap[svc.icon] || Globe
                  const colors = colorMap[svc.colorTheme] || colorMap.blue
                  return (
                    <motion.div
                      key={svc.slug}
                      initial={{ opacity: 0, y: 40 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                      transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
                    >
                      <Link
                        href={`/services/${svc.slug}`}
                        className="bento-card group block p-7 h-full"
                        data-testid={`service-tile-${svc.slug}`}
                      >
                        {/* Hover glow */}
                        <div
                          className="absolute inset-0 rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                          style={{ background: `radial-gradient(ellipse at 20% 20%, ${colors.glow}, transparent 60%)` }}
                        />

                        <div className="relative z-10">
                          <div
                            className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-400 group-hover:scale-110"
                            style={{ background: colors.bg, border: `1px solid ${colors.color}20` }}
                          >
                            <Icon className="w-6 h-6" style={{ color: colors.color }} strokeWidth={1.5} />
                          </div>

                          <h3 className="text-lg font-bold text-foreground tracking-tight mb-2 group-hover:text-primary transition-colors duration-300">
                            {svc.title}
                          </h3>

                          <p className="text-sm leading-relaxed mb-5" style={{ color: 'hsl(var(--body))' }}>
                            {svc.page?.heroDescription || svc.shortDescription}
                          </p>

                          <span className="text-xs font-semibold flex items-center gap-1.5 transition-all duration-300 group-hover:gap-2.5"
                            style={{ color: colors.color }}>
                            Learn more <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                          </span>
                        </div>
                      </Link>
                    </motion.div>
                  )
                })}
              </div>
            )}
          </div>
        </section>
      </main>

      <CTAFooter />
    </div>
  )
}
