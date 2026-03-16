import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";

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
  title: {
    default: siteContent.site.title,
    template: "%s | Continua",
  },
  description: siteContent.site.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfairDisplay.variable}`}>
        <div className="relative min-h-screen overflow-x-clip">
          <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(circle_at_top,rgba(132,149,128,0.16),transparent_42%),linear-gradient(180deg,rgba(255,255,255,0.34),rgba(255,255,255,0))]" />
          <div className="pointer-events-none absolute left-[-8rem] top-[28rem] -z-10 h-72 w-72 rounded-full bg-[rgba(132,149,128,0.12)] blur-[130px]" />
          <div className="pointer-events-none absolute right-[-6rem] top-[68rem] -z-10 h-72 w-72 rounded-full bg-[rgba(30,33,30,0.08)] blur-[120px]" />

          <SiteHeader />
          <div className="relative z-10">{children}</div>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
