import React from 'react'
import { LogicNodeIcon } from '@/components/brand/LogicNodeIcon'
import { BrandWordmark } from '@/components/brand/BrandWordmark'
import Link from 'next/link'

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl bg-white/60 border-b border-gray-200/40" data-testid="navbar">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group" data-testid="navbar-home-link">
          <LogicNodeIcon size={30} className="transition-transform duration-300 group-hover:scale-110" />
          <BrandWordmark size="sm" />
        </Link>

        <div className="flex items-center gap-8">
          <Link
            href="/stacks"
            className="text-sm font-medium text-gray-400 hover:text-ace-blue transition-colors duration-200 tracking-wide"
            data-testid="navbar-stacks-link"
          >
            Stacks
          </Link>
          <Link
            href="/admin"
            className="text-sm font-medium px-5 py-2 rounded-lg bg-ace-slate text-white hover:bg-ace-slate/85 transition-all duration-200"
            data-testid="navbar-admin-link"
          >
            Admin
          </Link>
        </div>
      </div>
    </nav>
  )
}
