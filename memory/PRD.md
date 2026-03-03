# AceInovations - Product Requirements Document

## Original Problem Statement
Migrate the "ACE Labs" website content to a manageable CMS and fix recurring database failures. This evolved into a complete redesign and rebranding with an "elite High-End Consultant aesthetic" including extreme typography, Bento Grid layouts, glassmorphism, and specific lighting/depth effects for dark mode.

## Tech Stack
- **Frontend**: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS
- **CMS**: Payload CMS v3
- **Database**: MongoDB
- **Animation**: Framer Motion 12
- **3D Graphics**: Three.js, @react-three/fiber, @react-three/drei
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
- [x] **Page Transitions**: Fade + Slide Up animation (0.4s ease-out entry, instant exit)
- [x] **SEO Metadata**: Title template on all pages, Open Graph + Twitter card tags, og-image.jpg
- [x] **Contact Form**: Server action (console log) + saves to Payload CMS + sonner toast
- [x] **Newsletter**: NewsletterForm component on Insights page AND footer with toast
- [x] **Code Cleanup**: Fixed `<img>` -> Next.js `<Image>` in CustomSection

## Phase 4 - Hero Redesign: IDE/Developer Aesthetic (Feb 15, 2026)
- [x] **Centered Typewriter Headline**: Slow character-by-character typing (120ms/char, antigravity-style) with blinking cursor `|`, split across two lines
  - Line 1: "Engineering the Next Generation" (gradient highlight on "Next Generation")
  - Line 2: "of Digital Platforms." (starts after line 1 completes + 400ms delay)
  - Cursor hides on line 1 after it finishes, stays blinking on line 2
- [x] **Clean centered layout**: Badge, headline, subtitle, CTAs, marquee all centered
- [x] Code cards removed per user request

### Phase 5 - Scroll Effects, Auto-Refresh Fix & 3D Globe (Mar 3, 2026)
- [x] **3D Interactive Globe**: Three.js globe with dots, connection arcs, orbiting particles, equator glow ring
- [x] **Gradient Mesh Background**: Canvas-based animated gradient blobs behind globe
- [x] **Scroll Progress Bar**: Fixed gradient bar at top of page
- [x] **Scroll Reveal**: Sections slide in on scroll
- [x] **Smooth Scroll**: Global `scroll-behavior: smooth`
- [x] **Auto-Refresh Fix**: Cleaned up `allowedDevOrigins` in `next.config.mjs`

### Phase 6 - SEO Structured Data & Performance (Mar 3, 2026)
- [x] **JSON-LD Organization schema** on all pages
- [x] **JSON-LD WebSite schema** with SearchAction
- [x] **JSON-LD ItemList** on Services page
- [x] **JSON-LD Article** on each Insights article
- [x] **Marquee slowed** from 50s to 80s cycle
- [x] **Typewriter slowed** from 70ms to 120ms/char

### Phase 7 - Headline Spacing Fix (Mar 3, 2026)
- [x] **Fixed headline spacing**: Replaced leading-[1.5] with explicit responsive margin (mb-3 sm:mb-4 md:mb-5 lg:mb-7) between two headline lines for antigravity.google-style generous breathing room

## Key Architecture
```
src/
  app/(app)/
    layout.tsx          - Root layout with SEO metadata template
    actions.ts          - Server actions (contact form, newsletter)
    globals.css         - Full theme with dark mode neon card styles
  components/
    effects/
      TypewriterText.tsx    - Character-by-character typing animation
      HeroGlobe.tsx         - 3D globe with Three.js
      GradientMesh.tsx      - Animated gradient mesh background
      ScrollReveal.tsx      - Scroll-triggered animations
      ScrollProgress.tsx    - Scroll progress bar
    home/
      Hero.tsx              - Hero section with 3D globe + typewriter headline
      ContactModal.tsx      - Contact form with server action + toast
      NewsletterForm.tsx    - Newsletter subscription with toast
      KeywordMarquee.tsx    - Keyword marquee animation
    layout/
      PageTransition.tsx    - Framer Motion fade+slide
      TransitionProvider.tsx- AnimatePresence + Toaster
      Footer.tsx            - CTA + newsletter + footer links
      Navbar.tsx            - Glassmorphism nav
      StructuredData.tsx    - JSON-LD SEO data
```

## Admin Credentials
- URL: `/ace-control-center`
- Email: `admin@aceinovations.com`
- Password: `AceAdmin2025!`

## Mocked Integrations
- **Newsletter**: `subscribeNewsletter` server action logs to console only
- **Contact Form**: `submitContactForm` server action logs to console (data also saved to Payload CMS)

## Remaining / Future Tasks
- [ ] **(P1) SEO Performance Audit** - Lighthouse/Core Web Vitals optimization
- [ ] **(P2) Connect newsletter to real email service** (SendGrid/Resend)
- [ ] **(P2) Replace og-image.jpg placeholder** with branded image
- [ ] **(P3) Performance audit** - Core Web Vitals optimization
