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

### Iteration 3: Content & Affiliate Engine — UPCOMING (P1)
- Create "Blog (Stacks)" Payload collection (Title, Slug, Content, Featured Image, Category)
- Create "Affiliates" Payload collection (Partner Name, Target URL, Slug, Click Count)
- Dynamic affiliate redirect route `/go/[slug]` with click counter increment

### Iteration 4: Public Frontend — FUTURE (P2)
- Home Page: Hero with "Fluid Aura" effect, Service section
- Blog Page: `/stacks` feed with dark mode design

## Architecture
```
/app/frontend/
├── payload.config.ts          # Payload CMS central config
├── tailwind.config.ts         # Brand colors & fonts
├── src/
│   ├── app/
│   │   ├── (app)/             # Public frontend
│   │   │   ├── layout.tsx     # Root layout (Inter + Outfit fonts)
│   │   │   ├── globals.css    # CSS variables + ghost-button styles
│   │   │   └── page.tsx       # Home page
│   │   └── (payload)/         # Payload admin UI
│   ├── collections/
│   │   └── Users.ts           # Users collection with roles
│   └── components/
│       ├── brand/
│       │   ├── LogicNodeIcon.tsx
│       │   └── BrandWordmark.tsx
│       └── ui/
│           └── Button.tsx
```

## Database Schema
- `users`: id, email, password (hashed), firstName, lastName, roles[], createdAt, updatedAt
- `payload_migrations`: Migration tracking
- `payload_preferences`: Admin UI preferences
