import type { GlobalConfig } from 'payload'

export const About: GlobalConfig = {
  slug: 'about',
  label: 'About Page',
  access: { read: () => true },
  fields: [
    {
      type: 'group',
      name: 'hero',
      label: 'Hero Section',
      fields: [
        { name: 'label', type: 'text', defaultValue: 'About ACE inovations', label: 'Label' },
        { name: 'headingPart1', type: 'text', defaultValue: 'Platforms engineered to', label: 'Heading (before highlight)' },
        { name: 'headingHighlight', type: 'text', defaultValue: 'think, adapt, and scale', label: 'Heading (gradient text)' },
        { name: 'intro', type: 'textarea', defaultValue: 'ACE inovations is a modern engineering and growth studio. We combine world-class software development with agentic AI workflows to deliver end-to-end digital solutions that scale.', label: 'Intro Text' },
        { name: 'ctaButtonText', type: 'text', defaultValue: 'Start a Project', label: 'CTA Button Text' },
        { name: 'email', type: 'text', defaultValue: 'hello@aceinovations.dev', label: 'Email' },
      ],
    },
    {
      type: 'group',
      name: 'mission',
      label: 'Mission Section',
      fields: [
        { name: 'heading', type: 'text', defaultValue: 'Eliminate the gap between', label: 'Heading (before highlight)' },
        { name: 'headingHighlight', type: 'text', defaultValue: 'vision and execution', label: 'Heading (gradient text)' },
        { name: 'body1', type: 'textarea', defaultValue: 'We build custom platforms and marketplaces from the ground up, automate and improve existing systems, and develop our own SaaS products — like AI-powered dashboards and intelligent assistants — that help businesses operate at a higher level.', label: 'Paragraph 1' },
        { name: 'body2', type: 'textarea', defaultValue: 'Whether you need a new platform launched, an existing one supercharged, or a turnkey AI solution integrated into your workflow — ACE delivers production-grade systems at startup speed.', label: 'Paragraph 2' },
      ],
    },
    {
      type: 'group',
      name: 'vision',
      label: 'Vision Section',
      fields: [
        { name: 'heading', type: 'text', defaultValue: 'A world where', label: 'Heading (before highlight)' },
        { name: 'headingHighlight', type: 'text', defaultValue: 'every founder ships', label: 'Heading (gradient text)' },
        { name: 'headingAfter', type: 'text', defaultValue: 'like a Fortune 500.', label: 'Heading (after highlight)' },
        { name: 'body1', type: 'textarea', defaultValue: "We envision a future where the quality of your engineering isn't determined by the size of your team or budget. Where AI-augmented workflows democratize access to world-class software development.", label: 'Paragraph 1' },
        { name: 'body2', type: 'textarea', defaultValue: 'Our goal is to become the engineering partner of choice for ambitious founders — building the platforms, marketplaces, and intelligent SaaS products that power the next generation of digital businesses.', label: 'Paragraph 2' },
      ],
    },
    {
      name: 'values',
      type: 'array',
      label: 'Values',
      minRows: 1,
      maxRows: 8,
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
        { name: 'icon', type: 'select', options: [
          { label: 'Target', value: 'target' },
          { label: 'CPU', value: 'cpu' },
          { label: 'Shield', value: 'shield' },
          { label: 'Lightbulb', value: 'lightbulb' },
          { label: 'Users', value: 'users' },
          { label: 'Rocket', value: 'rocket' },
          { label: 'Zap', value: 'zap' },
          { label: 'Code', value: 'code' },
        ]},
      ],
    },
    {
      type: 'group',
      name: 'contact',
      label: 'Contact Section',
      fields: [
        { name: 'heading', type: 'text', defaultValue: "Let's build something", label: 'Heading (before highlight)' },
        { name: 'headingHighlight', type: 'text', defaultValue: 'extraordinary', label: 'Heading (gradient text)' },
        { name: 'description', type: 'textarea', defaultValue: 'Whether you have a detailed spec or just an idea on a napkin — we want to hear about it. Our team responds within 24 hours.', label: 'Description' },
        { name: 'email', type: 'text', defaultValue: 'hello@aceinovations.dev', label: 'Email' },
        { name: 'responseTime', type: 'text', defaultValue: 'Within 24 hours, typically same day', label: 'Response Time' },
      ],
    },
  ],
}
