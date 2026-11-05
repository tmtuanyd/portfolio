"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { site } from "@/data/site";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const socials = [
  {
    label: "GitHub",
    href: site.social.github,
    path: "M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6a4.7 4.7 0 0 1 1.3-3.2c-.2-.3-.6-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.2 2.9.1 3.2a4.7 4.7 0 0 1 1.3 3.2c0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5z",
  },
  {
    label: "LinkedIn",
    href: site.social.linkedin,
    path: "M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6h.1c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.2zM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2zm1.8 13.1H3.5V9h3.6v11.5zM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7C24 .8 23.2 0 22.2 0z",
  },
  {
    label: "Email",
    href: `mailto:${site.email}`,
    path: "M2 4h20a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 2v.5l10 6.3 10-6.3V6H2zm20 2.9-9.5 6a1 1 0 0 1-1 0L2 8.9V18h20V8.9z",
  },
];

export function Sidebar() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const nodes = sections
      .map((section) => document.getElementById(section.id))
      .filter((node): node is HTMLElement => Boolean(node));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[46%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        <div className="flex items-center gap-4">
          <Image
            src={site.photo}
            alt={`Portrait of ${site.name}`}
            width={800}
            height={1000}
            sizes="72px"
            loading="eager"
            fetchPriority="high"
            className="h-[72px] w-[72px] rounded-full border border-line-strong object-cover object-top"
          />
          <p className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 text-xs text-ink-soft">
            <span className="live-dot h-1.5 w-1.5 rounded-full bg-accent" />
            {site.availability}
          </p>
        </div>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          <Link href="/">{site.name}</Link>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-ink sm:text-xl">
          {site.role}
        </h2>
        <p className="mt-4 max-w-sm leading-relaxed text-ink-soft">{site.tagline}</p>
        <p className="mt-3 text-sm text-ink-faint">{site.location}</p>

        <nav className="mt-14 hidden lg:block" aria-label="In-page navigation">
          <ul className="w-max space-y-1">
            {sections.map((section) => {
              const isActive = active === section.id;
              return (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    aria-current={isActive ? "true" : undefined}
                    className="group flex items-center py-2.5"
                  >
                    <span
                      className={`mr-4 h-px transition-all duration-300 ${
                        isActive
                          ? "w-16 bg-ink"
                          : "w-8 bg-ink-faint group-hover:w-16 group-hover:bg-ink group-focus-visible:w-16"
                      }`}
                    />
                    <span
                      className={`text-xs font-semibold tracking-[0.18em] uppercase transition-colors ${
                        isActive ? "text-ink" : "text-ink-faint group-hover:text-ink"
                      }`}
                    >
                      {section.label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-5 lg:mt-0">
        <a
          href={site.cvPdf}
          download
          className="inline-flex h-9 items-center rounded-lg bg-ink px-4 text-sm font-medium text-bg transition-opacity hover:opacity-85"
        >
          Download CV
        </a>
        <ul className="flex items-center gap-4" aria-label="Social media">
          {socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                {...(social.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                aria-label={social.label}
                title={social.label}
                className="block text-ink-faint transition-colors hover:text-ink"
              >
                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden>
                  <path d={social.path} />
                </svg>
              </a>
            </li>
          ))}
        </ul>
        <ThemeToggle />
      </div>
    </header>
  );
}
