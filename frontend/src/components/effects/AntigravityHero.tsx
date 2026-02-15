'use client'

import { useEffect, useRef, useCallback } from 'react'
import Matter from 'matter-js'

// Shard shape definitions — polygonal geometric shards
const SHARD_CONFIGS = [
  { sides: 3, size: 38, angle: 0.3 },
  { sides: 4, size: 32, angle: 0.7 },
  { sides: 5, size: 28, angle: 1.2 },
  { sides: 6, size: 24, angle: 0.5 },
  { sides: 3, size: 44, angle: 2.1 },
  { sides: 4, size: 36, angle: 1.8 },
  { sides: 5, size: 30, angle: 0.9 },
  { sides: 3, size: 26, angle: 1.5 },
  { sides: 6, size: 34, angle: 2.5 },
  { sides: 4, size: 40, angle: 0.1 },
  { sides: 3, size: 22, angle: 1.0 },
  { sides: 5, size: 20, angle: 2.8 },
]

function getThemeColors(isDark: boolean) {
  if (isDark) {
    return {
      shardFill: 'rgba(255, 255, 255, 0.04)',
      shardStroke: 'rgba(255, 255, 255, 0.18)',
      shardGlow: 'rgba(77, 148, 255, 0.12)',
      shardHighlight: 'rgba(255, 255, 255, 0.08)',
    }
  }
  return {
    shardFill: 'rgba(255, 255, 255, 0.45)',
    shardStroke: 'rgba(0, 0, 0, 0.06)',
    shardGlow: 'rgba(0, 0, 0, 0.04)',
    shardHighlight: 'rgba(255, 255, 255, 0.7)',
  }
}

