'use client'

import Link from 'next/link'
import { LogicNodeIcon } from '@/components/brand/LogicNodeIcon'

interface LogoProps {
  size?: 'default' | 'small'
  theme?: 'dark' | 'light'
}

export const Logo: React.FC<LogoProps> = ({ size = 'default', theme = 'dark' }) => {
  const isSmall = size === 'small'
  const iconSize = isSmall ? 20 : 26
  const isLight = theme === 'light'

  const aceColor = isLight ? '#5B8BFF' : '#3B6FE8'
  const novColor = isLight ? 'rgba(255,255,255,0.5)' : '#1A202C'
  const dotColor = isLight ? '#9B6FFF' : '#6D28D9'

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
