import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/data/site";

export function About() {
  return (
    <section id="about" className="relative z-10 border-t border-line">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <SectionHeading
            index="01"
            label="About"
            title="I engineer frontend systems that hold up in production."
          />
        </Reveal>

        <div className="grid gap-12 md:grid-cols-[1.4fr_0.8fr] md:gap-16">
          <Reveal delay={80}>
            <div className="space-y-5 text-lg leading-relaxed text-ink-soft">
              {site.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <p className="pt-2 font-mono text-xs tracking-[0.14em] text-ink-faint uppercase">
                {site.education}
              </p>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <dl className="space-y-0 border-t border-line">
              {site.highlights.map((item) => (
                <div
                  key={item.label}
                  className="grid grid-cols-[110px_1fr] gap-4 border-b border-line py-4"
                >
                  <dt className="font-mono text-xs tracking-[0.14em] text-ink-faint uppercase">
                    {item.label}
                  </dt>
                  <dd className="text-sm text-ink">{item.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <div className="mt-16 border-t border-line pt-10">
          <Reveal>
            <p className="mb-8 font-mono text-xs tracking-[0.18em] text-ink-faint uppercase">
              Experience
            </p>
          </Reveal>

          <ul className="space-y-0">
            {site.experience.map((job, index) => (
              <li key={`${job.company}-${job.period}`}>
                <Reveal delay={index * 60}>
                  <article className="grid gap-4 border-b border-line py-8 md:grid-cols-[240px_1fr] md:gap-10 md:py-10">
                    <div>
                      <p className="font-display text-xl font-semibold text-ink">
                        {job.company}
                      </p>
                      <p className="mt-2 font-mono text-xs text-accent">
                        {job.period}
                      </p>
                      <p className="mt-1 font-mono text-xs text-ink-faint">
                        {job.place}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm leading-relaxed text-ink-soft md:text-base">
                        {job.summary}
                      </p>
                      <ul className="mt-5 space-y-2.5">
                        {job.highlights.map((item) => (
                          <li
                            key={item}
                            className="relative pl-4 text-sm leading-relaxed text-ink before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:bg-accent"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