export const AntigravityHero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const engineRef = useRef<Matter.Engine | null>(null)
  const renderLoopRef = useRef<number>(0)
  const isDarkRef = useRef(false)
  const bodiesRef = useRef<Matter.Body[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

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

    // Size
    const rect = container.getBoundingClientRect()
    const W = rect.width
    const H = rect.height
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    canvas.width = W * dpr
    canvas.height = H * dpr
    canvas.style.width = W + 'px'
    canvas.style.height = H + 'px'
    ctx.scale(dpr, dpr)

    // Engine — no gravity (antigravity)
    const engine = Engine.create({ gravity: { x: 0, y: 0, scale: 0 } })
    engineRef.current = engine

    // Create shards as physics bodies
    const shards: Matter.Body[] = []
    SHARD_CONFIGS.forEach((cfg, i) => {
      const x = W * 0.15 + Math.random() * W * 0.7
      const y = H * 0.15 + Math.random() * H * 0.7
      const body = Bodies.polygon(x, y, cfg.sides, cfg.size, {
        angle: cfg.angle,
        friction: 0,
        frictionAir: 0.02 + Math.random() * 0.02,
        restitution: 0.6,
        density: 0.001,
        render: { visible: false },
      })

      // Give each shard an initial slow drift velocity
      const vx = (Math.random() - 0.5) * 0.4
      const vy = (Math.random() - 0.5) * 0.4
      Body.setVelocity(body, { x: vx, y: vy })
      Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.005)

      shards.push(body)
    })

    bodiesRef.current = shards
    Composite.add(engine.world, shards)

    // Invisible boundary walls (far edges to keep shards in view)
    const wallOpts = { isStatic: true, restitution: 0.8, render: { visible: false } }
    const walls = [
      Bodies.rectangle(W / 2, -30, W + 100, 60, wallOpts),
      Bodies.rectangle(W / 2, H + 30, W + 100, 60, wallOpts),
      Bodies.rectangle(-30, H / 2, 60, H + 100, wallOpts),
      Bodies.rectangle(W + 30, H / 2, 60, H + 100, wallOpts),
    ]
    Composite.add(engine.world, walls)

    // Center attractor — gentle pull to keep shards clustered
    const centerX = W * 0.5
    const centerY = H * 0.5

    // Render loop
    let lastTime = performance.now()

    const drawShard = (body: Matter.Body, colors: ReturnType<typeof getThemeColors>) => {
      const vertices = body.vertices
      if (!vertices || vertices.length < 3) return

      ctx.save()

      // Shadow for depth (light mode: shadow-lg, dark mode: glow)
      if (isDarkRef.current) {
        ctx.shadowColor = colors.shardGlow
        ctx.shadowBlur = 20
        ctx.shadowOffsetX = 0
        ctx.shadowOffsetY = 0
      } else {
        ctx.shadowColor = 'rgba(0, 0, 0, 0.08)'
        ctx.shadowBlur = 15
        ctx.shadowOffsetX = 0
        ctx.shadowOffsetY = 4
      }

      // Fill — glassmorphism base
      ctx.beginPath()
      ctx.moveTo(vertices[0].x, vertices[0].y)
      for (let j = 1; j < vertices.length; j++) {
        ctx.lineTo(vertices[j].x, vertices[j].y)
      }
      ctx.closePath()
      ctx.fillStyle = colors.shardFill
      ctx.fill()

      // Clear shadow for stroke
      ctx.shadowColor = 'transparent'
      ctx.shadowBlur = 0

      // Border
      ctx.strokeStyle = colors.shardStroke
      ctx.lineWidth = isDarkRef.current ? 1 : 0.8
      ctx.stroke()

      // Inner highlight (top edge shimmer)
      if (vertices.length >= 2) {
        ctx.beginPath()
        ctx.moveTo(vertices[0].x, vertices[0].y)
        ctx.lineTo(vertices[1].x, vertices[1].y)
        ctx.strokeStyle = colors.shardHighlight
        ctx.lineWidth = isDarkRef.current ? 0.8 : 0.5
        ctx.stroke()
      }

      // Inner glow for dark mode
      if (isDarkRef.current) {
        ctx.beginPath()
        ctx.moveTo(vertices[0].x, vertices[0].y)
        for (let j = 1; j < vertices.length; j++) {
          ctx.lineTo(vertices[j].x, vertices[j].y)
        }
        ctx.closePath()

        // Centroid for radial gradient
        let cx = 0, cy = 0
        vertices.forEach(v => { cx += v.x; cy += v.y })
        cx /= vertices.length
        cy /= vertices.length

        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 40)
        grad.addColorStop(0, 'rgba(77, 148, 255, 0.06)')
        grad.addColorStop(1, 'transparent')
        ctx.fillStyle = grad
        ctx.fill()
      }

      ctx.restore()
    }

    const tick = (now: number) => {
      const delta = Math.min(now - lastTime, 32)
      lastTime = now

      isDarkRef.current = checkDark()
      const colors = getThemeColors(isDarkRef.current)

      // Step physics
      Engine.update(engine, delta)

      // Gentle center attraction + slow drift
      shards.forEach((body) => {
        const dx = centerX - body.position.x
        const dy = centerY - body.position.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        // Gentle pull towards center (stronger when far)
        if (dist > 50) {
          const force = 0.000003 * dist
          Body.applyForce(body, body.position, {
            x: (dx / dist) * force,
            y: (dy / dist) * force,
          })
        }

        // Speed limit
        const speed = Vector.magnitude(body.velocity)
        if (speed > 0.8) {
          Body.setVelocity(body, {
            x: body.velocity.x * 0.98,
            y: body.velocity.y * 0.98,
          })
        }

        // Small random perturbation for liveliness
        if (Math.random() < 0.02) {
          Body.applyForce(body, body.position, {
            x: (Math.random() - 0.5) * 0.00005,
            y: (Math.random() - 0.5) * 0.00005,
          })
        }
      })

      // Clear and draw
      ctx.clearRect(0, 0, W, H)

      shards.forEach(body => drawShard(body, colors))

      renderLoopRef.current = requestAnimationFrame(tick)
    }

    renderLoopRef.current = requestAnimationFrame(tick)

    // Resize handler
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
      Composite.clear(engine.world, false)
      Engine.clear(engine)
    }
  }, [checkDark])

  return (
    <div ref={containerRef} className="relative w-full h-full" data-testid="antigravity-hero">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 1 }}
      />
    </div>
  )
}
