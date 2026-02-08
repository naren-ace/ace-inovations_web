import React from 'react'
import { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ACE inovations | Engineering the Next Generation',
  description: 'Engineering the Next Generation of Digital Platforms with AI-augmented precision.',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#F9FAFB] text-ace-slate antialiased">
        {children}
      </body>
    </html>
  )
}
