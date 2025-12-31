import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { FadeIn } from "@/components/FadeIn";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Discovery through deployment - neuronez offers stepwise lab programs to build measurable AI systems.",
};

export default function ServicesPage() {
  return (
    <main>
      <Section
        kicker="Programs"
        title="Services built for high-impact AI initiatives."
     
        align="center"
      >
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <FadeIn key={service.title} delay={index * 0.05}>
              <Card
                title={service.title}
                description={service.description}
                footer={
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
                    <div>
                      <p className="font-semibold uppercase tracking-widest text-white">
                        Outcome
                      </p>
                      <p>{service.outcome}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold uppercase tracking-widest text-white">
                        Timeline
                      </p>
                      <p>{service.timeline}</p>
                    </div>
                  </div>
                }
              />
            </FadeIn>
          ))}
        </div>
      </Section>
    </main>
  );
}
