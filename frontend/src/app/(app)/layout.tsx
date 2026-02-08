import React from 'react'
import { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'ACE inovations | Engineering the Next Generation',
  description: 'Engineering the Next Generation of Digital Platforms with AI-augmented precision.',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="min-h-screen bg-[#F9FAFB] text-ace-slate antialiased font-body">
        {children}
      </body>
    </html>
  )
}
