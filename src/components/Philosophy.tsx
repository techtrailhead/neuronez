import { Section } from "@/components/Section";
import { FadeIn } from "@/components/FadeIn";

export function Philosophy() {
  return (
    <Section kicker="Philosophy" title="Work that stays personal" align="center">
      <FadeIn className="space-y-4 text-lg text-[var(--text-muted)]">
        <p>
          We only work with a few clients at a time. The work is personal, precise, and guided by trust.
        </p>
        <p>
          We’ve both seen how messy technology can get when it’s rushed. neuronez exists to slow down, think deeply, and build things that last.
        </p>
        <p>If you’d like to collaborate, reach out. We’d love to hear what you’re building.</p>
      </FadeIn>
    </Section>
  );
}
