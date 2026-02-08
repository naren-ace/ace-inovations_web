'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BrandWordmark } from '@/components/brand/BrandWordmark'

interface LoadingAnimationProps {
  onComplete?: () => void
}

export const LoadingAnimation: React.FC<LoadingAnimationProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<'rise' | 'ignite' | 'ripple' | 'shrink' | 'done'>('rise')

  const handleComplete = useCallback(() => {
    onComplete?.()
  }, [onComplete])

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase('ignite'), 1000),
      setTimeout(() => setPhase('ripple'), 1400),
      setTimeout(() => setPhase('shrink'), 2400),
      setTimeout(() => setPhase('done'), 3200),
      setTimeout(() => handleComplete(), 3300),
    ]
    return () => timers.forEach(clearTimeout)
  }, [handleComplete])

  const showOverlay = phase !== 'done'

  return (
    <AnimatePresence>
      {showOverlay && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
          style={{ background: '#F9FAFB' }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          data-testid="loading-animation"
        >
          {/* Ripple rings */}
          <motion.div
            className="absolute rounded-full"
            style={{ width: 40, height: 40, border: '2px solid hsla(263, 69%, 50%, 0.25)' }}
            animate={{
              scale: phase === 'ripple' || phase === 'shrink' ? [1, 40] : 0,
              opacity: phase === 'ripple' || phase === 'shrink' ? [0.6, 0] : 0,
            }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          />
          <motion.div
            className="absolute rounded-full"
            style={{ width: 30, height: 30, border: '1.5px solid hsla(227, 100%, 59%, 0.15)' }}
            animate={{
              scale: phase === 'ripple' || phase === 'shrink' ? [1, 50] : 0,
              opacity: phase === 'ripple' || phase === 'shrink' ? [0.4, 0] : 0,
            }}
            transition={{ duration: 1.4, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* Logo + Wordmark container */}
          <motion.div
            className="relative flex flex-col items-center"
            animate={{
              scale: phase === 'shrink' ? 0.18 : 1,
              y: phase === 'shrink' ? '-42vh' : 0,
              x: phase === 'shrink' ? '-38vw' : 0,
              opacity: phase === 'shrink' ? 0 : 1,
            }}
            transition={{
              duration: phase === 'shrink' ? 0.7 : 0,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="overflow-visible">
              <defs>
                <linearGradient id="pillarGradL" x1="30%" y1="100%" x2="50%" y2="0%">
                  <stop offset="0%" stopColor="#2E5BFF" /><stop offset="100%" stopColor="#6D28D9" />
                </linearGradient>
                <linearGradient id="pillarGradR" x1="70%" y1="100%" x2="50%" y2="0%">
                  <stop offset="0%" stopColor="#2E5BFF" /><stop offset="100%" stopColor="#6D28D9" />
                </linearGradient>
                <linearGradient id="bevelHL" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
                  <stop offset="40%" stopColor="rgba(255,255,255,0.08)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0.25)" />
                </linearGradient>
                <filter id="nodeGlow" x="-100%" y="-100%" width="300%" height="300%">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="8" />
                </filter>
                <filter id="nodeGlowSoft" x="-60%" y="-60%" width="220%" height="220%">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
                </filter>
              </defs>

              {/* Left pillar */}
              <motion.g
                initial={{ y: 180, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], opacity: { duration: 0.3 } }}
              >
                <path d="M 12 150 L 70 14 L 82 14 L 44 150 Z" fill="url(#pillarGradL)" />
                <path d="M 12 150 L 70 14 L 76 14 L 28 150 Z" fill="url(#bevelHL)" opacity="0.65" />
              </motion.g>

              {/* Right pillar */}
              <motion.g
                initial={{ y: 180, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.05, ease: [0.22, 1, 0.36, 1], opacity: { duration: 0.3 } }}
              >
                <path d="M 148 150 L 90 14 L 78 14 L 116 150 Z" fill="url(#pillarGradR)" />
                <path d="M 148 150 L 90 14 L 84 14 L 132 150 Z" fill="url(#bevelHL)" opacity="0.65" />
              </motion.g>

              {/* Apex node */}
              <motion.g
                animate={{ opacity: phase === 'ignite' || phase === 'ripple' || phase === 'shrink' ? 1 : 0 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              >
                <circle cx="80" cy="10" r="14" fill="#6D28D9" filter="url(#nodeGlow)" opacity="0.5" />
                <circle cx="80" cy="10" r="8" fill="#2E5BFF" filter="url(#nodeGlowSoft)" opacity="0.6" />
                <circle cx="80" cy="10" r="4.5" fill="#FFFFFF" />
                <circle cx="80" cy="10" r="2" fill="#F0F4FF" opacity="0.9" />
              </motion.g>
            </svg>

            {/* Brand wordmark */}
            <motion.div
              className="mt-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: phase === 'ripple' || phase === 'shrink' ? 1 : 0,
                y: phase === 'ripple' || phase === 'shrink' ? 0 : 10,
              }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <BrandWordmark size="xl" theme="dark" />
            </motion.div>
          </motion.div>

          {/* Shatter fragments on shrink */}
          {phase === 'shrink' && (
            <>
              {[...Array(8)].map((_, i) => {
                const angle = (i / 8) * Math.PI * 2
                const dist = 600
                return (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{
                      width: 80 + Math.random() * 120,
                      height: 60 + Math.random() * 80,
                      background: '#F9FAFB',
                      border: '1px solid hsla(220, 13%, 91%, 0.5)',
                    }}
                    initial={{ x: 0, y: 0, rotate: 0, opacity: 0.8 }}
                    animate={{
                      x: Math.cos(angle) * dist,
                      y: Math.sin(angle) * dist,
                      rotate: Math.random() * 60 - 30,
                      opacity: 0,
                    }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  />
                )
              })}
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
