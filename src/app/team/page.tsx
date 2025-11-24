import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { ProfileCard } from "@/components/contact/ProfileCard";
import { HoverCard } from "@/components/contact/HoverCard";
import { ContactButton } from "@/components/contact/ContactButton";

export const metadata: Metadata = {
  title: "Team",
  description: "Meet Tanay and Ankita — the duo behind neuronez LAB.",
};

const profiles = [
  {
    name: "Tanay",
    title: "Engineering & Systems",
    bio: "Ex-Microsoft, Founder-neoG.camp, CEO @Invact.",
    description: [
      "Codes like caffeine, thinks like a product manager.",
      "Loves building tools that make work vanish.",
    ],
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/tanaypratap" },
      { label: "GitHub", href: "https://github.com/tanaypratap" },
      { label: "Website", href: "https://tanaypratap.com" },
    ],
    imageSrc: "/images/tanay.JPG",
  },
  {
    name: "Ankita",
    title: "Product & Strategy",
    bio: "Ex-Google, Product & Marketing Head @Invact.",
    description: [
      "Writes products before they’re built.",
      "Turns chaotic ideas into quiet systems.",
    ],
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/ankitatripathii" },
      { label: "X", href: "https://x.com/ankitatr_" },
      { label: "Website", href: "https://ankita.cc" },
    ],
    imageSrc: "/images/ankita.png",
  },
];

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-[var(--page-bg)] px-6 py-24">
      <div className="mx-auto flex max-w-5xl flex-col gap-12">
        <FadeIn className="text-center text-xs uppercase tracking-[0.6em] text-[var(--accent-secondary)]">
          Let’s connect
        </FadeIn>
        <FadeIn className="mx-auto max-w-3xl text-center text-[var(--text-muted)]">
          We’re a private lab, so conversations start the work. Drop us a note if you’re building something that needs care and intent.
        </FadeIn>
        <div className="grid gap-6 md:grid-cols-2">
          {profiles.map((profile) => (
            <ProfileCard
              key={profile.name}
          name={profile.name}
          title={profile.title}
          bio={profile.bio}
          description={profile.description}
          links={profile.links}
          imageSrc={profile.imageSrc}
        />
          ))}
        </div>
        <HoverCard />
        <FadeIn delay={0.3} className="flex justify-center">
          <ContactButton />
        </FadeIn>
      </div>
    </main>
  );
}
