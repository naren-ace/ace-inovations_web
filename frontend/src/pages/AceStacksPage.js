import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { MouseGlow } from "@/components/MouseGlow";
import { ScrollSpiral } from "@/components/ScrollSpiral";
import { Footer } from "@/components/Footer";
import { ContactModal } from "@/components/ContactModal";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ArrowUpRight,
  Layers,
  Clock,
  CheckCircle,
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

const articles = [
  {
    category: "Growth Engineering",
    date: "Jan 2026",
    readTime: "12 min",
    title: "The AI-Assisted Launch Stack: How We Build for 10x Velocity",
    excerpt:
      "A deep dive into the exact toolchain and agentic workflows we use to take products from zero to production in under a week.",
    stack: ["Next.js", "Tailwind", "Vercel", "GPT-4"],
    color: "primary",
  },
  {
    category: "Platform Engineering",
    date: "Dec 2025",
    readTime: "9 min",
    title: "Building a Multi-Tenant SaaS: Architecture That Scales to $10M ARR",
    excerpt:
      "The engineering decisions, database strategies, and infrastructure patterns behind a marketplace that scaled from zero to $10M.",
    stack: ["Node.js", "PostgreSQL", "Redis", "AWS"],
    color: "accent",
  },
  {
    category: "Agentic Workflows",
    date: "Dec 2025",
    readTime: "8 min",
    title: "From CI/CD to AI/CD: Autonomous Deployment Pipelines",
    excerpt:
      "How the ACE Velocity Agent eliminates manual DevOps by using AI to manage environment provisioning, testing, and rollback decisions.",
    stack: ["Docker", "Kubernetes", "GitHub Actions", "LangChain"],
    color: "primary",
  },
  {
    category: "Technical Debt",
    date: "Nov 2025",
    readTime: "7 min",
    title: "Friction-Mapping: A Framework for Quantifying Technical Debt",
    excerpt:
      "The methodology behind ACE Friction-Scanner: how we assign cost-of-delay scores to every piece of technical debt in a codebase.",
    stack: ["Python", "AST Analysis", "Grafana", "SonarQube"],
    color: "accent",
  },
  {
    category: "Growth Engineering",
    date: "Oct 2025",
    readTime: "10 min",
    title: "The SEO Playbook for Technical Founders: First Principles",
    excerpt:
      "A first-principles approach to technical SEO that goes beyond keyword stuffing, designed for engineers who want organic growth baked into their architecture.",
    stack: ["Next.js", "Schema.org", "Ahrefs", "Screaming Frog"],
    color: "primary",
  },
  {
    category: "Enterprise Systems",
    date: "Sep 2025",
    readTime: "11 min",
    title: "Orchestrating Chaos: How Flow-Bot Connects 12 Enterprise Tools",
    excerpt:
      "A case study in building an intelligent orchestration layer that connects Salesforce, Jira, Slack, and 9 other tools into a single autonomous workflow.",
    stack: ["n8n", "Temporal", "Pinecone", "OpenAI"],
    color: "accent",
  },
];

const verifiedTools = [
  {
    name: "Vercel",
    category: "Deployment",
    description: "Edge-first deployment platform. Zero-config, instant rollbacks.",
    href: "#",
  },
  {
    name: "Supabase",
    category: "Backend",
    description: "Open-source Firebase alternative with real-time Postgres.",
    href: "#",
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    description: "Utility-first CSS for building any design at velocity.",
    href: "#",
  },
  {
    name: "LangChain",
    category: "AI Framework",
    description: "The standard for building LLM-powered applications.",
    href: "#",
  },
  {
    name: "Temporal",
    category: "Orchestration",
    description: "Durable workflow engine for mission-critical processes.",
    href: "#",
  },
  {
    name: "Grafana",
    category: "Observability",
    description: "Unified monitoring, logging, and tracing platform.",
    href: "#",
  },
  {
    name: "Linear",
    category: "Project Management",
    description: "The issue tracker built for high-velocity engineering teams.",
    href: "#",
  },
];

