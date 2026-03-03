'use client'

import { useEffect, useRef } from 'react'

/**
 * Stripe-inspired animated gradient mesh.
 * Renders slowly-morphing colorful blobs on a canvas.
 */
export function GradientMesh() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const animRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    const resize = () => {
      const rect = container.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      canvas.style.width = rect.width + 'px'
      canvas.style.height = rect.height + 'px'
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.scale(dpr, dpr)
    }

    resize()

    // Gradient blob definitions
    const blobs = [
      { cx: 0.25, cy: 0.35, rx: 0.35, ry: 0.35, color: [99, 102, 241], speed: 0.0004, phase: 0 },       // Indigo
      { cx: 0.70, cy: 0.30, rx: 0.30, ry: 0.30, color: [59, 130, 246], speed: 0.0003, phase: 1.2 },      // Blue
      { cx: 0.50, cy: 0.70, rx: 0.40, ry: 0.30, color: [139, 92, 246], speed: 0.00035, phase: 2.4 },     // Violet
      { cx: 0.15, cy: 0.75, rx: 0.25, ry: 0.25, color: [6, 182, 212], speed: 0.00045, phase: 3.6 },      // Cyan
      { cx: 0.80, cy: 0.65, rx: 0.28, ry: 0.28, color: [168, 85, 247], speed: 0.00025, phase: 4.8 },     // Purple
    ]

    const tick = (time: number) => {
      const w = container.clientWidth
      const h = container.clientHeight

      ctx.clearRect(0, 0, w, h)

      // Check dark mode
      const isDark = document.documentElement.classList.contains('dark')
      const baseAlpha = isDark ? 0.18 : 0.10

      for (const blob of blobs) {
        const t = time * blob.speed + blob.phase
        // Slowly drift the blob center
        const cx = (blob.cx + Math.sin(t) * 0.08) * w
        const cy = (blob.cy + Math.cos(t * 0.7) * 0.06) * h
        const rx = blob.rx * w
        const ry = blob.ry * h

        const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.max(rx, ry))
        const [r, g, b] = blob.color
        gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${baseAlpha})`)
        gradient.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, ${baseAlpha * 0.4})`)
        gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`)

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2)
        ctx.fill()
      }

      animRef.current = requestAnimationFrame(tick)
    }

    animRef.current = requestAnimationFrame(tick)
    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(animRef.current)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none" data-testid="gradient-mesh">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ filter: 'blur(80px)' }}
      />
    </div>
  )
}
