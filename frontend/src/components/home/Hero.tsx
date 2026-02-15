'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Button } from '@/components/ui/Button'
import { FloatingCodeCards } from '@/components/effects/FloatingCodeCards'
import { TypewriterText } from '@/components/effects/TypewriterText'
import { NeuralLab } from '@/components/effects/NeuralLab'
import { KeywordMarquee } from '@/components/home/KeywordMarquee'
import { ContactModal } from '@/components/home/ContactModal'
import { ArrowRight, ChevronRight } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: 0.15 + i * 0.1, duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  }),
}

export const HeroSection = ({ cms }: { cms?: any }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [contactOpen, setContactOpen] = useState(false)

  const badge = cms?.badgeText || 'INNOVATE. ELEVATE. ACE IT.'
  const ctaText = cms?.ctaButtonText || 'Start a Project'
  const secText = cms?.secondaryButtonText || 'Explore the ACE Engine'
  const subtitle = cms?.narrative || 'ACE inovations is a modern engineering and growth studio. We combine world-class software development with agentic AI workflows to deliver end-to-end digital solutions that scale.'

  const headlineParts = [
    { text: cms?.headlinePart1 || 'Engineering the ' },
    { text: cms?.headlineHighlight || 'Next Generation', highlight: true },
    { text: ' ' + (cms?.headlinePart2 || 'of Digital Platforms.') },
  ]

  const scrollToEngine = () => {
    const el = document.getElementById('engine')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden pt-16" data-testid="hero-section">
        {/* Background effects */}
        <div className="absolute inset-0" style={{ zIndex: 0 }}>
          <NeuralLab />
        </div>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            zIndex: 1,
            background: 'radial-gradient(ellipse 80% 60% at 50% 40%, hsl(216 100% 50% / 0.04), transparent 60%), radial-gradient(ellipse 50% 50% at 80% 80%, hsl(259 72% 58% / 0.03), transparent 50%)',
          }}
        />

        {/* Floating code cards — positioned absolutely behind the content */}
        <div className="absolute inset-0 hidden lg:block" style={{ zIndex: 5 }}>
          <div className="relative w-full h-full max-w-7xl mx-auto">
            {/* Primary card — top right */}
            <motion.div
              className="absolute"
              style={{ top: '12%', right: '2%', width: '340px' }}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
            >
              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 4, ease: 'easeInOut', repeat: Infinity }}
              >
                <div
                  className="rounded-2xl overflow-hidden"
                  style={{
                    background: 'hsl(234 30% 8% / 0.88)',
                    backdropFilter: 'blur(24px)',
                    WebkitBackdropFilter: 'blur(24px)',
                    border: '1px solid hsl(216 100% 55% / 0.25)',
                    boxShadow: '0 0 40px hsl(216 100% 55% / 0.12), 0 20px 60px -15px hsl(0 0% 0% / 0.5), inset 0 1px 0 hsl(0 0% 100% / 0.05)',
                    transform: 'perspective(1200px) rotateY(-8deg) rotateX(4deg)',
                  }}
                  data-testid="code-card-primary"
                >
                  <div className="flex items-center gap-1.5 px-4 py-2.5" style={{ borderBottom: '1px solid hsl(0 0% 100% / 0.06)' }}>
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#ff5f57' }} />
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#febc2e' }} />
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#28c840' }} />
                    <span className="ml-3 text-[10px] font-mono" style={{ color: 'hsl(215 16% 45%)' }}>deploy.ts</span>
                  </div>
                  <div className="px-4 py-3">
                    <pre className="text-[11px] sm:text-xs leading-[1.7] font-mono whitespace-pre m-0">
                      <span style={{ color: 'hsl(216 100% 65%)' }}>const</span>
                      <span style={{ color: 'hsl(210 20% 90%)' }}> platform</span>
                      <span style={{ color: 'hsl(215 16% 55%)' }}> = </span>
                      <span style={{ color: 'hsl(216 100% 65%)' }}>await</span>
                      <span style={{ color: 'hsl(45 100% 65%)' }}> deploy</span>
                      <span style={{ color: 'hsl(215 16% 55%)' }}>{'({'}</span>{'\n'}
                      <span style={{ color: 'hsl(270 80% 75%)' }}>{'  name'}</span>
                      <span style={{ color: 'hsl(215 16% 55%)' }}>{': '}</span>
                      <span style={{ color: 'hsl(142 60% 55%)' }}>{'"ace-marketplace"'}</span>
                      <span style={{ color: 'hsl(215 16% 55%)' }}>,</span>{'\n'}
                      <span style={{ color: 'hsl(270 80% 75%)' }}>{'  engine'}</span>
                      <span style={{ color: 'hsl(215 16% 55%)' }}>{': '}</span>
                      <span style={{ color: 'hsl(142 60% 55%)' }}>{'"ai-native"'}</span>
                      <span style={{ color: 'hsl(215 16% 55%)' }}>,</span>{'\n'}
                      <span style={{ color: 'hsl(270 80% 75%)' }}>{'  scale'}</span>
                      <span style={{ color: 'hsl(215 16% 55%)' }}>{': '}</span>
                      <span style={{ color: 'hsl(45 100% 65%)' }}>Infinity</span>
                      <span style={{ color: 'hsl(215 16% 55%)' }}>,</span>{'\n'}
                      <span style={{ color: 'hsl(215 16% 55%)' }}>{'});'}</span>
                    </pre>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Secondary card — bottom right, parallax speed */}
            <motion.div
              className="absolute"
              style={{ bottom: '18%', right: '8%', width: '260px' }}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.9, ease: [0.4, 0, 0.2, 1] }}
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 5.5, ease: 'easeInOut', repeat: Infinity }}
              >
                <div
                  className="rounded-2xl overflow-hidden"
                  style={{
                    background: 'hsl(234 30% 8% / 0.72)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: '1px solid hsl(270 80% 65% / 0.2)',
                    boxShadow: '0 0 30px hsl(270 80% 65% / 0.08), 0 15px 40px -10px hsl(0 0% 0% / 0.4), inset 0 1px 0 hsl(0 0% 100% / 0.04)',
                    transform: 'perspective(1200px) rotateY(5deg) rotateX(-3deg)',
                  }}
                  data-testid="code-card-secondary"
                >
                  <div className="flex items-center gap-1.5 px-3 py-2" style={{ borderBottom: '1px solid hsl(0 0% 100% / 0.05)' }}>
                    <div className="w-2 h-2 rounded-full" style={{ background: '#ff5f57' }} />
                    <div className="w-2 h-2 rounded-full" style={{ background: '#febc2e' }} />
                    <div className="w-2 h-2 rounded-full" style={{ background: '#28c840' }} />
                    <span className="ml-2 text-[9px] font-mono" style={{ color: 'hsl(215 16% 40%)' }}>useAI.ts</span>
                  </div>
                  <div className="px-3 py-2.5">
                    <pre className="text-[10px] sm:text-[11px] leading-[1.7] font-mono whitespace-pre m-0">
                      <span style={{ color: 'hsl(216 100% 65%)' }}>export</span>
                      <span style={{ color: 'hsl(216 100% 65%)' }}> function</span>
                      <span style={{ color: 'hsl(45 100% 65%)' }}> useAI</span>
                      <span style={{ color: 'hsl(215 16% 55%)' }}>{'() {'}</span>{'\n'}
                      <span style={{ color: 'hsl(216 100% 65%)' }}>{'  return'}</span>
                      <span style={{ color: 'hsl(45 100% 65%)' }}> predict</span>
                      <span style={{ color: 'hsl(215 16% 55%)' }}>{'({'}</span>{'\n'}
                      <span style={{ color: 'hsl(270 80% 75%)' }}>{'    model'}</span>
                      <span style={{ color: 'hsl(215 16% 55%)' }}>{': '}</span>
                      <span style={{ color: 'hsl(142 60% 55%)' }}>{'"gpt-5"'}</span>{'\n'}
                      <span style={{ color: 'hsl(215 16% 55%)' }}>{'  })'}</span>{'\n'}
                      <span style={{ color: 'hsl(215 16% 55%)' }}>{'}'}</span>
                    </pre>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Ambient glow orbs */}
            <div className="absolute pointer-events-none" style={{ top: '25%', right: '15%', width: '200px', height: '200px', background: 'radial-gradient(circle, hsl(216 100% 55% / 0.06), transparent 70%)', filter: 'blur(50px)' }} />
            <div className="absolute pointer-events-none" style={{ bottom: '30%', right: '25%', width: '150px', height: '150px', background: 'radial-gradient(circle, hsl(270 80% 65% / 0.05), transparent 70%)', filter: 'blur(40px)' }} />
          </div>
        </div>

        {/* Main content — centered */}
        <div className="section-container relative w-full" style={{ zIndex: 10 }}>
          <div className="flex flex-col items-center text-center min-h-[calc(100vh-4rem)] justify-center py-16">
            {/* Badge */}
            <motion.div custom={0} variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} className="mb-8">
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-wide uppercase"
                style={{ background: 'hsl(216 100% 50% / 0.06)', color: 'hsl(var(--primary))', border: '1px solid hsl(216 100% 50% / 0.12)' }}
                data-testid="hero-badge"
              >
                <span className="w-1.5 h-1.5 rounded-full animate-status-pulse" style={{ background: 'hsl(142 76% 36%)' }} />
                {badge}
              </span>
            </motion.div>

            {/* Typewriter headline — centered */}
            <motion.div custom={1} variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} className="max-w-4xl">
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.08] text-foreground"
                style={{ letterSpacing: '-0.04em' }}
                data-testid="hero-headline"
              >
                <TypewriterText parts={headlineParts} speed={40} />
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p custom={2} variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'}
              className="mt-6 text-base md:text-lg leading-relaxed max-w-2xl"
              style={{ color: 'hsl(var(--body))' }}
              data-testid="hero-subheadline"
            >
              {subtitle}
            </motion.p>

            {/* CTAs */}
            <motion.div custom={3} variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'}
              className="mt-10 flex flex-wrap gap-4 justify-center"
            >
              <Button variant="premium" size="lg" onClick={() => setContactOpen(true)} className="btn-glow" data-testid="hero-start-project-btn">
                {ctaText}
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
              <Button variant="ghost-gradient" size="lg" onClick={scrollToEngine} data-testid="hero-explore-btn">
                {secText}
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </motion.div>

            {/* Marquee */}
            <motion.div custom={4} variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} className="mt-14 w-full">
              <KeywordMarquee />
            </motion.div>
          </div>
        </div>
      </section>

      <ContactModal open={contactOpen} onOpenChange={setContactOpen} />
    </>
  )
}
