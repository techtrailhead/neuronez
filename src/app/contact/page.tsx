import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";

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
        <ContactForm />
      </div>
    </main>
  );
}
