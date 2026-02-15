'use client'

import { useEffect, useRef, useCallback } from 'react'

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  pulsePhase: number
  pulseSpeed: number
}

// Theme-aware colors — read live from DOM
function getThemeColors(isDark: boolean) {
  if (isDark) {
    return {
      lineColor: [77, 148, 255] as [number, number, number],      // Electric Blue
      nodeGlow: 'rgba(77, 148, 255, 0.6)',
      nodeFill: 'rgba(77, 148, 255, 0.35)',
      nodeStroke: 'rgba(77, 148, 255, 0.5)',
      pulseColor: 'rgba(77, 148, 255, 0.08)',
    }
  }
  return {
    lineColor: [79, 70, 229] as [number, number, number],          // Saturated Indigo
    nodeGlow: 'rgba(79, 70, 229, 0.5)',
    nodeFill: 'rgba(79, 70, 229, 0.25)',
    nodeStroke: 'rgba(79, 70, 229, 0.4)',
    pulseColor: 'rgba(79, 70, 229, 0.06)',
  }
}

const NODE_COUNT = 28
const CONNECTION_DISTANCE = 160
const MOUSE_INFLUENCE_RADIUS = 200

export const NeuralLab = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const animRef = useRef<number>(0)
  const nodesRef = useRef<Node[]>([])
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({ x: -999, y: -999, active: false })
  const isDarkRef = useRef(false)
  const dimsRef = useRef({ w: 0, h: 0 })

  const checkDark = useCallback(() => {
    return document.documentElement.classList.contains('dark')
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    const resize = () => {
      const rect = container.getBoundingClientRect()
      const w = rect.width
      const h = rect.height
      dimsRef.current = { w, h }
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = w + 'px'
      canvas.style.height = h + 'px'
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.scale(dpr, dpr)
    }

    resize()
    const { w, h } = dimsRef.current

    // Initialize nodes
    const nodes: Node[] = []
    for (let i = 0; i < NODE_COUNT; i++) {
      nodes.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: 2 + Math.random() * 2.5,
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: 0.5 + Math.random() * 1.0,
      })
    }
    nodesRef.current = nodes

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top, active: true }
    }
    const handleMouseLeave = () => {
      mouseRef.current.active = false
    }
    container.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('mouseleave', handleMouseLeave)

    // Animation loop
    const tick = (time: number) => {
      isDarkRef.current = checkDark()
      const colors = getThemeColors(isDarkRef.current)
      const { w: cw, h: ch } = dimsRef.current

      ctx.clearRect(0, 0, cw, ch)

      // Update node positions
      nodes.forEach(node => {
        node.x += node.vx
        node.y += node.vy

        // Bounce off edges with padding
        if (node.x < 10 || node.x > cw - 10) node.vx *= -1
        if (node.y < 10 || node.y > ch - 10) node.vy *= -1

        // Keep in bounds
        node.x = Math.max(5, Math.min(cw - 5, node.x))
        node.y = Math.max(5, Math.min(ch - 5, node.y))

        // Mouse influence — gentle repulsion
        if (mouseRef.current.active) {
          const dx = node.x - mouseRef.current.x
          const dy = node.y - mouseRef.current.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < MOUSE_INFLUENCE_RADIUS && dist > 0) {
            const force = (MOUSE_INFLUENCE_RADIUS - dist) / MOUSE_INFLUENCE_RADIUS * 0.02
            node.vx += (dx / dist) * force
            node.vy += (dy / dist) * force
          }
        }

        // Speed limit
        const speed = Math.sqrt(node.vx * node.vx + node.vy * node.vy)
        if (speed > 0.8) {
          node.vx = (node.vx / speed) * 0.8
          node.vy = (node.vy / speed) * 0.8
        }

        // Update pulse phase
        node.pulsePhase += node.pulseSpeed * 0.016
      })

      // Draw connections
      const [r, g, b] = colors.lineColor
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < CONNECTION_DISTANCE) {
            const alpha = (1 - dist / CONNECTION_DISTANCE) * 0.35

            // Animated pulse along the line
            const pulse = Math.sin(time * 0.001 + i * 0.3) * 0.5 + 0.5
            const finalAlpha = alpha * (0.6 + pulse * 0.4)

            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${finalAlpha})`
            ctx.lineWidth = 0.8 + (1 - dist / CONNECTION_DISTANCE) * 0.6
            ctx.stroke()
          }
        }
      }

      // Draw nodes
      nodes.forEach(node => {
        const pulse = Math.sin(node.pulsePhase) * 0.5 + 0.5
        const currentRadius = node.radius + pulse * 1.2

        // Outer glow
        ctx.beginPath()
        ctx.arc(node.x, node.y, currentRadius + 6, 0, Math.PI * 2)
        ctx.fillStyle = colors.pulseColor
        ctx.fill()

        // Node fill
        ctx.beginPath()
        ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2)
        ctx.fillStyle = colors.nodeFill
        ctx.fill()

        // Node stroke
        ctx.strokeStyle = colors.nodeStroke
        ctx.lineWidth = 0.8
        ctx.stroke()

        // Center bright dot
        ctx.beginPath()
        ctx.arc(node.x, node.y, currentRadius * 0.4, 0, Math.PI * 2)
        ctx.fillStyle = colors.nodeGlow
        ctx.fill()
      })

      animRef.current = requestAnimationFrame(tick)
    }

    animRef.current = requestAnimationFrame(tick)

    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(animRef.current)
      window.removeEventListener('resize', resize)
      container.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [checkDark])

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-auto" data-testid="neural-lab">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 0 }}
      />
    </div>
  )
}
