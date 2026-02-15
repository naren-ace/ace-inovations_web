import type { GlobalConfig, Block } from 'payload'

/* ── Section Blocks ─────────────────────────────────────── */

const HeroBlock: Block = {
  slug: 'hero',
  labels: { singular: 'Hero Section', plural: 'Hero Sections' },
  fields: [
    { name: 'badgeText', type: 'text', defaultValue: 'INNOVATE. ELEVATE. ACE IT.', label: 'Badge Text' },
    { name: 'headlinePart1', type: 'text', defaultValue: 'Engineering the', label: 'Headline (before highlight)' },
    { name: 'headlineHighlight', type: 'text', defaultValue: 'Next Generation', label: 'Headline (gradient text)' },
    { name: 'headlinePart2', type: 'text', defaultValue: 'of Digital Platforms.', label: 'Headline (after highlight)' },
    { name: 'narrative', type: 'textarea', label: 'Sub-narrative', defaultValue: "We partner with founders to build intelligent marketplace systems—platforms that don't just connect buyers and sellers, but automate support, predict issues, and continuously improve. From rapid SaaS implementations to fully custom AI-native architectures, we deliver production-ready systems. Where traditional agencies build static platforms, we build systems that evolve with your business. This is the future of marketplace engineering. And it's available today." },
    { name: 'ctaButtonText', type: 'text', defaultValue: 'Start a Project', label: 'Primary Button Text' },
    { name: 'secondaryButtonText', type: 'text', defaultValue: 'Explore the ACE Engine', label: 'Secondary Button Text' },
  ],
}

const TransitionBlock: Block = {
  slug: 'transition',
  labels: { singular: 'Transition Statement', plural: 'Transition Statements' },
  fields: [
    { name: 'textBefore1', type: 'text', defaultValue: 'We help businesses', label: 'Text before first highlight' },
    { name: 'highlight1', type: 'text', defaultValue: 'launch faster', label: 'First highlighted phrase' },
    { name: 'textMiddle', type: 'text', defaultValue: ', automate workflows, and', label: 'Text between highlights' },
    { name: 'highlight2', type: 'text', defaultValue: 'reduce operational friction', label: 'Second highlighted phrase' },
    { name: 'textAfter', type: 'text', defaultValue: '.', label: 'Text after second highlight' },
  ],
}

const PhilosophyBlock: Block = {
  slug: 'philosophy',
  labels: { singular: 'Philosophy Section', plural: 'Philosophy Sections' },
  fields: [
    { name: 'label', type: 'text', defaultValue: 'Philosophy', label: 'Section Label' },
    { name: 'headingPart1', type: 'text', defaultValue: "We don't hide the fact that we use AI.", label: 'Heading (before highlight)' },
    { name: 'headingHighlight', type: 'text', defaultValue: 'We celebrate it.', label: 'Heading (gradient text)' },
    { name: 'body', type: 'textarea', label: 'Body Text', defaultValue: "At ACE Innovations, technology isn't a shortcut—it's a force multiplier. We use it to handle solved problems so our team can focus on what actually matters: your unique business logic, complex workflows, and competitive differentiation.\n\nThe result? Faster delivery without sacrificing quality, security, or scalability." },
    { name: 'ctaButtonText', type: 'text', defaultValue: 'Start a Project', label: 'Button Text' },
  ],
}

