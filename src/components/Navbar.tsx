"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { href: "/about", label: "Team" },
  { href: "/services", label: "Build with Us" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="relative z-20 bg-transparent">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-6 py-6">
        <Link href="/" className="font-semibold tracking-tight text-white">
          neuronez
          <span className="ml-1 text-xs uppercase text-slate-400">lab</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-slate-400 md:flex">
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
        <div className="ml-auto hidden text-sm text-[var(--accent-secondary)] md:block">
          Private AI Lab
        </div>
      </div>
      <div className="flex gap-3 overflow-x-auto border-t border-white/10 px-6 py-3 text-xs text-slate-400 md:hidden">
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
