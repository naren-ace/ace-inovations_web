# ACEinovations - Product Requirements Document

## Original Problem Statement
Build a premium website for "ACEinovations" tech consultancy matching a specific design prototype at https://ace-squad-hub.preview.emergentagent.com. High-fidelity match required for every font, button color, and structure.

## Architecture
```
/app/frontend/src/
├── app/(app)/              # Public routes: /, /stacks, /labs, /squads, /about
├── app/(payload)/          # CMS admin at /admin
├── components/brand/       # LogicNodeIcon, BrandWordmark, Logo, LoadingAnimation
├── components/layout/      # Navbar, Footer (CTAFooter), AppShell
├── components/home/        # Hero, TransitionSection, PhilosophySection, AceEngineSection, etc.
├── components/effects/     # ScrollSpiral, MouseGlow, FluidShape
├── components/ui/          # Button, shared components
├── collections/            # Payload CMS: Stacks, Media, Affiliates, Users
└── styles/globals.css      # Design system + dark mode CSS variables
```

## What's Been Implemented

### Iterations 1-4: Core Setup (COMPLETE)
- Next.js 14 + Payload CMS + PostgreSQL
- Brand identity, collections, affiliate engine, home page, stacks feed

### Iterations 5-6: Pages + Shared Components (COMPLETE - Dec 2025)
- /squads, /labs, /about pages matching prototype
- Updated Navbar: Services dropdown, dark mode toggle, active state
- Updated Footer: CTA section + multi-column footer
- ScrollSpiral background animation on all pages

### Brand Identity Integration (COMPLETE - Dec 2025)
- LogicNodeIcon, BrandWordmark (themed), Logo, LoadingAnimation
- Space Grotesk font (heading font throughout)
- SVG favicon, session-based loading animation

### Prototype Match Pass (COMPLETE - Dec 2025)
- Space Grotesk replaces Outfit for all headings (globals.css, tailwind.config, layout)
- Full dark mode: CSS variables in .dark selector, localStorage persistence, toggle in navbar
- Dark mode covers: background, cards, text, buttons, footer, borders, glass effects
- Stacks page seeded with 6 blog posts matching prototype content
- Reading time with Clock icon added to stacks cards
- ScrollSpiral added to all pages including Stacks

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
- PostgreSQL stops after environment refresh. Fix: `apt-get install -y postgresql && service postgresql start`, then recreate user/db.
