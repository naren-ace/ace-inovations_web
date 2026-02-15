'use client'

export const KeywordMarquee = () => {
  const keywords = ['Custom Marketplace', 'SaaS Implementation', 'Data Migration', 'AI Admin Assistant', 'Mobile Apps', 'AI Recommendation Engine', 'Bulk Import Automation', 'AI Chatbot']
  const items = [...keywords, ...keywords, ...keywords, ...keywords]

  return (
    <div
      className="marquee-wrapper py-4 border-t border-b"
      style={{ borderColor: 'hsl(var(--border) / 0.5)' }}
      data-testid="keyword-marquee"
    >
      <div className="marquee-track">
        {items.map((keyword, i) => (
          <span
            key={`${keyword}-${i}`}
            className="marquee-item text-xs font-medium tracking-[0.15em] uppercase transition-colors duration-200"
            style={{ color: 'hsl(var(--caption))' }}
          >
            <span className="opacity-30" style={{ color: 'hsl(var(--primary))' }}>//</span>
            {keyword}
          </span>
        ))}
      </div>
    </div>
  )
}
