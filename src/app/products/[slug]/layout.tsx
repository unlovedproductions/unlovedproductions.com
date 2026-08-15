import type { Metadata } from 'next';
import { products } from '@/config/site';
import { generateProductMetadata } from '@/lib/metadata';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.id === slug);
  if (!product) {
    return { title: 'Product Not Found — unlovedproductions' };
  }
  return generateProductMetadata(product);
}

export default function ProductSlugLayout({ children }: { children: React.ReactNode }) {
  return children;
}
