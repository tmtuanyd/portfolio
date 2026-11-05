"use client";

import { useState, type FormEvent } from "react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/data/site";

type Status = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setError("");

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      message: String(data.get("message") || "").trim(),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message.");
      }

      form.reset();
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Failed to send message.");
    }
  };

  return (
    <section id="contact" className="relative z-10 border-t border-line">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <SectionHeading
            index="05"
            label="Contact"
            title="Have a product worth building? Let's talk."
          />
        </Reveal>

        <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
          <Reveal delay={80}>
            <form onSubmit={onSubmit} className="panel space-y-5 p-6 md:p-7">
              <label className="block">
                <span className="font-mono text-[11px] tracking-[0.16em] text-ink-faint uppercase">
                  Name
                </span>
                <input
                  name="name"
                  required
                  disabled={status === "loading"}
                  className="mt-2 w-full border border-line bg-bg-elevated px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-accent disabled:opacity-60"
                  placeholder="Your name"
                />
              </label>
              <label className="block">
                <span className="font-mono text-[11px] tracking-[0.16em] text-ink-faint uppercase">
                  Email
                </span>
                <input
                  name="email"
                  type="email"
                  required
                  disabled={status === "loading"}
                  className="mt-2 w-full border border-line bg-bg-elevated px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-accent disabled:opacity-60"
                  placeholder="you@company.com"
                />
              </label>
              <label className="block">
                <span className="font-mono text-[11px] tracking-[0.16em] text-ink-faint uppercase">
                  Message
                </span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  disabled={status === "loading"}
                  className="mt-2 w-full resize-y border border-line bg-bg-elevated px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-accent disabled:opacity-60"
                  placeholder="Tell me about the product, timeline, or role."
                />
              </label>
              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex items-center gap-2 bg-accent px-5 py-3 text-sm font-semibold text-bg transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "loading" ? "Sending…" : "Send message"}{" "}
                <span className="link-arrow">→</span>
              </button>

              {status === "success" && (
                <p className="font-mono text-xs text-accent">
                  Message sent. I&apos;ll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="font-mono text-xs text-warm">
                  {error || "Something went wrong. Please try again."}
                </p>
              )}
            </form>
          </Reveal>

          <Reveal delay={140}>
            <div>
              <p className="font-mono text-xs tracking-[0.18em] text-ink-faint uppercase">
                Or reach me directly
              </p>
              <dl className="mt-6 space-y-0 border-t border-line">
                <div className="border-b border-line py-4">
                  <dt className="font-mono text-[11px] text-ink-faint uppercase">
                    Email
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={`mailto:${site.email}`}
                      className="text-ink transition-colors hover:text-accent"
                    >
                      {site.email}
                    </a>
                  </dd>
                </div>
                <div className="border-b border-line py-4">
                  <dt className="font-mono text-[11px] text-ink-faint uppercase">
                    Phone
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={site.phoneHref}
                      className="text-ink transition-colors hover:text-accent"
                    >
                      {site.phone}
                    </a>
                  </dd>
                </div>
                <div className="border-b border-line py-4">
                  <dt className="font-mono text-[11px] text-ink-faint uppercase">
                    GitHub
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={site.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-ink transition-colors hover:text-accent"
                    >
                      github.com/tmtuanyd
                      <span className="link-arrow">→</span>
                    </a>
                  </dd>
                </div>
                <div className="border-b border-line py-4">
                  <dt className="font-mono text-[11px] text-ink-faint uppercase">
                    LinkedIn
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={site.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-ink transition-colors hover:text-accent"
                    >
                      linkedin.com/in/tuan-tran-71ba90191
                      <span className="link-arrow">→</span>
                    </a>
                  </dd>
                </div>
                <div className="border-b border-line py-4">
                  <dt className="font-mono text-[11px] text-ink-faint uppercase">
                    Location
                  </dt>
                  <dd className="mt-1 text-ink">{site.location}</dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
