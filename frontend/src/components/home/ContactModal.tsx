'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Send, CheckCircle } from 'lucide-react'

interface ContactModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export const ContactModal: React.FC<ContactModalProps> = ({ open, onOpenChange }) => {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' })

  if (!open) return null

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', company: '', message: '' })
      onOpenChange(false)
    }, 2500)
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center" onClick={() => onOpenChange(false)}>
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      <div
        className="relative w-full max-w-md mx-4 rounded-2xl p-6"
        style={{
          background: 'hsl(var(--card))',
          border: '1px solid hsl(var(--border))',
          boxShadow: '0 25px 50px -12px hsl(222 47% 11% / 0.25)',
        }}
        onClick={e => e.stopPropagation()}
        data-testid="contact-modal"
      >
        {submitted ? (
          <div className="flex flex-col items-center justify-center py-10 text-center">
            <div className="w-14 h-14 rounded-full flex items-center justify-center mb-5"
              style={{ background: 'hsl(216 100% 50% / 0.08)' }}>
              <CheckCircle className="w-7 h-7" style={{ color: 'hsl(var(--primary))' }} />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Inquiry Received</h3>
            <p className="text-sm" style={{ color: 'hsl(var(--body))' }}>
              We&apos;ll review your project details and get back to you within 24 hours.
            </p>
          </div>
        ) : (
          <>
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-foreground">Start a Project</h3>
              <p className="text-sm mt-1" style={{ color: 'hsl(var(--caption))' }}>Tell us about your vision and we&apos;ll craft a blueprint.</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground block mb-1.5">Name <span className="text-red-500">*</span></label>
                <input name="name" value={formData.name} onChange={handleChange} placeholder="Your name"
                  className="w-full h-10 px-3 rounded-lg border bg-background text-foreground text-sm" style={{ borderColor: 'hsl(var(--border))' }} />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground block mb-1.5">Email <span className="text-red-500">*</span></label>
                <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="you@company.com"
                  className="w-full h-10 px-3 rounded-lg border bg-background text-foreground text-sm" style={{ borderColor: 'hsl(var(--border))' }} />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground block mb-1.5">Company</label>
                <input name="company" value={formData.company} onChange={handleChange} placeholder="Your company"
                  className="w-full h-10 px-3 rounded-lg border bg-background text-foreground text-sm" style={{ borderColor: 'hsl(var(--border))' }} />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground block mb-1.5">Project Details <span className="text-red-500">*</span></label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows={4}
                  placeholder="Describe your project, timeline, and goals..."
                  className="w-full px-3 py-2 rounded-lg border bg-background text-foreground text-sm resize-none" style={{ borderColor: 'hsl(var(--border))' }} />
              </div>
              <Button variant="premium" size="lg" type="submit" className="w-full mt-2 btn-glow">
                Submit Inquiry <Send className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
