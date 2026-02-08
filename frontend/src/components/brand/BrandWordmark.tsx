import React from 'react'

interface BrandWordmarkProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizeMap = {
  sm: 'text-2xl sm:text-3xl',
  md: 'text-3xl sm:text-4xl',
  lg: 'text-4xl sm:text-5xl',
}

const dotSizeMap = {
  sm: 'w-[4px] h-[4px] -top-[2px]',
  md: 'w-[5px] h-[5px] -top-[2.5px]',
  lg: 'w-[6px] h-[6px] -top-[3px]',
}

export const BrandWordmark: React.FC<BrandWordmarkProps> = ({ size = 'lg', className }) => {
  const textClass = sizeMap[size]
  const dotClass = dotSizeMap[size]

  return (
    <div className={`flex items-baseline ${className ?? ''}`} data-testid="brand-wordmark">
      <span className={`${textClass} font-extrabold tracking-tight text-ace-blue font-heading`}>
        ACE
      </span>
      <span className="relative inline-flex flex-col items-center text-gray-400">
        <span className={`absolute rounded-full bg-ace-violet ${dotClass}`} />
        <span className={`${textClass} font-extralight tracking-tight font-heading`}>
          {"\u0131"}
        </span>
      </span>
      <span className={`${textClass} font-extralight tracking-tight text-gray-400 font-heading`}>
        novations
      </span>
    </div>
  )
}
