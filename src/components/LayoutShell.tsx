"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { NeuralField } from "@/components/NeuralField";
import { ScrollProgress } from "@/components/ScrollProgress";

export function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAixcelerators = pathname?.startsWith("/aixcelerators");

  useEffect(() => {
    if (!document?.body) return;
    if (isAixcelerators) {
      document.body.classList.add("aixcelerators-body");
    } else {
      document.body.classList.remove("aixcelerators-body");
    }
  }, [isAixcelerators]);

  if (isAixcelerators) {
    return <div className="relative z-10 min-h-screen">{children}</div>;
  }

  return (
    <>
      <NeuralField />
      <div className="relative z-10 flex min-h-screen flex-col">
        <ScrollProgress />
        <Navbar />
        <main className="flex-1">{children}</main>
      </div>
    </>
  );
}
