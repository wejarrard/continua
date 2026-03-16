import Link from "next/link";

import { siteContent } from "@/lib/site-content";

export function SiteFooter() {
  return (
    <footer className="border-t border-[color:rgba(30,33,30,0.08)] pb-10 pt-16">
      <div className="page-shell flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl space-y-3">
          <p className="font-display text-3xl leading-none tracking-[-0.06em] text-[var(--continua-charcoal)]">
            {siteContent.site.name}
          </p>
          <p className="max-w-xl text-sm leading-6 text-[color:rgba(30,33,30,0.62)]">
            {siteContent.site.footerNote}
          </p>
        </div>

        <Link
          href={siteContent.footer.legalHref}
          className="inline-flex w-fit rounded-full border border-[color:rgba(30,33,30,0.14)] bg-white/70 px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--continua-charcoal)] transition hover:border-[color:rgba(30,33,30,0.24)] hover:bg-white"
        >
          {siteContent.footer.legalLabel}
        </Link>
      </div>
    </footer>
  );
}
