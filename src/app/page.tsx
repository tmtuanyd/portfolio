import { Ambient } from "@/components/Ambient";
import { Contact } from "@/components/Contact";
import { Sections } from "@/components/Sections";
import { Sidebar } from "@/components/Sidebar";
import { site } from "@/data/site";

export default function Home() {
  return (
    <>
      <Ambient />
      <a
        href="#content"
        className="absolute top-0 left-0 z-50 -translate-y-full rounded-br-lg bg-accent px-4 py-3 text-sm font-semibold text-bg focus-visible:translate-y-0"
      >
        Skip to content
      </a>
      <div className="relative z-10 mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Sidebar />
          <main id="content" className="pt-24 lg:w-[52%] lg:py-24">
            <Sections />
            <Contact />
            <footer className="max-w-md pb-16 text-sm text-ink-faint">
              Designed and built by {site.name} with Next.js and Tailwind CSS, set in Geist.
            </footer>
          </main>
        </div>
      </div>
    </>
  );
}
