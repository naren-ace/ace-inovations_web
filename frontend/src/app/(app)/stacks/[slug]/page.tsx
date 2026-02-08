import React from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Navbar } from '@/components/layout/Navbar'
import { CTAFooter } from '@/components/layout/Footer'
import { ArrowLeft, Clock } from 'lucide-react'

const categoryLabels: Record<string, string> = {
  'ai-strategy': 'AI Strategy',
  'engineering': 'Engineering',
  'case-studies': 'Case Studies',
  'field-notes': 'Field Notes',
}

function extractText(node: any): string {
  if (!node) return ''
  if (node.text) return node.text
  if (node.children) return node.children.map(extractText).join('')
  return ''
}

function renderRichText(content: any): React.ReactNode {
  if (!content?.root?.children) return null
  return content.root.children.map((node: any, i: number) => {
    if (node.type === 'paragraph') {
      const text = extractText(node)
      if (!text.trim()) return <br key={i} />
      return (
        <p key={i} className="leading-relaxed mb-4" style={{ color: 'hsl(var(--body))' }}>
          {node.children?.map((child: any, j: number) => {
            if (child.bold) return <strong key={j} className="text-foreground font-semibold">{child.text}</strong>
            if (child.italic) return <em key={j}>{child.text}</em>
            if (child.code) return <code key={j} className="bg-secondary px-1.5 py-0.5 rounded text-primary text-sm">{child.text}</code>
            return <span key={j}>{child.text}</span>
          })}
        </p>
      )
    }
    if (node.type === 'heading') {
      const text = extractText(node)
      return <h2 key={i} className="text-2xl font-bold text-foreground mt-8 mb-4">{text}</h2>
    }
    return null
  })
}

export default async function StackPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const payload = await getPayload({ config })
  const { docs } = await payload.find({ collection: 'stacks', where: { slug: { equals: slug } }, limit: 1 })
  const post = docs[0]
  if (!post) notFound()

  const color = ['ai-strategy', 'case-studies'].includes(post.category as string) ? 'primary' : 'accent'

  return (
    <div className="min-h-screen animate-bg-breathe">
      <Navbar />

      <main>
        <article className="relative pt-32 pb-24 lg:pt-40 lg:pb-32">
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse 50% 30% at 50% 10%, hsl(216 100% 50% / 0.03), transparent 60%)' }} />
          <div className="section-container relative z-10 max-w-3xl" data-testid="stack-post">
            {/* Back link */}
            <Link href="/stacks" className="inline-flex items-center gap-1.5 text-sm font-medium mb-8 transition-colors duration-200 hover:text-primary" style={{ color: 'hsl(var(--caption))' }}>
              <ArrowLeft className="w-4 h-4" /> Back to Stacks
            </Link>

            {/* Meta */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[11px] font-semibold tracking-wider uppercase"
                style={{ color: color === 'primary' ? 'hsl(var(--primary))' : 'hsl(var(--accent))' }}>
                // {categoryLabels[post.category as string] ?? post.category}
              </span>
              <span className="text-xs" style={{ color: 'hsl(var(--caption))' }}>
                {new Date(post.createdAt).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tighter text-foreground leading-[1.1] mb-6" data-testid="stack-post-title">
              {post.title}
            </h1>

            {post.excerpt && (
              <p className="text-lg mb-12 pl-4" style={{ color: 'hsl(var(--body))', borderLeft: '2px solid hsl(var(--primary) / 0.3)' }}>
                {post.excerpt}
              </p>
            )}

            <div data-testid="stack-post-content">
              {renderRichText(post.content)}
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}
