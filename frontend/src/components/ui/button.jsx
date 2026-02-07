import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors duration-200",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 transition-colors duration-200",
        outline:
          "border border-border bg-transparent text-foreground shadow-sm hover:bg-secondary hover:text-foreground transition-colors duration-200",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 transition-colors duration-200",
        ghost: "hover:bg-accent/10 hover:text-accent transition-colors duration-200",
        link: "text-primary underline-offset-4 hover:underline",
        premium:
          "bg-primary text-primary-foreground shadow-lg shadow-glow-primary hover:shadow-xl hover:shadow-glow-primary hover:bg-primary/95 transition-all duration-300",
        "outline-premium":
          "border border-border bg-transparent text-foreground hover:border-primary/30 hover:bg-primary/5 hover:text-primary transition-all duration-300",
        accent:
          "bg-accent text-accent-foreground shadow-sm hover:bg-accent/90 transition-colors duration-200",
        /* Option C: Dark Mode — Global Header "Start a Project" */
        "header-dark":
          "btn-header-dark bg-[#1A202C] text-white font-medium border border-[#0066FF] shadow-md transition-all duration-300 hover:shadow-[0_0_24px_hsl(259_72%_58%/0.45),0_0_48px_hsl(259_72%_58%/0.2)]",
        /* Option B: Violet Shift — ACE Labs & ACE Stacks */
        "violet-shift":
          "btn-violet-shift bg-[#7B2D8E] text-white font-medium shadow-md transition-all duration-400 hover:bg-[#0066FF] hover:shadow-lg",
        /* Option A: Gradient Ghost — Home & Services Secondary */
        "ghost-gradient":
          "btn-ghost-gradient bg-transparent text-[#1A202C] font-medium transition-all duration-300 hover:bg-[hsl(259_72%_58%/0.05)] hover:text-[#1A202C]",
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

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />
  );
})
Button.displayName = "Button"

export { Button, buttonVariants }
