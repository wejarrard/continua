"use client";

import { useState } from "react";

import { WaitlistModal } from "./waitlist-modal";

type ProductPurchasePanelProps = {
  title: string;
  price: string;
  description: string;
  buttonLabel: string;
  details: readonly string[];
  waitlist: {
    title: string;
    body: string;
    subtext: string;
    inputLabel: string;
    inputPlaceholder: string;
    actionLabel: string;
    successTitle: string;
    successBody: string;
  };
};

export function ProductPurchasePanel({
  title,
  price,
  description,
  buttonLabel,
  details,
  waitlist,
}: ProductPurchasePanelProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <aside className="surface-card lg:sticky lg:top-28">
        <div className="space-y-6 p-7 sm:p-8">
          <div className="space-y-3">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--continua-amber-deep)]">
              Buy box
            </p>
            <h1 className="font-display text-4xl leading-[0.96] tracking-[-0.05em] text-[var(--continua-charcoal)] sm:text-[2.9rem]">
              {title}
            </h1>
            <p className="text-4xl leading-none tracking-[-0.05em] text-[var(--continua-charcoal)]">
              {price}
            </p>
            <p className="max-w-lg text-base leading-7 text-[color:rgba(30,33,30,0.72)]">
              {description}
            </p>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex min-h-16 w-full items-center justify-center rounded-full bg-[var(--continua-charcoal)] px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--continua-alabaster)] transition hover:bg-[rgb(24,26,24)]"
          >
            {buttonLabel}
          </button>

          <dl className="grid gap-3 border-t border-[color:rgba(30,33,30,0.08)] pt-6">
            {details.map((detail) => (
              <div
                key={detail}
                className="rounded-[1.25rem] border border-[color:rgba(30,33,30,0.08)] bg-white/70 px-4 py-4 text-sm leading-6 text-[color:rgba(30,33,30,0.7)]"
              >
                {detail}
              </div>
            ))}
          </dl>
        </div>
      </aside>

      <WaitlistModal
        open={open}
        onClose={() => setOpen(false)}
        content={waitlist}
      />
    </>
  );
}
