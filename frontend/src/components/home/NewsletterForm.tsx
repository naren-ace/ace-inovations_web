'use client'

import { useState } from 'react'
import { ArrowRight, Check, Loader2 } from 'lucide-react'
import { toast } from 'sonner'
import { subscribeNewsletter } from '@/app/(app)/actions'

export function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || submitting) return

    setSubmitting(true)
    try {
      const result = await subscribeNewsletter(email)
      if (result.success) {
        setSubscribed(true)
        setEmail('')
        toast.success('Subscribed!', {
          description: 'You\'ll receive our latest insights in your inbox.',
        })
        setTimeout(() => setSubscribed(false), 4000)
      }
    } catch {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="you@company.com"
        required
        className="flex-1 h-11 px-4 rounded-lg border bg-background text-foreground text-sm outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
        style={{ borderColor: 'hsl(var(--border))' }}
        data-testid="newsletter-email-input"
        disabled={submitting}
      />
      <button
        type="submit"
        disabled={submitting || subscribed}
        className="h-11 px-6 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 shrink-0 flex items-center justify-center gap-1.5 disabled:opacity-70"
        style={{ background: subscribed ? 'hsl(142 76% 36%)' : 'hsl(var(--primary))' }}
        data-testid="newsletter-subscribe-btn"
      >
        {submitting ? (
          <><Loader2 className="w-3.5 h-3.5 animate-spin" /> Subscribing</>
        ) : subscribed ? (
          <><Check className="w-3.5 h-3.5" /> Subscribed</>
        ) : (
          <>Subscribe <ArrowRight className="w-3.5 h-3.5" /></>
        )}
      </button>
    </form>
  )
}
