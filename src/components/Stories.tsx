import { Section } from "@/components/Section";
import { FadeIn } from "@/components/FadeIn";

const stories = [
  {
    title: "Marketing",
    text:
      "We built ad pipelines that analyze creative performance automatically; hour by hour, campaign by campaign cutting costs and sparking better ideas.",
  },
  {
    title: "Product",
    text:
      "We automated student progress and payment cycles for Metaversity, tripling retention while reducing manual work.",
  },
  {
    title: "Sales",
    text:
      "We tracked 100+ conversations daily using voice-integrated bots to log calls, performance, and feedback turning chaos into clarity.",
  },
  {
    title: "Design",
    text:
      "We built our own design system to move from 10-day launches to 2-day experiments. Creativity shouldn’t wait on dependencies.",
  },
];

export function Stories() {
  return (
    <Section kicker="Lab Stories" title="Narratives from the field">
      <div className="space-y-6">
        {stories.map((story, index) => (
          <FadeIn key={story.title} delay={index * 0.05} className="space-y-2">
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--accent-secondary)]">
              {story.title}
            </p>
            <p className="text-base text-[var(--text-muted)]">{story.text}</p>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
