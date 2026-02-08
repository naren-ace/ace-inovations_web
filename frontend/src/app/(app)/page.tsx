import React from 'react'

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <div className="text-center space-y-6">
        {/* Logo Icon */}
        <div className="flex justify-center">
          <svg
            width={80}
            height={80}
            viewBox="0 0 160 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="overflow-visible"
          >
            <defs>
              <linearGradient id="home-gl" x1="30%" y1="100%" x2="50%" y2="0%">
                <stop offset="0%" stopColor="#2E5BFF" />
                <stop offset="100%" stopColor="#6D28D9" />
              </linearGradient>
              <linearGradient id="home-gr" x1="70%" y1="100%" x2="50%" y2="0%">
                <stop offset="0%" stopColor="#2E5BFF" />
                <stop offset="100%" stopColor="#6D28D9" />
              </linearGradient>
              <linearGradient id="home-hl" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
                <stop offset="40%" stopColor="rgba(255,255,255,0.08)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.25)" />
              </linearGradient>
              <filter id="home-ng" x="-80%" y="-80%" width="260%" height="260%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
              </filter>
            </defs>
            <path d="M 12 150 L 70 14 L 82 14 L 44 150 Z" fill="url(#home-gl)" />
            <path d="M 12 150 L 70 14 L 76 14 L 28 150 Z" fill="url(#home-hl)" opacity="0.65" />
            <path d="M 148 150 L 90 14 L 78 14 L 116 150 Z" fill="url(#home-gr)" />
            <path d="M 148 150 L 90 14 L 84 14 L 132 150 Z" fill="url(#home-hl)" opacity="0.65" />
            <circle cx="80" cy="10" r="10" fill="#6D28D9" filter="url(#home-ng)" opacity="0.4" />
            <circle cx="80" cy="10" r="4.5" fill="#FFFFFF" />
            <circle cx="80" cy="10" r="2" fill="#F0F4FF" opacity="0.8" />
          </svg>
        </div>

        {/* Brand Wordmark */}
        <div className="flex items-baseline justify-center">
          <span
            className="text-4xl sm:text-5xl font-bold tracking-tight"
            style={{ color: '#3B6FE8', fontFamily: "'Space Grotesk', sans-serif" }}
          >
            ACE
          </span>
          <span className="relative inline-flex flex-col items-center" style={{ color: '#1A202C' }}>
            <span
              className="absolute w-[6px] h-[6px] rounded-full -top-[3px]"
              style={{ backgroundColor: '#6D28D9' }}
            />
            <span
              className="text-4xl sm:text-5xl font-extralight tracking-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {"\u0131"}
            </span>
          </span>
          <span
            className="text-4xl sm:text-5xl font-extralight tracking-tight"
            style={{ color: '#1A202C', fontFamily: "'Space Grotesk', sans-serif" }}
          >
            novations
          </span>
        </div>

        <p className="text-lg text-gray-500 font-light max-w-md mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
          Engineering the Next Generation of Digital Platforms
        </p>

        <div className="flex items-center justify-center gap-4 pt-4">
          <a
            href="/admin"
            className="px-6 py-3 rounded-lg text-white font-medium text-sm transition-all duration-200 hover:shadow-lg hover:shadow-ace-blue/25"
            style={{ background: 'linear-gradient(135deg, #2E5BFF, #6D28D9)' }}
          >
            Open Admin Panel
          </a>
        </div>

        <div className="pt-8 flex items-center gap-2 text-xs text-gray-400">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span>Next.js 16 + Payload CMS 3 + PostgreSQL</span>
        </div>
      </div>
    </main>
  )
}
