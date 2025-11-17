"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { href: "/team", label: "Team" },
  { href: "/services", label: "Build with Us" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-white/5 bg-[#0b0b0b]/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-6 px-6 py-4 text-sm text-[var(--text-muted)]">
        <Link href="/" className="font-semibold tracking-tight text-[var(--text-primary)]">
          neuronezLAB
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navigation.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition hover:text-white ${
                  isActive ? "text-white" : ""
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="ml-auto hidden text-xs uppercase tracking-[0.4em] text-[var(--accent-secondary)] md:block">
          Private AI Lab
        </div>
      </div>
      <div className="flex gap-3 overflow-x-auto border-t border-white/10 px-6 py-3 text-xs text-[var(--text-muted)] md:hidden">
        {navigation.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname?.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full border px-3 py-1 ${
                isActive
                  ? "border-[var(--accent-secondary)] text-white"
                  : "border-white/10 text-slate-400"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </header>
  );
}
