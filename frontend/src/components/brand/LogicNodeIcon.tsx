'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface LogicNodeIconProps {
  size?: number
  animate?: boolean
  glow?: boolean
  className?: string
}

export const LogicNodeIcon: React.FC<LogicNodeIconProps> = ({ size = 28, animate = false, glow = true, className = '' }) => {
  const uid = `ln-${size}`
  const Wrapper = animate ? motion.svg : 'svg'
  const wrapperProps = animate
    ? { initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
    : {}

  return (
    <Wrapper
      width={size}
      height={size}
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`overflow-visible flex-shrink-0 ${className}`}
      data-testid="logic-node-icon"
      {...wrapperProps}
    >
      <defs>
        <linearGradient id={`${uid}-gl`} x1="30%" y1="100%" x2="50%" y2="0%">
          <stop offset="0%" stopColor="#2E5BFF" /><stop offset="100%" stopColor="#6D28D9" />
        </linearGradient>
        <linearGradient id={`${uid}-gr`} x1="70%" y1="100%" x2="50%" y2="0%">
          <stop offset="0%" stopColor="#2E5BFF" /><stop offset="100%" stopColor="#6D28D9" />
        </linearGradient>
        <linearGradient id={`${uid}-hl`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
          <stop offset="40%" stopColor="rgba(255,255,255,0.08)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.25)" />
        </linearGradient>
        {glow && (
          <filter id={`${uid}-ng`} x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
          </filter>
        )}
      </defs>
      <path d="M 12 150 L 70 14 L 82 14 L 44 150 Z" fill={`url(#${uid}-gl)`} />
      <path d="M 12 150 L 70 14 L 76 14 L 28 150 Z" fill={`url(#${uid}-hl)`} opacity="0.65" />
      <path d="M 148 150 L 90 14 L 78 14 L 116 150 Z" fill={`url(#${uid}-gr)`} />
      <path d="M 148 150 L 90 14 L 84 14 L 132 150 Z" fill={`url(#${uid}-hl)`} opacity="0.65" />
      {glow && <circle cx="80" cy="10" r="10" fill="#6D28D9" filter={`url(#${uid}-ng)`} opacity="0.4" />}
      <circle cx="80" cy="10" r="4.5" fill="#FFFFFF" />
      <circle cx="80" cy="10" r="2" fill="#F0F4FF" opacity="0.8" />
    </Wrapper>
  )
}
