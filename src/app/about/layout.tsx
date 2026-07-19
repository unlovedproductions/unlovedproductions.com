import type { Metadata } from 'next';
import { generateMetadata as buildMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'About',
  description:
    'unlovedproductions is a product studio building tools for creators, privacy seekers, and indie operators ignored by the software industry. Learn our story.',
  path: '/about',
});

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
