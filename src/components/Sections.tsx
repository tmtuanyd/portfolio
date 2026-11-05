import Image from "next/image";
import type { ReactNode } from "react";
import { site, type Project } from "@/data/site";

function SectionTitle({ children }: { children: ReactNode }) {
  // On small screens the title sticks while its section scrolls; on desktop the
  // sidebar nav names the section instead.
  return (
    <div className="sticky top-0 z-20 -mx-6 mb-6 bg-bg/85 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only">
      <h2 className="text-xs font-semibold tracking-[0.18em] text-ink uppercase">{children}</h2>
    </div>
  );
}

function Tags({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-3 flex flex-wrap gap-2" aria-label="Technologies used">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full bg-accent-dim px-3 py-1 text-xs font-medium text-accent"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

/** A list row whose hover lifts it and dims its siblings (the parent sets `group/list`). */
function Row({ children }: { children: ReactNode }) {
  return (
    <li className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-xl transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-bg-elevated lg:group-hover:shadow-[0_1px_2px_var(--shadow),inset_0_1px_0_var(--line)]" />
      {children}
    </li>
  );
}

function About() {
  return (
    <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="About me">
      <SectionTitle>About</SectionTitle>
      <div className="space-y-4 leading-relaxed text-ink-soft">
        <p>
          I&apos;m a full-stack engineer who started on the frontend and still cares most about
          what users touch. For 7 years I&apos;ve built SaaS, marketplace, enterprise, and Web3
          products, and since 2025 I&apos;ve owned them end to end: React and Next.js on the
          front, Node.js, Supabase, and PostgreSQL behind it.
        </p>
        <p>
          Right now I&apos;m a <span className="font-medium text-ink">{site.now}</span>, where I
          designed a 230+ route API for{" "}
          <a href="https://www.insurevault.co.nz" target="_blank" rel="noopener noreferrer" className="font-medium text-ink underline decoration-line-strong underline-offset-4 hover:text-accent">
            InsureVault
          </a>{" "}
          and made{" "}
          <a href="https://www.reelwork.com.au" target="_blank" rel="noopener noreferrer" className="font-medium text-ink underline decoration-line-strong underline-offset-4 hover:text-accent">
            ReelWork
          </a>{" "}
          faster, more accessible, and resilient to AI outages.
        </p>
        <p>
          I work AI-first with Claude Code and Cursor, and keep that work honest with review
          checklists and tests. I mentor developers and like working directly with founders.
        </p>
      </div>

      <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line">
        {site.metrics.map((metric) => (
          <div key={metric.label} className="bg-bg-elevated p-4">
            <dt className="sr-only">{metric.label}</dt>
            <dd>
              <p className="text-2xl font-semibold tracking-tight whitespace-nowrap text-ink">
                {metric.value}
              </p>
              <p className="mt-1 text-xs leading-snug text-ink-soft">{metric.label}</p>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Work experience">
      <SectionTitle>Experience</SectionTitle>
      <ol className="group/list space-y-12">
        {site.experience.map((job) => (
          <Row key={`${job.company}-${job.period}`}>
            <header className="z-10 mt-1 mb-2 text-xs font-semibold tracking-wide text-ink-faint uppercase sm:col-span-2">
              {job.period}
            </header>
            <div className="z-10 sm:col-span-6">
              <h3 className="leading-snug font-medium text-ink">
                {job.title} · <span className="group-hover:text-accent">{job.company}</span>
              </h3>
              <p className="mt-1 text-sm text-ink-faint">
                {job.place} · {job.projects}
              </p>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink-soft">
                {job.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </Row>
        ))}
      </ol>
      <a
        href="/cv"
        className="group mt-12 inline-flex items-center gap-1 font-semibold text-ink"
      >
        <span className="border-b border-transparent pb-px transition group-hover:border-accent">
          View full résumé
        </span>
        <span className="link-arrow" aria-hidden>→</span>
      </a>
    </section>
  );
}

function ProjectRow({ project }: { project: Project }) {
  const primary = project.links[0];
  return (
    <Row>
      <div className="z-10 sm:order-2 sm:col-span-6">
        <h3 className="leading-snug font-medium text-ink">
          {primary ? (
            <a
              href={primary.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} (opens in a new tab)`}
              className="inline-flex items-baseline gap-1 hover:text-accent focus-visible:text-accent"
            >
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded-xl lg:-inset-x-6 lg:block" />
              {project.title} <span aria-hidden>↗</span>
            </a>
          ) : (
            project.title
          )}
        </h3>
        <p className="mt-1 text-sm text-ink-faint">
          {project.category} · {project.client}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">{project.summary}</p>
        <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-ink-soft">
          {project.highlights.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        {project.links.length > 1 && (
          <ul className="relative z-20 mt-3 flex flex-wrap gap-4 text-sm">
            {project.links.slice(1).map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-ink hover:text-accent"
                >
                  {link.label} ↗
                </a>
              </li>
            ))}
          </ul>
        )}
        {!primary && project.status && (
          <p className="mt-2 text-xs text-ink-faint">{project.status}</p>
        )}
        <Tags items={project.stack} />
      </div>
      {project.image ? (
        <Image
          src={project.image.src}
          alt={project.image.alt}
          width={1440}
          height={900}
          sizes="(max-width: 640px) 200px, 160px"
          className="z-10 aspect-[16/10] w-48 rounded-md border-2 border-line object-cover object-top transition group-hover:border-line-strong sm:order-1 sm:col-span-2 sm:w-full sm:translate-y-1"
        />
      ) : (
        <div
          aria-hidden
          className="z-10 grid aspect-[16/10] w-48 place-items-center rounded-md border-2 border-line bg-bg-elevated text-lg font-semibold tracking-tight text-ink-faint sm:order-1 sm:col-span-2 sm:w-full sm:translate-y-1"
        >
          {project.title
            .split(/\s+/)
            .slice(0, 2)
            .map((word) => word[0])
            .join("")}
        </div>
      )}
    </Row>
  );
}

function Projects() {
  return (
    <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Selected projects">
      <SectionTitle>Projects</SectionTitle>
      <ul className="group/list space-y-12">
        {[...site.featured, ...site.moreProjects].map((project) => (
          <ProjectRow key={project.slug} project={project} />
        ))}
      </ul>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Skills">
      <SectionTitle>Skills</SectionTitle>
      <div className="space-y-6">
        {site.skillGroups.map((group) => (
          <div key={group.label} className="grid gap-2 sm:grid-cols-8 sm:gap-8 md:gap-4">
            <h3 className="mt-1 text-xs font-semibold tracking-wide text-ink-faint uppercase sm:col-span-2">
              {group.label}
            </h3>
            <ul className="flex flex-wrap gap-2 sm:col-span-6">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-line bg-bg-elevated px-2.5 py-1 text-xs text-ink-soft"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="mt-8 text-sm text-ink-faint">{site.education}</p>
    </section>
  );
}

export function Sections() {
  return (
    <>
      <About />
      <Experience />
      <Projects />
      <Skills />
    </>
  );
}
