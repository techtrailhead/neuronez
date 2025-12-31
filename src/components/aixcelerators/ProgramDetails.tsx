import React from 'react';
import { Radio, Cpu, Users, Database, ShieldCheck, Zap, Globe, Code, Lock } from 'lucide-react';

const features = [
  {
    title: "4-Week Intensive",
    desc: "8 live synchronization sessions (90min). Direct knowledge transfer from senior AI architects. High bandwidth learning.",
    icon: Radio,
    stat: "SYNC_MODE"
  },
  {
    title: "Applied Building",
    desc: "We don't just audit code; we ship. You will architect and deploy 4 production-grade RAG & Agent systems.",
    icon: Cpu,
    stat: "BUILD_ONLY"
  },
  {
    title: "The Collective",
    desc: "Join a dedicated frequency. A lifetime network of high-signal builders, potential co-founders, and hires.",
    icon: Users,
    stat: "NETWORK"
  },
  {
    title: "Neural Cache",
    desc: "Full unrestricted access to source code, system blueprints, prompt libraries, and recording archives.",
    icon: Database,
    stat: "UNLIMITED"
  },
  {
    title: "Direct Uplink",
    desc: "Weekly debugging office hours. Bring your specific edge-cases and architecture constraints for review.",
    icon: Zap,
    stat: "SUPPORT"
  },
  {
    title: "Proof of Work",
    desc: "Receive a cryptographically verifyable certificate upon shipping your final autonomous agent capstone.",
    icon: ShieldCheck,
    stat: "VERIFIED"
  }
];

export const ProgramDetails: React.FC = () => {
  return (
    <section className="py-32 bg-black relative border-t border-white/10 overflow-hidden">
      {/* Visionary Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(circle_at_center,black_60%,transparent_100%)] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header - Minimalist */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-display uppercase text-white mb-6 leading-none">
              System <span className="text-stone-600">Specifications</span>
            </h2>
            <p className="text-stone-400 text-lg font-light leading-relaxed">
              The Neuronez AIXcelerators is designed for maximum information density. 
              We strip away the noise and focus purely on signal.
            </p>
          </div>
          
          {/* Decorative Data Block */}
          <div className="hidden md:block text-right font-mono text-xs text-stone-600 space-y-1">
             <div>SYS_STATUS: <span className="text-magma-500">ONLINE</span></div>
             <div>BANDWIDTH: <span className="text-white">HIGH</span></div>
             <div>LATENCY: <span className="text-white">LOW</span></div>
          </div>
        </div>

        {/* Feature Grid - Sleek Glass Panels */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-800/50 border border-stone-800">
          {features.map((feature, idx) => (
            <div 
              key={idx}
              className="group relative bg-bg-950 p-10 hover:bg-stone-900/50 transition-colors duration-500"
            >
              {/* Active Corner Marker */}
              <div className="absolute top-0 right-0 w-0 h-0 border-t-[30px] border-r-[30px] border-t-transparent border-r-transparent group-hover:border-r-magma-500 transition-all duration-300 opacity-0 group-hover:opacity-100"></div>

              <div className="flex justify-between items-start mb-8">
                <feature.icon size={28} strokeWidth={1.5} className="text-stone-500 group-hover:text-magma-500 transition-colors duration-300" />
                <span className="font-mono text-[10px] text-stone-600 group-hover:text-magma-500 uppercase tracking-widest transition-colors border border-stone-800 px-2 py-1 rounded-sm">
                  {feature.stat}
                </span>
              </div>

              <h3 className="text-xl font-display uppercase text-stone-200 mb-4 group-hover:text-white tracking-wide">
                {feature.title}
              </h3>
              
              <p className="text-stone-500 text-sm leading-relaxed font-light group-hover:text-stone-400 transition-colors">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
