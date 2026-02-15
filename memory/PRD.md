# ACEinovations Website — PRD

## Original Problem Statement
Build and refine a public-facing website for "ACEinovations" — an AI-augmented engineering studio. The homepage must be fully manageable through a CMS admin panel.

## Business Focus
- Custom platform and marketplace development
- Mobile app development (native & cross-platform)
- AI-powered automation (dashboards, assistants, workflows)
- Platform optimization & scaling for existing systems
- SaaS product engineering (MVP to scale)
- Marketplace customization for existing SaaS-based marketplaces

## Tech Stack
- **Frontend**: Next.js 16 (App Router), React, TypeScript, Tailwind CSS
- **CMS**: Payload CMS v3 with **MongoDB** (migrated from PostgreSQL on Feb 15, 2026)
- **Database**: MongoDB (managed by Supervisor — auto-restarts on failure)
- **Animation**: Matter.js, Framer Motion

## What's Been Implemented

### Homepage (6 CMS-Driven Sections)
- Hero → Transition → Philosophy → What We Build (6 cards) → ACE Loop (4 steps) → Lead Magnet

### About Page (CMS-Editable via `/api/globals/about`)
- Hero, Mission & Vision (side-by-side), Values (6 cards), Contact form
- All text editable from admin under "Globals > About Page"

### Services (6 Services — CMS Collection)
- **Platform & Marketplace Development** (`/services/platform-development`)
- **Mobile App Development** (`/services/mobile-development`)
- **AI-Powered Automation** (`/services/ai-automation`)
- **Platform Optimization & Scaling** (`/services/platform-optimization`)
- **SaaS Product Engineering** (`/services/saas-engineering`)
- **Marketplace Customization** (`/services/marketplace-customization`)
- Each service page: Hero, Features (4 cards), Why Us + Deliverables, CTA
- All content editable from admin under "Content > Services"
- Dynamic navbar dropdown pulls services from CMS

### Navigation (Updated Feb 15, 2026)
- Order: **Home** → Services (dropdown) → ACE Labs → **Insights** → About
- "Home" is first nav item
- "ACE Stacks" renamed to "Insights"

### Other Pages
- **ACE Labs** (`/labs`): Hero + Bento Grid
- **Insights** (`/stacks`): Articles section (formerly "ACE Stacks")

### Admin Panel
- URL: `/ace-control-center`
- Email: admin@aceinovations.com | Password: AceAdmin2025!
- Globals: About Page, Homepage
- Collections: Services, Stacks, Media, Leads, Affiliates, Users

## Database Migration (Feb 15, 2026)
- Migrated from PostgreSQL to MongoDB to permanently fix recurring database instability
- MongoDB is managed by Supervisor (auto-restarts), eliminating the PostgreSQL crash issue
- All CMS content re-seeded via API

## Resolved Issues
- PostgreSQL instability (P0) — permanently fixed by migrating to MongoDB
- "ACE Stacks" → "Insights" rename completed
- "Home" button added as first nav item

## Backlog (P1)
- Individual article pages (`/stacks/[slug]`)
- SEO metadata optimization
- CMS editability for Insights section

## Backlog (P2)
- Contact form email notifications
- Secure CMS update access for production
