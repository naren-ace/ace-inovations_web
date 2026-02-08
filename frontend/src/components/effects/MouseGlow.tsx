'use client'

import { useEffect, useRef } from 'react'

export const MouseGlow = () => {
  const glowRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let isOverCard = false

    const handleMouseMove = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${e.clientX - 250}px, ${e.clientY - 250}px)`
      }
      if (innerRef.current) {
        innerRef.current.style.transform = `translate(${e.clientX - 120}px, ${e.clientY - 120}px)`
      }

      // Check if hovering over a card element
      const target = e.target as HTMLElement
      const card = target.closest('.glass-card-hover, .glass-card, [class*="card"]')
      const newIsOverCard = !!card

      if (newIsOverCard !== isOverCard) {
        isOverCard = newIsOverCard
        if (glowRef.current) {
          glowRef.current.style.width = isOverCard ? '600px' : '500px'
          glowRef.current.style.height = isOverCard ? '600px' : '500px'
          glowRef.current.style.background = isOverCard
            ? 'radial-gradient(circle, hsl(216 100% 50% / 0.08) 0%, hsl(259 72% 58% / 0.04) 40%, transparent 70%)'
            : 'radial-gradient(circle, hsl(259 72% 58% / 0.05) 0%, transparent 70%)'
        }
        if (innerRef.current) {
          innerRef.current.style.opacity = isOverCard ? '1' : '0'
        }
      }
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <>
      <div
        ref={glowRef}
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[1]"
        style={{
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, hsl(259 72% 58% / 0.05) 0%, transparent 70%)',
          transition: 'transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), width 0.4s ease, height 0.4s ease, background 0.4s ease',
          willChange: 'transform',
        }}
        aria-hidden="true"
      />
      <div
        ref={innerRef}
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[1]"
        style={{
          width: '240px',
          height: '240px',
          background: 'radial-gradient(circle, hsl(216 100% 50% / 0.06) 0%, transparent 60%)',
          transition: 'transform 0.15s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease',
          willChange: 'transform',
          opacity: 0,
        }}
        aria-hidden="true"
      />
    </>
  )
}
