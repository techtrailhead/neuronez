import { ChatMessage } from "@/types";

type HistoryEntry = {
  role: string;
  parts: { text: string }[];
};

const replies = [
  {
    match: ["schedule", "time", "calendar", "week"],
    text: "The cohort runs 4 weeks with 2 live sessions per week. Expect ~6-8 hours of work weekly between live builds and practice labs.",
  },
  {
    match: ["prereq", "beginner", "experience", "new", "starter"],
    text: "You do not need deep ML background. We start from transformer basics and accelerate into RAG, MCP tool use, and agent swarms with guided builds.",
  },
  {
    match: ["rag", "retrieval", "vector"],
    text: "Week 2 is all about RAG: embeddings, hybrid search, re-ranking, and production hardening. You ship a company-ready knowledge brain by the end of the week.",
  },
  {
    match: ["agent", "mcp", "tool", "browser"],
    text: "Week 3 covers agentic systems and MCP. You wire tools like browsing, code execution, and API calls so agents can act instead of just chat.",
  },
  {
    match: ["fine-tune", "lora", "qlora", "custom"],
    text: "Week 4 is about control. We prepare data, train with LoRA/QLoRA, evaluate, and compress so your model aligns to your domain without overfitting.",
  },
  {
    match: ["price", "cost", "pay", "buy"],
    text: "Early Bird: $499. Standard: $799. Both include the 4-week live cohort, project reviews, and post-cohort implementation office hours.",
  },
  {
    match: ["career", "job", "resume", "transition", "upskill"],
    text: "You graduate with 4 portfolio builds: a neural chat interface, production RAG system, agentic researcher, and a fine-tuned model. Great proof for PM/Eng/Data roles.",
  },
];

const defaultReply =
  "I'm the on-call course counselor. Ask me about schedule, prerequisites, pricing, the RAG/agentic builds, or how the fine-tuning week is structured.";

const buildHistorySummary = (history: HistoryEntry[]): string => {
  const lastTurns = history.slice(-3);
  const flattened = lastTurns
    .map((entry) => `${entry.role}: ${entry.parts.map((p) => p.text).join(" ")}`)
    .join(" | ");
  return flattened;
};

export const chatWithCounselor = async (
  userMessage: string,
  history: HistoryEntry[],
): Promise<{ text: string; image?: string }> => {
  const normalized = userMessage.toLowerCase();

  const matched = replies.find((entry) =>
    entry.match.some((keyword) => normalized.includes(keyword)),
  );

  if (matched) {
    return { text: matched.text };
  }

  // Keep context lightly by acknowledging recent history without external APIs.
  const context = buildHistorySummary(history);
  const contextualized = context
    ? `${defaultReply} (Recent context: ${context})`
    : defaultReply;

  return { text: contextualized };
};
