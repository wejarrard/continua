import type { Metadata } from "next";

import { siteContent } from "@/lib/site-content";

type MetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: readonly string[];
  image?: string;
  noIndex?: boolean;
};

const siteUrl = siteContent.site.url;
const siteName = siteContent.site.name;

export function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}

export function buildMetadata({
  title,
  description,
  path,
  keywords,
  image,
  noIndex = false,
}: MetadataInput): Metadata {
  const canonical = absoluteUrl(path);
  const socialImage = absoluteUrl(image ?? siteContent.site.defaultSocialImage);

  return {
    title,
    description,
    keywords: keywords ? [...keywords] : undefined,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName,
      type: "website",
      images: [
        {
          url: socialImage,
          alt: siteContent.site.defaultSocialImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage],
    },
    robots: noIndex
      ? {
          index: false,
          follow: true,
          googleBot: {
            index: false,
            follow: true,
          },
        }
      : undefined,
  };
}

type Thing = Record<string, unknown>;

export function buildWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: siteUrl,
    description: siteContent.site.description,
    inLanguage: "en-US",
  } satisfies Thing;
}

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: siteUrl,
    brand: "Restore by Continua",
    description: siteContent.site.description,
    logo: absoluteUrl(siteContent.site.defaultSocialImage),
  } satisfies Thing;
}

type WebPageSchemaInput = {
  title: string;
  description: string;
  path: string;
};

export function buildWebPageSchema({
  title,
  description,
  path,
}: WebPageSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: absoluteUrl(path),
    isPartOf: {
      "@type": "WebSite",
      name: siteName,
      url: siteUrl,
    },
    inLanguage: "en-US",
  } satisfies Thing;
}

export function buildFaqSchema(items: readonly { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  } satisfies Thing;
}

export function buildProductSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: siteContent.product.title,
    description: siteContent.product.description,
    brand: {
      "@type": "Brand",
      name: "Restore by Continua",
    },
    image: [absoluteUrl(siteContent.site.defaultSocialImage)],
    sku: "restore-by-continua-30-day",
    category: "Dietary Supplement",
    offers: {
      "@type": "Offer",
      url: absoluteUrl(siteContent.product.seo.path),
      priceCurrency: "USD",
      price: siteContent.product.priceValue.toFixed(2),
      availability: "https://schema.org/SoldOut",
      itemCondition: "https://schema.org/NewCondition",
    },
  } satisfies Thing;
}

type ArticleSchemaInput = {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified: string;
  keywords: readonly string[];
};

export function buildArticleSchema({
  title,
  description,
  path,
  datePublished,
  dateModified,
  keywords,
}: ArticleSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished,
    dateModified,
    mainEntityOfPage: absoluteUrl(path),
    image: [absoluteUrl(siteContent.site.defaultSocialImage)],
    author: {
      "@type": "Organization",
      name: siteName,
    },
    publisher: {
      "@type": "Organization",
      name: siteName,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl(siteContent.site.defaultSocialImage),
      },
    },
    keywords: [...keywords],
  } satisfies Thing;
}
