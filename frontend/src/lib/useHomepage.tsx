'use client'

import { useState, useEffect, createContext, useContext } from 'react'

type HomepageData = Record<string, any> | null

const HomepageContext = createContext<HomepageData>(null)

export const useHomepage = () => useContext(HomepageContext)

export const HomepageProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<HomepageData>(null)

  useEffect(() => {
    fetch('/api/globals/homepage')
      .then(r => r.json())
      .then(setData)
      .catch(() => setData(null))
  }, [])

  return <HomepageContext.Provider value={data}>{children}</HomepageContext.Provider>
}
