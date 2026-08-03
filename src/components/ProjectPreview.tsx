import type { ReactNode } from "react";

type PreviewProps = {
  slug: string;
  title: string;
  badge: string;
  preview: string;
};

function Shell({
  title,
  badge,
  children,
}: {
  title: string;
  badge: string;
  children: ReactNode;
}) {
  return (
    <div className="panel scanline panel-hover relative aspect-[16/11] overflow-hidden p-4 md:p-5">
      <div className="mb-4 flex items-start justify-between gap-4">
        <p className="font-mono text-[11px] tracking-[0.16em] text-ink-faint uppercase">
          {title.toLowerCase().replace(/\s+/g, "-")}
        </p>
        <p className="font-mono text-[11px] text-accent">{badge}</p>
      </div>
      {children}
    </div>
  );
}

function InsureVaultPreview({ preview }: { preview: string }) {
  return (
    <div className="flex h-[calc(100%-1.5rem)] flex-col justify-between">
      <div className="grid grid-cols-[72px_1fr] gap-3">
        <div className="space-y-2 border border-line bg-bg/40 p-2">
          {["Policies", "Media", "Billing"].map((item) => (
            <div
              key={item}
              className="border border-line px-2 py-1.5 font-mono text-[10px] text-ink-soft"
            >
              {item}
            </div>
          ))}
        </div>
        <div className="border border-line bg-bg/40 p-3">
          <div className="mb-3 flex items-center justify-between">
            <p className="font-mono text-[10px] text-ink-faint">dashboard</p>
            <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-accent">
              <span className="live-dot h-1.5 w-1.5 rounded-full bg-accent" />
              {preview}
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {["Active", "Renewals", "Claims"].map((label, i) => (
              <div key={label} className="border border-line p-2">
                <p className="font-display text-lg font-bold text-ink">
                  {[128, 42, 9][i]}
                </p>
                <p className="font-mono text-[9px] text-ink-faint uppercase">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-4 gap-2">
        {[55, 80, 40, 95].map((w, i) => (
          <div key={i} className="h-8 border border-line bg-bg/50 p-1.5">
            <div className="h-full bg-accent/40" style={{ width: `${w}%` }} />
          </div>
        ))}
      </div>
    </div>
  );
}

function AIntivirusPreview({ preview }: { preview: string }) {
  return (
    <div className="flex h-[calc(100%-1.5rem)] flex-col justify-between">
      <div className="border border-line bg-bg/40 p-4">
        <div className="flex items-center justify-between">
          <p className="font-mono text-[10px] text-ink-faint">wallet.connect</p>
          <span className="font-mono text-[10px] text-warm">{preview}</span>
        </div>
        <div className="mt-4 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center border border-accent/40 bg-accent-dim font-mono text-xs text-accent">
            SOL
          </div>
          <div>
            <p className="font-display text-lg font-bold text-ink">NFT unlocked</p>
            <p className="font-mono text-[10px] text-ink-soft">
              ownership verified on-chain
            </p>
          </div>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2">
        {["Merch", "eSIM", "Media"].map((item, i) => (
          <div
            key={item}
            className="border border-line bg-bg/50 p-3"
            style={{ opacity: 0.7 + i * 0.1 }}
          >
            <div className="mb-2 h-8 border border-line bg-gradient-to-br from-accent/20 to-warm/10" />
            <p className="font-mono text-[10px] text-ink-soft">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function KlarlandPreview({ preview }: { preview: string }) {
  return (
    <div className="flex h-[calc(100%-1.5rem)] flex-col justify-between">
      <div className="relative flex-1 border border-line bg-bg/40 p-3">
        <div className="absolute inset-3 rounded-sm border border-dashed border-accent/30 bg-[radial-gradient(circle_at_30%_40%,rgba(61,220,151,0.16),transparent_45%),radial-gradient(circle_at_70%_60%,rgba(240,163,94,0.12),transparent_40%)]" />
        <div className="relative z-10 flex h-full flex-col justify-between">
          <div className="flex items-center justify-between">
            <p className="font-mono text-[10px] text-ink-faint">3d.showroom</p>
            <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-accent">
              <span className="live-dot h-1.5 w-1.5 rounded-full bg-accent" />
              {preview}
            </span>
          </div>
          <div className="flex gap-2">
            {["Meet", "Share", "Sync"].map((item) => (
              <span
                key={item}
                className="border border-line bg-bg/70 px-2 py-1 font-mono text-[10px] text-ink-soft backdrop-blur"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-3 flex items-center gap-2 border border-line bg-bg/50 px-3 py-2 font-mono text-[10px] text-ink-soft">
        <span className="text-accent">●</span> jitsi · socket.io · three.js
      </div>
    </div>
  );
}

export function ProjectPreview({ slug, title, badge, preview }: PreviewProps) {
  return (
    <Shell title={title} badge={badge}>
      {slug === "insurevault" && <InsureVaultPreview preview={preview} />}
      {slug === "aintivirus" && <AIntivirusPreview preview={preview} />}
      {slug === "klarland-meet" && <KlarlandPreview preview={preview} />}
    </Shell>
  );
}
