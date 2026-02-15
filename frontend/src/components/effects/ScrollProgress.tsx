'use client'

import { motion, useScroll, useSpring } from 'framer-motion'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 40, restDelta: 0.001 })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[200]"
      style={{
        scaleX,
        background: 'linear-gradient(90deg, hsl(216 100% 50%), hsl(259 72% 58%))',
      }}
      data-testid="scroll-progress"
    />
  )
}
