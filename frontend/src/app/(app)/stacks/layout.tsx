import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ACE Stacks | Technical Knowledge Base',
  description: 'Deep dives into AI strategy, engineering patterns, and field notes from the ACEinovations team.',
}

export default function StacksLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="stacks-dark min-h-screen bg-[#0C0E14] text-gray-100">
      {children}
    </div>
  )
}
