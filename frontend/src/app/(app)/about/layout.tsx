import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about ACE inovations — engineering the next generation of digital platforms with AI-augmented precision.',
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
