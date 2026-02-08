import React from 'react'
import { Navbar } from '@/components/layout/Navbar'
import { Hero } from '@/components/home/Hero'
import { ServiceGrid } from '@/components/home/ServiceGrid'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <ServiceGrid />
    </>
  )
}
