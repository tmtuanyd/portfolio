import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/data/site";

export function Experience() {
  return (
    <section id="experience" className="relative z-10 border-t border-line">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <SectionHeading
            index="02"
            label="Experience"
            title="Seven years across product teams and time zones."
          />
        </Reveal>

        <ol>
          {site.experience.map((job, index) => (
            <li
              key={`${job.company}-${job.period}`}
              className="grid gap-2 md:grid-cols-[200px_1fr] md:gap-10"
            >
              <div className="font-mono text-xs md:pt-1 md:text-right">
                <p className="text-accent">{job.period}</p>
                <p className="mt-1 text-ink-faint">{job.place}</p>
              </div>
              <div className="relative border-l border-line-strong pb-12 pl-8">
                <span className="absolute top-1.5 -left-[7px] h-3.5 w-3.5 rounded-full border-2 border-accent bg-bg" />
                <Reveal delay={index * 50}>
                  <h3 className="text-xl font-semibold tracking-tight text-ink">
                    {job.title} · <span className="text-ink-soft">{job.company}</span>
                  </h3>
                  <p className="mt-1 text-sm text-ink-faint">Projects: {job.projects}</p>
                  <ul className="mt-4 space-y-2.5">
                    {job.highlights.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
