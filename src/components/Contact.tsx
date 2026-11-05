"use client";

import { useState, type FormEvent } from "react";
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
    <section id="contact" className="mb-16 scroll-mt-16 lg:scroll-mt-24" aria-label="Contact">
      <div className="sticky top-0 z-20 -mx-6 mb-6 bg-bg/85 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only">
        <h2 className="text-xs font-semibold tracking-[0.18em] text-ink uppercase">Contact</h2>
      </div>
      <h3 className="text-2xl font-semibold tracking-tight text-ink">
        Have a product worth building? Let&apos;s talk.
      </h3>
      <p className="mt-3 leading-relaxed text-ink-soft">
        I&apos;m open to senior full-stack and frontend roles and to freelance projects, with
        teams and founders anywhere. Email me at{" "}
        <a href={`mailto:${site.email}`} className="font-medium text-ink underline decoration-line-strong underline-offset-4 hover:text-accent">
          {site.email}
        </a>{" "}
        or send a message here.
      </p>
      <div className="mt-8">
        <form onSubmit={onSubmit} className="space-y-5 rounded-xl border border-line bg-bg-elevated p-5 md:p-6">
              <label className="block">
                <span className="font-mono text-[11px] tracking-[0.16em] text-ink-faint uppercase">
                  Name
                </span>
                <input
                  name="name"
                  required
                  disabled={status === "loading"}
                  className="mt-2 w-full rounded-lg border border-line bg-bg-elevated px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-accent disabled:opacity-60"
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
                  className="mt-2 w-full rounded-lg border border-line bg-bg-elevated px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-accent disabled:opacity-60"
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
                  className="mt-2 w-full resize-y rounded-lg border border-line bg-bg-elevated px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-accent disabled:opacity-60"
                  placeholder="Tell me about the product, timeline, or role."
                />
              </label>
              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-bg transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
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
      </div>
    </section>
  );
}
