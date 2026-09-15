import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — One Fee for All Segments | Meridian Advisory" },
      {
        name: "description",
        content:
          "One flat membership covering index, stock and commodity options, intraday stocks and short term investment calls. No tiers, no upsells.",
      },
      { property: "og:title", content: "Pricing — One Fee for All Segments" },
      {
        property: "og:description",
        content:
          "₹4,999 for three months of research-based calls across all five market segments.",
      },
    ],
  }),
  component: PricingPage,
});

const included = [
  "Access to all 5 segments",
  "Entry, target & stop loss on every call",
  "Research notes behind each idea",
  "Live desk updates during market hours",
  "Weekly strategy review",
  "Direct support on WhatsApp & Telegram",
];

const faqs = [
  {
    q: "Are there separate fees per segment?",
    a: "No. One fee covers index options, stock options, commodity options, intraday stocks and short term investment.",
  },
  {
    q: "How many calls can I expect?",
    a: "Roughly 3 to 6 actionable calls across the desks on a normal trading day, depending on market conditions.",
  },
  {
    q: "How are calls delivered?",
    a: "On the members channel, with the entry range, targets and stop loss published together before you act.",
  },
  {
    q: "Can I cancel?",
    a: "Yes. The membership does not auto-renew; you simply choose whether to continue at the end of the term.",
  },
];

function PricingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* 1 — INTRO + PLAN */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1200px] px-6 pb-16 pt-20">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
            No tiers · No upsells
          </p>
          <h1 className="mt-6 max-w-[16ch] font-display text-5xl font-bold leading-[0.95] tracking-tight md:text-6xl">
            One plan. Every segment.
          </h1>

          <div className="mx-auto mt-12 max-w-3xl border border-primary/40 bg-panel shadow-[0_0_60px_-22px_var(--color-primary)]">
            <div className="flex items-center justify-between border-b border-border px-8 py-4">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                The only plan
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-primary">
                Best value
              </span>
            </div>
            <div className="grid md:grid-cols-2">
              <div className="border-b border-border px-8 py-8 md:border-b-0 md:border-r">
                <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted">
                  All-segment access
                </p>
                <p className="mt-4 font-display text-6xl font-bold tracking-tight">
                  ₹4,999
                  <span className="font-body text-lg font-normal text-muted"> / 3 mo</span>
                </p>
                <p className="mt-4 font-mono text-[11px] text-primary">
                  ≈ ₹167 / day · all five desks
                </p>
                <a
                  href="#"
                  className="glow-btn mt-6 inline-flex items-center gap-2 bg-primary px-5 py-3 font-mono text-sm font-medium uppercase tracking-[0.1em] text-background"
                >
                  <span className="size-2 rounded-full bg-background" />
                  Join via WhatsApp
                </a>
              </div>
              <div className="px-8 py-8">
                <p className="mb-4 font-mono text-xs uppercase tracking-[0.15em] text-muted">
                  Included
                </p>
                <ul className="space-y-3 text-sm text-foreground/90">
                  {included.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="font-mono text-primary">/</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2 — WHAT YOU GET */}
      <section className="border-b border-border">
        <SectionHeading index="a" title="What the fee covers" aside="05 segments" />
        <div className="mx-auto max-w-[1200px] px-6 pb-14">
          <div className="grid border-t border-border sm:grid-cols-2 lg:grid-cols-5">
            {["Index Option", "Stock Option", "Commodity Option", "Intraday Stocks", "Short Term"].map(
              (name, i) => (
                <div key={name} className="border-b border-border py-6 pr-6">
                  <p className="font-mono text-[11px] text-muted">0{i + 1}</p>
                  <p className="mt-2 font-display text-lg font-bold tracking-tight">{name}</p>
                  <p className="mt-2 font-mono text-[11px] text-primary">Included</p>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* 3 — FAQ */}
      <section className="border-b border-border">
        <SectionHeading index="b" title="Questions" aside="Before you join" />
        <div className="mx-auto max-w-[1200px] px-6 pb-14">
          <div className="border-t border-border">
            {faqs.map((f, i) => (
              <div
                key={f.q}
                className={`grid gap-4 py-8 md:grid-cols-12 ${i < faqs.length - 1 ? "border-b border-border" : ""}`}
              >
                <div className="font-mono text-[11px] text-muted md:col-span-2">0{i + 1}</div>
                <div className="md:col-span-5">
                  <h3 className="font-display text-xl font-bold tracking-tight">{f.q}</h3>
                </div>
                <div className="md:col-span-5">
                  <p className="leading-relaxed text-muted">{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 — CTA */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1200px] px-6 py-20 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
            New members every Monday
          </p>
          <h2 className="mt-6 font-display text-4xl font-bold tracking-tight md:text-5xl">
            Start with one fee.
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="glow-btn inline-flex items-center gap-2 bg-primary px-6 py-3.5 font-mono text-sm font-medium uppercase tracking-[0.1em] text-background"
            >
              <span className="size-2 rounded-full bg-background" />
              Join on WhatsApp
            </a>
            <Link
              to="/segments"
              className="inline-flex items-center gap-2 border border-border px-6 py-3.5 font-mono text-sm uppercase tracking-[0.1em] text-foreground transition-colors hover:border-foreground/40"
            >
              <span className="size-2 rounded-full bg-muted" />
              Review the segments
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
