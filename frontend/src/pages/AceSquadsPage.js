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
  Compass,
  Code2,
  TrendingUp,
  Zap,
  Users,
  Layers,
} from "lucide-react";

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

const squadRoles = [
  {
    icon: Compass,
    title: "The Architect",
    description:
      "Systems thinker who translates business goals into scalable technical blueprints. Owns the technical vision and ensures every component works as one cohesive system.",
    color: "primary",
  },
  {
    icon: Code2,
    title: "The Engineer",
    description:
      "Full-stack builder powered by AI-augmented workflows. Ships production-grade code at velocity with industrial-quality standards and automated testing pipelines.",
    color: "accent",
  },
  {
    icon: TrendingUp,
    title: "The Growth Specialist",
    description:
      "Data-driven operator who instruments every touchpoint for growth. Technical SEO, funnel optimization, and performance engineering baked in from day one.",
    color: "primary",
  },
];

const advantages = [
  {
    icon: Zap,
    title: "ACE Engine Powered",
    description: "Every squad runs on our proprietary AI-augmented delivery platform, multiplying output without sacrificing quality.",
  },
  {
    icon: Users,
    title: "Zero Handoff Friction",
    description: "One integrated unit means decisions happen in real-time. No tickets between departments, no waiting for approvals across teams.",
  },
  {
    icon: Layers,
    title: "Full-Stack Ownership",
    description: "From strategy to code to growth, your squad owns the entire stack. One team, one mission, one velocity.",
  },
];

