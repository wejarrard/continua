import type { Metadata } from "next";

import { ProductGallery } from "@/components/product-gallery";
import { ProductPurchasePanel } from "@/components/product-purchase-panel";
import { siteContent } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Shop",
  description: siteContent.product.description,
};

export default function ShopPage() {
  const { product } = siteContent;

  return (
    <main className="pb-24 pt-10 sm:pt-14">
      <section id="buy-box" className="page-shell scroll-mt-28">
        <div className="mb-10 max-w-3xl space-y-4">
          <p className="eyebrow">The Rise drop</p>
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
    </main>
  );
}
