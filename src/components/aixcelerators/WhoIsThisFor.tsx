import React, { useRef, useState } from 'react';
import { TargetPersona } from '@/types/aixcelerators';

const personas: TargetPersona[] = [
  { role: 'Developers', icon: 'code', painPoint: 'Copilot writes better loops.', gain: 'Become a System Architect.' },
  { role: 'Product Managers', icon: 'briefcase', painPoint: 'Specs are now automated.', gain: 'Manage Agent Swarms.' },
  { role: 'Analysts', icon: 'chart', painPoint: 'SQL is dead language.', gain: 'Build Prediction Engines.' },
  { role: 'Founders', icon: 'brain', painPoint: 'Too slow to market.', gain: 'Deploy an AI Workforce.' },
  { role: 'Marketers', icon: 'megaphone', painPoint: 'Content is commodity.', gain: 'Automate Campaigns.' },
  { role: 'Operations', icon: 'factory', painPoint: 'Human bottlenecks.', gain: 'Scale Autonomously.' },
];

// --- Abstract Tech Glyphs ---
const TechGlyph = ({ type }: { type: string }) => {
  const commonClasses = "w-12 h-12 text-stone-700 group-hover:text-magma-500 transition-all duration-500";
  
  switch (type) {
    case 'code': // Developers -> Schematic
      return (
        <svg viewBox="0 0 24 24" fill="none" className={commonClasses}>
          <path d="M7 8L3 12L7 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M17 8L21 12L17 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 4L10 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="12" r="1" className="fill-current animate-pulse" />
          <rect x="2" y="2" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="opacity-20"/>
        </svg>
      );
    case 'briefcase': // PMs -> Network Node
      return (
        <svg viewBox="0 0 24 24" fill="none" className={commonClasses}>
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M12 9V4" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M12 20V15" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M9 12H4" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M20 12H15" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="4" cy="12" r="1.5" className="fill-current opacity-50"/>
          <circle cx="20" cy="12" r="1.5" className="fill-current opacity-50"/>
          <circle cx="12" cy="4" r="1.5" className="fill-current opacity-50"/>
        </svg>
      );
    case 'chart': // Analysts -> Data Structure
      return (
        <svg viewBox="0 0 24 24" fill="none" className={commonClasses}>
          <path d="M3 21H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M3 21V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M7 14L12 9L16 13L21 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 6V21" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" className="opacity-30"/>
          <path d="M12 9V21" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" className="opacity-30"/>
        </svg>
      );
    case 'brain': // Founders -> Core Processor
       return (
        <svg viewBox="0 0 24 24" fill="none" className={commonClasses}>
          <path d="M12 2V22" stroke="currentColor" strokeWidth="1.5" className="opacity-20"/>
          <path d="M2 12H22" stroke="currentColor" strokeWidth="1.5" className="opacity-20"/>
          <path d="M12 7L17 12L12 17L7 12L12 7Z" stroke="currentColor" strokeWidth="1.5"/>
          <rect x="11" y="11" width="2" height="2" className="fill-current"/>
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" className="group-hover:animate-[spin_12s_linear_infinite] origin-center"/>
        </svg>
      );
    case 'megaphone': // Marketers -> Broadcast Signal
      return (
        <svg viewBox="0 0 24 24" fill="none" className={commonClasses}>
           <path d="M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" stroke="currentColor" strokeWidth="1.5" className="fill-current opacity-20"/>
           <path d="M12 12m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" />
           <path d="M12 12m-10 0a10 10 0 1 0 20 0a10 10 0 1 0 -20 0" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.2" />
           <path d="M22 2L2 22" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" className="opacity-10" />
           <path d="M2 2L22 22" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" className="opacity-10" />
        </svg>
      );
    case 'factory': // Ops -> Mechanism
       return (
        <svg viewBox="0 0 24 24" fill="none" className={commonClasses}>
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 2"/>
          <path d="M12 6V18" stroke="currentColor" strokeWidth="1.5" className="opacity-50"/>
          <path d="M6 12H18" stroke="currentColor" strokeWidth="1.5" className="opacity-50"/>
          <rect x="10" y="10" width="4" height="4" className="fill-current animate-spin" style={{ animationDuration: '3s' }} />
          <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="0.5" />
        </svg>
       );
    default:
      return null;
  }
}

interface SpotlightCardProps {
  persona: TargetPersona;
  index: number;
}

// --- Spotlight Card Component ---
const SpotlightCard: React.FC<SpotlightCardProps> = ({ persona, index }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      className="relative rounded-xl border border-stone-900 bg-stone-950 overflow-hidden group"
    >
      {/* Spotlight Effect Layer */}
      <div
        className="pointer-events-none absolute -inset-px transition duration-300 opacity-0 group-hover:opacity-100 z-0"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(249, 115, 22, 0.08), transparent 40%)`
        }}
      />
      
      {/* Card Content */}
      <div className="relative h-full p-8 flex flex-col z-10 transition-colors duration-500">
        <div className="flex justify-between items-start mb-8">
          <TechGlyph type={persona.icon} />
          <span className="text-xs font-mono text-stone-800 group-hover:text-magma-500/50 uppercase tracking-widest transition-colors">
            Sector_0{index + 1}
          </span>
        </div>

        <h3 className="text-2xl font-display uppercase text-stone-300 mb-2 group-hover:text-white transition-colors tracking-wide">
          {persona.role}
        </h3>
        
        <div className="mt-auto pt-8 border-t border-stone-900 group-hover:border-magma-900/30 transition-colors space-y-5">
           <div className="grid grid-cols-[min-content_1fr] gap-4 text-sm items-baseline">
              <span className="text-ember-600/70 font-mono text-[10px] uppercase tracking-wider pt-0.5 writing-mode-vertical transform -rotate-180 hidden">LOST</span>
              <div className="flex flex-col">
                <span className="text-stone-600 text-xs font-mono mb-1">CURRENT_STATE</span>
                <span className="text-stone-500 leading-tight">{persona.painPoint}</span>
              </div>
           </div>
           <div className="grid grid-cols-[min-content_1fr] gap-4 text-sm items-baseline">
              <div className="flex flex-col">
                <span className="text-magma-500 text-xs font-mono mb-1">TARGET_STATE</span>
                <span className="text-stone-300 font-medium leading-tight">{persona.gain}</span>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}

export const WhoIsThisFor: React.FC = () => {
  return (
    <section className="py-32 bg-black relative">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-10 border-b border-stone-900 pb-10">
          <div>
             <h2 className="text-5xl md:text-7xl font-display uppercase text-white mb-6">
              Universal <span className="text-magma-500">Applicability</span>
            </h2>
            <p className="text-stone-500 max-w-xl text-xl">
              Intelligence is the new electricity. It powers everything.
            </p>
          </div>
          <div className="hidden md:block pb-4">
             <div className="flex gap-2">
               {[1,2,3].map(i => <div key={i} className={`w-3 h-12 bg-stone-900 ${i===3 ? 'bg-magma-900' : ''}`}></div>)}
             </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {personas.map((p, idx) => (
            <SpotlightCard key={idx} persona={p} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};
