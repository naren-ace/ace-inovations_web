'use client'

import { useState, useEffect, useRef, useCallback } from 'react'

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*'

interface GlitchTextProps {
  text: string
  isHovered: boolean
  className?: string
}

export function GlitchText({ text, isHovered, className = '' }: GlitchTextProps) {
  const [display, setDisplay] = useState(text)
  const frameRef = useRef<number>(0)
  const iterRef = useRef(0)

  const scramble = useCallback(() => {
    iterRef.current = 0
    const totalFrames = text.length * 2

    const tick = () => {
      const progress = iterRef.current / totalFrames
      const resolved = Math.floor(progress * text.length)

      setDisplay(
        text
          .split('')
          .map((char, i) => {
            if (char === ' ') return ' '
            if (i < resolved) return text[i]
            return CHARS[Math.floor(Math.random() * CHARS.length)]
          })
          .join('')
      )

      iterRef.current++
      if (iterRef.current <= totalFrames) {
        frameRef.current = requestAnimationFrame(tick)
      } else {
        setDisplay(text)
      }
    }

    frameRef.current = requestAnimationFrame(tick)
  }, [text])

  useEffect(() => {
    if (isHovered) {
      scramble()
    } else {
      setDisplay(text)
      cancelAnimationFrame(frameRef.current)
    }
    return () => cancelAnimationFrame(frameRef.current)
  }, [isHovered, scramble, text])

  return <span className={className} data-testid="glitch-text">{display}</span>
}
