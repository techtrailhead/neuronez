"use client";

import { useState } from "react";
import { contactSocials } from "@/lib/data";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const openMailDraft = () => {
    const { name, email, phone, project, company, message } = formData;
    const subject = encodeURIComponent(`Lab request — ${name || "Unknown"}`);
    const body = encodeURIComponent(
      [
        `Name: ${name || "N/A"}`,
        `Email: ${email || "N/A"}`,
        `Phone: ${phone || "N/A"}`,
        `Project Brief: ${project || "N/A"}`,
        `Company: ${company || "N/A"}`,
        `Message: ${message || "N/A"}`,
        "",
        "(This draft was opened after a send attempt.)",
      ].join("\n"),
    );

    const mailtoUrl = `mailto:contact@ankita.cc?subject=${subject}&body=${body}`;
    window.open(mailtoUrl, "_self");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setStatus(null);
    setIsSubmitting(true);

    const { name, email, phone, project, company, message } = formData;
    if (!name || !email || !phone || !project || !company) {
      setError("Please fill in all required fields.");
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, project, company, message }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        const apiError = data?.error || "Failed to send. Please try again.";
        throw new Error(apiError);
      }

      setStatus("Your details have been sent. Ankita will reach out to you personally.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        project: "",
        company: "",
        message: "",
      });
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setError(msg);
      // Fallback: open mail draft so the user can still send.
      openMailDraft();
      setStatus("We opened an email draft as a fallback. Ankita will reach out after you send it.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="grid gap-10 md:grid-cols-[2fr_1fr]">
      <form
        className="space-y-5 rounded-3xl border border-white/10 bg-[var(--surface-muted)] p-8"
        onSubmit={handleSubmit}
      >
        {status && (
          <div className="rounded-2xl border border-[var(--accent-secondary)]/50 bg-[var(--accent-secondary)]/10 px-4 py-3 text-sm text-[var(--accent-secondary)]">
            {status}
          </div>
        )}
        {error && (
          <div className="rounded-2xl border border-red-500/50 bg-red-500/10 px-4 py-3 text-sm text-red-200">
            {error}
          </div>
        )}
        <label className="block text-sm font-medium text-[var(--text-primary)]">
          Name
          <input
            type="text"
            name="name"
            placeholder="Mike Ross"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-2 w-full rounded-2xl border border-white/10 bg-[#0c1417] px-4 py-3 text-base text-white placeholder:text-slate-500 focus:border-[var(--accent-secondary)] focus:outline-none"
          />
        </label>
        <label className="block text-sm font-medium text-[var(--text-primary)]">
          Email
          <input
            type="email"
            name="email"
            placeholder="team@company.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-2 w-full rounded-2xl border border-white/10 bg-[#0b0d14] px-4 py-3 text-base text-white placeholder:text-slate-500 focus:border-[var(--accent-secondary)] focus:outline-none"
          />
        </label>
        <label className="block text-sm font-medium text-[var(--text-primary)]">
          Phone number (with country code)
          <input
            type="tel"
            name="phone"
            placeholder="+1 415 555 0182"
            value={formData.phone}
            onChange={handleChange}
            required
            className="mt-2 w-full rounded-2xl border border-white/10 bg-[#0b0d14] px-4 py-3 text-base text-white placeholder:text-slate-500 focus:border-[var(--accent-secondary)] focus:outline-none"
          />
        </label>
        <label className="block text-sm font-medium text-[var(--text-primary)]">
          Project brief
          <input
            type="text"
            name="project"
            placeholder="Intelligent workflow for ops, data, etc."
            value={formData.project}
            onChange={handleChange}
            required
            className="mt-2 w-full rounded-2xl border border-white/10 bg-[#0b0d14] px-4 py-3 text-base text-white placeholder:text-slate-500 focus:border-[var(--accent-secondary)] focus:outline-none"
          />
        </label>
        <label className="block text-sm font-medium text-[var(--text-primary)]">
          Company name or link
          <input
            type="text"
            name="company"
            placeholder="Acme Labs — acme.ai"
            value={formData.company}
            onChange={handleChange}
            required
            className="mt-2 w-full rounded-2xl border border-white/10 bg-[#0b0d14] px-4 py-3 text-base text-white placeholder:text-slate-500 focus:border-[var(--accent-secondary)] focus:outline-none"
          />
        </label>
        <label className="block text-sm font-medium text-[var(--text-primary)]">
          Message
          <textarea
            name="message"
            rows={5}
            placeholder="Constraints, success criteria, and timelines"
            value={formData.message}
            onChange={handleChange}
            className="mt-2 w-full rounded-2xl border border-white/10 bg-[#0b0d14] px-4 py-3 text-base text-white placeholder:text-slate-500 focus:border-[var(--accent-secondary)] focus:outline-none"
          />
        </label>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-full bg-[var(--accent-primary)] px-6 py-3 text-base font-semibold text-[#1b1a16] transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Sending..." : "Send lab request"}
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
  );
}
