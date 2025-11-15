"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  return (
    <section className="border-b border-white/5">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold uppercase tracking-[0.3em] text-[#b6f7d4]"
        >
          neuronez lab
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-5 max-w-4xl text-4xl font-semibold leading-tight text-white md:text-6xl"
        >
          AI, engineered with scientific precision. Nothing ornamental, only systems that
          stand up to production.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 max-w-2xl text-lg text-slate-300"
        >
          We study your workflows, design measurable experiments, and quietly ship AI that
          survives outside a demo. Limited collaborations, lab-first rigor.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-[var(--accent-primary)] px-6 py-3 text-base font-medium transition hover:bg-[var(--accent-primary)]/80"
            style={{ color: "#1b1a16" }}
          >
            Collaborate with us
          </Link>
          <Link
            href="/services"
            className="text-sm font-semibold text-[var(--accent-secondary)] transition hover:text-white"
          >
            See our services &rarr;
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
