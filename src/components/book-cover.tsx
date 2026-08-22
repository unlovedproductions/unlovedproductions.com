import Image from 'next/image';
import type { Book } from '@/config/books';
import { performanceOptimizations } from '@/lib/metadata';

type BookCoverProps = {
  book: Book;
  className?: string;
  priority?: boolean;
};

function aspectClass(book: Book): string {
  switch (book.aspect) {
    case 'letter':
      return 'aspect-[8.5/11]';
    case '6x9':
      return 'aspect-[2/3]';
    default: {
      const _exhaustive: never = book.aspect;
      throw new Error(`Unhandled book aspect: ${_exhaustive}`);
    }
  }
}

export function BookCover({ book, className = '', priority = false }: BookCoverProps) {
  const ratio = aspectClass(book);

  if (book.coverImage) {
    return (
      <div className={`relative ${ratio} overflow-hidden bg-[#111111] ${className}`}>
        <Image
          src={book.coverImage}
          alt={`${book.title} cover`}
          fill
          className="object-cover"
          loading={priority ? undefined : performanceOptimizations.imageOptimization.loading}
          sizes="(max-width: 768px) 100vw, 400px"
          priority={priority}
        />
      </div>
    );
  }

  return (
    <div
      className={`${ratio} border-2 border-[#8B3A62] bg-[#111111] p-6 md:p-8 flex flex-col justify-between ${className}`}
    >
      <p className="text-xs uppercase tracking-widest text-[#8B3A62]">
        {book.series
          ? `${book.series.name} · Book ${book.series.position}`
          : book.category}
      </p>
      <div>
        <p className="font-display text-3xl md:text-4xl leading-tight mb-3">{book.title}</p>
        <p className="text-sm text-[#a0a0a0] leading-relaxed">{book.subtitle}</p>
      </div>
      <p className="text-xs uppercase tracking-widest text-[#808080]">{book.imprint}</p>
    </div>
  );
}
