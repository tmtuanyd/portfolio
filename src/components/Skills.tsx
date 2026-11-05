import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/data/site";

export function Skills() {
  return (
    <section id="skills" className="relative z-10 border-t border-line">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <SectionHeading index="03" label="Skills" title="What I reach for, by discipline." />
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {site.skillGroups.map((group, index) => (
            <Reveal key={group.label} delay={index * 50} className="h-full">
              <article className="panel h-full rounded-2xl p-6">
                <h3 className="text-lg font-semibold tracking-tight text-ink">{group.label}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-line bg-bg/50 px-2.5 py-1 text-xs text-ink-soft"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mt-10 text-sm text-ink-faint">{site.education}</p>
      </div>
    </section>
  );
}
