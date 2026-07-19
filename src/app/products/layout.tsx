import type { Metadata } from 'next';
import { generateMetadata as buildMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Products',
  description:
    'Explore five tools from unlovedproductions — KDP Creator Suite, Ghost Protocol, ReviveHQ, KDP Fast Launch, and Puente. Built for creators, privacy, and indie operators.',
  path: '/products',
});

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
