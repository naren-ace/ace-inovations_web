import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ACE Squads',
  description: 'Dedicated engineering squads for your most ambitious projects. Embedded teams that scale with your vision.',
}

export default function SquadsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
