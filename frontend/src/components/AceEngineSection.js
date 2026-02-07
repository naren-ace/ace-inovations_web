import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Cpu, Layers, GitBranch, Shield } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  }),
};

const capabilities = [
  {
    icon: Cpu,
    title: "AI-First Architecture",
    description: "Every system we build has intelligence woven into its foundation—not bolted on as an afterthought.",
  },
  {
    icon: Layers,
    title: "Modular Stack Design",
    description: "Composable microservices and APIs that scale independently and evolve with your business.",
  },
  {
    icon: GitBranch,
    title: "Agentic Workflows",
    description: "Autonomous AI agents handle code review, testing, and deployment—accelerating delivery cycles.",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "SOC2-aligned processes with built-in observability, audit trails, and zero-trust principles.",
  },
];

export const AceEngineSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="engine"
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Technical grid background */}
      <div className="absolute inset-0 tech-grid-bg opacity-50" />

      {/* Subtle gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, hsl(var(--background)), hsl(var(--background) / 0.95) 50%, hsl(var(--background)))',
        }}
      />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="max-w-2xl">
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-xs font-medium tracking-[0.2em] uppercase mb-4"
            style={{ color: 'hsl(var(--primary))' }}
          >
            The ACE Engine
          </motion.p>
          <motion.h2
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground leading-tight"
          >
            The ACE Intelligence Layer.
          </motion.h2>
          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="mt-5 text-base md:text-lg leading-relaxed max-w-xl"
            style={{ color: 'hsl(var(--body))' }}
          >
            We don&apos;t just write code; we orchestrate intelligence. Our
            proprietary AI-augmented workflows eliminate friction, ensuring
            industrial-grade quality at the speed of thought.
          </motion.p>
        </div>

        {/* Capabilities Grid */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              custom={3 + i}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="group relative p-6 rounded-xl border border-border/50 bg-card/60 hover:bg-card hover:border-border hover:shadow-lg transition-all duration-300"
              style={{ backdropFilter: 'blur(8px)' }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                style={{
                  background: i % 2 === 0
                    ? 'hsl(216 100% 50% / 0.08)'
                    : 'hsl(259 72% 58% / 0.08)',
                }}
              >
                <cap.icon
                  className="w-5 h-5"
                  style={{
                    color: i % 2 === 0
                      ? 'hsl(var(--primary))'
                      : 'hsl(var(--accent))',
                  }}
                />
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-2">
                {cap.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'hsl(var(--caption))' }}>
                {cap.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
