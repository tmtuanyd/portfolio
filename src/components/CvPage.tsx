import Link from "next/link";
import { Ambient } from "@/components/Ambient";
import { Footer } from "@/components/Footer";
import { site, type Project } from "@/data/site";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-mono text-[11px] tracking-[0.2em] text-accent uppercase">
      {children}
    </h2>
  );
}

export function CvPage() {
  const projects: readonly Project[] = [...site.featured, ...site.moreProjects];

  return (
    <>
      <Ambient />
      <header className="sticky top-0 z-40 border-b border-line bg-[rgba(20,26,31,0.88)] backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-4xl items-center justify-between gap-4 px-5 py-4 md:px-8">
          <Link
            href="/"
            className="font-mono text-xs text-ink-soft transition-colors hover:text-accent"
          >
            ← Portfolio
          </Link>
          <div className="flex items-center gap-2">
            <a
              href={site.cvPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center border border-line px-3 py-2 font-mono text-xs text-ink transition-colors hover:border-accent hover:text-accent"
            >
              Open PDF
            </a>
            <a
              href={site.cvPdf}
              download
              className="inline-flex items-center bg-ink px-3 py-2 font-mono text-xs font-semibold text-bg transition-transform hover:-translate-y-0.5"
            >
              Download
            </a>
          </div>
        </div>
      </header>

      <main className="relative z-10 mx-auto w-full max-w-4xl px-5 py-12 md:px-8 md:py-16">
        <header className="border-b border-line pb-8">
          <p className="font-mono text-[11px] tracking-[0.18em] text-ink-faint uppercase">
            Curriculum Vitae
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink md:text-5xl">
            {site.name}
          </h1>
          <p className="mt-2 text-lg text-accent">{site.role}</p>
          <p className="mt-4 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-ink-soft">
            <span>{site.location}</span>
            <a href={`mailto:${site.email}`} className="hover:text-accent">
              {site.email}
            </a>
            <a href={site.phoneHref} className="hover:text-accent">
              {site.phone}
            </a>
            <a
              href={site.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent"
            >
              github.com/tmtuanyd
            </a>
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent"
            >
              linkedin.com/in/tuan-tran-71ba90191
            </a>
          </p>
        </header>

        <section className="mt-10">
          <SectionTitle>Professional summary</SectionTitle>
          <p className="mt-4 text-sm leading-relaxed text-ink-soft md:text-[15px]">
            {site.summary}
          </p>
        </section>

        <section className="mt-12">
          <SectionTitle>Technical skills</SectionTitle>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {site.skillGroups.map((group) => (
              <div key={group.label} className="border border-line bg-bg-elevated/40 p-4">
                <p className="font-mono text-[11px] tracking-[0.14em] text-ink-faint uppercase">
                  {group.label}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {group.items.join(" · ")}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <SectionTitle>Professional experience</SectionTitle>
          <div className="mt-6 space-y-8">
            {site.experience.map((job) => (
              <article key={job.company}>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight text-ink">
                      {job.company}
                    </h3>
                    <p className="mt-1 text-sm text-ink-soft">{job.title}</p>
                  </div>
                  <p className="font-mono text-[11px] text-ink-faint">
                    {job.period}
                  </p>
                </div>
                <p className="mt-1 font-mono text-xs text-accent">{job.place}</p>
                <ul className="mt-4 space-y-2">
                  {job.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-relaxed text-ink-soft"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <SectionTitle>Featured projects</SectionTitle>
          <div className="mt-6 space-y-8">
            {projects.map((project) => (
              <article key={project.slug}>
                <h3 className="text-xl font-semibold tracking-tight text-ink">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-accent">
                  {project.category} · {project.client}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {project.summary}
                </p>
                <ul className="mt-4 space-y-2">
                  {project.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-relaxed text-ink-soft"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 font-mono text-[11px] text-ink-faint">
                  Tech: {project.stack.join(", ")}
                </p>
                {project.links.length > 0 && (
                  <p className="mt-2 flex flex-wrap gap-4 text-sm">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-ink underline decoration-line-strong underline-offset-4 hover:text-accent"
                      >
                        {link.label} ↗
                      </a>
                    ))}
                  </p>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 border-t border-line pt-10">
          <SectionTitle>Education</SectionTitle>
          <p className="mt-4 text-sm leading-relaxed text-ink-soft">
            {site.education}
          </p>
        </section>

        <div className="mt-14 flex flex-wrap items-center gap-3 border-t border-line pt-8">
          <a
            href={site.cvPdf}
            download
            className="inline-flex items-center bg-ink px-5 py-3 text-sm font-semibold text-bg transition-transform hover:-translate-y-0.5"
          >
            Download PDF
          </a>
          <Link
            href="/#contact"
            className="inline-flex items-center border border-line-strong px-5 py-3 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
          >
            Contact me
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
