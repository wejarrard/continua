import type { QuoteConfig } from "@/lib/site-content";

export function QuoteBlock({ quote, attribution, note }: QuoteConfig) {
  return (
    <blockquote className="surface-card space-y-5 p-8 sm:p-10">
      <p className="font-display text-3xl leading-[1.08] text-[var(--continua-charcoal)] sm:text-[2.6rem]">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="space-y-1">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--continua-slate)]">
          {attribution}
        </p>
        {note ? (
          <p className="text-sm leading-6 text-[color:rgba(41,43,45,0.64)]">
            {note}
          </p>
        ) : null}
      </div>
    </blockquote>
  );
}
