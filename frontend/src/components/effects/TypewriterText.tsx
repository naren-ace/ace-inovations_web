'use client'

import { useEffect, useState } from 'react'

interface TypewriterTextProps {
  parts: { text: string; highlight?: boolean }[]
  speed?: number
  delayMs?: number
  showCursorWhenDone?: boolean
}

export function TypewriterText({ parts, speed = 70, delayMs = 0, showCursorWhenDone = true }: TypewriterTextProps) {
  const [displayedChars, setDisplayedChars] = useState(0)
  const [started, setStarted] = useState(delayMs === 0)
  const [cursorVisible, setCursorVisible] = useState(true)

  const fullText = parts.map(p => p.text).join('')
  const totalChars = fullText.length
  const isDone = displayedChars >= totalChars

  // Delay before starting to type
  useEffect(() => {
    if (delayMs === 0) return
    const timer = setTimeout(() => setStarted(true), delayMs)
    return () => clearTimeout(timer)
  }, [delayMs])

  // Type characters one by one
  useEffect(() => {
    if (!started || isDone) return
    const timer = setTimeout(() => {
      setDisplayedChars(prev => prev + 1)
    }, speed)
    return () => clearTimeout(timer)
  }, [started, displayedChars, isDone, speed])

  // Blink cursor
  useEffect(() => {
    const interval = setInterval(() => setCursorVisible(prev => !prev), 530)
    return () => clearInterval(interval)
  }, [])

  // Don't render anything until started (keeps layout stable)
  if (!started && displayedChars === 0) {
    return (
      <span>
        <span style={{ visibility: 'hidden' }}>{fullText}</span>
      </span>
    )
  }

  // Build rendered output with proper highlighting
  let charIndex = 0
  const rendered = parts.map((part, partIdx) => {
    const partStart = charIndex
    charIndex += part.text.length
    const visibleCount = Math.max(0, Math.min(displayedChars - partStart, part.text.length))
    if (visibleCount === 0) return null
    return (
      <span key={partIdx} className={part.highlight ? 'gradient-text' : ''}>
        {part.text.slice(0, visibleCount)}
      </span>
    )
  })

  const showCursor = showCursorWhenDone || !isDone

  return (
    <span>
      {rendered}
      {showCursor && (
        <span
          className="inline-block w-[3px] ml-0.5 align-middle"
          style={{
            height: '0.85em',
            background: 'hsl(var(--primary))',
            opacity: cursorVisible ? 1 : 0,
            transition: 'opacity 0.08s',
            borderRadius: '1px',
          }}
          data-testid="typewriter-cursor"
        />
      )}
    </span>
  )
}
