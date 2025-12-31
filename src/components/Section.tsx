"use client";

import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import { motion } from "framer-motion";

type SectionProps = {
  id?: string;
  kicker?: string;
  title?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  background?: ReactNode;
  fullHeight?: boolean;
  showBorder?: boolean;
  children: ReactNode;
};

export function Section({
  id,
  kicker,
  title,
  description,
  align = "left",
  className,
  background,
  fullHeight = true,
  showBorder = true,
  children,
}: SectionProps) {
  const isCenter = align === "center";

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn(
        "relative flex items-center",
        showBorder && "border-b border-white/10",
        fullHeight && "min-h-screen",
        className,
      )}
    >
      {background && (
        <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-70">
          {background}
        </div>
      )}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-16">
        <div
          className={cn(
            "w-full",
            isCenter && "mx-auto max-w-3xl text-center",
            !isCenter && "text-left md:max-w-[90%]",
          )}
        >
          {kicker && (
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--accent-secondary)]">
              {kicker}
            </p>
          )}
          {title && (
            <h2 className="mt-5 text-3xl font-semibold text-[var(--text-primary)] md:text-4xl">
              {title}
            </h2>
          )}
          {description && (
            <p className="mt-4 text-base text-[var(--text-muted)]">{description}</p>
          )}
        </div>
        <div className="mt-10 text-[var(--text-muted)]">{children}</div>
      </div>
    </motion.section>
  );
}
