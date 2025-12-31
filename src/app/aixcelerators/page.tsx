"use client";

import { Flame, Menu } from "lucide-react";
import { GeminiAssistant } from "@/components/aixcelerators/GeminiAssistant";
import { Hero } from "@/components/aixcelerators/Hero";
import { Pricing } from "@/components/aixcelerators/Pricing";
import { ProgramDetails } from "@/components/aixcelerators/ProgramDetails";
import { RealityCheck } from "@/components/aixcelerators/RealityCheck";
import { Roadmap } from "@/components/aixcelerators/Roadmap";
import { WhoIsThisFor } from "@/components/aixcelerators/WhoIsThisFor";

export default function Page() {
  return (
    <div className="min-h-screen bg-bg-950 text-stone-200 selection:bg-magma-500/30 selection:text-magma-100">
      <nav className="fixed top-0 w-full z-50 transition-all duration-500 pt-8 pb-4">
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-transparent pointer-events-none h-32"></div>

        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between relative z-10">
          <a href="/aixcelerators" className="flex items-center gap-3 cursor-pointer group">
            <div className="relative">
              <Flame
                className="text-white relative z-10 group-hover:text-magma-500 transition-colors duration-500"
                size={22}
                fill="currentColor"
              />
              <div className="absolute inset-0 bg-magma-500 blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display font-bold text-white text-xl tracking-[0.15em]">
                NEURONEZ
              </span>
              <span className="text-[10px] font-mono uppercase tracking-[0.35em] text-stone-500 mt-1">
                AIXcelerators
              </span>
            </div>
          </a>

          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-12">
            {[
              { label: "Manifesto", href: "/aixcelerators/manifesto" },
              { label: "Technology", href: "#technology" },
              { label: "Curriculum", href: "#forge" },
              { label: "Pricing", href: "#pricing" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-sans text-stone-300 hover:text-white uppercase tracking-[0.2em] transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-6">
            <a
              href="#pricing"
              className="group relative px-8 py-3 border border-stone-600 hover:border-white text-white text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:bg-white hover:text-black overflow-hidden"
            >
              <span className="relative z-10">Initialize</span>
            </a>
          </div>

          <div className="md:hidden text-white">
            <Menu size={24} />
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <section id="technology">
          <RealityCheck />
        </section>
        <section id="curriculum">
          <WhoIsThisFor />
          <Roadmap />
          <ProgramDetails />
        </section>
        <section id="pricing">
          <Pricing />
        </section>
      </main>

      <footer className="bg-bg-900 py-16 border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-magma-600 to-transparent opacity-50"></div>
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 z-10 relative">
          <div className="text-stone-600 text-xs font-mono uppercase tracking-widest">
            © 2026 Neuronez AIXcelerators. Systems Online.
          </div>
          <div className="flex gap-8 text-sm font-mono">
            <a
              href="#"
              className="text-stone-600 hover:text-magma-500 transition-colors"
            >
              X
            </a>
            <a
              href="#"
              className="text-stone-600 hover:text-magma-500 transition-colors"
            >
              Medium
            </a>
            <a
              href="mailto:contact@ankita.cc"
              className="text-stone-600 hover:text-magma-500 transition-colors"
            >
              Contact us: contact@ankita.cc
            </a>
          </div>
        </div>
      </footer>

      <GeminiAssistant />
    </div>
  );
}
