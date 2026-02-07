# ACE inovations - Product Requirements Document

## Original Problem Statement
Build and continuously enhance a multi-page tech consultancy website for "ACE inovations" with a "Clean Premium White / Scientific White" aesthetic, similar to Apple or Stripe.

## Brand Guidelines
- **Name**: ACE inovations (strictly ONE "n", lowercase "i" in inovations)
- **Logo**: Bold "ACE" in Electric Blue (#0066FF), lighter-weight lowercase "i" for "inovations" in Slate Grey
- **Palette**: Background #F9FAFB (Soft White), Electric Blue (#0066FF), Deep Violet (#7C3AED)
- **Typography**: Inter font, extra-bold weights for headings
- **Framework**: React (CRA + craco), Tailwind CSS, Framer Motion

## Architecture
```
/app/frontend/src/
├── components/
│   ├── AceEngineSection.js       # ACE Intelligence Layer section
│   ├── AceLabsSection.js         # Labs teaser section
│   ├── AceLoop.js                # Process steps (Discover, Execute, Optimize)
│   ├── AceSquadsSection.js       # Squads section on homepage
│   ├── CTASection.js             # About / CTA section
│   ├── ContactModal.js           # Contact form modal (mocked submission)
│   ├── EngineCore.js             # 3D glass sphere hero visual for Labs
│   ├── FluidShape.js             # Animated fluid shape in homepage hero
│   ├── Footer.js                 # Global footer with CTA band
│   ├── HeroSection.js            # Homepage hero with keyword marquee
│   ├── InsightsSection.js        # Blog/insights horizontal scroll
│   ├── KeywordMarquee.js         # CSS-animated keyword marquee
│   ├── KeywordMarquee.css        # Marquee CSS animation
│   ├── Logo.js                   # Brand logo component
│   ├── MouseGlow.js              # Mouse-follow purple glow
│   ├── Navbar.js                 # Glassmorphism sticky header with mega menu
│   ├── PhilosophySection.js      # AI philosophy section
│   ├── ScrollSpiral.js           # SVG spiral background with scroll-speed reactivity
│   ├── ServiceArchitecture.js    # Service architecture component
│   ├── StickySection.js          # Scroll-based sticky section wrapper
│   └── TransitionSection.js      # Mission statement section
├── pages/
│   ├── HomePage.js               # / route
│   ├── AceLabsPage.js            # /labs route (Engine Core hero + Bento Grid)
│   ├── AceSquadsPage.js          # /squads route (High-Velocity Units)
│   ├── AceStacksPage.js          # /stacks route (Engineering Blog + Sidebar)
│   └── GrowthEngineeringPage.js  # /growth-engineering route
└── App.js                        # Router configuration
```

## Routes
- `/` - Homepage (Hero, Mission, Philosophy, ACE Engine, Squads, Process, Insights, CTA)
- `/labs` - ACE Labs (Engine Core hero, Bento grid with 3 products, Philosophy)
- `/stacks` - ACE Stacks (Engineering blog articles + recommended tools sidebar)
- `/squads` - ACE Squads (High-Velocity Units model)
- `/growth-engineering` - Growth Engineering service page

## Implemented Features (All Complete)

### Phase 1 - Initial Build
- [x] Multi-page React app with react-router-dom
- [x] Clean Premium White aesthetic
- [x] Glassmorphism sticky header with mega menu
- [x] Fluid Shape hero section
- [x] ACE Engine section
- [x] ACE Squads section (homepage)
- [x] ACE Loop process section
- [x] Insights horizontal scroll section
- [x] Growth Engineering service page
- [x] Global CTA footer
- [x] Contact modal (mocked)
- [x] Framer Motion animations throughout
- [x] Mouse-follow glow effect
- [x] Branding: "ACE inovations" with stylized lowercase "i"

### Phase 2 - Visual Architecture Enhancement
- [x] SVG Spiral Background "Gap Filler" - scroll-reactive thin line animation
- [x] Updated hero sub-headline, keyword marquee replacing metrics
- [x] Philosophy Section on homepage
- [x] ACE Squads Page (/squads) - "High-Velocity Units" concept
- [x] Button glow effect on hover
- [x] Navigation and footer updated

### Phase 3 - ACE Labs Redesign + ACE Stacks (Feb 7, 2026)
- [x] ACE Labs page redesigned with Engine Core 3D glass sphere hero
- [x] Bento Grid enhanced with bordered status pills (Internal Beta, In Development, R&D Phase)
- [x] Labs card hover triggers ScrollSpiral pulsation with Electric Blue
- [x] NEW ACE Stacks page (/stacks) - "Field Notes from the Frontline"
  - Two-column article grid with 6 technical articles
  - Tech stack pill visuals on each article (Next.js, Tailwind, etc.)
  - Category meta with // prefix format
  - Hover: shadow lift + title shifts to violet gradient
- [x] Sidebar: "The Tools that Power ACE" with 7 verified tools
- [x] Affiliate disclaimer footnote
- [x] ScrollSpiral enhanced with scroll-speed reactivity (stroke expands on fast scroll)
- [x] Navigation updated (ACE Labs, ACE Stacks, ACE Squads, About)
- [x] Footer updated with ACE Stacks

## Backlog / Future Considerations
- P1: Individual article/blog post pages (clicking articles)
- P1: Contact page with real email integration (SendGrid/Resend)
- P2: About page (currently just a section)
- P2: Case Studies page
- P2: SEO optimization (meta tags, OG tags, sitemap)
- P3: Dark mode toggle
- P3: Performance optimization (lazy loading, code splitting)
- P3: Careers page
