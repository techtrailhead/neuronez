import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { FadeIn } from "@/components/FadeIn";
import { insightPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Insights",
  description: "Lab Notes from neuronez - field reports on real, measurable AI systems.",
};

export default function InsightsPage() {
  return (
    <main>
      <Section
        kicker="Lab Notes"
        title="Field reports and working theories."
        description="Signals from experiments, instrumentation breakdowns, and working essays."
        align="center"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {insightPosts.map((post, index) => (
            <FadeIn key={post.title} delay={index * 0.05}>
              <Card
                title={post.title}
                description={post.description}
                eyebrow={post.tag}
                footer={<span className="text-slate-400">Coming soon</span>}
              />
            </FadeIn>
          ))}
        </div>
      </Section>
    </main>
  );
}
