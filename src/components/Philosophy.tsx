import { Section } from "@/components/Section";
import { FadeIn } from "@/components/FadeIn";

export function Philosophy() {
  return (
    <Section kicker="Philosophy" title="We believe in trust and craft." align="center">
      <FadeIn className="space-y-4 text-lg text-[var(--text-muted)]">
        <p>We take on only a few clients at a time. The work is personal, precise, and guided by trust.</p>
        <p>You’re involved in every step. We build together.</p>
        <p>We’ve spent over a decade fixing inefficiencies with AI. Now we help others avoid them altogether.</p>
        <p>We’ve spent 11 and 12 years respectively automating our own work. Now, we do it for teams who value the same precision.
          If you’re reading this, you’re not a lead to us.
          You’re a potential collaborator.</p>
      </FadeIn>
    </Section>
  );
}
