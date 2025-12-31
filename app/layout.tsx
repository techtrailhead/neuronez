import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Study Lab | Architect the Future",
  description:
    "Four-week live cohort to build RAG systems, agentic workflows, MCP tooling, and fine-tuned models.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Russo+One&family=Rajdhani:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans bg-bg-950">{children}</body>
    </html>
  );
}
