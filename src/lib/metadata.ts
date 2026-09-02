import type { Metadata } from 'next';
import type { Book } from '@/config/books';

const baseUrl = 'https://unlovedproductions.com';
const defaultImage = `${baseUrl}/og/default.png`;

export interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string[];
  author?: string;
  published?: string;
  modified?: string;
  type?: 'website' | 'article' | 'product';
}

export function generateMetadata(options: PageMetadataOptions): Metadata {
  const {
    title,
    description,
    path,
    image = defaultImage,
    keywords = [],
    author = 'unlovedproductions',
    published,
    modified,
    type = 'website',
  } = options;

  const url = `${baseUrl}${path}`;
  const fullTitle = `${title} — unlovedproductions`;
  const imageUrl = image.startsWith('http') ? image : `${baseUrl}${image}`;

  return {
    title: fullTitle,
    description,
    keywords: [
      'unlovedproductions',
      'indie software',
      'product studio',
      'creators',
      'privacy',
      'tools',
      ...keywords,
    ],
    authors: [{ name: author }],
    creator: author,
    publisher: 'unlovedproductions',
    formatDetection: {
      email: false,
      telephone: false,
      address: false,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      type: type as 'website' | 'article',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
          type: 'image/png',
        },
      ],
      siteName: 'unlovedproductions',
      ...(published && { publishedTime: published }),
      ...(modified && { modifiedTime: modified }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [imageUrl],
      creator: '@unlovedprod',
      site: '@unlovedprod',
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    appleWebApp: {
      capable: true,
      statusBarStyle: 'black-translucent',
      title: 'unlovedproductions',
    },
    other: {
      'mobile-web-app-capable': 'yes',
      'theme-color': '#0a0a0a',
      'og:type': type,
    },
  };
}

export function generateBreadcrumbMetadata(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

type ProductMetadataInput = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
};

export function generateProductMetadata(product: ProductMetadataInput) {
  if (product.id === 'puente') {
    return generatePuenteMetadata();
  }

  const keywords = [
    product.category.toLowerCase(),
    product.name.toLowerCase(),
    product.tagline.toLowerCase(),
  ];

  const description =
    product.description.length <= 160
      ? product.description
      : `${product.description.slice(0, 157)}...`;

  return generateMetadata({
    title: product.name,
    description,
    path: `/products/${product.id}`,
    keywords,
    type: 'website',
    image: defaultImage,
  });
}

export function generateBookMetadata(book: Book) {
  const title =
    book.id === 'big-easy-coloring-book-toddlers'
      ? 'Big Easy Coloring Book for Toddlers'
      : book.title;
  const description =
    book.description.length <= 160
      ? book.description
      : `${book.description.slice(0, 157)}...`;
  const keywords = [
    book.title.toLowerCase(),
    book.category.toLowerCase(),
    'kdp',
    'paperback',
    ...(book.series ? [book.series.name.toLowerCase()] : []),
  ];

  return generateMetadata({
    title,
    description,
    path: `/books/${book.id}`,
    keywords,
    type: 'website',
    image: book.coverImage ? `${baseUrl}${book.coverImage}` : defaultImage,
  });
}

export function generatePuenteMetadata() {
  const description =
    'Puente is an offline Android translator for face-to-face interpreting. English, Spanish, French, or German pairs. Export bilingual logs after setup.';

  return generateMetadata({
    title: 'Puente — offline translator',
    description,
    path: '/products/puente',
    keywords: [
      'offline translator',
      'Android interpreter',
      'shared device translation',
      'English Spanish French German',
      'on-device speech recognition',
      'clinic hospitality translation',
      'conversational interpreter',
      'offline bilingual logs',
    ],
    type: 'website',
    image: `${baseUrl}/products/puente.jpg`,
  });
}

// Core Web Vitals optimization hints
export const performanceOptimizations = {
  imageOptimization: {
    format: 'webp',
    sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
    loading: 'lazy' as const,
  },
  fontOptimization: {
    display: 'swap' as const,
    preload: true,
  },
  scriptOptimization: {
    defer: true,
    async: true,
  },
};
