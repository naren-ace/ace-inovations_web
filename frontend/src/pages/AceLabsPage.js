import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { MouseGlow } from "@/components/MouseGlow";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ContactModal } from "@/components/ContactModal";
import { Zap, Workflow, ScanSearch, ArrowRight, Sparkles } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.65,
      ease: [0.4, 0, 0.2, 1],
    },
  }),
};

const labProducts = [
  {
    icon: Zap,
    status: "Internal Beta",
    title: "ACE Velocity Agent",
    mission: "Launch Faster.",
    detail:
      "Autonomous DevOps layer for instant scaffolding and CI/CD. From repository creation to production deployment in minutes, not days. The Velocity Agent handles environment configuration, pipeline setup, and infrastructure provisioning automatically.",
    capabilities: [
      "Instant project scaffolding",
      "Automated CI/CD pipelines",
      "Infrastructure-as-code generation",
      "Environment orchestration",
    ],
    color: "primary",
    span: "lg:col-span-2",
  },
  {
    icon: Workflow,
    status: "In Development",
    title: "ACE Flow-Bot",
    mission: "Automate Workflows.",
    detail:
      "Intelligent orchestration agent connecting disparate enterprise systems. Flow-Bot learns your operational patterns, identifies bottlenecks, and autonomously routes work across tools and teams.",
    capabilities: [
      "Cross-system orchestration",
      "Pattern recognition",
      "Autonomous routing",
      "Bottleneck detection",
    ],
    color: "accent",
    span: "lg:col-span-1",
  },
  {
    icon: ScanSearch,
    status: "R&D Phase",
    title: "ACE Friction-Scanner",
    mission: "Reduce Operational Friction.",
    detail:
      "Diagnostic AI for auditing technical debt and system bottlenecks. Friction-Scanner continuously monitors your codebase, infrastructure, and workflows to surface the invisible costs slowing your team down.",
    capabilities: [
      "Technical debt analysis",
      "Performance bottleneck detection",
      "Workflow inefficiency mapping",
      "Prioritized remediation plans",
    ],
    color: "primary",
    span: "lg:col-span-3",
  },
];

