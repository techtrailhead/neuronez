"use client";

import { Section } from "@/components/Section";
import { motion } from "framer-motion";

const capabilities = [
  {
    title: "AI Workflows",
    description:
      "Streamline operations by automating repetitive decision-making so your teams focus on strategy, not process.",
  },
  {
    title: "RAG Systems",
    description:
      "Connect your company’s data to AI turning static information into context-aware knowledge engines.",
  },
  {
    title: "Agentic Automation",
    description:
      "Build self-running agents that act, decide, and learn from feedback; your silent operational team.",
  },
  {
    title: "Image and Audio Recognition",
    description:
      "Transform visual and voice data into structured insights from quality checks to user understanding.",
  },
  {
    title: "MCP Servers",
    description:
      "Design modular control planes that connect multiple AI tools, enabling distributed reasoning and workflow orchestration.",
  },
];

export function Work() {
  return (
    <Section
      kicker="What we build"
      title="Systems that think with you."
      description="Each project is handcrafted. We don’t just ship tools — we create systems that stay with your team."
    >
      <div className="space-y-6">
        {capabilities.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            className="space-y-2"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--accent-primary)]">
              {item.title}
            </p>
            <p className="text-base text-[var(--text-muted)]">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
