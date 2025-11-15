import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { FadeIn } from "@/components/FadeIn";
import { contactSocials } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "neuronez collaborates with a limited roster of partners. Share your AI challenge and we will respond with a lab plan.",
};

export default function ContactPage() {
  return (
    <main>
      <Section
        kicker="Contact"
        title="We only work with select partners."
        description="Share the system, data, and stakes. We respond with a lab plan."
        align="center"
      >
        <FadeIn className="grid gap-10 md:grid-cols-[2fr_1fr]">
          <form className="space-y-5 rounded-3xl border border-white/10 bg-[var(--surface-muted)] p-8">
            <p className="text-sm text-slate-400">
              We only take on projects that stretch applied AI. Give us the signal in a few lines.
            </p>
            <label className="block text-sm font-medium text-slate-200">
              Name
              <input
                type="text"
                name="name"
                placeholder="Jane Doe"
                className="mt-2 w-full rounded-2xl border border-white/10 bg-[#0c1417] px-4 py-3 text-base text-white placeholder:text-slate-500 focus:border-[var(--accent-secondary)] focus:outline-none"
              />
            </label>
            <label className="block text-sm font-medium text-slate-200">
              Email
              <input
                type="email"
                name="email"
                placeholder="team@company.com"
                className="mt-2 w-full rounded-2xl border border-white/10 bg-[#0b0d14] px-4 py-3 text-base text-white placeholder:text-slate-500 focus:border-[var(--accent-secondary)] focus:outline-none"
              />
            </label>
            <label className="block text-sm font-medium text-slate-200">
              Project brief
              <input
                type="text"
                name="project"
                placeholder="Intelligent workflow for ops, data, etc."
                className="mt-2 w-full rounded-2xl border border-white/10 bg-[#0b0d14] px-4 py-3 text-base text-white placeholder:text-slate-500 focus:border-[var(--accent-secondary)] focus:outline-none"
              />
            </label>
            <label className="block text-sm font-medium text-slate-200">
              Message
              <textarea
                name="message"
                rows={5}
                placeholder="Constraints, success criteria, and timelines"
                className="mt-2 w-full rounded-2xl border border-white/10 bg-[#0b0d14] px-4 py-3 text-base text-white placeholder:text-slate-500 focus:border-[var(--accent-secondary)] focus:outline-none"
              />
            </label>
            <button
              type="submit"
              className="w-full rounded-full bg-[var(--accent-primary)] px-6 py-3 text-base font-semibold transition hover:opacity-90"
              style={{ color: "#1b1a16" }}
            >
              Send lab request
            </button>
          </form>
          <div className="space-y-6 rounded-3xl border border-white/10 bg-[var(--surface-muted)] p-8 text-sm text-slate-300">
            <p className="font-semibold text-white">Signals</p>
            <p>
              Not ready to start yet? Follow the lab and reach out when the challenge is ready for a rigorous partner.
            </p>
            <ul className="space-y-3">
              {contactSocials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[var(--accent-secondary)] transition hover:text-white"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </Section>
    </main>
  );
}
