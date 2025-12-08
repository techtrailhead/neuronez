import { Section } from "@/components/Section";
import { FadeIn } from "@/components/FadeIn";

const stories = [
  {
    title: "When AI meets Marketing",
    text: "Performance will be analysed. Our pipelines read every creative, every hour, across every campaign—highlighting what works, killing what doesn’t, and letting ideas evolve from evidence, not instinct.",
  },
  {
    title: "When AI meets Product",
    text: "Operations will be streamlined. You can track progress, payments, and process workflows fused into one automated pipeline. The result: higher retention and your team can finally move out of manual spreadsheet maintenance.",
  },
  {
    title: "When AI meets Sales",
    text: "Conversations will be tracked. Voice-integrated agents capture calls, pull out insights, and map performance patterns—turning raw chatter into something you can act on.",
  },
  {
    title: "When AI meets Design",
    text: "Experiments will be more creative and measured. With our internal design system, a 10-day launch cycle became a 2-day loop, letting the team test, iterate, and ship without bottlenecks.",
  },
];

export function Stories() {
  return (
    <Section
      kicker="AI meets Product"
      title="What happens when AI meets the real work?"
    >
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
