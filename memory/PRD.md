# ACE inovations - Product Requirements Document

## Original Problem Statement
Build and continuously enhance a multi-page tech consultancy website for "ACE inovations" with a "Clean Premium White / Scientific White" aesthetic, similar to Apple or Stripe.

## Brand Guidelines
- **Name**: ACE inovations (strictly ONE "n", lowercase "i" in inovations)
- **Logo**: Bold "ACE" in Electric Blue (#0066FF), lighter-weight lowercase "i" for "inovations" in Slate Grey
- **Palette**: Background #F9FAFB, Electric Blue (#0066FF), Deep Violet (#7C3AED), Dark Slate (#1A202C)
- **Typography**: Inter font, extra-bold weights for headings
- **Framework**: React (CRA + craco), Tailwind CSS, Framer Motion

## Button System (3 Variants)
1. **Header Dark** (`header-dark`): Dark Slate bg, white text, 1px blue border, violet glow on hover → Header/Footer CTAs
2. **Violet Shift** (`violet-shift`): Deep Violet bg, white text, mechanical glass highlight, transitions to blue on hover → Labs/Stacks pages
3. **Gradient Ghost** (`ghost-gradient`): Transparent bg, 2px gradient border (blue→violet), dark text, violet tint on hover → Home/Services secondary
- All buttons use `rounded-xl` (12px+ radius)

## Routes
- `/` - Homepage (Hero, Mission, Philosophy, ACE Engine, Squads, Process, Insights, CTA)
- `/labs` - ACE Labs (Engine Core hero, Bento grid with status pills, Philosophy)
- `/stacks` - ACE Stacks (Engineering blog + recommended tools sidebar)
- `/squads` - ACE Squads (High-Velocity Units model)
- `/growth-engineering` - Growth Engineering service page

## Architecture
```
/app/frontend/src/
├── components/
│   ├── ui/button.jsx             # 3-variant button system
│   ├── EngineCore.js             # 3D glass sphere hero visual
│   ├── ScrollSpiral.js           # SVG spiral with scroll-speed reactivity
│   ├── KeywordMarquee.js         # CSS-animated keyword marquee
│   ├── PhilosophySection.js      # AI philosophy section
│   ├── Navbar.js                 # Glassmorphism sticky header
│   ├── Footer.js                 # Global footer with CTA
│   ├── HeroSection.js            # Homepage hero
│   ├── ContactModal.js           # Contact modal (MOCKED)
│   └── ...                       # Other section components
├── pages/
│   ├── HomePage.js               # / route
│   ├── AceLabsPage.js            # /labs (Engine Core + Bento Grid)
│   ├── AceStacksPage.js          # /stacks (Articles + Tools Sidebar)
│   ├── AceSquadsPage.js          # /squads (High-Velocity Units)
│   └── GrowthEngineeringPage.js  # /growth-engineering
└── App.js                        # Router config
```

## Completed Features

### Phase 1 - Initial Build
- [x] Multi-page React app, Premium White aesthetic, all core sections

### Phase 2 - Visual Architecture
- [x] SVG Spiral Background, Keyword Marquee, Philosophy Section, ACE Squads Page, Button glow

### Phase 3 - Labs Redesign + Stacks Page (Feb 7, 2026)
- [x] ACE Labs: Engine Core hero, enhanced bento grid with status pills, spiral pulsation on hover
- [x] ACE Stacks: Article grid (6 articles), tech stack pills, "Tools that Power ACE" sidebar, affiliate disclaimer
- [x] ScrollSpiral: scroll-speed reactivity + hover pulsation

### Phase 4 - Button System (Feb 7, 2026)
- [x] Header Dark variant (Dark Slate #1A202C, blue border, violet glow hover)
- [x] Violet Shift variant (Deep Violet #7B2D8E, mechanical glass, blue hover transition)
- [x] Gradient Ghost variant (transparent, gradient border blue→violet, violet tint hover)
- [x] All buttons rounded-xl (12px+)
- [x] Applied across all pages: Header→dark, Labs/Stacks→violet, Home secondary→ghost

## Backlog
- P1: Individual article pages (clicking articles)
- P1: Contact page with real email integration
- P2: About page, Case Studies page
- P2: SEO optimization (meta, OG, sitemap)
- P3: Dark mode, Performance optimization, Careers page
