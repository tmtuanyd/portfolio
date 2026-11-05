import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-line">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-ink-faint md:flex-row md:items-center md:justify-between md:px-8">
        <p className="font-semibold text-ink">{site.name}</p>
        <p className="font-mono text-xs">
          © {new Date().getFullYear()} · Built with Next.js + Tailwind
        </p>
      </div>
    </footer>
  );
}
