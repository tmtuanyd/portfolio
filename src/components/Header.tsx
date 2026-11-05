"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { site } from "@/data/site";

const links = [
  { href: "#work", id: "work", label: "Work", num: "01" },
  { href: "#experience", id: "experience", label: "Experience", num: "02" },
  { href: "#skills", id: "skills", label: "Skills", num: "03" },
  { href: "#contact", id: "contact", label: "Contact", num: "04" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter((node): node is HTMLElement => Boolean(node));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: [0.1, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-bg/85 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <a
          href="#top"
          className="flex items-center gap-2 text-sm font-semibold tracking-tight text-ink transition-colors hover:text-accent"
        >
          <span className="grid h-7 w-7 place-items-center rounded-md bg-accent font-mono text-[11px] font-bold text-bg">
            TT
          </span>
          {site.name}
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => {
            const isActive = active === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`group flex items-center gap-2 px-3 py-2 font-mono text-xs transition-colors ${
                  isActive ? "text-ink" : "text-ink-soft hover:text-ink"
                }`}
              >
                <span
                  className={`transition-colors ${
                    isActive ? "text-accent" : "text-ink-faint group-hover:text-accent"
                  }`}
                >
                  {link.num}
                </span>
                {link.label}
                <span
                  className={`ml-1 h-1 w-1 rounded-full transition-all ${
                    isActive ? "bg-accent opacity-100" : "opacity-0"
                  }`}
                />
              </a>
            );
          })}
          <Link
            href="/cv"
            className="group flex items-center gap-2 px-3 py-2 font-mono text-xs text-ink-soft transition-colors hover:text-ink"
          >
            <span className="text-ink-faint transition-colors group-hover:text-accent">
              05
            </span>
            CV
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="/cv"
            className="inline-flex h-9 items-center rounded-lg border border-line px-3 text-sm text-ink transition-colors hover:border-accent hover:text-accent md:hidden"
          >
            CV
          </Link>
          <a
            href="#contact"
            className="inline-flex h-9 items-center rounded-lg bg-ink px-3.5 text-sm font-medium text-bg transition-opacity hover:opacity-85"
          >
            Get in touch
          </a>
        </div>
      </div>
    </header>
  );
}
