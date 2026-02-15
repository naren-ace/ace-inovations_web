import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ACE Stacks | Field Notes from the Frontline',
  description: 'Deep technical breakdowns of the architectures, toolchains, and agentic workflows that power the products we ship at ACE inovations.',
}

export default function StacksLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
