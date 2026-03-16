import type { Metadata } from "next";

import { MediaFrame } from "@/components/media-frame";
import { siteContent } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Doctor's Note",
  description: siteContent.doctorNote.paragraphs[0],
};

export default function DoctorsNotePage() {
  const { doctorNote } = siteContent;

  return (
    <main className="pb-24 pt-10 sm:pt-14">
      <section className="page-shell">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-start">
          <MediaFrame
            asset={doctorNote.portrait}
            className="min-h-[28rem] sm:min-h-[38rem]"
            sizes="(min-width: 1024px) 36vw, 100vw"
          />

          <article className="surface-card p-8 sm:p-10">
            <p className="eyebrow">{doctorNote.eyebrow}</p>
            <h1 className="display-title mt-5 text-5xl leading-[0.9] sm:text-6xl">
              {doctorNote.title}
            </h1>
            <div className="mt-8 space-y-6 text-lg leading-8 text-[color:rgba(30,33,30,0.74)]">
              {doctorNote.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--continua-sage-deep)]">
              {doctorNote.signoff}
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
