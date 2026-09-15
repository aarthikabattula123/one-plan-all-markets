import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SectionHeading } from "@/components/site/SectionHeading";
import { SegmentTicker } from "@/components/site/SegmentTicker";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Meridian Advisory — One Fee, All Market Segments Covered" },
      {
        name: "description",
        content:
          "Index options, stock options, commodity options, intraday stocks and short term investment calls with proper entry, target and stop loss — on one flat fee.",
      },
      { property: "og:title", content: "Meridian Advisory — One Fee, All Segments Covered" },
      {
        property: "og:description",
        content:
          "Research-based trading calls across five market segments, each with a defined entry, target and stop loss.",
      },
    ],
  }),
  component: HomePage,
});

const segments = [
  { n: "01", name: "Index Options", note: "NIFTY · BANKNIFTY" },
  { n: "02", name: "Stock Options", note: "Liquid F&O names" },
  { n: "03", name: "Commodity", note: "Crude · Gold · Silver" },
  { n: "04", name: "Intraday Stocks", note: "Cash segment" },
  { n: "05", name: "Short Term", note: "1–3 week holds" },
];

const reasons = [
  {
    n: "01",
    title: "All segments under one plan",
    body: "No per-market add-ons. One membership, every desk you need, active daily.",
  },
  {
    n: "02",
    title: "Proper entry, target & stop loss",
    body: "Every call is defined before it is shared — so your risk is capped, never improvised.",
  },
  {
    n: "03",
    title: "High accuracy, research-based calls",
    body: "Calls are built from data and structure, not mood — and logged for review.",
  },
];

const stats = [
  { value: "72%", label: "Win rate", tone: "text-primary" },
  { value: "1.6", label: "Avg reward : risk", tone: "text-foreground" },
  { value: "310", label: "Calls this quarter", tone: "text-foreground" },
  { value: "5", label: "Segments covered", tone: "text-gold" },
];

const bars = [40, 55, 35, 70, 50, 85, 60, 95, 72, 100];

