import type { Metadata } from "next";
import Link from "next/link";

import { CitationList } from "@/components/citation-list";
import { FAQAccordion } from "@/components/faq-accordion";
import { StructuredData } from "@/components/structured-data";
import {
  buildFaqSchema,
  buildMetadata,
  buildWebPageSchema,
} from "@/lib/seo";
import type { Citation } from "@/lib/site-content";
import { siteContent } from "@/lib/site-content";

export const metadata: Metadata = buildMetadata(siteContent.journal.seo);

export default function JournalPage() {
  const { journal } = siteContent;
  const allCitations: Citation[] = Array.from(
    new Map(
      journal.entries
        .flatMap((entry) => [...entry.citations] as Citation[])
        .map((citation) => [citation.href, citation]),
    ).values(),
  );

  return (
    <main className="pb-24 pt-10 sm:pt-14">
      <StructuredData
        data={[
          buildWebPageSchema({
            title: journal.seo.title,
            description: journal.seo.description,
            path: journal.seo.path,
          }),
          buildFaqSchema(journal.faqs),
        ]}
      />

      <section className="page-shell">
        <div className="max-w-4xl space-y-5">
          <p className="eyebrow">{journal.eyebrow}</p>
          <h1 className="display-title text-5xl leading-[0.92] sm:text-6xl lg:text-7xl">
            {journal.title}
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-[color:rgba(30,33,30,0.74)] sm:text-xl">
            {journal.intro}
          </p>
          <div className="flex flex-wrap gap-3">
            {journal.supportingPoints.map((point) => (
              <span
                key={point}
                className="rounded-full border border-[color:rgba(30,33,30,0.12)] bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[color:rgba(30,33,30,0.66)]"
              >
                {point}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell mt-14 sm:mt-16">
        <div className="grid gap-6 lg:grid-cols-2">
          {journal.entries.map((entry) => (
            <article key={entry.slug} className="surface-card p-8 sm:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--continua-amber-deep)]">
                {entry.eyebrow}
              </p>
              <h2 className="mt-4 font-display text-4xl leading-[0.96] tracking-[-0.05em] text-[var(--continua-charcoal)]">
                {entry.title}
              </h2>
              <p className="mt-4 text-base leading-7 text-[color:rgba(30,33,30,0.72)]">
                {entry.description}
              </p>
              <p className="mt-5 text-base leading-7 text-[color:rgba(30,33,30,0.8)]">
                {entry.answer}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {entry.supportingPoints.map((point) => (
                  <span
                    key={point}
                    className="rounded-full border border-[color:rgba(30,33,30,0.1)] bg-[rgba(255,255,255,0.72)] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[color:rgba(30,33,30,0.62)]"
                  >
                    {point}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href={`/journal/${entry.slug}`}
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--continua-charcoal)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[rgb(24,26,24)]"
                >
                  Read article
                </Link>
                <Link
                  href={entry.cta.href ?? "/shop#buy-box"}
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-[color:rgba(30,33,30,0.12)] bg-white/70 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--continua-charcoal)] transition hover:border-[color:rgba(30,33,30,0.2)] hover:bg-white"
                >
                  {entry.cta.label}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="page-shell mt-16 space-y-10 sm:mt-20">
        <div className="max-w-3xl space-y-4">
          <p className="eyebrow">Journal FAQ</p>
          <h2 className="display-title text-4xl leading-[0.96] sm:text-5xl">
            The direct answers behind the content hub.
          </h2>
          <p className="text-lg leading-8 text-[color:rgba(30,33,30,0.74)]">
            This hub is designed to answer real midlife search intent in a way
            that is concise enough for search engines and useful enough for a
            person making a decision.
          </p>
        </div>
        <FAQAccordion items={journal.faqs} />
      </section>

      <section className="page-shell mt-16 space-y-6 sm:mt-20">
        <div className="surface-card p-8 sm:p-10">
          <p className="eyebrow">Where to next</p>
          <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Link
              href="/shop#buy-box"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--continua-charcoal)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[rgb(24,26,24)]"
            >
              Shop Restore by Continua
            </Link>
            <Link
              href="/science"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[color:rgba(30,33,30,0.12)] bg-white/70 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--continua-charcoal)] transition hover:border-[color:rgba(30,33,30,0.2)] hover:bg-white"
            >
              Explore the science
            </Link>
            <Link
              href="/doctors-note"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[color:rgba(30,33,30,0.12)] bg-white/70 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--continua-charcoal)] transition hover:border-[color:rgba(30,33,30,0.2)] hover:bg-white"
            >
              Read Dr. Kane&apos;s note
            </Link>
          </div>
        </div>
      </section>

      <section className="page-shell mt-16 sm:mt-20">
        <CitationList items={allCitations} />
      </section>
    </main>
  );
}
