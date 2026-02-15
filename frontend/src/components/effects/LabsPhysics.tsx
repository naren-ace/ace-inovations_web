'use client'

import { useEffect, useRef, useCallback } from 'react'
import Matter from 'matter-js'

// Tech node definitions — AI, Logic, Shield icons
const TECH_NODES = [
  { label: 'AI', icon: 'brain', size: 56 },
  { label: 'Logic', icon: 'circuit', size: 50 },
  { label: 'Shield', icon: 'shield', size: 48 },
  { label: 'Code', icon: 'code', size: 46 },
  { label: 'Data', icon: 'data', size: 54 },
  { label: 'Cloud', icon: 'cloud', size: 48 },
  { label: 'API', icon: 'api', size: 44 },
  { label: 'ML', icon: 'ml', size: 52 },
]

function getThemeColors(isDark: boolean) {
  if (isDark) {
    return {
      nodeFill: 'rgba(77, 148, 255, 0.12)',
      nodeStroke: 'rgba(77, 148, 255, 0.45)',
      nodeGlow: 'rgba(77, 148, 255, 0.2)',
      iconColor: 'rgba(77, 148, 255, 0.9)',
      labelColor: 'rgba(255, 255, 255, 0.7)',
      lineColor: [77, 148, 255] as [number, number, number],
      accentStroke: 'rgba(155, 111, 255, 0.35)',
      accentFill: 'rgba(155, 111, 255, 0.08)',
    }
  }
  return {
    nodeFill: 'rgba(0, 112, 243, 0.06)',
    nodeStroke: 'rgba(0, 112, 243, 0.25)',
    nodeGlow: 'rgba(0, 112, 243, 0.1)',
    iconColor: 'rgba(0, 112, 243, 0.85)',
    labelColor: 'rgba(0, 0, 0, 0.6)',
    lineColor: [0, 112, 243] as [number, number, number],
    accentStroke: 'rgba(124, 58, 237, 0.2)',
    accentFill: 'rgba(124, 58, 237, 0.04)',
  }
}

