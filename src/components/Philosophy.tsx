"use client";

import { Section } from "@/components/Section";
import { FadeIn } from "@/components/FadeIn";
import { motion } from "framer-motion";

export function Philosophy() {
  return (
    <Section
      kicker="Perspective"
      title="Do you really need AI?"
      
      align="center"
    >
      <FadeIn className="mx-auto space-y-5 text-lg text-[var(--text-muted)] md:max-w-4xl">
        <p>
          Most businesses don’t feel the urgency because their systems still “work,” but that’s exactly where the risk begins.
          
        </p>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[var(--surface-muted)]/60 p-6 shadow-[0_0_60px_rgba(255,255,255,0.08)]">
          <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[var(--accent-primary)] to-transparent opacity-70" />
          <div className="absolute -inset-6 opacity-5 blur-3xl" style={{ background: "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.2), transparent 45%)" }} />
          <motion.div
            className="pointer-events-none absolute -inset-x-16 inset-y-0 bg-gradient-to-r from-transparent via-white/12 to-transparent mix-blend-screen"
            initial={{ x: "-30%" }}
            animate={{ x: ["-30%", "30%"] }}
            transition={{ duration: 5.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          />
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--accent-secondary)]">
            From The Innovator&apos;s Dilemma
          </p>
          <blockquote className="mt-3 text-xl font-semibold text-[#f6a640]">
            “Companies fail not from bad management, but from the habits of good management — the very habits that reject disruptive technologies.”
          </blockquote>
        </div>
        <p>
           The simplest way to answer whether you need it is to look at your existing motion: if you have customers, operations, or repeated decisions, talk to us!
        </p>
        <div className="flex justify-center pt-2">
          <a
            href="/contact"
            className="rounded-full border border-[var(--accent-primary)] px-6 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent-primary)] transition hover:border-white hover:text-white"
          >
            Contact Us Now!
          </a>
        </div>
      </FadeIn>
    </Section>
  );
}
