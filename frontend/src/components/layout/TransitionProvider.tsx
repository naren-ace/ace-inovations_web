'use client'

import { AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { PageTransition } from './PageTransition'
import { Toaster } from 'sonner'

export function TransitionProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: 'hsl(var(--card))',
            color: 'hsl(var(--foreground))',
            border: '1px solid hsl(var(--border))',
          },
        }}
      />
      <AnimatePresence mode="wait" initial={false}>
        <PageTransition key={pathname}>
          {children}
        </PageTransition>
      </AnimatePresence>
    </>
  )
}
