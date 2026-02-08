'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface StickySectionProps {
  children: React.ReactNode
  className?: string
  zIndex?: number
  overlap?: boolean
}

export const StickySection: React.FC<StickySectionProps> = ({ children, className = '', zIndex = 10, overlap = false }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'start start'] })
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.6, 1])
  const y = useTransform(scrollYProgress, [0, 1], [60, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [0.98, 1])

  return (
    <div ref={ref} className={`relative ${overlap ? '-mt-8 lg:-mt-12' : ''} ${className}`} style={{ zIndex }}>
      <motion.div style={{ opacity, y, scale }} transition={{ type: 'spring', damping: 30, stiffness: 100 }}>
        {children}
      </motion.div>
    </div>
  )
}
