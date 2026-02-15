'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  direction?: 'up' | 'down' | 'left' | 'right'
  delay?: number
  blur?: boolean
  scale?: boolean
}

export function ScrollReveal({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  blur = false,
  scale = false,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.92', 'start 0.55'],
  })

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])

  const yMap = { up: [50, 0], down: [-50, 0], left: [0, 0], right: [0, 0] }
  const xMap = { up: [0, 0], down: [0, 0], left: [60, 0], right: [-60, 0] }

  const y = useTransform(scrollYProgress, [0, 1], yMap[direction])
  const x = useTransform(scrollYProgress, [0, 1], xMap[direction])
  const s = useTransform(scrollYProgress, [0, 1], scale ? [0.92, 1] : [1, 1])
  const blurVal = useTransform(scrollYProgress, [0, 1], blur ? [8, 0] : [0, 0])
  const filterStr = useTransform(blurVal, v => `blur(${v}px)`)

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ opacity, y, x, scale: s, filter: filterStr, transitionDelay: `${delay}s` }}
    >
      {children}
    </motion.div>
  )
}
