import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { BarChart3, UserCheck, Bot, ArrowRight, Sparkles } from "lucide-react";

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
    icon: BarChart3,
    status: "Beta",
    title: "Autonomous Market Analyst",
    description:
      "Real-time competitive intelligence powered by agentic AI. Continuously monitors market signals, competitor moves, and emerging opportunities\u2014delivering actionable briefings to your inbox.",
    features: ["Real-time monitoring", "Competitor tracking", "Signal detection"],
    color: "primary",
    gradient: 'linear-gradient(135deg, hsl(216 100% 50% / 0.06), hsl(216 100% 65% / 0.02))',
  },
  {
    icon: UserCheck,
    status: "v1",
    title: "LeadGen Agent",
    description:
      "Human-centric outbound automation that combines AI research with personalized outreach. Every touchpoint feels crafted by a human\u2014because the strategy is, the execution is AI-augmented.",
    features: ["AI personalization", "Multi-channel", "A/B optimization"],
    color: "accent",
    gradient: 'linear-gradient(135deg, hsl(259 72% 58% / 0.06), hsl(259 72% 72% / 0.02))',
  },
  {
    icon: Bot,
    status: "Alpha",
    title: "DevOps Sentinel",
    description:
      "An autonomous agent that watches your infrastructure 24/7. Predicts failures before they happen, auto-remediates common issues, and escalates intelligently when human judgment is needed.",
    features: ["Predictive alerts", "Auto-remediation", "Smart escalation"],
    color: "primary",
    gradient: 'linear-gradient(135deg, hsl(216 100% 50% / 0.06), hsl(259 72% 58% / 0.03))',
  },
];

export const AceLabsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="labs"
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Subtle background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 80% 20%, hsl(259 72% 58% / 0.03), transparent 60%), radial-gradient(ellipse 40% 40% at 10% 80%, hsl(216 100% 50% / 0.025), transparent 50%)',
        }}
      />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-medium tracking-wide uppercase mb-6"
            style={{
              background: 'hsl(259 72% 58% / 0.06)',
              color: 'hsl(var(--accent))',
              border: '1px solid hsl(259 72% 58% / 0.12)',
            }}
          >
            <Sparkles className="w-3 h-3" />
            Internal Products
          </motion.div>

          <motion.h2
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-tight"
          >
            ACE Labs: Engineering the Future.
          </motion.h2>
          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="mt-5 text-base md:text-lg leading-relaxed"
            style={{ color: 'hsl(var(--body))' }}
          >
            Our internal R&amp;D arm builds autonomous agents and intelligent
            automations—the same tools we use to deliver at elite velocity for our clients.
          </motion.p>
        </div>

        {/* Lab Products Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {labProducts.map((product, i) => (
            <motion.div
              key={product.title}
              custom={3 + i}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="labs-card-premium rounded-2xl flex flex-col overflow-hidden"
            >
              {/* Card header with gradient strip */}
              <div className="p-6 pb-0">
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: product.gradient }}
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
                    className="px-2.5 py-0.5 text-[10px] font-semibold tracking-wider uppercase rounded-full"
                    style={{
                      background: product.color === "primary"
                        ? 'hsl(216 100% 50% / 0.08)'
                        : 'hsl(259 72% 58% / 0.08)',
                      color: product.color === "primary"
                        ? 'hsl(var(--primary))'
                        : 'hsl(var(--accent))',
                    }}
                  >
                    {product.status}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-foreground mb-2 tracking-tight">
                  {product.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'hsl(var(--body))' }}>
                  {product.description}
                </p>
              </div>

              {/* Features & CTA */}
              <div className="p-6 pt-5 mt-auto">
                <div className="flex flex-wrap gap-2 mb-5">
                  {product.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-2.5 py-1 text-[11px] font-medium rounded-md"
                      style={{
                        background: 'hsl(var(--secondary))',
                        color: 'hsl(var(--muted-foreground))',
                      }}
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <button
                  className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors duration-200 group"
                  style={{ color: product.color === 'primary' ? 'hsl(var(--primary))' : 'hsl(var(--accent))' }}
                >
                  Learn more
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          custom={7}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-14"
        >
          <Button variant="outline-premium" size="lg" asChild>
            <a href="#labs">
              Explore the Lab
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
