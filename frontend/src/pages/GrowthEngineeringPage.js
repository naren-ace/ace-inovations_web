import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { MouseGlow } from "@/components/MouseGlow";
import { ScrollSpiral } from "@/components/ScrollSpiral";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ContactModal } from "@/components/ContactModal";
import {
  ArrowRight,
  Search,
  BarChart3,
  Gauge,
  Target,
  LineChart,
  Layers,
  Zap,
  TrendingUp,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.65,
      ease: [0.4, 0, 0.2, 1],
    },
  }),
};

const servicePillars = [
  {
    icon: Search,
    title: "Technical SEO",
    description:
      "We go beyond keyword research. Our engineers build SEO directly into your technical architecture\u2014from schema markup and rendering optimization to site structure and Core Web Vitals.",
    points: [
      "Architecture-level SEO integration",
      "Core Web Vitals optimization",
      "Programmatic content strategies",
      "Structured data & schema markup",
    ],
    color: "primary",
  },
  {
    icon: Target,
    title: "Funnel Instrumentation",
    description:
      "Every touchpoint instrumented. Every conversion tracked. We build the data infrastructure that turns user behavior into actionable growth intelligence.",
    points: [
      "End-to-end event tracking",
      "Attribution modeling",
      "A/B testing infrastructure",
      "Conversion pipeline analysis",
    ],
    color: "accent",
  },
  {
    icon: Gauge,
    title: "Performance Systems",
    description:
      "Speed is a feature. We build performance monitoring, optimization pipelines, and automated alerting systems that keep your product fast as it scales.",
    points: [
      "Real-time performance monitoring",
      "Automated optimization pipelines",
      "Load testing & capacity planning",
      "CDN & edge optimization",
    ],
    color: "primary",
  },
];

const approach = [
  { icon: Layers, text: "Unified strategy across engineering and marketing" },
  { icon: LineChart, text: "Data-driven decisions at every layer" },
  { icon: Zap, text: "AI-augmented analysis and execution" },
  { icon: TrendingUp, text: "Compounding growth, not one-off campaigns" },
];

