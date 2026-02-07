import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ContactModal } from "@/components/ContactModal";
import { ArrowRight } from "lucide-react";

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

export const PhilosophySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <section
        ref={ref}
        className="relative py-24 lg:py-32"
        style={{ background: 'hsl(var(--surface-subtle))' }}
      >
        <div
          className="absolute left-0 right-0 top-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, hsl(var(--border)), transparent)' }}
        />

        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <p
                className="text-xs font-medium tracking-[0.2em] uppercase mb-4"
                style={{ color: 'hsl(var(--accent))' }}
                data-testid="philosophy-label"
              >
                Philosophy
              </p>
              <h2
                className="text-3xl sm:text-4xl font-extrabold tracking-tighter text-foreground leading-tight"
                data-testid="philosophy-heading"
              >
                We don&apos;t hide the fact that we use AI.{" "}
                <span className="gradient-text">We celebrate it.</span>
              </h2>
            </motion.div>

            <div className="space-y-6">
              <motion.p
                custom={1}
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="text-base leading-relaxed"
                style={{ color: 'hsl(var(--body))' }}
                data-testid="philosophy-content"
              >
                At ACE inovations, we aren&apos;t just consumers of technology; we are
                builders of it. ACE Labs is our internal innovation hub where we
                develop proprietary agents and frameworks to solve the friction we
                see in the market every day.
              </motion.p>
              <motion.div
                custom={2}
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                <Button
                  variant="premium"
                  size="lg"
                  onClick={() => setContactOpen(true)}
                  data-testid="philosophy-cta-btn"
                  className="btn-glow"
                >
                  Start a Project
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <ContactModal open={contactOpen} onOpenChange={setContactOpen} />
    </>
  );
};
