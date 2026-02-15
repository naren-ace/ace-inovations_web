import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors duration-200",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 transition-colors duration-200",
        outline: "border border-border bg-transparent text-foreground shadow-sm hover:bg-secondary hover:text-foreground transition-colors duration-200",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 transition-colors duration-200",
        ghost: "hover:bg-accent/10 hover:text-accent transition-colors duration-200",
        link: "text-primary underline-offset-4 hover:underline",
        premium: "bg-gradient-to-r from-[#0070f3] to-[#00a6ff] text-white shadow-lg shadow-[0_0_20px_rgba(0,112,243,0.3)] hover:shadow-[0_0_30px_rgba(0,112,243,0.5)] hover:brightness-110 transition-all duration-300",
        "outline-premium": "border border-border bg-transparent text-foreground hover:border-primary/30 hover:bg-primary/5 hover:text-primary transition-all duration-300",
        accent: "bg-accent text-accent-foreground shadow-sm hover:bg-accent/90 transition-colors duration-200",
        "header-dark": "btn-header-dark bg-[#1a1a1a] text-white font-medium border border-white/10 shadow-sm transition-all duration-300 hover:bg-[#2a2a2a] hover:-translate-y-0.5 hover:shadow-md",
        "labs-indigo": "bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white shadow-lg shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:brightness-110 transition-all duration-300",
        "violet-shift": "btn-violet-shift bg-[#7B2D8E] text-white font-medium shadow-md transition-all duration-400 hover:bg-[#0066FF] hover:shadow-lg",
        "ghost-gradient": "btn-ghost-gradient bg-transparent text-foreground font-medium transition-all duration-300 border border-border/60 hover:border-primary/30 hover:bg-primary/5",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-8 rounded-xl px-3 text-xs",
        lg: "h-12 rounded-xl px-8 text-base",
        xl: "h-14 rounded-xl px-10 text-base font-semibold",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
