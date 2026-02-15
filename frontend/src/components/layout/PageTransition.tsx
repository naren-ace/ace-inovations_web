'use client'

import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

const variants = {
  hidden: { opacity: 0, y: 20, transition: { duration: 0 } },
  enter: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.0, 0.0, 0.2, 1] } },
  exit: { opacity: 0, y: 0, transition: { duration: 0.05 } },
}

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <motion.div
      key={pathname}
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
    >
      {children}
    </motion.div>
  )
}
