export const site = {
  name: "Tuan Tran",
  role: "Senior Frontend Engineer",
  tagline:
    "I build scalable SaaS and enterprise web products with React, Next.js, and TypeScript — from architecture to production.",
  email: "tmtuanyd@gmail.com",
  phone: "0346 731 336",
  phoneHref: "tel:+84346731336",
  location: "Hanoi · Remote",
  availability: "Open to opportunities",
  focus: "SaaS · Frontend Architecture · Full-stack delivery",
  education:
    "Hanoi University of Science and Technology — Engineer's Degree in Automatic Control (Very Good), GPA 3.2/4.0",
  social: {
    github: "https://github.com/tmtuanyd",
  },
  about: [
    "My work sits where product requirements meet production software: multi-role SaaS platforms, real-time collaboration tools, data-heavy dashboards, and commerce systems that have to stay maintainable as they grow.",
    "With nearly 7 years across startups, outsourcing, and fully remote international teams, I care about the parts that compound — reusable architecture, clear ownership, performance, and shipping features that hold up after release.",
  ],
  highlights: [
    { label: "Focus", value: "SaaS · Architecture · Delivery" },
    { label: "Discipline", value: "Frontend Engineering" },
    { label: "Availability", value: "Open to work" },
  ],
  skillGroups: [
    {
      code: "A",
      label: "Frontend",
      blurb: "The surface users actually touch.",
      items: [
        "React / Next.js",
        "TypeScript",
        "Tailwind CSS",
        "MUI / HeroUI",
        "Responsive UI",
        "Design Systems",
      ],
    },
    {
      code: "B",
      label: "Architecture",
      blurb: "How systems stay maintainable.",
      items: [
        "Frontend Architecture",
        "SSR / CSR / ISR",
        "Code Splitting",
        "Performance",
        "Accessibility",
        "Component Design",
      ],
    },
    {
      code: "C",
      label: "Backend & Data",
      blurb: "APIs and production services.",
      items: [
        "Next.js API Routes",
        "Supabase / PostgreSQL",
        "REST / GraphQL",
        "Auth & RLS",
        "Stripe",
        "AWS S3 / Lambda",
      ],
    },
    {
      code: "D",
      label: "Quality",
      blurb: "Confidence before and after release.",
      items: [
        "Jest",
        "React Testing Library",
        "Playwright",
        "Cucumber",
        "Code Review",
        "Production Support",
      ],
    },
  ],
  experience: [
    {
      company: "Support Dept.",
      period: "Oct 2025 – Present",
      place: "Remote, Australia",
      summary:
        "Australian software development company delivering cloud-based products for international clients. Working as the primary frontend engineer responsible for designing, developing, and maintaining production SaaS applications while collaborating directly with international stakeholders in a fully remote Agile environment.",
      highlights: [
        "Lead frontend implementation from technical planning through production deployment.",
        "Collaborate directly with Product Owners to analyse business requirements and translate them into scalable technical solutions.",
        "Design reusable frontend architecture with a strong focus on maintainability, scalability, and long-term product evolution.",
        "Contribute beyond frontend development by implementing backend APIs, database logic, authentication, and cloud integrations.",
        "Work closely with backend engineers, mobile developers, designers, and QA engineers to deliver high-quality software.",
      ],
    },
    {
      company: "ANSYS ICA GmbH",
      period: "Dec 2022 – Sep 2025",
      place: "Remote, Germany",
      summary:
        "German software engineering company delivering enterprise web applications and digital products for clients across Europe. Worked as a Frontend Engineer within cross-functional Agile teams, collaborating with international clients to build scalable, production-ready applications across multiple industries.",
      highlights: [
        "Developed modern web applications using React, Next.js, and TypeScript for enterprise and SaaS products.",
        "Collaborated with Product Owners, UI/UX designers, backend engineers, and QA teams throughout the software development lifecycle.",
        "Built reusable UI components and scalable frontend architectures to improve maintainability and development efficiency.",
        "Participated in technical discussions, code reviews, performance optimisation, and production releases.",
        "Contributed to multiple enterprise products.",
      ],
    },
    {
      company: "VMO",
      period: "Jun 2021 – Dec 2022",
      place: "Hanoi, Vietnam",
      summary:
        "Vietnamese software outsourcing company delivering web and mobile products for international clients. Depending on project structure, worked both within a frontend team and independently owned frontend delivery.",
      highlights: [
        "Developed responsive web applications using React, TypeScript, and modern JavaScript.",
        "Built reusable UI components and implemented responsive layouts from Figma and design specifications.",
        "Integrated REST APIs and collaborated with backend engineers to deliver end-to-end product features.",
        "Improved application maintainability through reusable components and clean architecture.",
        "Worked within Agile teams, participating in sprint planning, daily stand-ups, code reviews, and production releases.",
      ],
    },
    {
      company: "Ilico Software",
      period: "Dec 2019 – Jun 2021",
      place: "Hanoi, Vietnam",
      summary:
        "Vietnam engineering center of a France-based software company specializing in custom digital products and enterprise software. Working with headquarters and distributed engineering teams on scalable web applications for international clients across collaboration, e-commerce, healthcare, and business management.",
      highlights: [
        "Developed modern web applications using React, TypeScript, and Next.js for international clients.",
        "Built reusable, scalable, and maintainable UI components following modern frontend architecture.",
        "Collaborated directly with product owners, designers, backend engineers, and QA teams in an Agile environment.",
        "Integrated RESTful and GraphQL APIs while ensuring responsive, accessible, and high-performance user experiences.",
        "Participated in feature planning, technical discussions, code reviews, and production deployments.",
        "Optimized application performance, maintainability, and cross-browser compatibility across multiple projects.",
      ],
    },
  ],
  featured: [
    {
      id: "01",
      slug: "insurevault",
      title: "InsureVault",
      subtitle: "Multi-role insurance SaaS",
      badge: "Next.js · Supabase",
      preview: "policy · media · checkout",
      problem:
        "Insurers, brokers, photographers, and customers needed one platform for policies, subscriptions, secure media, reporting, and onboarding — across web and mobile.",
      role: "Led frontend architecture and delivery in React/Next.js, partnered with the Product Owner on solution design, and extended into Next.js APIs, Supabase/PostgreSQL, auth, and RLS.",
      outcome:
        "A production multi-role SaaS with Stripe, AWS S3, Firebase messaging, Cloudflare Turnstile, and Resend — plus reliable support for payments, permissions, and large media workflows.",
      stack: [
        "React",
        "Next.js",
        "TypeScript",
        "Supabase",
        "PostgreSQL",
        "Stripe",
        "AWS S3",
      ],
    },
    {
      id: "02",
      slug: "aintivirus",
      title: "AIntivirus",
      subtitle: "Web3 brand & commerce platform",
      badge: "Next.js · Solana",
      preview: "wallet · nft · commerce",
      problem:
        "A multi-product brand needed content, NFT-gated media, merch commerce, and trading services (eSIM, gift cards, trade-in) under one scalable frontend.",
      role: "Led Next.js frontend delivery — Solana wallet unlock flows, commerce UX, trading pipelines, Contentful CMS, and Mux streaming — with TypeScript, TanStack Query, and Zod.",
      outcome:
        "A maintainable multi-section platform spanning marketing, gated media, checkout, and Web3 ownership verification.",
      stack: [
        "Next.js",
        "TypeScript",
        "Tailwind",
        "HeroUI",
        "Solana",
        "Contentful",
        "Mux",
      ],
    },
    {
      id: "03",
      slug: "klarland-meet",
      title: "Klarland Meet",
      subtitle: "Real-time collaboration platform",
      badge: "React · Three.js",
      preview: "meet · showroom · sync",
      problem:
        "Organisations needed virtual meetings, digital showrooms, and collaborative workspaces with real-time communication — not a flat video call bolted onto a static site.",
      role: "Designed and maintained a modular React SPA with Jitsi workflows, Socket.IO sync, Three.js 3D workspaces, multimedia viewers, i18n, and automated tests.",
      outcome:
        "A cross-platform collaboration product with live workspace sync, role-based access, and interactive 3D showrooms.",
      stack: [
        "React",
        "Redux",
        "Socket.IO",
        "Jitsi",
        "Three.js",
        "Playwright",
      ],
    },
  ],
  moreProjects: [
    {
      title: "Datameer",
      blurb: "Enterprise data-transformation UI with Playwright/Cucumber coverage.",
      summary:
        "Cloud-native data transformation platform that enables data teams to prepare, transform, govern, and deliver analytics-ready data through visual workflows, SQL, and pipeline automation within Snowflake.",
      highlights: [
        "Developed scalable React interfaces for enterprise data transformation, workflow management, and analytics operations.",
        "Designed reusable UI components and shared frontend modules to support complex, data-intensive business workflows.",
        "Collaborated with backend engineers to integrate REST and GraphQL APIs for datasets, transformation jobs, and metadata.",
        "Expanded automated testing coverage with Playwright and Cucumber end-to-end suites.",
        "Optimised performance through lazy loading, component refactoring, and efficient client-side state management.",
      ],
      stack: [
        "React",
        "TypeScript",
        "REST APIs",
        "MUI",
        "Redux",
        "GraphQL",
        "dnd kit",
        "Playwright",
        "Cucumber",
      ],
    },
    {
      title: "Webshop 3.0 (MIAB)",
      blurb: "Multi-tenant SSR e-commerce across regional branded marketplaces.",
      summary:
        "Multi-tenant SSR e-commerce platform powering multiple branded marketplaces across different regions from a shared frontend architecture.",
      highlights: [
        "Developed a modular Preact/React architecture supporting multiple brands and regional marketplaces from one codebase.",
        "Delivered faceted search, category navigation, product pages, cart, checkout, wishlist, and customer accounts.",
        "Implemented tenant-specific configurations and feature flags to maximise reuse while supporting brand-specific functionality.",
        "Improved performance, SEO, and UX through SSR, code splitting, PWA features, and API integration.",
      ],
      stack: [
        "Preact",
        "React",
        "Redux",
        "Razzle (SSR)",
        "Auth0",
        "Stripe",
        "GraphQL",
      ],
    },
    {
      title: "DeWiz",
      blurb: "Golf analytics dashboards from wearable motion data.",
      summary:
        "Data-driven analytics platform that transforms motion data from wearable devices into actionable insights for golfers and coaches.",
      highlights: [
        "Developed interactive dashboards for real-time performance data and complex user metrics.",
        "Implemented scalable frontend architecture for data-intensive interfaces across devices.",
        "Integrated Firebase, Google Maps, analytics, and tracking services for international deployments.",
        "Worked with backend engineers on API integrations and responsiveness for large datasets.",
        "Supported continuous product improvements through optimisation, features, and production maintenance.",
      ],
      stack: [
        "React",
        "TypeScript",
        "Firebase",
        "Google Maps API",
        "Google Tag Manager",
      ],
    },
    {
      title: "Hansefit",
      blurb: "Corporate fitness ecosystem with i18n membership flows.",
      summary:
        "Digital fitness ecosystem connecting employers, employees, and fitness providers through subscription management, partner services, and localized customer experiences.",
      highlights: [
        "Delivered Next.js applications for customer-facing membership and operational management workflows.",
        "Developed reusable UI components and responsive interfaces across multilingual modules.",
        "Contributed to frontend architecture, feature delivery, and production support in a distributed team.",
        "Improved maintainability through component standardization and continuous codebase refinement.",
      ],
      stack: [
        "Next.js",
        "TypeScript",
        "Material UI",
        "Redux",
        "AWS S3",
        "Firebase",
      ],
    },
    {
      title: "Swyft",
      blurb: "Multi-step product recommendation journeys with payments and maps.",
      summary:
        "Customer-facing recommendation platform that guides users through complex product selection with dynamic questionnaires, payments, mapping, and personalized recommendations.",
      highlights: [
        "Developed dynamic multi-step workflows with conditional business logic, advanced validation, and responsive UX.",
        "Delivered payment, mapping, and analytics integrations for onboarding and recommendation journeys.",
        "Contributed to scalable frontend architecture with both independent ownership and collaborative delivery.",
        "Worked closely with backend services on end-to-end customer workflows.",
        "Supported production releases, troubleshooting, and continuous platform enhancements.",
      ],
      stack: [
        "React",
        "TypeScript",
        "Material UI",
        "Formik",
        "TanStack Query",
        "Monorepo",
        "Stripe",
        "Google Maps API",
      ],
    },
  ],
} as const;
