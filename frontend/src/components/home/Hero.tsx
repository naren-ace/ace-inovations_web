'use client'

import React from 'react'
import { LogicNodeIcon } from '@/components/brand/LogicNodeIcon'
import { BrandWordmark } from '@/components/brand/BrandWordmark'
import { Button } from '@/components/ui/Button'

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" data-testid="hero-section">
      {/* Fluid Aura Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#F9FAFB]" />
        <div className="aura-blob aura-blob-1" />
        <div className="aura-blob aura-blob-2" />
        <div className="aura-blob aura-blob-3" />
        {/* Grain overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }} />
      </div>

      <div className="text-center space-y-8 px-6 pt-16">
        <div className="flex justify-center animate-fade-in">
          <LogicNodeIcon size={96} />
        </div>

        <div className="animate-fade-in animation-delay-100">
          <BrandWordmark size="lg" className="justify-center" />
        </div>

        <p className="text-lg sm:text-xl text-gray-500 font-light max-w-lg mx-auto font-body animate-fade-in animation-delay-200">
          Engineering the Next Generation of Digital Platforms with AI-augmented precision.
        </p>

        <div className="flex items-center justify-center gap-4 pt-2 flex-wrap animate-fade-in animation-delay-300">
          <Button variant="secondary" href="/stacks">
            Read the Stacks
          </Button>
          <Button variant="ghost" href="/admin">
            Open Admin
          </Button>
        </div>
      </div>
    </section>
  )
}
