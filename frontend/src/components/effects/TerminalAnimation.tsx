'use client'

import { useEffect, useRef, useState, useCallback } from 'react'

const LINES = [
  '> initializing atlas_core v4.2.1...',
  '> connecting to growth_engine...',
  '  [OK] neural_map: online',
  '  [OK] dependency_graph: loaded',
  '> scanning topological layers...',
  '  found 847 dependency nodes',
  '  found 12 critical bottlenecks',
  '> mapping friction coefficients...',
  '  layer_0: infrastructure  [0.12]',
  '  layer_1: orchestration   [0.34]',
  '  layer_2: delivery        [0.08]',
  '> isolating 80/20 drag vectors...',
  '  [ALERT] bottleneck_id: BN-0042',
  '  scaling_drag: 73.2% reduction',
  '> ACCESSING GROWTH CORE...',
  '  core_status: ACTIVE',
  '  throughput: 4.2x baseline',
  '> analysis complete.',
  '> ready for next cycle.',
  '',
]

export function TerminalAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [lines, setLines] = useState<string[]>([])
  const indexRef = useRef(0)
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>()

  const addLine = useCallback(() => {
    const idx = indexRef.current % LINES.length
    if (idx === 0 && indexRef.current > 0) {
      setLines([])
    }
    setLines(prev => [...prev.slice(-14), LINES[idx]])
    indexRef.current++

    const delay = LINES[idx] === '' ? 2000 : LINES[idx].startsWith('>') ? 600 : 300
    timeoutRef.current = setTimeout(addLine, delay)
  }, [])

  useEffect(() => {
    timeoutRef.current = setTimeout(addLine, 800)
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current) }
  }, [addLine])

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight
    }
  }, [lines])

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden p-4 font-mono text-[10px] leading-relaxed pointer-events-none select-none"
      style={{ color: 'rgba(99, 102, 241, 0.25)' }}
      data-testid="terminal-animation"
    >
      {lines.map((line, i) => (
        <div
          key={`${indexRef.current}-${i}`}
          className="whitespace-pre"
          style={{
            opacity: i === lines.length - 1 ? 0.6 : 0.3,
            color: line.includes('[ALERT]')
              ? 'rgba(168, 85, 247, 0.4)'
              : line.startsWith('> ACCESSING')
                ? 'rgba(99, 102, 241, 0.5)'
                : undefined,
          }}
        >
          {line}
          {i === lines.length - 1 && <span className="animate-pulse">_</span>}
        </div>
      ))}
    </div>
  )
}
