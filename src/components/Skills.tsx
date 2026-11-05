import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/data/site";

export function Skills() {
  return (
    <section id="skills" className="relative z-10 border-t border-line">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <SectionHeading
            index="04"
            label="Capabilities"
            title="What I reach for, by discipline."
          />
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {site.skillGroups.map((group, index) => (
            <Reveal key={group.code} delay={index * 60}>
              <article className="panel panel-hover h-full p-6">
                <p className="font-mono text-xs text-accent">{group.code}</p>
                <h3 className="mt-3 font-display text-xl font-bold text-ink">
                  {group.label}
                </h3>
                <p className="mt-1 text-sm text-ink-soft">{group.blurb}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="border border-line bg-bg/40 px-2.5 py-1 text-xs text-ink"
                    >
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
