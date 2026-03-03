'use client'

import { useRef, useMemo, useEffect, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

// --- Globe dots on sphere surface ---
function GlobeDots({ count = 1400, radius = 2.0, isDark }: { count?: number; radius?: number; isDark: boolean }) {
  const meshRef = useRef<THREE.InstancedMesh>(null)
  const dummy = useMemo(() => new THREE.Object3D(), [])

  const positions = useMemo(() => {
    const pts: [number, number, number][] = []
    // Fibonacci sphere for even distribution
    const goldenAngle = Math.PI * (3 - Math.sqrt(5))
    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2
      const r = Math.sqrt(1 - y * y)
      const theta = goldenAngle * i
      pts.push([
        Math.cos(theta) * r * radius,
        y * radius,
        Math.sin(theta) * r * radius,
      ])
    }
    return pts
  }, [count, radius])

  useEffect(() => {
    if (!meshRef.current) return
    positions.forEach(([x, y, z], i) => {
      dummy.position.set(x, y, z)
      dummy.scale.setScalar(1)
      dummy.updateMatrix()
      meshRef.current!.setMatrixAt(i, dummy.matrix)
    })
    meshRef.current.instanceMatrix.needsUpdate = true
  }, [positions, dummy])

  const color = isDark ? '#4d94ff' : '#4f46e5'

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[0.012, 6, 6]} />
      <meshBasicMaterial color={color} transparent opacity={isDark ? 0.55 : 0.4} />
    </instancedMesh>
  )
}

// --- Shared arc curve generator ---
function useArcCurves(radius: number) {
  return useMemo(() => {
    const cityCoords = [
      [40.7, -74.0], [51.5, -0.1], [35.7, 139.7], [28.6, 77.2],
      [-33.9, 151.2], [37.8, -122.4], [1.3, 103.8], [48.9, 2.3],
      [55.7, 37.6], [-23.5, -46.6], [22.3, 114.2], [52.5, 13.4],
    ]

    const latLngToVec = (lat: number, lng: number, r: number) => {
      const phi = (90 - lat) * (Math.PI / 180)
      const theta = (lng + 180) * (Math.PI / 180)
      return new THREE.Vector3(
        -r * Math.sin(phi) * Math.cos(theta),
        r * Math.cos(phi),
        r * Math.sin(phi) * Math.sin(theta)
      )
    }

    const pairs: { start: THREE.Vector3; end: THREE.Vector3 }[] = []
    const usedPairs = new Set<string>()
    for (let i = 0; i < 8; i++) {
      const a = i % cityCoords.length
      const b = (i + 3 + Math.floor(i / 2)) % cityCoords.length
      const key = `${Math.min(a, b)}-${Math.max(a, b)}`
      if (a !== b && !usedPairs.has(key)) {
        usedPairs.add(key)
        pairs.push({
          start: latLngToVec(cityCoords[a][0], cityCoords[a][1], radius),
          end: latLngToVec(cityCoords[b][0], cityCoords[b][1], radius),
        })
      }
    }

    const curves = pairs.map(({ start, end }) => {
      const mid = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5)
      const dist = start.distanceTo(end)
      mid.normalize().multiplyScalar(radius + dist * 0.35)
      return new THREE.QuadraticBezierCurve3(start, mid, end)
    })

    const curvePoints = curves.map(c => c.getPoints(48))

    return { curves, curvePoints }
  }, [radius])
}

// --- Connection arcs between points ---
function ConnectionArcs({ radius = 2.0, isDark }: { radius?: number; isDark: boolean }) {
  const groupRef = useRef<THREE.Group>(null)
  const { curvePoints } = useArcCurves(radius)
  const color = isDark ? '#6366f1' : '#818cf8'

  return (
    <group ref={groupRef}>
      {curvePoints.map((pts, i) => (
        <line key={i}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={pts.length}
              array={new Float32Array(pts.flatMap(p => [p.x, p.y, p.z]))}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial color={color} transparent opacity={isDark ? 0.4 : 0.3} linewidth={1} />
        </line>
      ))}
    </group>
  )
}

