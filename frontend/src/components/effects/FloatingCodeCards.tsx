'use client'

import { motion } from 'framer-motion'

const codeSnippetPrimary = [
  { text: 'const', color: 'hsl(216 100% 65%)' },
  { text: ' platform', color: 'hsl(210 20% 90%)' },
  { text: ' = ', color: 'hsl(215 16% 55%)' },
  { text: 'await', color: 'hsl(216 100% 65%)' },
  { text: ' deploy', color: 'hsl(45 100% 65%)' },
  { text: '({', color: 'hsl(215 16% 55%)' },
  { text: '\n  name', color: 'hsl(270 80% 75%)' },
  { text: ': ', color: 'hsl(215 16% 55%)' },
  { text: '"ace-marketplace"', color: 'hsl(142 60% 55%)' },
  { text: ',', color: 'hsl(215 16% 55%)' },
  { text: '\n  engine', color: 'hsl(270 80% 75%)' },
  { text: ': ', color: 'hsl(215 16% 55%)' },
  { text: '"ai-native"', color: 'hsl(142 60% 55%)' },
  { text: ',', color: 'hsl(215 16% 55%)' },
  { text: '\n  scale', color: 'hsl(270 80% 75%)' },
  { text: ': ', color: 'hsl(215 16% 55%)' },
  { text: 'Infinity', color: 'hsl(45 100% 65%)' },
  { text: ',', color: 'hsl(215 16% 55%)' },
  { text: '\n', color: '' },
  { text: '});', color: 'hsl(215 16% 55%)' },
]

const codeSnippetSecondary = [
  { text: 'export', color: 'hsl(216 100% 65%)' },
  { text: ' function', color: 'hsl(216 100% 65%)' },
  { text: ' useAI', color: 'hsl(45 100% 65%)' },
  { text: '() {', color: 'hsl(215 16% 55%)' },
  { text: '\n  return', color: 'hsl(216 100% 65%)' },
  { text: ' predict', color: 'hsl(45 100% 65%)' },
  { text: '({', color: 'hsl(215 16% 55%)' },
  { text: '\n    model', color: 'hsl(270 80% 75%)' },
  { text: ': ', color: 'hsl(215 16% 55%)' },
  { text: '"gpt-5"', color: 'hsl(142 60% 55%)' },
  { text: '\n  })', color: 'hsl(215 16% 55%)' },
  { text: '\n}', color: 'hsl(215 16% 55%)' },
]

function CodeLine({ tokens }: { tokens: { text: string; color: string }[] }) {
  return (
    <pre className="text-[11px] sm:text-xs leading-[1.7] font-mono whitespace-pre m-0">
      {tokens.map((token, i) => (
        <span key={i} style={{ color: token.color }}>{token.text}</span>
      ))}
    </pre>
  )
}

export function FloatingCodeCards() {
  return (
    <div className="relative w-full h-full min-h-[340px] lg:min-h-[420px]" data-testid="floating-code-cards">
      {/* Main card — foreground */}
      <motion.div
        className="absolute z-20"
        style={{
          top: '8%',
          left: '8%',
          right: '0%',
          maxWidth: '360px',
        }}
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 4, ease: 'easeInOut', repeat: Infinity }}
      >
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            background: 'hsl(234 30% 8% / 0.85)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: '1px solid hsl(216 100% 55% / 0.25)',
            boxShadow: '0 0 40px hsl(216 100% 55% / 0.12), 0 20px 60px -15px hsl(0 0% 0% / 0.5), inset 0 1px 0 hsl(0 0% 100% / 0.05)',
            transform: 'perspective(1200px) rotateY(-6deg) rotateX(3deg)',
          }}
          data-testid="code-card-primary"
        >
          {/* Window bar */}
          <div className="flex items-center gap-1.5 px-4 py-2.5" style={{ borderBottom: '1px solid hsl(0 0% 100% / 0.06)' }}>
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#ff5f57' }} />
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#febc2e' }} />
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#28c840' }} />
            <span className="ml-3 text-[10px] font-mono" style={{ color: 'hsl(215 16% 45%)' }}>deploy.ts</span>
          </div>
          {/* Code */}
          <div className="px-4 py-3">
            <CodeLine tokens={codeSnippetPrimary} />
          </div>
        </div>
      </motion.div>

      {/* Secondary card — background, parallax */}
      <motion.div
        className="absolute z-10"
        style={{
          bottom: '5%',
          right: '0%',
          maxWidth: '280px',
        }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5.5, ease: 'easeInOut', repeat: Infinity }}
      >
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            background: 'hsl(234 30% 8% / 0.7)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid hsl(270 80% 65% / 0.2)',
            boxShadow: '0 0 30px hsl(270 80% 65% / 0.08), 0 15px 40px -10px hsl(0 0% 0% / 0.4), inset 0 1px 0 hsl(0 0% 100% / 0.04)',
            transform: 'perspective(1200px) rotateY(4deg) rotateX(-2deg)',
            opacity: 0.9,
          }}
          data-testid="code-card-secondary"
        >
          <div className="flex items-center gap-1.5 px-3 py-2" style={{ borderBottom: '1px solid hsl(0 0% 100% / 0.05)' }}>
            <div className="w-2 h-2 rounded-full" style={{ background: '#ff5f57' }} />
            <div className="w-2 h-2 rounded-full" style={{ background: '#febc2e' }} />
            <div className="w-2 h-2 rounded-full" style={{ background: '#28c840' }} />
            <span className="ml-2 text-[9px] font-mono" style={{ color: 'hsl(215 16% 40%)' }}>useAI.ts</span>
          </div>
          <div className="px-3 py-2.5">
            <CodeLine tokens={codeSnippetSecondary} />
          </div>
        </div>
      </motion.div>

      {/* Ambient glow orbs */}
      <div
        className="absolute w-44 h-44 rounded-full pointer-events-none z-0"
        style={{
          top: '20%',
          left: '30%',
          background: 'radial-gradient(circle, hsl(216 100% 55% / 0.08), transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      <div
        className="absolute w-32 h-32 rounded-full pointer-events-none z-0"
        style={{
          bottom: '25%',
          right: '15%',
          background: 'radial-gradient(circle, hsl(270 80% 65% / 0.06), transparent 70%)',
          filter: 'blur(30px)',
        }}
      />
    </div>
  )
}