export default function AceLabsPage() {
  const heroRef = useRef(null);
  const gridRef = useRef(null);
  const storyRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: "-50px" });
  const gridInView = useInView(gridRef, { once: true, margin: "-80px" });
  const storyInView = useInView(storyRef, { once: true, margin: "-80px" });
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="min-h-screen animate-bg-breathe">
      <MouseGlow />
      <Navbar />

      <main>
        {/* Hero */}
        <section ref={heroRef} className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
          {/* Aura glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 60% 40% at 50% 30%, hsl(259 72% 58% / 0.04), transparent 60%), radial-gradient(ellipse 40% 40% at 80% 70%, hsl(216 100% 50% / 0.03), transparent 50%)',
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
                  background: 'hsl(259 72% 58% / 0.06)',
                  color: 'hsl(var(--accent))',
                  border: '1px solid hsl(259 72% 58% / 0.12)',
                }}
              >
                <Sparkles className="w-3 h-3" />
                Internal R&amp;D
              </motion.div>

              <motion.h1
                custom={1}
                variants={fadeUp}
                initial="hidden"
                animate={heroInView ? "visible" : "hidden"}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tighter text-foreground"
              >
                ACE Labs: Engineering{" "}
                <span className="gradient-text">the Future</span>.
              </motion.h1>

              <motion.p
                custom={2}
                variants={fadeUp}
                initial="hidden"
                animate={heroInView ? "visible" : "hidden"}
                className="mt-6 text-base md:text-lg leading-relaxed max-w-2xl"
                style={{ color: 'hsl(var(--body))' }}
              >
                Internal R&amp;D where we build the agents and tools that power our
                engineering squads. These are the systems behind our speed.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Bento Grid */}
        <section ref={gridRef} className="relative pb-24 lg:pb-32">
          <div className="section-container relative z-10">
            <div className="grid lg:grid-cols-3 gap-6">
              {labProducts.map((product, i) => (
                <motion.div
                  key={product.title}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  animate={gridInView ? "visible" : "hidden"}
                  className={`labs-card-premium rounded-2xl overflow-hidden flex flex-col ${product.span}`}
                >
                  <div className="p-7 lg:p-8 flex flex-col flex-1">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{
                          background: product.color === "primary"
                            ? 'hsl(216 100% 50% / 0.07)'
                            : 'hsl(259 72% 58% / 0.07)',
                        }}
                      >
                        <product.icon
                          className="w-5.5 h-5.5"
                          style={{
                            color: product.color === "primary"
                              ? 'hsl(var(--primary))'
                              : 'hsl(var(--accent))',
                          }}
                        />
                      </div>
                      <span
                        className="px-3 py-1 text-[10px] font-semibold tracking-wider uppercase rounded-full"
                        style={{
                          background: product.color === "primary"
                            ? 'hsl(216 100% 50% / 0.07)'
                            : 'hsl(259 72% 58% / 0.07)',
                          color: product.color === "primary"
                            ? 'hsl(var(--primary))'
                            : 'hsl(var(--accent))',
                        }}
                      >
                        {product.status}
                      </span>
                    </div>

                    {/* Mission */}
                    <p
                      className="text-xs font-semibold tracking-[0.15em] uppercase mb-2"
                      style={{
                        color: product.color === "primary"
                          ? 'hsl(var(--primary))'
                          : 'hsl(var(--accent))',
                      }}
                    >
                      Mission: {product.mission}
                    </p>

                    <h3 className="text-xl font-bold text-foreground tracking-tight mb-3">
                      {product.title}
                    </h3>

                    <p className="text-sm leading-relaxed mb-6" style={{ color: 'hsl(var(--body))' }}>
                      {product.detail}
                    </p>

                    {/* Capabilities */}
                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-2">
                        {product.capabilities.map((cap) => (
                          <span
                            key={cap}
                            className="px-2.5 py-1 text-[11px] font-medium rounded-md"
                            style={{
                              background: 'hsl(var(--secondary))',
                              color: 'hsl(var(--muted-foreground))',
                            }}
                          >
                            {cap}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why ACE Labs Exists */}
        <section ref={storyRef} className="relative py-24 lg:py-32" style={{ background: 'hsl(var(--surface-subtle))' }}>
          <div
            className="absolute left-0 right-0 top-0 h-px"
            style={{ background: 'linear-gradient(90deg, transparent, hsl(var(--border)), transparent)' }}
          />

          <div className="section-container relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left: Headline */}
              <motion.div
                custom={0}
                variants={fadeUp}
                initial="hidden"
                animate={storyInView ? "visible" : "hidden"}
              >
                <p
                  className="text-xs font-medium tracking-[0.2em] uppercase mb-4"
                  style={{ color: 'hsl(var(--accent))' }}
                >
                  Philosophy
                </p>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tighter text-foreground leading-tight">
                  We don&apos;t hide the fact that we use AI.{" "}
                  <span className="gradient-text">We celebrate it.</span>
                </h2>
              </motion.div>

              {/* Right: Body Copy */}
              <div className="space-y-6">
                <motion.p
                  custom={1}
                  variants={fadeUp}
                  initial="hidden"
                  animate={storyInView ? "visible" : "hidden"}
                  className="text-base leading-relaxed"
                  style={{ color: 'hsl(var(--body))' }}
                >
                  At ACE inovations, we aren&apos;t just consumers of technology; we are
                  builders of it. ACE Labs is our internal innovation hub where we
                  develop proprietary agents and frameworks to solve the friction we
                  see in the market every day.
                </motion.p>
                <motion.p
                  custom={2}
                  variants={fadeUp}
                  initial="hidden"
                  animate={storyInView ? "visible" : "hidden"}
                  className="text-base leading-relaxed"
                  style={{ color: 'hsl(var(--body))' }}
                >
                  By automating the &ldquo;solved&rdquo; problems of software, we free our human
                  experts to solve your unique business challenges. Our Labs products
                  are the engine behind our speed.
                </motion.p>
                <motion.div
                  custom={3}
                  variants={fadeUp}
                  initial="hidden"
                  animate={storyInView ? "visible" : "hidden"}
                >
                  <Button variant="premium" size="lg" onClick={() => setContactOpen(true)}>
                    Start a Project
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </motion.div>
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
