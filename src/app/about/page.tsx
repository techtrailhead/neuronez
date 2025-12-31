import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { FadeIn } from "@/components/FadeIn";
import { teamMembers } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "neuronez is a private AI lab treating every engagement like a scientific program - rigorous, measured, and invite-only.",
};

export default function AboutPage() {
  return (
    <main>
      <Section
        kicker="About"
        title="The lab philosophy"
        description="AI programs treated like experiments: scoped, measured, and repeatable."
      >
        <div className="space-y-4 text-base text-slate-300">
          <p>
            neuronez partners with teams who prefer measurement over slides. We shift
            between research and production without handoffs, carrying hypotheses and data
            trails the entire way.
          </p>
          <p>Build, test, iterate, scale. No buzzwords—just instruments and results.</p>
        </div>
      </Section>

      <Section kicker="Vision" title="To make AI implementation as rigorous as experimentation.">
        <FadeIn className="rounded-3xl border border-white/10 bg-[var(--surface-muted)] p-8 text-lg text-slate-200">
          Every build gets a hypothesis, peer review, and telemetry before it leaves the lab.
        </FadeIn>
      </Section>

      <Section kicker="Philosophy" title="Build, test, iterate, scale.">
        <FadeIn className="grid gap-6 md:grid-cols-2">
          <Card
            title="Build"
            description="Hands-on engineering that integrates with your stack—not slides."
          />
          <Card
            title="Test"
            description="Evaluation harnesses and telemetry before any rollout."
          />
          <Card
            title="Iterate"
            description="Feedback loops with operators and subject matter experts."
          />
          <Card
            title="Scale"
            description="Deployment runbooks, governance, and retraining cadences."
          />
        </FadeIn>
      </Section>

      <Section kicker="Team" title="Lab partners" description="Placeholder profiles until the roster is public.">
        <div className="grid gap-6 md:grid-cols-3">
          {teamMembers.map((member, index) => (
            <FadeIn key={member.name} delay={index * 0.05}>
              <Card title={member.name} description={member.focus} footer={member.role} />
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section kicker="Lab Notes" title="Research signals" align="center">
        <FadeIn className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-[var(--surface-muted)] p-8 text-center text-slate-200">
          <p>Explore essays and field notes from our experiments and deployments.</p>
          <Link
            href="/insights"
            className="mt-6 inline-flex items-center justify-center rounded-full border border-[var(--accent-secondary)]/40 px-6 py-3 text-sm font-semibold text-[var(--accent-secondary)] transition hover:border-[var(--accent-secondary)]/70"
          >
            Visit Lab Notes &rarr;
          </Link>
        </FadeIn>
      </Section>
    </main>
  );
}