// Draw simple icons on canvas
function drawIcon(ctx: CanvasRenderingContext2D, icon: string, x: number, y: number, size: number, color: string) {
  ctx.save()
  ctx.strokeStyle = color
  ctx.fillStyle = color
  ctx.lineWidth = 1.5
  ctx.lineCap = 'round'
  ctx.lineJoin = 'round'
  const s = size * 0.4

  switch (icon) {
    case 'brain': {
      // Brain-like shape
      ctx.beginPath()
      ctx.arc(x - s * 0.25, y - s * 0.1, s * 0.45, 0.3, Math.PI * 1.7)
      ctx.stroke()
      ctx.beginPath()
      ctx.arc(x + s * 0.25, y - s * 0.1, s * 0.45, Math.PI * 1.3, Math.PI * 2.7)
      ctx.stroke()
      // Center line
      ctx.beginPath()
      ctx.moveTo(x, y - s * 0.5)
      ctx.lineTo(x, y + s * 0.4)
      ctx.stroke()
      break
    }
    case 'circuit': {
      // Circuit board pattern
      ctx.beginPath()
      ctx.moveTo(x - s * 0.5, y)
      ctx.lineTo(x - s * 0.15, y)
      ctx.lineTo(x - s * 0.15, y - s * 0.35)
      ctx.lineTo(x + s * 0.15, y - s * 0.35)
      ctx.lineTo(x + s * 0.15, y)
      ctx.lineTo(x + s * 0.5, y)
      ctx.stroke()
      ctx.beginPath()
      ctx.arc(x, y - s * 0.35, 2, 0, Math.PI * 2)
      ctx.fill()
      ctx.beginPath()
      ctx.arc(x - s * 0.5, y, 2, 0, Math.PI * 2)
      ctx.fill()
      ctx.beginPath()
      ctx.arc(x + s * 0.5, y, 2, 0, Math.PI * 2)
      ctx.fill()
      break
    }
    case 'shield': {
      // Shield shape
      ctx.beginPath()
      ctx.moveTo(x, y - s * 0.5)
      ctx.lineTo(x + s * 0.4, y - s * 0.25)
      ctx.lineTo(x + s * 0.4, y + s * 0.1)
      ctx.quadraticCurveTo(x + s * 0.3, y + s * 0.45, x, y + s * 0.55)
      ctx.quadraticCurveTo(x - s * 0.3, y + s * 0.45, x - s * 0.4, y + s * 0.1)
      ctx.lineTo(x - s * 0.4, y - s * 0.25)
      ctx.closePath()
      ctx.stroke()
      // Checkmark
      ctx.beginPath()
      ctx.moveTo(x - s * 0.15, y)
      ctx.lineTo(x - s * 0.02, y + s * 0.15)
      ctx.lineTo(x + s * 0.18, y - s * 0.1)
      ctx.stroke()
      break
    }
    case 'code': {
      // Code brackets
      ctx.beginPath()
      ctx.moveTo(x - s * 0.15, y - s * 0.4)
      ctx.lineTo(x - s * 0.4, y)
      ctx.lineTo(x - s * 0.15, y + s * 0.4)
      ctx.stroke()
      ctx.beginPath()
      ctx.moveTo(x + s * 0.15, y - s * 0.4)
      ctx.lineTo(x + s * 0.4, y)
      ctx.lineTo(x + s * 0.15, y + s * 0.4)
      ctx.stroke()
      break
    }
    case 'data': {
      // Database cylinder
      ctx.beginPath()
      ctx.ellipse(x, y - s * 0.3, s * 0.35, s * 0.15, 0, 0, Math.PI * 2)
      ctx.stroke()
      ctx.beginPath()
      ctx.moveTo(x - s * 0.35, y - s * 0.3)
      ctx.lineTo(x - s * 0.35, y + s * 0.2)
      ctx.stroke()
      ctx.beginPath()
      ctx.moveTo(x + s * 0.35, y - s * 0.3)
      ctx.lineTo(x + s * 0.35, y + s * 0.2)
      ctx.stroke()
      ctx.beginPath()
      ctx.ellipse(x, y + s * 0.2, s * 0.35, s * 0.15, 0, 0, Math.PI)
      ctx.stroke()
      break
    }
    case 'cloud': {
      // Cloud shape
      ctx.beginPath()
      ctx.arc(x - s * 0.15, y, s * 0.25, Math.PI * 0.7, Math.PI * 2.3)
      ctx.stroke()
      ctx.beginPath()
      ctx.arc(x + s * 0.15, y - s * 0.05, s * 0.3, Math.PI * 0.8, Math.PI * 2.2)
      ctx.stroke()
      ctx.beginPath()
      ctx.moveTo(x - s * 0.38, y + s * 0.1)
      ctx.lineTo(x + s * 0.42, y + s * 0.1)
      ctx.stroke()
      break
    }
    case 'api': {
      // API text-like shapes
      ctx.font = `bold ${s * 0.6}px monospace`
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillText('{ }', x, y)
      break
    }
    case 'ml': {
      // Neural network nodes
      const positions = [
        { x: x - s * 0.3, y: y - s * 0.2 },
        { x: x - s * 0.3, y: y + s * 0.2 },
        { x: x + s * 0.3, y: y - s * 0.2 },
        { x: x + s * 0.3, y: y + s * 0.2 },
        { x: x, y: y },
      ]
      // Lines
      ctx.beginPath()
      positions.slice(0, 2).forEach(p1 => {
        positions.slice(2, 4).forEach(p2 => {
          ctx.moveTo(p1.x, p1.y)
          ctx.lineTo(positions[4].x, positions[4].y)
          ctx.moveTo(positions[4].x, positions[4].y)
          ctx.lineTo(p2.x, p2.y)
        })
      })
      ctx.stroke()
      // Nodes
      positions.forEach(p => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, 2.5, 0, Math.PI * 2)
        ctx.fill()
      })
      break
    }
  }
  ctx.restore()
}

