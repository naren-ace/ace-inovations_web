'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Logo } from '@/components/brand/Logo'
import { Button } from '@/components/ui/Button'
import { ContactModal } from '@/components/home/ContactModal'
import { ArrowRight, Menu, X, ChevronDown, Moon, Sun } from 'lucide-react'

const navItems = [
  { label: 'ACE Labs', href: '/labs' },
  { label: 'ACE Stacks', href: '/stacks' },
  { label: 'ACE Squads', href: '/squads' },
  { label: 'About', href: '/about' },
]

const serviceItems = [
  { label: 'Platform Engineering', href: '/squads' },
  { label: 'Growth Engineering', href: '/squads' },
  { label: 'ACE Squads', href: '/squads' },
  { label: 'Strategic Blueprinting', href: '/squads' },
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

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
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
          <Link href="/">
            <Logo />
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
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
                  className="absolute top-full left-0 mt-2 w-56 rounded-xl py-2 shadow-lg"
                  style={{
                    background: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border) / 0.6)',
                    backdropFilter: 'blur(20px)',
                  }}
                  data-testid="services-dropdown"
                >
                  {serviceItems.map(item => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block px-4 py-2.5 text-sm transition-colors duration-150 hover:bg-primary/5 hover:text-primary"
                      style={{ color: 'hsl(var(--body))' }}
                      onClick={() => setServicesOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
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

        {mobileOpen && (
          <div className="md:hidden border-t px-6 py-6 space-y-4 relative z-[60]"
            style={{ background: 'hsl(var(--background))', backdropFilter: 'blur(20px)', borderColor: 'hsl(var(--border) / 0.5)' }}>
            <div className="space-y-1">
              <p className="text-xs font-semibold tracking-wider uppercase mb-2" style={{ color: 'hsl(var(--caption))' }}>Services</p>
              {serviceItems.map(item => (
                <Link key={item.label} href={item.href}
                  className="block text-sm font-medium py-1.5 pl-3"
                  style={{ color: 'hsl(var(--body))' }}
                  onClick={() => setMobileOpen(false)}>
                  {item.label}
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
