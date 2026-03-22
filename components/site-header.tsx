"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { siteContent } from "@/lib/site-content";
import { cn } from "@/lib/utils";

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[color:rgba(30,33,30,0.08)] bg-[rgba(255,251,248,0.88)] backdrop-blur-xl">
      <div className="page-shell py-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Link
              href="/"
              className="font-display text-3xl leading-none tracking-[-0.06em] text-[var(--continua-charcoal)] sm:text-4xl"
            >
              {siteContent.site.name}
            </Link>
            <p className="mt-2 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[color:rgba(30,33,30,0.54)]">
              {siteContent.site.eyebrow}
            </p>
          </div>

          <nav className="flex flex-wrap gap-2">
            {siteContent.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] transition sm:text-[0.72rem]",
                  isActive(pathname, item.href)
                    ? "border-[color:rgba(30,33,30,0.16)] bg-[var(--continua-charcoal)] !text-white"
                    : "border-[color:rgba(30,33,30,0.12)] bg-white/60 !text-[color:rgba(30,33,30,0.72)] hover:border-[color:rgba(30,33,30,0.22)] hover:bg-white",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
