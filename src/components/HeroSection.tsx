"use client";

import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="flex min-h-screen items-center border-b border-white/10">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          className="space-y-5 text-[var(--text-muted)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <p className="text-sm uppercase tracking-[0.4em] text-[var(--accent-secondary)]">
            neuronez lab
          </p>
          <h1 className="max-w-4xl text-4xl font-semibold text-[var(--text-primary)] md:text-5xl">
            We’ve been thinking about what work feels like after AI became second nature.
          </h1>
          <div className="space-y-4 text-lg leading-relaxed">
            <p>
              It’s not about grinding anymore. It’s about choosing the problems that matter. We’re builders and researchers at heart; experimenting with models, workflows, and systems that quietly make things better.
            </p>
            <p>
              neuronez is our space to slow down, think deeply, and build things that last.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
