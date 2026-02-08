import React from 'react'

interface LogicNodeIconProps {
  size?: number
  className?: string
}

export const LogicNodeIcon: React.FC<LogicNodeIconProps> = ({ size = 80, className }) => {
  const id = React.useId()

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      data-testid="logic-node-icon"
    >
      <defs>
        <linearGradient id={`${id}-gl`} x1="30%" y1="100%" x2="50%" y2="0%">
          <stop offset="0%" stopColor="#2E5BFF" />
          <stop offset="100%" stopColor="#7B2D8E" />
        </linearGradient>
        <linearGradient id={`${id}-gr`} x1="70%" y1="100%" x2="50%" y2="0%">
          <stop offset="0%" stopColor="#2E5BFF" />
          <stop offset="100%" stopColor="#7B2D8E" />
        </linearGradient>
        <linearGradient id={`${id}-hl`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
          <stop offset="40%" stopColor="rgba(255,255,255,0.08)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.25)" />
        </linearGradient>
        <filter id={`${id}-ng`} x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
        </filter>
      </defs>
      <path d="M 12 150 L 70 14 L 82 14 L 44 150 Z" fill={`url(#${id}-gl)`} />
      <path d="M 12 150 L 70 14 L 76 14 L 28 150 Z" fill={`url(#${id}-hl)`} opacity="0.65" />
      <path d="M 148 150 L 90 14 L 78 14 L 116 150 Z" fill={`url(#${id}-gr)`} />
      <path d="M 148 150 L 90 14 L 84 14 L 132 150 Z" fill={`url(#${id}-hl)`} opacity="0.65" />
      <circle cx="80" cy="10" r="10" fill="#7B2D8E" filter={`url(#${id}-ng)`} opacity="0.4" />
      <circle cx="80" cy="10" r="4.5" fill="#FFFFFF" />
      <circle cx="80" cy="10" r="2" fill="#F0F4FF" opacity="0.8" />
    </svg>
  )
}
