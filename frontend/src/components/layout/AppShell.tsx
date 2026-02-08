'use client'

import { useState, useCallback, useEffect } from 'react'
import { LoadingAnimation } from '@/components/brand/LoadingAnimation'

export const AppShell = ({ children }: { children: React.ReactNode }) => {
  const [loaded, setLoaded] = useState(false)
  const [showLoading, setShowLoading] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hasLoaded = sessionStorage.getItem('ace-loaded')
      if (hasLoaded) {
        setLoaded(true)
      } else {
        setShowLoading(true)
      }
    }
  }, [])

  const handleComplete = useCallback(() => {
    setLoaded(true)
    sessionStorage.setItem('ace-loaded', 'true')
  }, [])

  return (
    <>
      {showLoading && !loaded && <LoadingAnimation onComplete={handleComplete} />}
      <div style={{ opacity: loaded || !showLoading ? 1 : 0, transition: 'opacity 0.3s ease' }}>
        {children}
      </div>
    </>
  )
}
