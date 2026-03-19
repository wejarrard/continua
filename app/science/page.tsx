import type { Metadata } from "next";

import { CitationList } from "@/components/citation-list";
import { FAQAccordion } from "@/components/faq-accordion";
import { MediaFrame } from "@/components/media-frame";
import { StructuredData } from "@/components/structured-data";
import {
  buildFaqSchema,
  buildMetadata,
  buildWebPageSchema,
} from "@/lib/seo";
import { siteContent } from "@/lib/site-content";

export const metadata: Metadata = buildMetadata(siteContent.science.seo);

export default function SciencePage() {
  return (
    <main className="pb-24 pt-10 sm:pt-14">
      <StructuredData
        data={[
          buildWebPageSchema({
            title: siteContent.science.seo.title,
            description: siteContent.science.seo.description,
            path: siteContent.science.seo.path,
          }),
          buildFaqSchema(siteContent.science.faqs),
        ]}
      />
      <section className="page-shell">
        <div className="max-w-3xl space-y-4">
          <p className="eyebrow">{siteContent.science.intro}</p>
          <h1 className="display-title text-5xl leading-[0.9] sm:text-6xl">
            {siteContent.science.title}
          </h1>
        </div>
      </section>

      <section className="page-shell mt-12 space-y-12 sm:space-y-16">
        {siteContent.science.sections.map((section, index) => (
          <article
            key={section.title}
            className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center"
          >
            <div className={index % 2 === 1 ? "lg:order-2" : undefined}>
              <MediaFrame
                asset={section.media}
                className="min-h-[24rem] sm:min-h-[30rem]"
                sizes="(min-width: 1024px) 44vw, 100vw"
              />
            </div>

            <div
              className={`space-y-5 ${index % 2 === 1 ? "lg:order-1" : ""}`}
            >
              <p className="eyebrow">{section.eyebrow}</p>
              <h2 className="display-title text-4xl leading-[0.96] sm:text-5xl">
                {section.title}
              </h2>
              <p className="max-w-2xl text-lg leading-8 text-[color:rgba(30,33,30,0.74)]">
                {section.body}
              </p>
            </div>
          </article>
        ))}
      </section>

      <section className="page-shell mt-16 space-y-10 sm:mt-20">
        <div className="max-w-3xl space-y-4">
          <p className="eyebrow">Science FAQ</p>
          <h2 className="display-title text-4xl leading-[0.96] sm:text-5xl">
            Direct answers women actually search for.
          </h2>
          <p className="text-lg leading-8 text-[color:rgba(30,33,30,0.74)]">
            These answers are intentionally concise and citation-led so they can
            support both human readers and AI-driven search summaries.
          </p>
        </div>
        <FAQAccordion items={siteContent.science.faqs} />
      </section>

      <section className="page-shell mt-16 sm:mt-20">
        <CitationList items={siteContent.science.citations} />
      </section>
    </main>
  );
}
