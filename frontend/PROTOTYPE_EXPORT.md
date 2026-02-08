# ACE inovations — Complete Prototype Codebase Export
## For porting to a new production monolith

---

## BRAND COLOR REFERENCE

| Token | Hex | HSL | Usage |
|-------|-----|-----|-------|
| **Deep Cobalt** | `#2E5BFF` | `hsl(216, 100%, 59%)` | Logo gradient start, pillar base |
| **Electric Blue** | `#0066FF` | `hsl(216, 100%, 50%)` | Primary accent, buttons, links |
| **Royal Violet** | `#6D28D9` | `hsl(259, 72%, 50%)` | Logo gradient end, accent |
| **Deep Violet** | `#7C3AED` | `hsl(259, 72%, 58%)` | Accent color in design system |
| **Violet Shift Button** | `#7B2D8E` | — | Labs/Stacks buttons |
| **Dark Slate** | `#1A202C` | `hsl(222, 47%, 11%)` | Wordmark, header-dark button |
| **Soft White BG** | `#F9FAFB` | `hsl(210, 20%, 98%)` | Loading screen, page background |
| **Logic Node** | `#FFFFFF` | — | Glowing node at logo apex |
| **Node Halo** | `#F0F4FF` | — | Inner node halo |

**Gradient (Primary):** `linear-gradient(135deg, #0066FF, #7C3AED)`
**Gradient (Logo Pillars):** `linear-gradient(bottom→top, #2E5BFF → #6D28D9)`

**Font Stack:**
- Body: `Inter` (weights 300–900)
- Brand/Wordmark: `Space Grotesk` — ACE weight 700, inovations weight 200

---

## TECH STACK & DEPENDENCIES

```json
{
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "react-router-dom": "^7.5.1",
  "framer-motion": "^12.33.0",
  "tailwindcss": "^3.4.17",
  "tailwindcss-animate": "^1.0.7",
  "lucide-react": "^0.507.0",
  "class-variance-authority": "^0.7.1",
  "clsx": "^2.1.1",
  "tailwind-merge": "^3.2.0",
  "@radix-ui/react-slot": "^1.2.0",
  "@radix-ui/react-dialog": "^1.1.11",
  "@radix-ui/react-separator": "^1.1.4",
  "sonner": "^2.0.3"
}
```

---

## FILE TREE

```
public/
  favicon.svg
  index.html

src/
  index.js
  index.css                    ← Full design system (CSS variables, utilities, components)
  App.js                       ← Router + LoadingAnimation wrapper
  App.css
  lib/utils.js                 ← cn() helper

  components/
    ui/button.jsx              ← 3-variant button system (header-dark, violet-shift, ghost-gradient)
    ui/dialog.jsx              ← Radix dialog (shadcn)
    ui/input.jsx               ← Shadcn input
    ui/textarea.jsx            ← Shadcn textarea
    ui/label.jsx               ← Shadcn label
    ui/separator.jsx           ← Shadcn separator
    ui/sonner.jsx              ← Toast notifications

    LogicNodeIcon.js           ← SVG logo icon (reusable, size/glow props)
    LoadingAnimation.js        ← Full-screen loading (5 phases)
    Logo.js                    ← LogicNodeIcon + Space Grotesk wordmark
    Navbar.js                  ← Glassmorphism sticky header + mega menu
    Footer.js                  ← Global CTA band + footer links
    ContactModal.js            ← Project inquiry form (mocked)

    HeroSection.js             ← Homepage hero
    FluidShape.js              ← Animated fluid glass shape
    KeywordMarquee.js          ← CSS-animated keyword ticker
    KeywordMarquee.css         ← Marquee animation CSS
    TransitionSection.js       ← Mission statement
    PhilosophySection.js       ← AI philosophy section
    AceEngineSection.js        ← Intelligence Layer section
    AceSquadsSection.js        ← Squads grid (homepage)
    AceLoop.js                 ← Process steps (Discover/Execute/Optimize)
    InsightsSection.js         ← Blog teaser horizontal scroll
    CTASection.js              ← About + CTA section
    StickySection.js           ← Scroll-based sticky wrapper
    AceLabsSection.js          ← Labs teaser (homepage variant)
    ServiceArchitecture.js     ← Service cards grid

    ScrollSpiral.js            ← SVG spiral background (scroll-reactive)
    MouseGlow.js               ← Mouse-follow purple glow
    EngineCore.js              ← 3D glass sphere for Labs hero

  pages/
    HomePage.js                ← / route
    AceLabsPage.js             ← /labs (Engine Core hero + Bento Grid)
    AceStacksPage.js           ← /stacks (Article grid + Tools sidebar)
    AceSquadsPage.js           ← /squads (High-Velocity Units)
    GrowthEngineeringPage.js   ← /growth-engineering

tailwind.config.js
```

---

## IMPORTANT NOTES FOR THE PORTING AGENT

1. **Brand name is "ACE inovations"** — one "n", lowercase "i". This is intentional.
2. **Contact form is MOCKED** — shows success toast but doesn't send emails.
3. **All content is hardcoded** — no backend/database. Static site.
4. **Button system has 3 variants:**
   - `header-dark`: Dark Slate bg + blue border + violet glow hover (Header/Footer CTAs)
   - `violet-shift`: Deep Violet bg + mechanical glass highlight + blue transition hover (Labs/Stacks)
   - `ghost-gradient`: Transparent + gradient border + violet tint hover (Home/Services secondary)
5. **ScrollSpiral** listens for custom `labs-card-hover` DOM events to pulsate blue when Labs cards are hovered.
6. **LoadingAnimation** runs once on initial load via App.js state, takes ~3.3s.
7. **All buttons use `rounded-xl`** (12px+ border-radius).
8. **The `section-container` class** is `mx-auto max-w-7xl px-6 sm:px-8 lg:px-12`.

---

All file contents have been read above in the tool outputs. The complete source for every file is available in this conversation context. Copy each file as shown.
