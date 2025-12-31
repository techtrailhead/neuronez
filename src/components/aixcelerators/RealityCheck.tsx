import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { year: '2023', traditional: 100, aiNative: 10 },
  { year: '2024', traditional: 85, aiNative: 35 },
  { year: '2025', traditional: 60, aiNative: 80 },
  { year: '2026', traditional: 35, aiNative: 150 },
  { year: '2027', traditional: 15, aiNative: 280 },
];

export const RealityCheck: React.FC = () => {
  return (
    <section className="py-32 bg-bg-950 relative border-t border-stone-900">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          
          <div className="order-2 md:order-1">
            <h2 className="text-5xl md:text-6xl font-display uppercase text-white mb-8 leading-none">
              The Great <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-magma-500 to-ember-600">Extinction</span>
            </h2>
            <p className="text-stone-400 mb-8 text-xl leading-relaxed font-light">
              The &quot;AI User&quot; is a commodity. The &quot;AI Architect&quot; is a scarce asset.
              The gap between consuming intelligence and engineering it is widening exponentially.
            </p>
            
            <div className="p-8 bg-bg-900 border border-stone-800 relative mb-10 overflow-hidden group hover:border-magma-600/50 transition-colors">
              <div className="absolute top-0 left-0 w-1 h-full bg-magma-500"></div>
              <p className="text-stone-300 text-lg font-sans italic relative z-10">
                &quot;It is not AI that will replace you. It is the engineer who builds the AI that replaces your entire department.&quot;
              </p>
              <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-magma-500/10 rounded-full blur-2xl group-hover:bg-magma-500/20 transition-colors"></div>
            </div>
            
            <div className="space-y-6 font-mono text-sm">
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-stone-700 rotate-45"></div>
                <span className="text-stone-500 uppercase tracking-wider line-through decoration-magma-500/50">Legacy Workflow</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-magma-500 rotate-45 animate-pulse"></div>
                <span className="text-magma-400 uppercase tracking-wider font-bold">Autonomous Agent Workflow</span>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 h-[500px] w-full bg-bg-900/30 border border-stone-800 p-8 relative shadow-2xl">
             {/* Decorative HUD elements */}
            <div className="absolute top-4 right-4 text-[10px] font-mono text-magma-500/50">LIVE_TELEMETRY :: <span className="text-magma-500">ACTIVE</span></div>
            <div className="absolute top-4 left-4 w-2 h-2 bg-magma-500"></div>
            <div className="absolute bottom-4 right-4 w-2 h-2 bg-stone-700"></div>
            
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ea580c05_1px,transparent_1px),linear-gradient(to_bottom,#ea580c05_1px,transparent_1px)] bg-[size:20px_20px]"></div>

            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorAi" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ea580c" stopOpacity={0.5}/>
                    <stop offset="95%" stopColor="#ea580c" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorTrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#57534e" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#57534e" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#292524" vertical={false} />
                <XAxis dataKey="year" stroke="#57534e" tick={{fill: '#78716c', fontSize: 12, fontFamily: 'JetBrains Mono'}} axisLine={false} tickLine={false} />
                <YAxis hide />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0c0a09', borderColor: '#ea580c', color: '#fff' }}
                  itemStyle={{ color: '#fb923c', fontFamily: 'JetBrains Mono' }}
                  cursor={{ stroke: '#ea580c', strokeWidth: 1, strokeDasharray: '4 4' }}
                />
                <Area type="monotone" dataKey="aiNative" stroke="#f97316" strokeWidth={4} fillOpacity={1} fill="url(#colorAi)" />
                <Area type="monotone" dataKey="traditional" stroke="#57534e" strokeWidth={2} strokeDasharray="5 5" fill="url(#colorTrad)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

        </div>
      </div>
    </section>
  );
};