function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* 1 — HERO */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-6 pb-16 pt-20 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="reveal font-mono text-xs uppercase tracking-[0.25em] text-primary">
              Research-based · One plan
            </p>
            <h1
              className="reveal mt-6 font-display text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl"
              style={{ animationDelay: "80ms" }}
            >
              One Fee –<br />
              <span className="text-primary">All Segments</span>
              <br />
              Covered
            </h1>
            <p
              className="reveal mt-8 max-w-[46ch] text-lg leading-relaxed text-muted md:text-xl"
              style={{ animationDelay: "160ms" }}
            >
              A single subscription that spans index, stock and commodity options, intraday stocks
              and short-term positions — every call with a defined entry, target and stop loss.
            </p>
            <div className="reveal mt-10 flex flex-wrap gap-4" style={{ animationDelay: "240ms" }}>
              <Link
                to="/pricing"
                className="glow-btn inline-flex items-center gap-2 bg-primary px-6 py-3.5 font-mono text-sm font-medium uppercase tracking-[0.1em] text-background"
              >
                <span className="size-2 rounded-full bg-background" />
                Join the plan
              </Link>
              <Link
                to="/segments"
                className="inline-flex items-center gap-2 border border-border px-6 py-3.5 font-mono text-sm uppercase tracking-[0.1em] text-foreground transition-colors hover:border-foreground/40"
              >
                <span className="size-2 rounded-full bg-muted" />
                See segments
              </Link>
            </div>
            <p
              className="reveal mt-8 max-w-[40ch] font-mono text-[11px] text-muted"
              style={{ animationDelay: "320ms" }}
            >
              ₹4,999 / 3 months · Cancel anytime · New members every Monday
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="reveal border border-border bg-panel" style={{ animationDelay: "200ms" }}>
              <div className="flex h-10 items-center justify-between border-b border-border px-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                  Live desk
                </span>
                <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.15em] text-primary">
                  <span className="size-1.5 rounded-full bg-primary" /> Active
                </span>
              </div>
              <div className="p-4">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-wide text-muted">
                      NIFTY 22500 CE
                    </p>
                    <p className="mt-1 font-mono text-2xl font-medium">₹182.40</p>
                  </div>
                  <span className="font-mono text-sm text-primary">+6.8%</span>
                </div>
                <div className="mt-4 flex h-24 items-end gap-1">
                  {bars.map((h, i) => (
                    <span
                      key={i}
                      className="bar flex-1 bg-primary"
                      style={{
                        height: `${h}%`,
                        opacity: 0.3 + (h / 100) * 0.7,
                        animationDelay: `${i * 60}ms`,
                      }}
                    />
                  ))}
                </div>
              </div>
              <div className="border-t border-border px-4 py-3 font-mono text-[11px] text-muted">
                Entry <span className="text-foreground">₹165</span> · Target{" "}
                <span className="text-primary">₹210</span> · Stop{" "}
                <span className="text-gold">₹158</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SegmentTicker />

      {/* 2 — SEGMENTS */}
      <section className="border-b border-border">
        <SectionHeading index="a" title="Segments covered" aside="05 market segments" />
        <div className="mx-auto max-w-[1200px] px-6 pb-14">
          <div className="grid border-t border-border sm:grid-cols-2 lg:grid-cols-5">
            {segments.map((s) => (
              <div
                key={s.n}
                className="border-b border-r border-border py-6 pr-6 last:border-r-0 lg:border-r-0"
              >
                <p className="font-mono text-[11px] text-muted">{s.n}</p>
                <p className="mt-2 font-display text-lg font-bold tracking-tight">{s.name}</p>
                <p className="mt-2 font-mono text-[11px] text-muted">{s.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 — WHY JOIN */}
      <section className="border-b border-border">
        <SectionHeading index="b" title="Why join" aside="The case" />
        <div className="mx-auto max-w-[1200px] px-6 pb-14">
          <div className="border-t border-border">
            {reasons.map((r, i) => (
              <div
                key={r.n}
                className={`grid py-8 md:grid-cols-12 ${i < reasons.length - 1 ? "border-b border-border" : ""}`}
              >
                <div className="font-mono text-[11px] text-muted md:col-span-2">{r.n}</div>
                <div className="md:col-span-5 md:pt-1">
                  <h3 className="font-display text-xl font-bold tracking-tight">{r.title}</h3>
                </div>
                <div className="pt-3 md:col-span-5 md:pt-1">
                  <p className="leading-relaxed text-muted">{r.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 — PERFORMANCE */}
      <section className="border-b border-border">
        <SectionHeading index="c" title="Performance" aside="Trailing 90 days" />
        <div className="mx-auto max-w-[1200px] px-6 pb-14">
          <div className="grid border-t border-border sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="border-b border-border py-8 pr-6">
                <p className={`font-mono text-4xl font-medium tracking-tight md:text-5xl ${s.tone}`}>
                  {s.value}
                </p>
                <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-5 font-mono text-[11px] text-muted">
            Past performance is not indicative of future results. Figures are illustrative.
          </p>
        </div>
      </section>

      {/* 5 — MEMBER NOTES */}
      <section className="border-b border-border">
        <SectionHeading index="d" title="From the desk" aside="Member notes" />
        <div className="mx-auto max-w-[1200px] px-6 pb-16">
          <div className="grid border-t border-border md:grid-cols-3">
            <div className="border-b border-border py-8 pr-8 md:border-b-0 md:border-r">
              <p className="leading-relaxed text-foreground/90">
                “The stop loss discipline changed how I trade. I finally stopped averaging into
                losers.”
              </p>
              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
                R. Menon — intraday
              </p>
            </div>
            <div className="border-b border-border py-8 md:border-b-0 md:border-r md:px-8">
              <p className="leading-relaxed text-foreground/90">
                “One subscription covers my options and my short-term book. Clean, no noise.”
              </p>
              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
                S. Iyer — options
              </p>
            </div>
            <div className="border-b border-border py-8 md:pl-8">
              <p className="leading-relaxed text-foreground/90">
                “Research notes explain the why, not just the what. I trust the calls more.”
              </p>
              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
                K. Nair — short term
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6 — FINAL CTA */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1200px] px-6 py-20 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
            New members every Monday
          </p>
          <h2 className="mt-6 font-display text-4xl font-bold tracking-tight md:text-6xl">
            Ready to trade all five desks?
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/pricing"
              className="glow-btn inline-flex items-center gap-2 bg-primary px-6 py-3.5 font-mono text-sm font-medium uppercase tracking-[0.1em] text-background"
            >
              <span className="size-2 rounded-full bg-background" />
              View the plan
            </Link>
            <Link
              to="/segments"
              className="inline-flex items-center gap-2 border border-border px-6 py-3.5 font-mono text-sm uppercase tracking-[0.1em] text-foreground transition-colors hover:border-foreground/40"
            >
              <span className="size-2 rounded-full bg-muted" />
              Explore segments
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
