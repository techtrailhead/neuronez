 "use client";

import { Section } from "@/components/Section";
import { FadeIn } from "@/components/FadeIn";
import { motion } from "framer-motion";

const bubbles = [
  { label: "Supply chain", size: "lg", tone: "accent" },
  { label: "Manufacturing", size: "md", tone: "muted" },
  { label: "Retail", size: "sm", tone: "muted" },
  { label: "E-commerce", size: "md", tone: "accent" },
  { label: "EdTech", size: "sm", tone: "muted" },
  { label: "Fintech", size: "lg", tone: "accent" },
  { label: "Logistics", size: "md", tone: "muted" },
  { label: "Customer support", size: "sm", tone: "muted" },
  { label: "Healthcare-adjacent operations", size: "lg", tone: "accent" },
];

const sizeClass: Record<string, string> = {
  sm: "w-24",
  md: "w-28",
  lg: "w-32",
};

const toneClass: Record<string, string> = {
  accent: "border-[var(--accent-secondary)]/60 bg-[var(--accent-secondary)]/15 shadow-[0_0_45px_rgba(108,250,199,0.18)]",
  muted: "border-white/20 bg-white/5 shadow-[0_0_45px_rgba(255,255,255,0.08)]",
};

export function Industries() {
  return (
    <Section
      kicker="Industries"
      title="Where we build best"
      description="Over the years, our work has kept pulling us toward industries where complexity is high, data is real, and decisions compound fast."
      align="center"
      className="bg-[var(--page-bg)]"
    >
      <FadeIn className="mx-auto flex max-w-5xl flex-wrap justify-center gap-6">
        {bubbles.map((bubble, index) => (
          <motion.div
            key={bubble.label}
            className={`relative ${sizeClass[bubble.size]} aspect-square rounded-full text-center backdrop-blur-sm ${toneClass[bubble.tone]}`}
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.15,
            }}
          >
            <span className="absolute inset-0 flex items-center justify-center px-3 text-sm font-semibold text-[var(--text-primary)]">
              {bubble.label}
            </span>
            <span className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.08),transparent_55%)]" />
          </motion.div>
        ))}
      </FadeIn>
    </Section>
  );
}
