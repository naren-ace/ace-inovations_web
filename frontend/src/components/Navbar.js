import { useState, useRef, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { useTheme } from "@/hooks/use-theme";
import {
  Menu, X, Globe, TrendingUp, Users, Map,
  ChevronDown, FlaskConical, BookOpen, Info, Layers,
  Sun, Moon
} from "lucide-react";
import { ContactModal } from "@/components/ContactModal";

const services = [
  {
    icon: Globe,
    title: "Platform Engineering",
    description: "Custom SaaS & Marketplace development",
    href: "/#services",
    color: "primary",
  },
  {
    icon: TrendingUp,
    title: "Growth Engineering",
    description: "Technical SEO & funnel instrumentation",
    href: "/growth-engineering",
    color: "accent",
    isRoute: true,
  },
  {
    icon: Users,
    title: "ACE Squads",
    description: "High-velocity integrated units",
    href: "/squads",
    color: "primary",
    isRoute: true,
  },
  {
    icon: Map,
    title: "Strategic Blueprinting",
    description: "Technical audits & product roadmaps",
    href: "/#services",
    color: "accent",
  },
];

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const megaMenuTimeoutRef = useRef(null);
  const location = useLocation();

  const handleMegaEnter = () => {
    clearTimeout(megaMenuTimeoutRef.current);
    setMegaMenuOpen(true);
  };

  const handleMegaLeave = () => {
    megaMenuTimeoutRef.current = setTimeout(() => setMegaMenuOpen(false), 200);
  };

  useEffect(() => {
    return () => clearTimeout(megaMenuTimeoutRef.current);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const navItems = [
    { label: "ACE Labs", href: "/labs", isRoute: true, icon: FlaskConical },
    { label: "ACE Stacks", href: "/stacks", isRoute: true, icon: Layers },
    { label: "ACE Squads", href: "/squads", isRoute: true, icon: Users },
    { label: "About", href: "/#about", icon: Info },
  ];

  const renderNavLink = (item) => {
    if (item.isRoute) {
      return (
        <Link
          key={item.label}
          to={item.href}
          className="px-4 py-2 text-sm font-medium text-muted-foreground rounded-md hover:text-foreground hover:bg-secondary/60 transition-colors duration-200"
        >
          {item.label}
        </Link>
      );
    }
    return (
      <a
        key={item.label}
        href={item.href}
        className="px-4 py-2 text-sm font-medium text-muted-foreground rounded-md hover:text-foreground hover:bg-secondary/60 transition-colors duration-200"
      >
        {item.label}
      </a>
    );
  };

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-border/30"
        style={{
          background: 'hsl(var(--background) / 0.82)',
          backdropFilter: 'blur(16px) saturate(180%)',
          WebkitBackdropFilter: 'blur(16px) saturate(180%)',
        }}
      >
        <div className="section-container">
          <nav className="flex items-center justify-between h-16 lg:h-[4.25rem]">
            <Logo />

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-0.5">
              {/* Services Mega Menu */}
              <div
                className="relative"
                onMouseEnter={handleMegaEnter}
                onMouseLeave={handleMegaLeave}
              >
                <button className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-muted-foreground rounded-md hover:text-foreground hover:bg-secondary/60 transition-colors duration-200">
                  Services
                  <ChevronDown
                    className="w-3.5 h-3.5 transition-transform duration-200"
                    style={{ transform: megaMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  />
                </button>

                <AnimatePresence>
                  {megaMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[560px] rounded-xl overflow-hidden"
                      style={{
                        background: 'hsl(var(--card) / 0.95)',
                        backdropFilter: 'blur(20px)',
                        WebkitBackdropFilter: 'blur(20px)',
                        border: '1px solid hsl(var(--border) / 0.6)',
                        boxShadow: '0 20px 60px -12px hsl(222 47% 11% / 0.12), 0 0 0 1px hsl(var(--border) / 0.2)',
                      }}
                      onMouseEnter={handleMegaEnter}
                      onMouseLeave={handleMegaLeave}
                    >
                      <div className="p-2">
                        <div className="grid grid-cols-2 gap-1">
                          {services.map((service) => {
                            const Wrapper = service.isRoute ? Link : 'a';
                            const linkProps = service.isRoute ? { to: service.href } : { href: service.href };
                            return (
                              <Wrapper
                                key={service.title}
                                {...linkProps}
                                className="flex items-start gap-3 p-3.5 rounded-lg group hover:bg-secondary/50 transition-colors duration-200"
                                onClick={() => setMegaMenuOpen(false)}
                              >
                                <div
                                  className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                                  style={{
                                    background: service.color === "primary"
                                      ? 'hsl(216 100% 50% / 0.08)'
                                      : 'hsl(259 72% 58% / 0.08)',
                                  }}
                                >
                                  <service.icon
                                    className="w-4 h-4"
                                    style={{
                                      color: service.color === "primary"
                                        ? 'hsl(var(--primary))'
                                        : 'hsl(var(--accent))',
                                    }}
                                  />
                                </div>
                                <div>
                                  <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                                    {service.title}
                                  </p>
                                  <p className="text-xs mt-0.5" style={{ color: 'hsl(var(--caption))' }}>
                                    {service.description}
                                  </p>
                                </div>
                              </Wrapper>
                            );
                          })}
                        </div>
                      </div>
                      <div
                        className="px-5 py-3 flex items-center justify-between"
                        style={{ borderTop: '1px solid hsl(var(--border) / 0.5)', background: 'hsl(var(--secondary) / 0.4)' }}
                      >
                        <p className="text-xs" style={{ color: 'hsl(var(--caption))' }}>Need a custom solution?</p>
                        <button
                          onClick={() => { setContactOpen(true); setMegaMenuOpen(false); }}
                          className="text-xs font-medium transition-colors duration-200"
                          style={{ color: 'hsl(var(--primary))' }}
                        >
                          Talk to us &rarr;
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navItems.map(renderNavLink)}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-colors duration-200"
                aria-label="Toggle theme"
                data-testid="theme-toggle-btn"
              >
                {theme === "dark" ? <Sun className="w-4.5 h-4.5" /> : <Moon className="w-4.5 h-4.5" />}
              </button>
              <Button variant="header-dark" size="default" onClick={() => setContactOpen(true)} data-testid="nav-start-project-btn">
                Start a Project
              </Button>
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-colors duration-200"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </nav>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
              className="lg:hidden border-t border-border/40 overflow-hidden"
              style={{ background: 'hsl(var(--background) / 0.97)', backdropFilter: 'blur(16px)' }}
            >
              <div className="section-container py-4 flex flex-col gap-0.5">
                <p className="px-4 pt-2 pb-1 text-[10px] font-semibold tracking-[0.15em] uppercase" style={{ color: 'hsl(var(--caption))' }}>Services</p>
                {services.map((service) => {
                  const Wrapper = service.isRoute ? Link : 'a';
                  const linkProps = service.isRoute ? { to: service.href } : { href: service.href };
                  return (
                    <Wrapper
                      key={service.title}
                      {...linkProps}
                      className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-muted-foreground rounded-md hover:text-foreground hover:bg-secondary/60 transition-colors duration-200"
                      onClick={() => setMobileOpen(false)}
                    >
                      <service.icon className="w-4 h-4" style={{ color: service.color === 'primary' ? 'hsl(var(--primary))' : 'hsl(var(--accent))' }} />
                      {service.title}
                    </Wrapper>
                  );
                })}
                <div className="my-2 border-t border-border/40" />
                {navItems.map((item) => {
                  const Wrapper = item.isRoute ? Link : 'a';
                  const linkProps = item.isRoute ? { to: item.href } : { href: item.href };
                  return (
                    <Wrapper
                      key={item.label}
                      {...linkProps}
                      className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-muted-foreground rounded-md hover:text-foreground hover:bg-secondary/60 transition-colors duration-200"
                      onClick={() => setMobileOpen(false)}
                    >
                      <item.icon className="w-4 h-4" />
                      {item.label}
                    </Wrapper>
                  );
                })}
                <div className="pt-3 mt-2 border-t border-border/40 flex items-center gap-3">
                  <Button variant="header-dark" size="default" className="flex-1" onClick={() => { setContactOpen(true); setMobileOpen(false); }} data-testid="nav-mobile-start-project-btn">
                    Start a Project
                  </Button>
                  <button
                    onClick={toggleTheme}
                    className="p-2.5 rounded-lg border border-border/60 text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-colors duration-200"
                    aria-label="Toggle theme"
                    data-testid="theme-toggle-mobile-btn"
                  >
                    {theme === "dark" ? <Sun className="w-4.5 h-4.5" /> : <Moon className="w-4.5 h-4.5" />}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <ContactModal open={contactOpen} onOpenChange={setContactOpen} />
    </>
  );
};
