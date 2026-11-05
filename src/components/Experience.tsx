import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/data/site";

export function Experience() {
  return (
    <section id="experience" className="relative z-10 border-t border-line">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <SectionHeading
            index="03"
            label="Experience"
            title="Seven years across product teams and time zones."
          />
        </Reveal>

          <ul className="border-t border-line">
            {site.experience.map((job, index) => (
              <li key={`${job.company}-${job.period}`}>
                <Reveal delay={index * 60}>
                  <article className="grid gap-4 border-b border-line py-8 md:grid-cols-[240px_1fr] md:gap-10 md:py-10">
                    <div>
                      <p className="font-display text-xl font-semibold text-ink">
                        {job.company}
                      </p>
                      <p className="mt-1 text-sm text-ink-soft">{job.title}</p>
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
    </section>
  );
}
