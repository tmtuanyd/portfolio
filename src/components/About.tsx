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
            title="I build products that hold up in production."
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

      </div>
    </section>
  );
}
