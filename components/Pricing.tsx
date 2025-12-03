import React from 'react';
import { Check, Zap, Flame } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <section className="py-32 bg-bg-950 relative overflow-hidden">
      {/* Lava Glow Background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-magma-600/20 blur-[120px] rounded-full z-0 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 z-10 relative">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-display uppercase text-white mb-6">Initialize <span className="text-stone-600">Sequence</span></h2>
          <p className="text-stone-400 font-light text-xl max-w-2xl mx-auto">
            Select your level of engagement.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-8 max-w-5xl mx-auto">
          
          {/* Standard Tier */}
          <div className="flex-1 bg-stone-900 border border-stone-800 p-10 flex flex-col hover:border-stone-600 transition-all duration-300 group">
            <div className="mb-10">
              <h3 className="text-sm font-mono text-stone-500 uppercase tracking-widest mb-4 group-hover:text-white transition-colors">Observer Class</h3>
              <div className="text-5xl font-display text-white">$299</div>
              <p className="text-sm text-stone-500 mt-4 font-mono">Async Access / Self-Paced</p>
            </div>
            
            <ul className="space-y-6 flex-1 mb-12">
              {['Video Archives', 'Code Repositories', 'Community Read-Only', 'Lifetime Updates'].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-stone-400 text-sm font-medium">
                  <div className="w-1.5 h-1.5 bg-stone-600"></div>
                  {item}
                </li>
              ))}
            </ul>
            
            <button className="w-full py-5 bg-transparent border border-stone-700 text-stone-300 font-display uppercase tracking-widest hover:bg-stone-800 hover:text-white transition-colors">
              Access Data
            </button>
          </div>

          {/* Premium Tier */}
          <div className="flex-1 relative group">
            <div className="absolute inset-0 bg-gradient-to-b from-magma-500 to-ember-600 blur-md opacity-40 group-hover:opacity-70 transition-opacity duration-500"></div>
            <div className="relative h-full bg-black border border-magma-500/50 p-10 flex flex-col">
              
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-magma-500 text-black text-xs font-bold font-mono px-4 py-1 uppercase tracking-widest">
                High Intensity
              </div>
              
              <div className="mb-10">
                <h3 className="text-sm font-mono text-magma-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                   Architect Class <Flame size={14} className="fill-magma-500" />
                </h3>
                <div className="text-6xl font-display text-white mb-2">$499</div>
                <p className="text-sm text-stone-500 font-mono"><span className="line-through decoration-magma-500/50">$799</span> <span className="text-magma-400 ml-2">EARLY BIRD ACTIVE</span></p>
              </div>
              
              <ul className="space-y-6 flex-1 mb-12">
                {['Everything in Observer', '8 Live Sessions', 'Direct Feedback Loops', 'Production Certification', '1-on-1 Strategy Call'].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-white text-sm font-bold tracking-wide">
                    <div className="w-1.5 h-1.5 bg-magma-500 shadow-[0_0_10px_#f97316]"></div>
                    {item}
                  </li>
                ))}
              </ul>
              
              <button className="w-full py-5 bg-magma-600 text-white font-display uppercase tracking-widest hover:bg-magma-500 transition-all shadow-[0_0_20px_rgba(234,88,12,0.3)] hover:shadow-[0_0_40px_rgba(234,88,12,0.6)]">
                Join The Forge
              </button>
              
              <div className="mt-6 text-center">
                 <div className="inline-block h-1 w-24 bg-stone-800 overflow-hidden rounded-full">
                   <div className="h-full w-[70%] bg-magma-500 animate-pulse"></div>
                 </div>
                 <div className="text-[10px] font-mono text-stone-500 mt-2 uppercase tracking-widest">Capacity 70% Full</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};