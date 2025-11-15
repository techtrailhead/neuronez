import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { FadeIn } from "@/components/FadeIn";
import { buildFocus, processSteps, whyNeuronez } from "@/lib/data";

export default function Home() {
  return (
    <main>
      <Hero />

      <Section
        kicker="About the Lab"
        title="A private lab mindset for applied AI."
        description="Short, evidence-backed engagements for operators who want less noise and more signal."
      >
        <FadeIn className="space-y-4 text-base text-slate-300">
          <p>
            We plug into your systems quietly, map the decision points, and run lean experiments grounded in the telemetry you already trust.
          </p>
          <p>
            Every sprint remains instrumentation-first with eval harnesses, monitors, and retraining plans in place before anything scales.
          </p>
        </FadeIn>
      </Section>

      <Section
        kicker="Our Process"
        title="A stepwise program from idea to optimization."
        description="Five measured steps from first signal to ongoing optimization."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((step, index) => (
            <FadeIn key={step.title} delay={index * 0.05}>
              <Card
                eyebrow={`Step ${String(index + 1).padStart(2, "0")}`}
                title={step.title}
                description={step.detail}
              />
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section
        kicker="What We Build"
        title="Systems shaped for real-world constraints."
        description="Automation, intelligence, and data systems tuned to the way your org actually works."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {buildFocus.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.05}>
              <Card title={item.title} description={item.description} />
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section
        kicker="Why Choose neuronez"
        title="A lab mindset over marketing."
        description="Low-noise, high-output engagements led entirely by builders."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {whyNeuronez.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.05}>
              <Card title={item.title} description={item.description} />
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section
        id="collaborate"
        kicker="Collaborate"
        title="Let&apos;s discuss your AI challenge."
        description="We only take on collaborations that stretch applied AI in the real world."
        align="center"
      >
        <FadeIn className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-[var(--surface-muted)] p-8 text-center">
          <p className="text-lg text-slate-200">
            Tell us about the workflow, product, or system that needs rigor. We reply with
            a lab plan inside a week.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center rounded-full bg-[var(--accent-primary)] px-6 py-3 text-base font-semibold transition hover:opacity-90"
            style={{ color: "#1b1a16" }}
          >
            Let&apos;s discuss your AI challenge &rarr;
          </Link>
        </FadeIn>
      </Section>
    </main>
  );
}
