'use client';

import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { products } from '@/config/site';
import { ArrowRight } from 'lucide-react';
import { ProductImage } from '@/components/product-image';

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#0a0a0a] text-white min-h-screen">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-6 pt-12 pb-8">
          <p className="text-sm text-[#808080]">
            <Link href="/" className="hover:text-[#8B3A62] transition-colors">Home</Link>
            <span className="text-[#8B3A62] mx-2">/</span>
            <span>Products</span>
          </p>
        </div>

        {/* Page Header */}
        <section className="max-w-7xl mx-auto px-6 py-12 border-b border-[#1a1a1a]">
          <h1 className="font-display text-5xl md:text-6xl mb-4">Products</h1>
          <p className="text-[#a0a0a0] max-w-2xl">Five tools built for the people nobody else is building for.</p>
        </section>

        {/* Products List */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="space-y-16">
            {products.map((product, idx) => (
              <div key={product.id}>
                {idx > 0 && <div className="border-t border-[#1a1a1a] mb-16"></div>}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                  {/* Content */}
                  <div className={idx % 2 === 1 ? 'md:order-2' : ''}>
                    <p className="text-xs uppercase tracking-widest text-[#8B3A62] mb-4">{product.category}</p>
                    <h2 className="font-display text-4xl md:text-5xl mb-6">{product.name}</h2>
                    <p className="text-[#a0a0a0] text-lg leading-relaxed mb-8">{product.description}</p>

                    {/* Product-specific content */}
                    {product.valueLadder && (
                      <div className="mb-8">
                        <h3 className="text-sm uppercase tracking-widest text-[#8B3A62] mb-6">Value Ladder</h3>
                        <div className="space-y-4">
                          {product.valueLadder.map((tier, i) => (
                            <div key={i} className="flex items-center justify-between pb-4 border-b border-[#1f1f1f]">
                              <span className="text-[#a0a0a0]">{tier.title}</span>
                              <span className="text-[#8B3A62] font-medium">{tier.price}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {product.stats && (
                      <div className="mb-8 grid grid-cols-3 gap-4">
                        {product.stats.map((stat, i) => (
                          <div key={i} className="text-center">
                            <p className="text-2xl md:text-3xl text-[#8B3A62] font-display mb-2">{stat.value}</p>
                            <p className="text-xs text-[#808080]">{stat.label}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {product.features && (
                      <div className="mb-8">
                        <div className="grid grid-cols-2 gap-4">
                          {product.features.map((feature, i) => (
                            <div key={i} className="flex items-start">
                              <span className="text-[#8B3A62] mr-3">•</span>
                              <span className="text-[#a0a0a0]">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {product.pricing && (
                      <div className="mb-8">
                        <h3 className="text-sm uppercase tracking-widest text-[#8B3A62] mb-4">Pricing</h3>
                        <div className="space-y-3">
                          {product.pricing.map((tier, i) => (
                            <p key={i} className="text-[#a0a0a0]">
                              <span className="text-white font-medium">{tier.tier}</span> — {tier.details}
                            </p>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a
                        href={product.ctaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-[#8B3A62] text-[#8B3A62] px-6 py-3 font-medium hover:bg-[#8B3A62] hover:text-white transition-colors flex items-center justify-center gap-2"
                      >
                        {product.cta}
                        <ArrowRight size={18} />
                      </a>
                      {product.secondaryCta && (
                        <a
                          href={product.secondaryCtaUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="border border-[#1f1f1f] text-[#a0a0a0] px-6 py-3 font-medium hover:border-[#8B3A62] hover:text-[#8B3A62] transition-colors flex items-center justify-center gap-2"
                        >
                          {product.secondaryCta}
                        </a>
                      )}
                      {product.primaryCta && (
                        <a
                          href={product.primaryCtaUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="border border-[#8B3A62] text-[#8B3A62] px-6 py-3 font-medium hover:bg-[#8B3A62] hover:text-white transition-colors flex items-center justify-center gap-2"
                        >
                          {product.primaryCta}
                          <ArrowRight size={18} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Product visual */}
                  <div className={`bg-[#111111] border border-[#1f1f1f] min-h-[400px] overflow-hidden ${idx % 2 === 1 ? 'md:order-1' : ''}`}>
                    <ProductImage productId={product.id} className="min-h-[400px]" />
                  </div>
                </div>

                {/* Related Products */}
                {idx < products.length - 1 && (
                  <div className="mt-16 pt-16 border-t border-[#1a1a1a]">
                    <p className="text-xs uppercase tracking-widest text-[#8B3A62] mb-6">Related Products</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {products
                        .filter((_, i) => Math.abs(i - idx) === 1)
                        .slice(0, 2)
                        .map((relatedProduct) => (
                          <Link
                            key={relatedProduct.id}
                            href={`/products/${relatedProduct.id}`}
                            className="border border-[#1f1f1f] p-4 hover:border-[#8B3A62] transition-colors group"
                          >
                            <p className="text-xs uppercase tracking-widest text-[#8B3A62] mb-2">{relatedProduct.category}</p>
                            <p className="font-display text-lg group-hover:text-[#8B3A62] transition-colors">{relatedProduct.name}</p>
                          </Link>
                        ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#0d0d0d] px-6 py-20 border-t border-[#1a1a1a]">
          <div className="max-w-2xl mx-auto text-center">
            <p className="font-display text-3xl text-[#8B3A62] mb-6">Building something new</p>
            <p className="text-[#a0a0a0] mb-8">Have an idea or feedback? We'd love to hear from you.</p>
            <Link href="/contact" className="inline-block border border-[#8B3A62] text-[#8B3A62] px-6 py-3 font-medium hover:bg-[#8B3A62] hover:text-white transition-colors">
              Get in touch
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
