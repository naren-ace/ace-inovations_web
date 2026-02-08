import React from 'react'
import { LogicNodeIcon } from '@/components/brand/LogicNodeIcon'
import { BrandWordmark } from '@/components/brand/BrandWordmark'
import { Button } from '@/components/ui/Button'

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen" data-testid="home-page">
      <div className="text-center space-y-6">
        <div className="flex justify-center">
          <LogicNodeIcon size={80} />
        </div>

        <BrandWordmark size="lg" className="justify-center" />

        <p className="text-lg text-gray-500 font-light max-w-md mx-auto font-body">
          Engineering the Next Generation of Digital Platforms
        </p>

        <div className="flex items-center justify-center gap-4 pt-4 flex-wrap">
          <Button variant="primary" href="/admin">
            Open Admin Panel
          </Button>
          <Button variant="secondary">
            Get Started
          </Button>
          <Button variant="ghost">
            Learn More
          </Button>
        </div>

        <div className="pt-8 flex items-center justify-center gap-2 text-xs text-gray-400">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span>Next.js 16 + Payload CMS 3 + PostgreSQL</span>
        </div>
      </div>
    </main>
  )
}
