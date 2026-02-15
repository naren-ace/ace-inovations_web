'use client'

import React from 'react'

interface BrandWordmarkProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero'
  theme?: 'dark' | 'light'
  className?: string
}

const SIZES = {
  sm:   { text: 'text-sm',  dot: 'w-[3px] h-[3px] -top-[1px]' },
  md:   { text: 'text-lg',  dot: 'w-[4px] h-[4px] -top-[2px]' },
  lg:   { text: 'text-2xl', dot: 'w-[5px] h-[5px] -top-[2px]' },
  xl:   { text: 'text-3xl sm:text-4xl', dot: 'w-[6px] h-[6px] -top-[3px]' },
  hero: { text: 'text-4xl sm:text-5xl lg:text-6xl', dot: 'w-[8px] h-[8px] -top-[4px]' },
}

export const BrandWordmark: React.FC<BrandWordmarkProps> = ({ size = 'md', theme = 'dark', className = '' }) => {
  const s = SIZES[size] || SIZES.md
  const isLight = theme === 'light'

  const aceColor = isLight ? '#5B8BFF' : '#3B6FE8'
  const novColor = isLight ? 'rgba(255,255,255,0.5)' : '#1A202C'
  const dotColor = isLight ? '#9B6FFF' : '#6D28D9'

  return (
    <div className={`flex items-baseline ${className}`} data-testid="brand-wordmark">
      <span
        className={`font-heading ${s.text} font-bold tracking-tight`}
        style={{ color: aceColor, fontFamily: "'Space Grotesk', var(--font-space-grotesk), sans-serif" }}
      >
        ACE
      </span>
      <span className="relative inline-flex flex-col items-center" style={{ color: novColor }}>
        <span
          className={`absolute ${s.dot} rounded-full`}
          style={{ backgroundColor: dotColor }}
        />
        <span
          className={`${s.text} font-extralight tracking-tight`}
          style={{ fontFamily: "'Space Grotesk', var(--font-space-grotesk), sans-serif" }}
        >
          {"\u0131"}
        </span>
      </span>
      <span
        className={`${s.text} font-extralight tracking-tight`}
        style={{ color: novColor, fontFamily: "'Space Grotesk', var(--font-space-grotesk), sans-serif" }}
      >
        novations
      </span>
    </div>
  )
}
