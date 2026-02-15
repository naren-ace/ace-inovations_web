'use client'

import React from 'react'

const services = [
  {
    title: 'AI Strategy & Architecture',
    description: 'Custom model pipelines, RAG systems, and inference infrastructure — from prototype to production at scale.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
  },
  {
    title: 'Platform Engineering',
    description: 'Full-stack systems engineered for throughput. Next.js, PostgreSQL, event-driven microservices, zero-downtime deploys.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L12 12.75 6.429 9.75m11.142 0l4.179 2.25L12 17.25 2.25 12l4.179-2.25m11.142 0l4.179 2.25L12 22.5l-9.75-5.25 4.179-2.25" />
      </svg>
    ),
  },
  {
    title: 'Growth & Revenue Systems',
    description: 'Affiliate engines, analytics dashboards, and conversion pipelines built to compound. Tracked. Measured. Optimized.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.281m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
  {
    title: 'Technical Advisory',
    description: 'Architecture reviews, stack audits, and CTO-level guidance for early-stage teams building their first real system.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
  },
]

export const ServiceGrid: React.FC = () => {
  return (
    <section className="py-28 px-6 bg-white" data-testid="services-section">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-sm font-semibold text-ace-blue tracking-[0.2em] uppercase mb-4 font-body">What We Build</p>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-ace-slate">
            Precision Engineering for Scale
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="gradient-border-card group"
              data-testid={`service-card-${service.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-$/, '')}`}
            >
              <div className="p-7 rounded-[15px] bg-white h-full">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-ace-blue/10 to-ace-violet/10 flex items-center justify-center text-ace-blue mb-5 group-hover:from-ace-blue/20 group-hover:to-ace-violet/20 transition-all duration-400">
                  {service.icon}
                </div>
                <h3 className="font-heading font-bold text-ace-slate mb-2 text-base">{service.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed font-body">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
