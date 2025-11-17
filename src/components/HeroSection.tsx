"use client";

import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="border-b border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <motion.div
          className="space-y-4 text-[var(--text-muted)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <p className="text-sm uppercase tracking-[0.4em] text-[var(--accent-secondary)]">
            neuronez lab
          </p>
          <h1 className="max-w-4xl text-4xl font-semibold text-[var(--text-primary)] md:text-5xl">
            A private lab mindset for applied AI.
          </h1>
          <div className="space-y-4 text-lg leading-relaxed">
            <p>
              We’ve been thinking about what real work looks like in the age of AI. For us, it’s less about chasing trends and more about choosing the problems that actually matter. We’re builders and researchers at heart, experimenting with models, workflows, and systems that quietly make things better.
            </p>
            <p>
              We started neuronez to create space for deep, intentional work. Not rushed projects or loud demos — but the kind of builds that stay with you.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
