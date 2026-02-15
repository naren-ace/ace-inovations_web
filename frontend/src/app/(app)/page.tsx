'use client'

import { Navbar } from '@/components/layout/Navbar'
import { CTAFooter } from '@/components/layout/Footer'
import { MouseGlow } from '@/components/effects/MouseGlow'
import { ScrollSpiral } from '@/components/effects/ScrollSpiral'
import { AppShell } from '@/components/layout/AppShell'
import { HeroSection } from '@/components/home/Hero'
import { TransitionSection } from '@/components/home/TransitionSection'
import { PhilosophySection } from '@/components/home/PhilosophySection'
import { AceEngineSection } from '@/components/home/AceEngineSection'
import { AceSquadsSection } from '@/components/home/AceSquadsSection'
import { AceLoop } from '@/components/home/AceLoop'
import { InsightsSection } from '@/components/home/InsightsSection'
import { CTASection } from '@/components/home/CTASection'
import { StickySection } from '@/components/home/StickySection'
import { LeadMagnet } from '@/components/home/LeadMagnet'
import { HomepageProvider, useHomepage } from '@/lib/useHomepage'
import dynamic from 'next/dynamic'
const CustomSection = dynamic(() => import('@/components/home/CustomSection').then(m => ({ default: m.CustomSection })), { ssr: false })

const stickyTypes = new Set(['engine', 'loop', 'cta'])
const overlapTypes = new Set([])

function BlockRenderer({ block, index }: { block: any; index: number }) {
  const type = block.blockType

  const component = (() => {
    switch (type) {
      case 'hero': return <HeroSection cms={block} />
      case 'transition': return <TransitionSection cms={block} />
      case 'philosophy': return <PhilosophySection cms={block} />
      case 'engine': return <AceEngineSection cms={block} />
      case 'squads': return <AceSquadsSection cms={block} />
      case 'loop': return <AceLoop cms={block} />
      case 'insights': return <InsightsSection cms={block} />
      case 'cta': return <CTASection cms={block} />
      case 'leadMagnet': return <LeadMagnet cms={block} />
      case 'custom': return <CustomSection cms={block} />
      default: return null
    }
  })()

  if (!component) return null

  if (stickyTypes.has(type)) {
    return (
      <StickySection zIndex={10 + index} overlap={overlapTypes.has(type)}>
        {component}
      </StickySection>
    )
  }

  return component
}

/* Default layout when CMS has no blocks saved yet */
const defaultBlocks = [
  { blockType: 'hero', id: 'd-hero' },
  { blockType: 'transition', id: 'd-transition' },
  { blockType: 'philosophy', id: 'd-philosophy' },
  { blockType: 'engine', id: 'd-engine' },
  { blockType: 'loop', id: 'd-loop' },
  { blockType: 'leadMagnet', id: 'd-leadMagnet' },
]

function HomeContent() {
  const cms = useHomepage()
  const blocks = cms?.sections?.length ? cms.sections : defaultBlocks

  return (
    <div className="min-h-screen animate-bg-breathe" data-testid="home-page">
      <ScrollSpiral />
      <MouseGlow />
      <Navbar />

      <main>
        {blocks.map((block: any, i: number) => (
          <BlockRenderer key={block.id || i} block={block} index={i} />
        ))}
      </main>

      <CTAFooter />
    </div>
  )
}

export default function HomePage() {
  return (
    <AppShell>
      <HomepageProvider>
        <HomeContent />
      </HomepageProvider>
    </AppShell>
  )
}
