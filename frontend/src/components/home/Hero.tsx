'use client'

import React from 'react'
import { LogicNodeIcon } from '@/components/brand/LogicNodeIcon'
import { BrandWordmark } from '@/components/brand/BrandWordmark'
import { Button } from '@/components/ui/Button'

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden" data-testid="hero-section">
      {/* Fluid Aura Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#F9FAFB]" />
        <div className="aura-blob aura-blob-1" />
        <div className="aura-blob aura-blob-2" />
        <div className="aura-blob aura-blob-3" />
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }} />
      </div>

      <div className="text-center space-y-8 px-6 pt-20 max-w-3xl mx-auto">
        <div className="flex justify-center animate-fade-in">
          <LogicNodeIcon size={112} />
        </div>

        <div className="animate-fade-in animation-delay-100">
          <BrandWordmark size="lg" className="justify-center" />
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-ace-slate leading-tight animate-fade-in animation-delay-150" data-testid="hero-headline">
          Engineering the Next Generation
        </h1>

        <p className="text-base sm:text-lg text-gray-500 font-light max-w-xl mx-auto font-body leading-relaxed animate-fade-in animation-delay-200">
          We build AI-augmented digital platforms, growth engines, and enterprise systems
          with the precision of a&nbsp;compiler and the vision of a&nbsp;founder.
        </p>

        <div className="flex items-center justify-center gap-4 pt-2 flex-wrap animate-fade-in animation-delay-300">
          <Button variant="secondary" href="/stacks" size="lg">
            Read the Stacks
          </Button>
          <Button variant="ghost" href="/admin" size="lg">
            Open Admin
          </Button>
        </div>
      </div>
    </section>
  )
}
