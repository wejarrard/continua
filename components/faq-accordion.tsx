"use client";

import { useState } from "react";

import type { FAQItem } from "@/lib/site-content";
import { cn } from "@/lib/utils";

type FAQAccordionProps = {
  items: readonly FAQItem[];
};

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="grid gap-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <article
            key={item.question}
            className="surface-card overflow-hidden border border-[color:rgba(83,100,124,0.12)]"
          >
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() =>
                setOpenIndex((current) => (current === index ? null : index))
              }
              className="flex w-full items-center justify-between gap-6 p-6 text-left sm:p-7"
            >
              <span className="font-display text-2xl leading-tight text-[var(--continua-charcoal)] sm:text-[2rem]">
                {item.question}
              </span>
              <span
                className={cn(
                  "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[color:rgba(166,145,92,0.22)] bg-white/70 text-xl text-[var(--continua-slate)] transition-transform",
                  isOpen && "rotate-45",
                )}
              >
                +
              </span>
            </button>
            <div
              className={cn(
                "grid transition-[grid-template-rows] duration-300 ease-out",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 text-base leading-7 text-[color:rgba(41,43,45,0.76)] sm:px-7 sm:pb-7">
                  {item.answer}
                </p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
