import React from 'react'
import { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { TransitionProvider } from '@/components/layout/TransitionProvider'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'AceInovations - Enterprise Marketplace Development',
    template: '%s | AceInovations - Enterprise Marketplace Development',
  },
  description: 'We build scalable platforms that redefine industries. Specialists in Marketplace Development, Custom Integrations, and Strategic Innovation.',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'AceInovations',
    title: 'AceInovations - Enterprise Marketplace Development',
    description: 'We build scalable platforms that redefine industries. Specialists in Marketplace Development, Custom Integrations, and Strategic Innovation.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'AceInovations' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AceInovations - Enterprise Marketplace Development',
    description: 'We build scalable platforms that redefine industries. Specialists in Marketplace Development, Custom Integrations, and Strategic Innovation.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'AceInovations',
    url: 'https://aceinovations.com',
    logo: 'https://aceinovations.com/favicon.svg',
    description: 'We build scalable platforms that redefine industries. Specialists in Marketplace Development, Custom Integrations, and Strategic Innovation.',
    foundingDate: '2020',
    sameAs: [],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      availableLanguage: 'English',
    },
    areaServed: 'Worldwide',
    knowsAbout: [
      'Marketplace Development',
      'Custom Software Engineering',
      'AI Integration',
      'SaaS Platforms',
      'Mobile App Development',
      'Data Migration',
    ],
  }

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'AceInovations',
    url: 'https://aceinovations.com',
    description: 'Enterprise marketplace development and strategic innovation studio.',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://aceinovations.com/stacks?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} dark`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased font-body">
        <TransitionProvider>
          {children}
        </TransitionProvider>
      </body>
    </html>
  )
}
