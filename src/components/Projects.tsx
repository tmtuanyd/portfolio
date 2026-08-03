import { MoreProjects } from "@/components/MoreProjects";
import { ProjectPreview } from "@/components/ProjectPreview";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/data/site";

export function Projects() {
  return (
    <section id="work" className="relative z-10 border-t border-line">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <SectionHeading
            index="03"
            label="Selected work"
            title="Systems shipped end to end."
          />
        </Reveal>

        <div className="space-y-20 md:space-y-28">
          {site.featured.map((project, index) => (
            <Reveal key={project.slug} delay={index * 50}>
              <article
                className={`grid items-center gap-8 md:grid-cols-[1.05fr_0.95fr] md:gap-12 ${
                  index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <ProjectPreview
                  slug={project.slug}
                  title={project.title}
                  badge={project.badge}
                  preview={project.preview}
                />

                <div>
                  <p className="font-mono text-xs text-ink-faint">{project.id}</p>
                  <h3 className="mt-2 font-display text-3xl font-bold text-ink md:text-4xl">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-accent">{project.subtitle}</p>

                  <dl className="mt-8 space-y-5">
                    <div>
                      <dt className="font-mono text-[11px] tracking-[0.16em] text-ink-faint uppercase">
                        Problem
                      </dt>
                      <dd className="mt-2 text-sm leading-relaxed text-ink-soft">
                        {project.problem}
                      </dd>
                    </div>

                    <div>
                      <dt className="font-mono text-[11px] tracking-[0.16em] text-ink-faint uppercase">
                        My role
                      </dt>
                      <dd className="mt-2">
                        <ul className="space-y-2.5">
                          {project.role.map((item) => (
                            <li
                              key={item}
                              className="flex gap-3 text-sm leading-relaxed text-ink-soft"
                            >
                              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </dd>
                    </div>

                    <div>
                      <dt className="font-mono text-[11px] tracking-[0.16em] text-ink-faint uppercase">
                        Outcome
                      </dt>
                      <dd className="mt-2 text-sm leading-relaxed text-ink-soft">
                        {project.outcome}
                      </dd>
                    </div>
                  </dl>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <li
                        key={item}
                        className="border border-line bg-bg-elevated/50 px-2.5 py-1 font-mono text-[11px] text-ink-soft transition-colors hover:border-accent hover:text-accent"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={80}>
          <MoreProjects />
        </Reveal>
      </div>
    </section>
  );
}
