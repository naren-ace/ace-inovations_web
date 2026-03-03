import React from 'react'
import { Metadata } from 'next'
import { getPayload } from 'payload'
import config from '@payload-config'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Navbar } from '@/components/layout/Navbar'
import { CTAFooter } from '@/components/layout/Footer'
import { ScrollSpiral } from '@/components/effects/ScrollSpiral'
import { ArrowLeft, ArrowRight, Clock } from 'lucide-react'

const categoryLabels: Record<string, string> = {
  'ai-strategy': 'AI Strategy',
  'engineering': 'Engineering',
  'case-studies': 'Case Studies',
  'field-notes': 'Field Notes',
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const payload = await getPayload({ config })
  const { docs } = await payload.find({ collection: 'stacks', where: { slug: { equals: slug } }, limit: 1 })
  const post = docs[0]
  if (!post) return { title: 'Article Not Found' }
  return {
    title: post.title as string,
    description: (post.excerpt as string) || `Read ${post.title} on AceInovations Insights.`,
  }
}

function extractText(node: any): string {
  if (!node) return ''
  if (node.text) return node.text
  if (node.children) return node.children.map(extractText).join('')
  return ''
}

function estimateReadingTime(content: any): number {
  if (!content?.root?.children) return 3
  const text = content.root.children.map(extractText).join(' ')
  const wordCount = text.split(/\s+/).length
  return Math.max(3, Math.ceil(wordCount / 200))
}

function renderInlineChildren(children: any[]): React.ReactNode {
  if (!children) return null
  return children.map((child: any, j: number) => {
    if (child.type === 'link') {
      return (
        <a key={j} href={child.fields?.url || '#'} target="_blank" rel="noopener noreferrer"
          className="text-primary underline underline-offset-2 hover:opacity-80 transition-opacity">
          {child.children?.map((c: any, k: number) => <span key={k}>{c.text}</span>)}
        </a>
      )
    }
    let el: React.ReactNode = child.text ?? ''
    if (child.bold) el = <strong key={j} className="text-foreground font-semibold">{child.text}</strong>
    else if (child.italic) el = <em key={j}>{child.text}</em>
    else if (child.code) el = <code key={j} className="bg-secondary px-1.5 py-0.5 rounded text-primary text-sm font-mono">{child.text}</code>
    else if (child.underline) el = <u key={j}>{child.text}</u>
    else if (child.strikethrough) el = <s key={j}>{child.text}</s>
    else el = <span key={j}>{child.text}</span>
    return el
  })
}

function renderRichText(content: any): React.ReactNode {
  if (!content?.root?.children) return null
  return content.root.children.map((node: any, i: number) => {
    if (node.type === 'paragraph') {
      const text = extractText(node)
      if (!text.trim()) return <div key={i} className="h-4" />
      return (
        <p key={i} className="text-base leading-[1.8] mb-5" style={{ color: 'hsl(var(--body))' }}>
          {renderInlineChildren(node.children)}
        </p>
      )
    }
    if (node.type === 'heading') {
      const text = extractText(node)
      const tag = node.tag || 'h2'
      if (tag === 'h2') return <h2 key={i} className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground mt-10 mb-4">{text}</h2>
      if (tag === 'h3') return <h3 key={i} className="text-xl sm:text-2xl font-bold tracking-tight text-foreground mt-8 mb-3">{text}</h3>
      if (tag === 'h4') return <h4 key={i} className="text-lg font-bold text-foreground mt-6 mb-3">{text}</h4>
      return <h2 key={i} className="text-2xl font-bold text-foreground mt-10 mb-4">{text}</h2>
    }
    if (node.type === 'list') {
      const items = node.children?.map((item: any, j: number) => (
        <li key={j} className="mb-2">{renderInlineChildren(item.children?.[0]?.children || item.children)}</li>
      ))
      if (node.listType === 'number') {
        return <ol key={i} className="list-decimal pl-6 mb-5 space-y-1 text-base leading-[1.8]" style={{ color: 'hsl(var(--body))' }}>{items}</ol>
      }
      return <ul key={i} className="list-disc pl-6 mb-5 space-y-1 text-base leading-[1.8]" style={{ color: 'hsl(var(--body))' }}>{items}</ul>
    }
    if (node.type === 'quote') {
      const text = extractText(node)
      return (
        <blockquote key={i} className="my-6 pl-5 py-1 text-base italic" style={{ color: 'hsl(var(--body))', borderLeft: '3px solid hsl(var(--primary) / 0.4)' }}>
          {text}
        </blockquote>
      )
    }
    return null
  })
}