const EngineBlock: Block = {
  slug: 'engine',
  labels: { singular: 'ACE Engine Section', plural: 'ACE Engine Sections' },
  fields: [
    { name: 'label', type: 'text', defaultValue: 'The ACE Engine', label: 'Section Label' },
    { name: 'heading', type: 'text', defaultValue: 'The ACE Intelligence Layer.', label: 'Heading' },
    { name: 'description', type: 'textarea', defaultValue: "We don't just write code; we orchestrate intelligence. Our proprietary AI-augmented workflows eliminate friction, ensuring industrial-grade quality at the speed of thought.", label: 'Description' },
    {
      name: 'capabilities',
      type: 'array',
      label: 'Capability Cards',
      maxRows: 6,
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
        { name: 'icon', type: 'select', options: [
          { label: 'CPU', value: 'cpu' },
          { label: 'Layers', value: 'layers' },
          { label: 'Git Branch', value: 'git-branch' },
          { label: 'Shield', value: 'shield' },
          { label: 'Zap', value: 'zap' },
          { label: 'Code', value: 'code' },
        ], defaultValue: 'cpu' },
      ],
    },
  ],
}

const SquadsBlock: Block = {
  slug: 'squads',
  labels: { singular: 'ACE Squads Section', plural: 'ACE Squads Sections' },
  fields: [
    { name: 'label', type: 'text', defaultValue: 'ACE Squads', label: 'Section Label' },
    { name: 'heading', type: 'text', defaultValue: 'Integrated Expertise.', label: 'Heading' },
    { name: 'description', type: 'textarea', defaultValue: 'Our squads combine three disciplines into a single, high-velocity unit. No silos. No handoff friction. Just seamless execution.', label: 'Description' },
    {
      name: 'pillars',
      type: 'array',
      label: 'Pillars',
      maxRows: 4,
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
        { name: 'icon', type: 'select', options: [
          { label: 'Lightbulb', value: 'lightbulb' },
          { label: 'Code', value: 'code' },
          { label: 'Rocket', value: 'rocket' },
          { label: 'Target', value: 'target' },
        ], defaultValue: 'lightbulb' },
        {
          name: 'capabilities',
          type: 'array',
          label: 'Capability List',
          fields: [{ name: 'text', type: 'text', required: true }],
        },
      ],
    },
  ],
}

const LoopBlock: Block = {
  slug: 'loop',
  labels: { singular: 'ACE Loop / Process', plural: 'ACE Loop Sections' },
  fields: [
    { name: 'label', type: 'text', defaultValue: 'Our Process', label: 'Section Label' },
    { name: 'heading', type: 'text', defaultValue: 'The ACE Loop.', label: 'Heading' },
    { name: 'description', type: 'textarea', defaultValue: 'A refined, repeatable process that transforms complexity into clarity and vision into production-ready systems.', label: 'Description' },
    {
      name: 'steps',
      type: 'array',
      label: 'Process Steps',
      maxRows: 5,
      fields: [
        { name: 'number', type: 'text', required: true },
        { name: 'title', type: 'text', required: true },
        { name: 'stepLabel', type: 'text', required: true, label: 'Step Label' },
        { name: 'description', type: 'textarea', required: true },
      ],
    },
  ],
}

const InsightsBlock: Block = {
  slug: 'insights',
  labels: { singular: 'Insights Section', plural: 'Insights Sections' },
  fields: [
    { name: 'label', type: 'text', defaultValue: 'Insights', label: 'Section Label' },
    { name: 'heading', type: 'text', defaultValue: 'From the Lab.', label: 'Heading' },
    { name: 'description', type: 'textarea', defaultValue: 'Deep dives into engineering, AI, and the strategies driving modern digital product development.', label: 'Description' },
    {
      name: 'articles',
      type: 'array',
      label: 'Featured Articles',
      maxRows: 10,
      fields: [
        { name: 'category', type: 'text', required: true },
        { name: 'title', type: 'text', required: true },
        { name: 'excerpt', type: 'textarea', required: true },
        { name: 'readTime', type: 'text', defaultValue: '5 min read' },
        { name: 'date', type: 'text' },
      ],
    },
  ],
}

