import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { generateMetadata as buildMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Blog',
  description:
    'Notes from unlovedproductions on indie software, creator tools, privacy, and building for underserved markets. Long-form guides and product updates.',
  path: '/blog',
  keywords: ['blog', 'guides', 'indie software', 'KDP', 'privacy'],
});

const plannedTopics = [
  {
    title: 'Why we build for underserved markets',
    summary: 'The product studio model and who gets ignored by mainstream software.',
  },
  {
    title: 'KDP publishing without subscriptions',
    summary: 'Systems-first approach for solo publishers starting from zero.',
  },
  {
    title: 'Personal data exposure: what actually works',
    summary: 'Practical opt-out workflows beyond fear-based marketing.',
  },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#0a0a0a] text-white min-h-screen">
        <div className="max-w-7xl mx-auto px-6 pt-12 pb-8">
          <p className="text-sm text-[#808080]">
            <Link href="/" className="hover:text-[#8B3A62] transition-colors">
              Home
            </Link>
            <span className="text-[#8B3A62] mx-2">/</span>
            <span>Blog</span>
          </p>
        </div>

        <section className="max-w-3xl mx-auto px-6 py-12 border-b border-[#1a1a1a]">
          <h1 className="font-display text-5xl md:text-6xl mb-4">Blog</h1>
          <p className="text-[#a0a0a0] text-lg">
            Long-form notes on building tools for people nobody else builds for.
          </p>
        </section>

        <section className="max-w-3xl mx-auto px-6 py-20">
          <p className="text-xs uppercase tracking-widest text-[#8B3A62] mb-8">Coming Soon</p>
          <div className="space-y-8">
            {plannedTopics.map((topic) => (
              <article key={topic.title} className="border border-[#1f1f1f] p-6 bg-[#111111]">
                <h2 className="font-display text-2xl mb-3">{topic.title}</h2>
                <p className="text-[#a0a0a0]">{topic.summary}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
