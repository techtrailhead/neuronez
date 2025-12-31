import { Flame, Menu } from "lucide-react";

const notFor = [
  "Not for people exploring casually.",
  "Not for people collecting certificates.",
  "Not for people chasing tools without context.",
];

const toolsFocus = ["New libraries.", "New workflows.", "New frameworks every few weeks."];

const learnTopics = [
  "LLM vs SLM architecture and the trade-offs that decide the stack.",
  "RAG in production: grounding, retrieval, and evaluation.",
  "MCP connectors and skills as system capabilities.",
  "Why vibe-coded apps impress but rarely scale.",
  "When voice agents make sense and when they do not.",
  "Memory layers: why they matter and where they fail.",
  "Orchestration systems like Temporal, LangGraph, and LangChain.",
];

const frameworkShifts = [
  "When your company asks about AI, you answer with clarity, not buzzwords.",
  "When you read research or benchmarks, you see what is claimed and what is missing.",
];

const programCadence = [
  "Classes run every Saturday and Sunday.",
  "Six hours of live sessions per day.",
];

const notThis = ["This is not a certification factory.", "Not a crash course.", "Not a shortcut."];

const stagger = ["delay-1", "delay-2", "delay-3", "delay-4"];

export default function ManifestoPage() {
  return (
    <div className="min-h-screen bg-bg-950 text-stone-200">
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
              { label: "Technology", href: "/aixcelerators#technology" },
              { label: "Curriculum", href: "/aixcelerators#forge" },
              { label: "Pricing", href: "/aixcelerators#pricing" },
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
              href="/aixcelerators#pricing"
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

      <main className="pt-8">
      <section className="relative overflow-hidden border-b border-stone-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(249,115,22,0.28),_transparent_55%)]"></div>
        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-magma-500/20 blur-[120px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(circle_at_top,black_40%,transparent_75%)] pointer-events-none"></div>

          <div className="container mx-auto px-6 md:px-12 py-28 relative z-10">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-start">
              <div className="animate-fade-up">
                <p className="text-xs font-mono uppercase tracking-[0.35em] text-stone-500">
                  neuronez · AIXcelerators
                </p>
                <h1 className="mt-4 text-4xl md:text-6xl font-display tracking-[0.12em] text-white">
                  A program for people who choose understanding over anxiety.
                </h1>

                <div className="mt-6 space-y-4 text-lg text-stone-300 leading-relaxed">
                  <p>
                    Something fundamental has shifted. AI is not waiting for permission
                    or confined to a single team. Expectations are changing quietly.
                  </p>
                  <p>
                    Professionals feel it: skills age faster, and learning AI feels
                    necessary but unclear.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
              <div className="glass-card p-8 relative overflow-hidden animate-fade-up delay-1 ring-1 ring-magma-500/20">
                <div className="absolute top-0 left-0 w-1 h-full bg-magma-500"></div>
                <p className="text-stone-200 text-lg leading-relaxed">
                  neuronez exists to replace uncertainty with clarity.
                </p>
              </div>
              <div className="bg-bg-900 border border-stone-800 p-6 animate-fade-up delay-2">
                <div className="text-xs font-mono uppercase tracking-[0.35em] text-magma-400 mb-3">
                  Signal
                </div>
                  <p className="text-stone-300 leading-relaxed">
                    No playbooks. No precedent. Just decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-bg-900 border-b border-stone-900">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-14">
              <div className="space-y-5 text-lg text-stone-300 leading-relaxed animate-fade-up">
                <h2 className="text-3xl md:text-4xl font-display tracking-[0.08em] text-white">
                  Who this program is for
                </h2>
                <p>This is a paid, serious program for working professionals.</p>
                <p>
                  It is for people who already see the shift and want to be on the right
                  side of it.
                </p>
                <p>You do not need to be a strong coder. You need curiosity and discipline.</p>
              </div>
              <div className="grid gap-4">
                {notFor.map((item, index) => (
                  <div
                    key={item}
                    className={`bg-bg-950 border border-stone-800 p-6 flex items-center gap-4 animate-fade-up ${stagger[index % stagger.length]} hover:border-magma-500/60 transition-colors`}
                  >
                    <div className="w-2 h-2 bg-magma-500 rotate-45"></div>
                    <p className="text-stone-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-bg-950 border-b border-stone-900">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-start">
              <div className="space-y-5 text-lg text-stone-300 leading-relaxed animate-fade-up">
                <h2 className="text-3xl md:text-4xl font-display tracking-[0.08em] text-white">
                  The real problem is not tools. It is confusion.
                </h2>
                <p>
                  Most AI programs focus on tools. That creates the illusion of progress
                  without confidence.
                </p>
                <div className="glass-card p-6 ring-1 ring-magma-500/10">
                  <p className="text-stone-200">
                    Decisions happen when you understand trade-offs. Tools are replaceable.
                  </p>
                </div>
                <p>neuronez is built around this belief.</p>
              </div>
              <div className="space-y-4">
                {toolsFocus.map((item, index) => (
                <div
                  key={item}
                  className={`bg-bg-900 border border-stone-800 p-6 animate-fade-up ${stagger[index % stagger.length]} hover:border-magma-500/60 transition-colors`}
                >
                  <div className="text-xs font-mono uppercase tracking-[0.35em] text-magma-400 mb-2">
                    Tools
                  </div>
                  <p className="text-stone-200 text-lg">{item}</p>
                </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-bg-900 border-b border-stone-900">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-3xl space-y-5 text-lg text-stone-300 leading-relaxed animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-display tracking-[0.08em] text-white">
                What you will actually learn to understand
              </h2>
              <p>
                This program helps you internalise how modern AI systems are built and
                reasoned about, not just how they are used.
              </p>
            </div>
            <div className="mt-8 grid md:grid-cols-2 gap-4">
              {learnTopics.map((item, index) => (
                <div
                  key={item}
                  className={`bg-bg-950 border border-stone-800 p-6 hover:border-magma-500/60 transition-colors animate-fade-up ${stagger[index % stagger.length]} hover:shadow-[0_0_24px_rgba(249,115,22,0.15)]`}
                >
                  <p className="text-stone-300 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 glass-card p-6 animate-fade-up delay-2 ring-1 ring-magma-500/15">
              <p className="text-stone-200 text-lg">
                These topics form a mental model. Once it clicks, you stop hesitating.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-bg-950 border-b border-stone-900">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-5 text-lg text-stone-300 leading-relaxed animate-fade-up">
                <h2 className="text-3xl md:text-4xl font-display tracking-[0.08em] text-white">
                  What changes once the framework settles in
                </h2>
                <p>You stop reacting. You start reasoning.</p>
              </div>
              <div className="grid gap-4 self-start">
                {frameworkShifts.map((item, index) => (
                <div
                  key={item}
                  className={`bg-bg-900 border border-stone-800 p-6 animate-fade-up ${stagger[index % stagger.length]} hover:border-magma-500/60 transition-colors`}
                >
                  <p className="text-stone-200 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-bg-900 border-b border-stone-900">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-5 text-lg text-stone-300 leading-relaxed animate-fade-up">
                <h2 className="text-3xl md:text-4xl font-display tracking-[0.08em] text-white">
                  How this program works
                </h2>
                <p>We are live and immersive by design.</p>
                <div className="grid gap-4">
                  {programCadence.map((item, index) => (
                    <div
                      key={item}
                      className={`bg-bg-950 border border-stone-800 p-5 animate-fade-up ${stagger[index % stagger.length]} hover:border-magma-500/60 transition-colors`}
                    >
                      <p className="text-stone-200">{item}</p>
                    </div>
                  ))}
                </div>
                <p>
                  Real understanding requires uninterrupted thinking time, especially for
                  working professionals.
                </p>
              </div>
              <div className="space-y-6 self-start lg:pt-8">
                <div className="glass-card p-6 animate-fade-up delay-1 ring-1 ring-magma-500/10">
                  <div className="text-xs font-mono uppercase tracking-[0.35em] text-magma-400 mb-3">
                    Community
                  </div>
                  <p className="text-stone-200 leading-relaxed">
                    A private Discord for study lab participants to share insights, ask
                    questions, and get projects reviewed.
                  </p>
                </div>
                <div className="bg-bg-950 border border-stone-800 p-6 animate-fade-up delay-2 hover:border-magma-500/60 transition-colors">
                  <div className="text-xs font-mono uppercase tracking-[0.35em] text-magma-400 mb-3">
                    Mentorship
                  </div>
                  <p className="text-stone-200 leading-relaxed">
                    Multiple mentors, different perspectives, no single right way to think
                    about systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-bg-950 border-b border-stone-900">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid lg:grid-cols-[1fr_1fr] gap-12 items-start">
              <div className="space-y-5 text-lg text-stone-300 leading-relaxed animate-fade-up">
                <h2 className="text-3xl md:text-4xl font-display tracking-[0.08em] text-white">
                  What this program is not
                </h2>
                <p>If your goal is to finish something, this will frustrate you.</p>
                <p>Build for relevance, not a certificate.</p>
              </div>
              <div className="grid gap-4">
                {notThis.map((item, index) => (
                <div
                  key={item}
                  className={`bg-bg-900 border border-stone-800 p-6 animate-fade-up ${stagger[index % stagger.length]} hover:border-magma-500/60 transition-colors`}
                >
                  <p className="text-stone-200">{item}</p>
                </div>
              ))}
            </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-bg-900">
          <div className="container mx-auto px-6 md:px-12">
            <div className="glass-card p-10 relative overflow-hidden animate-fade-up ring-1 ring-magma-500/10">
              <div className="absolute top-0 right-0 w-40 h-40 bg-magma-500/15 blur-3xl rounded-full"></div>
              <h2 className="text-3xl md:text-4xl font-display tracking-[0.08em] text-white">
                The belief behind neuronez
              </h2>
              <div className="mt-5 space-y-4 text-lg text-stone-200 leading-relaxed">
                <p>AI does not eliminate people. It eliminates people who remain static.</p>
                <p>
                  Professionals who understand systems and trade-offs will always matter,
                  no matter how fast models evolve.
                </p>
                <p>Do not aim to keep up. Aim to understand.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-bg-900 py-16 border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-magma-600 to-transparent opacity-50"></div>
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 z-10 relative">
          <div className="text-stone-600 text-xs font-mono uppercase tracking-widest">
            © 2026 Neuronez AIXcelerators. Systems Online.
          </div>
          <div className="flex gap-8 text-sm font-mono">
            <a href="#" className="text-stone-600 hover:text-magma-500 transition-colors">
              X
            </a>
            <a href="#" className="text-stone-600 hover:text-magma-500 transition-colors">
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
    </div>
  );
}
