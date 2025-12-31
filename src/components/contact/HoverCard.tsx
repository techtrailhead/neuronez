"use client";

import { motion } from "framer-motion";

export function HoverCard() {
  return (
    <motion.div
      whileHover={{ scale: 1.02, boxShadow: "0 0 60px rgba(108, 250, 199, 0.25)", y: -4 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="rounded-2xl border border-zinc-800 bg-[#111315]/80 p-8 text-center text-[var(--text-muted)]"
    >
      <p className="text-lg leading-relaxed">
        We’re usually building something new. If you have a problem worth solving, we’ll probably get curious.
      </p>
      <p className="mt-4 text-lg text-[var(--text-primary)]">Let’s talk.</p>
    </motion.div>
  );
}
