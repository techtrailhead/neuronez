import type { Metadata } from "next";
import { contactSocials } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description: "neuronez collaborates with a limited roster of partners. Share your AI challenge and we will respond with a lab plan.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[var(--page-bg)] px-6 py-24">
      <div className="mx-auto max-w-5xl space-y-12">
        <div className="text-center text-xs uppercase tracking-[0.6em] text-[var(--accent-secondary)]">
          Contact
        </div>
        <p className="mx-auto max-w-3xl text-center text-[var(--text-muted)]">
          We only take on projects that stretch applied AI. Give us the signal in a few lines.
        </p>
        <div className="grid gap-10 md:grid-cols-[2fr_1fr]">
          <form className="space-y-5 rounded-3xl border border-white/10 bg-[var(--surface-muted)] p-8">
            <label className="block text-sm font-medium text-[var(--text-primary)]">
              Name
              <input
                type="text"
                name="name"
                placeholder="Mike Ross"
                className="mt-2 w-full rounded-2xl border border-white/10 bg-[#0c1417] px-4 py-3 text-base text-white placeholder:text-slate-500 focus:border-[var(--accent-secondary)] focus:outline-none"
              />
            </label>
            <label className="block text-sm font-medium text-[var(--text-primary)]">
              Email
              <input
                type="email"
                name="email"
                placeholder="team@company.com"
                className="mt-2 w-full rounded-2xl border border-white/10 bg-[#0b0d14] px-4 py-3 text-base text-white placeholder:text-slate-500 focus:border-[var(--accent-secondary)] focus:outline-none"
              />
            </label>
            <label className="block text-sm font-medium text-[var(--text-primary)]">
              Project brief
              <input
                type="text"
                name="project"
                placeholder="Intelligent workflow for ops, data, etc."
                className="mt-2 w-full rounded-2xl border border-white/10 bg-[#0b0d14] px-4 py-3 text-base text-white placeholder:text-slate-500 focus:border-[var(--accent-secondary)] focus:outline-none"
              />
            </label>
            <label className="block text-sm font-medium text-[var(--text-primary)]">
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
              className="w-full rounded-full bg-[var(--accent-primary)] px-6 py-3 text-base font-semibold text-[#1b1a16] transition hover:opacity-90"
            >
              Send lab request
            </button>
          </form>
          <div className="space-y-6 rounded-3xl border border-white/10 bg-[var(--surface-muted)] p-8 text-sm text-[var(--text-muted)]">
            <p className="font-semibold text-[var(--text-primary)]">Signals</p>
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
        </div>
      </div>
    </main>
  );
}
