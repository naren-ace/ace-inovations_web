# ACE inovations - Product Requirements Document

## Original Problem Statement
Build and continuously enhance a multi-page tech consultancy website for "ACE inovations" with a "Clean Premium White / Scientific White" aesthetic, similar to Apple or Stripe.

## Brand Guidelines
- **Name**: ACE inovations (strictly ONE "n", lowercase "i" in inovations)
- **Logo**: LogicNodeIcon — two gradient pillars (blue→violet) forming an inverted V with a glowing white apex node
- **Wordmark**: Space Grotesk — "ACE" weight 700, "inovations" weight 200, Dark Slate (#1A202C)
- **Favicon**: SVG version of LogicNodeIcon
- **Loading**: Pillars rise → node ignites → violet ripple → shatter → page reveals
- **Palette**: #F9FAFB (bg), #2E5BFF (Deep Cobalt), #6D28D9 (Royal Violet), #1A202C (Dark Slate)
- **Typography**: Inter (body), Space Grotesk (brand wordmark)

## Button System (3 Variants)
1. **Header Dark** (`header-dark`): Dark Slate bg, blue border, violet glow hover → Header/Footer CTAs
2. **Violet Shift** (`violet-shift`): Deep Violet bg, mechanical glass, blue hover → Labs/Stacks
3. **Gradient Ghost** (`ghost-gradient`): Transparent, gradient border, violet tint hover → Home/Services secondary

## Routes
- `/` - Homepage
- `/labs` - ACE Labs (Engine Core hero + Bento Grid)
- `/stacks` - ACE Stacks (Engineering blog + tools sidebar)
- `/squads` - ACE Squads (High-Velocity Units)
- `/growth-engineering` - Growth Engineering service

## Key Components
- `LogicNodeIcon.js` — Reusable SVG logo (navbar size=26, footer size=20 glow=false)
- `LoadingAnimation.js` — Full-screen loading with 5 phases (rise→ignite→ripple→shrink→done)
- `EngineCore.js` — 3D glass sphere for Labs hero
- `ScrollSpiral.js` — SVG spiral with scroll-speed reactivity + Labs hover pulsation
- `KeywordMarquee.js` — CSS-animated horizontal keyword ticker

## Completed Features
- [x] Phase 1: Multi-page app, Premium White aesthetic, all core sections
- [x] Phase 2: SVG Spiral, Keyword Marquee, Philosophy Section, ACE Squads Page
- [x] Phase 3: Labs redesign (Engine Core), ACE Stacks page, ScrollSpiral enhancement
- [x] Phase 4: 3-variant button system (header-dark, violet-shift, ghost-gradient)
- [x] Phase 5: Logo Integration Kit (LogicNodeIcon, LoadingAnimation, favicon, Space Grotesk wordmark)

## Backlog
- P1: Individual article pages (clicking ACE Stacks articles)
- P1: Contact page with real email integration
- P2: About page, Case Studies page
- P2: SEO optimization (meta, OG, sitemap)
- P3: Dark mode, Performance optimization, Careers page
