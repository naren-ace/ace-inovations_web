'use client'

import { useEffect, useRef } from 'react'

export const ScrollSpiral = () => {
  const path1Ref = useRef<SVGPathElement>(null)
  const path2Ref = useRef<SVGPathElement>(null)

  useEffect(() => {
    const path1 = path1Ref.current
    const path2 = path2Ref.current
    if (!path1 || !path2) return

    const len1 = path1.getTotalLength()
    const len2 = path2.getTotalLength()

    path1.style.strokeDasharray = `${len1}`
    path1.style.strokeDashoffset = `${len1}`
    path2.style.strokeDasharray = `${len2}`
    path2.style.strokeDashoffset = `${len2}`

    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = Math.min(scrollTop / docHeight, 1)

      // Draw the path progressively
      path1.style.strokeDashoffset = `${len1 * (1 - progress)}`
      path2.style.strokeDashoffset = `${len2 * (1 - progress * 0.95)}`

      // Dynamic brightness: gets brighter as user scrolls deeper
      const brightness = 0.4 + progress * 0.35
      path1.style.opacity = `${brightness}`
      path2.style.opacity = `${brightness * 0.8}`
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none" aria-hidden="true" data-testid="scroll-spiral" style={{ zIndex: 0 }}>
      <svg className="w-full h-full" viewBox="0 0 1440 5000" preserveAspectRatio="xMidYMin slice" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          ref={path1Ref}
          d="M-50,100 C200,150 400,50 720,200 S1100,100 1490,250 C1200,400 900,300 720,500 S300,400 -50,600 C200,750 500,650 720,800 S1100,700 1490,900 C1200,1050 900,950 720,1150 S300,1050 -50,1250 C200,1400 500,1300 720,1500 S1100,1400 1490,1600 C1200,1750 900,1650 720,1850 S300,1750 -50,1950 C200,2100 500,2000 720,2200 S1100,2100 1490,2300 C1200,2450 900,2350 720,2550 S300,2450 -50,2650 C200,2800 500,2700 720,2900 S1100,2800 1490,3000 C1200,3150 900,3050 720,3250 S300,3150 -50,3350 C200,3500 500,3400 720,3600 S1100,3500 1490,3700 C1200,3850 900,3750 720,3950 S300,3850 -50,4050 C200,4200 500,4100 720,4300 S1100,4200 1490,4400 C1200,4550 900,4450 720,4650 S300,4550 -50,4750"
          stroke="url(#spiralGradient1)"
          strokeWidth="1.8"
          strokeLinecap="round"
          opacity="0.4"
          style={{ transition: 'opacity 0.5s ease' }}
        />
        <path
          ref={path2Ref}
          d="M1490,50 C1200,200 900,100 720,300 S300,200 -50,400 C200,550 500,450 720,650 S1100,550 1490,750 C1200,900 900,800 720,1000 S300,900 -50,1100 C200,1250 500,1150 720,1350 S1100,1250 1490,1450 C1200,1600 900,1500 720,1700 S300,1600 -50,1800 C200,1950 500,1850 720,2050 S1100,1950 1490,2150 C1200,2300 900,2200 720,2400 S300,2300 -50,2500 C200,2650 500,2550 720,2750 S1100,2650 1490,2850 C1200,3000 900,2900 720,3100 S300,3000 -50,3200 C200,3350 500,3250 720,3450 S1100,3350 1490,3550 C1200,3700 900,3600 720,3800 S300,3700 -50,3900 C200,4050 500,3950 720,4150 S1100,4050 1490,4250 C1200,4400 900,4300 720,4500 S300,4400 -50,4600"
          stroke="url(#spiralGradient2)"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.3"
          style={{ transition: 'opacity 0.5s ease' }}
        />
        <defs>
          <linearGradient id="spiralGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(259, 72%, 58%)" stopOpacity="0.7" />
            <stop offset="50%" stopColor="hsl(216, 100%, 50%)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="hsl(259, 72%, 58%)" stopOpacity="0.7" />
          </linearGradient>
          <linearGradient id="spiralGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(216, 100%, 50%)" stopOpacity="0.5" />
            <stop offset="50%" stopColor="hsl(259, 72%, 58%)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(216, 100%, 50%)" stopOpacity="0.5" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
