import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/data/site";

export function Skills() {
  return (
    <section id="skills" className="relative z-10 border-t border-line">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <SectionHeading
            index="02"
            label="Capabilities"
            title="What I reach for, by discipline."
          />
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {site.skillGroups.map((group, index) => (
            <Reveal key={group.code} delay={index * 60}>
              <article className="panel panel-hover h-full p-6 md:p-7">
                <div className="flex items-start justify-between gap-4">
                  <p className="font-mono text-sm text-accent">{group.code}</p>
                  <p className="font-mono text-[11px] tracking-[0.14em] text-ink-faint uppercase">
                    {group.label}
                  </p>
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold text-ink">
                  {group.label}
                </h3>
                <p className="mt-2 text-sm text-ink-soft">{group.blurb}</p>
                <ul className="mt-6 space-y-2.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm text-ink"
                    >
                      <span className="h-1 w-1 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
