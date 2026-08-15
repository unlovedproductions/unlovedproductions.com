import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { aboutContent } from '@/config/site';
import { FounderImage } from '@/components/founder-image';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#0a0a0a] text-white min-h-screen">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-6 pt-12 pb-8">
          <p className="text-sm text-[#808080]">
            <Link href="/" className="hover:text-[#8B3A62] transition-colors">Home</Link>
            <span className="text-[#8B3A62] mx-2">/</span>
            <span>About</span>
          </p>
        </div>

        {/* Page Header */}
        <section className="max-w-7xl mx-auto px-6 py-12 border-b border-[#1a1a1a]">
          <h1 className="font-display text-5xl md:text-6xl">About</h1>
        </section>

        {/* Fact-first lede */}
        <section className="max-w-3xl mx-auto px-6 py-12">
          <p className="text-[#a0a0a0] text-lg leading-relaxed">{aboutContent.lede}</p>
        </section>

        {/* Act 1: The Gap */}
        <section className="max-w-3xl mx-auto px-6 py-20 border-t border-[#1a1a1a]">
          <div className="space-y-8">
            <div>
              <h2 className="font-display text-3xl md:text-4xl mb-6">The Gap</h2>
              <p className="text-[#a0a0a0] text-lg leading-relaxed mb-6">
                {aboutContent.act1.content}
              </p>
              <ul className="space-y-3 text-[#a0a0a0] text-lg">
                {aboutContent.act1.bullets.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-[#8B3A62] mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Divider */}
        <section className="px-6 py-8">
          <div className="max-w-7xl mx-auto border-t border-[#1a1a1a]"></div>
        </section>

        {/* Act 2: The Decision */}
        <section className="max-w-3xl mx-auto px-6 py-20">
          <div className="space-y-8">
            <div>
              <h2 className="font-display text-3xl md:text-4xl mb-6">The Decision</h2>
              <p className="text-[#a0a0a0] text-lg leading-relaxed whitespace-pre-line">
                {aboutContent.act2.content}
              </p>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="max-w-3xl mx-auto px-6 py-20 border-t border-[#1a1a1a]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            {/* Founder Photo Placeholder */}
            <div className="md:col-span-1">
              <div className="border-2 border-[#8B3A62] bg-[#111111] aspect-square overflow-hidden">
                <FounderImage />
              </div>
            </div>
            <div className="md:col-span-2">
              <p className="text-[#a0a0a0] text-lg leading-relaxed">
                Built with intention. No compromises. The person behind unlovedproductions believes that the best software is built for the people everyone else ignores.
              </p>
            </div>
          </div>
        </section>

        {/* Act 3: What This Is */}
        <section className="max-w-3xl mx-auto px-6 py-20 border-t border-[#1a1a1a]">
          <div className="space-y-8">
            <div>
              <h2 className="font-display text-3xl md:text-4xl mb-6">What This Is</h2>
              <p className="text-[#a0a0a0] text-lg leading-relaxed whitespace-pre-line">
                {aboutContent.act3.content}
              </p>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="bg-[#0d0d0d] px-6 py-20 border-t border-[#1a1a1a]">
          <div className="max-w-2xl mx-auto text-center">
            <p className="font-display text-2xl md:text-3xl text-[#8B3A62] mb-8">
              {aboutContent.closingLine}
            </p>
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
