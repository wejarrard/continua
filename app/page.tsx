import type { Metadata } from "next";
import Link from "next/link";

import { MediaFrame } from "@/components/media-frame";
import { siteContent } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "5g Creatine. 2g Matcha. Nothing else.",
  description: siteContent.home.hero.body,
};

export default function HomePage() {
  const { hero, transparency, ingredients } = siteContent.home;

  return (
    <main className="pb-24 pt-8 sm:pt-12">
      <section className="page-shell">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:items-stretch">
          <div className="surface-card flex flex-col justify-between p-8 sm:p-10 lg:p-14">
            <div className="space-y-8">
              <p className="eyebrow">The no B.S. pitch</p>
              <div className="space-y-6">
                <h1 className="display-title text-5xl leading-[0.9] sm:text-6xl lg:text-7xl">
                  {hero.title}
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-[color:rgba(30,33,30,0.74)] sm:text-xl">
                  {hero.body}
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <Link
                href={hero.action.href}
                className="inline-flex min-h-14 items-center justify-center rounded-full bg-[var(--continua-charcoal)] px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] !text-white transition hover:bg-[rgb(24,26,24)]"
              >
                {hero.action.label}
              </Link>
              <p className="max-w-sm text-sm leading-6 text-[color:rgba(30,33,30,0.56)]">
                Clinically dosed creatine monohydrate plus ceremonial matcha,
                packed into a single morning sachet.
              </p>
            </div>
          </div>

          <MediaFrame
            asset={hero.media}
            className="min-h-[26rem] sm:min-h-[36rem] lg:min-h-[42rem]"
            priority
            sizes="(min-width: 1024px) 48vw, 100vw"
          />
        </div>
      </section>

      <section className="page-shell mt-20 sm:mt-24">
        <div className="space-y-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">{transparency.eyebrow}</p>
            <h2 className="display-title mt-5 text-4xl leading-[0.98] sm:text-5xl">
              {transparency.title}
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.18fr)_minmax(0,0.82fr)] lg:items-start">
            <div className="surface-card p-8 sm:p-10">
              <p className="text-lg leading-8 text-[color:rgba(30,33,30,0.76)]">
                {transparency.body}
              </p>
            </div>
            <div className="space-y-5 border-t border-[color:rgba(30,33,30,0.1)] pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <p className="font-display text-3xl leading-tight text-[var(--continua-charcoal)] sm:text-4xl">
                {transparency.pullQuote}
              </p>
              <p className="text-sm leading-6 text-[color:rgba(30,33,30,0.56)]">
                We removed the sports powder language and kept the dose, the
                ritual, and the reason.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="page-shell mt-20 sm:mt-24">
        <div className="border-y border-[color:rgba(30,33,30,0.08)] py-10 sm:py-14">
          <div className="space-y-8">
            <div className="max-w-2xl">
              <p className="eyebrow">{ingredients.eyebrow}</p>
              <h2 className="display-title mt-5 text-4xl leading-[0.98] sm:text-5xl">
                {ingredients.title}
              </h2>
            </div>

            <div className="divide-y divide-[color:rgba(30,33,30,0.08)]">
              {ingredients.items.map((item) => (
                <article
                  key={item.name}
                  className="grid gap-3 py-6 sm:grid-cols-[minmax(0,0.34fr)_minmax(0,0.66fr)] sm:gap-8"
                >
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--continua-sage-deep)]">
                      {item.amount}
                    </p>
                    <h3 className="mt-3 font-display text-3xl leading-tight text-[var(--continua-charcoal)]">
                      {item.name}
                    </h3>
                  </div>
                  <p className="max-w-2xl text-base leading-7 text-[color:rgba(30,33,30,0.72)]">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>

            <p className="text-sm leading-6 text-[color:rgba(30,33,30,0.54)]">
              {ingredients.note}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
