"use client";

import { useState } from "react";

import { WaitlistModal } from "./waitlist-modal";

type ProductPurchasePanelProps = {
  title: string;
  price: string;
  subscriptionPrice: string;
  subscriptionSavingsLabel: string;
  description: string;
  buttonLabel: string;
  subscriptionButtonLabel: string;
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

const expressWallets = [
  { id: "apple-pay", label: "Apple Pay" },
  { id: "shop-pay", label: "Shop Pay" },
  { id: "google-pay", label: "Google Pay" },
] as const;

function walletButtonClass(walletId: (typeof expressWallets)[number]["id"]) {
  if (walletId === "apple-pay") {
    return "border-black bg-black text-white hover:bg-[#111111]";
  }

  if (walletId === "shop-pay") {
    return "border-[#5a31f4] bg-[#5a31f4] text-white hover:bg-[#4c29d1]";
  }

  return "border-[rgba(30,33,30,0.14)] bg-white text-[var(--continua-charcoal)] hover:border-[rgba(30,33,30,0.24)] hover:bg-[rgba(255,255,255,0.96)]";
}

function ApplePayMark() {
  return (
    <span className="inline-flex items-center justify-center gap-2">
      <svg
        aria-hidden="true"
        viewBox="0 0 20 24"
        className="h-5 w-5 fill-current"
      >
        <path d="M14.16 12.73c.03 3.18 2.79 4.24 2.82 4.25-.02.08-.44 1.5-1.44 2.98-.86 1.27-1.76 2.54-3.17 2.57-1.39.03-1.84-.82-3.44-.82-1.6 0-2.1.79-3.41.85-1.36.05-2.4-1.36-3.27-2.63-1.78-2.57-3.14-7.27-1.31-10.44.91-1.57 2.54-2.56 4.3-2.59 1.34-.03 2.61.91 3.44.91.83 0 2.4-1.13 4.04-.96.69.03 2.64.28 3.9 2.11-.1.06-2.33 1.36-2.3 3.77ZM11.66 4.86c.72-.87 1.2-2.09 1.07-3.29-1.04.04-2.3.69-3.04 1.56-.67.77-1.25 2.01-1.09 3.19 1.16.09 2.34-.59 3.06-1.46Z" />
      </svg>
      <span className="text-[1.02rem] font-semibold tracking-[-0.04em]">
        Pay
      </span>
    </span>
  );
}

function ShopPayMark() {
  return (
    <span className="inline-flex items-center justify-center gap-1.5">
      <span className="text-[0.98rem] font-bold lowercase tracking-[-0.04em]">
        shop
      </span>
      <span className="text-[0.98rem] font-semibold tracking-[-0.04em]">
        Pay
      </span>
    </span>
  );
}

function GooglePayMark() {
  return (
    <span className="inline-flex items-center justify-center gap-2">
      <span
        aria-hidden="true"
        className="text-lg font-semibold tracking-[-0.06em]"
      >
        <span className="text-[#4285f4]">G</span>
        <span className="text-[#ea4335]">o</span>
        <span className="text-[#fbbc05]">o</span>
        <span className="text-[#4285f4]">g</span>
        <span className="text-[#34a853]">l</span>
        <span className="text-[#ea4335]">e</span>
      </span>
      <span className="text-[1rem] font-medium tracking-[-0.03em] text-[rgba(60,64,67,0.92)]">
        Pay
      </span>
    </span>
  );
}

function WalletMark({
  walletId,
}: {
  walletId: (typeof expressWallets)[number]["id"];
}) {
  if (walletId === "apple-pay") {
    return <ApplePayMark />;
  }

  if (walletId === "shop-pay") {
    return <ShopPayMark />;
  }

  return <GooglePayMark />;
}

export function ProductPurchasePanel({
  title,
  price,
  subscriptionPrice,
  subscriptionSavingsLabel,
  description,
  buttonLabel,
  subscriptionButtonLabel,
  details,
  waitlist,
}: ProductPurchasePanelProps) {
  const [open, setOpen] = useState(false);
  const [purchaseType, setPurchaseType] = useState<"one-time" | "subscription">(
    "one-time",
  );

  const ctaLabel =
    purchaseType === "subscription" ? subscriptionButtonLabel : buttonLabel;

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

          <div className="space-y-3">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[color:rgba(30,33,30,0.56)]">
              Purchase options
            </p>
            <div className="grid gap-3">
              <button
                type="button"
                onClick={() => setPurchaseType("one-time")}
                className={`rounded-[1.25rem] border px-4 py-4 text-left transition ${
                  purchaseType === "one-time"
                    ? "border-[var(--continua-charcoal)] bg-white shadow-[0_10px_24px_rgba(36,23,20,0.08)]"
                    : "border-[color:rgba(30,33,30,0.1)] bg-white/60 hover:border-[color:rgba(30,33,30,0.2)]"
                }`}
                aria-pressed={purchaseType === "one-time"}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--continua-charcoal)]">
                      One-time purchase
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-[0.16em] text-[color:rgba(30,33,30,0.52)]">
                      Ships once
                    </p>
                  </div>
                  <p className="text-2xl tracking-[-0.04em] text-[var(--continua-charcoal)]">
                    {price}
                  </p>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setPurchaseType("subscription")}
                className={`rounded-[1.25rem] border px-4 py-4 text-left transition ${
                  purchaseType === "subscription"
                    ? "border-[var(--continua-amber-deep)] bg-[rgba(255,252,246,0.9)] shadow-[0_10px_24px_rgba(90,60,24,0.1)]"
                    : "border-[color:rgba(166,145,92,0.18)] bg-[rgba(255,252,246,0.6)] hover:border-[color:rgba(166,145,92,0.32)]"
                }`}
                aria-pressed={purchaseType === "subscription"}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--continua-charcoal)]">
                      Monthly subscription
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-[0.16em] text-[var(--continua-amber-deep)]">
                      {subscriptionSavingsLabel}
                    </p>
                  </div>
                  <p className="text-2xl tracking-[-0.04em] text-[var(--continua-charcoal)]">
                    {subscriptionPrice}
                  </p>
                </div>
              </button>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex min-h-16 w-full items-center justify-center rounded-full bg-[var(--continua-charcoal)] px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--continua-alabaster)] transition hover:bg-[rgb(24,26,24)]"
          >
            {ctaLabel}
          </button>

          <div className="space-y-3">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[color:rgba(30,33,30,0.56)]">
              Express checkout
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              {expressWallets.map((wallet) => (
                <button
                  key={wallet.id}
                  type="button"
                  onClick={() => setOpen(true)}
                  className={`inline-flex min-h-[3.25rem] items-center justify-center rounded-[1rem] border px-4 py-3 shadow-[0_8px_20px_rgba(36,23,20,0.08)] transition ${walletButtonClass(wallet.id)}`}
                  aria-label={wallet.label}
                >
                  <WalletMark walletId={wallet.id} />
                </button>
              ))}
            </div>
          </div>

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
