import type { Metadata } from "next";

import { CitationList } from "@/components/citation-list";
import { FAQAccordion } from "@/components/faq-accordion";
import { ProductGallery } from "@/components/product-gallery";
import { ProductPurchasePanel } from "@/components/product-purchase-panel";
import { StructuredData } from "@/components/structured-data";
import {
  buildFaqSchema,
  buildMetadata,
  buildProductSchema,
  buildWebPageSchema,
} from "@/lib/seo";
import { siteContent } from "@/lib/site-content";

export const metadata: Metadata = buildMetadata(siteContent.product.seo);

export default function ShopPage() {
  const { product } = siteContent;

  return (
    <main className="pb-24 pt-10 sm:pt-14">
      <StructuredData
        data={[
          buildWebPageSchema({
            title: siteContent.product.seo.title,
            description: siteContent.product.seo.description,
            path: siteContent.product.seo.path,
          }),
          buildProductSchema(),
          buildFaqSchema(siteContent.product.faqs),
        ]}
      />
      <section id="buy-box" className="page-shell scroll-mt-28">
        <div className="mb-10 max-w-3xl space-y-4">
          <p className="eyebrow">The evening ritual</p>
          <p className="display-title text-5xl leading-[0.9] sm:text-6xl">
            {product.title}
          </p>
          <p className="max-w-2xl text-lg leading-8 text-[color:rgba(30,33,30,0.72)]">
            {product.description}
          </p>
        </div>

        <div className="grid gap-10 xl:grid-cols-[minmax(0,1.02fr)_minmax(21rem,0.82fr)] xl:items-start">
          <ProductGallery items={product.gallery} />
          <ProductPurchasePanel
            title={product.title}
            price={product.price}
            description={product.description}
            buttonLabel={product.buttonLabel}
            details={product.details}
            waitlist={product.waitlist}
          />
        </div>
      </section>

      <section className="page-shell mt-16 space-y-10 sm:mt-20">
        <div className="max-w-3xl space-y-4">
          <p className="eyebrow">Product FAQ</p>
          <h2 className="display-title text-4xl leading-[0.96] sm:text-5xl">
            What women ask before they commit.
          </h2>
          <p className="text-lg leading-8 text-[color:rgba(30,33,30,0.74)]">
            These answers are written for search clarity and purchase clarity at
            the same time.
          </p>
        </div>
        <FAQAccordion items={product.faqs} />
      </section>

      <section className="page-shell mt-16 sm:mt-20">
        <CitationList items={siteContent.science.citations.slice(0, 3)} />
      </section>
    </main>
  );
}
