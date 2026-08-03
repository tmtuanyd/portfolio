"use client";

import { useEffect } from "react";

export function Ambient() {
  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      const x = (event.clientX / window.innerWidth) * 100;
      const y = (event.clientY / window.innerHeight) * 100;
      document.documentElement.style.setProperty("--spot-x", `${x}%`);
      document.documentElement.style.setProperty("--spot-y", `${y}%`);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="spot-layer absolute inset-0" />
      <div className="grid-mask absolute inset-0 opacity-35" />
      <div className="float-a absolute -left-24 top-20 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      <div className="float-b absolute -right-16 top-[42%] h-80 w-80 rounded-full bg-warm/8 blur-3xl" />
      <div className="grain absolute inset-0" />
    </div>
  );
}
