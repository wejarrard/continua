import type { MetadataRoute } from "next";

import { absoluteUrl } from "@/lib/seo";
import { siteContent } from "@/lib/site-content";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const coreRoutes = [
    siteContent.home.seo.path,
    siteContent.product.seo.path,
    siteContent.science.seo.path,
    siteContent.doctorNote.seo.path,
    siteContent.journal.seo.path,
  ];

  return [
    ...coreRoutes.map((path) => ({
      url: absoluteUrl(path),
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: path === "/" ? 1 : 0.8,
    })),
    ...siteContent.journal.entries.map((entry) => ({
      url: absoluteUrl(`/journal/${entry.slug}`),
      lastModified: new Date(entry.modifiedAt),
      changeFrequency: "monthly" as const,
      priority: 0.72,
    })),
  ];
}
