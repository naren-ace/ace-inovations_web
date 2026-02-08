# ACE inovations — COMPLETE CODE EXPORT (Part 1 of 4)
# Core Config, Design System, App Entry, Button System, Logo Components
# ======================================================================

## BRAND COLORS (Exact Hex)

| Token | Hex | CSS Variable | Usage |
|-------|-----|-------------|-------|
| Deep Cobalt | #2E5BFF | — | Logo gradient start |
| Electric Blue | #0066FF | --primary: 216 100% 50% | Primary accent |
| Royal Violet | #6D28D9 | — | Logo gradient end |
| Deep Violet | #7C3AED | --accent: 259 72% 58% | Design system accent |
| Violet Shift | #7B2D8E | — | Labs/Stacks buttons |
| Dark Slate | #1A202C | --foreground: 222 47% 11% | Wordmark, header buttons |
| Soft White | #F9FAFB | --background: 210 20% 98% | Page background |
| Logic Node | #FFFFFF | — | Glowing node at logo apex |
| Node Halo | #F0F4FF | — | Inner node halo |

Primary Gradient: linear-gradient(135deg, #0066FF, #7C3AED)
Logo Gradient: #2E5BFF → #6D28D9 (bottom to top)

Fonts:
- Body: Inter (weights 300-900)
- Brand Wordmark: Space Grotesk — "ACE" weight 700, "inovations" weight 200

---

## DEPENDENCIES (package.json)

```json
{
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "react-router-dom": "^7.5.1",
  "framer-motion": "^12.33.0",
  "tailwindcss": "^3.4.17",
  "tailwindcss-animate": "^1.0.7",
  "lucide-react": "^0.507.0",
  "class-variance-authority": "^0.7.1",
  "clsx": "^2.1.1",
  "tailwind-merge": "^3.2.0",
  "@radix-ui/react-slot": "^1.2.0",
  "@radix-ui/react-dialog": "^1.1.11",
  "@radix-ui/react-separator": "^1.1.4",
  "sonner": "^2.0.3"
}
```

---

## FILE: public/favicon.svg

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
  <defs>
    <linearGradient id="fL" x1="30%" y1="100%" x2="50%" y2="0%">
      <stop offset="0%" stop-color="#2E5BFF"/>
      <stop offset="100%" stop-color="#6D28D9"/>
    </linearGradient>
    <linearGradient id="fR" x1="70%" y1="100%" x2="50%" y2="0%">
      <stop offset="0%" stop-color="#2E5BFF"/>
      <stop offset="100%" stop-color="#6D28D9"/>
    </linearGradient>
    <linearGradient id="fH" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="rgba(255,255,255,0.4)"/>
      <stop offset="40%" stop-color="rgba(255,255,255,0.08)"/>
      <stop offset="100%" stop-color="rgba(255,255,255,0.25)"/>
    </linearGradient>
    <filter id="fg" x="-80%" y="-80%" width="260%" height="260%">
      <feGaussianBlur in="SourceGraphic" stdDeviation="2.5"/>
    </filter>
  </defs>
  <path d="M 5 60 L 28 6 L 33 6 L 18 60 Z" fill="url(#fL)"/>
  <path d="M 5 60 L 28 6 L 30 6 L 11 60 Z" fill="url(#fH)" opacity="0.6"/>
  <path d="M 59 60 L 36 6 L 31 6 L 46 60 Z" fill="url(#fR)"/>
  <path d="M 59 60 L 36 6 L 34 6 L 53 60 Z" fill="url(#fH)" opacity="0.6"/>
  <circle cx="32" cy="4" r="4" fill="#6D28D9" filter="url(#fg)" opacity="0.5"/>
  <circle cx="32" cy="4" r="2" fill="#FFFFFF"/>
  <circle cx="32" cy="4" r="1" fill="#F0F4FF" opacity="0.8"/>
</svg>
```

---

## FILE: public/index.html (HEAD section only — key parts)

```html
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="#2E5BFF" />
  <meta name="description" content="ACE inovations - Engineering the Next Generation of Digital Platforms" />
  <link rel="icon" type="image/svg+xml" href="%PUBLIC_URL%/favicon.svg" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
  <title>ACE inovations | Engineering the Next Generation</title>
</head>
```

---

## FILE: tailwind.config.js

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        heading: 'hsl(var(--heading))',
        body: 'hsl(var(--body))',
        caption: 'hsl(var(--caption))',
      },
      boxShadow: {
        'xs': 'var(--shadow-xs)',
        'elevated': 'var(--shadow-elevated)',
        'glow-primary': 'var(--shadow-glow-primary)',
        'glow-accent': 'var(--shadow-glow-accent)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-up': 'fade-up 0.6s ease-out forwards',
        'fade-in': 'fade-in 0.5s ease-out forwards',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
```

---

## FILE: src/lib/utils.js

```js
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
```

---

## FILE: src/index.css (FULL DESIGN SYSTEM)

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 210 20% 98%;
    --foreground: 222 47% 11%;
    --card: 0 0% 100%;
    --card-foreground: 222 47% 11%;
    --popover: 0 0% 100%;
    --popover-foreground: 222 47% 11%;
    --primary: 216 100% 50%;
    --primary-foreground: 0 0% 100%;
    --secondary: 210 16% 96%;
    --secondary-foreground: 222 47% 11%;
    --muted: 210 16% 93%;
    --muted-foreground: 215 16% 47%;
    --accent: 259 72% 58%;
    --accent-foreground: 0 0% 100%;
    --destructive: 0 84% 60%;
    --destructive-foreground: 0 0% 98%;
    --border: 214 20% 92%;
    --input: 214 20% 92%;
    --ring: 216 100% 50%;
    --radius: 0.625rem;

    --primary-glow: 216 100% 65%;
    --accent-glow: 259 72% 72%;
    --surface-elevated: 0 0% 100%;
    --surface-glass: 0 0% 100%;
    --surface-subtle: 210 20% 97%;
    --heading: 222 47% 11%;
    --body: 215 25% 27%;
    --caption: 215 16% 47%;

    --gradient-primary: linear-gradient(135deg, hsl(216 100% 50%), hsl(259 72% 58%));
    --gradient-primary-light: linear-gradient(135deg, hsl(216 100% 50% / 0.08), hsl(259 72% 58% / 0.08));
    --gradient-subtle: linear-gradient(180deg, hsl(210 20% 98%), hsl(210 16% 96%));
    --gradient-hero-shape: linear-gradient(135deg, hsl(216 100% 50% / 0.35), hsl(259 72% 58% / 0.35));

    --shadow-xs: 0 1px 2px 0 hsl(222 47% 11% / 0.04);
    --shadow-sm: 0 1px 3px 0 hsl(222 47% 11% / 0.06), 0 1px 2px -1px hsl(222 47% 11% / 0.06);
    --shadow-md: 0 4px 6px -1px hsl(222 47% 11% / 0.05), 0 2px 4px -2px hsl(222 47% 11% / 0.05);
    --shadow-lg: 0 10px 15px -3px hsl(222 47% 11% / 0.05), 0 4px 6px -4px hsl(222 47% 11% / 0.05);
    --shadow-elevated: 0 20px 40px -12px hsl(222 47% 11% / 0.08);
    --shadow-glow-primary: 0 0 30px hsl(216 100% 50% / 0.15);
    --shadow-glow-accent: 0 0 30px hsl(259 72% 58% / 0.15);

    --transition-fast: 0.15s cubic-bezier(0.4, 0, 0.2, 1);
    --transition-smooth: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    --transition-slow: 0.5s cubic-bezier(0.4, 0, 0.2, 1);

    --chart-1: 216 100% 50%;
    --chart-2: 259 72% 58%;
    --chart-3: 173 58% 39%;
    --chart-4: 43 74% 66%;
    --chart-5: 27 87% 67%;

    --labs-glow-blue: hsl(216 100% 50% / 0.06);
    --labs-glow-violet: hsl(259 72% 58% / 0.06);
  }
}

