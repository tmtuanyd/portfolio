"use client";

import { useEffect, useId, useRef, useState } from "react";
import { site } from "@/data/site";

type MoreProject = (typeof site.moreProjects)[number];

export function MoreProjects() {
  const [activeTitle, setActiveTitle] = useState<string | null>(null);
  const detailRef = useRef<HTMLDivElement>(null);
  const baseId = useId();

  const activeProject =
    site.moreProjects.find((project) => project.title === activeTitle) ?? null;

  useEffect(() => {
    if (!activeProject || !detailRef.current) return;
    detailRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [activeProject]);

  const toggle = (project: MoreProject) => {
    setActiveTitle((current) =>
      current === project.title ? null : project.title,
    );
  };

  return (
    <div className="mt-20 border-t border-line pt-10">
      <p className="mb-6 font-mono text-xs tracking-[0.18em] text-ink-faint uppercase">
        More projects
      </p>
      <p className="mb-6 text-sm text-ink-soft">
        Click a project to expand full details below.
      </p>

      <ul className="divide-y divide-line border-y border-line">
        {site.moreProjects.map((project) => {
          const isActive = activeTitle === project.title;

          return (
            <li key={project.title}>
              <button
                type="button"
                aria-expanded={isActive}
                aria-controls={`${baseId}-detail`}
                onClick={() => toggle(project)}
                className={`group grid w-full gap-2 py-5 text-left transition-colors hover:bg-white/[0.02] md:grid-cols-[220px_1fr_180px_28px] md:items-center md:gap-6 md:px-3 ${
                  isActive ? "bg-accent-dim/40" : ""
                }`}
              >
                <span
                  className={`font-display text-lg font-semibold transition-colors ${
                    isActive ? "text-accent" : "text-ink group-hover:text-accent"
                  }`}
                >
                  {project.title}
                </span>
                <span className="text-sm text-ink-soft">{project.blurb}</span>
                <span className="font-mono text-xs text-ink-faint md:text-right">
                  {project.stack.slice(0, 3).join(" · ")}
                </span>
                <span
                  className={`justify-self-end font-mono text-sm transition-transform ${
                    isActive ? "rotate-45 text-accent" : "text-ink-faint"
                  }`}
                >
                  +
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      <div
        ref={detailRef}
        id={activeProject ? `${baseId}-detail` : undefined}
        className={`overflow-hidden transition-all duration-500 ease-out ${
          activeProject
            ? "mt-6 max-h-[900px] opacity-100"
            : "mt-0 max-h-0 opacity-0"
        }`}
      >
        {activeProject && (
          <article className="panel border-accent/30 p-6 md:p-8">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="font-mono text-[11px] tracking-[0.16em] text-ink-faint uppercase">
                  Project detail
                </p>
                <h3 className="mt-2 font-display text-2xl font-bold text-ink md:text-3xl">
                  {activeProject.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveTitle(null)}
                className="font-mono text-xs text-ink-soft transition-colors hover:text-accent"
              >
                Close ✕
              </button>
            </div>

            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-ink-soft md:text-base">
              {activeProject.summary}
            </p>

            <div className="mt-6">
              <p className="font-mono text-[11px] tracking-[0.16em] text-ink-faint uppercase">
                What I did
              </p>
              <ul className="mt-3 space-y-2.5">
                {activeProject.highlights.map((item) => (
                  <li
                    key={item}
                    className="relative pl-4 text-sm leading-relaxed text-ink before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:bg-accent"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <p className="font-mono text-[11px] tracking-[0.16em] text-ink-faint uppercase">
                Stack
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {activeProject.stack.map((item) => (
                  <li
                    key={item}
                    className="border border-line bg-bg-elevated/50 px-2.5 py-1 font-mono text-[11px] text-ink-soft"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        )}
      </div>
    </div>
  );
}
