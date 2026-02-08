'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Logo } from '@/components/brand/Logo'
import { Button } from '@/components/ui/Button'
import { ContactModal } from '@/components/home/ContactModal'
import { ArrowRight, Menu, X, FlaskConical, Layers, Users, Info } from 'lucide-react'

const navItems = [
  { label: 'ACE Labs', href: '#engine', icon: FlaskConical },
  { label: 'ACE Stacks', href: '/stacks', isRoute: true, icon: Layers },
  { label: 'ACE Squads', href: '#squads', icon: Users },
  { label: 'About', href: '#about', icon: Info },
]

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [pathname])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-xs' : ''}`}
        style={{
          background: scrolled ? 'hsl(var(--background) / 0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(24px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'none',
          borderBottom: scrolled ? '1px solid hsl(var(--border) / 0.5)' : 'none',
        }}
        data-testid="navbar"
      >
        <div className="section-container flex items-center justify-between h-16">
          <Logo />

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map(item => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium transition-colors duration-200 hover:text-primary"
                style={{ color: (item.isRoute && pathname === item.href) ? 'hsl(var(--primary))' : 'hsl(var(--caption))' }}
                data-testid={`nav-${item.label.toLowerCase().replace(/\s/g, '-')}`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="header-dark" size="default" onClick={() => setContactOpen(true)} data-testid="nav-cta-btn">
              Start a Project <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Button>
          </div>

          <button className="md:hidden w-10 h-10 flex items-center justify-center text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)} data-testid="mobile-menu-toggle">
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden border-t px-6 py-6 space-y-4 relative z-[60]"
            style={{ background: 'hsl(var(--background))', backdropFilter: 'blur(20px)', borderColor: 'hsl(var(--border) / 0.5)' }}>
            {navItems.map(item => (
              <Link key={item.label} href={item.href}
                className="flex items-center gap-3 text-sm font-medium py-2"
                style={{ color: 'hsl(var(--body))' }}
                onClick={() => setMobileOpen(false)}>
                <item.icon className="w-4 h-4" style={{ color: 'hsl(var(--caption))' }} />
                {item.label}
              </Link>
            ))}
            <Button variant="header-dark" size="lg" className="w-full mt-4" onClick={() => { setMobileOpen(false); setContactOpen(true) }}>
              Start a Project <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        )}
      </nav>

      <ContactModal open={contactOpen} onOpenChange={setContactOpen} />
    </>
  )
}