// --- Data pulse dots traveling along arcs ---
function DataPulses({ radius = 2.0, isDark }: { radius?: number; isDark: boolean }) {
  const { curves } = useArcCurves(radius)
  const meshRef = useRef<THREE.InstancedMesh>(null)
  const dummy = useMemo(() => new THREE.Object3D(), [])

  // Each arc gets 2 pulses at staggered offsets
  const pulseCount = curves.length * 2

  const pulseMeta = useMemo(() => {
    return Array.from({ length: pulseCount }, (_, i) => ({
      curveIdx: Math.floor(i / 2),
      speed: 0.15 + Math.random() * 0.1,
      offset: (i % 2) * 0.5, // stagger the two pulses per arc
    }))
  }, [pulseCount])

  useFrame(({ clock }) => {
    if (!meshRef.current) return
    const t = clock.getElapsedTime()

    for (let i = 0; i < pulseCount; i++) {
      const { curveIdx, speed, offset } = pulseMeta[i]
      const curve = curves[curveIdx]
      // Progress along curve (0 -> 1, looping)
      const progress = ((t * speed + offset) % 1)
      const point = curve.getPoint(progress)

      dummy.position.copy(point)
      // Scale pulse: larger in the middle of the arc, smaller at ends
      const scaleFactor = Math.sin(progress * Math.PI) * 1.5 + 0.5
      dummy.scale.setScalar(scaleFactor)
      dummy.updateMatrix()
      meshRef.current.setMatrixAt(i, dummy.matrix)
    }
    meshRef.current.instanceMatrix.needsUpdate = true
  })

  const color = isDark ? '#60a5fa' : '#818cf8'

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, pulseCount]}>
      <sphereGeometry args={[0.025, 8, 8]} />
      <meshBasicMaterial color={color} transparent opacity={isDark ? 0.9 : 0.65} />
    </instancedMesh>
  )
}

// --- Orbiting particles ---
function OrbitingParticles({ count = 120, radius = 2.0, isDark }: { count?: number; radius?: number; isDark: boolean }) {
  const pointsRef = useRef<THREE.Points>(null)

  const { positions, speeds, offsets } = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const spd = new Float32Array(count)
    const off = new Float32Array(count)
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const r = radius + (Math.random() - 0.5) * 0.6
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = r * Math.cos(phi)
      pos[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta)
      spd[i] = 0.08 + Math.random() * 0.15
      off[i] = Math.random() * Math.PI * 2
    }
    return { positions: pos, speeds: spd, offsets: off }
  }, [count, radius])

  useFrame(({ clock }) => {
    if (!pointsRef.current) return
    const posAttr = pointsRef.current.geometry.attributes.position as THREE.BufferAttribute
    const t = clock.getElapsedTime()
    for (let i = 0; i < count; i++) {
      const angle = t * speeds[i] + offsets[i]
      const x = positions[i * 3]
      const y = positions[i * 3 + 1]
      const z = positions[i * 3 + 2]
      const r = Math.sqrt(x * x + z * z)
      posAttr.setXYZ(i,
        r * Math.cos(angle),
        y + Math.sin(t * 0.3 + offsets[i]) * 0.1,
        r * Math.sin(angle),
      )
    }
    posAttr.needsUpdate = true
  })

  const color = isDark ? '#a78bfa' : '#6366f1'

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color={color} size={isDark ? 0.03 : 0.025} sizeAttenuation transparent opacity={isDark ? 0.7 : 0.5} />
    </points>
  )
}

// --- Glow ring around the equator ---
function GlowRing({ radius = 2.0, isDark }: { radius?: number; isDark: boolean }) {
  const ringRef = useRef<THREE.Mesh>(null)
  useFrame(({ clock }) => {
    if (ringRef.current) {
      ringRef.current.rotation.x = Math.PI / 2 + Math.sin(clock.getElapsedTime() * 0.15) * 0.05
    }
  })

  return (
    <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
      <ringGeometry args={[radius + 0.02, radius + 0.04, 128]} />
      <meshBasicMaterial
        color={isDark ? '#4d94ff' : '#6366f1'}
        transparent
        opacity={isDark ? 0.25 : 0.15}
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}

// --- Main scene with mouse-reactive rotation ---
function GlobeScene({ isDark }: { isDark: boolean }) {
  const groupRef = useRef<THREE.Group>(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const { size } = useThree()

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / size.width - 0.5) * 2
      mouseRef.current.y = (e.clientY / size.height - 0.5) * 2
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [size])

  useFrame(({ clock }) => {
    if (!groupRef.current) return
    const t = clock.getElapsedTime()
    // Slow auto-rotation + mouse influence
    groupRef.current.rotation.y = t * 0.06 + mouseRef.current.x * 0.15
    groupRef.current.rotation.x = -0.15 + mouseRef.current.y * 0.08
  })

  return (
    <group ref={groupRef}>
      {/* Transparent inner sphere for ambient occlusion feel */}
      <mesh>
        <sphereGeometry args={[1.95, 32, 32]} />
        <meshBasicMaterial
          color={isDark ? '#0a0e27' : '#e8ecf4'}
          transparent
          opacity={isDark ? 0.5 : 0.3}
        />
      </mesh>

      <GlobeDots isDark={isDark} />
      <ConnectionArcs isDark={isDark} />
      <DataPulses isDark={isDark} />
      <OrbitingParticles isDark={isDark} />
    </group>
  )
}

export function HeroGlobe() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const check = () => setIsDark(document.documentElement.classList.contains('dark'))
    check()
    const observer = new MutationObserver(check)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    return () => observer.disconnect()
  }, [])

  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 2 }}
      data-testid="hero-globe"
    >
      <Canvas
        camera={{ position: [0, 0, 6.5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ pointerEvents: 'auto' }}
      >
        <ambientLight intensity={0.3} />
        <GlobeScene isDark={isDark} />
      </Canvas>
    </div>
  )
}
