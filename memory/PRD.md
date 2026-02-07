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
│   ├── FluidShape.js             # Animated fluid shape in hero
│   ├── Footer.js                 # Global footer with CTA band
│   ├── HeroSection.js            # Homepage hero with keyword marquee
│   ├── InsightsSection.js        # Blog/insights horizontal scroll
│   ├── KeywordMarquee.js         # CSS-animated keyword marquee
│   ├── KeywordMarquee.css        # Marquee CSS animation
│   ├── Logo.js                   # Brand logo component
│   ├── MouseGlow.js              # Mouse-follow purple glow
│   ├── Navbar.js                 # Glassmorphism sticky header with mega menu
│   ├── PhilosophySection.js      # AI philosophy section
│   ├── ScrollSpiral.js           # SVG spiral background "gap filler"
│   ├── ServiceArchitecture.js    # Service architecture component
│   ├── StickySection.js          # Scroll-based sticky section wrapper
│   └── TransitionSection.js      # Mission statement section
├── pages/
│   ├── HomePage.js               # / route
│   ├── AceLabsPage.js            # /labs route
│   ├── AceSquadsPage.js          # /squads route
│   └── GrowthEngineeringPage.js  # /growth-engineering route
└── App.js                        # Router configuration
```

## Routes
- `/` - Homepage (Hero, Mission, Philosophy, ACE Engine, Squads, Process, Insights, CTA)
- `/labs` - ACE Labs (Bento grid with 3 products)
- `/squads` - ACE Squads (High-Velocity Units model)
- `/growth-engineering` - Growth Engineering service page

## Implemented Features (All Complete)

### Phase 1 - Initial Build (Previous Session)
- [x] Multi-page React app with react-router-dom
- [x] Clean Premium White aesthetic
- [x] Glassmorphism sticky header with mega menu
- [x] Fluid Shape hero section
- [x] ACE Engine section
- [x] ACE Squads section (homepage)
- [x] ACE Loop process section
- [x] Insights horizontal scroll section
- [x] ACE Labs page with Bento Grid
- [x] Growth Engineering service page
- [x] Global CTA footer
- [x] Contact modal (mocked)
- [x] Framer Motion animations throughout
- [x] Mouse-follow glow effect
- [x] Branding: "ACE inovations" with stylized lowercase "i"

### Phase 2 - Visual Architecture Enhancement (Feb 7, 2026)
- [x] SVG Spiral Background "Gap Filler" - scroll-reactive thin line animation
- [x] Updated hero sub-headline (removed extra text)
- [x] Horizontal keyword marquee replacing metrics/social proof
- [x] Philosophy Section on homepage ("We don't hide AI. We celebrate it.")
- [x] NEW ACE Squads Page (/squads) - "High-Velocity Units" concept
  - The Architect, The Engineer, The Growth Specialist roles
  - Advantages section (ACE Engine Powered, Zero Handoff Friction, Full-Stack Ownership)
- [x] Button glow effect on hover (btn-glow CSS class)
- [x] Navigation updated with ACE Squads page link
- [x] Footer links updated with /squads route
- [x] ScrollSpiral component on all pages

## Backlog / Future Considerations
- P1: Blog/Insights page (currently just teasers)
- P1: About page (currently just a section)
- P2: Case Studies page
- P2: Contact page with real email integration
- P2: SEO optimization (meta tags, OG tags)
- P3: Dark mode toggle
- P3: Performance optimization (lazy loading, code splitting)
