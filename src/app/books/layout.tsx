import type { Metadata } from 'next';
import { generateMetadata as buildMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Books',
  description:
    'Titles from UnlovedProductions in preparation for Amazon KDP — The Stoic Collection guided workbooks and a toddler coloring book. Not live on Amazon yet.',
  path: '/books',
  keywords: ['books', 'KDP', 'The Stoic Collection', 'coloring book', 'UnlovedProductions'],
});

export default function BooksLayout({ children }: { children: React.ReactNode }) {
  return children;
}
