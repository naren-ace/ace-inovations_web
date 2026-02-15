'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { ContactModal } from '@/components/home/ContactModal'
import { ArrowRight } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: [0.4, 0, 0.2, 1] } }),
}

export function CustomSection({ cms }: { cms?: any }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [contactOpen, setContactOpen] = useState(false)

  const label = cms?.label || ''
  const heading = cms?.heading || ''
  const highlight = cms?.headingHighlight || ''
  const body = cms?.body || ''
  const btnText = cms?.ctaButtonText || ''
  const btnLink = cms?.ctaButtonLink || ''
  const style = cms?.style || 'default'
  const image = cms?.image

  const isCentered = style === 'centered'
  const bgStyle = style === 'subtle' ? { background: 'hsl(var(--surface-subtle))' } : {}

  const handleBtnClick = () => {
    if (btnLink?.startsWith('#')) {
      const el = document.querySelector(btnLink)
      el?.scrollIntoView({ behavior: 'smooth' })
    } else if (btnLink) {
      window.open(btnLink, '_blank')
    } else {
      setContactOpen(true)
    }
  }

  const renderHeading = () => {
    if (!highlight || !heading.includes(highlight)) return heading
    const parts = heading.split(highlight)
    return <>{parts[0]}<span className="gradient-text">{highlight}</span>{parts[1] || ''}</>
  }

  return (
    <>
      <section ref={ref} className="relative py-24 lg:py-32 overflow-hidden" style={bgStyle} data-testid="custom-section">
        {style === 'subtle' && (
          <div className="absolute left-0 right-0 top-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, hsl(var(--border)), transparent)' }} />
        )}
        <div className="section-container relative z-10">
          <div className={isCentered ? 'max-w-2xl mx-auto text-center' : 'grid lg:grid-cols-2 gap-12 items-center'}>
            <div>
              {label && (
                <motion.p custom={0} variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'}
                  className="text-xs font-medium tracking-[0.2em] uppercase mb-4" style={{ color: 'hsl(var(--primary))' }}>{label}</motion.p>
              )}
              {heading && (
                <motion.h2 custom={1} variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'}
                  className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tighter text-foreground leading-tight">
                  {renderHeading()}
                </motion.h2>
              )}
              {body && (
                <motion.div custom={2} variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'}
                  className="mt-5 text-base md:text-lg leading-relaxed" style={{ color: 'hsl(var(--body))' }}>
                  {body.split('\n\n').map((p: string, i: number) => (
                    <p key={i} className={i > 0 ? 'mt-4' : ''}>{p}</p>
                  ))}
                </motion.div>
              )}
              {btnText && (
                <motion.div custom={3} variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} className="mt-8">
                  <Button variant="premium" size="lg" onClick={handleBtnClick} className="btn-glow">
                    {btnText} <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </motion.div>
              )}
            </div>
            {image?.url && !isCentered && (
              <motion.div custom={3} variants={fadeUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} className="flex justify-center">
                <Image src={image.url} alt={image.alt || heading} width={600} height={400} className="rounded-xl max-w-full h-auto shadow-lg" />
              </motion.div>
            )}
          </div>
        </div>
      </section>
      <ContactModal open={contactOpen} onOpenChange={setContactOpen} />
    </>
  )
}
