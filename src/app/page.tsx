'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { products, manifesto, upcomingProducts } from '@/config/site';
import { books } from '@/config/books';
import { ArrowRight } from 'lucide-react';

const taglines = [
  "Built for the ones nobody built for.",
  "The tools that weren't supposed to exist.",
  "Five products. Zero compromises.",
];

export default function Home() {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setTaglineIndex((prev) => (prev + 1) % taglines.length);
        setIsVisible(true);
      }, 200);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />
      <main className="bg-[#0a0a0a] text-white">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-start px-6 py-20">
          <div className="max-w-5xl">
            <h1 className="font-display text-7xl md:text-8xl leading-tight mb-6">
              unlovedproductions
            </h1>
            <div className="mb-8 h-20 md:h-24">
              <p
                className={`text-xl md:text-2xl text-[#a0a0a0] transition-opacity duration-300 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {taglines[taglineIndex]}
              </p>
            </div>
            <p className="text-base md:text-lg text-[#808080] max-w-2xl mb-12 leading-relaxed">
              A holding company building tools for creators, privacy seekers, independent operators, and anyone ignored by
              the software industry.
            </p>
            <a
              href="#products"
              className="inline-block border border-[#8B3A62] text-[#8B3A62] px-6 py-3 font-medium hover:bg-[#8B3A62] hover:text-white transition-colors flex items-center gap-2"
            >
              See What We Build
              <ArrowRight size={18} />
            </a>
          </div>
        </section>

        {/* Products Grid */}
        <section id="products" className="px-6 py-20 max-w-7xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl mb-12">Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="group border border-[#1f1f1f] bg-[#111111] p-6 hover:border-t-[#8B3A62] hover:translate-y-[-4px] transition-all duration-300"
              >
                <div className="mb-4">
                  <p className="text-xs uppercase tracking-widest text-[#8B3A62] mb-3">{product.category}</p>
                  <h3 className="font-display text-2xl mb-2">{product.name}</h3>
                  <p className="text-sm text-[#a0a0a0]">{product.tagline}</p>
                </div>
                <div className="flex items-center gap-2 text-[#8B3A62] text-sm font-medium">
                  Learn more <ArrowRight size={16} />
                </div>
              </Link>
            ))}

            {/* Coming Soon Placeholder */}
            <div className="border border-dashed border-[#1f1f1f] bg-[#0d0d0d] p-6 flex items-center justify-center min-h-[220px]">
              <div className="text-center">
                <p className="text-sm text-[#808080]">More Coming</p>
                <p className="text-xs text-[#606060] mt-2">Soon</p>
              </div>
            </div>
          </div>
        </section>

        <section id="books" className="px-6 py-20 max-w-7xl mx-auto border-t border-[#1a1a1a]">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#8B3A62] mb-3">Books</p>
              <h2 className="font-display text-4xl md:text-5xl">Coming to Amazon KDP</h2>
            </div>
            <Link
              href="/books"
              className="inline-flex items-center gap-2 text-[#8B3A62] text-sm font-medium hover:text-white transition-colors"
            >
              See all books <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {books.map((book) => (
              <Link
                key={book.id}
                href={`/books/${book.id}`}
                className="group border border-[#1f1f1f] bg-[#111111] p-6 hover:border-t-[#8B3A62] hover:translate-y-[-4px] transition-all duration-300"
              >
                <p className="text-xs uppercase tracking-widest text-[#8B3A62] mb-3">
                  {book.series
                    ? `${book.series.name} · Book ${book.series.position}`
                    : book.category}
                </p>
                <h3 className="font-display text-2xl mb-2">{book.title}</h3>
                <p className="text-sm text-[#a0a0a0] mb-4">{book.subtitle}</p>
                <p className="text-xs uppercase tracking-widest text-[#808080]">Coming soon</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Manifesto Section */}
        <section className="bg-[#0d0d0d] border-y border-[#1a1a1a] py-20 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px flex-grow bg-[#8B3A62]"></div>
              <div className="h-px flex-grow bg-[#8B3A62]"></div>
            </div>
            <p className="font-display text-2xl md:text-3xl leading-relaxed text-white mb-8">{manifesto}</p>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px flex-grow bg-[#8B3A62]"></div>
              <div className="h-px flex-grow bg-[#8B3A62]"></div>
            </div>
          </div>
        </section>

        {/* What's Being Built Section */}
        <section className="px-6 py-20 max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-[#8B3A62] mb-12 text-center">What's Being Built</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingProducts.map((item, idx) => (
              <div key={idx} className="border border-dashed border-[#1f1f1f] bg-[#0d0d0d] p-8 flex flex-col items-center justify-center min-h-[200px]">
                <p className="text-xs uppercase tracking-widest text-[#8B3A62] mb-3">Coming Soon</p>
                <p className="font-display text-xl text-white mb-2">{item.title}</p>
                {'description' in item && item.description && (
                  <p className="text-sm text-[#a0a0a0] text-center">{item.description}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Footer CTA */}
        <section className="bg-[#0d0d0d] px-6 py-20 border-t border-[#1a1a1a]">
          <div className="max-w-2xl mx-auto text-center">
            <p className="font-display text-3xl md:text-4xl text-[#8B3A62] mb-8">
              If we're building something you need — or something you think we should build — we want to hear from you.
            </p>
            <Link href="/contact" className="inline-block text-white underline hover:text-[#8B3A62] transition-colors">
              Get in touch
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
