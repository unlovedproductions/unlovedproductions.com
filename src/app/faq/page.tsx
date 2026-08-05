'use client';

import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'What is unlovedproductions?',
    answer:
      'unlovedproductions is a product studio. We find underserved markets, build the missing tools, and ship. Our audience is creators, privacy seekers, independent operators, and anyone mainstream software ignores.',
  },
  {
    question: 'What products does unlovedproductions offer?',
    answer:
      'We currently ship five products: (1) KDP Creator Suite — publishing software for Amazon KDP creators; (2) Ghost Protocol — digital privacy audits across 47+ data broker sites; (3) ReviveHQ — deal intelligence for abandoned SaaS; (4) KDP Fast Launch — free 14-day publishing system; (5) Puente — offline Android conversational interpreter for shared devices (request a demo).',
  },
  {
    question: 'How much does KDP Creator Suite cost?',
    answer: 'KDP Creator Suite offers three pricing tiers: Free (basic features), Pro (advanced tools), and Studio (enterprise features). Visit kdpsuite.com for current pricing details.',
  },
  {
    question: 'What is Ghost Protocol?',
    answer: 'Ghost Protocol is a digital privacy tool that audits your personal data exposure across 47+ data broker sites. It provides a removal checklist and guidance for opting out. We offer tiered pricing from $9 to $97 depending on your protection needs.',
  },
  {
    question: 'How does ReviveHQ work?',
    answer: 'ReviveHQ monitors abandoned SaaS tools (6-18 months dormant) to find deals with real user bases and revenue potential. Each deal is scored 0-100 across signal dimensions. Pricing: Free (3 deals/week), $9 one-time, $29/month Pro.',
  },
  {
    question: 'What is KDP Fast Launch?',
    answer: 'KDP Fast Launch is a free 14-day system for publishing your first Amazon KDP book with zero paid tools. Includes niche validation, cover design, listing optimization, and a 30-task checklist.',
  },
  {
    question: 'What is Puente?',
    answer:
      'Puente is an Android conversational interpreter for shared devices. Two people take turns speaking into one device; speech recognition and translation run on-device after setup. Supports Auto English ↔ Spanish plus manual EN↔ES / EN↔FR / EN↔DE, with exportable bilingual logs (TXT, PDF, CSV). Request a demo or contact sales at support@unlovedproductions.com.',
  },
  {
    question: 'How do I contact unlovedproductions?',
    answer: 'Visit our contact page at /contact to fill out a form, or email hello@unlovedproductions.com directly. We respond to all inquiries.',
  },
  {
    question: 'Who builds unlovedproductions?',
    answer: 'unlovedproductions is a product studio founded to build for people nobody else builds for. We focus on underserved markets and real problems, starting with tools like Puente built for homeless Spanish speakers.',
  },
  {
    question: 'Can I use these products for commercial purposes?',
    answer: 'Yes, most of our products are designed for commercial and professional use. Check specific product terms for details on licensing and commercial use rights.',
  },
  {
    question: 'How do you handle corrections or outdated product details?',
    answer:
      'Email hello@unlovedproductions.com with the page URL and the correction. We update product pages and this FAQ when pricing, features, or claims change.',
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <Navbar />
      <main className="bg-[#0a0a0a] text-white min-h-screen">
        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-6 pt-12 pb-8">
          <p className="text-sm text-[#808080]">
            <Link href="/" className="hover:text-[#8B3A62] transition-colors">
              Home
            </Link>
            <span className="text-[#8B3A62] mx-2">/</span>
            <span>FAQ</span>
          </p>
        </div>

        {/* Page Header */}
        <section className="max-w-3xl mx-auto px-6 py-12 border-b border-[#1a1a1a]">
          <h1 className="font-display text-5xl md:text-6xl mb-4">Frequently Asked Questions</h1>
          <p className="text-[#a0a0a0] text-lg">
            Direct answers about the studio we run and the five products we ship — pricing,
            who each tool is for, and how to reach us.
          </p>
        </section>

        {/* FAQ List */}
        <section className="max-w-3xl mx-auto px-6 py-20">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-[#1f1f1f] bg-[#111111] overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-[#1a1a1a] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B3A62] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111111]"
                  aria-expanded={openIndex === index}
                >
                  <h3 className="font-medium text-[#ffffff]">{faq.question}</h3>
                  <ChevronDown
                    size={20}
                    className={`text-[#8B3A62] flex-shrink-0 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {openIndex === index && (
                  <div className="px-6 py-4 bg-[#0d0d0d] border-t border-[#1f1f1f]">
                    <p className="text-[#a0a0a0] leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#0d0d0d] px-6 py-20 border-t border-[#1a1a1a]">
          <div className="max-w-2xl mx-auto text-center">
            <p className="font-display text-2xl text-[#8B3A62] mb-6">
              Didn't find what you're looking for?
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
