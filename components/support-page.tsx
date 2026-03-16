import type { SupportPageConfig } from "@/lib/site-content";

import { ActionLink } from "./action-link";
import { SectionHeading } from "./section-heading";

type SupportPageProps = {
  page: SupportPageConfig;
};

export function SupportPage({ page }: SupportPageProps) {
  return (
    <main className="space-y-20 pb-24 pt-10 sm:space-y-24 sm:pt-14">
      <section className="page-shell">
        <SectionHeading
          eyebrow={page.eyebrow}
          title={page.title}
          body={page.intro}
          className="max-w-4xl"
        />
      </section>

      <section className="page-shell">
        <div className="grid gap-6 lg:grid-cols-2">
          {page.sections.map((section) => (
            <article key={section.title} className="surface-card p-8">
              <h2 className="font-display text-3xl leading-tight text-[var(--continua-charcoal)]">
                {section.title}
              </h2>
              <p className="mt-4 text-base leading-7 text-[color:rgba(41,43,45,0.74)]">
                {section.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      {page.action || page.note ? (
        <section className="page-shell">
          <div className="surface-card flex flex-col gap-6 p-8 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl space-y-3">
              <p className="eyebrow">Next step</p>
              <p className="text-lg leading-8 text-[color:rgba(41,43,45,0.74)]">
                {page.note ??
                  "This destination is ready for the next integration step when operations, support, or account tooling is connected."}
              </p>
            </div>
            {page.action ? (
              <div className="w-full max-w-sm">
                <ActionLink action={page.action} fullWidth />
              </div>
            ) : null}
          </div>
        </section>
      ) : null}
    </main>
  );
}
