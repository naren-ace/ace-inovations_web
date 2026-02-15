# AceInovations - Product Requirements Document

## Original Problem Statement
Migrate the "ACE Labs" website content to a manageable CMS and fix recurring database failures. This evolved into a complete redesign and rebranding with an "elite High-End Consultant aesthetic" including extreme typography, Bento Grid layouts, glassmorphism, and specific lighting/depth effects for dark mode.

## Tech Stack
- **Frontend**: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS
- **CMS**: Payload CMS v3
- **Database**: MongoDB
- **Animation**: Framer Motion 12
- **Styling**: Tailwind CSS + custom CSS variables (dark/light mode)
- **Toast**: Sonner

## Core Pages
| Page | Route | Type | SEO |
|------|-------|------|-----|
| Homepage | `/` | Client | Default title |
| Services | `/services` | Client | Layout metadata |
| Service Detail | `/services/[slug]` | Client | Layout metadata |
| Insights | `/stacks` | Server | Page metadata |
| Insight Article | `/stacks/[slug]` | Server | generateMetadata |
| About | `/about` | Client | Layout metadata |
| ACE Labs | `/labs` | Client | Layout metadata |
| ACE Squads | `/squads` | Client | Layout metadata |
| Admin | `/ace-control-center` | Payload CMS |

## Completed Features

### Phase 1 - CMS & Database (Previous sessions)
- [x] Payload CMS integration with MongoDB
- [x] Content collections: Services, Stacks (Insights), Leads, Users, Media
- [x] Homepage global content management
- [x] CMS admin panel at `/ace-control-center`

### Phase 2 - "Elite" UI Redesign (Previous session)
- [x] Complete dark/light mode theme with CSS variables
- [x] Glassmorphism navbar with backdrop blur
- [x] Bento Grid layouts for homepage sections
- [x] Extreme typography with Space Grotesk headings
- [x] Hover animations on all interactive cards
- [x] Dedicated services listing page
- [x] Redesigned Insights page with category filters
- [x] Content-flicker bug fix (Suspense loader)
- [x] Sample articles seeded for Insights

### Phase 3 - Final Polish (Feb 15, 2026)
- [x] **Page Transitions**: Fade + Slide Up animation (0.4s ease-out entry, instant exit) via Framer Motion AnimatePresence
- [x] **SEO Metadata**: Title template `%s | AceInovations - Enterprise Marketplace Development` on all pages
  - Open Graph tags with og-image.jpg placeholder
  - Twitter card metadata
  - Dynamic `generateMetadata` for insight articles
  - Per-route layout.tsx files for client component pages
- [x] **Contact Form**: Saves to Payload CMS `/api/leads` + logs via server action + sonner toast notification
- [x] **Newsletter**: Client component with server action (console log) + success toast + visual state change
  - Present on Insights page AND footer
- [x] **Code Cleanup**: Fixed `<img>` -> `<Image>` in CustomSection
- [x] **OG Image**: Placeholder at `/public/og-image.jpg` (1200x630)

## Key Architecture
```
src/
  app/(app)/
    layout.tsx          - Root layout with SEO metadata template
    actions.ts          - Server actions (contact form, newsletter)
    page.tsx            - Homepage (client component)
    services/
      layout.tsx        - SEO metadata for services
      page.tsx          - Services listing
      [slug]/page.tsx   - Service detail
    stacks/
      page.tsx          - Insights listing (server component)
      [slug]/page.tsx   - Article detail (server component, generateMetadata)
    about/layout.tsx    - SEO metadata
    labs/layout.tsx     - SEO metadata
    squads/layout.tsx   - SEO metadata
  components/
    layout/
      PageTransition.tsx     - Framer Motion fade+slide
      TransitionProvider.tsx - AnimatePresence + Toaster
      Footer.tsx             - CTA + newsletter + footer links
      Navbar.tsx             - Glassmorphism nav with services dropdown
    home/
      ContactModal.tsx       - Contact form with server action + toast
      NewsletterForm.tsx     - Newsletter subscription with toast
```

## Admin Credentials
- URL: `/ace-control-center`
- Email: `admin@aceinovations.com`
- Password: `AceAdmin2025!`

## Mocked Integrations
- **Newsletter**: `subscribeNewsletter` server action logs to console only (no email provider)
- **Contact Form**: `submitContactForm` server action logs to console (actual data also saved to Payload CMS)

## Remaining / Future Tasks
- [ ] **(P2) Connect newsletter to real email service** (e.g., SendGrid, Resend)
- [ ] **(P2) Replace og-image.jpg placeholder** with branded image
- [ ] **(P3) SEO: Structured data (JSON-LD)** for services and articles
- [ ] **(P3) Performance audit** - analyze and optimize Core Web Vitals
