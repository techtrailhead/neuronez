import Link from "next/link";
import Image from "next/image";
import { Section } from "@/components/Section";
import { FadeIn } from "@/components/FadeIn";

const brandBadges = [
  { name: "Microsoft", src: "/images/microsoft.jpeg" },
  { name: "Google", src: "/images/google.jpeg", scale: 1.3 },
  { name: "Amazon", src: "/images/amazon.jpeg" },
  { name: "Meta", src: "/images/meta.jpeg", scale: 1.4 },
];

export function About() {
  return (
    <Section
      kicker="Who we are"
      title="The team you don&apos;t usually meet"
      description="A small crew of builders with a decade-plus inside Microsoft, Google, Amazon, Meta, and Flipkart."
    >
      <FadeIn className="space-y-4 text-lg text-[var(--text-muted)]">
        <p>
          They&apos;re engineers with over a decade of work inside Microsoft, Google, Amazon, Meta, and Flipkart.
        </p>
        <p>
          People who&apos;ve shipped complex systems long before AI became fashionable.
        </p>
        <p>
          They came together because building with AI demands experience, patience, and the instinct to solve real problems, not performative ones.
        </p>
        <p>
          Deterministic in how they think, not probabilistic in how they work.
        </p>
        <div className="flex flex-wrap items-center gap-3 pt-2">
          {brandBadges.map((brand) => (
            <span
              key={brand.name}
              className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-white/10 shadow-[0_0_18px_rgba(255,255,255,0.08)]"
              title={brand.name}
            >
              <Image
                src={brand.src}
                alt={brand.name}
                width={48}
                height={48}
                className="h-full w-full object-contain"
                style={{ transform: brand.scale ? `scale(${brand.scale})` : undefined }}
              />
            </span>
          ))}
        </div>
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