export default async function InsightArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const payload = await getPayload({ config })
  const { docs } = await payload.find({ collection: 'stacks', where: { slug: { equals: slug } }, limit: 1 })
  const post = docs[0]
  if (!post) notFound()

  const readTime = estimateReadingTime(post.content)
  const color = ['ai-strategy', 'case-studies'].includes(post.category as string) ? 'primary' : 'accent'

  // Fetch related articles (same category, exclude current)
  const { docs: relatedPosts } = await payload.find({
    collection: 'stacks',
    where: {
      and: [
        { category: { equals: post.category } },
        { slug: { not_equals: slug } },
        { status: { equals: 'published' } },
      ],
    },
    sort: '-createdAt',
    limit: 3,
  })

  return (
    <div className="min-h-screen animate-bg-breathe" data-testid="insight-article-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: post.title,
        description: post.excerpt || `Read ${post.title} on AceInovations Insights.`,
        author: { '@type': 'Organization', name: 'AceInovations' },
        publisher: { '@type': 'Organization', name: 'AceInovations', logo: { '@type': 'ImageObject', url: 'https://aceinovations.com/favicon.svg' } },
        datePublished: post.createdAt,
        dateModified: post.updatedAt || post.createdAt,
        mainEntityOfPage: { '@type': 'WebPage' },
        articleSection: categoryLabels[post.category as string] ?? post.category,
      }) }} />
      <ScrollSpiral />
      <Navbar />

      <main>
        <article className="relative pt-32 pb-16 lg:pt-40 lg:pb-24">
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse 50% 30% at 50% 10%, hsl(216 100% 50% / 0.03), transparent 60%)' }} />

          <div className="section-container relative z-10 max-w-3xl" data-testid="insight-post">
            {/* Back link */}
            <Link href="/stacks" className="inline-flex items-center gap-1.5 text-sm font-medium mb-8 transition-colors duration-200 hover:text-primary"
              style={{ color: 'hsl(var(--caption))' }} data-testid="back-to-insights">
              <ArrowLeft className="w-4 h-4" /> Back to Insights
            </Link>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase"
                style={{
                  color: color === 'primary' ? 'hsl(var(--primary))' : 'hsl(var(--accent))',
                  background: color === 'primary' ? 'hsl(216 100% 50% / 0.06)' : 'hsl(259 72% 58% / 0.06)',
                  border: `1px solid ${color === 'primary' ? 'hsl(216 100% 50% / 0.12)' : 'hsl(259 72% 58% / 0.12)'}`,
                }}>
                {categoryLabels[post.category as string] ?? post.category}
              </span>
              <span className="flex items-center gap-1 text-xs" style={{ color: 'hsl(var(--caption))' }}>
                <Clock className="w-3 h-3" />
                {readTime} min read
              </span>
              <span className="text-xs" style={{ color: 'hsl(var(--caption))' }}>
                {new Date(post.createdAt).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tighter text-foreground leading-[1.1] mb-6" data-testid="insight-post-title">
              {post.title}
            </h1>

            {/* Excerpt */}
            {post.excerpt && (
              <p className="text-lg leading-relaxed mb-10 pl-5" style={{ color: 'hsl(var(--body))', borderLeft: '3px solid hsl(var(--primary) / 0.3)' }}>
                {post.excerpt}
              </p>
            )}

            {/* Separator */}
            <div className="h-px mb-10" style={{ background: 'linear-gradient(90deg, hsl(var(--border)), transparent)' }} />

            {/* Content */}
            <div className="prose-custom" data-testid="insight-post-content">
              {renderRichText(post.content)}
            </div>
          </div>
        </article>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <section className="relative py-16 lg:py-20" style={{ background: 'hsl(var(--surface-subtle))' }} data-testid="related-articles">
            <div className="absolute left-0 right-0 top-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, hsl(var(--border)), transparent)' }} />
            <div className="section-container relative z-10">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-xs font-medium tracking-[0.2em] uppercase mb-2" style={{ color: 'hsl(var(--primary))' }}>More Insights</p>
                  <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-foreground">Related articles</h3>
                </div>
                <Link href="/stacks" className="text-sm font-medium flex items-center gap-1 transition-colors hover:text-primary"
                  style={{ color: 'hsl(var(--caption))' }} data-testid="view-all-insights">
                  View all <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedPosts.map((related: any, i: number) => {
                  const relColor = ['ai-strategy', 'case-studies'].includes(related.category) ? 'primary' : 'accent'
                  return (
                    <Link key={related.id} href={`/stacks/${related.slug}`}
                      className="group rounded-xl p-6 transition-all duration-300 hover:shadow-elevated"
                      style={{ background: 'hsl(var(--card))', border: '1px solid hsl(var(--border) / 0.6)' }}
                      data-testid={`related-article-${i}`}>
                      <span className="text-[11px] font-semibold tracking-wider uppercase"
                        style={{ color: relColor === 'primary' ? 'hsl(var(--primary))' : 'hsl(var(--accent))' }}>
                        {categoryLabels[related.category] ?? related.category}
                      </span>
                      <h4 className="text-base font-bold text-foreground tracking-tight leading-snug mt-3 mb-2 group-hover:text-primary transition-colors">
                        {related.title}
                      </h4>
                      {related.excerpt && (
                        <p className="text-sm leading-relaxed line-clamp-2" style={{ color: 'hsl(var(--body))' }}>{related.excerpt}</p>
                      )}
                      <span className="text-xs font-medium flex items-center gap-1 mt-4 transition-all duration-200 group-hover:gap-2"
                        style={{ color: relColor === 'primary' ? 'hsl(var(--primary))' : 'hsl(var(--accent))' }}>
                        Read <ArrowRight className="w-3 h-3" />
                      </span>
                    </Link>
                  )
                })}
              </div>
            </div>
          </section>
        )}
      </main>

      <CTAFooter />
    </div>
  )
}
