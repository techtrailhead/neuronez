import { Section } from "@/components/Section";
import { FadeIn } from "@/components/FadeIn";

export function Closing() {
  return (
    <Section kicker="Closing" title="We don’t build with AI. We build with intent." align="center">
      <FadeIn className="space-y-4 text-lg text-[var(--text-muted)]">
        <p>
          If we reach out to you, it’s because we believe your work deserves precision, not noise. If you reach out to us, we’ll start with a conversation and no forms, no funnels.
        </p>
        <div className="flex flex-col items-center gap-4">
          <a href="mailto:hello@neuronez.ai" className="text-[var(--accent-primary)]">
            founder@neuronez.com
          </a>
          <a
            href="/contact"
            className="inline-flex items-center rounded-full border border-[var(--accent-primary)] px-6 py-2 text-xs uppercase tracking-[0.3em] text-[var(--accent-primary)] transition hover:shadow-[0_0_25px_rgba(108,250,199,0.3)]"
          >
            Contact
          </a>
        </div>
      </FadeIn>
    </Section>
  );
}
