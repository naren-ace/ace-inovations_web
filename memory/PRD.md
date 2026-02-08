# ACEinovations — Product Requirements Document

## Problem Statement
Build the ACEinovations digital platform as a Next.js 16 + Payload CMS 3.x monolith with PostgreSQL, porting the exact prototype design from the `ace-prototype` GitHub branch.

## Tech Stack
- **Framework:** Next.js 16.1.6 (App Router, Turbopack)
- **CMS:** Payload CMS 3.75+
- **Database:** PostgreSQL 15
- **Language:** TypeScript
- **CSS:** Tailwind CSS 3.4 + CSS Variables design system
- **Fonts:** Inter (body), Outfit (headings) via `next/font/google`
- **Animation:** Framer Motion 12
- **UI Libraries:** class-variance-authority, @radix-ui/react-slot, lucide-react, tailwind-merge

## Brand Identity
- **Electric Blue:** `#0066FF` (primary accent)
- **Deep Cobalt:** `#2E5BFF` (logo gradient start)
- **Royal Violet:** `#6D28D9` (logo gradient end)
- **Deep Violet:** `#7C3AED` (accent)
- **Violet Shift:** `#7B2D8E` (Labs/Stacks buttons)
- **Dark Slate:** `#1A202C` (header-dark buttons, wordmark)
- **Primary Gradient:** `linear-gradient(135deg, #0066FF, #7C3AED)`

## Completed Iterations

### Iteration 1: Core Architecture — COMPLETE
- Next.js 16 + Payload CMS 3.x monolith, PostgreSQL, Users with roles, /admin panel

### Iteration 2: Brand Identity — COMPLETE
- Tailwind design system, Inter + Outfit fonts, Button component (3 variants)

### Iteration 3: Content & Affiliate Engine — COMPLETE
- Media, Stacks (Blog), Affiliates collections with full CRUD
- `/go/[slug]` redirect with atomic clickCount, 302 status, 404→home redirect

### Iteration 4: Public Frontend + Prototype Port — COMPLETE
- Full visual port from ace-prototype GitHub branch
- **Homepage sections:** Hero (FluidShape glass blob, gradient text, status pill), KeywordMarquee, TransitionSection, PhilosophySection, AceEngineSection (4 cards + tech-grid), AceSquadsSection (3 pillars), AceLoop (3-step process), CTASection, Footer
- **Effects:** MouseGlow cursor, FluidShape animated glass, StickySection parallax
- **Interactions:** ContactModal, scroll-aware Navbar with backdrop-blur
- **Button variants:** header-dark, violet-shift, ghost-gradient, premium, outline-premium
- **Stacks pages:** Dark mode blog feed + individual post pages

## Architecture
```
/app/frontend/
├── payload.config.ts
├── tailwind.config.ts
├── src/
│   ├── app/(app)/
│   │   ├── layout.tsx, globals.css, page.tsx
│   │   ├── go/[slug]/route.ts
│   │   └── stacks/ (layout, page, [slug]/page)
│   ├── app/(payload)/
│   ├── collections/ (Users, Media, Stacks, Affiliates)
│   ├── components/
│   │   ├── brand/ (LogicNodeIcon, BrandWordmark, Logo)
│   │   ├── effects/ (MouseGlow, FluidShape)
│   │   ├── home/ (Hero, KeywordMarquee, TransitionSection, PhilosophySection, AceEngineSection, AceSquadsSection, AceLoop, CTASection, StickySection, ContactModal)
│   │   ├── layout/ (Navbar, Footer)
│   │   └── ui/ (Button)
│   └── lib/ (utils, payload)
/app/backend/
└── server.py (FastAPI proxy)
```

## Future/Backlog
- Role-based access control
- SEO metadata on Stacks
- RSS feed for /stacks
- Affiliate analytics dashboard
- Dark/light mode toggle
- Contact form backend integration (email delivery)
