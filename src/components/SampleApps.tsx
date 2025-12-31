import { Section } from "@/components/Section";
import { Card } from "@/components/Card";

const apps = [
  {
    title: "Paper-Route",
    description:
      "Agentic courier that drafts, reviews, and routes research updates to the right stakeholders with human-in-the-loop checkpoints.",
  },
  {
    title: "Reqbase",
    description:
      "Turns raw ideas into structured PRDs with acceptance criteria, dependencies, and delivery trackers so teams align faster.",
  },
  {
    title: "STT to Insights generation",
    description:
      "Speech-to-text pipeline that summarizes calls and standups into next steps, risks, and owners — ready to push into your tools.",
  },
];

export function SampleApps() {
  return (
    <Section
      kicker="Proof of build"
      title="Sample apps from the lab."
      description="A few shipped experiments that show how we approach real workflows."
      align="center"
      className="bg-[var(--page-bg)]"
    >
      <div className="grid gap-6 md:grid-cols-3">
        {apps.map((app) => (
          <Card
            key={app.title}
            title={app.title}
            description={app.description}
            className="bg-[var(--surface-muted)]"
          />
        ))}
      </div>
    </Section>
  );
}
