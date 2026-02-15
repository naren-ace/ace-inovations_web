'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'

interface Post {
  id: string
  title: string
  slug: string
  category: string
  categoryLabel: string
  excerpt: string
  createdAt: string
  readTime: number
}

const categoryColors: Record<string, 'primary' | 'accent'> = {
  'ai-strategy': 'primary',
  'engineering': 'accent',
  'case-studies': 'primary',
  'field-notes': 'accent',
}

export function InsightsClient({ posts, categoryLabels }: { posts: Post[]; categoryLabels: Record<string, string> }) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const filteredPosts = activeCategory
    ? posts.filter(p => p.category === activeCategory)
    : posts

  const categories = Object.entries(categoryLabels)

  return (
    <section className="relative pb-16 lg:pb-20" id="articles">
      <div className="section-container relative z-10">
        {/* Category filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10" data-testid="insights-category-filters">
          <button
            onClick={() => setActiveCategory(null)}
            className="px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200"
            style={{
              background: !activeCategory ? 'hsl(var(--primary))' : 'hsl(var(--primary) / 0.06)',
              color: !activeCategory ? '#fff' : 'hsl(var(--primary))',
              border: `1px solid ${!activeCategory ? 'hsl(var(--primary))' : 'hsl(var(--primary) / 0.15)'}`,
            }}
            data-testid="filter-all"
          >
            All
          </button>
          {categories.map(([value, label]) => (
            <button
              key={value}
              onClick={() => setActiveCategory(activeCategory === value ? null : value)}
              className="px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200"
              style={{
                background: activeCategory === value ? 'hsl(var(--primary))' : 'hsl(var(--primary) / 0.06)',
                color: activeCategory === value ? '#fff' : 'hsl(var(--primary))',
                border: `1px solid ${activeCategory === value ? 'hsl(var(--primary))' : 'hsl(var(--primary) / 0.15)'}`,
              }}
              data-testid={`filter-${value}`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Articles grid */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-20" data-testid="insights-empty">
            <p className="text-lg" style={{ color: 'hsl(var(--caption))' }}>
              {activeCategory ? 'No insights in this category yet.' : 'No published insights yet.'}
            </p>
            {!activeCategory && (
              <p className="text-sm mt-2" style={{ color: 'hsl(var(--caption))' }}>
                Create your first insight in the{' '}
                <Link href="/ace-control-center" className="text-primary hover:underline">Control Center</Link>.
              </p>
            )}
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post, i) => {
              const color = categoryColors[post.category] ?? 'primary'
              return (
                <Link
                  key={post.id}
                  href={`/stacks/${post.slug}`}
                  className="group insight-card rounded-xl overflow-hidden flex flex-col cursor-pointer"
                  style={{ background: 'hsl(var(--card))', border: '1px solid hsl(var(--border) / 0.5)' }}
                  data-testid={`insight-card-${i}`}
                >
                  {/* Gradient header */}
                  <div
                    className="relative h-32 flex items-center justify-center overflow-hidden"
                    style={{
                      background: color === 'primary'
                        ? 'linear-gradient(135deg, hsl(216 100% 50% / 0.05), hsl(216 100% 65% / 0.10))'
                        : 'linear-gradient(135deg, hsl(259 72% 58% / 0.05), hsl(259 72% 72% / 0.10))',
                    }}
                  >
                    <div
                      className="absolute inset-0 opacity-20 pointer-events-none"
                      style={{
                        backgroundImage: 'linear-gradient(hsl(var(--border) / 0.4) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border) / 0.4) 1px, transparent 1px)',
                        backgroundSize: '32px 32px',
                      }}
                    />
                    <span className="text-xs font-bold tracking-[0.25em] uppercase opacity-40" style={{ color: color === 'primary' ? 'hsl(var(--primary))' : 'hsl(var(--accent))' }}>
                      {post.categoryLabel}
                    </span>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className="text-[11px] font-semibold tracking-wider uppercase"
                        style={{ color: color === 'primary' ? 'hsl(var(--primary))' : 'hsl(var(--accent))' }}
                      >
                        {post.categoryLabel}
                      </span>
                      <span className="flex items-center gap-1 text-xs" style={{ color: 'hsl(var(--caption))' }}>
                        <Clock className="w-3 h-3" />
                        {post.readTime} min read
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-foreground tracking-tight leading-snug mb-3 group-hover:text-primary transition-colors duration-200">
                      {post.title}
                    </h3>

                    {post.excerpt && (
                      <p className="text-sm leading-relaxed flex-1 line-clamp-3" style={{ color: 'hsl(var(--body))' }}>
                        {post.excerpt}
                      </p>
                    )}

                    <div className="flex items-center justify-between mt-5 pt-4" style={{ borderTop: '1px solid hsl(var(--border) / 0.4)' }}>
                      <span className="text-xs" style={{ color: 'hsl(var(--caption))' }}>
                        {new Date(post.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </span>
                      <span
                        className="text-xs font-medium flex items-center gap-1 transition-all duration-200 group-hover:gap-2"
                        style={{ color: color === 'primary' ? 'hsl(var(--primary))' : 'hsl(var(--accent))' }}
                      >
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
    </section>
  )
}
