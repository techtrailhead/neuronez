"use client";

import { motion } from "framer-motion";

export function ContactButton() {
  return (
    <motion.a
      href="mailto:contact@ankita.cc"
      className="mx-auto mt-8 inline-flex items-center justify-center rounded-full border border-[var(--accent-primary)] px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent-primary)]"
      whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(108, 250, 199, 0.4)" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      Drop us an email
    </motion.a>
  );
}
