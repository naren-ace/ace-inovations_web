# ACEinovations — Product Requirements Document

## Problem Statement
Build the ACEinovations digital platform as a Next.js 16 + Payload CMS 3.x monolith with PostgreSQL.

## Tech Stack
- **Framework:** Next.js 16.1.6 (App Router, Turbopack)
- **CMS:** Payload CMS 3.75+
- **Database:** PostgreSQL 15
- **Language:** TypeScript
- **CSS:** Tailwind CSS 3.4
- **Fonts:** Inter (body), Outfit (headings) via `next/font/google`
- **Animation:** Framer Motion 12

## Brand Identity
- **Primary Color (Electric Blue):** `#3B6FE8`
- **Secondary Color (Deep Violet):** `#7B2D8E`
- **Accent (Cobalt):** `#2E5BFF`
- **Dark (Slate):** `#1A202C`

## Iteration Plan

### Iteration 1: Core Architecture & Database — COMPLETE
- Next.js 16 + Payload CMS 3.x monolith initialized
- PostgreSQL database connected
- Users collection with `roles` array field
- `/admin` route serves Payload admin panel
- Route groups: `(app)` for frontend, `(payload)` for admin

### Iteration 2: Brand Identity & Theme Engine — COMPLETE
- Tailwind CSS configured with brand colors (ace-blue, ace-violet, ace-cobalt, ace-slate)
- Typography: Inter (body) + Outfit (headings) via next/font/google
- Reusable `LogicNodeIcon` component (`src/components/brand/LogicNodeIcon.tsx`)
- Reusable `BrandWordmark` component (`src/components/brand/BrandWordmark.tsx`)
- Reusable `Button` component with 3 variants (`src/components/ui/Button.tsx`):
  - Primary: Dark Slate background
  - Secondary: Deep Violet with 0.4s "Power-On" transition to Electric Blue on hover
  - Ghost: Gradient border (blue → violet)

### Iteration 3: Content & Affiliate Engine — COMPLETE
- **Media Collection** — Image uploads with thumbnail/card/hero sizes
- **Stacks (Blog) Collection** — Title, auto-slug, Category (AI Strategy/Engineering/Case Studies/Field Notes), Featured Image, Excerpt, Rich Text Content, Draft/Published status
- **Affiliates Collection** — Partner Name, Target URL, Slug, Active toggle, Category Tag (Cloud/AI Tools/Software/Infrastructure/Analytics), Internal Description, Click Count (read-only, auto-incremented)
- **Redirect Route `/go/[slug]`** — 302 redirect, atomic SQL clickCount increment, redirects to home for 404/inactive
- **Backend Proxy** — FastAPI on port 8001 forwards `/api/*` to Next.js (port 3000) for Payload REST API access

### Iteration 4: Public Frontend — COMPLETE
- **Home Page** — Navbar, Hero with "Fluid Aura" animated gradient blobs (CSS-only), Services section (4 cards)
- **Stacks Feed (`/stacks`)** — Dark mode (#0C0E14) blog feed with colored category badges, excerpts, dates
- **Individual Post (`/stacks/[slug]`)** — Dark mode post page with rich text rendering, back navigation
- **Dark Mode Layout** — Dedicated stacks layout wrapper for "Technical Knowledge Base" vibe
- **Components** — Navbar, Hero, ServiceGrid, stacks dark navbar

## Architecture
```
/app/frontend/
├── payload.config.ts          # Payload CMS central config (4 collections)
├── tailwind.config.ts         # Brand colors & fonts
├── src/
│   ├── app/
│   │   ├── (app)/             # Public frontend
│   │   │   ├── layout.tsx     # Root layout (Inter + Outfit fonts)
│   │   │   ├── globals.css    # Fluid Aura + ghost-button + animations
│   │   │   ├── page.tsx       # Home (Navbar + Hero + Services)
│   │   │   ├── go/[slug]/route.ts  # Affiliate redirect (302 + atomic click)
│   │   │   └── stacks/
│   │   │       ├── layout.tsx      # Dark mode wrapper
│   │   │       ├── page.tsx        # Blog feed
│   │   │       └── [slug]/page.tsx # Individual post
│   │   └── (payload)/         # Payload admin UI
│   ├── collections/
│   │   ├── Users.ts, Media.ts, Stacks.ts, Affiliates.ts
│   └── components/
│       ├── brand/   (LogicNodeIcon, BrandWordmark)
│       ├── home/    (Hero, ServiceGrid)
│       ├── layout/  (Navbar)
│       └── ui/      (Button)
/app/backend/
└── server.py                  # FastAPI proxy (/api/* → Next.js:3000)
```

## Database Schema
- `users`: id, email, password (hashed), firstName, lastName, roles[], createdAt, updatedAt
- `media`: id, filename, alt, mimeType, filesize, width, height, sizes{}, createdAt, updatedAt
- `stacks`: id, title, slug (unique), category, featuredImage (→media), excerpt, content (richText), status, createdAt, updatedAt
- `affiliates`: id, partnerName, targetUrl, slug (unique), active, categoryTag, description, clickCount, createdAt, updatedAt
- `payload_migrations`, `payload_preferences`: Payload internals
