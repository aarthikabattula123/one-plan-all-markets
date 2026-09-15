export function SiteFooter() {
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-[1200px] px-6 py-12">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
          <div>
            <span className="font-mono text-sm font-medium tracking-[0.3em] text-foreground">
              MERIDIAN<span className="text-primary">.</span>
            </span>
            <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
              Trading advisory · India
            </p>
          </div>
          <div className="max-w-md font-mono text-xs leading-relaxed text-muted">
            <p className="mb-2 uppercase tracking-[0.15em] text-foreground/70">Disclaimer</p>
            <p>
              Investment in securities market is subject to market risks. Read all related
              documents carefully before investing. Past performance is not indicative of future
              results. Figures shown are illustrative.
            </p>
          </div>
        </div>
        <div className="mt-10 flex flex-col justify-between gap-3 border-t border-border pt-6 font-mono text-[11px] uppercase tracking-[0.15em] text-muted sm:flex-row">
          <span>© 2026 Meridian Advisory</span>
          <span className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-primary" /> Markets open · 09:15 IST
          </span>
        </div>
      </div>
    </footer>
  );
}
