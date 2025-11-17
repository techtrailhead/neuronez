import { Section } from "@/components/Section";
import { FadeIn } from "@/components/FadeIn";

const stages = [
  {
    title: "Discovery",
    text: "Every collaboration starts with a conversation. We listen, understand the constraints, and trace the process end-to-end.",
  },
  {
    title: "Experimentation",
    text: "We build small before we build big — lean pilots that reveal signal, not vanity demos.",
  },
  {
    title: "Deployment",
    text: "Workflows, agents, or services are released with context, documentation, and steady safeguards.",
  },
  {
    title: "Optimization",
    text: "Systems are tuned with real telemetry, iterated, and kept useful over time.",
  },
];

export function Process() {
  return (
    <Section
      kicker="How we work"
      title="Discovery → Experimentation → Deployment → Optimization"
      description="Every collaboration starts with a conversation. We listen, explore the process, and build small before we build big."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {stages.map((stage, index) => (
          <FadeIn
            key={stage.title}
            delay={index * 0.05}
            className="rounded-3xl border border-white/10 bg-[var(--surface-muted)]/80 p-6"
          >
            <h3 className="text-lg font-semibold text-[var(--text-primary)]">
              {stage.title}
            </h3>
            <p className="mt-3 text-sm text-[var(--text-muted)]">{stage.text}</p>
          </FadeIn>
        ))}
      </div>
      <FadeIn className="mt-8 text-base text-[var(--text-muted)]">
        Every workflow or agent is designed with context, and improved through iteration.
      </FadeIn>
    </Section>
  );
}
