import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CitationList } from "@/components/citation-list";
import { FAQAccordion } from "@/components/faq-accordion";
import { StructuredData } from "@/components/structured-data";
import {
  buildArticleSchema,
  buildFaqSchema,
  buildMetadata,
  buildWebPageSchema,
} from "@/lib/seo";
import { getJournalEntry } from "@/lib/site-content";

type JournalEntryPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const { siteContent } = await import("@/lib/site-content");

  return siteContent.journal.entries.map((entry) => ({
    slug: entry.slug,
  }));
}

export async function generateMetadata({
  params,
}: JournalEntryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = getJournalEntry(slug);

  if (!entry) {
    return {};
  }

  return buildMetadata({
    title: entry.title,
    description: entry.description,
    path: `/journal/${entry.slug}`,
    keywords: entry.keywords,
  });
}

export default async function JournalEntryPage({
  params,
}: JournalEntryPageProps) {
  const { slug } = await params;
  const entry = getJournalEntry(slug);

  if (!entry) {
    notFound();
  }

  return (
    <main className="pb-24 pt-10 sm:pt-14">
      <StructuredData
        data={[
          buildWebPageSchema({
            title: entry.title,
            description: entry.description,
            path: `/journal/${entry.slug}`,
          }),
          buildArticleSchema({
            title: entry.title,
            description: entry.description,
            path: `/journal/${entry.slug}`,
            datePublished: entry.publishedAt,
            dateModified: entry.modifiedAt,
            keywords: entry.keywords,
          }),
          buildFaqSchema(entry.faqs),
        ]}
      />

      <section className="page-shell">
        <div className="max-w-4xl space-y-5">
          <Link
            href="/journal"
            className="inline-flex text-xs font-semibold uppercase tracking-[0.22em] text-[var(--continua-amber-deep)] transition hover:opacity-75"
          >
            Back to journal
          </Link>
          <p className="eyebrow">{entry.eyebrow}</p>
          <h1 className="display-title text-5xl leading-[0.92] sm:text-6xl lg:text-7xl">
            {entry.title}
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-[color:rgba(30,33,30,0.74)] sm:text-xl">
            {entry.description}
          </p>
          <div className="flex flex-wrap gap-3">
            {entry.supportingPoints.map((point) => (
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

      <section className="page-shell mt-12">
        <div className="surface-card p-8 sm:p-10">
          <p className="eyebrow">Answer first</p>
          <p className="mt-4 max-w-3xl text-xl leading-9 text-[color:rgba(30,33,30,0.82)] sm:text-2xl">
            {entry.answer}
          </p>
        </div>
      </section>

      <section className="page-shell mt-16 space-y-12 sm:mt-20 sm:space-y-16">
        {entry.sections.map((section) => (
          <article key={section.title} className="grid gap-6 lg:grid-cols-[minmax(0,0.32fr)_minmax(0,0.68fr)]">
            <div>
              <p className="eyebrow">Section</p>
              <h2 className="display-title mt-4 text-4xl leading-[0.96] sm:text-5xl">
                {section.title}
              </h2>
            </div>
            <div className="space-y-5">
              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-lg leading-8 text-[color:rgba(30,33,30,0.74)]"
                >
                  {paragraph}
                </p>
              ))}
              {section.bullets ? (
                <ul className="grid gap-3">
                  {section.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="rounded-[1.4rem] border border-[color:rgba(30,33,30,0.08)] bg-white/70 px-5 py-4 text-base leading-7 text-[color:rgba(30,33,30,0.74)]"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </article>
        ))}
      </section>

      <section className="page-shell mt-16 space-y-10 sm:mt-20">
        <div className="max-w-3xl space-y-4">
          <p className="eyebrow">Article FAQ</p>
          <h2 className="display-title text-4xl leading-[0.96] sm:text-5xl">
            The follow-up questions behind the search query.
          </h2>
          <p className="text-lg leading-8 text-[color:rgba(30,33,30,0.74)]">
            Each article includes visible Q&amp;A so the page can answer the
            main query directly and still cover the related questions readers
            usually ask next.
          </p>
        </div>
        <FAQAccordion items={entry.faqs} />
      </section>

      <section className="page-shell mt-16 space-y-6 sm:mt-20">
        <div className="surface-card p-8 sm:p-10">
          <p className="eyebrow">Keep exploring</p>
          <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Link
              href={entry.cta.href ?? "/shop#buy-box"}
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--continua-charcoal)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[rgb(24,26,24)]"
            >
              {entry.cta.label}
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
        <CitationList items={entry.citations} />
      </section>
    </main>
  );
}
