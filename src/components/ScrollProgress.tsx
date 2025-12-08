"use client";

import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const doc = document.documentElement;
      const body = document.body;
      const scrollTop = doc.scrollTop || body.scrollTop;
      const scrollHeight = doc.scrollHeight || body.scrollHeight;
      const clientHeight = doc.clientHeight || window.innerHeight;
      const height = scrollHeight - clientHeight;
      const next = height > 0 ? scrollTop / height : 0;
      setProgress(Math.min(Math.max(next, 0), 1));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-40 h-1 bg-white/5 backdrop-blur-sm">
      <div
        className="h-full origin-left bg-gradient-to-r from-[var(--accent-primary)] via-[var(--accent-secondary)] to-[#f6a640] shadow-[0_0_12px_rgba(246,166,64,0.4)] transition-[transform] duration-200 ease-out"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}
