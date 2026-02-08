'use client'

import { motion } from 'framer-motion'

export const FluidShape = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div
        className="absolute w-[85%] h-[85%] rounded-full animate-pulse-soft"
        style={{ background: 'radial-gradient(circle, hsl(216 100% 50% / 0.08) 0%, transparent 70%)' }}
      />
      <motion.div
        className="relative w-[75%] h-[75%] animate-fluid-morph"
        animate={{ scale: [1, 1.03, 0.98, 1.01, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background: 'linear-gradient(135deg, hsl(216 100% 50% / 0.25), hsl(259 72% 58% / 0.20), hsl(216 100% 65% / 0.15))',
          backdropFilter: 'blur(40px)',
          WebkitBackdropFilter: 'blur(40px)',
          border: '1px solid hsl(0 0% 100% / 0.35)',
          boxShadow: '0 20px 60px hsl(216 100% 50% / 0.08), inset 0 1px 0 hsl(0 0% 100% / 0.3)',
        }}
      >
        <motion.div
          className="absolute inset-[15%] rounded-full"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          style={{ background: 'linear-gradient(45deg, hsl(216 100% 50% / 0.15), transparent 50%, hsl(259 72% 58% / 0.12))' }}
        />
        <div
          className="absolute top-[10%] left-[15%] w-[40%] h-[30%] rounded-full"
          style={{ background: 'linear-gradient(180deg, hsl(0 0% 100% / 0.25), transparent)', filter: 'blur(8px)' }}
        />
        <div
          className="absolute inset-0 rounded-[inherit] opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            mixBlendMode: 'overlay',
          }}
        />
      </motion.div>
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: 3 + i * 2,
            height: 3 + i * 2,
            background: i % 2 === 0 ? 'hsl(216 100% 50% / 0.3)' : 'hsl(259 72% 58% / 0.3)',
            top: `${20 + i * 14}%`,
            left: `${15 + i * 16}%`,
          }}
          animate={{ y: [0, -15 - i * 3, 0], x: [0, 8 + i * 2, 0], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.6 }}
        />
      ))}
    </div>
  )
}