export const LabsPhysics = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const engineRef = useRef<Matter.Engine | null>(null)
  const renderLoopRef = useRef<number>(0)
  const isDarkRef = useRef(false)
  const mouseRef = useRef<{ x: number; y: number }>({ x: -999, y: -999 })

  const checkDark = useCallback(() => {
    return document.documentElement.classList.contains('dark')
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const { Engine, Bodies, Composite, Body, Vector } = Matter

    const rect = container.getBoundingClientRect()
    const W = rect.width
    const H = rect.height
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    canvas.width = W * dpr
    canvas.height = H * dpr
    canvas.style.width = W + 'px'
    canvas.style.height = H + 'px'
    ctx.scale(dpr, dpr)

    // Engine — zero gravity
    const engine = Engine.create({ gravity: { x: 0, y: 0, scale: 0 } })
    engineRef.current = engine

    // Create circular bodies for each tech node
    const bodies: Matter.Body[] = []
    TECH_NODES.forEach((node, i) => {
      const angle = (i / TECH_NODES.length) * Math.PI * 2
      const radius = Math.min(W, H) * 0.35
      const x = W * 0.5 + Math.cos(angle) * radius * (0.7 + Math.random() * 0.3)
      const y = H * 0.5 + Math.sin(angle) * radius * (0.7 + Math.random() * 0.3)

      const body = Bodies.circle(x, y, node.size / 2, {
        friction: 0,
        frictionAir: 0.025 + Math.random() * 0.015,
        restitution: 0.5,
        density: 0.001,
        render: { visible: false },
        label: String(i),
      })

      const vx = (Math.random() - 0.5) * 0.3
      const vy = (Math.random() - 0.5) * 0.3
      Body.setVelocity(body, { x: vx, y: vy })
      Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.003)

      bodies.push(body)
    })

    Composite.add(engine.world, bodies)

    // Boundary walls
    const wallOpts = { isStatic: true, restitution: 0.7, render: { visible: false } }
    const walls = [
      Bodies.rectangle(W / 2, -30, W + 100, 60, wallOpts),
      Bodies.rectangle(W / 2, H + 30, W + 100, 60, wallOpts),
      Bodies.rectangle(-30, H / 2, 60, H + 100, wallOpts),
      Bodies.rectangle(W + 30, H / 2, 60, H + 100, wallOpts),
    ]
    Composite.add(engine.world, walls)

    const centerX = W * 0.5
    const centerY = H * 0.5
    const CONNECTION_DIST = 240

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect()
      mouseRef.current = { x: e.clientX - r.left, y: e.clientY - r.top }
    }
    const handleMouseLeave = () => {
      mouseRef.current = { x: -999, y: -999 }
    }
    container.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('mouseleave', handleMouseLeave)

    let lastTime = performance.now()

    const tick = (now: number) => {
      const delta = Math.min(now - lastTime, 32)
      lastTime = now

      isDarkRef.current = checkDark()
      const colors = getThemeColors(isDarkRef.current)

      Engine.update(engine, delta)

      const mx = mouseRef.current.x
      const my = mouseRef.current.y
      const mouseActive = mx > -500

      // Apply forces
      bodies.forEach((body) => {
        // Center attraction
        const dx = centerX - body.position.x
        const dy = centerY - body.position.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist > 40) {
          const force = 0.0000025 * dist
          Body.applyForce(body, body.position, {
            x: (dx / dist) * force,
            y: (dy / dist) * force,
          })
        }

        // Mouse interaction — gentle repulsion
        if (mouseActive) {
          const mdx = body.position.x - mx
          const mdy = body.position.y - my
          const mDist = Math.sqrt(mdx * mdx + mdy * mdy)
          if (mDist < 150 && mDist > 0) {
            const mForce = (150 - mDist) / 150 * 0.0004
            Body.applyForce(body, body.position, {
              x: (mdx / mDist) * mForce,
              y: (mdy / mDist) * mForce,
            })
          }
        }

        // Speed limit
        const speed = Vector.magnitude(body.velocity)
        if (speed > 1.2) {
          Body.setVelocity(body, {
            x: body.velocity.x * 0.96,
            y: body.velocity.y * 0.96,
          })
        }

        // Small random perturbation
        if (Math.random() < 0.03) {
          Body.applyForce(body, body.position, {
            x: (Math.random() - 0.5) * 0.00004,
            y: (Math.random() - 0.5) * 0.00004,
          })
        }
      })

      // Clear and draw
      ctx.clearRect(0, 0, W, H)

      // Draw connections between nearby nodes
      const [r, g, b] = colors.lineColor
      for (let i = 0; i < bodies.length; i++) {
        for (let j = i + 1; j < bodies.length; j++) {
          const ddx = bodies[i].position.x - bodies[j].position.x
          const ddy = bodies[i].position.y - bodies[j].position.y
          const d = Math.sqrt(ddx * ddx + ddy * ddy)
          if (d < CONNECTION_DIST) {
            const alpha = (1 - d / CONNECTION_DIST) * 0.25
            const pulse = Math.sin(now * 0.001 + i * 0.5) * 0.5 + 0.5
            const finalAlpha = alpha * (0.5 + pulse * 0.5)

            ctx.beginPath()
            ctx.moveTo(bodies[i].position.x, bodies[i].position.y)
            ctx.lineTo(bodies[j].position.x, bodies[j].position.y)
            ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${finalAlpha})`
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }
      }

      // Draw tech nodes
      bodies.forEach((body, i) => {
        const nodeConfig = TECH_NODES[i]
        const px = body.position.x
        const py = body.position.y
        const nodeSize = nodeConfig.size
        const isAccent = i % 2 === 1

        // Outer glow
        ctx.save()
        const glowGrad = ctx.createRadialGradient(px, py, 0, px, py, nodeSize * 0.9)
        glowGrad.addColorStop(0, isAccent ? colors.accentFill : colors.nodeGlow)
        glowGrad.addColorStop(1, 'transparent')
        ctx.beginPath()
        ctx.arc(px, py, nodeSize * 0.9, 0, Math.PI * 2)
        ctx.fillStyle = glowGrad
        ctx.fill()
        ctx.restore()

        // Node circle
        ctx.beginPath()
        ctx.arc(px, py, nodeSize / 2, 0, Math.PI * 2)
        ctx.fillStyle = isAccent ? colors.accentFill : colors.nodeFill
        ctx.fill()
        ctx.strokeStyle = isAccent ? colors.accentStroke : colors.nodeStroke
        ctx.lineWidth = 1.2
        ctx.stroke()

        // Icon
        drawIcon(ctx, nodeConfig.icon, px, py - 2, nodeSize, colors.iconColor)

        // Label
        ctx.save()
        ctx.font = '10px Inter, system-ui, sans-serif'
        ctx.textAlign = 'center'
        ctx.textBaseline = 'top'
        ctx.fillStyle = colors.labelColor
        ctx.fillText(nodeConfig.label, px, py + nodeSize / 2 + 5)
        ctx.restore()
      })

      renderLoopRef.current = requestAnimationFrame(tick)
    }

    renderLoopRef.current = requestAnimationFrame(tick)

    const handleResize = () => {
      const newRect = container.getBoundingClientRect()
      const nW = newRect.width
      const nH = newRect.height
      canvas.width = nW * dpr
      canvas.height = nH * dpr
      canvas.style.width = nW + 'px'
      canvas.style.height = nH + 'px'
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.scale(dpr, dpr)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(renderLoopRef.current)
      window.removeEventListener('resize', handleResize)
      container.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('mouseleave', handleMouseLeave)
      Composite.clear(engine.world, false)
      Engine.clear(engine)
    }
  }, [checkDark])

  return (
    <div ref={containerRef} className="relative w-full h-full pointer-events-auto" data-testid="labs-physics">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 1 }}
      />
    </div>
  )
}
