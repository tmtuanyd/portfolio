import Image from "next/image";
import { site } from "@/data/site";

const iconLinks = [
  { label: "Email", href: `mailto:${site.email}`, text: site.email },
  { label: "LinkedIn", href: site.social.linkedin, text: "LinkedIn" },
  { label: "GitHub", href: site.social.github, text: "GitHub" },
];

export function Hero() {
  return (
    <section id="top" className="relative z-10 w-full">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 pt-32 pb-16 md:grid-cols-[1.25fr_0.75fr] md:gap-16 md:px-8 md:pt-40 md:pb-24">
        <div>
          <p className="animate-rise inline-flex items-center gap-2 rounded-full border border-line bg-bg-elevated/70 px-3 py-1.5 text-xs text-ink-soft">
            <span className="live-dot h-1.5 w-1.5 rounded-full bg-accent" />
            {site.availability} · {site.location}
          </p>

          <h1 className="animate-rise-delay-1 mt-6 text-4xl leading-[1.05] font-semibold tracking-tight text-ink sm:text-5xl md:text-6xl">
            {site.name}
            <span className="mt-2 block text-accent">
              {site.role}
            </span>
          </h1>

          <p className="animate-rise-delay-2 mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            {site.tagline}
          </p>

          <div className="animate-rise-delay-3 mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-bg transition-transform hover:-translate-y-0.5"
            >
              See my work <span className="link-arrow">→</span>
            </a>
            <a
              href={site.cvPdf}
              download
              className="inline-flex items-center gap-2 rounded-lg border border-line-strong px-5 py-3 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
            >
              Download CV
            </a>
          </div>

          <ul className="animate-rise-delay-4 mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {iconLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  {...(link.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="text-ink-soft underline decoration-line-strong underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="animate-rise-delay-2 relative mx-auto w-full max-w-[260px] md:max-w-[340px]">
          <div className="absolute -inset-6 rounded-[2rem] bg-[radial-gradient(circle_at_30%_20%,var(--glow),transparent_65%)] blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-line-strong bg-bg-panel">
            <Image
              src={site.photo}
              alt={`Portrait of ${site.name}`}
              width={800}
              height={1000}
              sizes="(max-width: 768px) 80vw, 340px"
              loading="eager"
              fetchPriority="high"
              className="h-auto w-full"
            />
          </div>
          <p className="relative mt-4 rounded-xl border border-line bg-bg-elevated/90 px-4 py-3 text-xs leading-relaxed text-ink-soft backdrop-blur">
            <span className="font-mono text-accent">Now</span> · {site.now}
          </p>
        </div>
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4">
          {site.metrics.map((metric) => (
            <div key={metric.label} className="bg-bg-elevated p-5 md:p-6">
              <dt className="sr-only">{metric.label}</dt>
              <dd>
                <p className="text-3xl font-semibold tracking-tight whitespace-nowrap text-ink md:text-4xl">
                  {metric.value}
                </p>
                <p className="mt-2 text-sm leading-snug text-ink-soft">
                  {metric.label}
                </p>
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-b border-line pb-12">
          <p className="font-mono text-[11px] tracking-[0.18em] text-ink-faint uppercase">
            Products built for
          </p>
          {site.builtFor.map((name) => (
            <span key={name} className="text-base font-semibold tracking-tight text-ink-soft/80">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
