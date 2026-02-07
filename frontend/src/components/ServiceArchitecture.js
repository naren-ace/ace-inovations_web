import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Globe, TrendingUp, Users, Map } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  }),
};

const services = [
  {
    icon: Globe,
    title: "Platform Engineering",
    subtitle: "Custom SaaS & Marketplaces",
    description:
      "Full-stack platform development from architecture to deployment. We build scalable, multi-tenant systems designed for growth.",
    tags: ["SaaS", "Marketplaces", "APIs"],
    color: "primary",
  },
  {
    icon: TrendingUp,
    title: "Growth Engineering",
    subtitle: "Technical SEO & Funnel Instrumentation",
    description:
      "Data-driven growth infrastructure. We instrument every touchpoint to maximize conversion and retention.",
    tags: ["SEO", "Analytics", "CRO"],
    color: "accent",
  },
  {
    icon: Users,
    title: "ACE Squads",
    subtitle: "High-velocity, on-demand engineering units",
    description:
      "Embedded engineering teams that integrate seamlessly with your workflow. Scale up or down as your roadmap demands.",
    tags: ["Teams", "Agile", "On-Demand"],
    color: "primary",
  },
  {
    icon: Map,
    title: "Strategic Blueprinting",
    subtitle: "Technical audits & Product roadmapping",
    description:
      "Deep technical analysis and strategic planning. We map your path from current state to market-leading architecture.",
    tags: ["Audits", "Roadmaps", "Strategy"],
    color: "accent",
  },
];

export const ServiceArchitecture = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="services"
      ref={ref}
      className="relative py-24 lg:py-32"
      style={{ background: 'hsl(var(--surface-subtle))' }}
    >
      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-xs font-medium tracking-[0.2em] uppercase mb-4"
            style={{ color: 'hsl(var(--primary))' }}
          >
            Service Architecture
          </motion.p>
          <motion.h2
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground leading-tight"
          >
            The Four Pillars.
          </motion.h2>
          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="mt-4 text-base md:text-lg leading-relaxed"
            style={{ color: 'hsl(var(--body))' }}
          >
            A systematic approach to building and scaling digital products,
            powered by intelligence at every layer.
          </motion.p>
        </div>

        {/* Service Cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={3 + i}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <Card variant="glass-hover" className="h-full flex flex-col">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center mb-3"
                      style={{
                        background: service.color === "primary"
                          ? 'hsl(216 100% 50% / 0.08)'
                          : 'hsl(259 72% 58% / 0.08)',
                      }}
                    >
                      <service.icon
                        className="w-5 h-5"
                        style={{
                          color: service.color === "primary"
                            ? 'hsl(var(--primary))'
                            : 'hsl(var(--accent))',
                        }}
                      />
                    </div>
                    <span
                      className="text-xs font-mono tracking-wider"
                      style={{ color: 'hsl(var(--caption))' }}
                    >
                      0{i + 1}
                    </span>
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-sm" style={{ color: 'hsl(var(--caption))' }}>
                    {service.subtitle}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-sm leading-relaxed flex-1" style={{ color: 'hsl(var(--body))' }}>
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-5">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-medium rounded-md"
                        style={{
                          background: 'hsl(var(--secondary))',
                          color: 'hsl(var(--muted-foreground))',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
