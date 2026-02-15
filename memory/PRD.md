# ACEinovations Website — PRD

## Original Problem Statement
Build and refine a public-facing website for "ACEinovations" — an AI-augmented engineering studio. The homepage must be fully manageable through a CMS admin panel. Upgraded to elite high-end consultant aesthetic.

## Business Focus
- Custom platform and marketplace development
- Mobile app development (native & cross-platform)
- AI-powered automation (dashboards, assistants, workflows)
- Platform optimization & scaling for existing systems
- SaaS product engineering (MVP to scale)
- Marketplace customization for existing SaaS-based marketplaces

## Tech Stack
- **Frontend**: Next.js 16 (App Router), React, TypeScript, Tailwind CSS
- **CMS**: Payload CMS v3 with **MongoDB**
- **Database**: MongoDB (managed by Supervisor)
- **Animation**: Matter.js, Framer Motion
- **Fonts**: Space Grotesk (headings), Inter (body)

## Design System (Updated Feb 15, 2026)
- **Light Mode**: Off-white background (#F6F7F9), navy heading text, high-contrast body
- **Dark Mode**: #0B0C15 background, Electric Blue + Neon Purple radial glows
- **Typography**: Hero H1 at 120px, Space Grotesk, letter-spacing -0.04em, Extra Bold
- **Cards**: Bento grid layout, 24px border-radius, glassmorphism (20px backdrop-blur)
- **Navbar**: Glassmorphism with blur(24px) + saturate(180%) on scroll
- **CTAs**: Electric Blue gradient with neon outer-glow shadow on hover
- **Borders**: 1px hsl(white/6%) in dark mode for subtle glass effect

## What's Been Implemented

### Homepage (CMS-Driven Sections)
- **Hero**: 120px extreme typography, gradient text, NeuralLab + AntigravityHero effects
- **Transition**: Animated keyword reveal
- **Philosophy**: CMS-editable AI-first messaging
- **What We Build**: Bento grid (6 caps) — asymmetric with wide first/last cards
- **ACE Loop (Our Process)**: Bento grid (4 steps) — asymmetric with wide first/last
- **Lead Magnet**: Free audit CTA with form

### Services
- **Listing page** (`/services`): NEW — 6 bento card tiles linking to individual service pages
- **Detail pages** (`/services/[slug]`): Hero, Features, Why Us, single CTAFooter (duplicate removed)
- **Navbar dropdown**: Shows all 6 services + "View All Services" link
- 6 services: Platform Dev, Mobile Dev, AI Automation, Platform Optimization, SaaS Engineering, Marketplace Customization

### Insights Section (Redesigned Feb 15, 2026)
- **Listing** (`/stacks`): Editorial hero, category filter pills, 3-column card grid with hover animations, newsletter CTA
- **Article Pages** (`/stacks/[slug]`): Rich text rendering, category badge, reading time, related articles
- 6 sample articles across 4 categories
- Enhanced `.insight-card` CSS class with lift + glow hover effect

### About Page
- Hero, Mission & Vision, Values (6 cards), Contact form

### Navigation
- Order: Home → Services (dropdown) → ACE Labs → Insights → About
- Glassmorphism effect when scrolled
- "View All Services" in dropdown

### Admin Panel
- URL: `/ace-control-center`
- Email: admin@aceinovations.com | Password: AceAdmin2025!

## Resolved Issues
- PostgreSQL instability → migrated to MongoDB
- "ACE Stacks" → "Insights" rename
- "Home" button added as first nav item
- Insights redesigned — removed "ACE Engine" tool references
- Duplicate CTA removed from service detail pages
- Auto-refresh issue fixed (allowedDevOrigins updated)
- Major design overhaul to elite consultant aesthetic

## Backlog (P1)
- SEO metadata optimization (meta tags, Open Graph per page)
- Newsletter subscription backend (currently frontend-only)

## Backlog (P2)
- Contact form email notifications
- Secure CMS access for production
