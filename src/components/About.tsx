import Link from "next/link";
import { Section } from "@/components/Section";
import { FadeIn } from "@/components/FadeIn";

export function About() {
  return (
    <Section
      kicker="Who we are"
      title="We are a team of 2 members."
      description="Two builders who’ve spent over a decade across engineering, product, and marketing."
    >
      <FadeIn className="space-y-4 text-lg text-[var(--text-muted)]">
        <p>
          One brings in the engineering efficiency at scale. 
          The other brings in the product and strategy momentum. 
          Together they have led programs and partnerships at Microsoft, Google, Twilio, and Invact shaping how products reach and serve people.
        </p>
        <p>
          We’ve built apps, automated systems, and agentic workflows that solve real, messy problems. neuronez is the lab where all that experience turns into something new.
        </p>
        <div className="pt-4">
          <Link
            href="/team"
            className="inline-flex items-center rounded-full border border-[var(--accent-secondary)] px-6 py-2 text-xs uppercase tracking-[0.3em] text-[var(--accent-secondary)] transition hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] hover:shadow-[0_0_25px_rgba(108,250,199,0.3)]"
          >
            Meet the team
          </Link>
        </div>
      </FadeIn>
    </Section>
  );
}
