'use client'

import { motion, useAnimation } from 'framer-motion'
import { useEffect, useState } from 'react'

interface TypewriterTextProps {
  parts: { text: string; highlight?: boolean }[]
  speed?: number
  className?: string
}

export function TypewriterText({ parts, speed = 35, className = '' }: TypewriterTextProps) {
  const [displayedChars, setDisplayedChars] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

  const fullText = parts.map(p => p.text).join('')
  const totalChars = fullText.length

  useEffect(() => {
    if (displayedChars >= totalChars) return
    const timeout = setTimeout(() => {
      setDisplayedChars(prev => prev + 1)
    }, speed)
    return () => clearTimeout(timeout)
  }, [displayedChars, totalChars, speed])

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 530)
    return () => clearInterval(interval)
  }, [])

  // Build rendered output with proper highlighting
  let charIndex = 0
  const rendered = parts.map((part, partIdx) => {
    const partStart = charIndex
    const partEnd = charIndex + part.text.length
    charIndex = partEnd

    const visibleCount = Math.max(0, Math.min(displayedChars - partStart, part.text.length))
    const visibleText = part.text.slice(0, visibleCount)

    if (visibleCount === 0) return null

    return (
      <span key={partIdx} className={part.highlight ? 'gradient-text' : ''}>
        {visibleText}
      </span>
    )
  })

  return (
    <span className={className}>
      {rendered}
      <motion.span
        className="inline-block w-[3px] ml-0.5 align-middle"
        style={{
          height: '0.85em',
          background: 'hsl(var(--primary))',
          opacity: showCursor ? 1 : 0,
          transition: 'opacity 0.1s',
          borderRadius: '1px',
        }}
        data-testid="typewriter-cursor"
      />
    </span>
  )
}
