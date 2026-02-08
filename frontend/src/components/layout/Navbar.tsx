'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Logo } from '@/components/brand/Logo'
import { Button } from '@/components/ui/Button'
import { ContactModal } from '@/components/home/ContactModal'
import { ArrowRight, Menu, X, ChevronDown, Moon, Sun, Globe, TrendingUp, Users, Map } from 'lucide-react'

const navItems = [
  { label: 'ACE Labs', href: '/labs' },
  { label: 'ACE Stacks', href: '/stacks' },
  { label: 'ACE Squads', href: '/squads' },
  { label: 'About', href: '/about' },
]

const serviceItems = [
  {
    icon: Globe,
    label: 'Platform Engineering',
    description: 'Custom SaaS & Marketplace development',
    href: '/squads',
    color: 'hsl(216 100% 50%)',
    bg: 'hsl(216 100% 50% / 0.08)',
  },
  {
    icon: TrendingUp,
    label: 'Growth Engineering',
    description: 'Technical SEO & funnel instrumentation',
    href: '/squads',
    color: 'hsl(259 72% 58%)',
    bg: 'hsl(259 72% 58% / 0.08)',
  },
  {
    icon: Users,
    label: 'ACE Squads',
    description: 'High-velocity integrated units',
    href: '/squads',
    color: 'hsl(216 100% 50%)',
    bg: 'hsl(216 100% 50% / 0.08)',
  },
  {
    icon: Map,
    label: 'Strategic Blueprinting',
    description: 'Technical audits & product roadmaps',
    href: '/squads',
    color: 'hsl(259 72% 58%)',
    bg: 'hsl(259 72% 58% / 0.08)',
  },
]

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const pathname = usePathname()
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMobileOpen(false); setServicesOpen(false) }, [pathname])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    const saved = localStorage.getItem('ace-dark-mode')
    if (saved === 'true') {
      setDarkMode(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    const next = !darkMode
    setDarkMode(next)
    if (next) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('ace-dark-mode', 'true')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('ace-dark-mode', 'false')
    }
  }

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

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {/* Services mega-menu */}
            <div ref={dropdownRef} className="relative">
              <button
                className="flex items-center gap-1 text-sm font-medium transition-colors duration-200 hover:text-primary"
                style={{ color: servicesOpen ? 'hsl(var(--primary))' : 'hsl(var(--caption))' }}
                onClick={() => setServicesOpen(!servicesOpen)}
                data-testid="nav-services"
              >
                Services
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {servicesOpen && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 rounded-2xl overflow-hidden"
                  style={{
                    width: '440px',
                    background: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border) / 0.5)',
                    boxShadow: '0 20px 60px -15px hsl(0 0% 0% / 0.15), 0 8px 20px -8px hsl(0 0% 0% / 0.1)',
                  }}
                  data-testid="services-dropdown"
                >
                  {/* 2x2 Grid */}
                  <div className="grid grid-cols-2 gap-0 p-3">
                    {serviceItems.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="flex items-start gap-3 p-3.5 rounded-xl transition-colors duration-150 hover:bg-primary/5"
                        onClick={() => setServicesOpen(false)}
                        data-testid={`service-${item.label.toLowerCase().replace(/\s/g, '-')}`}
                      >
                        <div
                          className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                          style={{ background: item.bg }}
                        >
                          <item.icon className="w-4 h-4" style={{ color: item.color }} />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-foreground leading-tight">{item.label}</p>
                          <p className="text-xs mt-1 leading-snug" style={{ color: 'hsl(var(--caption))' }}>{item.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Bottom bar */}
                  <div
                    className="flex items-center justify-between px-5 py-3 mt-0"
                    style={{ borderTop: '1px solid hsl(var(--border) / 0.4)' }}
                  >
                    <span className="text-xs" style={{ color: 'hsl(var(--caption))' }}>Need a custom solution?</span>
                    <button
                      className="text-xs font-medium flex items-center gap-1 transition-colors hover:opacity-80"
                      style={{ color: 'hsl(var(--primary))' }}
                      onClick={() => { setServicesOpen(false); setContactOpen(true) }}
                      data-testid="services-talk-to-us"
                    >
                      Talk to us <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {navItems.map(item => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium transition-colors duration-200 hover:text-primary"
                style={{ color: pathname === item.href ? 'hsl(var(--primary))' : 'hsl(var(--caption))' }}
                data-testid={`nav-${item.label.toLowerCase().replace(/\s/g, '-')}`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleDarkMode}
              className="w-9 h-9 flex items-center justify-center rounded-lg transition-colors duration-200 hover:bg-primary/5"
              style={{ color: 'hsl(var(--caption))' }}
              data-testid="dark-mode-toggle"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-4.5 h-4.5" /> : <Moon className="w-4.5 h-4.5" />}
            </button>
            <Button variant="header-dark" size="default" onClick={() => setContactOpen(true)} data-testid="nav-cta-btn">
              Start a Project
            </Button>
          </div>

          <button className="md:hidden w-10 h-10 flex items-center justify-center text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)} data-testid="mobile-menu-toggle">
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t px-6 py-6 space-y-4 relative z-[60]"
            style={{ background: 'hsl(var(--background))', backdropFilter: 'blur(20px)', borderColor: 'hsl(var(--border) / 0.5)' }}>
            <div className="space-y-1">
              <p className="text-xs font-semibold tracking-wider uppercase mb-3" style={{ color: 'hsl(var(--caption))' }}>Services</p>
              {serviceItems.map(item => (
                <Link key={item.label} href={item.href}
                  className="flex items-center gap-3 py-2 pl-1"
                  onClick={() => setMobileOpen(false)}>
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: item.bg }}>
                    <item.icon className="w-3.5 h-3.5" style={{ color: item.color }} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{item.label}</p>
                    <p className="text-[11px]" style={{ color: 'hsl(var(--caption))' }}>{item.description}</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="h-px" style={{ background: 'hsl(var(--border) / 0.5)' }} />
            {navItems.map(item => (
              <Link key={item.label} href={item.href}
                className="block text-sm font-medium py-2"
                style={{ color: pathname === item.href ? 'hsl(var(--primary))' : 'hsl(var(--body))' }}
                onClick={() => setMobileOpen(false)}>
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
