import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { BookCover } from '@/components/book-cover';
import { books, getBookCta, relatedBooks } from '@/config/books';
import { bookSchema, breadcrumbSchema } from '@/lib/schema';

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return books.map((book) => ({ slug: book.id }));
}

export default async function BookPage({ params }: Props) {
  const { slug } = await params;
  const book = books.find((item) => item.id === slug);
  if (!book) {
    notFound();
  }

  const cta = getBookCta(book);
  const related = relatedBooks(book.id);
  const schema = bookSchema(book);
  const crumbs = breadcrumbSchema([
    { name: 'Home', url: 'https://unlovedproductions.com/' },
    { name: 'Books', url: 'https://unlovedproductions.com/books' },
    { name: book.title },
  ]);

  return (
    <>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }}
      />
      <main className="bg-[#0a0a0a] text-white min-h-screen">
        <div className="max-w-7xl mx-auto px-6 pt-12 pb-8">
          <p className="text-sm text-[#808080]">
            <Link href="/" className="hover:text-[#8B3A62] transition-colors">
              Home
            </Link>
            <span className="text-[#8B3A62] mx-2">/</span>
            <Link href="/books" className="hover:text-[#8B3A62] transition-colors">
              Books
            </Link>
            <span className="text-[#8B3A62] mx-2">/</span>
            <span>{book.title}</span>
          </p>
        </div>

        <section className="max-w-7xl mx-auto px-6 py-12 border-b border-[#1a1a1a]">
          <p className="text-xs uppercase tracking-widest text-[#8B3A62] mb-4">
            {book.series
              ? `${book.series.name} · Book ${book.series.position}`
              : book.category}
          </p>
          <h1 className="font-display text-5xl md:text-6xl mb-4">{book.title}</h1>
          <p className="text-[#a0a0a0] text-lg max-w-2xl">{book.subtitle}</p>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-sm uppercase tracking-widest text-[#8B3A62] mb-4">Overview</h2>
              <p className="text-[#a0a0a0] text-lg leading-relaxed mb-8">{book.description}</p>

              <ul className="mb-8 space-y-3">
                {book.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start">
                    <span className="text-[#8B3A62] mr-3">•</span>
                    <span className="text-[#a0a0a0]">{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="mb-8 space-y-2">
                <h2 className="text-sm uppercase tracking-widest text-[#8B3A62] mb-4">Specs</h2>
                <p className="text-[#a0a0a0]">
                  <span className="text-white font-medium">Format</span> — {book.format}
                </p>
                <p className="text-[#a0a0a0]">
                  <span className="text-white font-medium">Trim</span> — {book.trim}
                </p>
                <p className="text-[#a0a0a0]">
                  <span className="text-white font-medium">Interior</span> — {book.interior}
                </p>
                <p className="text-[#a0a0a0]">
                  <span className="text-white font-medium">Paper</span> — {book.paper}
                </p>
                <p className="text-[#a0a0a0]">
                  <span className="text-white font-medium">Imprint</span> — {book.imprint}
                </p>
                {book.pageCount !== undefined && (
                  <p className="text-[#a0a0a0]">
                    <span className="text-white font-medium">Pages</span> — {book.pageCount}
                  </p>
                )}
                {book.isbn && (
                  <p className="text-[#a0a0a0]">
                    <span className="text-white font-medium">ISBN</span> — {book.isbn}
                  </p>
                )}
              </div>

              {cta.href ? (
                <a
                  href={cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-[#8B3A62] text-[#8B3A62] px-6 py-3 font-medium hover:bg-[#8B3A62] hover:text-white transition-colors"
                >
                  {cta.label}
                  <ArrowRight size={18} />
                </a>
              ) : (
                <p
                  className="inline-flex items-center justify-center border border-[#1f1f1f] text-[#808080] px-6 py-3 font-medium"
                  aria-disabled="true"
                >
                  {cta.label}
                </p>
              )}
            </div>

            <div className="max-w-sm">
              <BookCover book={book} priority />
            </div>
          </div>

          {related.length > 0 && (
            <div className="mt-16 pt-16 border-t border-[#1a1a1a]">
              <p className="text-xs uppercase tracking-widest text-[#8B3A62] mb-6">More titles</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {related.map((relatedBook) => (
                  <Link
                    key={relatedBook.id}
                    href={`/books/${relatedBook.id}`}
                    className="border border-[#1f1f1f] p-4 hover:border-[#8B3A62] transition-colors group"
                  >
                    <p className="text-xs uppercase tracking-widest text-[#8B3A62] mb-2">
                      {relatedBook.series
                        ? `${relatedBook.series.name} · Book ${relatedBook.series.position}`
                        : relatedBook.category}
                    </p>
                    <p className="font-display text-lg group-hover:text-[#8B3A62] transition-colors">
                      {relatedBook.title}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </section>

        <section className="bg-[#0d0d0d] px-6 py-20 border-t border-[#1a1a1a]">
          <div className="max-w-2xl mx-auto text-center">
            <p className="font-display text-2xl text-[#8B3A62] mb-6">
              Questions about {book.title}?
            </p>
            <Link
              href="/contact"
              className="inline-block border border-[#8B3A62] text-[#8B3A62] px-6 py-3 font-medium hover:bg-[#8B3A62] hover:text-white transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
