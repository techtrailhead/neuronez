"use client";

import { Section } from "@/components/Section";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Say no when AI isn’t needed",
    text: "Not every workflow deserves AI, and we say that upfront.",
  },
  {
    title: "Design the right intelligence",
    text: "When it does, we decide how much intelligence is needed, where it fits, and which model, tool, or architecture makes sense for the long run.",
  },
  {
    title: "Test in controlled loops",
    text: "Everything is tested in controlled loops until the system behaves as expected in real conditions—shipping only when it is ready.",
  },
  {
    title: "Keep your data yours",
    text: "Your data and your privacy remain exactly that: yours.",
  },
];

const scaffoldLines = [
  { x1: 8, y1: 90, x2: 8, y2: 28, delay: 0 },
  { x1: 22, y1: 88, x2: 22, y2: 18, delay: 0.1 },
  { x1: 38, y1: 86, x2: 38, y2: 22, delay: 0.2 },
  { x1: 55, y1: 82, x2: 55, y2: 26, delay: 0.25 },
  { x1: 72, y1: 78, x2: 72, y2: 32, delay: 0.3 },
  { x1: 90, y1: 75, x2: 90, y2: 36, delay: 0.35 },
  { x1: 8, y1: 60, x2: 90, y2: 34, delay: 0.1 },
  { x1: 8, y1: 74, x2: 90, y2: 48, delay: 0.2 },
  { x1: 8, y1: 86, x2: 90, y2: 62, delay: 0.3 },
  { x1: 22, y1: 40, x2: 72, y2: 32, delay: 0.25 },
  { x1: 22, y1: 54, x2: 72, y2: 46, delay: 0.32 },
  { x1: 38, y1: 26, x2: 55, y2: 26, delay: 0.28 },
];

const ProcessBackground = () => (
  <motion.svg
    className="h-full w-full"
    viewBox="0 0 100 100"
    preserveAspectRatio="none"
    aria-hidden
  >
    <defs>
      <linearGradient id="scaffoldStroke" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="rgba(255,255,255,0.14)" />
        <stop offset="50%" stopColor="rgba(255,255,255,0.35)" />
        <stop offset="100%" stopColor="rgba(255,255,255,0.2)" />
      </linearGradient>
      <radialGradient id="constructionGlow" cx="50%" cy="50%" r="70%">
        <stop offset="0%" stopColor="rgba(160, 255, 200, 0.08)" />
        <stop offset="100%" stopColor="rgba(0,0,0,0)" />
      </radialGradient>
    </defs>

    {/* subtle glow to lift the lines from the black bg */}
    <rect width="100" height="100" fill="url(#constructionGlow)" opacity="0.9" />

    {/* ground */}
    <line x1="0" y1="88" x2="100" y2="88" stroke="rgba(255,255,255,0.12)" strokeWidth="0.6" />

    {/* scaffolding rising */}
    {scaffoldLines.map((line, index) => (
      <motion.line
        key={`${line.x1}-${line.y1}-${index}`}
        x1={line.x1}
        y1={line.y1}
        x2={line.x2}
        y2={line.y2}
        stroke="url(#scaffoldStroke)"
        strokeWidth="0.8"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{
          pathLength: [0, 1],
          opacity: [0, 0.6, 0.28],
        }}
        transition={{
          duration: 2,
          delay: line.delay,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
    ))}

    {/* building mass growing */}
    <motion.rect
      x="12"
      y="88"
      width="50"
      height="30"
      rx="1.2"
      fill="rgba(255,255,255,0.1)"
      initial={{ height: 0, y: 88 }}
      animate={{ height: [0, 26, 18, 28], y: [88, 62, 70, 60] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.rect
      x="26"
      y="88"
      width="36"
      height="22"
      rx="1.2"
      fill="rgba(255,255,255,0.14)"
      initial={{ height: 0, y: 88 }}
      animate={{ height: [0, 18, 12, 18], y: [88, 68, 74, 68] }}
      transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
    />

    {/* crane */}
    <motion.g
      initial={{ opacity: 0 }}
      animate={{ opacity: [0.2, 0.5, 0.35] }}
      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
    >
      {/* tower */}
      <line x1="80" y1="88" x2="80" y2="28" stroke="rgba(255,255,255,0.28)" strokeWidth="0.8" />
      <line x1="80" y1="88" x2="82" y2="88" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
      {/* boom */}
      <line x1="80" y1="30" x2="55" y2="30" stroke="rgba(255,255,255,0.28)" strokeWidth="0.8" />
      {/* cable */}
      <motion.line
        x1="60"
        y1="30"
        x2="60"
        y2="60"
        stroke="rgba(255,255,255,0.45)"
        strokeWidth="0.6"
        strokeLinecap="round"
        animate={{ y2: [60, 52, 64, 56] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* hook block */}
      <motion.rect
        x="58"
        y="60"
        width="4"
        height="3"
        rx="0.6"
        fill="rgba(255,255,255,0.75)"
        animate={{ y: [60, 52, 64, 56] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.g>

    {/* sparks */}
    <motion.circle
      cx="18"
      cy="62"
      r="0.9"
      fill="rgba(255,255,255,0.7)"
      animate={{ opacity: [0, 0.7, 0], scale: [0.6, 1, 0.6] }}
      transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.circle
      cx="72"
      cy="42"
      r="0.9"
      fill="rgba(255,255,255,0.6)"
      animate={{ opacity: [0, 0.5, 0], scale: [0.6, 1, 0.6] }}
      transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
    />
  </motion.svg>
);

export function Process() {
  return (
    <Section
      kicker="How we build"
      title="How do we work then?"
      description="We begin with brutal clarity on what you need to fix, improve, or reimagine."
      className="bg-[var(--page-bg)]"
      showBorder={false}
      background={<ProcessBackground />}
    >
      <div className="grid gap-6 md:grid-cols-2">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="rounded-3xl border border-white/10 bg-[var(--surface-muted)]/70 px-6 py-6 text-[var(--text-muted)] shadow-[0_0_60px_rgba(108,250,199,0.08)] transition hover:border-[var(--accent-primary)]/80 hover:shadow-[0_0_80px_rgba(108,250,199,0.18)]"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--accent-primary)]">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-3 text-xl font-semibold text-[var(--text-primary)]">
              {step.title}
            </h3>
            <p className="mt-3 text-base leading-relaxed">{step.text}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
