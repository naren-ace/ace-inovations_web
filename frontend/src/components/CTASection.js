import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ContactModal } from "@/components/ContactModal";
import { ArrowRight } from "lucide-react";

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

export const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <section
        id="about"
        ref={ref}
        className="relative py-24 lg:py-32 overflow-hidden"
      >
        {/* Subtle decorative elements */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, hsl(216 100% 50% / 0.04) 0%, transparent 70%)',
          }}
        />

        <div className="section-container relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <motion.p
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="text-xs font-medium tracking-[0.2em] uppercase mb-4"
              style={{ color: 'hsl(var(--primary))' }}
            >
              About ACE inovations
            </motion.p>
            <motion.h2
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tighter text-foreground leading-tight"
            >
              Built by engineers,{" "}
              <span className="gradient-text">for builders</span>.
            </motion.h2>
            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="mt-5 text-base md:text-lg leading-relaxed"
              style={{ color: 'hsl(var(--body))' }}
            >
              ACE inovations is a modern engineering and growth studio. We
              combine world-class software development with agentic AI workflows
              to deliver end-to-end digital solutions that scale.
            </motion.p>
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button
                variant="premium"
                size="xl"
                onClick={() => setContactOpen(true)}
                className="btn-glow"
                data-testid="about-cta-btn"
              >
                Start a Project
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
              <Button
                variant="outline-premium"
                size="xl"
                asChild
              >
                <a href="mailto:hello@aceinovations.dev">
                  hello@aceinovations.dev
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <ContactModal open={contactOpen} onOpenChange={setContactOpen} />
    </>
  );
};
