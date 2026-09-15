const items = [
  "Index Options",
  "Stock Options",
  "Commodity Options",
  "Intraday Stocks",
  "Short Term Investment",
];

function Row({ hidden = false }: { hidden?: boolean }) {
  return (
    <span
      aria-hidden={hidden || undefined}
      className="flex items-center font-mono text-xs uppercase tracking-[0.2em] text-muted"
    >
      {items.map((item) => (
        <span key={item} className="flex items-center">
          <span className="mx-6">{item}</span>
          <span className="text-primary">◆</span>
        </span>
      ))}
    </span>
  );
}

export function SegmentTicker() {
  return (
    <div className="overflow-hidden border-b border-border py-3">
      <div className="ticker-track flex w-max whitespace-nowrap">
        <Row />
        <Row hidden />
      </div>
    </div>
  );
}
