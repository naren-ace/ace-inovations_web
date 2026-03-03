'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  direction?: 'up' | 'down' | 'left' | 'right'
}

export function ScrollReveal({
  children,
  className = '',
  direction = 'up',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.95', 'start 0.7'],
  })

  // Only animate translate — no opacity or blur so inner components stay crisp
  const yMap = { up: [40, 0], down: [-40, 0], left: [0, 0], right: [0, 0] }
  const xMap = { up: [0, 0], down: [0, 0], left: [50, 0], right: [-50, 0] }

  const y = useTransform(scrollYProgress, [0, 1], yMap[direction])
  const x = useTransform(scrollYProgress, [0, 1], xMap[direction])

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ y, x }}
    >
      {children}
    </motion.div>
  )
}
