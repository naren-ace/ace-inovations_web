import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ACE Labs',
  description: 'Experimental products and internal tools built by the ACE inovations team. Explore our innovation lab.',
}

export default function LabsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
