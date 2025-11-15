import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  kicker?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  children: ReactNode;
};

export function Section({
  id,
  kicker,
  title,
  description,
  align = "left",
  className,
  children,
}: SectionProps) {
  const isCenter = align === "center";

  return (
    <section
      id={id}
      className={cn("relative border-b border-white/10 py-16 md:py-20", className)}
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <div
          className={cn(
            "w-full",
            isCenter && "mx-auto max-w-3xl text-center",
            !isCenter && "text-left",
          )}
        >
          {kicker && (
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent-secondary)]/80">
              {kicker}
            </p>
          )}
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-base text-slate-300">{description}</p>
          )}
        </div>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
