import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Cog, Rocket } from "lucide-react";

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

const steps = [
  {
    number: "01",
    title: "Discover",
    label: "Blueprint",
    description:
      "Deep-dive into your business, users, and technical landscape. We map every constraint and opportunity.",
    icon: Search,
    color: "primary",
  },
  {
    number: "02",
    title: "Execute",
    label: "AI-Augmented Build",
    description:
      "Our AI-augmented squads build at velocity. Continuous delivery with industrial-grade quality controls.",
    icon: Cog,
    color: "accent",
  },
  {
    number: "03",
    title: "Optimize",
    label: "Growth & Scale",
    description:
      "Instrument, measure, iterate. Growth engineering and performance optimization drive sustainable scale.",
    icon: Rocket,
    color: "primary",
  },
];

export const AceLoop = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="process" ref={ref} className="relative py-24 lg:py-32">
      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-xs font-medium tracking-[0.2em] uppercase mb-4"
            style={{ color: 'hsl(var(--primary))' }}
          >
            Our Process
          </motion.p>
          <motion.h2
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground leading-tight"
          >
            The ACE Loop.
          </motion.h2>
          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="mt-4 text-base md:text-lg leading-relaxed"
            style={{ color: 'hsl(var(--body))' }}
          >
            A refined, repeatable process that transforms complexity into clarity
            and vision into production-ready systems.
          </motion.p>
        </div>

        {/* Process Steps - Horizontal */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-[52px] left-[16.67%] right-[16.67%] h-px" style={{ background: 'hsl(var(--border))' }} />

          <div className="grid lg:grid-cols-3 gap-12 lg:gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                custom={3 + i}
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="relative flex flex-col items-center text-center"
              >
                {/* Step circle */}
                <div className="relative z-10 mb-8">
                  <div
                    className="w-[104px] h-[104px] rounded-full flex flex-col items-center justify-center border"
                    style={{
                      background: 'hsl(var(--card))',
                      borderColor: step.color === "primary"
                        ? 'hsl(216 100% 50% / 0.2)'
                        : 'hsl(259 72% 58% / 0.2)',
                      boxShadow: step.color === "primary"
                        ? '0 0 30px hsl(216 100% 50% / 0.06)'
                        : '0 0 30px hsl(259 72% 58% / 0.06)',
                    }}
                  >
                    <span
                      className="text-xs font-mono tracking-widest mb-0.5"
                      style={{
                        color: step.color === "primary"
                          ? 'hsl(var(--primary))'
                          : 'hsl(var(--accent))',
                      }}
                    >
                      {step.number}
                    </span>
                    <step.icon
                      className="w-5 h-5"
                      style={{
                        color: step.color === "primary"
                          ? 'hsl(var(--primary))'
                          : 'hsl(var(--accent))',
                      }}
                    />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {step.title}
                </h3>
                <p
                  className="text-xs font-medium tracking-wide uppercase mb-3"
                  style={{
                    color: step.color === "primary"
                      ? 'hsl(var(--primary))'
                      : 'hsl(var(--accent))',
                  }}
                >
                  {step.label}
                </p>
                <p className="text-sm leading-relaxed max-w-xs" style={{ color: 'hsl(var(--body))' }}>
                  {step.description}
                </p>

                {/* Arrow connector (mobile) */}
                {i < steps.length - 1 && (
                  <div
                    className="lg:hidden mt-8 w-px h-12"
                    style={{
                      background: 'linear-gradient(180deg, hsl(var(--border)), transparent)',
                    }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
