import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LLMS-API.txt — Abstract",
  description: "Abstract for LLMS-API.txt: lightweight API spec for LLM agents.",
};

export default function LlmsApiTxtPage() {
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
          LLMS-API.txt: Rise of AI agents and the need for seamless API interaction
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
            In the era of AI agents, inconsistent API documentation and heavyweight protocols slow down reliable
            interactions. LLMS-API.txt is a lightweight, text-based protocol inspired by robots.txt that lets web apps
            publish structured, machine-readable API definitions at a standard URL. It outlines endpoints, parameters,
            authentication, and rate limits so language models can execute complex calls with minimal developer
            overhead. Unlike Model Context Protocol (MCP), LLMS-API.txt requires only a static file, democratizing agent
            access while reducing hosting cost. We evaluate the format with small and state-of-the-art models across
            authenticated calls, rate limiting, and malformed files, demonstrating robust, efficient API interactions
            and a path to safer agent-driven web app integrations.
          </p>
        </section>
      </div>
    </main>
  );
}
