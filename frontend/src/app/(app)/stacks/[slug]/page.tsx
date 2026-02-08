import React from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { LogicNodeIcon } from '@/components/brand/LogicNodeIcon'

const categoryLabels: Record<string, string> = {
  'ai-strategy': 'AI Strategy',
  'engineering': 'Engineering',
  'case-studies': 'Case Studies',
  'field-notes': 'Field Notes',
}

const categoryColors: Record<string, string> = {
  'ai-strategy': 'bg-ace-blue/20 text-ace-blue',
  'engineering': 'bg-emerald-500/20 text-emerald-400',
  'case-studies': 'bg-amber-500/20 text-amber-400',
  'field-notes': 'bg-ace-violet/20 text-purple-400',
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
        <p key={i} className="text-gray-300 leading-relaxed mb-4">
          {node.children?.map((child: any, j: number) => {
            if (child.bold) return <strong key={j} className="text-white font-semibold">{child.text}</strong>
            if (child.italic) return <em key={j}>{child.text}</em>
            if (child.code) return <code key={j} className="bg-white/10 px-1.5 py-0.5 rounded text-ace-blue text-sm">{child.text}</code>
            return <span key={j}>{child.text}</span>
          })}
        </p>
      )
    }
    if (node.type === 'heading') {
      const text = extractText(node)
      const Tag = `h${node.tag?.replace('h', '') || '2'}` as keyof JSX.IntrinsicElements
      return <Tag key={i} className="text-white font-heading font-bold text-2xl mt-8 mb-4">{text}</Tag>
    }
    return null
  })
}

export default async function StackPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const payload = await getPayload({ config })

  const { docs } = await payload.find({
    collection: 'stacks',
    where: { slug: { equals: slug } },
    limit: 1,
  })

  const post = docs[0]
  if (!post) notFound()

  return (
    <>
      {/* Dark Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-[#0C0E14]/80 border-b border-white/5">
        <div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <LogicNodeIcon size={28} />
            <span className="font-heading font-bold text-white text-lg">ACE<span className="font-extralight">Stacks</span></span>
          </Link>
          <Link
            href="/stacks"
            className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
          >
            All Stacks
          </Link>
        </div>
      </nav>

      <article className="max-w-3xl mx-auto px-6 py-16" data-testid="stack-post">
        {/* Meta */}
        <div className="flex items-center gap-3 mb-6">
          <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${categoryColors[post.category as string] ?? 'bg-gray-500/20 text-gray-400'}`}>
            {categoryLabels[post.category as string] ?? post.category}
          </span>
          <span className="text-xs text-gray-600">
            {new Date(post.createdAt).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-6" data-testid="stack-post-title">
          {post.title}
        </h1>

        {post.excerpt && (
          <p className="text-lg text-gray-400 mb-12 border-l-2 border-ace-blue/40 pl-4">
            {post.excerpt}
          </p>
        )}

        {/* Content */}
        <div className="prose-dark" data-testid="stack-post-content">
          {renderRichText(post.content)}
        </div>

        {/* Back link */}
        <div className="mt-16 pt-8 border-t border-white/5">
          <Link href="/stacks" className="text-ace-blue hover:text-ace-blue/80 text-sm font-medium transition-colors">
            &larr; Back to all Stacks
          </Link>
        </div>
      </article>
    </>
  )
}
