import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services',
  description: 'End-to-end engineering for ambitious products. From platform architecture to growth engineering — we deliver production-grade systems.',
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
