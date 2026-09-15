import { Link } from "@tanstack/react-router";

const nav = [
  { to: "/", label: "Home" },
  { to: "/segments", label: "Segments" },
  { to: "/pricing", label: "Pricing" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-[1200px] items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3">
          <span className="font-mono text-sm font-medium tracking-[0.3em] text-foreground">
            MERIDIAN<span className="text-primary">.</span>
          </span>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-muted sm:inline">
            Advisory
          </span>
        </Link>
        <nav className="hidden items-center gap-7 font-mono text-xs uppercase tracking-[0.15em] text-muted md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-foreground" }}
              className="transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/pricing"
          className="border border-primary/50 px-4 py-2 font-mono text-xs uppercase tracking-[0.12em] text-primary transition-colors hover:bg-primary hover:text-background"
        >
          Join
        </Link>
      </div>
    </header>
  );
}