export default function AceSquadsPage() {
  const heroRef = useRef(null);
  const modelRef = useRef(null);
  const advantagesRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: "-50px" });
  const modelInView = useInView(modelRef, { once: true, margin: "-80px" });
  const advantagesInView = useInView(advantagesRef, { once: true, margin: "-80px" });
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="min-h-screen animate-bg-breathe">
      <ScrollSpiral />
      <MouseGlow />
      <Navbar />

      <main>
        {/* Hero */}
        <section
          ref={heroRef}
          className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden"
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 40% at 50% 30%, hsl(216 100% 50% / 0.04), transparent 60%), radial-gradient(ellipse 40% 40% at 80% 70%, hsl(259 72% 58% / 0.03), transparent 50%)",
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
                  background: "hsl(216 100% 50% / 0.06)",
                  color: "hsl(var(--primary))",
                  border: "1px solid hsl(216 100% 50% / 0.12)",
                }}
                data-testid="squads-page-badge"
              >
                <Users className="w-3 h-3" />
                The ACE Model
              </motion.div>

              <motion.h1
                custom={1}
                variants={fadeUp}
                initial="hidden"
                animate={heroInView ? "visible" : "hidden"}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tighter text-foreground"
                data-testid="squads-page-heading"
              >
                ACE Squads:{" "}
                <span className="gradient-text">High-Velocity Units</span>.
              </motion.h1>

              <motion.p
                custom={2}
                variants={fadeUp}
                initial="hidden"
                animate={heroInView ? "visible" : "hidden"}
                className="mt-6 text-base md:text-lg leading-relaxed max-w-2xl"
                style={{ color: "hsl(var(--body))" }}
                data-testid="squads-page-description"
              >
                We don&apos;t assemble freelancers. We deploy integrated, high-velocity
                units where an Architect, Engineer, and Growth Specialist operate
                as one&mdash;powered by the ACE Engine.
              </motion.p>

              <motion.div
                custom={3}
                variants={fadeUp}
                initial="hidden"
                animate={heroInView ? "visible" : "hidden"}
                className="mt-10"
              >
                <Button
                  variant="premium"
                  size="lg"
                  onClick={() => setContactOpen(true)}
                  className="btn-glow"
                  data-testid="squads-page-cta"
                >
                  Deploy a Squad
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* The Integrated Model */}
        <section ref={modelRef} className="relative py-24 lg:py-32">
          <div className="absolute inset-0 tech-grid-bg opacity-30" />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, hsl(var(--background)), hsl(var(--background) / 0.96) 50%, hsl(var(--background)))",
            }}
          />

          <div className="section-container relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <motion.p
                custom={0}
                variants={fadeUp}
                initial="hidden"
                animate={modelInView ? "visible" : "hidden"}
                className="text-xs font-medium tracking-[0.2em] uppercase mb-4"
                style={{ color: "hsl(var(--accent))" }}
              >
                The Integrated Model
              </motion.p>
              <motion.h2
                custom={1}
                variants={fadeUp}
                initial="hidden"
                animate={modelInView ? "visible" : "hidden"}
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tighter text-foreground leading-tight"
                data-testid="squad-model-heading"
              >
                One Unit.{" "}
                <span className="gradient-text">Three Disciplines</span>.
              </motion.h2>
              <motion.p
                custom={2}
                variants={fadeUp}
                initial="hidden"
                animate={modelInView ? "visible" : "hidden"}
                className="mt-4 text-base md:text-lg leading-relaxed"
                style={{ color: "hsl(var(--body))" }}
              >
                Each ACE Squad combines architecture, engineering, and growth
                expertise into a single unit that moves at startup speed with
                enterprise precision.
              </motion.p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {squadRoles.map((role, i) => (
                <motion.div
                  key={role.title}
                  custom={3 + i}
                  variants={fadeUp}
                  initial="hidden"
                  animate={modelInView ? "visible" : "hidden"}
                  className="labs-card-premium rounded-2xl p-7 lg:p-8 flex flex-col"
                  data-testid={`squad-role-${i}`}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{
                      background:
                        role.color === "primary"
                          ? "hsl(216 100% 50% / 0.07)"
                          : "hsl(259 72% 58% / 0.07)",
                    }}
                  >
                    <role.icon
                      className="w-5.5 h-5.5"
                      style={{
                        color:
                          role.color === "primary"
                            ? "hsl(var(--primary))"
                            : "hsl(var(--accent))",
                      }}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-foreground tracking-tight mb-3">
                    {role.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "hsl(var(--body))" }}
                  >
                    {role.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Squads > Freelancers */}
        <section
          ref={advantagesRef}
          className="relative py-24 lg:py-32"
          style={{ background: "hsl(var(--surface-subtle))" }}
        >
          <div
            className="absolute left-0 right-0 top-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, hsl(var(--border)), transparent)",
            }}
          />

          <div className="section-container relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <motion.div
                custom={0}
                variants={fadeUp}
                initial="hidden"
                animate={advantagesInView ? "visible" : "hidden"}
              >
                <p
                  className="text-xs font-medium tracking-[0.2em] uppercase mb-4"
                  style={{ color: "hsl(var(--primary))" }}
                >
                  The Advantage
                </p>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tighter text-foreground leading-tight">
                  Not Freelancers.{" "}
                  <span className="gradient-text">High-Velocity Units</span>.
                </h2>
                <p
                  className="mt-5 text-base leading-relaxed max-w-lg"
                  style={{ color: "hsl(var(--body))" }}
                >
                  Traditional outsourcing assembles individuals who have never
                  worked together. ACE Squads are pre-integrated teams with
                  shared tooling, processes, and a single mission: shipping your
                  product at maximum velocity.
                </p>
              </motion.div>

              <div className="space-y-4">
                {advantages.map((item, i) => (
                  <motion.div
                    key={item.title}
                    custom={1 + i}
                    variants={fadeUp}
                    initial="hidden"
                    animate={advantagesInView ? "visible" : "hidden"}
                    className="flex items-start gap-4 p-5 rounded-xl border border-border/50 bg-card/60 hover:bg-card hover:border-border transition-all duration-300"
                    style={{ backdropFilter: "blur(8px)" }}
                    data-testid={`squad-advantage-${i}`}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                      style={{ background: "hsl(216 100% 50% / 0.07)" }}
                    >
                      <item.icon
                        className="w-4.5 h-4.5"
                        style={{ color: "hsl(var(--primary))" }}
                      />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-1">
                        {item.title}
                      </p>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "hsl(var(--body))" }}
                      >
                        {item.description}
                      </p>
                    </div>
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
