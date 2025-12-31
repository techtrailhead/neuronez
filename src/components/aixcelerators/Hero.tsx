import React from 'react';
import { ArrowRight, Flame, Zap } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToCurriculum = () => {
    document.getElementById('curriculum')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradient Base */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-bg-900 via-black to-black z-0"></div>
      
      {/* Fire / Heat Haze Animation */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        {/* Intense Bottom Glow (The Core) */}
        <div className="absolute bottom-[-100px] left-0 right-0 h-[400px] bg-gradient-to-t from-magma-600/40 via-magma-500/10 to-transparent blur-[60px] animate-flame-pulse"></div>
        
        {/* Floating Embers */}
        {[...Array(40)].map((_, i) => {
            const size = Math.random() * 6 + 2;
            const duration = Math.random() * 3 + 4; // 4s to 7s
            const delay = Math.random() * 5;
            const left = Math.random() * 100;
            return (
              <div 
                key={i}
                className="absolute rounded-full bg-gradient-to-t from-magma-500 to-ember-500 blur-[1px] animate-rise"
                style={{
                  left: `${left}%`,
                  bottom: '-20px',
                  width: `${size}px`,
                  height: `${size}px`,
                  animationDelay: `${delay}s`,
                  animationDuration: `${duration}s`,
                  opacity: 0
                }}
              />
            );
        })}
      </div>

      <div className="container mx-auto px-6 z-10 relative text-center">
        
        {/* Alert Tag */}
        <div className="inline-flex items-center gap-3 px-4 py-2 border-l-2 border-magma-500 bg-bg-900/80 backdrop-blur-md mb-10 shadow-[0_0_30px_rgba(249,115,22,0.15)] animate-fade-in-up">
          <Flame size={14} className="text-magma-500 animate-pulse fill-magma-500" />
          <span className="text-xs font-mono text-magma-400 uppercase tracking-[0.2em]">System Critical: Skill Gap Detecting</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl uppercase mb-8 tracking-wider font-display text-white leading-[0.9]">
          <span className="block text-stone-600 opacity-50 text-4xl md:text-6xl mb-2 tracking-tight">Don't Just Use</span>
          <span className="relative inline-block">
            <span className="absolute -inset-2 blur-2xl bg-magma-600/20 rounded-full"></span>
            <span className="relative text-transparent bg-clip-text bg-gradient-to-b from-white via-stone-200 to-stone-500 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">FORGE</span>
          </span>
          <span className="block text-magma-500 text-glow-fire mt-2 mix-blend-overlay text-7xl md:text-9xl">INTELLIGENCE</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-stone-400 max-w-3xl mx-auto mb-12 leading-relaxed font-light font-sans border-l border-magma-900 pl-6 text-left md:text-center md:border-l-0 md:pl-0">
          The interface era is ending. The <span className="text-magma-400 font-medium border-b border-magma-500/30">Agentic Era</span> has begun.
          Stop typing prompts. Start building <span className="text-white font-bold">autonomous systems</span> that do the work for you.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <button 
            onClick={scrollToCurriculum}
            className="group relative px-10 py-5 bg-magma-600 text-white font-display uppercase tracking-widest text-lg hover:bg-magma-500 transition-all hover:shadow-[0_0_50px_rgba(249,115,22,0.5)] skew-x-[-10deg] overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1s_infinite]"></div>
            <div className="skew-x-[10deg] flex items-center gap-3 relative z-10">
              Ignite Protocol <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
          
          <a
            href="manifesto"
            className="px-10 py-5 text-stone-300 font-display uppercase tracking-widest text-lg border border-stone-700 hover:border-magma-500 hover:text-white skew-x-[-10deg] hover:bg-magma-500/5 transition-all"
          >
             <div className="skew-x-[10deg]">View Manifesto</div>
          </a>
        </div>

        {/* Tech Stack Strip */}
        <div className="mt-32 border-t border-white/5 bg-black/40 backdrop-blur-sm py-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-bg-950 via-transparent to-bg-950 z-10 pointer-events-none"></div>
          <div className="flex justify-center gap-12 md:gap-24 flex-wrap opacity-50 grayscale hover:grayscale-0 transition-all duration-700 relative z-0">
            {['Python', 'LangChain', 'Torch', 'Gemini', 'Pinecone', 'LlamaIndex'].map((tech) => (
              <span key={tech} className="font-display text-xl text-stone-400 tracking-widest uppercase hover:text-magma-500 cursor-default transition-colors hover:scale-110 transform duration-300">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
