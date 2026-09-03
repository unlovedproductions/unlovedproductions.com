import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { BookCover } from '@/components/book-cover';
import { books, standaloneBooks, stoicCollectionBooks } from '@/config/books';
import { bookListSchema, breadcrumbSchema } from '@/lib/schema';

export default function BooksPage() {
  const stoic = stoicCollectionBooks();
  const standalone = standaloneBooks();
  const listSchema = bookListSchema(books);
  const crumbs = breadcrumbSchema([
    { name: 'Home', url: 'https://unlovedproductions.com/' },
    { name: 'Books' },
  ]);

  return (
    <>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(listSchema) }}
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
            <span>Books</span>
          </p>
        </div>

        <section className="max-w-7xl mx-auto px-6 py-12 border-b border-[#1a1a1a]">
          <h1 className="font-display text-5xl md:text-6xl mb-4">Books</h1>
          <p className="text-[#a0a0a0] max-w-2xl">
            Titles in preparation for Amazon KDP. None of these are live on Amazon yet. When a
            listing is approved, the buy link goes here.
          </p>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-20">
          <p className="text-xs uppercase tracking-widest text-[#8B3A62] mb-12">
            The Stoic Collection
          </p>
          <div className="space-y-16">
            {stoic.map((book, idx) => (
              <div key={book.id}>
                {idx > 0 && <div className="border-t border-[#1a1a1a] mb-16" />}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                  <div className={idx % 2 === 1 ? 'md:order-2' : ''}>
                    <p className="text-xs uppercase tracking-widest text-[#8B3A62] mb-4">
                      Book {book.series?.position} · {book.category}
                    </p>
                    <h2 className="font-display text-4xl md:text-5xl mb-3">{book.title}</h2>
                    <p className="text-[#a0a0a0] mb-6">{book.subtitle}</p>
                    <p className="text-[#a0a0a0] text-lg leading-relaxed mb-8">{book.description}</p>
                    <Link
                      href={`/books/${book.id}`}
                      className="inline-flex items-center gap-2 text-[#8B3A62] font-medium hover:text-white transition-colors"
                    >
                      About {book.title} <ArrowRight size={16} />
                    </Link>
                  </div>
                  <div className={`max-w-sm ${idx % 2 === 1 ? 'md:order-1' : ''}`}>
                    <BookCover book={book} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {standalone.length > 0 && (
          <section className="max-w-7xl mx-auto px-6 py-20 border-t border-[#1a1a1a]">
            <p className="text-xs uppercase tracking-widest text-[#8B3A62] mb-12">
              Children&apos;s coloring
            </p>
            <div className="space-y-16">
              {standalone.map((book) => (
                <div key={book.id} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-[#8B3A62] mb-4">
                      {book.category}
                    </p>
                    <h2 className="font-display text-4xl md:text-5xl mb-3">{book.title}</h2>
                    <p className="text-[#a0a0a0] mb-6">{book.subtitle}</p>
                    <p className="text-[#a0a0a0] text-lg leading-relaxed mb-8">{book.description}</p>
                    <Link
                      href={`/books/${book.id}`}
                      className="inline-flex items-center gap-2 text-[#8B3A62] font-medium hover:text-white transition-colors"
                    >
                      About {book.title} <ArrowRight size={16} />
                    </Link>
                  </div>
                  <div className="max-w-sm">
                    <BookCover book={book} />
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </>
  );
}
