export type BookStatus = 'coming-soon' | 'live';

export type BookSeriesInfo = {
  name: string;
  position: number;
};

export type BookAspect = '6x9' | 'letter';

export type Book = {
  id: string;
  title: string;
  subtitle: string;
  author: string;
  imprint: string;
  format: 'Paperback';
  category: string;
  description: string;
  bullets: string[];
  trim: string;
  interior: string;
  paper: string;
  aspect: BookAspect;
  status: BookStatus;
  series?: BookSeriesInfo;
  amazonUrl?: string;
  isbn?: string;
  coverImage?: string;
  pageCount?: number;
};

export const STOIC_COLLECTION_SERIES = 'The Stoic Collection';

export const books: Book[] = [
  {
    id: 'stoic-foundations',
    title: 'Stoic Foundations',
    subtitle: 'A Guided Workbook on Judgment, Control, and Assent',
    author: 'UnlovedProductions',
    imprint: 'UnlovedProductions',
    format: 'Paperback',
    category: 'Guided Workbook',
    description:
      'Stoic Foundations is a guided workbook in The Stoic Collection. It installs a method you can run on ordinary incidents from this week: see the impression, sort control, pause before you agree, own your share, choose one act, and review at night. It is not a quote book and not a blank journal.',
    bullets: [
      'Installs the Collection method on real incidents, not slogans',
      'Control Sort, Assent Pause, and evening review you can reuse later',
      'Book 1 of The Stoic Collection — the official starting point',
      'Paperback workbook, 6 × 9 inches, black-and-white interior',
    ],
    trim: '6 × 9 inches',
    interior: 'Black and white, no bleed',
    paper: 'White',
    aspect: '6x9',
    status: 'coming-soon',
    series: { name: STOIC_COLLECTION_SERIES, position: 1 },
  },
  {
    id: 'stoic-shadow-work-journal',
    title: 'Stoic Shadow Work Journal',
    subtitle: 'A Guided Journey Through Self-Reflection, Virtue & Personal Growth',
    author: 'UnlovedProductions',
    imprint: 'UnlovedProductions',
    format: 'Paperback',
    category: 'Guided Workbook',
    description:
      'Stoic Shadow Work Journal is a guided workbook in The Stoic Collection for people who avoid hard truths, repeat the same patterns, and want a method — not slogans. Using SEE → SORT → OWN → CHOOSE → REVIEW, you map avoidance, separate facts from added judgments, and log what actually changed. This is Book 2. Book 1 (Stoic Foundations) installs the method in depth; you can start here — the Method Primer supplies what you need to work.',
    bullets: [
      'Map avoidance and self-deception without therapy cosplay',
      'Separate facts from added judgments under real pressure',
      'Signature drills you can reuse after the book ends',
      'Book 2 of The Stoic Collection — 6 × 9 paperback, 116 pages',
    ],
    trim: '6 × 9 inches',
    interior: 'Black and white, no bleed',
    paper: 'White',
    aspect: '6x9',
    status: 'coming-soon',
    series: { name: STOIC_COLLECTION_SERIES, position: 2 },
    pageCount: 116,
  },
  {
    id: 'big-easy-coloring-book-toddlers',
    title: 'Big Easy Coloring Book for Toddlers Ages 2-5',
    subtitle:
      '100 Simple Pictures of Animals, Trucks, Foods and Everyday Things with Thick Lines for Little Hands',
    author: 'UnlovedProductions',
    imprint: 'UnlovedProductions',
    format: 'Paperback',
    category: "Children's Coloring",
    description:
      '100 simple pictures. One big picture on every page. Thick lines for little hands. Animals, trucks, foods, and everyday things. No licensed characters. Original vector drawings made for crayons. A quiet activity book for toddlers and preschoolers at home, in the car, or waiting rooms. Paperback only — no Kindle edition.',
    bullets: [
      'Ages 2–5 · Preschool – Kindergarten',
      '100 unique easy pictures with thick closed lines',
      '8.5 × 11 inches, black-and-white interior, glossy cover',
      'Crayons first. If you use markers, slide cardboard behind the page.',
    ],
    trim: '8.5 × 11 inches',
    interior: 'Black and white, no bleed',
    paper: 'White',
    aspect: 'letter',
    status: 'coming-soon',
    pageCount: 104,
  },
];

export function getBookById(id: string): Book | undefined {
  return books.find((book) => book.id === id);
}

export function stoicCollectionBooks(): Book[] {
  return books.filter((book) => book.series?.name === STOIC_COLLECTION_SERIES);
}

export function standaloneBooks(): Book[] {
  return books.filter((book) => !book.series);
}

export function relatedBooks(id: string): Book[] {
  return books.filter((book) => book.id !== id);
}

export type BookCta = { label: string; href: string } | { label: string; href: null };

export function getBookCta(book: Book): BookCta {
  switch (book.status) {
    case 'live':
      if (book.amazonUrl) {
        return { label: 'Buy on Amazon', href: book.amazonUrl };
      }
      return { label: 'Coming soon', href: null };
    case 'coming-soon':
      return { label: 'Coming soon', href: null };
    default: {
      const _exhaustive: never = book.status;
      throw new Error(`Unhandled book status: ${_exhaustive}`);
    }
  }
}
