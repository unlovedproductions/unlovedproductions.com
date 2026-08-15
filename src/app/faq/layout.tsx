import type { Metadata } from 'next';
import { generateMetadata as buildMetadata } from '@/lib/metadata';
import { ogImages } from '@/lib/images';

export const metadata: Metadata = buildMetadata({
  title: 'FAQ',
  description:
    'Answers to common questions about unlovedproductions and our five products: KDP Creator Suite, Ghost Protocol, ReviveHQ, KDP Fast Launch, and Puente.',
  path: '/faq',
  image: ogImages.home.fallback,
});

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return children;
}
