# ACEinovations - Product Requirements Document

## Original Problem Statement
Build a premium website for "ACEinovations" tech consultancy matching a specific design prototype at https://ace-squad-hub.preview.emergentagent.com. High-fidelity match required for every font, button color, and structure.

## Architecture
```
/app/frontend/src/
├── app/(app)/              # Public routes: /, /stacks, /labs, /squads, /about
├── app/(payload)/          # CMS admin at /admin
├── components/brand/       # LogicNodeIcon, BrandWordmark, Logo, LoadingAnimation
├── components/layout/      # Navbar (mega-menu), Footer (CTAFooter), AppShell
├── components/home/        # Hero, TransitionSection, PhilosophySection, etc.
├── components/effects/     # ScrollSpiral, MouseGlow, FluidShape
├── components/ui/          # Button, shared components
├── collections/            # Payload CMS: Stacks, Media, Affiliates, Users
└── styles/globals.css      # Design system + dark mode CSS vars
```

## What's Been Implemented

### Iterations 1-4: Core Setup (COMPLETE)
- Next.js 14 + Payload CMS + PostgreSQL
- Brand identity, collections, affiliate engine, home page, stacks feed

### Iterations 5-6: Pages + Shared Components (COMPLETE)
- /squads, /labs, /about pages matching prototype
- ScrollSpiral, CTAFooter, Navbar with mega-menu

### Brand Identity Integration (COMPLETE)
- LogicNodeIcon, BrandWordmark (themed), Logo, LoadingAnimation
- Space Grotesk font + SVG favicon

### Prototype Match Pass (COMPLETE - Dec 2025)
- Services mega-menu: 2x2 grid with icons (Globe/TrendingUp/Users/Map), descriptions, "Talk to us" footer
- ScrollSpiral: strokeWidth 1.8, dynamic brightness on scroll (0.4→0.75)
- MouseGlow: 500px radius, card-proximity detection, inner glow on hover
- Card hover effects: translateY(-4px), glow shadow, border-color transition
- Full dark mode: 40+ CSS vars, localStorage persistence, proper text contrast
- Dark mode covers: bg, cards, text, buttons, footer, borders, glass effects
- Stacks CTA button "Browse Articles" → #articles anchor
- 6 blog posts seeded, read time + Clock icon per card
- All pages verified in both light/dark modes

## Pending / Backlog

### P1: Contact Modal functionality
- Wire up form submission (email API)

### P2: SEO & Meta tags
- Open Graph, structured data per page

### P2: TypeScript migration  
- Convert remaining .js components to .tsx

## Credentials
- PostgreSQL: aceadmin / acepass2025 @ localhost:5432/ace_cms
- Payload Admin: test@test.com / test (may need re-creation after DB refresh)

## Known Environment Issue
- PostgreSQL stops after environment refresh. Fix: `apt-get install -y postgresql && service postgresql start`, recreate user/db.
