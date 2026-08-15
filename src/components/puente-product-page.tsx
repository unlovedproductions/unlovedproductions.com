import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { ProductImage } from '@/components/product-image';
import { products } from '@/config/site';
import { puenteContent } from '@/config/puente-content';
import {
  breadcrumbSchema,
  faqSchema,
  puenteHowToSchema,
  puenteSoftwareApplicationSchema,
} from '@/lib/schema';

const relatedProducts = products.filter((p) => p.id !== 'puente').slice(0, 2);

export function PuenteProductPage() {
  const schemas = [
    puenteSoftwareApplicationSchema(),
    puenteHowToSchema(),
    faqSchema([...puenteContent.faqs]),
    breadcrumbSchema([
      { name: 'Home', url: 'https://unlovedproductions.com' },
      { name: 'Products', url: 'https://unlovedproductions.com/products' },
      { name: 'Puente' },
    ]),
  ];

  return (
    <>
      <Navbar />
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
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
            <span>{puenteContent.brand}</span>
          </p>
        </div>

        <section className="max-w-7xl mx-auto px-6 py-12 border-b border-[#1a1a1a]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#8B3A62] mb-4">
                {puenteContent.category}
              </p>
              <h1 className="font-display text-5xl md:text-6xl mb-4">{puenteContent.brand}</h1>
              <p className="font-display text-2xl md:text-3xl text-white mb-4">
                {puenteContent.headline}
              </p>
              <p className="text-[#a0a0a0] text-lg max-w-2xl mb-8">{puenteContent.supportingLine}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={puenteContent.primaryCta.url}
                  className="border border-[#8B3A62] text-[#8B3A62] px-6 py-3 font-medium hover:bg-[#8B3A62] hover:text-white transition-colors flex items-center justify-center gap-2"
                >
                  {puenteContent.primaryCta.label}
                  <ArrowRight size={18} />
                </Link>
                <a
                  href={puenteContent.secondaryCta.url}
                  className="border border-[#1f1f1f] text-[#a0a0a0] px-6 py-3 font-medium hover:border-[#8B3A62] hover:text-[#8B3A62] transition-colors flex items-center justify-center gap-2"
                >
                  {puenteContent.secondaryCta.label}
                </a>
              </div>
            </div>
            <div className="bg-[#111111] border border-[#1f1f1f] min-h-[400px] overflow-hidden">
              <ProductImage productId="puente" className="min-h-[400px]" priority />
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-20 border-b border-[#1a1a1a]">
          <h2 className="text-sm uppercase tracking-widest text-[#8B3A62] mb-4">What is Puente?</h2>
          <p className="text-[#a0a0a0] text-lg leading-relaxed max-w-3xl">
            <strong className="text-white">Puente</strong> is an Android conversational interpreter
            for shared devices. Two people take turns speaking into one device. Puente recognizes
            speech on-device, translates it, speaks the result aloud, and keeps the transcript—so the
            exchange stays fast, private, and usable where Wi‑Fi is weak or forbidden after setup.
          </p>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-20 border-b border-[#1a1a1a]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-sm uppercase tracking-widest text-[#8B3A62] mb-4">The problem</h2>
              <p className="text-[#a0a0a0] text-lg leading-relaxed">{puenteContent.problem}</p>
            </div>
            <div>
              <h2 className="text-sm uppercase tracking-widest text-[#8B3A62] mb-4">The solution</h2>
              <p className="text-[#a0a0a0] text-lg leading-relaxed">{puenteContent.solution}</p>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-20 border-b border-[#1a1a1a]">
          <h2 className="text-sm uppercase tracking-widest text-[#8B3A62] mb-8">Benefits</h2>
          <ul className="space-y-6 max-w-3xl">
            {puenteContent.benefits.map((benefit) => (
              <li key={benefit.title} className="flex items-start gap-3">
                <span className="text-[#8B3A62] mt-1">•</span>
                <div>
                  <p className="text-white font-medium mb-1">{benefit.title}</p>
                  <p className="text-[#a0a0a0]">{benefit.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-20 border-b border-[#1a1a1a]">
          <h2 className="text-sm uppercase tracking-widest text-[#8B3A62] mb-8">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {puenteContent.features.map((feature) => (
              <div key={feature.title}>
                <h3 className="font-display text-xl mb-3">{feature.title}</h3>
                <p className="text-[#a0a0a0] leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-20 border-b border-[#1a1a1a]">
          <h2 className="text-sm uppercase tracking-widest text-[#8B3A62] mb-8">How it works</h2>
          <ol className="space-y-6 max-w-3xl">
            {puenteContent.howItWorks.map((step, index) => (
              <li key={step.name} className="flex items-start gap-4">
                <span className="text-[#8B3A62] font-display text-2xl leading-none shrink-0">
                  {index + 1}
                </span>
                <div>
                  <p className="text-white font-medium mb-1">{step.name}</p>
                  <p className="text-[#a0a0a0]">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-20 border-b border-[#1a1a1a]">
          <h2 className="text-sm uppercase tracking-widest text-[#8B3A62] mb-8">Ideal for</h2>
          <ul className="space-y-4 max-w-3xl">
            {puenteContent.idealFor.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-[#8B3A62] mt-1">•</span>
                <span className="text-[#a0a0a0] text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-20 border-b border-[#1a1a1a]">
          <h2 className="text-sm uppercase tracking-widest text-[#8B3A62] mb-8">
            Trust and privacy
          </h2>
          <ul className="space-y-4 max-w-3xl">
            {puenteContent.trust.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-[#8B3A62] mt-1">•</span>
                <span className="text-[#a0a0a0]">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-20 border-b border-[#1a1a1a]">
          <h2 className="text-sm uppercase tracking-widest text-[#8B3A62] mb-4">
            Supported languages (v1.0)
          </h2>
          <p className="text-[#808080] mb-8">Platform: {puenteContent.platform}</p>
          <div className="overflow-x-auto max-w-xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#1f1f1f]">
                  <th className="py-3 pr-6 text-xs uppercase tracking-widest text-[#8B3A62] font-medium">
                    Mode
                  </th>
                  <th className="py-3 text-xs uppercase tracking-widest text-[#8B3A62] font-medium">
                    Languages
                  </th>
                </tr>
              </thead>
              <tbody>
                {puenteContent.languages.map((row) => (
                  <tr
                    key={`${row.mode}-${row.languages}`}
                    className="border-b border-[#1f1f1f]"
                  >
                    <td className="py-3 pr-6 text-white">{row.mode}</td>
                    <td className="py-3 text-[#a0a0a0]">{row.languages}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-20 border-b border-[#1a1a1a]">
          <h2 className="text-sm uppercase tracking-widest text-[#8B3A62] mb-8">
            Frequently asked questions
          </h2>
          <div className="space-y-8 max-w-3xl">
            {puenteContent.faqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="font-display text-xl mb-3">{faq.question}</h3>
                <p className="text-[#a0a0a0] leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {relatedProducts.length > 0 && (
          <section className="max-w-7xl mx-auto px-6 py-16 border-b border-[#1a1a1a]">
            <p className="text-xs uppercase tracking-widest text-[#8B3A62] mb-6">Related Products</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  href={`/products/${relatedProduct.id}`}
                  className="border border-[#1f1f1f] p-4 hover:border-[#8B3A62] transition-colors group"
                >
                  <p className="text-xs uppercase tracking-widest text-[#8B3A62] mb-2">
                    {relatedProduct.category}
                  </p>
                  <p className="font-display text-lg group-hover:text-[#8B3A62] transition-colors">
                    {relatedProduct.name}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}

        <section className="bg-[#0d0d0d] px-6 py-20 border-t border-[#1a1a1a]">
          <div className="max-w-2xl mx-auto text-center">
            <p className="font-display text-2xl md:text-3xl text-[#8B3A62] mb-4">
              {puenteContent.closingHeadline}
            </p>
            <p className="text-[#a0a0a0] mb-8">
              Contact:{' '}
              <a
                href={`mailto:${puenteContent.contactEmail}`}
                className="text-[#8B3A62] hover:underline"
              >
                {puenteContent.contactEmail}
              </a>
              <br />
              Product: Puente by unlovedproductions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={puenteContent.primaryCta.url}
                className="inline-flex items-center justify-center gap-2 border border-[#8B3A62] text-[#8B3A62] px-6 py-3 font-medium hover:bg-[#8B3A62] hover:text-white transition-colors"
              >
                {puenteContent.primaryCta.label}
                <ArrowRight size={18} />
              </Link>
              <a
                href={puenteContent.secondaryCta.url}
                className="inline-flex items-center justify-center border border-[#1f1f1f] text-[#a0a0a0] px-6 py-3 font-medium hover:border-[#8B3A62] hover:text-[#8B3A62] transition-colors"
              >
                {puenteContent.secondaryCta.label}
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
