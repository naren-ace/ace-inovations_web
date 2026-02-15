import React from 'react'
import { Metadata } from 'next'
import { getPayload } from 'payload'
import config from '@payload-config'
import Link from 'next/link'
import { Navbar } from '@/components/layout/Navbar'
import { CTAFooter } from '@/components/layout/Footer'
import { ScrollSpiral } from '@/components/effects/ScrollSpiral'
import { ArrowRight, Clock, Sparkles, BookOpen } from 'lucide-react'
import { InsightsClient } from './InsightsClient'
import { NewsletterForm } from '@/components/home/NewsletterForm'

export const metadata: Metadata = {
  title: 'Insights',
  description: 'Strategy, engineering & lessons from the field. Deep dives, case studies, and field notes from the ACE team.',
}

const categoryLabels: Record<string, string> = {
  'ai-strategy': 'AI Strategy',
  'engineering': 'Engineering',
  'case-studies': 'Case Studies',
  'field-notes': 'Field Notes',
}

export default async function InsightsPage() {
  const payload = await getPayload({ config })

  const { docs: posts } = await payload.find({
    collection: 'stacks',
    where: { status: { equals: 'published' } },
    sort: '-createdAt',
    limit: 50,
  })

  const serializedPosts = posts.map((post: any) => ({
    id: post.id,
    title: post.title,
    slug: post.slug,
    category: post.category,
    categoryLabel: categoryLabels[post.category] ?? post.category,
    excerpt: post.excerpt || '',
    createdAt: post.createdAt,
    readTime: Math.max(3, Math.floor((post.excerpt?.length || 100) / 20)),
  }))

  return (
    <div className="min-h-screen animate-bg-breathe" data-testid="insights-page">
      <ScrollSpiral />
      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-12 lg:pt-40 lg:pb-16 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse 60% 40% at 40% 30%, hsl(216 100% 50% / 0.04), transparent 60%), radial-gradient(ellipse 40% 40% at 70% 70%, hsl(259 72% 58% / 0.03), transparent 50%)' }} />
          <div className="section-container relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-medium tracking-wide uppercase mb-8"
                style={{ background: 'hsl(216 100% 50% / 0.06)', color: 'hsl(var(--primary))', border: '1px solid hsl(216 100% 50% / 0.12)' }}
                data-testid="insights-hero-badge">
                <Sparkles className="w-3 h-3" />
                Insights
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tighter text-foreground" data-testid="insights-hero-heading">
                Strategy, engineering &{' '}<span className="gradient-text">lessons from the field</span>.
              </h1>
              <p className="mt-6 text-base md:text-lg leading-relaxed max-w-2xl" style={{ color: 'hsl(var(--body))' }}>
                Deep dives, case studies, and field notes from the ACE team — sharing what we learn building production-grade platforms and AI-powered systems.
              </p>
            </div>
          </div>
        </section>

        <InsightsClient posts={serializedPosts} categoryLabels={categoryLabels} />

        {/* Newsletter CTA */}
        <section className="relative py-16 lg:py-20" data-testid="insights-newsletter">
          <div className="section-container relative z-10">
            <div className="max-w-2xl mx-auto text-center rounded-2xl p-8 lg:p-12"
              style={{ background: 'hsl(var(--card))', border: '1px solid hsl(var(--border) / 0.6)', boxShadow: '0 20px 60px -15px hsl(0 0% 0% / 0.06)' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-5"
                style={{ background: 'hsl(216 100% 50% / 0.08)' }}>
                <BookOpen className="w-5 h-5" style={{ color: 'hsl(var(--primary))' }} />
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-foreground mb-3">
                Stay in the loop
              </h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: 'hsl(var(--body))' }}>
                Get our latest insights on AI engineering, platform architecture, and product strategy — delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="flex-1 h-11 px-4 rounded-lg border bg-background text-foreground text-sm outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  style={{ borderColor: 'hsl(var(--border))' }}
                  data-testid="newsletter-email-input"
                />
                <button
                  className="h-11 px-6 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 shrink-0"
                  style={{ background: 'hsl(var(--primary))' }}
                  data-testid="newsletter-subscribe-btn"
                >
                  Subscribe <ArrowRight className="w-3.5 h-3.5 inline ml-1" />
                </button>
              </div>
              <p className="text-[11px] mt-4" style={{ color: 'hsl(var(--caption))' }}>
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </section>
      </main>

      <CTAFooter />
    </div>
  )
}
