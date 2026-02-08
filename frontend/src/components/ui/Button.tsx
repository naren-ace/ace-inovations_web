import React from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  href?: string
  children: React.ReactNode
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-ace-blue/50 disabled:opacity-50 disabled:cursor-not-allowed'

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-ace-slate text-white hover:bg-ace-slate/85 active:bg-ace-slate/95 transition-colors duration-200',
  secondary: 'bg-ace-violet text-white hover:bg-ace-blue active:bg-ace-blue/90 transition-all duration-400',
  ghost: 'bg-transparent text-ace-slate hover:text-ace-blue transition-colors duration-200 relative',
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  children,
  className,
  ...props
}) => {
  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${variant === 'ghost' ? 'ghost-button' : ''} ${className ?? ''}`

  if (href) {
    return (
      <a href={href} className={classes} data-testid={`btn-${variant}`}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} data-testid={`btn-${variant}`} {...props}>
      {children}
    </button>
  )
}
