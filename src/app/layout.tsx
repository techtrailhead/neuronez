import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { NeuralField } from "@/components/NeuralField";

export const metadata: Metadata = {
  metadataBase: new URL("https://neuronez.lab"),
  title: {
    default: "neuronez — Private AI Lab",
    template: "%s | neuronez",
  },
  description:
    "neuronez is a selective AI lab engineering measurable, production-grade AI systems for teams with real-world constraints.",
  openGraph: {
    title: "neuronez — Private AI Lab",
    description:
      "AI systems engineered with scientific rigor, from discovery through deployment.",
    type: "website",
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[var(--page-bg)]">
      <body
        className="antialiased bg-[var(--page-bg)] text-[var(--text-primary)]"
      >
        <NeuralField />
        <div className="relative z-10 flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <footer className="border-t border-white/10 bg-[var(--surface-muted)]/80">
            <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-slate-300 md:flex-row md:items-center md:justify-between">
              <p className="font-medium text-white">neuronez lab</p>
              <p>Engineering measurable AI systems with scientific rigor.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
