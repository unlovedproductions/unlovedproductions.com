import type { Metadata } from 'next';

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
          url: image,
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
      images: [image],
      creator: '@unlovedprod',
      site: '@unlovedprod',
    },
    alternates: {
      canonical: url,
      languages: {
        'en-US': `${baseUrl}/en${path}`,
      },
    },
    verification: {
      google: 'google-site-verification-code',
      yandex: 'yandex-verification-code',
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

export function generateProductMetadata(product: any) {
  const keywords = [
    product.category.toLowerCase(),
    product.name.toLowerCase(),
    product.tagline.toLowerCase(),
  ];

  return generateMetadata({
    title: product.name,
    description: product.tagline,
    path: `/products/${product.id}`,
    keywords,
    type: 'product',
    image: `${baseUrl}/og/${product.id}.png`,
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
