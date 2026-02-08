'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Link from 'next/link'
import { Logo } from '@/components/brand/Logo'
import { Button } from '@/components/ui/Button'
import { ContactModal } from '@/components/home/ContactModal'
import { ArrowRight } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5, ease: [0.4, 0, 0.2, 1] } }),
}

const footerLinks = [
  { label: 'Engine', href: '#engine' },
  { label: 'Squads', href: '#squads' },
  { label: 'Process', href: '#process' },
  { label: 'Stacks', href: '/stacks' },
  { label: 'Admin', href: '/admin' },
]

export const Footer = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  const [contactOpen, setContactOpen] = useState(false)

  return (
    <>
      <footer ref={ref} className="relative py-16 border-t" style={{ borderColor: 'hsl(var(--border) / 0.5)' }} data-testid="footer">
        <div className="section-container">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <motion.div custom={0} variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
              <Logo />
              <p className="mt-4 text-sm leading-relaxed max-w-xs" style={{ color: 'hsl(var(--body))' }}>
                Modern engineering &amp; growth studio. AI-augmented development at industrial-grade quality.
              </p>
            </motion.div>

            <motion.div custom={1} variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
              <h4 className="text-xs font-semibold tracking-[0.15em] uppercase mb-4 text-foreground">Navigation</h4>
              <ul className="space-y-2.5">
                {footerLinks.map(link => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm transition-colors duration-200 hover:text-primary" style={{ color: 'hsl(var(--body))' }}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div custom={2} variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
              <h4 className="text-xs font-semibold tracking-[0.15em] uppercase mb-4 text-foreground">Get Started</h4>
              <p className="text-sm mb-4" style={{ color: 'hsl(var(--body))' }}>Ready to build something exceptional?</p>
              <Button variant="header-dark" size="default" onClick={() => setContactOpen(true)}>
                Start a Project <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Button>
            </motion.div>
          </div>

          <motion.div custom={3} variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'}
            className="mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
            style={{ borderTop: '1px solid hsl(var(--border) / 0.4)' }}>
            <p className="text-xs" style={{ color: 'hsl(var(--caption))' }}>&copy; {new Date().getFullYear()} ACE inovations. All rights reserved.</p>
            <p className="text-xs" style={{ color: 'hsl(var(--caption))' }}>Powered by Next.js + Payload CMS</p>
          </motion.div>
        </div>
      </footer>
      <ContactModal open={contactOpen} onOpenChange={setContactOpen} />
    </>
  )
}
