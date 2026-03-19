import type { Metadata } from "next";

import { StructuredData } from "@/components/structured-data";
import { buildMetadata, buildWebPageSchema } from "@/lib/seo";
import { siteContent } from "@/lib/site-content";

export const metadata: Metadata = buildMetadata({
  title: siteContent.medicalDisclaimer.title,
  description: siteContent.medicalDisclaimer.intro,
  path: "/medical-disclaimer",
  noIndex: true,
});

export default function MedicalDisclaimerPage() {
  const { medicalDisclaimer } = siteContent;

  return (
    <main className="pb-24 pt-10 sm:pt-14">
      <StructuredData
        data={buildWebPageSchema({
          title: siteContent.medicalDisclaimer.title,
          description: siteContent.medicalDisclaimer.intro,
          path: "/medical-disclaimer",
        })}
      />
      <section className="page-shell max-w-4xl">
        <div className="space-y-4">
          <p className="eyebrow">Legal</p>
          <h1 className="display-title text-5xl leading-[0.92] sm:text-6xl">
            {medicalDisclaimer.title}
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-[color:rgba(30,33,30,0.72)]">
            {medicalDisclaimer.intro}
          </p>
        </div>

        <div className="mt-10 space-y-5">
          {medicalDisclaimer.sections.map((section) => (
            <article key={section.title} className="surface-card p-7 sm:p-8">
              <h2 className="font-display text-3xl leading-tight text-[var(--continua-charcoal)]">
                {section.title}
              </h2>
              <p className="mt-4 text-base leading-7 text-[color:rgba(30,33,30,0.72)]">
                {section.body}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
