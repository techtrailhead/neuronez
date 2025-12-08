export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[var(--surface-muted)]/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 text-sm text-[var(--text-muted)]">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--accent-secondary)]">Studio</p>
            <p className="text-lg font-semibold text-[var(--text-primary)]">neuronez</p>
            <p className="text-base">builders who are passionate about building AI applications for every business.</p>
            <div className="space-y-1 text-xs uppercase tracking-[0.2em]">
              <p>Email</p>
              <a
                href="mailto:contact@ankita.cc"
                className="inline-block border-b border-white/40 text-[var(--text-primary)] transition hover:text-white"
              >
                contact@ankita.cc
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--accent-secondary)]">Signals</p>
            <div className="flex flex-col gap-2 text-base text-[var(--text-primary)]">
              <a
                href="https://medium.com/@neuronez"
                target="_blank"
                rel="noreferrer"
                className="inline-block border-b border-white/30 pb-1 transition hover:text-white"
              >
                Medium
              </a>
              <a
                href="https://x.com/neuronezhq"
                target="_blank"
                rel="noreferrer"
                className="inline-block border-b border-white/30 pb-1 transition hover:text-white"
              >
                Twitter
              </a>
              <a
                href="mailto:contact@ankita.cc"
                className="inline-block border-b border-white/30 pb-1 transition hover:text-white"
              >
                Email
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--accent-secondary)]">Notes</p>
            <p className="text-base text-[var(--text-muted)]">
              Subscribe if you love reading and learning new things!
            </p>
            <a
              href="https://medium.com/@neuronez"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-5 py-2 text-sm font-semibold text-[var(--text-primary)] transition hover:border-white hover:text-white"
            >
              Subscribe →
            </a>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 text-center text-xs text-[var(--text-muted)]">
          © neuronez 2025
        </div>
      </div>
    </footer>
  );
}