export default function GrowthEngineeringPage() {
  const heroRef = useRef(null);
  const pillarsRef = useRef(null);
  const approachRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: "-50px" });
  const pillarsInView = useInView(pillarsRef, { once: true, margin: "-80px" });
  const approachInView = useInView(approachRef, { once: true, margin: "-80px" });
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="min-h-screen animate-bg-breathe">
      <ScrollSpiral />
      <MouseGlow />
      <Navbar />

      <main>
        {/* Hero */}
        <section ref={heroRef} className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 60% 40% at 30% 40%, hsl(216 100% 50% / 0.04), transparent 60%), radial-gradient(ellipse 40% 40% at 80% 60%, hsl(259 72% 58% / 0.03), transparent 50%)',
            }}
          />

          <div className="section-container relative z-10">
            <div className="max-w-3xl">
              <motion.div
                custom={0}
                variants={fadeUp}
                initial="hidden"
                animate={heroInView ? "visible" : "hidden"}
                className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-medium tracking-wide uppercase mb-8"
                style={{
                  background: 'hsl(216 100% 50% / 0.06)',
                  color: 'hsl(var(--primary))',
                  border: '1px solid hsl(216 100% 50% / 0.12)',
                }}
              >
                <BarChart3 className="w-3 h-3" />
                Service Deep-Dive
              </motion.div>

              <motion.h1
                custom={1}
                variants={fadeUp}
                initial="hidden"
                animate={heroInView ? "visible" : "hidden"}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tighter text-foreground"
              >
                Growth{" "}
                <span className="gradient-text">Engineering</span>.
              </motion.h1>

              <motion.p
                custom={2}
                variants={fadeUp}
                initial="hidden"
                animate={heroInView ? "visible" : "hidden"}
                className="mt-6 text-base md:text-lg leading-relaxed max-w-2xl"
                style={{ color: 'hsl(var(--body))' }}
              >
                We don&apos;t just build it; we engineer its growth. Technical SEO,
                funnel instrumentation, and performance systems&mdash;integrated into
                your product from day one, not bolted on as an afterthought.
              </motion.p>

              <motion.div
                custom={3}
                variants={fadeUp}
                initial="hidden"
                animate={heroInView ? "visible" : "hidden"}
                className="mt-10"
              >
                <Button variant="ghost-gradient" size="lg" onClick={() => setContactOpen(true)}>
                  Start a Growth Project
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Service Pillars */}
        <section ref={pillarsRef} className="relative py-24 lg:py-32">
          <div className="absolute inset-0 tech-grid-bg opacity-30" />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(180deg, hsl(var(--background)), hsl(var(--background) / 0.96) 50%, hsl(var(--background)))',
            }}
          />

          <div className="section-container relative z-10">
            <div className="grid lg:grid-cols-3 gap-6">
              {servicePillars.map((pillar, i) => (
                <motion.div
                  key={pillar.title}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  animate={pillarsInView ? "visible" : "hidden"}
                  className="glass-card-hover rounded-xl p-7 flex flex-col"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                    style={{
                      background: pillar.color === "primary"
                        ? 'hsl(216 100% 50% / 0.08)'
                        : 'hsl(259 72% 58% / 0.08)',
                    }}
                  >
                    <pillar.icon
                      className="w-5 h-5"
                      style={{
                        color: pillar.color === "primary"
                          ? 'hsl(var(--primary))'
                          : 'hsl(var(--accent))',
                      }}
                    />
                  </div>

                  <h3 className="text-lg font-bold text-foreground tracking-tight mb-3">
                    {pillar.title}
                  </h3>

                  <p className="text-sm leading-relaxed mb-6" style={{ color: 'hsl(var(--body))' }}>
                    {pillar.description}
                  </p>

                  <ul className="mt-auto space-y-2.5">
                    {pillar.points.map((point) => (
                      <li key={point} className="flex items-center gap-2.5 text-sm">
                        <span
                          className="w-1 h-1 rounded-full shrink-0"
                          style={{
                            background: pillar.color === "primary"
                              ? 'hsl(var(--primary))'
                              : 'hsl(var(--accent))',
                          }}
                        />
                        <span style={{ color: 'hsl(var(--body))' }}>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* No-Silo Approach */}
        <section ref={approachRef} className="relative py-24 lg:py-32" style={{ background: 'hsl(var(--surface-subtle))' }}>
          <div
            className="absolute left-0 right-0 top-0 h-px"
            style={{ background: 'linear-gradient(90deg, transparent, hsl(var(--border)), transparent)' }}
          />

          <div className="section-container relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                custom={0}
                variants={fadeUp}
                initial="hidden"
                animate={approachInView ? "visible" : "hidden"}
              >
                <p
                  className="text-xs font-medium tracking-[0.2em] uppercase mb-4"
                  style={{ color: 'hsl(var(--primary))' }}
                >
                  Our Approach
                </p>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tighter text-foreground leading-tight">
                  The No-Silo{" "}
                  <span className="gradient-text">Philosophy</span>.
                </h2>
                <p className="mt-5 text-base leading-relaxed max-w-lg" style={{ color: 'hsl(var(--body))' }}>
                  Traditional agencies separate marketing from engineering. We don&apos;t.
                  Growth isn&apos;t a department&mdash;it&apos;s an engineering discipline. Every system
                  we build has growth baked into its architecture.
                </p>
              </motion.div>

              <div className="space-y-4">
                {approach.map((item, i) => (
                  <motion.div
                    key={item.text}
                    custom={1 + i}
                    variants={fadeUp}
                    initial="hidden"
                    animate={approachInView ? "visible" : "hidden"}
                    className="flex items-center gap-4 p-4 rounded-xl border border-border/50 bg-card/60 hover:bg-card hover:border-border transition-all duration-300"
                    style={{ backdropFilter: 'blur(8px)' }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: 'hsl(216 100% 50% / 0.07)' }}
                    >
                      <item.icon className="w-4.5 h-4.5" style={{ color: 'hsl(var(--primary))' }} />
                    </div>
                    <p className="text-sm font-medium text-foreground">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ContactModal open={contactOpen} onOpenChange={setContactOpen} />
    </div>
  );
}
