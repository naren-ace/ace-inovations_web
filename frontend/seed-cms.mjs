#!/usr/bin/env node
const BASE = 'http://localhost:3000'

async function getToken() {
  const res = await fetch(`${BASE}/api/users/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: 'admin@aceinovations.com', password: 'AceAdmin2025!' }),
  })
  const data = await res.json()
  return data.token
}

async function seed() {
  const token = await getToken()
  const headers = { 'Content-Type': 'application/json', Authorization: `JWT ${token}` }

  // 1. Seed Homepage Global
  console.log('Seeding Homepage...')
  await fetch(`${BASE}/api/globals/homepage`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      sections: [
        {
          blockType: 'hero',
          badgeText: 'INNOVATE. ELEVATE. ACE IT.',
          headlinePart1: 'Engineering the',
          headlineHighlight: 'Next Generation',
          headlinePart2: 'of Digital Platforms.',
          narrative: "We partner with founders to build intelligent marketplace systems—platforms that don't just connect buyers and sellers, but automate support, predict issues, and continuously improve. From rapid SaaS implementations to fully custom AI-native architectures, we deliver production-ready systems. Where traditional agencies build static platforms, we build systems that evolve with your business. This is the future of marketplace engineering. And it's available today.",
          ctaButtonText: 'Start a Project',
          secondaryButtonText: 'Explore the ACE Engine',
        },
        {
          blockType: 'transition',
          textBefore1: 'We help businesses',
          highlight1: 'launch faster',
          textMiddle: ', automate workflows, and',
          highlight2: 'reduce operational friction',
          textAfter: '.',
        },
        {
          blockType: 'philosophy',
          label: 'Philosophy',
          headingPart1: "We don't hide the fact that we use AI.",
          headingHighlight: 'We celebrate it.',
          body: "At ACE Innovations, technology isn't a shortcut—it's a force multiplier. We use it to handle solved problems so our team can focus on what actually matters: your unique business logic, complex workflows, and competitive differentiation.\n\nThe result? Faster delivery without sacrificing quality, security, or scalability.",
          ctaButtonText: 'Start a Project',
        },
        {
          blockType: 'engine',
          label: 'What We Build',
          heading: 'Engineering meets intelligence.',
          description: "We don't just write code — we orchestrate intelligence. Our AI-augmented squads combine strategy, engineering, and growth into a single high-velocity unit to deliver systems that scale.",
          capabilities: [
            { title: 'Product Strategy', description: 'From market research to technical roadmaps — we define the right problem before engineering the solution.', icon: 'cpu' },
            { title: 'AI-Augmented Development', description: 'Our engineers work alongside AI agents that handle boilerplate, testing, and docs — so we focus on your business logic.', icon: 'cpu' },
            { title: 'Scalable Architecture', description: 'Architecture that performs under pressure — designed to handle 10x growth without 10x complexity.', icon: 'layers' },
            { title: 'Security-First Design', description: 'Enterprise-grade security at every layer — authentication, encryption, audit trails, and zero-trust principles.', icon: 'shield' },
            { title: 'Full-Stack Engineering', description: 'End-to-end development from cloud infrastructure to pixel-perfect interfaces, powered by modern frameworks.', icon: 'code' },
            { title: 'Growth Engineering', description: 'Technical SEO, funnel instrumentation, and performance optimization to drive sustainable traction post-launch.', icon: 'zap' },
          ],
        },
        {
          blockType: 'loop',
          label: 'Our Process',
          heading: 'The ACE Loop.',
          description: 'A battle-tested methodology that transforms ambitious ideas into production-ready platforms — systematically, predictably, and at velocity.',
          steps: [
            { number: '01', title: 'Assess', stepLabel: 'STEP 01', description: 'Deep-dive into your business model, technical landscape, and growth objectives to build a strategic foundation.' },
            { number: '02', title: 'Create', stepLabel: 'STEP 02', description: 'Architect and build production-grade systems using AI-augmented engineering workflows for maximum velocity.' },
            { number: '03', title: 'Elevate', stepLabel: 'STEP 03', description: 'Launch, optimize, and scale — with continuous monitoring, performance tuning, and iterative improvements.' },
            { number: '04', title: 'Evolve', stepLabel: 'STEP 04', description: 'Adapt to market changes with data-driven iteration cycles, ensuring your platform stays ahead of the curve.' },
          ],
        },
        {
          blockType: 'leadMagnet',
          badgeText: 'Free for qualified projects',
          headingPart1: 'Get a Free',
          headingHighlight: 'Platform Audit',
          description: "Our engineers will analyse your current platform, identify friction points, and deliver an actionable improvement roadmap — at no cost.",
          formHeading: 'Request Your Free Audit',
          formDescription: "No commitment required. We'll review your platform and send a detailed report.",
          submitButtonText: 'Get My Free Audit',
        },
      ],
    }),
  })
  console.log('Homepage seeded!')

  // 2. Seed About Global
  console.log('Seeding About page...')
  await fetch(`${BASE}/api/globals/about`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      hero: {
        label: 'About ACE inovations',
        headingPart1: 'Platforms engineered to',
        headingHighlight: 'think, adapt, and scale',
        intro: 'ACE inovations is a modern engineering and growth studio. We combine world-class software development with agentic AI workflows to deliver end-to-end digital solutions that scale.',
        ctaButtonText: 'Start a Project',
        email: 'hello@aceinovations.dev',
      },
      mission: {
        heading: 'Eliminate the gap between',
        headingHighlight: 'vision and execution',
        body1: 'We build custom platforms and marketplaces from the ground up, automate and improve existing systems, and develop our own SaaS products — like AI-powered dashboards and intelligent assistants — that help businesses operate at a higher level.',
        body2: 'Whether you need a new platform launched, an existing one supercharged, or a turnkey AI solution integrated into your workflow — ACE delivers production-grade systems at startup speed.',
      },
      vision: {
        heading: 'A world where',
        headingHighlight: 'every founder ships',
        headingAfter: 'like a Fortune 500.',
        body1: "We envision a future where the quality of your engineering isn't determined by the size of your team or budget. Where AI-augmented workflows democratize access to world-class software development.",
        body2: 'Our goal is to become the engineering partner of choice for ambitious founders — building the platforms, marketplaces, and intelligent SaaS products that power the next generation of digital businesses.',
      },
      values: [
        { title: 'Precision Engineering', description: 'Every line of code is intentional. We build systems that are clean, maintainable, and production-ready from day one.', icon: 'target' },
        { title: 'AI-First Thinking', description: 'We integrate AI not as an afterthought, but as a core capability — from development workflows to product features.', icon: 'cpu' },
        { title: 'Security by Default', description: 'Enterprise-grade security practices are embedded in every layer of our architecture, not bolted on at the end.', icon: 'shield' },
        { title: 'Radical Transparency', description: 'No black boxes. We share our process, progress, and challenges openly with every client.', icon: 'lightbulb' },
        { title: 'Client Partnership', description: "We don't just take briefs — we become an extension of your team, invested in your success as if it were our own.", icon: 'users' },
        { title: 'Relentless Improvement', description: 'Ship fast, measure everything, iterate constantly. We believe the best products are never truly finished.', icon: 'rocket' },
      ],
      contact: {
        heading: "Let's build something",
        headingHighlight: 'extraordinary',
        description: 'Whether you have a detailed spec or just an idea on a napkin — we want to hear about it. Our team responds within 24 hours.',
        email: 'hello@aceinovations.dev',
        responseTime: 'Within 24 hours, typically same day',
      },
    }),
  })
  console.log('About page seeded!')

  // 3. Seed Services
  console.log('Seeding Services...')
  const services = [
    {
      title: 'Platform & Marketplace Development',
      slug: 'platform-development',
      shortDescription: 'Custom platforms built from scratch',
      order: 1,
      icon: 'globe',
      colorTheme: 'blue',
      page: {
        heroHeading: 'Custom Platform & Marketplace Development',
        heroDescription: 'We build custom digital platforms and marketplaces from the ground up — designed to scale, automate, and generate revenue from day one.',
        ctaButtonText: 'Start a Project',
        features: [
          { title: 'Multi-sided Marketplaces', description: 'Connect buyers, sellers, and service providers on intelligent platforms with automated matching and dispute resolution.' },
          { title: 'Custom Admin Dashboards', description: 'Full-featured admin panels with real-time analytics, user management, and operational controls.' },
          { title: 'Payment Integration', description: 'Secure payment processing with multi-currency support, escrow systems, and automated payouts.' },
          { title: 'AI-Powered Search & Discovery', description: 'Smart search with filters, recommendations, and personalized results that improve over time.' },
        ],
        whyUsHeading: 'Why ACE for Platform Development?',
        whyUsBody: 'We don\'t use templates. Every platform we build is engineered from scratch to match your exact business model, with AI-augmented workflows that cut delivery time by 40%.',
        deliverables: [
          { item: 'Custom platform architecture & design' },
          { item: 'Full-stack development & deployment' },
          { item: 'Payment & authentication integration' },
          { item: 'Admin dashboard & analytics' },
          { item: '90-day post-launch support' },
        ],
      },
    },
    {
      title: 'Mobile App Development',
      slug: 'mobile-development',
      shortDescription: 'Native & cross-platform apps',
      order: 2,
      icon: 'smartphone',
      colorTheme: 'purple',
      page: {
        heroHeading: 'Mobile App Development',
        heroDescription: 'Native and cross-platform mobile applications that deliver exceptional user experiences and drive business growth.',
        ctaButtonText: 'Start a Project',
        features: [
          { title: 'Cross-Platform Development', description: 'Build once, deploy everywhere — using React Native and Flutter for iOS and Android.' },
          { title: 'Native Performance', description: 'Apps that feel native with smooth animations, fast load times, and platform-specific optimizations.' },
          { title: 'Offline-First Architecture', description: 'Apps that work seamlessly even without internet connectivity, syncing data when back online.' },
          { title: 'Push Notifications & Engagement', description: 'Smart notification systems that drive user retention without being intrusive.' },
        ],
        whyUsHeading: 'Why ACE for Mobile Development?',
        whyUsBody: 'Our mobile team combines deep platform expertise with AI-augmented testing workflows, ensuring your app is performant, accessible, and bug-free at launch.',
        deliverables: [
          { item: 'UI/UX design for mobile' },
          { item: 'Cross-platform or native development' },
          { item: 'App Store & Play Store submission' },
          { item: 'Analytics & crash reporting integration' },
          { item: 'Post-launch optimization & updates' },
        ],
      },
    },
    {
      title: 'AI-Powered Automation',
      slug: 'ai-automation',
      shortDescription: 'Intelligent workflows & AI agents',
      order: 3,
      icon: 'cpu',
      colorTheme: 'blue',
      page: {
        heroHeading: 'AI-Powered Automation',
        heroDescription: 'Transform your operations with intelligent automation — from AI chatbots and smart dashboards to fully autonomous workflow engines.',
        ctaButtonText: 'Start a Project',
        features: [
          { title: 'AI Chatbots & Assistants', description: 'Custom-trained AI agents that handle customer support, lead qualification, and internal queries 24/7.' },
          { title: 'Workflow Automation', description: 'Eliminate manual processes with intelligent automation that learns and improves over time.' },
          { title: 'Predictive Analytics', description: 'AI-powered dashboards that surface insights, predict trends, and recommend actions.' },
          { title: 'Document Processing', description: 'Automated extraction, classification, and processing of documents using computer vision and NLP.' },
        ],
        whyUsHeading: 'Why ACE for AI Automation?',
        whyUsBody: 'We don\'t just bolt AI onto existing systems. We architect AI-native solutions where intelligence is woven into every layer of the application.',
        deliverables: [
          { item: 'AI strategy & use case mapping' },
          { item: 'Custom model training & fine-tuning' },
          { item: 'Integration with existing systems' },
          { item: 'Monitoring & continuous improvement' },
          { item: 'Knowledge base & documentation' },
        ],
      },
    },
    {
      title: 'Platform Optimization & Scaling',
      slug: 'platform-optimization',
      shortDescription: 'Scale & optimize existing platforms',
      order: 4,
      icon: 'trending-up',
      colorTheme: 'purple',
      page: {
        heroHeading: 'Platform Optimization & Scaling',
        heroDescription: 'Take your existing platform to the next level — improve performance, reduce costs, and prepare for 10x growth.',
        ctaButtonText: 'Start a Project',
        features: [
          { title: 'Performance Optimization', description: 'Identify and eliminate bottlenecks — from database queries to API response times to frontend rendering.' },
          { title: 'Infrastructure Scaling', description: 'Architect for growth with auto-scaling, load balancing, and distributed systems design.' },
          { title: 'Cost Optimization', description: 'Reduce cloud spend without sacrificing performance through smart resource management and architecture improvements.' },
          { title: 'Technical Debt Resolution', description: 'Systematic modernization of legacy codebases, dependencies, and architectural patterns.' },
        ],
        whyUsHeading: 'Why ACE for Platform Optimization?',
        whyUsBody: 'We bring fresh eyes and deep expertise to existing platforms. Our optimization process is data-driven, measuring impact at every step.',
        deliverables: [
          { item: 'Platform audit & performance report' },
          { item: 'Optimization roadmap & prioritization' },
          { item: 'Implementation & deployment' },
          { item: 'Load testing & validation' },
          { item: 'Monitoring & alerting setup' },
        ],
      },
    },
    {
      title: 'SaaS Product Engineering',
      slug: 'saas-engineering',
      shortDescription: 'From MVP to scale',
      order: 5,
      icon: 'code',
      colorTheme: 'blue',
      page: {
        heroHeading: 'SaaS Product Engineering',
        heroDescription: 'From MVP to market leader — we build SaaS products that are designed to scale, monetize, and evolve with your business.',
        ctaButtonText: 'Start a Project',
        features: [
          { title: 'MVP Development', description: 'Validate your idea fast with a production-quality MVP — not a throwaway prototype.' },
          { title: 'Multi-Tenant Architecture', description: 'Secure, scalable multi-tenant systems with isolated data, custom branding, and role-based access.' },
          { title: 'Subscription & Billing', description: 'Flexible billing models with usage-based pricing, trial periods, and automated invoicing.' },
          { title: 'API-First Design', description: 'Well-documented APIs that enable integrations, partnerships, and ecosystem growth.' },
        ],
        whyUsHeading: 'Why ACE for SaaS Engineering?',
        whyUsBody: 'We\'ve built SaaS products from zero to scale. Our architecture decisions are informed by real-world experience with growing user bases and evolving requirements.',
        deliverables: [
          { item: 'Product strategy & architecture design' },
          { item: 'Full-stack SaaS development' },
          { item: 'Payment & subscription integration' },
          { item: 'CI/CD pipeline & deployment automation' },
          { item: 'Growth engineering & analytics' },
        ],
      },
    },
    {
      title: 'Marketplace Customization',
      slug: 'marketplace-customization',
      shortDescription: 'Customize existing marketplace platforms',
      order: 6,
      icon: 'settings',
      colorTheme: 'purple',
      page: {
        heroHeading: 'Marketplace Customization',
        heroDescription: 'Already on a SaaS-based marketplace platform? We customize, extend, and optimize existing solutions to match your unique business needs.',
        ctaButtonText: 'Start a Project',
        features: [
          { title: 'Platform Customization', description: 'Deep customization of existing marketplace platforms — from UI/UX to business logic and workflows.' },
          { title: 'Custom Plugin Development', description: 'Build custom plugins and extensions that add unique functionality to your existing platform.' },
          { title: 'Migration & Integration', description: 'Seamlessly migrate data and integrate third-party services into your marketplace ecosystem.' },
          { title: 'Performance Tuning', description: 'Optimize your existing marketplace for speed, SEO, and conversion rate.' },
        ],
        whyUsHeading: 'Why ACE for Marketplace Customization?',
        whyUsBody: 'We understand both custom-built and SaaS-based marketplace architectures. Whether you\'re on Sharetribe, Arcadier, or a custom solution, we know how to make it work for your business.',
        deliverables: [
          { item: 'Platform audit & customization plan' },
          { item: 'UI/UX redesign & implementation' },
          { item: 'Custom feature development' },
          { item: 'Third-party integrations' },
          { item: 'Ongoing maintenance & support' },
        ],
      },
    },
  ]

  for (const service of services) {
    const res = await fetch(`${BASE}/api/services`, {
      method: 'POST',
      headers,
      body: JSON.stringify(service),
    })
    const data = await res.json()
    console.log(`  Service: ${service.title} - ${data.doc ? 'OK' : 'FAILED'}`)
  }

  console.log('\nAll CMS content seeded successfully!')
}

seed().catch(console.error)