export default function AceStacksPage() {
  const heroRef = useRef(null);
  const gridRef = useRef(null);
  const sidebarRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: "-50px" });
  const gridInView = useInView(gridRef, { once: true, margin: "-80px" });
  const sidebarInView = useInView(sidebarRef, { once: true, margin: "-80px" });
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="min-h-screen animate-bg-breathe">
      <ScrollSpiral />
      <MouseGlow />
      <Navbar />

      <main>
        {/* Hero */}
        <section ref={heroRef} className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 60% 40% at 40% 30%, hsl(216 100% 50% / 0.04), transparent 60%), radial-gradient(ellipse 40% 40% at 70% 70%, hsl(259 72% 58% / 0.03), transparent 50%)',
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
                  background: 'hsl(216 100% 50% / 0.06)',
                  color: 'hsl(var(--primary))',
                  border: '1px solid hsl(216 100% 50% / 0.12)',
                }}
                data-testid="stacks-hero-badge"
              >
                <Layers className="w-3 h-3" />
                Engineering Blog
              </motion.div>

              <motion.h1
                custom={1}
                variants={fadeUp}
                initial="hidden"
                animate={heroInView ? "visible" : "hidden"}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tighter text-foreground"
                data-testid="stacks-hero-heading"
              >
                ACE Stacks:{" "}
                <span className="gradient-text">Field Notes from the Frontline</span>.
              </motion.h1>

              <motion.p
                custom={2}
                variants={fadeUp}
                initial="hidden"
                animate={heroInView ? "visible" : "hidden"}
                className="mt-6 text-base md:text-lg leading-relaxed max-w-2xl"
                style={{ color: 'hsl(var(--body))' }}
                data-testid="stacks-hero-description"
              >
                Deep technical breakdowns of the architectures, toolchains, and agentic
                workflows that power the products we ship at ACE inovations.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Articles + Sidebar */}
        <section ref={gridRef} className="relative pb-24 lg:pb-32">
          <div className="section-container relative z-10">
            <div className="grid lg:grid-cols-3 gap-10">
              {/* Articles: 2-column grid */}
              <div className="lg:col-span-2">
                <div className="grid sm:grid-cols-2 gap-6">
                  {articles.map((article, i) => (
                    <motion.article
                      key={article.title}
                      custom={i}
                      variants={fadeUp}
                      initial="hidden"
                      animate={gridInView ? "visible" : "hidden"}
                      className="stacks-article-card group rounded-xl overflow-hidden flex flex-col cursor-pointer"
                      data-testid={`stacks-article-${i}`}
                    >
                      {/* Stack visual header */}
                      <div
                        className="relative h-36 flex items-center justify-center overflow-hidden"
                        style={{
                          background: article.color === 'primary'
                            ? 'linear-gradient(135deg, hsl(216 100% 50% / 0.04), hsl(216 100% 65% / 0.08))'
                            : 'linear-gradient(135deg, hsl(259 72% 58% / 0.04), hsl(259 72% 72% / 0.08))',
                        }}
                      >
                        {/* Tech stack logos as pills */}
                        <div className="flex flex-wrap items-center justify-center gap-2 px-6">
                          {article.stack.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1.5 text-[11px] font-semibold rounded-lg tracking-wide"
                              style={{
                                background: 'hsl(var(--card) / 0.9)',
                                color: 'hsl(var(--foreground))',
                                border: '1px solid hsl(var(--border) / 0.6)',
                                backdropFilter: 'blur(8px)',
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Subtle grid lines */}
                        <div
                          className="absolute inset-0 opacity-30 pointer-events-none"
                          style={{
                            backgroundImage: `linear-gradient(hsl(var(--border) / 0.5) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border) / 0.5) 1px, transparent 1px)`,
                            backgroundSize: '40px 40px',
                          }}
                        />
                      </div>

                      <div className="p-6 flex flex-col flex-1">
                        {/* Meta */}
                        <div className="flex items-center gap-3 mb-3">
                          <span
                            className="text-[11px] font-semibold tracking-wider uppercase"
                            style={{
                              color: article.color === "primary"
                                ? 'hsl(var(--primary))'
                                : 'hsl(var(--accent))',
                            }}
                          >
                            // {article.category}
                          </span>
                          <span className="text-xs flex items-center gap-1" style={{ color: 'hsl(var(--caption))' }}>
                            <Clock className="w-3 h-3" />
                            {article.readTime}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="stacks-article-title text-base font-bold text-foreground tracking-tight leading-snug mb-3">
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
                            className="text-xs font-medium flex items-center gap-1 transition-all duration-200 group-hover:gap-2"
                            style={{
                              color: article.color === 'primary'
                                ? 'hsl(var(--primary))'
                                : 'hsl(var(--accent))',
                            }}
                          >
                            Read
                            <ArrowRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5" />
                          </span>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </div>

              {/* Sidebar: Recommended Stack */}
              <div ref={sidebarRef} className="lg:col-span-1">
                <motion.div
                  custom={0}
                  variants={fadeUp}
                  initial="hidden"
                  animate={sidebarInView ? "visible" : "hidden"}
                  className="sticky top-24"
                >
                  <div
                    className="rounded-xl overflow-hidden"
                    style={{
                      background: 'hsl(var(--card) / 0.8)',
                      border: '1px solid hsl(var(--border) / 0.6)',
                      backdropFilter: 'blur(16px)',
                    }}
                    data-testid="stacks-sidebar"
                  >
                    {/* Sidebar Header */}
                    <div
                      className="px-6 py-5"
                      style={{
                        borderBottom: '1px solid hsl(var(--border) / 0.5)',
                        background: 'linear-gradient(135deg, hsl(216 100% 50% / 0.03), hsl(259 72% 58% / 0.03))',
                      }}
                    >
                      <p
                        className="text-xs font-medium tracking-[0.2em] uppercase mb-2"
                        style={{ color: 'hsl(var(--primary))' }}
                      >
                        Recommended Stack
                      </p>
                      <h3 className="text-lg font-bold text-foreground tracking-tight">
                        The Tools that Power ACE
                      </h3>
                    </div>

                    {/* Tool List */}
                    <div className="p-3">
                      {verifiedTools.map((tool, i) => (
                        <motion.a
                          key={tool.name}
                          href={tool.href}
                          custom={1 + i}
                          variants={fadeUp}
                          initial="hidden"
                          animate={sidebarInView ? "visible" : "hidden"}
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-all duration-200 group/tool"
                          data-testid={`stacks-tool-${i}`}
                        >
                          <div
                            className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                            style={{
                              background: i % 2 === 0
                                ? 'hsl(216 100% 50% / 0.07)'
                                : 'hsl(259 72% 58% / 0.07)',
                            }}
                          >
                            <CheckCircle
                              className="w-3.5 h-3.5"
                              style={{
                                color: i % 2 === 0
                                  ? 'hsl(var(--primary))'
                                  : 'hsl(var(--accent))',
                              }}
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <p className="text-sm font-semibold text-foreground group-hover/tool:text-primary transition-colors duration-200">
                                {tool.name}
                              </p>
                              <ArrowUpRight className="w-3 h-3 opacity-0 group-hover/tool:opacity-100 transition-opacity duration-200" style={{ color: 'hsl(var(--primary))' }} />
                            </div>
                            <p className="text-[10px] font-medium tracking-wider uppercase mt-0.5" style={{ color: 'hsl(var(--caption))' }}>
                              {tool.category}
                            </p>
                            <p className="text-xs mt-1 leading-relaxed" style={{ color: 'hsl(var(--body))' }}>
                              {tool.description}
                            </p>
                          </div>
                        </motion.a>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="px-6 py-4" style={{ borderTop: '1px solid hsl(var(--border) / 0.5)' }}>
                      <Button
                        variant="premium"
                        size="default"
                        className="w-full btn-glow"
                        onClick={() => setContactOpen(true)}
                        data-testid="stacks-sidebar-cta"
                      >
                        Build With Our Stack
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </div>

                  {/* Affiliate Disclaimer */}
                  <motion.p
                    custom={8}
                    variants={fadeUp}
                    initial="hidden"
                    animate={sidebarInView ? "visible" : "hidden"}
                    className="mt-4 text-[11px] leading-relaxed px-2"
                    style={{ color: 'hsl(var(--caption))' }}
                    data-testid="stacks-disclaimer"
                  >
                    We only recommend tools that power the ACE Engine. Some links
                    may be affiliate links to support our R&amp;D.
                  </motion.p>
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
