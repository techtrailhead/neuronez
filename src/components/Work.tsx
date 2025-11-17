import { Section } from "@/components/Section";
import { FadeIn } from "@/components/FadeIn";

const capabilities = [
  "AI Workflows",
  "RAG Systems",
  "Agentic Automation",
  "Image and Audio Recognition",
];

export function Work() {
  return (
    <Section
      kicker="What we build"
      title="Systems that think with you."
      description="Each project is handcrafted. We do not just ship tools — we build systems that stay with your team."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {capabilities.map((item, index) => (
          <FadeIn
            key={item}
            delay={index * 0.05}
            className="rounded-2xl border border-white/10 bg-[var(--surface-muted)]/70 px-5 py-4 text-[var(--text-primary)]"
          >
            <p className="text-base">{item}</p>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
