import React from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'
import Link from 'next/link'
import { Navbar } from '@/components/layout/Navbar'
import { CTAFooter } from '@/components/layout/Footer'
import { ScrollSpiral } from '@/components/effects/ScrollSpiral'
import { ArrowRight, Clock, CheckCircle, ArrowUpRight, Layers } from 'lucide-react'

const categoryLabels: Record<string, string> = {
  'ai-strategy': 'AI Strategy',
  'engineering': 'Engineering',
  'case-studies': 'Case Studies',
  'field-notes': 'Field Notes',
}

const categoryColors: Record<string, 'primary' | 'accent'> = {
  'ai-strategy': 'primary',
  'engineering': 'accent',
  'case-studies': 'primary',
  'field-notes': 'accent',
}

const verifiedTools = [
  { name: 'Vercel', category: 'Deployment', description: 'Edge-first deployment platform. Zero-config, instant rollbacks.' },
  { name: 'Supabase', category: 'Backend', description: 'Open-source Firebase alternative with real-time Postgres.' },
  { name: 'Tailwind CSS', category: 'Styling', description: 'Utility-first CSS for building any design at velocity.' },
  { name: 'LangChain', category: 'AI Framework', description: 'The standard for building LLM-powered applications.' },
  { name: 'Temporal', category: 'Orchestration', description: 'Durable workflow engine for mission-critical processes.' },
  { name: 'Grafana', category: 'Observability', description: 'Unified monitoring, logging, and tracing platform.' },
  { name: 'Linear', category: 'Project Management', description: 'The issue tracker built for high-velocity engineering teams.' },
]

