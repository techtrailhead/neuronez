"use client";

import { Section } from "@/components/Section";
import { motion } from "framer-motion";

const steps = [
  {
    title: "We start with a conversation",
    text: "A simple call to understand your challenges, your goals, and the way your team works. We don’t sell in this call; we listen.",
  },
  {
    title: "We evaluate fit",
    text: "We explore if what we build can actually add value to your world. If not, we tell you upfront. Honesty saves everyone’s time.",
  },
  {
    title: "We understand before we work together",
    text: "A few collaborative sessions where we brainstorm, scope, and ideate with you. You’ll see how we think, how we build, and whether our rhythm matches yours.",
  },
  {
    title: "We finalize; only after shared work",
    text: "You don’t hire us unless we’ve already built something small together: a sprint, a system, a prototype. Until then, everything from ideation to solutioning is on us.",
  },
];

export function Process() {
  return (
    <Section
      kicker="How we build"
      title="It’s not a process. It’s a collaboration rhythm."
      description="neuronez isn’t a service. It’s a collaboration lab. We build trust before we build systems."
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
      <p className="mt-8 text-base text-[var(--text-muted)]">
        neuronez isn’t a service. It’s a collaboration lab. We build trust before we build systems.
      </p>
    </Section>
  );
}
