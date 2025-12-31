import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Low-Budget LoRA — Abstract",
  description: "Abstract for low-budget LoRA: adapter placement and rank trade-offs.",
};

export default function LowBudgetLoraPage() {
  return (
    <main className="min-h-screen bg-[var(--page-bg)] px-6 py-16">
      <div className="mx-auto flex max-w-4xl flex-col gap-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent-secondary)]">
            Research Paper
          </p>
          <a
            href="/"
            className="text-sm font-semibold text-[var(--accent-primary)] underline underline-offset-4 transition hover:text-white"
          >
            ← Back to home
          </a>
        </div>
        <h1 className="text-3xl font-semibold text-[var(--text-primary)] md:text-4xl">
          Low-Budget LoRA: Strategic Adapter Placement and Rank for Efficient Model Tuning
        </h1>
        <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--text-muted)]">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--accent-secondary)]/60 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent-secondary)]">
            In Review
          </span>
          <span className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">Started 2025</span>
        </div>
        <div className="h-[1px] w-full bg-white/10" />
        <section className="space-y-3 rounded-3xl border border-white/10 bg-[var(--surface-muted)]/70 px-5 py-6 shadow-[0_0_30px_rgba(2,5,10,0.4)]">
          <p className="text-base font-semibold uppercase tracking-[0.22em] text-[var(--accent-secondary)]">
            Abstract
          </p>
          <p className="text-base leading-relaxed text-[var(--text-muted)]">
            We study how LoRA adapter placement and rank choices impact quality and cost on constrained budgets.
            Through experiments across encoder and decoder stacks, we identify layers where adapters deliver the best
            gain per parameter and show that modest ranks retain most performance while slashing training cost. The
            results offer a practical recipe for teams tuning models with limited compute: place adapters selectively,
            keep ranks lean, and recover strong task performance without the expense of full fine-tuning.
          </p>
        </section>
      </div>
    </main>
  );
}
