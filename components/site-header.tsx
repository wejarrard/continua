"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { siteContent } from "@/lib/site-content";
import { cn } from "@/lib/utils";

import { SiteLogo } from "./site-logo";

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[color:rgba(30,33,30,0.08)] bg-[rgba(255,251,248,0.88)] backdrop-blur-xl">
      <div className="page-shell py-3.5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" className="inline-flex w-fit items-center">
            <span className="sr-only">{siteContent.site.name}</span>
            <SiteLogo
              priority
              className="w-[8.75rem] sm:w-[9.75rem] lg:w-[10.25rem]"
            />
          </Link>

          <nav className="flex flex-wrap items-center gap-2 rounded-full border border-[color:rgba(30,33,30,0.1)] bg-white/72 p-1.5 shadow-[0_10px_28px_rgba(76,48,74,0.06)] sm:justify-end">
            {siteContent.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "inline-flex min-h-10 items-center justify-center rounded-full px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em] whitespace-nowrap transition sm:px-5",
                  isActive(pathname, item.href)
                    ? "border border-[color:rgba(30,33,30,0.16)] bg-[var(--continua-charcoal)] !text-white"
                    : "border border-transparent bg-white/68 !text-[color:rgba(30,33,30,0.76)] hover:border-[color:rgba(30,33,30,0.14)] hover:bg-white",
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
