import type { Metadata } from 'next';
import { generateMetadata as buildMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Contact',
  description:
    'Get in touch with unlovedproductions. Questions about our products, partnerships, feedback, or ideas — we would like to hear from you.',
  path: '/contact',
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
