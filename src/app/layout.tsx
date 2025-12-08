import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import { Navbar } from "@/components/Navbar";
import { NeuralField } from "@/components/NeuralField";
import { ScrollProgress } from "@/components/ScrollProgress";

export const metadata: Metadata = {
  metadataBase: new URL("https://neuronez.lab"),
  title: {
    default: "neuronez — AI Product Studio",
    template: "%s | neuronez",
  },
  description:
    "neuronez is a selective AI lab engineering measurable, production-grade AI systems for teams with real-world constraints.",
  openGraph: {
    title: "neuronez — AI Product Studio",
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LY4WLTGNTV"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LY4WLTGNTV');
          `}
        </Script>
        <NeuralField />
        <div className="relative z-10 flex min-h-screen flex-col">
          <ScrollProgress />
          <Navbar />
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
