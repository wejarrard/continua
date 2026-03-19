import type { Citation } from "@/lib/site-content";

type CitationListProps = {
  items: readonly Citation[];
};

export function CitationList({ items }: CitationListProps) {
  return (
    <section className="space-y-5">
      <div className="space-y-2">
        <p className="eyebrow">References</p>
        <h2 className="display-title text-3xl leading-[1.02] sm:text-4xl">
          Research behind this page.
        </h2>
      </div>

      <div className="grid gap-4">
        {items.map((item) => (
          <article key={item.href} className="surface-card p-6 sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--continua-amber-deep)]">
              {item.source}
            </p>
            <h3 className="mt-3 font-display text-2xl leading-tight text-[var(--continua-charcoal)]">
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="transition hover:opacity-75"
              >
                {item.title}
              </a>
            </h3>
            <p className="mt-3 text-base leading-7 text-[color:rgba(30,33,30,0.72)]">
              {item.note}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
