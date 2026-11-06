export type ProjectLink = { label: string; href: string };

export type Project = {
  slug: string;
  title: string;
  category: string;
  client: string;
  summary: string;
  highlights: readonly string[];
  stack: readonly string[];
  /** Screenshot of the live product, taken from its public site. */
  image?: { src: string; alt: string; domain: string };
  links: readonly ProjectLink[];
  /** Shown instead of links when the product has no public page left. */
  status?: string;
};

export const site = {
  name: "Tuan Tran",
  role: "Senior Full-Stack Engineer",
  tagline:
    "I build SaaS, marketplace, and Web3 products end to end with React, Next.js, TypeScript, Node.js, and PostgreSQL, from architecture to production.",
  summary:
    "Senior Full-Stack Engineer with 7 years of experience building SaaS, marketplace, enterprise, and Web3 products. Frontend specialist in React, Next.js, and TypeScript; full-stack since 2025 with Node.js, Supabase, and PostgreSQL. Leads architecture across frontend, API, and database, and sets the performance, testing, and accessibility standards teams follow. Ships production AI features and works AI-first with Claude Code and Cursor, backed by review and tests. Mentors developers and works directly with founders.",
  email: "tmtuanyd@gmail.com",
  cvPdf: "/TuanTranCV.pdf",
  photo: "/tuan-tran-portrait.jpg",
  phone: "+84 346 731 336",
  phoneHref: "tel:+84346731336",
  location: "Hanoi, Vietnam · Remote",
  availability: "Open to opportunities",
  now: "Senior Full-Stack Engineer at Support Dept. (Australia)",
  education:
    "Hanoi University of Science and Technology — Engineer's Degree in Automatic Control (Very Good)",
  social: {
    github: "https://github.com/tmtuanyd",
    linkedin: "https://www.linkedin.com/in/tuan-tran-71ba90191",
  },
  metrics: [
    { value: "7", label: "years shipping products" },
    { value: "10", label: "products for clients in AU, NZ, Europe, US" },
    { value: "230+", label: "API routes designed under one auth contract" },
    { value: "−1.4 MB", label: "first-load JS cut across 14 routes" },
  ],
  builtFor: [
    "ReelWork",
    "InsureVault",
    "Datameer",
    "Swyft Energy",
    "Klarland Meet",
    "MIAB",
    "Silico",
  ],
  skillGroups: [
    {
      label: "Frontend",
      items: [
        "React",
        "Next.js",
        "TypeScript",
        "Redux Toolkit",
        "TanStack Query",
        "React Hook Form",
        "Zod",
        "Tailwind CSS",
        "Material UI",
        "Three.js",
        "Astro",
      ],
    },
    {
      label: "Backend & Data",
      items: [
        "Node.js",
        "Fastify",
        "Supabase",
        "PostgreSQL",
        "Row-Level Security",
        "REST",
        "OpenAPI",
        "GraphQL",
        "Socket.IO",
        "Stripe",
      ],
    },
    {
      label: "Cloud & Integrations",
      items: [
        "AWS S3",
        "Lambda",
        "MediaConvert",
        "Cloudflare",
        "Firebase Cloud Messaging",
        "Resend",
        "Twilio",
        "Payload CMS",
        "Contentful",
        "Vercel",
      ],
    },
    {
      label: "AI",
      items: [
        "OpenAI API",
        "GPT-4o vision",
        "Moderation",
        "Assistants",
        "Structured output",
        "Fail-safe AI pipelines",
        "Claude Code",
        "Cursor",
      ],
    },
    {
      label: "Architecture",
      items: [
        "API design",
        "Multi-tenant SaaS",
        "RBAC",
        "Frontend architecture",
        "Design systems",
        "Core Web Vitals",
        "WCAG AA",
        "SSR",
      ],
    },
    {
      label: "Quality",
      items: [
        "Playwright",
        "Vitest",
        "Jest",
        "React Testing Library",
        "Cucumber",
        "GitHub Actions",
        "Sentry",
        "PostHog",
      ],
    },
  ],
  experience: [
    {
      company: "Support Dept.",
      title: "Senior Full-Stack Engineer",
      period: "Jul 2025 – Present",
      place: "Remote, Australia",
      projects: "ReelWork, InsureVault",
      highlights: [
        "Architected new SaaS platforms from scratch, choosing the stack, state management, and database schema.",
        "Set engineering standards across client products: code review guidelines, contract and regression tests, CI quality gates (coverage floors, bundle budgets), and CI/CD pipelines.",
        "Built an AI-assisted delivery workflow on Claude Code: hooks that block a commit or PR until a claim-by-claim review checklist is complete, and a reviewer agent that reviews changes without the author's context.",
        "Worked directly with founders and client stakeholders to turn requirements into specs and release plans.",
      ],
    },
    {
      company: "ANSYS ICA GmbH",
      title: "Frontend Engineer",
      period: "Dec 2022 – Jun 2025",
      place: "Remote, Germany",
      projects: "Klarland Meet, Datameer, Webshop 3.0",
      highlights: [
        "Modernized the frontends of several client applications and set the coding standards and architectural patterns the team followed.",
        "Delivered client projects for Germany, the Netherlands, and the US with distributed Product, Design, and QA teams across time zones in Agile sprints.",
        "Created a shared component library that cut code duplication by 30% and sped up feature delivery across teams.",
        "Mentored junior developers and ran technical interviews for the frontend team.",
      ],
    },
    {
      company: "VMO Holdings",
      title: "Frontend Developer",
      period: "Jun 2021 – Dec 2022",
      place: "Hanoi, Vietnam",
      projects: "Pipelyne by Swyft Energy",
      highlights: [
        "Delivered responsive, high-performance web apps for international clients on tight release schedules.",
        "Refactored legacy code into a modular frontend architecture that made features easier to extend and test.",
      ],
    },
    {
      company: "Ilico Software",
      title: "Frontend Developer",
      period: "Dec 2019 – Jun 2021",
      place: "Hanoi, Vietnam",
      projects: "Ilico",
      highlights: [
        "Built responsive, user-focused web apps with React and Next.js.",
        "Shipped features through peer review and testing with a distributed team across the full development lifecycle.",
      ],
    },
    {
      company: "Freelance",
      title: "Senior Full-Stack Engineer",
      period: "Apr 2025 – Present",
      place: "Remote",
      projects: "Lead Visibility Tool, Phoenix, AIntivirus",
      highlights: [
        "Shipped a ranking tracker for a UK lead-generation agency in under a month, from spec to production, as the only developer.",
        "Led frontend development of a US health-tech brand site and store, and built the content hub, merch store, and Solana bridge app for a Web3 platform.",
      ],
    },
  ],
  featured: [
    {
      slug: "reelwork",
      title: "ReelWork",
      category: "Video-first hiring marketplace",
      client: "Australia · Support Dept. · 2026",
      summary:
        "Hospitality workers replace the CV with a short video profile; venues discover candidates, message them, post shifts, and run rosters across web and mobile.",
      highlights: [
        "Cut ~1.4 MB of first-load JavaScript across 14 routes and added CI bundle budgets and real-user Core Web Vitals tracking.",
        "Kept AI video moderation running through an OpenAI outage with an incident mode and alerts when a reel cannot be screened.",
        "Brought core flows to WCAG AA and held app test coverage at 80.8%+ on a 600-route Next.js platform.",
      ],
      stack: ["Next.js 16", "React 19", "Supabase", "PostgreSQL", "OpenAI", "Stripe", "Playwright"],
      image: {
        src: "/projects/reelwork.webp",
        alt: "ReelWork homepage: Where real people meet real work.",
        domain: "reelwork.com.au",
      },
      links: [{ label: "Live site", href: "https://www.reelwork.com.au" }],
    },
    {
      slug: "insurevault",
      title: "InsureVault",
      category: "Multi-tenant insurance SaaS",
      client: "New Zealand · Support Dept. · 2025–2026",
      summary:
        "Insurance SaaS for administrators, brokers, insurers, photographers, and customers on web and mobile. I led development of the platform.",
      highlights: [
        "Led a Next.js and Supabase platform with 5 role-based portals on dedicated subdomains.",
        "Designed the 230+ route API around one auth and response contract, and added Bearer-token auth so the mobile app shares it (79 routes).",
        "Introduced GPT-4o document extraction that turns scanned valuation forms into inventory items, replacing manual entry.",
      ],
      stack: ["Next.js", "Supabase", "PostgreSQL", "AWS MediaConvert", "Cloudflare", "Stripe", "OpenAI"],
      image: {
        src: "/projects/insurevault.webp",
        alt: "InsureVault homepage: Document your valuables and assets with ease.",
        domain: "insurevault.co.nz",
      },
      links: [
        { label: "Live site", href: "https://www.insurevault.co.nz" },
        { label: "Web app", href: "https://app.insurevault.co.nz" },
      ],
    },
    {
      slug: "pipelyne",
      title: "Pipelyne by Swyft Energy",
      category: "White-label lead-capture SaaS",
      client: "Ireland · VMO Holdings · 2021–2022",
      summary:
        "Smart questionnaires that turn website visitors into leads with instant product recommendations, white-labeled on each client's domain (Swyft Energy, Bord Gáis Energy).",
      highlights: [
        "Architected the frontend for a multi-role system (Superadmin, Admin, Customer).",
        "Built the admin Questionnaire Builder for branching logic, outcomes, and product mappings without code.",
        "Shipped the customer recommendation flow with Stripe payment, and the Swyft Energy marketing site.",
      ],
      stack: ["React", "TypeScript", "Material UI", "TanStack Query", "Formik", "Stripe", "Monorepo"],
      image: {
        src: "/projects/swyft.webp",
        alt: "Swyft Energy homepage, which sends visitors into the Pipelyne questionnaire.",
        domain: "swyftenergy.ie",
      },
      links: [
        { label: "Swyft Energy", href: "https://www.swyftenergy.ie" },
        { label: "Pipelyne admin", href: "https://admin.pipelyne.com" },
      ],
    },
    {
      slug: "datameer",
      title: "Datameer",
      category: "Data transformation for Snowflake",
      client: "US · ANSYS ICA",
      summary:
        "Low-code data transformation platform built natively for Snowflake, with visual workflows for data teams.",
      highlights: [
        "Developed enterprise data-management interfaces for workflow automation, analytics, and reporting.",
        "Built drag-and-drop workflow editing with dnd kit.",
        "Created reusable React modules and GraphQL integrations shared across product areas, covered by Playwright and Cucumber tests.",
      ],
      stack: ["React", "TypeScript", "GraphQL", "Redux", "MUI", "dnd kit", "Playwright"],
      image: {
        src: "/projects/datameer.webp",
        alt: "Datameer homepage: AI-powered data transformations built natively for Snowflake.",
        domain: "datameer.com",
      },
      links: [{ label: "Product site", href: "https://www.datameer.com" }],
    },
  ] satisfies Project[],
  moreProjects: [
    {
      slug: "klarland-meet",
      title: "Klarland Meet",
      category: "Virtual collaboration platform",
      client: "Germany · ANSYS ICA",
      summary:
        "Online meetings, digital showrooms, and collaborative workspaces with real-time communication.",
      highlights: [
        "Real-time meetings and group chat (Jitsi, Socket.IO), live streams, and notifications.",
        "Admin tooling: landing page builder, multi-language surveys, Q&A, and analytics.",
        "Extended the Three.js digital showroom with configurable stages and 3D object settings.",
      ],
      stack: ["React", "Redux", "Socket.IO", "Jitsi", "Three.js"],
      image: {
        src: "/projects/klarland.webp",
        alt: "klar.land home screen with the virtual showroom and video communication tiles.",
        domain: "klar.land",
      },
      links: [{ label: "Live platform", href: "https://klar.land" }],
    },
    {
      slug: "aintivirus",
      title: "AIntivirus",
      category: "Web3 brand & commerce platform",
      client: "US · Freelance",
      summary:
        "Content, NFT-gated media, merch commerce, and Solana trading services in one brand platform.",
      highlights: [
        "Content hub and homepage with video, search, and recommendations from Contentful.",
        "Merch store frontend: cart, checkout, order history, eSIM, gift card, and trade-in pages.",
        "Solana bridge app with wallet connection, transaction confirmation, and an OpenAI Assistants chat.",
      ],
      stack: ["Next.js", "TypeScript", "Solana Web3.js", "Contentful", "Mux"],
      image: {
        src: "/projects/aintivirus.webp",
        alt: "AIntivirus homepage as archived in January 2026.",
        domain: "aintivirus.ai (archived)",
      },
      links: [
        {
          label: "Archived site (Jan 2026)",
          href: "https://web.archive.org/web/20260125231843/https://aintivirus.ai/",
        },
      ],
    },
    {
      slug: "webshop",
      title: "Webshop 3.0 (MIAB)",
      category: "Multi-tenant SSR e-commerce",
      client: "Netherlands · ANSYS ICA",
      summary: "Multiple branded marketplaces served from one shared SSR frontend.",
      highlights: [
        "SSR subdomain routing so each brand runs its own storefront.",
        "AI shopping assistant chat and search by image.",
        "Checkout, account, and post-purchase flows; accessibility and SEO work.",
      ],
      stack: ["Preact", "Razzle (SSR)", "GraphQL", "Auth0", "Stripe"],
      image: {
        src: "/projects/webshop.webp",
        alt: "Shops.ae storefront, one of the brands served by Webshop 3.0, archived in November 2025.",
        domain: "shops.ae (archived)",
      },
      links: [
        {
          label: "Shops.ae (archived)",
          href: "https://web.archive.org/web/20251113000036/https://shops.ae/",
        },
        {
          label: "Webshop.nl (archived)",
          href: "https://web.archive.org/web/20251202153730/https://webshop.nl/",
        },
      ],
    },
    {
      slug: "lead-visibility",
      title: "Lead Visibility Tool",
      category: "SEO ranking tracker",
      client: "United Kingdom · Freelance",
      summary:
        "Tracks each prospect's monthly Google rank for buyer key phrases for LeadGenerators Digital, replacing a spreadsheet.",
      highlights: [
        "Sole developer, spec to production in under a month.",
        "DataForSEO top-100 checks with 7-day result reuse, so repeat checks cost nothing.",
        "React + Vite frontend, Fastify API, Supabase with row-level security.",
      ],
      stack: ["React", "Fastify", "Supabase", "DataForSEO", "Vitest"],
      links: [],
      status: "Private client app",
    },
    {
      slug: "phoenix",
      title: "Phoenix",
      category: "Health-tech brand & store",
      client: "US · Freelance",
      summary:
        "Website and store for a smart ring, blood testing, and personalized health protocols.",
      highlights: [
        "Led frontend: three homepage generations, product pages, and campaigns.",
        "Assessment quiz and result page that recommends a personal health protocol.",
      ],
      stack: ["Next.js 15", "React 19", "Contentful", "Framer Motion"],
      image: {
        src: "/projects/phoenix.webp",
        alt: "Phoenix homepage with the Black Friday campaign banner, from a local build of the October 2025 code.",
        domain: "getmyphoenix.com",
      },
      links: [],
      status: "Brand site retired; screenshot from a local build of the October 2025 code",
    },
    {
      slug: "ilico",
      title: "Ilico",
      category: "Business management SaaS",
      client: "France · Ilico Software",
      summary:
        "French/English SaaS for employees, contracts, projects, leave, products, and partners; used by Silico in Lyon.",
      highlights: [
        "Management screens and data-entry workflows across the modules.",
        "Real-time updates over Socket.IO, i18n, and Google Maps features.",
      ],
      stack: ["React", "Redux", "Material UI", "Socket.IO"],
      image: {
        src: "/projects/ilico.webp",
        alt: "Ilico sign-in screen for the Silico workspace.",
        domain: "silico.ilico.cloud",
      },
      links: [{ label: "App sign-in", href: "https://silico.ilico.cloud" }],
    },
  ] satisfies Project[],
} as const;
