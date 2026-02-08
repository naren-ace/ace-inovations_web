# ACEinovations - Product Requirements Document

## Original Problem Statement
Build a premium website for "ACEinovations" tech consultancy. The project involves creating a high-fidelity website matching a specific design prototype, with multiple iterations covering scaffolding, brand identity, content engine, and public-facing frontend pages.

## Core Requirements
- Next.js 14 (App Router) + Payload CMS + PostgreSQL
- High-fidelity UI matching the design prototype
- Light theme with premium glassmorphism design
- Framer Motion animations throughout
- Responsive design (mobile + desktop)

## Architecture
```
/app/frontend/
├── src/
│   ├── app/(app)/           # Public routes
│   │   ├── page.tsx         # Home
│   │   ├── squads/page.tsx  # ACE Squads
│   │   ├── labs/page.tsx    # ACE Labs
│   │   ├── about/page.tsx   # About
│   │   ├── stacks/          # Blog feed + slug pages
│   │   └── go/[slug]/       # Affiliate redirects
│   ├── app/(payload)/       # CMS admin
│   ├── components/
│   │   ├── layout/          # Navbar, Footer (CTAFooter)
│   │   ├── home/            # Home page sections
│   │   ├── effects/         # ScrollSpiral, MouseGlow, FluidShape
│   │   ├── brand/           # Logo, brand elements
│   │   └── ui/              # Shared UI components (Button, etc.)
│   └── styles/globals.css   # Design system
```

## What's Been Implemented

### Iteration 1-2: Scaffolding & Brand Identity (COMPLETE)
- Next.js 14 + Payload CMS + PostgreSQL setup
- Design system: colors, typography, buttons, logos

### Iteration 3: Content & Affiliate Engine (COMPLETE)
- Payload collections: Stacks, Media, Affiliates
- `/api/go/[slug]` affiliate redirect with click tracking
- FastAPI proxy for API routing

### Iteration 4: Home Page & Stacks (COMPLETE)
- Full home page with all sections
- Stacks blog feed + individual post pages

### Iteration 5-6: Squads, Labs, About Pages (COMPLETE - Dec 2025)
- `/squads` page: Hero, 3 role cards, advantage section, CTA
- `/labs` page: Hero, 3 product cards with status badges, philosophy section
- `/about` page: Hero section
- Updated Navbar: Services dropdown, dark mode toggle, active state highlighting
- Updated Footer: CTA section + multi-column footer (Services, Products, Company)
- ScrollSpiral: Background SVG line animation on all pages
- All navigation links wired to correct routes

## Pending / Backlog

### P1: Wire up Contact Modal functionality
- Form submission (email integration or API)
- Form validation

### P1: Dark mode implementation
- Toggle exists but CSS variables for dark theme need full implementation

### P2: Stacks content seeding
- Add blog content via Payload CMS admin

### P2: TypeScript migration
- Convert remaining .js components to .tsx

### P2: SEO & Meta tags
- Add proper meta tags, Open Graph, structured data

## Database Credentials
- PostgreSQL: aceadmin / acepass2025 @ localhost:5432/ace_cms
- Payload Admin: test@test.com / test

## Known Environment Issue
- PostgreSQL may stop after environment refresh. Fix: Check `service postgresql status`, recreate user/db if needed.
