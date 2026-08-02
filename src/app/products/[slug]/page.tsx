import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { ProductImage } from '@/components/product-image';
import { products } from '@/config/site';
import { productSchema } from '@/lib/schema';

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.id }));
}

function getPrimaryCta(product: (typeof products)[number]) {
  if ('primaryCta' in product && product.primaryCta && 'primaryCtaUrl' in product && product.primaryCtaUrl) {
    return { label: product.primaryCta, url: product.primaryCtaUrl };
  }
  return { label: product.cta, url: product.ctaUrl };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.id === slug);
  if (!product) {
    notFound();
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 2);
  const primaryCta = getPrimaryCta(product);
  const schema = productSchema(product);

  return (
    <>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <main className="bg-[#0a0a0a] text-white min-h-screen">
        <div className="max-w-7xl mx-auto px-6 pt-12 pb-8">
          <p className="text-sm text-[#808080]">
            <Link href="/" className="hover:text-[#8B3A62] transition-colors">
              Home
            </Link>
            <span className="text-[#8B3A62] mx-2">/</span>
            <Link href="/products" className="hover:text-[#8B3A62] transition-colors">
              Products
            </Link>
            <span className="text-[#8B3A62] mx-2">/</span>
            <span>{product.name}</span>
          </p>
        </div>

        <section className="max-w-7xl mx-auto px-6 py-12 border-b border-[#1a1a1a]">
          <p className="text-xs uppercase tracking-widest text-[#8B3A62] mb-4">{product.category}</p>
          <h1 className="font-display text-5xl md:text-6xl mb-4">{product.name}</h1>
          <p className="text-[#a0a0a0] text-lg max-w-2xl">{product.tagline}</p>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-[#a0a0a0] text-lg leading-relaxed mb-8">{product.description}</p>

              {'valueLadder' in product && product.valueLadder && (
                <div className="mb-8">
                  <h2 className="text-sm uppercase tracking-widest text-[#8B3A62] mb-6">Value Ladder</h2>
                  <div className="space-y-4">
                    {product.valueLadder.map((tier) => (
                      <div key={tier.title} className="flex items-center justify-between pb-4 border-b border-[#1f1f1f]">
                        <span className="text-[#a0a0a0]">{tier.title}</span>
                        <span className="text-[#8B3A62] font-medium">{tier.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {'stats' in product && product.stats && (
                <div className="mb-8 grid grid-cols-3 gap-4">
                  {product.stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <p className="text-2xl md:text-3xl text-[#8B3A62] font-display mb-2">{stat.value}</p>
                      <p className="text-xs text-[#808080]">{stat.label}</p>
                    </div>
                  ))}
                </div>
              )}

              {'features' in product && product.features && (
                <div className="mb-8 grid grid-cols-2 gap-4">
                  {product.features.map((feature) => (
                    <div key={feature} className="flex items-start">
                      <span className="text-[#8B3A62] mr-3">•</span>
                      <span className="text-[#a0a0a0]">{feature}</span>
                    </div>
                  ))}
                </div>
              )}

              {'pricing' in product && product.pricing && (
                <div className="mb-8">
                  <h2 className="text-sm uppercase tracking-widest text-[#8B3A62] mb-4">Pricing</h2>
                  <div className="space-y-3">
                    {product.pricing.map((tier) => (
                      <p key={tier.tier} className="text-[#a0a0a0]">
                        <span className="text-white font-medium">{tier.tier}</span> — {tier.details}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              {'price' in product && product.price && (
                <div className="mb-8">
                  <h2 className="text-sm uppercase tracking-widest text-[#8B3A62] mb-4">Price</h2>
                  <p className="text-[#a0a0a0]">{product.price}</p>
                </div>
              )}

              {'tiers' in product && product.tiers && (
                <div className="mb-8">
                  <h2 className="text-sm uppercase tracking-widest text-[#8B3A62] mb-4">Tiers</h2>
                  <p className="text-[#a0a0a0]">{product.tiers.join(' · ')}</p>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={primaryCta.url}
                  target={primaryCta.url.startsWith('http') ? '_blank' : undefined}
                  rel={primaryCta.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="border border-[#8B3A62] text-[#8B3A62] px-6 py-3 font-medium hover:bg-[#8B3A62] hover:text-white transition-colors flex items-center justify-center gap-2"
                >
                  {primaryCta.label}
                  <ArrowRight size={18} />
                </a>
                {'secondaryCta' in product && product.secondaryCta && 'secondaryCtaUrl' in product && (
                  <a
                    href={product.secondaryCtaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-[#1f1f1f] text-[#a0a0a0] px-6 py-3 font-medium hover:border-[#8B3A62] hover:text-[#8B3A62] transition-colors flex items-center justify-center gap-2"
                  >
                    {product.secondaryCta}
                  </a>
                )}
              </div>
            </div>

            <div className="bg-[#111111] border border-[#1f1f1f] min-h-[400px] overflow-hidden">
              <ProductImage productId={product.id} className="min-h-[400px]" priority />
            </div>
          </div>

          {relatedProducts.length > 0 && (
            <div className="mt-16 pt-16 border-t border-[#1a1a1a]">
              <p className="text-xs uppercase tracking-widest text-[#8B3A62] mb-6">Related Products</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {relatedProducts.map((relatedProduct) => (
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
        </section>

        <section className="bg-[#0d0d0d] px-6 py-20 border-t border-[#1a1a1a]">
          <div className="max-w-2xl mx-auto text-center">
            <p className="font-display text-2xl text-[#8B3A62] mb-6">Questions about {product.name}?</p>
            <Link
              href="/contact"
              className="inline-block border border-[#8B3A62] text-[#8B3A62] px-6 py-3 font-medium hover:bg-[#8B3A62] hover:text-white transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
