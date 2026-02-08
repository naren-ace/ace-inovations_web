import React from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'
import Link from 'next/link'
import { LogicNodeIcon } from '@/components/brand/LogicNodeIcon'

const categoryLabels: Record<string, string> = {
  'ai-strategy': 'AI Strategy',
  'engineering': 'Engineering',
  'case-studies': 'Case Studies',
  'field-notes': 'Field Notes',
}

const categoryStyles: Record<string, string> = {
  'ai-strategy': 'bg-blue-500/20 text-blue-400',
  'engineering': 'bg-emerald-500/20 text-emerald-400',
  'case-studies': 'bg-amber-500/20 text-amber-400',
  'field-notes': 'bg-purple-500/20 text-purple-400',
}

export default async function StacksPage() {
  const payload = await getPayload({ config })

  const { docs: posts } = await payload.find({
    collection: 'stacks',
    where: { status: { equals: 'published' } },
    sort: '-createdAt',
    limit: 20,
  })

  return (
    <>
      <nav className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/5" style={{ background: 'hsl(222 47% 6% / 0.85)' }} data-testid="stacks-navbar">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group" data-testid="stacks-home-link">
            <LogicNodeIcon size={28} />
            <span className="font-heading font-bold text-white text-lg">ACE<span style={{ fontWeight: 200 }}>Stacks</span></span>
          </Link>
          <Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">Home</Link>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-16" data-testid="stacks-feed">
        <div className="mb-16">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: 'hsl(216 100% 50%)' }}>Knowledge Base</p>
          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-white mb-4">ACE Stacks</h1>
          <p className="text-lg text-gray-400 max-w-2xl">Deep dives into AI strategy, engineering patterns, and field notes from the team.</p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-20" data-testid="stacks-empty">
            <p className="text-gray-500 text-lg">No published stacks yet.</p>
            <p className="text-gray-600 text-sm mt-2">Create your first post in the <Link href="/admin" className="text-blue-400 hover:underline">Admin Panel</Link>.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post: any) => (
              <Link
                key={post.id}
                href={`/stacks/${post.slug}`}
                className="group block rounded-2xl border border-white/5 hover:border-blue-500/20 transition-all duration-300 overflow-hidden"
                style={{ background: 'hsl(222 47% 9% / 0.6)' }}
                data-testid={`stack-card-${post.slug}`}
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${categoryStyles[post.category] ?? 'bg-gray-500/20 text-gray-400'}`}>
                      {categoryLabels[post.category] ?? post.category}
                    </span>
                    <span className="text-xs text-gray-600">
                      {new Date(post.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                  </div>
                  <h2 className="text-xl font-heading font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-200">{post.title}</h2>
                  {post.excerpt && <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">{post.excerpt}</p>}
                  <div className="mt-4 flex items-center text-blue-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    Read more
                    <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" /></svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>
    </>
  )
}