export default async function StacksPage() {
  const payload = await getPayload({ config })

  const { docs: posts } = await payload.find({
    collection: 'stacks',
    where: { status: { equals: 'published' } },
    sort: '-createdAt',
    limit: 20,
  })

  return (
    <div className="min-h-screen animate-bg-breathe" data-testid="stacks-page">
      <ScrollSpiral />
      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse 60% 40% at 40% 30%, hsl(216 100% 50% / 0.04), transparent 60%), radial-gradient(ellipse 40% 40% at 70% 70%, hsl(259 72% 58% / 0.03), transparent 50%)' }} />
          <div className="section-container relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-medium tracking-wide uppercase mb-8"
                style={{ background: 'hsl(216 100% 50% / 0.06)', color: 'hsl(var(--primary))', border: '1px solid hsl(216 100% 50% / 0.12)' }}
                data-testid="stacks-hero-badge">
                <Layers className="w-3 h-3" />
                Engineering Blog
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tighter text-foreground" data-testid="stacks-hero-heading">
                ACE Stacks:{' '}<span className="gradient-text">Field Notes from the Frontline</span>.
              </h1>
              <p className="mt-6 text-base md:text-lg leading-relaxed max-w-2xl" style={{ color: 'hsl(var(--body))' }}>
                Deep technical breakdowns of the architectures, toolchains, and agentic workflows that power the products we ship at ACE inovations.
              </p>
            </div>
          </div>
        </section>

        {/* Articles + Sidebar */}
        <section className="relative pb-24 lg:pb-32">
          <div className="section-container relative z-10">
            <div className="grid lg:grid-cols-3 gap-10">
              {/* Articles */}
              <div className="lg:col-span-2">
                {posts.length === 0 ? (
                  <div className="text-center py-20" data-testid="stacks-empty">
                    <p className="text-lg" style={{ color: 'hsl(var(--caption))' }}>No published stacks yet.</p>
                    <p className="text-sm mt-2" style={{ color: 'hsl(var(--caption))' }}>Create your first post in the <Link href="/admin" className="text-primary hover:underline">Admin Panel</Link>.</p>
                  </div>
                ) : (
                  <div className="grid sm:grid-cols-2 gap-6">
                    {posts.map((post: any, i: number) => {
                      const color = categoryColors[post.category] ?? 'primary'
                      return (
                        <Link key={post.id} href={`/stacks/${post.slug}`}
                          className="group rounded-xl overflow-hidden flex flex-col cursor-pointer transition-all duration-300 hover:shadow-elevated"
                          style={{ background: 'hsl(var(--card))', border: '1px solid hsl(var(--border) / 0.6)' }}
                          data-testid={`stacks-article-${i}`}>
                          {/* Gradient header */}
                          <div className="relative h-28 flex items-center justify-center overflow-hidden"
                            style={{ background: color === 'primary'
                              ? 'linear-gradient(135deg, hsl(216 100% 50% / 0.04), hsl(216 100% 65% / 0.08))'
                              : 'linear-gradient(135deg, hsl(259 72% 58% / 0.04), hsl(259 72% 72% / 0.08))' }}>
                            <div className="absolute inset-0 opacity-30 pointer-events-none"
                              style={{ backgroundImage: 'linear-gradient(hsl(var(--border) / 0.5) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border) / 0.5) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                          </div>
                          <div className="p-6 flex flex-col flex-1">
                            <div className="flex items-center gap-3 mb-3">
                              <span className="text-[11px] font-semibold tracking-wider uppercase"
                                style={{ color: color === 'primary' ? 'hsl(var(--primary))' : 'hsl(var(--accent))' }}>
                                // {categoryLabels[post.category] ?? post.category}
                              </span>
                              <span className="flex items-center gap-1 text-xs" style={{ color: 'hsl(var(--caption))' }}>
                                <Clock className="w-3 h-3" />
                                {Math.max(5, Math.floor((post.excerpt?.length || 100) / 20))} min read
                              </span>
                            </div>
                            <h3 className="text-base font-bold text-foreground tracking-tight leading-snug mb-3 group-hover:text-primary transition-colors duration-200">{post.title}</h3>
                            {post.excerpt && <p className="text-sm leading-relaxed flex-1" style={{ color: 'hsl(var(--body))' }}>{post.excerpt}</p>}
                            <div className="flex items-center justify-between mt-5 pt-4" style={{ borderTop: '1px solid hsl(var(--border) / 0.4)' }}>
                              <span className="text-xs" style={{ color: 'hsl(var(--caption))' }}>
                                {new Date(post.createdAt).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                              </span>
                              <span className="text-xs font-medium flex items-center gap-1 transition-all duration-200 group-hover:gap-2"
                                style={{ color: color === 'primary' ? 'hsl(var(--primary))' : 'hsl(var(--accent))' }}>
                                Read <ArrowRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5" />
                              </span>
                            </div>
                          </div>
                        </Link>
                      )
                    })}
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <div className="rounded-xl overflow-hidden"
                    style={{ background: 'hsl(var(--card) / 0.8)', border: '1px solid hsl(var(--border) / 0.6)', backdropFilter: 'blur(16px)' }}
                    data-testid="stacks-sidebar">
                    <div className="px-6 py-5"
                      style={{ borderBottom: '1px solid hsl(var(--border) / 0.5)', background: 'linear-gradient(135deg, hsl(216 100% 50% / 0.03), hsl(259 72% 58% / 0.03))' }}>
                      <p className="text-xs font-medium tracking-[0.2em] uppercase mb-2" style={{ color: 'hsl(var(--primary))' }}>Recommended Stack</p>
                      <h3 className="text-lg font-bold text-foreground tracking-tight">The Tools that Power ACE</h3>
                    </div>
                    <div className="p-3">
                      {verifiedTools.map((tool, i) => (
                        <div key={tool.name}
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-all duration-200 group/tool"
                          data-testid={`stacks-tool-${i}`}>
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                            style={{ background: i % 2 === 0 ? 'hsl(216 100% 50% / 0.07)' : 'hsl(259 72% 58% / 0.07)' }}>
                            <CheckCircle className="w-3.5 h-3.5" style={{ color: i % 2 === 0 ? 'hsl(var(--primary))' : 'hsl(var(--accent))' }} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <p className="text-sm font-semibold text-foreground group-hover/tool:text-primary transition-colors duration-200">{tool.name}</p>
                              <ArrowUpRight className="w-3 h-3 opacity-0 group-hover/tool:opacity-100 transition-opacity duration-200" style={{ color: 'hsl(var(--primary))' }} />
                            </div>
                            <p className="text-[10px] font-medium tracking-wider uppercase mt-0.5" style={{ color: 'hsl(var(--caption))' }}>{tool.category}</p>
                            <p className="text-xs mt-1 leading-relaxed" style={{ color: 'hsl(var(--body))' }}>{tool.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <p className="mt-4 text-[11px] leading-relaxed px-2" style={{ color: 'hsl(var(--caption))' }}>
                    We only recommend tools that power the ACE Engine. Some links may be affiliate links to support our R&amp;D.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <CTAFooter />
    </div>
  )
}
