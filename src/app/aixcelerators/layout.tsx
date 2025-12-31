import type { Metadata } from "next";
import { JetBrains_Mono, Rajdhani, Russo_One } from "next/font/google";

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rajdhani",
});

const russo = Russo_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-russo",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Neuronez AIXcelerators | Architect the Future",
  description:
    "Six-week live cohort to build RAG systems, agentic workflows, MCP tooling, and fine-tuned models.",
};

export default function AIXceleratorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${rajdhani.variable} ${russo.variable} ${jetbrains.variable} aixcelerators-root font-sans min-h-screen`}
    >
      {children}
    </div>
  );
}
