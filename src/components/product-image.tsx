import Image from 'next/image';
import { productImages } from '@/lib/images';
import { performanceOptimizations } from '@/lib/metadata';

type ProductImageProps = {
  productId: string;
  className?: string;
  priority?: boolean;
};

export function ProductImage({ productId, className = '', priority = false }: ProductImageProps) {
  const config = productImages[productId as keyof typeof productImages];
  if (!config) {
    return null;
  }

  return (
    <Image
      src={config.fallback}
      alt={config.alt}
      width={config.width}
      height={config.height}
      className={`w-full h-auto object-cover ${className}`}
      loading={priority ? undefined : performanceOptimizations.imageOptimization.loading}
      sizes={performanceOptimizations.imageOptimization.sizes}
      priority={priority}
    />
  );
}
