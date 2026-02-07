import { motion } from "framer-motion";

export const EngineCore = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center" data-testid="engine-core-visual">
      {/* Outer pulsing ring */}
      <div
        className="absolute w-[90%] h-[90%] rounded-full animate-pulse-soft"
        style={{
          background: 'radial-gradient(circle, hsl(216 100% 50% / 0.06) 0%, transparent 70%)',
        }}
      />

      {/* Mid ring glow */}
      <div
        className="absolute w-[80%] h-[80%] rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(259 72% 58% / 0.05) 0%, transparent 60%)',
          animation: 'pulse-soft 6s ease-in-out infinite reverse',
        }}
      />

      {/* Glass sphere */}
      <motion.div
        className="relative w-[65%] h-[65%] rounded-full overflow-hidden"
        animate={{
          scale: [1, 1.02, 0.99, 1.01, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background: 'linear-gradient(145deg, hsl(0 0% 100% / 0.25), hsl(216 100% 50% / 0.08) 40%, hsl(259 72% 58% / 0.12) 70%, hsl(0 0% 100% / 0.15))',
          backdropFilter: 'blur(40px)',
          WebkitBackdropFilter: 'blur(40px)',
          border: '1px solid hsl(0 0% 100% / 0.4)',
          boxShadow: `
            0 0 80px hsl(216 100% 50% / 0.1),
            0 0 120px hsl(259 72% 58% / 0.06),
            inset 0 0 60px hsl(216 100% 50% / 0.08),
            inset 0 -20px 40px hsl(259 72% 58% / 0.06)
          `,
        }}
      >
        {/* Internal light core */}
        <motion.div
          className="absolute inset-[20%] rounded-full"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          style={{
            background: 'conic-gradient(from 0deg, hsl(216 100% 50% / 0.15), hsl(259 72% 58% / 0.12), hsl(216 100% 65% / 0.1), hsl(259 72% 58% / 0.15), hsl(216 100% 50% / 0.15))',
            filter: 'blur(12px)',
          }}
        />

        {/* Inner bright spot */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: '30%',
            height: '30%',
            top: '35%',
            left: '35%',
            background: 'radial-gradient(circle, hsl(216 100% 70% / 0.25), hsl(259 72% 68% / 0.15), transparent 70%)',
            filter: 'blur(8px)',
          }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Light refraction - top */}
        <div
          className="absolute top-[8%] left-[15%] w-[45%] h-[25%] rounded-full"
          style={{
            background: 'linear-gradient(180deg, hsl(0 0% 100% / 0.35), transparent)',
            filter: 'blur(10px)',
          }}
        />

        {/* Noise texture */}
        <div
          className="absolute inset-0 rounded-full opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            mixBlendMode: 'overlay',
          }}
        />
      </motion.div>

      {/* Orbiting particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: 2 + (i % 3),
            height: 2 + (i % 3),
            background: i % 2 === 0
              ? 'hsl(216 100% 50% / 0.5)'
              : 'hsl(259 72% 58% / 0.5)',
          }}
          animate={{
            x: [
              Math.cos((i * Math.PI) / 3) * 120,
              Math.cos((i * Math.PI) / 3 + Math.PI) * 120,
              Math.cos((i * Math.PI) / 3) * 120,
            ],
            y: [
              Math.sin((i * Math.PI) / 3) * 120,
              Math.sin((i * Math.PI) / 3 + Math.PI) * 120,
              Math.sin((i * Math.PI) / 3) * 120,
            ],
            opacity: [0.2, 0.7, 0.2],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  );
};
