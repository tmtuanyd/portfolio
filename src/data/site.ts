export const site = {
  name: "Tuan Tran",
  role: "Senior Frontend Engineer",
  tagline:
    "I build scalable SaaS, enterprise, logistics, and Web3 products with React, Next.js, and TypeScript — from architecture to production.",
  summary:
    "Senior Frontend Engineer with 6+ years of experience building SaaS, enterprise, logistics, and Web3 applications using React, Next.js, and TypeScript. Experienced in frontend architecture, performance optimization, and delivering production-ready software throughout the full product lifecycle. Comfortable taking ownership beyond the frontend by contributing to backend services, authentication, cloud integrations, and cross-functional product delivery.",
  email: "tmtuanyd@gmail.com",
  cvPdf: "/Tuan_Tran_CV.pdf",
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
    "My work sits where product requirements meet production software: multi-role SaaS platforms, real-time collaboration tools, logistics workflows, and Web3 commerce systems that have to stay maintainable as they grow.",
    "With 6+ years across startups, outsourcing, and fully remote international teams, I care about the parts that compound — reusable architecture, clear ownership, performance, and shipping features that hold up after release.",
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
        "Redux Toolkit",
        "TanStack Query",
        "Tailwind / HeroUI / MUI",
        "React Hook Form",
        "Solana / Wallet UX",
      ],
    },
    {
      code: "B",
      label: "Architecture",
      blurb: "How systems stay maintainable.",
      items: [
        "Frontend Architecture",
        "Design Systems",
        "SSR / ISR",
        "Performance Optimization",
        "Accessibility",
        "Responsive Design",
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
        "Node.js",
        "AWS S3 / Lambda",
        "Stripe",
        "Web3 / NFT-gated Flows",
      ],
    },
    {
      code: "D",
      label: "Quality",
      blurb: "Confidence before and after release.",
      items: [
        "Playwright",
        "Jest",
        "React Testing Library",
        "Cucumber",
        "GitHub Actions",
        "Vercel",
      ],
    },
  ],
  experience: [
    {
      company: "Support Dept.",
      title: "Senior Frontend Engineer",
      period: "Oct 2025 – Present",
      place: "Remote, Australia",
      summary:
        "Owned frontend delivery for production SaaS products in a fully remote Agile environment with international stakeholders.",
      highlights: [
        "Owned frontend delivery from solution design through production release, ensuring new features remained scalable, maintainable, and aligned with evolving product requirements.",
        "Introduced reusable application patterns and contributed to architectural decisions that simplified feature development and supported long-term product growth.",
        "Worked directly with Product Owners and cross-functional teams to scope solutions, resolve technical challenges, and deliver reliable software in a fully remote Agile environment.",
      ],
    },
    {
      company: "ANSYS ICA GmbH",
      title: "Frontend Engineer",
      period: "Dec 2022 – Sep 2025",
      place: "Remote, Germany",
      summary:
        "Delivered production-ready frontend features across enterprise applications for clients in Europe.",
      highlights: [
        "Delivered production-ready frontend features across multiple enterprise applications, taking ownership from implementation through production release.",
        "Improved code quality and development efficiency by building reusable components, promoting consistent frontend architecture, and participating in technical reviews.",
        "Collaborated with distributed product, design, backend, and QA teams to deliver production-ready software in Agile environments.",
      ],
    },
    {
      company: "VMO Holdings",
      title: "Frontend Developer",
      period: "Jun 2021 – Dec 2022",
      place: "Hanoi, Vietnam",
      summary:
        "Delivered responsive web applications for international clients across multiple projects.",
      highlights: [
        "Delivered responsive web applications for international clients, taking ownership of frontend implementation across multiple projects.",
        "Improved maintainability and development speed by building reusable UI components and following clean frontend architecture practices.",
        "Worked closely with engineering teams to integrate backend services, deliver production features, and support Agile development processes.",
      ],
    },
    {
      company: "Ilico Software",
      title: "Frontend Developer",
      period: "Dec 2019 – Jun 2021",
      place: "Hanoi, Vietnam",
      summary:
        "Built modern React and Next.js applications for international clients with distributed engineering teams.",
      highlights: [
        "Built modern web applications for international clients using React and Next.js, delivering responsive and user-focused interfaces.",
        "Contributed to feature delivery, application performance, and code quality while collaborating with distributed engineering teams throughout the development lifecycle.",
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
        "Insurance SaaS platform serving administrators, brokers, insurers, photographers, and end customers across web and mobile applications.",
      role: [
        "Owned frontend development for a multi-role insurance platform supporting five user roles, delivering business workflows across policy management, appointments, customer portals, payments, and AI-assisted document processing.",
        "Designed reusable application architecture while implementing authentication, role-based access control, backend APIs, and database features to support scalable product growth.",
        "Integrated six third-party services, including Stripe, AWS S3, Firebase Cloud Messaging, Cloudflare, Resend, and OpenAI, to support payments, media management, notifications, customer communications, and AI-powered workflows.",
      ],
      outcome:
        "A production multi-role SaaS with payments, media, notifications, and AI-assisted document workflows across five user roles.",
      stack: [
        "React",
        "Next.js",
        "TypeScript",
        "Supabase",
        "PostgreSQL",
        "Stripe",
        "AWS S3",
        "Firebase",
        "Cloudflare",
        "Resend",
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
        "Official multi-product web platform for AIntivirus — content, NFT-gated media, merch commerce, and trading services (eSIM, gift cards, trade-in) with Solana wallet integration.",
      role: [
        "Led frontend development across marketing, e-commerce, and Web3 experiences, building a shared application that supported multiple business domains.",
        "Implemented wallet authentication, NFT-gated content, trading workflows, and headless CMS integrations while maintaining a reusable and scalable frontend architecture.",
        "Collaborated closely with backend and product teams to deliver secure blockchain integrations and production-ready user experiences.",
      ],
      outcome:
        "A maintainable multi-section platform spanning marketing, gated media, checkout, and Web3 ownership verification.",
      stack: [
        "Next.js",
        "TypeScript",
        "Tailwind",
        "HeroUI",
        "Solana",
        "TanStack Query",
        "Zod",
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
        "Klarland Meet is a virtual collaboration platform enabling organisations to host online meetings, digital showrooms, and collaborative workspaces with real-time communication.",
      role: [
        "Built real-time collaboration experiences supporting virtual meetings, shared workspaces, and interactive digital showrooms.",
        "Integrated Jitsi, Socket.IO, and Three.js to synchronize communication and collaboration across multiple connected users.",
        "Improved application scalability and maintainability through reusable frontend modules, performance optimization, and automated testing.",
      ],
      outcome:
        "A cross-platform collaboration product with live workspace sync and interactive 3D showrooms.",
      stack: [
        "React",
        "Redux",
        "Socket.IO",
        "Jitsi",
        "Three.js",
        "i18next",
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
        "Developed enterprise data management interfaces for workflow automation, analytics, and reporting within a cloud-native platform.",
        "Built reusable React modules and GraphQL integrations that simplified feature development across multiple product areas.",
        "Strengthened application quality through automated testing, performance optimization, and continuous frontend refactoring.",
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
        "Architected reusable storefront components supporting multiple brands from a shared SSR codebase.",
        "Implemented authentication, GraphQL integrations, and server-side rendering to deliver scalable and SEO-friendly e-commerce experiences.",
        "Improved SEO, application performance, and code maintainability through shared frontend architecture.",
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
      title: "Swyft",
      blurb: "Logistics workflows for quotes, bookings, tracking, and orders.",
      summary:
        "Customer-facing logistics platform covering quote requests, bookings, shipment tracking, and order management within a large-scale web application.",
      highlights: [
        "Built customer-facing logistics workflows covering quote requests, bookings, shipment tracking, and order management within a large-scale web application.",
        "Designed reusable frontend modules and collaborated closely with backend engineers to deliver scalable APIs, business workflows, and production-ready features across multiple product areas.",
        "Improved user experience and application maintainability through responsive interfaces, reusable components, and continuous performance optimization.",
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
        "dnd kit",
        "GTM",
      ],
    },
  ],
} as const;
