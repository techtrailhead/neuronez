import { Section } from "@/components/Section";
import { FadeIn } from "@/components/FadeIn";

export function Craft() {
  return (
    <Section
      kicker="What we're good at"
      title="Our strength lies where engineering meets empathy."
      description="We make sure every use case is understood, documented, categorized, and built with care — not just delivered."
    >
      <FadeIn className="space-y-4 text-lg text-[var(--text-muted)]">
        <p>Tanay codes with business logic in mind. Ankita builds products with clarity and communication.</p>
        <p>We don’t throw prompts at tools. We build systems that think with you.</p>
        <div className="space-y-2 text-base">
          <p></p>
          <br></br>
          <p className="uppercase tracking-[0.3em] text-[var(--accent-secondary)] text-sm">
            How do we approach a problem?
          </p>
          <ul className="space-y-1 text-[var(--text-muted)]">
            <li>• Understand the problem deeply not just what you want, but why it matters.</li>
            <li>• Document and deconstruct it so we can build the right system, not a quick patch.</li>
            <li>• Engineer and refine until the product feels effortless for the user.</li>
          </ul>
        </div>
      </FadeIn>
    </Section>
  );
}
