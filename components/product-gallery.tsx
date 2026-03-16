"use client";

import { useState } from "react";

import type { MediaAsset } from "@/lib/site-content";
import { cn } from "@/lib/utils";

import { MediaFrame } from "./media-frame";

type GalleryItem = {
  title: string;
  asset: MediaAsset;
};

type ProductGalleryProps = {
  items: readonly GalleryItem[];
};

export function ProductGallery({ items }: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedItem = items[selectedIndex];

  return (
    <div className="space-y-4">
      <div className="space-y-4">
        <MediaFrame
          asset={selectedItem.asset}
          className="aspect-[4/5] min-h-[24rem] sm:min-h-[34rem]"
          priority
          sizes="(min-width: 1280px) 46vw, (min-width: 1024px) 52vw, 100vw"
        />
        <div className="flex items-center justify-between gap-4 px-1">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[color:rgba(30,33,30,0.58)]">
            {selectedItem.title}
          </p>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:rgba(30,33,30,0.46)]">
            {selectedIndex + 1} / {items.length}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {items.map((item, index) => (
          <button
            key={item.title}
            type="button"
            onClick={() => setSelectedIndex(index)}
            className={cn(
              "rounded-[1.4rem] border p-1.5 text-left transition",
              index === selectedIndex
                ? "border-[color:rgba(30,33,30,0.2)] bg-white/90 shadow-[0_18px_35px_rgba(30,33,30,0.08)]"
                : "border-[color:rgba(30,33,30,0.08)] bg-white/55 hover:border-[color:rgba(30,33,30,0.16)] hover:bg-white/80",
            )}
            aria-label={`View ${item.title}`}
            aria-pressed={index === selectedIndex}
          >
            <MediaFrame
              asset={item.asset}
              className="aspect-[5/6]"
              sizes="(min-width: 1024px) 16vw, 28vw"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
