import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ContactModal } from "@/components/ContactModal";
import { ArrowRight } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

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

const footerLinks = {
  Services: [
    { label: "Platform Engineering", href: "/#services" },
    { label: "Growth Engineering", href: "/growth-engineering", isRoute: true },
    { label: "ACE Squads", href: "/squads", isRoute: true },
    { label: "Strategic Blueprinting", href: "/#services" },
  ],
  Products: [
    { label: "ACE Labs", href: "/labs", isRoute: true },
    { label: "Velocity Agent", href: "/labs", isRoute: true },
    { label: "Flow-Bot", href: "/labs", isRoute: true },
    { label: "Friction-Scanner", href: "/labs", isRoute: true },
  ],
  Company: [
    { label: "About", href: "/#about" },
    { label: "Insights", href: "/#insights" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "/#about" },
  ],
};

export const Footer = () => {
  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-80px" });
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      {/* Global CTA Band */}
      <section
        ref={ctaRef}
        className="relative py-20 lg:py-28 overflow-hidden"
        style={{ background: 'hsl(var(--surface-subtle))' }}
      >
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, hsl(216 100% 50% / 0.04) 0%, transparent 70%)' }}
        />
        <div
          className="absolute left-0 right-0 top-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, hsl(var(--border)), transparent)' }}
        />

        <div className="section-container relative z-10 text-center">
          <motion.h2
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate={ctaInView ? "visible" : "hidden"}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tighter text-foreground leading-tight"
          >
            Ready to build the future?
          </motion.h2>
          <motion.p
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate={ctaInView ? "visible" : "hidden"}
            className="mt-5 text-base md:text-lg leading-relaxed max-w-lg mx-auto"
            style={{ color: 'hsl(var(--body))' }}
          >
            Let&apos;s discuss how ACE inovations can transform your vision into
            a production-ready platform.
          </motion.p>
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate={ctaInView ? "visible" : "hidden"}
            className="mt-10"
          >
            <Button variant="premium" size="xl" onClick={() => setContactOpen(true)}>
              Start a Project
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer Links */}
      <footer className="border-t border-border/60">
        <div className="section-container py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <div className="mb-4">
                <Logo size="small" />
              </div>
              <p className="text-sm leading-relaxed max-w-[240px]" style={{ color: 'hsl(var(--caption))' }}>
                Engineering the next generation of digital platforms with
                AI-augmented precision.
              </p>
            </div>

            {/* Link columns */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-xs font-semibold tracking-wide uppercase text-foreground mb-4">
                  {category}
                </h4>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link.label}>
                      {link.isRoute ? (
                        <Link
                          to={link.href}
                          className="text-sm hover:text-foreground transition-colors duration-200"
                          style={{ color: 'hsl(var(--caption))' }}
                        >
                          {link.label}
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          className="text-sm hover:text-foreground transition-colors duration-200"
                          style={{ color: 'hsl(var(--caption))' }}
                        >
                          {link.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <Separator className="my-10 opacity-60" />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs" style={{ color: 'hsl(var(--caption))' }}>
              &copy; {new Date().getFullYear()} ACE inovations. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {["Privacy", "Terms", "Cookies"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-xs hover:text-foreground transition-colors duration-200"
                  style={{ color: 'hsl(var(--caption))' }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      <ContactModal open={contactOpen} onOpenChange={setContactOpen} />
    </>
  );
};
