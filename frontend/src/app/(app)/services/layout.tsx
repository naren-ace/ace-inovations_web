import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services',
  description: 'End-to-end engineering for ambitious products. From platform architecture to growth engineering — we deliver production-grade systems.',
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'AceInovations Services',
    description: 'End-to-end engineering for ambitious products.',
    itemListElement: [
      { '@type': 'Service', name: 'Marketplace Development', description: 'Custom marketplace platforms built for scale.' },
      { '@type': 'Service', name: 'AI Integration', description: 'AI-native workflows and intelligent automation.' },
      { '@type': 'Service', name: 'SaaS Engineering', description: 'Production-grade SaaS platforms from zero to scale.' },
      { '@type': 'Service', name: 'Mobile Development', description: 'Cross-platform mobile applications.' },
      { '@type': 'Service', name: 'Data Migration', description: 'Seamless data migration and system modernization.' },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  )
}
