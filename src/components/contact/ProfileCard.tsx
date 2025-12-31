"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type LinkItem = {
  label: string;
  href: string;
};

type ProfileCardProps = {
  name: string;
  title: string;
  bio?: string;
  description: string[];
  links: LinkItem[];
  imageSrc?: string;
};

export function ProfileCard({ name, title, bio, description, links, imageSrc }: ProfileCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(108, 250, 199, 0.2)" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="rounded-2xl border border-zinc-800 bg-[#111315]/80 p-6 text-[var(--text-muted)]"
    >
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={`${name} portrait`}
          width={160}
          height={160}
          className="mb-6 h-40 w-40 rounded-xl border border-zinc-700 object-cover"
        />
      ) : (
        <div className="mb-6 h-40 w-40 rounded-xl border border-zinc-700 bg-zinc-900" />
      )}
      <p className="text-sm uppercase tracking-[0.3em] text-[var(--accent-primary)]">
        {title}
      </p>
      <h3 className="mt-2 text-2xl font-semibold text-[var(--text-primary)]">{name}</h3>
      {bio && (
        <span className="mt-3 inline-block rounded-full border border-[var(--accent-primary)]/50 bg-[var(--accent-primary)]/12 px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.18em] text-[var(--accent-primary)]">
          {bio}
        </span>
      )}
      <div className={`space-y-2 text-sm leading-relaxed ${bio ? "mt-3" : "mt-4"}`}>
        {description.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
      <div className="mt-5 flex flex-wrap gap-4 text-xs uppercase tracking-[0.2em] text-[var(--accent-secondary)]">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            {link.label}
          </a>
        ))}
      </div>
    </motion.div>
  );
}
