import type { BenefitCardConfig } from "@/lib/site-content";

type BenefitCardProps = {
  item: BenefitCardConfig;
};

export function BenefitCard({ item }: BenefitCardProps) {
  return (
    <article className="surface-card h-full p-7 sm:p-8">
      <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-full border border-[color:rgba(166,145,92,0.3)] bg-[rgba(255,255,255,0.74)] text-[11px] font-bold uppercase tracking-[0.24em] text-[var(--continua-slate)]">
        {item.icon}
      </div>
      <h3 className="font-display text-3xl leading-tight text-[var(--continua-charcoal)]">
        {item.title}
      </h3>
      <p className="mt-4 text-base leading-7 text-[color:rgba(41,43,45,0.74)]">
        {item.body}
      </p>
    </article>
  );
}
