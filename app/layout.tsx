import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import { StructuredData } from "@/components/structured-data";
import {
  absoluteUrl,
  buildOrganizationSchema,
  buildWebsiteSchema,
} from "@/lib/seo";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteContent } from "@/lib/site-content";

import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteContent.site.url),
  title: {
    default: siteContent.site.title,
    template: "%s | Continua",
  },
  description: siteContent.site.description,
  alternates: {
    canonical: siteContent.site.url,
  },
  openGraph: {
    title: siteContent.site.title,
    description: siteContent.site.description,
    url: siteContent.site.url,
    siteName: siteContent.site.name,
    type: "website",
    images: [
      {
        url: absoluteUrl(siteContent.site.defaultSocialImage),
        alt: siteContent.site.defaultSocialImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteContent.site.title,
    description: siteContent.site.description,
    images: [absoluteUrl(siteContent.site.defaultSocialImage)],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfairDisplay.variable}`}>
        <StructuredData
          data={[buildWebsiteSchema(), buildOrganizationSchema()]}
        />
        <div className="relative min-h-screen overflow-x-clip">
          <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(circle_at_top,rgba(216,161,95,0.24),transparent_40%),linear-gradient(180deg,rgba(255,255,255,0.38),rgba(255,255,255,0))]" />
          <div className="pointer-events-none absolute left-[-8rem] top-[26rem] -z-10 h-72 w-72 rounded-full bg-[rgba(198,118,51,0.14)] blur-[130px]" />
          <div className="pointer-events-none absolute right-[-6rem] top-[68rem] -z-10 h-72 w-72 rounded-full bg-[rgba(112,59,28,0.12)] blur-[120px]" />

          <SiteHeader />
          <div className="relative z-10">{children}</div>
          <SiteFooter />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
