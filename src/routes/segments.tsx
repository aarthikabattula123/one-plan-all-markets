import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/segments")({
  head: () => ({
    meta: [
      { title: "Market Segments We Cover — Meridian Advisory" },
      {
        name: "description",
        content:
          "Index options, stock options, commodity options, intraday stocks and short term investment — how each desk works and what a call looks like.",
      },
      { property: "og:title", content: "Market Segments We Cover — Meridian Advisory" },
      {
        property: "og:description",
        content:
          "Five desks, one membership. See the call format, holding period and risk profile for each segment.",
      },
    ],
  }),
  component: SegmentsPage,
});

const desks = [
  {
    n: "01",
    name: "Index Options",
    instruments: "NIFTY · BANKNIFTY · FINNIFTY",
    horizon: "Intraday to weekly expiry",
    body: "Directional and hedged option positions around index structure, with levels marked before the open.",
  },
  {
    n: "02",
    name: "Stock Options",
    instruments: "Liquid F&O names",
    horizon: "2 days to expiry",
    body: "Option ideas on liquid stock counters, filtered for spread quality and event risk before they are shared.",
  },
  {
    n: "03",
    name: "Commodity Options",
    instruments: "Crude · Gold · Silver · Natural Gas",
    horizon: "Intraday to swing",
    body: "MCX positions timed around global sessions, with stops sized for commodity volatility.",
  },
  {
    n: "04",
    name: "Intraday Stocks",
    instruments: "Cash segment",
    horizon: "Same session",
    body: "Cash-market ideas for traders who prefer no leverage decay, closed before the session ends.",
  },
  {
    n: "05",
    name: "Short Term Investment",
    instruments: "Delivery positions",
    horizon: "1–3 weeks",
    body: "Positional ideas with a clear thesis, staggered targets and a review note at the end of each week.",
  },
];

function SegmentsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* 1 — INTRO */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1200px] px-6 pb-14 pt-20">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
            05 desks · 01 membership
          </p>
          <h1 className="mt-6 max-w-[18ch] font-display text-5xl font-bold leading-[0.95] tracking-tight md:text-6xl">
            Every segment we cover
          </h1>
          <p className="mt-8 max-w-[52ch] text-lg leading-relaxed text-muted">
            The same research desk runs all five segments, so positions never contradict each other
            and your total risk stays visible in one place.
          </p>
        </div>
      </section>

      {/* 2 — DESKS */}
      <section className="border-b border-border">
        <SectionHeading index="a" title="The desks" aside="Format & horizon" />
        <div className="mx-auto max-w-[1200px] px-6 pb-14">
          <div className="border-t border-border">
            {desks.map((d, i) => (
              <div
                key={d.n}
                className={`grid gap-4 py-8 md:grid-cols-12 ${i < desks.length - 1 ? "border-b border-border" : ""}`}
              >
                <div className="font-mono text-[11px] text-muted md:col-span-1">{d.n}</div>
                <div className="md:col-span-4">
                  <h2 className="font-display text-xl font-bold tracking-tight">{d.name}</h2>
                  <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
                    {d.instruments}
                  </p>
                </div>
                <div className="md:col-span-4">
                  <p className="leading-relaxed text-muted">{d.body}</p>
                </div>
                <div className="md:col-span-3">
                  <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
                    Horizon
                  </p>
                  <p className="mt-2 font-mono text-sm text-primary">{d.horizon}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 — CALL FORMAT */}
      <section className="border-b border-border">
        <SectionHeading index="b" title="What a call looks like" aside="Entry · Target · Stop" />
        <div className="mx-auto max-w-[1200px] px-6 pb-16">
          <div className="grid gap-6 border-t border-border pt-8 lg:grid-cols-2">
            <div className="border border-border bg-panel">
              <div className="flex h-10 items-center justify-between border-b border-border px-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                  Sample · Index option
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-primary">
                  Buy
                </span>
              </div>
              <div className="space-y-4 p-6 font-mono text-sm">
                <div className="flex justify-between border-b border-border pb-3">
                  <span className="text-muted">Instrument</span>
                  <span>BANKNIFTY 48500 CE</span>
                </div>
                <div className="flex justify-between border-b border-border pb-3">
                  <span className="text-muted">Entry</span>
                  <span>₹212 – ₹218</span>
                </div>
                <div className="flex justify-between border-b border-border pb-3">
                  <span className="text-muted">Target</span>
                  <span className="text-primary">₹268 / ₹305</span>
                </div>
                <div className="flex justify-between border-b border-border pb-3">
                  <span className="text-muted">Stop loss</span>
                  <span className="text-gold">₹186</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">Risk per lot</span>
                  <span>₹780</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-6">
              <div className="border-b border-border pb-6">
                <h3 className="font-display text-xl font-bold tracking-tight">
                  Nothing is left to interpretation
                </h3>
                <p className="mt-3 leading-relaxed text-muted">
                  Entry range, staggered targets and a hard stop are published together. If a level
                  is invalidated, the call is closed on the same channel.
                </p>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold tracking-tight">
                  Every call is logged
                </h3>
                <p className="mt-3 leading-relaxed text-muted">
                  Outcomes go into a running record, so the accuracy numbers you see are traceable
                  back to individual calls.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 — CTA */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1200px] px-6 py-20 text-center">
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
            All five desks. One fee.
          </h2>
          <div className="mt-10 flex justify-center">
            <Link
              to="/pricing"
              className="glow-btn inline-flex items-center gap-2 bg-primary px-6 py-3.5 font-mono text-sm font-medium uppercase tracking-[0.1em] text-background"
            >
              <span className="size-2 rounded-full bg-background" />
              See pricing
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
