import { site } from "@/data/site";

const ticker = [
  "React",
  "Next.js",
  "TypeScript",
  "Supabase",
  "Solana",
  "Stripe",
  "Playwright",
];

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
              href="#contact"
              className="inline-flex items-center gap-2 border border-line-strong px-5 py-3 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
            >
              Start a conversation
            </a>
          </div>
        </div>

        <div className="animate-rise-delay-3 panel scanline relative overflow-hidden p-5 md:p-6">
          <div className="flex items-center justify-between">
            <p className="font-mono text-[11px] tracking-[0.16em] text-ink-faint uppercase">
              system.status
            </p>
            <div className="inline-flex items-center gap-2 font-mono text-[11px] text-accent">
              <span className="live-dot h-1.5 w-1.5 rounded-full bg-accent" />
              live
            </div>
          </div>

          <div className="mt-6 space-y-3 font-mono text-xs text-ink-soft">
            <p>
              <span className="text-accent">→</span> role: senior frontend engineer
            </p>
            <p>
              <span className="text-accent">→</span> focus: saas · architecture · delivery
            </p>
            <p>
              <span className="text-accent">→</span> stack: react · next · typescript
            </p>
            <p>
              <span className="text-accent">→</span> mode: remote · international
            </p>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3">
            {[
              { label: "Years", value: "6+" },
              { label: "Markets", value: "4" },
              { label: "Products", value: "10+" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="border border-line bg-bg/50 p-3"
                style={{ animationDelay: `${0.15 * index}s` }}
              >
                <p className="font-display text-2xl font-bold text-ink">{stat.value}</p>
                <p className="mt-1 font-mono text-[10px] tracking-[0.14em] text-ink-faint uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex h-16 items-end gap-1.5">
            {[40, 70, 45, 90, 55, 80, 60, 95, 50, 75, 65, 85].map((height, index) => (
              <div
                key={index}
                className="bar w-full rounded-sm bg-accent/80"
                style={{
                  height: `${height}%`,
                  animationDelay: `${index * 0.05}s`,
                  opacity: 0.35 + (index % 4) * 0.15,
                }}
              />
            ))}
          </div>
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
              {ticker.map((item) => (
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
