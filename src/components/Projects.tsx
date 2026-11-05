import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { site, type Project } from "@/data/site";

function ExternalLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 rounded-lg border border-line-strong px-3.5 py-2 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
    >
      {label} <span aria-hidden>↗</span>
    </a>
  );
}

function BrowserFrame({ image }: { image: NonNullable<Project["image"]> }) {
  return (
    <div className="overflow-hidden rounded-xl border border-line-strong bg-bg-panel shadow-[0_24px_60px_rgba(0,0,0,0.45)]">
      <div className="flex items-center gap-2 border-b border-line px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 truncate rounded-md bg-bg/60 px-3 py-1 font-mono text-[11px] text-ink-faint">
          {image.domain}
        </span>
      </div>
      <Image
        src={image.src}
        alt={image.alt}
        width={1440}
        height={900}
        sizes="(max-width: 768px) 100vw, 640px"
        className="h-auto w-full"
      />
    </div>
  );
}

function Tags({ items }: { items: readonly string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-md border border-line bg-bg-elevated/70 px-2.5 py-1 font-mono text-[11px] text-ink-soft"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

function FeaturedProject({ project, index }: { project: Project; index: number }) {
  const href = project.links[0]?.href;
  return (
    <article
      className={`grid items-center gap-8 md:grid-cols-2 md:gap-12 ${
        index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      {project.image &&
        (href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.title} (${project.image.domain})`}
            className="block transition-transform duration-500 hover:-translate-y-1"
          >
            <BrowserFrame image={project.image} />
          </a>
        ) : (
          <BrowserFrame image={project.image} />
        ))}

      <div>
        <p className="font-mono text-xs text-accent">{project.category}</p>
        <h3 className="mt-2 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
          {project.title}
        </h3>
        <p className="mt-1 text-sm text-ink-faint">{project.client}</p>
        <p className="mt-5 leading-relaxed text-ink-soft">{project.summary}</p>
        <ul className="mt-5 space-y-2.5">
          {project.highlights.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <Tags items={project.stack} />
        </div>
        {project.links.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-3">
            {project.links.map((link) => (
              <ExternalLink key={link.href} href={link.href} label={link.label} />
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="panel panel-hover flex h-full flex-col rounded-2xl p-6">
      <p className="font-mono text-xs text-accent">{project.category}</p>
      <h3 className="mt-2 text-xl font-semibold tracking-tight text-ink">{project.title}</h3>
      <p className="mt-1 text-xs text-ink-faint">{project.client}</p>
      <p className="mt-4 text-sm leading-relaxed text-ink-soft">{project.summary}</p>
      <ul className="mt-4 space-y-2">
        {project.highlights.map((item) => (
          <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-ink">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto pt-5">
        <Tags items={project.stack} />
        <div className="mt-4 border-t border-line pt-4 text-sm">
          {project.links.length > 0 ? (
            <div className="flex flex-wrap gap-4">
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-ink transition-colors hover:text-accent"
                >
                  {link.label} ↗
                </a>
              ))}
            </div>
          ) : (
            <p className="text-ink-faint">{project.status}</p>
          )}
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section id="work" className="relative z-10">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <SectionHeading
            index="01"
            label="Selected work"
            title="Products I've built, live in production."
          />
        </Reveal>

        <div className="space-y-20 md:space-y-28">
          {site.featured.map((project, index) => (
            <Reveal key={project.slug} delay={index * 40}>
              <FeaturedProject project={project} index={index} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <h3 className="mt-24 mb-8 text-2xl font-semibold tracking-tight text-ink">
            More projects
          </h3>
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {site.moreProjects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 50} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
