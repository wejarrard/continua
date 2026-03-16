import type { ReactNode } from "react";

import type { ActionLinkConfig } from "@/lib/site-content";

import { ActionLink } from "./action-link";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  body: string;
  primaryAction?: ActionLinkConfig;
  secondaryAction?: ActionLinkConfig;
  supportingPoints?: readonly string[];
  children?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  body,
  primaryAction,
  secondaryAction,
  supportingPoints,
  children,
}: PageHeroProps) {
  return (
    <section className="page-shell pt-8 sm:pt-12">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:items-center">
        <div className="space-y-8">
          <p className="eyebrow">{eyebrow}</p>
          <div className="space-y-6">
            <h1 className="display-title max-w-4xl text-5xl leading-[0.94] sm:text-6xl lg:text-7xl">
              {title}
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-[color:rgba(41,43,45,0.76)] sm:text-xl">
              {body}
            </p>
          </div>
          {(primaryAction || secondaryAction) && (
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              {primaryAction ? <ActionLink action={primaryAction} /> : null}
              {secondaryAction ? (
                <ActionLink action={secondaryAction} variant="secondary" />
              ) : null}
            </div>
          )}
          {supportingPoints ? (
            <div className="flex flex-wrap gap-3">
              {supportingPoints.map((point) => (
                <span key={point} className="pill">
                  {point}
                </span>
              ))}
            </div>
          ) : null}
        </div>
        {children ? <div>{children}</div> : null}
      </div>
    </section>
  );
}
