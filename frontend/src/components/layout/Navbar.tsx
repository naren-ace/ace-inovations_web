'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Logo } from '@/components/brand/Logo'
import { Button } from '@/components/ui/Button'
import { ContactModal } from '@/components/home/ContactModal'
import { ArrowRight, Menu, X, ChevronDown, Moon, Sun, Globe, TrendingUp, Cpu, Code2, Settings, Smartphone } from 'lucide-react'

const iconMap: Record<string, any> = {
  globe: Globe,
  smartphone: Smartphone,
  cpu: Cpu,
  'trending-up': TrendingUp,
  code: Code2,
  settings: Settings,
}

const colorMap: Record<string, { color: string; bg: string }> = {
  blue: { color: 'hsl(216 100% 50%)', bg: 'hsl(216 100% 50% / 0.08)' },
  purple: { color: 'hsl(259 72% 58%)', bg: 'hsl(259 72% 58% / 0.08)' },
}

const navItems = [
  { label: 'ACE Labs', href: '/labs' },
  { label: 'Insights', href: '/stacks' },
  { label: 'About', href: '/about' },
]

interface ServiceItem {
  title: string
  slug: string
  shortDescription: string
  icon: string
  colorTheme: string
}

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [services, setServices] = useState<ServiceItem[]>([])
  const pathname = usePathname()
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    fetch('/api/services?sort=order&limit=10')
      .then(res => res.json())
      .then(data => {
        if (data.docs?.length) setServices(data.docs)
      })
      .catch(() => {})
  }, [])

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
        className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-300 ${scrolled ? 'shadow-xs' : ''}`}
        style={{
          background: scrolled ? 'hsl(var(--background) / 0.7)' : 'transparent',
          backdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'none',
          borderBottom: scrolled ? '1px solid hsl(var(--border) / 0.3)' : 'none',
        }}
        data-testid="navbar"
      >
        <div className="section-container flex items-center justify-between h-16">
          <Logo />

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {/* Home link - first */}
            <Link
              href="/"
              className="text-sm font-medium transition-colors duration-200 hover:text-primary"
              style={{ color: pathname === '/' ? 'hsl(var(--primary))' : 'hsl(var(--caption))' }}
              data-testid="nav-home"
            >
              Home
            </Link>

            {/* Services dropdown */}
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
                  className="fixed inset-0 z-[998]"
                  onClick={() => setServicesOpen(false)}
                  style={{ background: 'transparent' }}
                />
              )}

              {servicesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 rounded-xl overflow-hidden z-[999]"
                  style={{
                    width: '540px',
                    background: 'hsl(var(--card) / 0.97)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    border: '1px solid hsl(var(--border) / 0.6)',
                    boxShadow: '0 12px 40px -8px hsl(0 0% 0% / 0.15), 0 4px 12px -4px hsl(0 0% 0% / 0.08)',
                  }}
                  data-testid="services-dropdown"
                >
                  <div className="grid grid-cols-2 gap-px p-1.5">
                    {services.map((svc) => {
                      const Icon = iconMap[svc.icon] || Globe
                      const colors = colorMap[svc.colorTheme] || colorMap.blue
                      return (
                        <Link
                          key={svc.slug}
                          href={`/services/${svc.slug}`}
                          className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg transition-colors duration-150 hover:bg-primary/5"
                          onClick={() => setServicesOpen(false)}
                          data-testid={`service-${svc.slug}`}
                        >
                          <div className="w-7 h-7 rounded-md flex items-center justify-center shrink-0" style={{ background: colors.bg }}>
                            <Icon className="w-3.5 h-3.5" style={{ color: colors.color }} />
                          </div>
                          <div className="min-w-0">
                            <p className="text-[13px] font-semibold text-foreground leading-tight truncate">{svc.title}</p>
                            <p className="text-[11px] leading-tight truncate" style={{ color: 'hsl(var(--caption))' }}>{svc.shortDescription}</p>
                          </div>
                        </Link>
                      )
                    })}
                  </div>

                  <div className="flex items-center justify-between px-4 py-2" style={{ borderTop: '1px solid hsl(var(--border) / 0.3)' }}>
                    <Link
                      href="/services"
                      className="text-[11px] font-semibold flex items-center gap-1 transition-colors hover:opacity-80"
                      style={{ color: 'hsl(var(--primary))' }}
                      onClick={() => setServicesOpen(false)}
                      data-testid="services-view-all"
                    >
                      View All Services <ArrowRight className="w-3 h-3" />
                    </Link>
                    <button
                      className="text-[11px] font-semibold flex items-center gap-1 transition-colors hover:opacity-80"
                      style={{ color: 'hsl(var(--caption))' }}
                      onClick={() => { setServicesOpen(false); setContactOpen(true) }}
                      data-testid="services-talk-to-us"
                    >
                      Custom solution? Talk to us
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
              {services.map(svc => {
                const Icon = iconMap[svc.icon] || Globe
                const colors = colorMap[svc.colorTheme] || colorMap.blue
                return (
                  <Link key={svc.slug} href={`/services/${svc.slug}`}
                    className="flex items-center gap-3 py-2 pl-1"
                    onClick={() => setMobileOpen(false)}>
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: colors.bg }}>
                      <Icon className="w-3.5 h-3.5" style={{ color: colors.color }} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{svc.title}</p>
                      <p className="text-[11px]" style={{ color: 'hsl(var(--caption))' }}>{svc.shortDescription}</p>
                    </div>
                  </Link>
                )
              })}
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
