'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { LogicNodeIcon } from '@/components/brand/LogicNodeIcon'

interface LogoProps {
  size?: 'default' | 'small'
}

export const Logo: React.FC<LogoProps> = ({ size = 'default' }) => {
  const isSmall = size === 'small'
  const iconSize = isSmall ? 20 : 26
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const check = () => setIsDark(document.documentElement.classList.contains('dark'))
    check()
    const observer = new MutationObserver(check)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    return () => observer.disconnect()
  }, [])

  const aceColor = isDark ? '#7BA3FF' : '#3B6FE8'
  const novColor = isDark ? 'rgba(255,255,255,0.75)' : '#1A202C'
  const dotColor = isDark ? '#B794F4' : '#6D28D9'

  return (
    <Link href="/" className="flex items-center gap-2.5 group" data-testid="logo-link">
      <LogicNodeIcon size={iconSize} glow={!isSmall} />
      <span className={`flex items-baseline ${isSmall ? 'text-sm' : 'text-lg'}`}>
        <span
          className="font-bold tracking-tight font-heading"
          style={{ color: aceColor, fontFamily: "'Space Grotesk', var(--font-space-grotesk), sans-serif" }}
        >
          ACE
        </span>
        <span className="relative inline-flex flex-col items-center" style={{ color: novColor }}>
          <span
            className={`absolute rounded-full ${isSmall ? 'w-[2px] h-[2px] -top-[1px]' : 'w-[3px] h-[3px] -top-[1.5px]'}`}
            style={{ backgroundColor: dotColor }}
          />
          <span
            className="font-extralight tracking-tight"
            style={{ fontFamily: "'Space Grotesk', var(--font-space-grotesk), sans-serif" }}
          >
            {"\u0131"}
          </span>
        </span>
        <span
          className="font-extralight tracking-tight"
          style={{ color: novColor, fontFamily: "'Space Grotesk', var(--font-space-grotesk), sans-serif" }}
        >
          novations
        </span>
      </span>
    </Link>
  )
}
