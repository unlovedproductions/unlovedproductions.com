import Image from 'next/image';
import { founderImage } from '@/lib/images';
import { performanceOptimizations } from '@/lib/metadata';

export function FounderImage() {
  return (
    <Image
      src={founderImage.fallback}
      alt={founderImage.alt}
      width={founderImage.width}
      height={founderImage.height}
      className="w-full h-full object-cover"
      loading={performanceOptimizations.imageOptimization.loading}
    />
  );
}
