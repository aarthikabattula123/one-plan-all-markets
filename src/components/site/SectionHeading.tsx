import type { ReactNode } from "react";

export function SectionHeading({
  index,
  title,
  aside,
}: {
  index: string;
  title: ReactNode;
  aside?: string;
}) {
  return (
    <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-8">
      <div className="flex items-center gap-5">
        <span className="font-mono text-xs text-primary">({index})</span>
        <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">{title}</h2>
      </div>
      {aside ? (
        <span className="hidden font-mono text-[11px] uppercase tracking-[0.15em] text-muted sm:block">
          {aside}
        </span>
      ) : null}
    </div>
  );
}
