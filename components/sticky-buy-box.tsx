import type { ActionLinkConfig } from "@/lib/site-content";

import { ActionLink } from "./action-link";

type StickyBuyBoxProps = {
  productName: string;
  subhead: string;
  pricing: {
    oneTime: string;
    subscription: string;
    subscriptionLabel: string;
    servings: string;
  };
  badges: readonly string[];
  actions: {
    purchase: ActionLinkConfig;
    subscribe: ActionLinkConfig;
  };
  specs: readonly {
    label: string;
    value: string;
  }[];
};

export function StickyBuyBox({
  productName,
  subhead,
  pricing,
  badges,
  actions,
  specs,
}: StickyBuyBoxProps) {
  return (
    <aside className="surface-card lg:sticky lg:top-28">
      <div className="border-b border-[color:rgba(83,100,124,0.12)] p-8">
        <p className="eyebrow">Buy box</p>
        <h1 className="mt-4 font-display text-4xl leading-tight text-[var(--continua-charcoal)]">
          {productName}
        </h1>
        <p className="mt-4 text-base leading-7 text-[color:rgba(41,43,45,0.74)]">
          {subhead}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {badges.map((badge) => (
            <span key={badge} className="pill">
              {badge}
            </span>
          ))}
        </div>
      </div>

      <div className="space-y-8 p-8">
        <div className="grid gap-4">
          <div className="rounded-[1.5rem] border border-[color:rgba(83,100,124,0.12)] bg-white/80 p-5">
            <div className="flex items-baseline justify-between gap-4">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--continua-slate)]">
                One-time purchase
              </p>
              <p className="font-display text-4xl text-[var(--continua-charcoal)]">
                {pricing.oneTime}
              </p>
            </div>
          </div>
          <div className="rounded-[1.5rem] border border-[color:rgba(166,145,92,0.18)] bg-[rgba(255,252,246,0.95)] p-5">
            <div className="flex items-baseline justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--continua-slate)]">
                  {pricing.subscriptionLabel}
                </p>
                <p className="mt-2 text-sm leading-6 text-[color:rgba(41,43,45,0.7)]">
                  Thirty single-serve sachets in every shipment.
                </p>
              </div>
              <p className="font-display text-4xl text-[var(--continua-charcoal)]">
                {pricing.subscription}
              </p>
            </div>
          </div>
          <p className="text-sm uppercase tracking-[0.22em] text-[color:rgba(41,43,45,0.56)]">
            {pricing.servings}
          </p>
        </div>

        <div className="space-y-4">
          <ActionLink action={actions.subscribe} fullWidth />
          <ActionLink
            action={actions.purchase}
            variant="secondary"
            fullWidth
          />
        </div>

        <dl className="grid gap-4">
          {specs.map((spec) => (
            <div
              key={spec.label}
              className="flex items-center justify-between gap-4 border-b border-[color:rgba(83,100,124,0.12)] pb-4 last:border-none last:pb-0"
            >
              <dt className="text-sm uppercase tracking-[0.18em] text-[color:rgba(41,43,45,0.56)]">
                {spec.label}
              </dt>
              <dd className="text-sm font-semibold text-[var(--continua-charcoal)]">
                {spec.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </aside>
  );
}
