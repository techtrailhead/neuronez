import React, { useState } from 'react';
import { Terminal, Database, Bot, Cpu, Brain, ChevronRight, Flame } from 'lucide-react';
import { WeekModule } from '../types';

const curriculum: WeekModule[] = [
  {
    week: 1,
    title: "System Foundation",
    description: "Understand the raw power. Setup local inference engines, explore vector spaces, and build your first multi-modal neural interface.",
    topics: ["Transformer Anatomy", "Vector Embeddings", "Local LLM Inference", "Prompt Engineering v2.0"],
    project: "Neural Chat Interface"
  },
  {
    week: 2,
    title: "RAG Architectures",
    description: "Memory is key. Build production-grade Retrieval Augmented Generation systems that eliminate hallucinations and ground AI in truth.",
    topics: ["Vector Databases", "Hybrid Search Algorithms", "Re-ranking Models", "Unstructured Data Parsing"],
    project: "Corporate Knowledge Brain"
  },
  {
    week: 3,
    title: "Agentic Swarms",
    description: "Give it hands. Implement the Model Context Protocol (MCP) to let agents browse the web, write code, and execute tools.",
    topics: ["ReAct Pattern", "Function Calling", "MCP Protocol", "Multi-Agent Orchestration"],
    project: "Autonomous Researcher"
  },
  {
    week: 4,
    title: "Fine-Tuning",
    description: "Total control. Customize models with LoRA/QLoRA to behave exactly how you need them to on your own data.",
    topics: ["Dataset Curation", "PEFT / LoRA", "Evaluation Frameworks", "Model Quantization"],
    project: "Domain-Expert Model"
  },
  {
    week: 5,
    title: "Memory Systems",
    description: "Long-term recall. Engineer persistent memory layers that evolve with usage and keep agents aligned over time.",
    topics: ["Memory Architectures", "Temporal Indexing", "Summarization Pipelines", "Context Compaction"],
    project: "Adaptive Memory Core"
  }
];

export const Roadmap: React.FC = () => {
  const [activeWeek, setActiveWeek] = useState<number>(1);

  return (
    <section id="forge" className="py-32 bg-bg-900 relative overflow-hidden">
      {/* Molten Vein Background Line */}
      <div className="absolute left-[50%] md:left-[30%] top-0 bottom-0 w-[2px] bg-stone-800 z-0 hidden md:block"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20 md:pl-[30%]">
           <h2 className="text-5xl md:text-7xl font-display uppercase text-white mb-4">The <span className="text-magma-500">Forge</span></h2>
           <p className="text-stone-400 font-mono uppercase tracking-widest">6 Weeks. High Intensity. Pure Signal.</p>
        </div>

        <div className="relative grid md:grid-cols-[1fr_2fr] gap-16">
          
          {/* Navigation (Left Side) */}
          <div className="space-y-2 md:text-right">
            {curriculum.map((module) => (
              <div key={module.week} className="relative">
                <button 
                  onClick={() => setActiveWeek(module.week)}
                  className={`group w-full p-6 border-r-0 md:border-r-4 transition-all duration-300 relative overflow-hidden text-right ${
                    activeWeek === module.week 
                    ? 'border-magma-500 bg-gradient-to-l from-magma-500/10 to-transparent' 
                    : 'border-stone-800 hover:border-stone-600'
                  }`}
                >
                  <div className="relative z-10 flex md:flex-col items-end gap-1">
                    <span className={`font-mono text-xs uppercase tracking-widest ${activeWeek === module.week ? 'text-magma-500' : 'text-stone-600'}`}>
                      Phase 0{module.week}
                    </span>
                    <h3 className={`font-display uppercase text-xl ${activeWeek === module.week ? 'text-white' : 'text-stone-500 group-hover:text-stone-300'}`}>
                      {module.title}
                    </h3>
                  </div>
                </button>
                
                {/* Glowing Node on Line */}
                <div className={`hidden md:block absolute top-1/2 -right-[37px] w-4 h-4 rounded-full border-4 transition-all duration-300 z-20 bg-bg-900 ${activeWeek === module.week ? 'border-magma-500 shadow-[0_0_20px_#f97316] scale-125' : 'border-stone-800'}`}></div>
              </div>
            ))}
          </div>

          {/* Content Display (Right Side) */}
          <div className="relative min-h-[450px]">
            {curriculum.map((module) => (
              <div 
                key={module.week}
                className={`transition-all duration-500 absolute inset-0 ${
                  activeWeek === module.week 
                    ? 'opacity-100 translate-y-0 pointer-events-auto' 
                    : 'opacity-0 translate-y-10 pointer-events-none'
                }`}
              >
                <div className="bg-bg-800 border border-stone-700 p-10 relative overflow-hidden">
                  {/* Magma Corner Effect */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-magma-500/10 blur-3xl rounded-full"></div>
                  <div className="absolute top-0 left-0 w-1 h-full bg-magma-500"></div>

                  <div className="flex items-center gap-6 mb-8 relative z-10">
                     <div className="p-4 bg-black border border-stone-800 text-magma-500">
                       {module.week === 1 && <Terminal size={32} />}
                       {module.week === 2 && <Database size={32} />}
                       {module.week === 3 && <Bot size={32} />}
                       {module.week === 4 && <Cpu size={32} />}
                       {module.week === 5 && <Brain size={32} />}
                     </div>
                     <div>
                        <div className="font-mono text-magma-500 text-xs uppercase tracking-widest mb-1">Objective</div>
                        <h3 className="text-4xl font-display uppercase text-white">{module.title}</h3>
                     </div>
                  </div>
                  
                  <p className="text-xl text-stone-400 mb-10 leading-relaxed font-light border-b border-stone-700 pb-10">
                    {module.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div>
                      <h4 className="text-xs font-mono text-white mb-4 uppercase tracking-widest flex items-center gap-2">
                        <div className="w-1 h-1 bg-magma-500"></div> Core Concepts
                      </h4>
                      <ul className="space-y-3">
                        {module.topics.map((t, i) => (
                          <li key={i} className="flex items-center gap-3 text-base text-stone-400">
                            <ChevronRight size={14} className="text-stone-600" />
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-black/30 p-6 border border-stone-800">
                      <h4 className="text-xs font-mono text-magma-500 mb-3 uppercase tracking-widest flex items-center gap-2">
                         <Flame size={12} /> Build Output
                      </h4>
                      <div className="text-white font-display text-xl">
                         {module.project}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
