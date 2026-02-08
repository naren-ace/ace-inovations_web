'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Link from 'next/link'
import { Logo } from '@/components/brand/Logo'
import { Button } from '@/components/ui/Button'
import { ContactModal } from '@/components/home/ContactModal'
import { ArrowRight } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5, ease: [0.4, 0, 0.2, 1] } }),
}

const footerColumns = [
  {
    title: 'Services',
    links: [
      { label: 'Platform Engineering', href: '/squads' },
      { label: 'Growth Engineering', href: '/squads' },
      { label: 'ACE Squads', href: '/squads' },
      { label: 'Strategic Blueprinting', href: '/squads' },
    ],
  },
  {
    title: 'Products',
    links: [
      { label: 'ACE Labs', href: '/labs' },
      { label: 'ACE Stacks', href: '/stacks' },
      { label: 'Velocity Agent', href: '/labs' },
      { label: 'Flow-Bot', href: '/labs' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'ACE Squads', href: '/squads' },
      { label: 'Careers', href: '/about' },
      { label: 'Contact', href: '/about' },
    ],
  },
]

export const CTAFooter = () => {
  const ctaRef = useRef(null)
  const footerRef = useRef(null)
  const ctaInView = useInView(ctaRef, { once: true, margin: '-40px' })
  const footerInView = useInView(footerRef, { once: true, margin: '-40px' })
  const [contactOpen, setContactOpen] = useState(false)

  return (
    <>
      {/* CTA Section */}
      <section ref={ctaRef} className="relative py-20 lg:py-28 overflow-hidden" style={{ background: 'hsl(var(--surface-subtle))' }} data-testid="cta-footer-section">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, hsl(216 100% 50% / 0.04) 0%, transparent 70%)' }} />
        <div className="absolute left-0 right-0 top-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, hsl(var(--border)), transparent)' }} />
        <div className="section-container relative z-10 text-center">
          <motion.h2 custom={0} variants={fadeUp} initial="hidden" animate={ctaInView ? 'visible' : 'hidden'}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tighter text-foreground leading-tight">
            Ready to build the future?
          </motion.h2>
          <motion.p custom={1} variants={fadeUp} initial="hidden" animate={ctaInView ? 'visible' : 'hidden'}
            className="mt-5 text-base md:text-lg leading-relaxed max-w-lg mx-auto" style={{ color: 'hsl(var(--body))' }}>
            Let&apos;s discuss how ACE inovations can transform your vision into a production-ready platform.
          </motion.p>
          <motion.div custom={2} variants={fadeUp} initial="hidden" animate={ctaInView ? 'visible' : 'hidden'} className="mt-10">
            <Button variant="header-dark" size="xl" onClick={() => setContactOpen(true)} className="btn-glow" data-testid="cta-start-project-btn">
              Start a Project <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer ref={footerRef} className="relative py-16 border-t" style={{ borderColor: 'hsl(var(--border) / 0.5)' }} data-testid="footer">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16">
            {/* Brand Column */}
            <motion.div custom={0} variants={fadeUp} initial="hidden" animate={footerInView ? 'visible' : 'hidden'} className="col-span-2 md:col-span-1">
              <Logo />
              <p className="mt-4 text-sm leading-relaxed max-w-xs" style={{ color: 'hsl(var(--body))' }}>
                Engineering the next generation of digital platforms with AI-augmented precision.
              </p>
            </motion.div>

            {/* Link Columns */}
            {footerColumns.map((col, idx) => (
              <motion.div key={col.title} custom={idx + 1} variants={fadeUp} initial="hidden" animate={footerInView ? 'visible' : 'hidden'}>
                <h4 className="text-xs font-semibold tracking-[0.15em] uppercase mb-4 text-foreground">{col.title}</h4>
                <ul className="space-y-2.5">
                  {col.links.map(link => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-sm transition-colors duration-200 hover:text-primary" style={{ color: 'hsl(var(--body))' }}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div custom={4} variants={fadeUp} initial="hidden" animate={footerInView ? 'visible' : 'hidden'}
            className="mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
            style={{ borderTop: '1px solid hsl(var(--border) / 0.4)' }}>
            <p className="text-xs" style={{ color: 'hsl(var(--caption))' }}>&copy; {new Date().getFullYear()} ACE inovations. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="/about" className="text-xs transition-colors hover:text-primary" style={{ color: 'hsl(var(--caption))' }}>Privacy</Link>
              <Link href="/about" className="text-xs transition-colors hover:text-primary" style={{ color: 'hsl(var(--caption))' }}>Terms</Link>
              <Link href="/about" className="text-xs transition-colors hover:text-primary" style={{ color: 'hsl(var(--caption))' }}>Cookies</Link>
            </div>
          </motion.div>
        </div>
      </footer>

      <ContactModal open={contactOpen} onOpenChange={setContactOpen} />
    </>
  )
}
