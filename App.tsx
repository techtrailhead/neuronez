import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { RealityCheck } from './components/RealityCheck';
import { WhoIsThisFor } from './components/WhoIsThisFor';
import { Roadmap } from './components/Roadmap';
import { ProgramDetails } from './components/ProgramDetails';
import { Pricing } from './components/Pricing';
import { GeminiAssistant } from './components/GeminiAssistant';
import { Flame, Menu, Lock, ArrowRight } from 'lucide-react';

const App: React.FC = () => {
  const [hasKey, setHasKey] = useState<boolean>(false);

  useEffect(() => {
    const checkKey = async () => {
      if ((window as any).aistudio && await (window as any).aistudio.hasSelectedApiKey()) {
        setHasKey(true);
      }
    };
    checkKey();
  }, []);

  const handleConnectKey = async () => {
    try {
      if ((window as any).aistudio) {
        await (window as any).aistudio.openSelectKey();
        setHasKey(true);
      }
    } catch (e) {
      console.error(e);
      // Reset logic if needed, but per instructions we assume success to avoid race conditions
      setHasKey(true);
    }
  };

  if (!hasKey) {
    return (
      <div className="min-h-screen bg-bg-950 flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
         {/* Background Effects */}
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-bg-900 via-black to-black z-0"></div>
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-magma-600/10 blur-[100px] rounded-full pointer-events-none"></div>

         <div className="relative z-10 max-w-lg w-full bg-stone-900/50 backdrop-blur-xl border border-stone-800 p-12 rounded-2xl shadow-2xl flex flex-col items-center">
            <div className="w-16 h-16 bg-bg-950 rounded-full border border-stone-800 flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(249,115,22,0.2)]">
               <Lock className="text-magma-500" size={24} />
            </div>
            
            <h1 className="text-3xl font-display uppercase text-white mb-4 tracking-wide">Authentication Required</h1>
            <p className="text-stone-400 font-light text-lg mb-8">
              To access the Ignis Protocol and enable <span className="text-white font-medium">Pro-Level Visualization</span> (Nano Banana Pro), a valid API key is required.
            </p>

            <button 
              onClick={handleConnectKey}
              className="group w-full py-4 bg-magma-600 text-white font-display uppercase tracking-widest text-sm hover:bg-magma-500 transition-all hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] flex items-center justify-center gap-3 mb-6"
            >
              Initialize Key Exchange <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <a 
              href="https://ai.google.dev/gemini-api/docs/billing" 
              target="_blank" 
              rel="noreferrer"
              className="text-xs text-stone-600 hover:text-magma-500 underline transition-colors font-mono uppercase tracking-wider"
            >
              View Billing Documentation
            </a>
         </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-950 text-stone-200 font-sans selection:bg-magma-500/30 selection:text-magma-100">
      
      {/* Visionary Header - Minimalist & Transparent */}
      <nav className="fixed top-0 w-full z-50 transition-all duration-500 pt-8 pb-4">
        {/* Subtle top gradient for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-transparent pointer-events-none h-32"></div>
        
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between relative z-10">
          
          {/* 1. Logo: Clean & Iconic */}
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="relative">
               <Flame className="text-white relative z-10 group-hover:text-magma-500 transition-colors duration-500" size={22} fill="currentColor" />
               <div className="absolute inset-0 bg-magma-500 blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
            </div>
            <span className="font-display font-bold text-white text-xl tracking-[0.15em]">IGNIS</span>
          </div>

          {/* 2. Centered Navigation: Floating, Spacious, Cinematic */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-12">
            {['Manifesto', 'Technology', 'Curriculum', 'Pricing'].map((item) => (
              <a 
                key={item} 
                href="#" 
                className="text-sm font-sans text-stone-300 hover:text-white uppercase tracking-[0.2em] transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
              >
                {item}
              </a>
            ))}
          </div>

          {/* 3. Action Button: Sharp Outline, High Precision */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#" className="text-xs font-mono text-stone-500 hover:text-magma-500 uppercase tracking-widest transition-colors">
              Log In
            </a>
            <a 
              href="#pricing" 
              className="group relative px-8 py-3 border border-stone-600 hover:border-white text-white text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:bg-white hover:text-black overflow-hidden"
            >
              <span className="relative z-10">Initialize</span>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="md:hidden text-white">
            <Menu size={24} />
          </div>
          
        </div>
      </nav>

      <main>
        <Hero />
        <RealityCheck />
        <WhoIsThisFor />
        <Roadmap />
        <ProgramDetails />
        <Pricing />
      </main>

      <footer className="bg-bg-900 py-16 border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-magma-600 to-transparent opacity-50"></div>
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 z-10 relative">
          <div className="text-stone-600 text-xs font-mono uppercase tracking-widest">
            © 2024 Ignis AI Lab. Systems Online.
          </div>
          <div className="flex gap-8 text-sm font-mono">
            <a href="#" className="text-stone-600 hover:text-magma-500 transition-colors">X_COM</a>
            <a href="#" className="text-stone-600 hover:text-magma-500 transition-colors">LINKEDIN</a>
            <a href="#" className="text-stone-600 hover:text-magma-500 transition-colors">NEURAL_NET</a>
          </div>
        </div>
      </footer>

      <GeminiAssistant />
    </div>
  );
};

export default App;