const CTABlock: Block = {
  slug: 'cta',
  labels: { singular: 'CTA / About Section', plural: 'CTA Sections' },
  fields: [
    { name: 'label', type: 'text', defaultValue: 'About ACE inovations', label: 'Section Label' },
    { name: 'headingPart1', type: 'text', defaultValue: 'Built by engineers,', label: 'Heading (before highlight)' },
    { name: 'headingHighlight', type: 'text', defaultValue: 'for builders', label: 'Heading (gradient text)' },
    { name: 'description', type: 'textarea', defaultValue: 'ACE inovations is a modern engineering and growth studio. We combine world-class software development with agentic AI workflows to deliver end-to-end digital solutions that scale.', label: 'Description' },
    { name: 'ctaButtonText', type: 'text', defaultValue: 'Start a Project', label: 'Button Text' },
    { name: 'email', type: 'text', defaultValue: 'hello@aceinovations.dev', label: 'Contact Email' },
  ],
}

const LeadMagnetBlock: Block = {
  slug: 'leadMagnet',
  labels: { singular: 'Lead Magnet / Free Audit', plural: 'Lead Magnet Sections' },
  fields: [
    { name: 'badgeText', type: 'text', defaultValue: 'Free for qualified projects', label: 'Badge Text' },
    { name: 'headingPart1', type: 'text', defaultValue: 'Get a Free', label: 'Heading (before highlight)' },
    { name: 'headingHighlight', type: 'text', defaultValue: 'Platform Audit', label: 'Heading (gradient text)' },
    { name: 'description', type: 'textarea', defaultValue: "Our engineers will analyse your current platform, identify friction points, and deliver an actionable improvement roadmap — at no cost.", label: 'Description' },
    { name: 'formHeading', type: 'text', defaultValue: 'Request Your Free Audit', label: 'Form Card Heading' },
    { name: 'formDescription', type: 'text', defaultValue: "No commitment required. We'll review your platform and send a detailed report.", label: 'Form Card Description' },
    { name: 'submitButtonText', type: 'text', defaultValue: 'Get My Free Audit', label: 'Submit Button Text' },
  ],
}

const CustomBlock: Block = {
  slug: 'custom',
  labels: { singular: 'Custom Section', plural: 'Custom Sections' },
  fields: [
    { name: 'label', type: 'text', label: 'Section Label (small text above heading)' },
    { name: 'heading', type: 'text', required: true, label: 'Heading' },
    { name: 'headingHighlight', type: 'text', label: 'Highlighted word(s) in heading (optional)' },
    { name: 'body', type: 'textarea', label: 'Body Text' },
    { name: 'ctaButtonText', type: 'text', label: 'Button Text (optional)' },
    { name: 'ctaButtonLink', type: 'text', label: 'Button Link (optional)', admin: { description: 'URL or #section-id' } },
    {
      name: 'style',
      type: 'select',
      defaultValue: 'default',
      label: 'Background Style',
      options: [
        { label: 'Default (transparent)', value: 'default' },
        { label: 'Subtle (gray surface)', value: 'subtle' },
        { label: 'Centered text', value: 'centered' },
      ],
    },
    { name: 'image', type: 'upload', relationTo: 'media', label: 'Section Image (optional)' },
  ],
}

/* ── Global Config ──────────────────────────────────────── */

export const Homepage: GlobalConfig = {
  slug: 'homepage',
  label: 'Homepage',
  admin: {
    group: 'Site Content',
    description: 'Drag to reorder, add, or remove homepage sections.',
  },
  access: {
    read: () => true,
    update: () => true,
  },
  fields: [
    {
      name: 'sections',
      type: 'blocks',
      label: 'Page Sections',
      labels: { singular: 'Section', plural: 'Sections' },
      admin: {
        description: 'Add, remove, and drag sections to reorder the homepage layout.',
      },
      blocks: [
        HeroBlock,
        TransitionBlock,
        PhilosophyBlock,
        EngineBlock,
        SquadsBlock,
        LoopBlock,
        InsightsBlock,
        CTABlock,
        LeadMagnetBlock,
        CustomBlock,
      ],
    },
  ],
}
