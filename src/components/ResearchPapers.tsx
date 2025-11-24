"use client";

import { Section } from "@/components/Section";
import { motion } from "framer-motion";

const papers = [
  {
    title: "Metaverse in Education",
    status: "Published",
    description:
      "How immersive spaces can augment learning outcomes, communities, and assessment frameworks.",
    href: "https://www.dropbox.com/scl/fi/wzc44eyxmrxqjw29jibcv/Metaverse-for-Education-in-India.pdf?rlkey=rgx6t1b5sdfddkc12g9a5pkjh&st=vrctsnjd&dl=0",
  },
  {
    title: "LLMS-API.txt: Rise of AI agents and the need for seamless API interaction",
    status: "In Review",
    description:
      "Patterns for exposing reliable, composable APIs to agents so they act with guardrails and context.",
    href: "/papers/llms-api-txt",
  },
  {
    title: "Low-Budget LoRA: Strategic Adapter Placement and Rank for Efficient Model Tuning",
    status: "In Review",
    description:
      "Experiments on where adapters matter most and how to trade rank vs. performance on small budgets.",
    href: "/papers/low-budget-lora",
  },
];

export function ResearchPapers() {
  return (
    <Section
      kicker="Research"
      title="Research papers from the lab."
      description="Building leads to questions. Questions lead to experiments. Some turn into papers."
      className="bg-[var(--page-bg)]"
    >
      <div className="space-y-5">
        {papers.map((paper, index) => (
          <motion.article
            key={paper.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-[var(--surface-muted)]/60 px-6 py-5 shadow-[0_0_30px_rgba(2,5,10,0.35)] md:flex-row md:items-center md:gap-6"
          >
            <div className="flex-1 space-y-2">
              <p className="text-xl font-semibold text-[var(--text-primary)] md:text-2xl">
                {paper.title}
              </p>
              <p className="text-sm text-[var(--text-muted)]">{paper.description}</p>
              <a
                href={paper.href}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent-primary)] underline-offset-4 transition hover:text-white"
              >
                View →
              </a>
            </div>
            <div className="self-start md:self-center">
              <span
                className="inline-block rounded-full border border-[var(--accent-secondary)]/50 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent-secondary)]"
                aria-label={`Status: ${paper.status}`}
              >
                {paper.status}
              </span>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
