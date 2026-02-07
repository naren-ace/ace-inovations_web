import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FluidShape } from "@/components/FluidShape";
import { KeywordMarquee } from "@/components/KeywordMarquee";
import { ContactModal } from "@/components/ContactModal";
import { useState } from "react";
import { ArrowRight, ChevronRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15 + i * 0.1,
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  }),
};

export const HeroSection = () => {
  const [contactOpen, setContactOpen] = useState(false);

  const scrollToEngine = () => {
    const el = document.getElementById("engine");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
        {/* Subtle background gradient */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 70% 40%, hsl(216 100% 50% / 0.04), transparent 60%), radial-gradient(ellipse 50% 50% at 20% 80%, hsl(259 72% 58% / 0.03), transparent 50%)',
          }}
        />

        <div className="section-container relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(100vh-4rem)]">
            {/* Left: Content */}
            <div className="flex flex-col justify-center py-16 lg:py-0">
              {/* Tagline badge */}
              <motion.div
                custom={0}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="mb-8"
              >
                <span
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-wide uppercase"
                  style={{
                    background: 'hsl(216 100% 50% / 0.06)',
                    color: 'hsl(var(--primary))',
                    border: '1px solid hsl(216 100% 50% / 0.12)',
                  }}
                  data-testid="hero-badge"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  AI-Augmented Engineering Studio
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                custom={1}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tighter text-foreground"
                data-testid="hero-headline"
              >
                Engineering the{" "}
                <span className="gradient-text">Next Generation</span>{" "}
                of Digital Platforms.
              </motion.h1>

              {/* Sub-headline */}
              <motion.p
                custom={2}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="mt-6 text-base md:text-lg leading-relaxed max-w-xl"
                style={{ color: 'hsl(var(--body))' }}
                data-testid="hero-subheadline"
              >
                A modern engineering and growth studio. We integrate world-class
                software development with agentic AI workflows.
              </motion.p>

              {/* CTAs */}
              <motion.div
                custom={3}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="mt-10 flex flex-wrap gap-4"
              >
                <Button
                  variant="premium"
                  size="lg"
                  onClick={() => setContactOpen(true)}
                  className="btn-glow"
                  data-testid="hero-start-project-btn"
                >
                  Start a Project
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
                <Button
                  variant="outline-premium"
                  size="lg"
                  onClick={scrollToEngine}
                  data-testid="hero-explore-btn"
                >
                  Explore the ACE Engine
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </motion.div>

              {/* Keyword Marquee replacing social proof */}
              <motion.div
                custom={4}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="mt-14"
              >
                <KeywordMarquee />
              </motion.div>
            </div>

            {/* Right: Fluid Shape */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="hidden lg:flex items-center justify-center"
            >
              <div className="relative w-full aspect-square max-w-lg">
                <FluidShape />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <ContactModal open={contactOpen} onOpenChange={setContactOpen} />
    </>
  );
};