@layer base {
  * { @apply border-border; }
  html { scroll-behavior: smooth; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
  body { @apply bg-background text-foreground; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }
  h1 { color: hsl(var(--heading)); letter-spacing: -0.035em; font-weight: 800; line-height: 1.1; }
  h2 { color: hsl(var(--heading)); letter-spacing: -0.03em; font-weight: 800; line-height: 1.15; }
  h3 { color: hsl(var(--heading)); letter-spacing: -0.02em; font-weight: 700; line-height: 1.25; }
  h4, h5, h6 { color: hsl(var(--heading)); letter-spacing: -0.015em; font-weight: 600; }
  p { color: hsl(var(--body)); line-height: 1.625; }
}

@layer components {
  .glass-card { background: hsl(var(--surface-glass) / 0.7); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border: 1px solid hsl(var(--border) / 0.6); box-shadow: var(--shadow-sm); }
  .glass-card-hover { background: hsl(var(--surface-glass) / 0.7); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border: 1px solid hsl(var(--border) / 0.6); box-shadow: var(--shadow-sm); transition: box-shadow var(--transition-smooth), border-color var(--transition-smooth), transform var(--transition-smooth); }
  .glass-card-hover:hover { box-shadow: var(--shadow-elevated); border-color: hsl(var(--border)); transform: translateY(-2px); }
  .tech-grid-bg { background-image: linear-gradient(hsl(var(--border) / 0.4) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border) / 0.4) 1px, transparent 1px); background-size: 60px 60px; }
  .section-container { @apply mx-auto max-w-7xl px-6 sm:px-8 lg:px-12; }
  .gradient-text { background: var(--gradient-primary); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }

  .labs-card-premium { background: hsl(var(--surface-glass) / 0.8); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid hsl(var(--border) / 0.5); box-shadow: var(--shadow-sm); transition: box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.4s cubic-bezier(0.4, 0, 0.2, 1), transform 0.4s cubic-bezier(0.4, 0, 0.2, 1); }
  .labs-card-premium:hover { box-shadow: var(--shadow-elevated), 0 0 40px hsl(259 72% 58% / 0.06); border-color: hsl(259 72% 58% / 0.2); transform: translateY(-4px); }

  .btn-glow { position: relative; transition: box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1), transform 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
  .btn-glow:hover { box-shadow: 0 0 20px hsl(216 100% 50% / 0.3), 0 0 40px hsl(216 100% 50% / 0.15), 0 4px 16px hsl(216 100% 50% / 0.2); transform: translateY(-1px); }

  .stacks-article-card { background: hsl(var(--card) / 0.9); border: 1px solid hsl(var(--border) / 0.5); box-shadow: var(--shadow-sm); transition: box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.4s cubic-bezier(0.4, 0, 0.2, 1), transform 0.4s cubic-bezier(0.4, 0, 0.2, 1); }
  .stacks-article-card:hover { box-shadow: var(--shadow-elevated), 0 8px 30px hsl(222 47% 11% / 0.06); border-color: hsl(var(--border)); transform: translateY(-4px); }
  .stacks-article-card:hover .stacks-article-title { background: var(--gradient-primary); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }

  .status-pill { backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); }

  .btn-header-dark { position: relative; }
  .btn-header-dark:hover { background-color: #1A202C; }

  .btn-violet-shift { position: relative; overflow: hidden; }
  .btn-violet-shift::before { content: ''; position: absolute; top: 0; left: 10%; right: 10%; height: 1px; background: linear-gradient(90deg, transparent, hsl(0 0% 100% / 0.4), transparent); pointer-events: none; }

  .btn-ghost-gradient { position: relative; background-clip: padding-box; border: 2px solid transparent; background-image: linear-gradient(hsl(var(--background)), hsl(var(--background))), linear-gradient(135deg, #0066FF, #7C3AED); background-origin: padding-box, border-box; }
  .btn-ghost-gradient:hover { background-image: linear-gradient(hsl(259 72% 58% / 0.05), hsl(259 72% 58% / 0.05)), linear-gradient(135deg, #0066FF, #7C3AED); letter-spacing: 0.01em; }
}

@layer utilities {
  @keyframes bg-breathe { 0%, 100% { background-color: hsl(210 20% 98%); } 50% { background-color: hsl(224 40% 98%); } }
  .animate-bg-breathe { animation: bg-breathe 20s ease-in-out infinite; }

  @keyframes fluid-morph { 0% { border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%; transform: rotate(0deg) scale(1); } 25% { border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%; transform: rotate(3deg) scale(1.02); } 50% { border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%; transform: rotate(-2deg) scale(0.98); } 75% { border-radius: 67% 33% 42% 58% / 38% 55% 45% 62%; transform: rotate(4deg) scale(1.01); } 100% { border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%; transform: rotate(0deg) scale(1); } }
  @keyframes float-gentle { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-12px); } }
  @keyframes pulse-soft { 0%, 100% { opacity: 0.6; } 50% { opacity: 0.9; } }

  .animate-fluid-morph { animation: fluid-morph 12s ease-in-out infinite; }
  .animate-float { animation: float-gentle 6s ease-in-out infinite; }
  .animate-pulse-soft { animation: pulse-soft 4s ease-in-out infinite; }
  .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
  .scrollbar-hide::-webkit-scrollbar { display: none; }
}
```

---

## FILE: src/components/ui/button.jsx

```jsx
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";
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
        premium: "bg-primary text-primary-foreground shadow-lg shadow-glow-primary hover:shadow-xl hover:shadow-glow-primary hover:bg-primary/95 transition-all duration-300",
        "outline-premium": "border border-border bg-transparent text-foreground hover:border-primary/30 hover:bg-primary/5 hover:text-primary transition-all duration-300",
        accent: "bg-accent text-accent-foreground shadow-sm hover:bg-accent/90 transition-colors duration-200",
        "header-dark": "btn-header-dark bg-[#1A202C] text-white font-medium border border-[#0066FF] shadow-md transition-all duration-300 hover:shadow-[0_0_24px_hsl(259_72%_58%/0.45),0_0_48px_hsl(259_72%_58%/0.2)]",
        "violet-shift": "btn-violet-shift bg-[#7B2D8E] text-white font-medium shadow-md transition-all duration-400 hover:bg-[#0066FF] hover:shadow-lg",
        "ghost-gradient": "btn-ghost-gradient bg-transparent text-[#1A202C] font-medium transition-all duration-300 hover:bg-[hsl(259_72%_58%/0.05)] hover:text-[#1A202C]",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-8 rounded-xl px-3 text-xs",
        lg: "h-12 rounded-xl px-8 text-base",
        xl: "h-14 rounded-xl px-10 text-base font-semibold",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (<Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />);
})
Button.displayName = "Button"

