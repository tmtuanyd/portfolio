import { site } from "@/data/site";

export function Hero() {
  return (
    <section id="top" className="relative z-10 flex min-h-[100svh] w-full flex-col">
      <div className="mx-auto grid w-full max-w-6xl flex-1 items-center gap-12 px-5 pt-28 pb-12 md:grid-cols-[1.15fr_0.85fr] md:px-8 md:pb-16">
        <div>
          <div className="animate-rise flex items-center justify-between font-mono text-[11px] tracking-[0.18em] text-ink-faint uppercase">
            <span>{site.location}</span>
            <span className="hidden sm:inline">Portfolio / 2026</span>
          </div>

          <p className="animate-rise-delay-1 mt-10 font-mono text-xs tracking-[0.2em] text-accent uppercase">
            {site.role}
          </p>

          <h1 className="animate-rise-delay-2 name-glow mt-4 font-display text-5xl leading-[0.92] font-extrabold tracking-tight text-ink sm:text-6xl md:text-7xl lg:text-8xl">
            {site.name}
          </h1>

          <p className="animate-rise-delay-3 mt-6 max-w-xl text-lg leading-relaxed text-ink-soft md:text-xl">
            {site.tagline}
          </p>

          <div className="animate-rise-delay-4 mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="inline-flex items-center gap-2 bg-ink px-5 py-3 text-sm font-semibold text-bg transition-transform hover:-translate-y-0.5"
            >
              View work <span className="link-arrow">→</span>
            </a>
            <a
              href={site.cvPdf}
              download
              className="inline-flex items-center gap-2 border border-line-strong px-5 py-3 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
            >
              Download CV
            </a>
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-ink-soft transition-colors hover:text-accent"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        <div className="animate-rise-delay-3 panel scanline relative overflow-hidden p-5 md:p-6">
          <div className="flex items-center justify-between">
            <p className="font-mono text-[11px] tracking-[0.16em] text-ink-faint uppercase">
              Impact
            </p>
            <div className="inline-flex items-center gap-2 font-mono text-[11px] text-accent">
              <span className="live-dot h-1.5 w-1.5 rounded-full bg-accent" />
              {site.availability}
            </div>
          </div>

          <dl className="mt-6 grid grid-cols-2 gap-3">
            {site.metrics.map((metric) => (
              <div key={metric.label} className="border border-line bg-bg/50 p-4">
                <dt className="sr-only">{metric.label}</dt>
                <dd>
                  <p className="font-display text-2xl font-bold whitespace-nowrap text-ink sm:text-3xl">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-xs leading-snug text-ink-soft">
                    {metric.label}
                  </p>
                </dd>
              </div>
            ))}
          </dl>

          <p className="mt-6 border-t border-line pt-4 font-mono text-xs text-ink-soft">
            <span className="text-accent">→</span> now: {site.now}
          </p>
        </div>
      </div>

      <div className="animate-rise-delay-5 w-full overflow-hidden border-y border-line py-3">
        <div className="marquee-track flex w-max whitespace-nowrap font-mono text-[11px] tracking-[0.2em] text-ink-faint uppercase">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              className="flex min-w-[100vw] shrink-0 items-center justify-around gap-8 px-4"
              aria-hidden={copy === 1}
            >
              {site.ticker.map((item) => (
                <span key={`${copy}-${item}`} className="inline-flex items-center gap-8">
                  {item}
                  <span className="h-1 w-1 shrink-0 rounded-full bg-accent/70" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
