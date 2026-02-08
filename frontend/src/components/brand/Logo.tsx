'use client'

import Link from 'next/link'
import { LogicNodeIcon } from '@/components/brand/LogicNodeIcon'

interface LogoProps {
  size?: 'default' | 'small'
}

export const Logo: React.FC<LogoProps> = ({ size = 'default' }) => {
  const isSmall = size === 'small'
  const iconSize = isSmall ? 20 : 26

  return (
    <Link href="/" className="flex items-center gap-2.5 group" data-testid="logo-link">
      <LogicNodeIcon size={iconSize} glow={!isSmall} />
      <span className={`flex items-baseline ${isSmall ? 'text-sm' : 'text-lg'}`}>
        <span className="font-bold tracking-tight text-foreground font-heading">
          ACE
        </span>
        <span className="tracking-tight text-foreground font-heading" style={{ fontWeight: 200 }}>
          inovations
        </span>
      </span>
    </Link>
  )
}
