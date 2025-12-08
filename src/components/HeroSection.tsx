"use client";

import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function HeroSection() {
  return (
    <section className="flex min-h-screen items-center border-b border-white/10">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          className="space-y-5 text-[var(--text-muted)]"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          <p className="text-sm uppercase tracking-[0.4em] text-[var(--accent-secondary)]">
            neuronez AI Product Studio
          </p>
          <motion.h1
            variants={item}
            className="max-w-4xl text-4xl font-semibold text-[var(--text-primary)] md:text-5xl"
          >
            neuronez is a{" "}
            <span className="inline-block rounded-[0.35em] bg-[var(--accent-secondary)] px-2 py-0.5 text-[var(--page-bg)] leading-tight align-middle">
              product studio
            </span>{" "}
            where builders come together to design, test, and ship AI systems that matter for you.
          </motion.h1>
          <div className="space-y-4 text-lg leading-relaxed">
            <motion.p variants={item}>
              We work closely with teams who need more than advice; they need something that runs reliably in production.
            </motion.p>
            <motion.p variants={item}>
              Turning your goals into real architectures, workflows, and deployed solutions.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
