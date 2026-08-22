import type { Metadata } from 'next';
import { books } from '@/config/books';
import { generateBookMetadata } from '@/lib/metadata';

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return books.map((book) => ({ slug: book.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const book = books.find((item) => item.id === slug);
  if (!book) {
    return { title: 'Book Not Found — unlovedproductions' };
  }
  return generateBookMetadata(book);
}

export default function BookSlugLayout({ children }: { children: React.ReactNode }) {
  return children;
}
