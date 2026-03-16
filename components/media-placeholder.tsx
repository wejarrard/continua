import type { MediaPlaceholderConfig } from "@/lib/site-content";
import { cn } from "@/lib/utils";

type MediaPlaceholderProps = {
  media: MediaPlaceholderConfig;
  aspect?: "wide" | "portrait" | "square" | "cinematic";
  className?: string;
};

const toneClasses = {
  slate:
    "from-[rgba(83,100,124,0.25)] via-[rgba(83,100,124,0.08)] to-[rgba(255,255,255,0.92)]",
  sage:
    "from-[rgba(135,157,143,0.24)] via-[rgba(135,157,143,0.1)] to-[rgba(255,255,255,0.92)]",
  brass:
    "from-[rgba(166,145,92,0.25)] via-[rgba(166,145,92,0.08)] to-[rgba(255,255,255,0.95)]",
} as const;

const orbClasses = {
  slate: "bg-[rgba(83,100,124,0.18)]",
  sage: "bg-[rgba(135,157,143,0.18)]",
  brass: "bg-[rgba(166,145,92,0.18)]",
} as const;

const aspectClasses = {
  wide: "aspect-[16/10]",
  portrait: "aspect-[4/5]",
  square: "aspect-square",
  cinematic: "aspect-[16/9]",
} as const;

export function MediaPlaceholder({
  media,
  aspect = "wide",
  className,
}: MediaPlaceholderProps) {
  return (
    <div
      className={cn(
        "relative isolate overflow-hidden rounded-[2rem] border border-[color:rgba(83,100,124,0.12)] bg-[var(--continua-cream)] shadow-[0_26px_90px_rgba(98,109,126,0.12)]",
        aspectClasses[aspect],
        className,
      )}
    >
      <div
        className={cn(
          "absolute inset-0 bg-linear-to-br",
          toneClasses[media.tone],
        )}
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.42)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.42)_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-50" />
      <div
        className={cn(
          "absolute -left-10 top-8 h-36 w-36 rounded-full blur-2xl",
          orbClasses[media.tone],
        )}
      />
      <div
        className={cn(
          "absolute bottom-6 right-6 h-40 w-40 rounded-full blur-3xl",
          orbClasses[media.tone],
        )}
      />
      <div className="absolute inset-5 rounded-[1.6rem] border border-white/60" />
      <div className="relative flex h-full flex-col justify-between p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <span className="rounded-full border border-white/60 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--continua-charcoal)]">
            {media.label}
          </span>
          <span className="rounded-full border border-[color:rgba(83,100,124,0.12)] bg-[rgba(255,255,255,0.5)] px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-[color:rgba(41,43,45,0.54)]">
            Placeholder
          </span>
        </div>
        <div className="max-w-xl space-y-4">
          <p className="font-display text-3xl leading-[1.02] text-[var(--continua-charcoal)] sm:text-4xl">
            {media.title}
          </p>
          <p className="max-w-lg text-base leading-7 text-[color:rgba(41,43,45,0.74)]">
            {media.description}
          </p>
        </div>
      </div>
    </div>
  );
}
