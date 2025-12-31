import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type CardProps = {
  title: string;
  eyebrow?: string;
  description?: string;
  detail?: string;
  footer?: ReactNode;
  children?: ReactNode;
  className?: string;
};

export function Card({
  title,
  eyebrow,
  description,
  detail,
  footer,
  children,
  className,
}: CardProps) {
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col rounded-3xl border border-white/10 bg-[var(--surface)]/90 p-6 shadow-[0_0_30px_rgba(2,5,10,0.5)] transition hover:border-[var(--accent-primary)]/60 hover:shadow-[0_0_45px_rgba(109,240,255,0.25)]",
        className,
      )}
    >
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent-secondary)]/80">
          {eyebrow}
        </p>
      )}
      <h3 className="mt-2 text-xl font-medium text-white">{title}</h3>
      {description && (
        <p className="mt-3 text-sm text-slate-300">{description}</p>
      )}
      {detail && (
        <p className="mt-2 text-sm text-slate-400">{detail}</p>
      )}
      {children && <div className="mt-4 flex-1 text-sm">{children}</div>}
      {footer && (
        <div className="mt-6 border-t border-white/5 pt-4 text-sm text-slate-400">
          {footer}
        </div>
      )}
    </article>
  );
}
