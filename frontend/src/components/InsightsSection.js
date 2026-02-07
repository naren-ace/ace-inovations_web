import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Clock, Tag } from "lucide-react";

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

const articles = [
  {
    category: "Engineering",
    title: "Why Agentic Workflows are Replacing Traditional Dev",
    excerpt:
      "The shift from linear development to autonomous, agent-driven workflows is reshaping how elite teams ship software. Here\u2019s what\u2019s actually changing.",
    readTime: "8 min read",
    date: "Jan 2026",
    color: "primary",
    accentBg: 'linear-gradient(135deg, hsl(216 100% 50% / 0.06), hsl(216 100% 65% / 0.02))',
  },
  {
    category: "Case Study",
    title: "The Engineering of a $1M Marketplace",
    excerpt:
      "An inside look at the technical architecture, growth engineering, and AI-augmented processes behind a marketplace that scaled from zero to $1M ARR.",
    readTime: "12 min read",
    date: "Dec 2025",
    color: "accent",
    accentBg: 'linear-gradient(135deg, hsl(259 72% 58% / 0.06), hsl(259 72% 72% / 0.02))',
  },
  {
    category: "Strategy",
    title: "Technical Debt is a Growth Problem, Not an Engineering One",
    excerpt:
      "Reframing tech debt as a strategic growth constraint changes everything about how you prioritize, allocate resources, and measure success.",
    readTime: "6 min read",
    date: "Nov 2025",
    color: "primary",
    accentBg: 'linear-gradient(135deg, hsl(216 100% 50% / 0.04), hsl(216 100% 65% / 0.02))',
  },
  {
    category: "AI",
    title: "Building AI-Native Products: Lessons from the Trenches",
    excerpt:
      "What we\u2019ve learned from building 15+ AI-native applications\u2014the architectures that scale, the pitfalls to avoid, and the patterns that actually work.",
    readTime: "10 min read",
    date: "Oct 2025",
    color: "accent",
    accentBg: 'linear-gradient(135deg, hsl(259 72% 58% / 0.04), hsl(259 72% 72% / 0.02))',
  },
  {
    category: "Growth",
    title: "The SEO Playbook for Technical Founders",
    excerpt:
      "A first-principles approach to technical SEO that goes beyond keyword stuffing\u2014designed for engineers who want to build organic growth into their architecture.",
    readTime: "7 min read",
    date: "Sep 2025",
    color: "primary",
    accentBg: 'linear-gradient(135deg, hsl(216 100% 50% / 0.04), hsl(216 100% 65% / 0.02))',
  },
];

export const InsightsSection = () => {
  const ref = useRef(null);
  const scrollContainerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  const scroll = (direction) => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const scrollAmount = 380;
    el.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
    setTimeout(checkScroll, 400);
  };

  return (
    <section
      id="insights"
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: 'hsl(var(--surface-subtle))' }}
    >
      <div className="section-container relative z-10">
        {/* Header with navigation */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <motion.p
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="text-xs font-medium tracking-[0.2em] uppercase mb-4"
              style={{ color: 'hsl(var(--primary))' }}
            >
              Insights
            </motion.p>
            <motion.h2
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-tight"
            >
              From the Lab.
            </motion.h2>
            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="mt-3 text-base md:text-lg leading-relaxed max-w-lg"
              style={{ color: 'hsl(var(--body))' }}
            >
              Deep dives into engineering, AI, and the strategies driving
              modern digital product development.
            </motion.p>
          </div>

          {/* Scroll controls */}
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex items-center gap-2"
          >
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-200 disabled:opacity-30"
              style={{
                borderColor: 'hsl(var(--border))',
                color: 'hsl(var(--foreground))',
                background: canScrollLeft ? 'hsl(var(--card))' : 'transparent',
              }}
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-200 disabled:opacity-30"
              style={{
                borderColor: 'hsl(var(--border))',
                color: 'hsl(var(--foreground))',
                background: canScrollRight ? 'hsl(var(--card))' : 'transparent',
              }}
              aria-label="Scroll right"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <motion.div
        custom={3}
        variants={fadeUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div
          ref={scrollContainerRef}
          onScroll={checkScroll}
          className="flex gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory pl-6 sm:pl-8 lg:pl-[max(3rem,calc((100vw-80rem)/2+3rem))] pr-6"
          style={{ scrollPaddingLeft: '1.5rem' }}
        >
          {articles.map((article, i) => (
            <motion.article
              key={article.title}
              className="flex-none w-[340px] sm:w-[360px] snap-start group"
            >
              <div
                className="h-full rounded-xl flex flex-col overflow-hidden transition-all duration-300 group-hover:shadow-elevated"
                style={{
                  background: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border) / 0.6)',
                }}
              >
                {/* Article accent bar */}
                <div
                  className="h-1 w-full"
                  style={{ background: article.accentBg }}
                />

                <div className="p-6 flex flex-col flex-1">
                  {/* Meta */}
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="px-2.5 py-0.5 text-[10px] font-semibold tracking-wider uppercase rounded-full"
                      style={{
                        background: article.color === "primary"
                          ? 'hsl(216 100% 50% / 0.08)'
                          : 'hsl(259 72% 58% / 0.08)',
                        color: article.color === "primary"
                          ? 'hsl(var(--primary))'
                          : 'hsl(var(--accent))',
                      }}
                    >
                      {article.category}
                    </span>
                    <span className="text-xs flex items-center gap-1" style={{ color: 'hsl(var(--caption))' }}>
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-foreground tracking-tight leading-snug mb-3 group-hover:text-primary transition-colors duration-200">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm leading-relaxed flex-1" style={{ color: 'hsl(var(--body))' }}>
                    {article.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between mt-5 pt-4" style={{ borderTop: '1px solid hsl(var(--border) / 0.4)' }}>
                    <span className="text-xs" style={{ color: 'hsl(var(--caption))' }}>
                      {article.date}
                    </span>
                    <span
                      className="text-xs font-medium flex items-center gap-1 transition-colors duration-200 group-hover:gap-2"
                      style={{ color: article.color === 'primary' ? 'hsl(var(--primary))' : 'hsl(var(--accent))' }}
                    >
                      Read
                      <ArrowRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}

          {/* Spacer for last card visibility */}
          <div className="flex-none w-6" aria-hidden="true" />
        </div>
      </motion.div>
    </section>
  );
};
