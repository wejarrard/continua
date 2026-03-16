import Link from "next/link";

import type { ActionLinkConfig } from "@/lib/site-content";
import { cn } from "@/lib/utils";

type ActionLinkProps = {
  action: ActionLinkConfig;
  variant?: "primary" | "secondary" | "quiet";
  className?: string;
  fullWidth?: boolean;
};

const variantClasses = {
  primary:
    "border border-[color:rgba(101,116,105,0.18)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(244,247,242,0.94))] text-[var(--continua-charcoal)] shadow-[0_16px_45px_rgba(101,116,105,0.12)] hover:-translate-y-0.5 hover:border-[color:rgba(101,116,105,0.3)] hover:bg-[linear-gradient(180deg,rgba(255,255,255,1),rgba(240,245,237,0.98))]",
  secondary:
    "border border-[color:rgba(83,100,124,0.22)] bg-white/85 text-[var(--continua-charcoal)] hover:-translate-y-0.5 hover:border-[color:rgba(83,100,124,0.36)] hover:bg-white",
  quiet:
    "border border-[color:rgba(166,145,92,0.28)] bg-[var(--continua-cream)] text-[var(--continua-charcoal)] hover:-translate-y-0.5 hover:border-[color:rgba(166,145,92,0.42)]",
} as const;

export function ActionLink({
  action,
  variant = "primary",
  className,
  fullWidth = false,
}: ActionLinkProps) {
  const baseClassName = cn(
    "inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-[0.16em] uppercase transition duration-200 ease-out",
    fullWidth && "w-full",
    variantClasses[variant],
    className,
  );

  if (!action.href) {
    return (
      <div className={cn("space-y-2", fullWidth && "w-full")}>
        <div
          aria-disabled="true"
          className={cn(
            baseClassName,
            "cursor-not-allowed border border-dashed border-[color:rgba(83,100,124,0.28)] bg-[color:rgba(255,255,255,0.7)] text-[color:rgba(41,43,45,0.62)] shadow-none hover:translate-y-0 hover:bg-[color:rgba(255,255,255,0.7)]",
          )}
        >
          {action.label}
        </div>
        {action.helperText ? (
          <p className="text-sm leading-6 text-[color:rgba(41,43,45,0.68)]">
            {action.helperText}
          </p>
        ) : null}
      </div>
    );
  }

  const isExternal =
    action.href.startsWith("http://") ||
    action.href.startsWith("https://") ||
    action.href.startsWith("mailto:") ||
    action.href.startsWith("tel:");

  if (isExternal) {
    return (
      <a
        href={action.href}
        target={action.href.startsWith("http") ? "_blank" : undefined}
        rel={action.href.startsWith("http") ? "noreferrer" : undefined}
        className={baseClassName}
      >
        {action.label}
      </a>
    );
  }

  return (
    <Link href={action.href} className={baseClassName}>
      {action.label}
    </Link>
  );
}
