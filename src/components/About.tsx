import { Section } from "@/components/Section";
import { FadeIn } from "@/components/FadeIn";

export function About() {
  return (
    <Section
      kicker="About us"
      title="We are Tanay and Ankita."
      description="Two builders who spent over a decade working across engineering, product, and marketing."
    >
      <FadeIn className="space-y-4 text-lg text-[var(--text-muted)]">
        <p>
          Tanay has built systems at Microsoft that touch millions. Ankita has led programs and partnerships at Google, Twilio, and Invact. Together, we understand how products grow, how people use them, and where AI can help.
        </p>
        <p>neuronez is our private lab — a place where we choose ideas worth building.</p>
      </FadeIn>
    </Section>
  );
}