export { Button, buttonVariants }
```

---

## FILE: src/components/LogicNodeIcon.js

```jsx
import { motion } from 'framer-motion';

export const LogicNodeIcon = ({ size = 28, animate = false, glow = true, className = '' }) => {
  const Wrapper = animate ? motion.svg : 'svg';
  const wrapperProps = animate
    ? { initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
    : {};
  const uid = `ln-${size}`;

  return (
    <Wrapper width={size} height={size} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={`overflow-visible flex-shrink-0 ${className}`} {...wrapperProps}>
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
        {glow && (<filter id={`${uid}-ng`} x="-80%" y="-80%" width="260%" height="260%"><feGaussianBlur in="SourceGraphic" stdDeviation="5" /></filter>)}
      </defs>
      <path d="M 12 150 L 70 14 L 82 14 L 44 150 Z" fill={`url(#${uid}-gl)`} />
      <path d="M 12 150 L 70 14 L 76 14 L 28 150 Z" fill={`url(#${uid}-hl)`} opacity="0.65" />
      <path d="M 148 150 L 90 14 L 78 14 L 116 150 Z" fill={`url(#${uid}-gr)`} />
      <path d="M 148 150 L 90 14 L 84 14 L 132 150 Z" fill={`url(#${uid}-hl)`} opacity="0.65" />
      {glow && (<circle cx="80" cy="10" r="10" fill="#6D28D9" filter={`url(#${uid}-ng)`} opacity="0.4" />)}
      <circle cx="80" cy="10" r="4.5" fill="#FFFFFF" />
      <circle cx="80" cy="10" r="2" fill="#F0F4FF" opacity="0.8" />
    </Wrapper>
  );
};
```

---

## FILE: src/components/Logo.js

```jsx
import { Link } from "react-router-dom";
import { LogicNodeIcon } from "@/components/LogicNodeIcon";

export const Logo = ({ size = "default" }) => {
  const isSmall = size === "small";
  const iconSize = isSmall ? 20 : 26;

  return (
    <Link to="/" className="flex items-center gap-2.5 group" data-testid="logo-link">
      <LogicNodeIcon size={iconSize} glow={!isSmall} />
      <span className={`flex items-baseline ${isSmall ? 'text-sm' : 'text-lg'}`}>
        <span className="font-bold tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#1A202C' }}>ACE</span>
        <span className="tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 200, color: '#1A202C' }}>inovations</span>
      </span>
    </Link>
  );
};
```

---

## FILE: src/components/LoadingAnimation.js

```jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const LoadingAnimation = ({ onComplete }) => {
  const [phase, setPhase] = useState('rise');
  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase('ignite'), 1000),
      setTimeout(() => setPhase('ripple'), 1400),
      setTimeout(() => setPhase('shrink'), 2400),
      setTimeout(() => setPhase('done'), 3200),
      setTimeout(() => onComplete?.(), 3300),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden" style={{ background: '#F9FAFB' }} exit={{ opacity: 0 }} transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }} data-testid="loading-animation">
          <motion.div className="absolute rounded-full" style={{ width: 40, height: 40, border: '2px solid hsla(263, 69%, 50%, 0.25)' }} animate={{ scale: phase === 'ripple' || phase === 'shrink' ? [1, 40] : 0, opacity: phase === 'ripple' || phase === 'shrink' ? [0.6, 0] : 0 }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} />
          <motion.div className="absolute rounded-full" style={{ width: 30, height: 30, border: '1.5px solid hsla(227, 100%, 59%, 0.15)' }} animate={{ scale: phase === 'ripple' || phase === 'shrink' ? [1, 50] : 0, opacity: phase === 'ripple' || phase === 'shrink' ? [0.4, 0] : 0 }} transition={{ duration: 1.4, delay: 0.15, ease: [0.16, 1, 0.3, 1] }} />
          <motion.div className="relative flex flex-col items-center" animate={{ scale: phase === 'shrink' ? 0.18 : 1, y: phase === 'shrink' ? '-42vh' : 0, x: phase === 'shrink' ? '-38vw' : 0, opacity: phase === 'shrink' ? 0 : 1 }} transition={{ duration: phase === 'shrink' ? 0.7 : 0, ease: [0.22, 1, 0.36, 1] }}>
            <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="overflow-visible">
              <defs>
                <linearGradient id="pillarGradL" x1="30%" y1="100%" x2="50%" y2="0%"><stop offset="0%" stopColor="#2E5BFF" /><stop offset="100%" stopColor="#6D28D9" /></linearGradient>
                <linearGradient id="pillarGradR" x1="70%" y1="100%" x2="50%" y2="0%"><stop offset="0%" stopColor="#2E5BFF" /><stop offset="100%" stopColor="#6D28D9" /></linearGradient>
                <linearGradient id="bevelHL" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="rgba(255,255,255,0.4)" /><stop offset="40%" stopColor="rgba(255,255,255,0.08)" /><stop offset="100%" stopColor="rgba(255,255,255,0.25)" /></linearGradient>
                <filter id="nodeGlow" x="-100%" y="-100%" width="300%" height="300%"><feGaussianBlur in="SourceGraphic" stdDeviation="8" /></filter>
                <filter id="nodeGlowSoft" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur in="SourceGraphic" stdDeviation="4" /></filter>
              </defs>
              <motion.g initial={{ y: 180, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], opacity: { duration: 0.3 } }}>
                <path d="M 12 150 L 70 14 L 82 14 L 44 150 Z" fill="url(#pillarGradL)" />
                <path d="M 12 150 L 70 14 L 76 14 L 28 150 Z" fill="url(#bevelHL)" opacity="0.65" />
              </motion.g>
              <motion.g initial={{ y: 180, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.9, delay: 0.05, ease: [0.22, 1, 0.36, 1], opacity: { duration: 0.3 } }}>
                <path d="M 148 150 L 90 14 L 78 14 L 116 150 Z" fill="url(#pillarGradR)" />
                <path d="M 148 150 L 90 14 L 84 14 L 132 150 Z" fill="url(#bevelHL)" opacity="0.65" />
              </motion.g>
              <motion.g animate={{ opacity: phase === 'ignite' || phase === 'ripple' || phase === 'shrink' ? 1 : 0 }} transition={{ duration: 0.4, ease: 'easeOut' }}>
                <circle cx="80" cy="10" r="14" fill="#6D28D9" filter="url(#nodeGlow)" opacity="0.5" />
                <circle cx="80" cy="10" r="8" fill="#2E5BFF" filter="url(#nodeGlowSoft)" opacity="0.6" />
                <circle cx="80" cy="10" r="4.5" fill="#FFFFFF" />
                <circle cx="80" cy="10" r="2" fill="#F0F4FF" opacity="0.9" />
              </motion.g>
            </svg>
            <motion.div className="mt-6 flex items-baseline" initial={{ opacity: 0, y: 10 }} animate={{ opacity: phase === 'ripple' || phase === 'shrink' ? 1 : 0, y: phase === 'ripple' || phase === 'shrink' ? 0 : 10 }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
              <span className="text-3xl sm:text-4xl font-bold tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#1A202C' }}>ACE</span>
              <span className="text-3xl sm:text-4xl tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 200, color: '#1A202C' }}>inovations</span>
            </motion.div>
          </motion.div>
          {phase === 'shrink' && (<>{[...Array(8)].map((_, i) => { const angle = (i / 8) * Math.PI * 2; return (<motion.div key={i} className="absolute" style={{ width: 80 + Math.random() * 120, height: 60 + Math.random() * 80, background: '#F9FAFB', border: '1px solid hsla(220, 13%, 91%, 0.5)' }} initial={{ x: 0, y: 0, rotate: 0, opacity: 0.8 }} animate={{ x: Math.cos(angle) * 600, y: Math.sin(angle) * 600, rotate: Math.random() * 60 - 30, opacity: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} />); })}</>)}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
```

---

## FILE: src/App.js

```jsx
import "@/App.css";
import { useState, useCallback } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoadingAnimation } from "@/components/LoadingAnimation";
import HomePage from "@/pages/HomePage";
import AceLabsPage from "@/pages/AceLabsPage";
import AceSquadsPage from "@/pages/AceSquadsPage";
import AceStacksPage from "@/pages/AceStacksPage";
import GrowthEngineeringPage from "@/pages/GrowthEngineeringPage";
import { Toaster } from "@/components/ui/sonner";

function App() {
  const [loaded, setLoaded] = useState(false);
  const handleComplete = useCallback(() => setLoaded(true), []);

  return (
    <>
      {!loaded && <LoadingAnimation onComplete={handleComplete} />}
      <BrowserRouter>
        <Toaster position="top-right" />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/labs" element={<AceLabsPage />} />
          <Route path="/squads" element={<AceSquadsPage />} />
          <Route path="/stacks" element={<AceStacksPage />} />
          <Route path="/growth-engineering" element={<GrowthEngineeringPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
```
