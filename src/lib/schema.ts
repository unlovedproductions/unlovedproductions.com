// Comprehensive Schema.org markup for SEO, AEO, and GEO optimization

import type { Book } from '@/config/books';

const baseUrl = 'https://unlovedproductions.com';

type ProductInput = {
  id: string;
  name: string;
  description: string;
  category: string;
  ctaUrl?: string;
  primaryCtaUrl?: string;
  image?: string;
  pricing?: Array<{ tier: string; details: string }>;
  valueLadder?: Array<{ title: string; price: string }>;
  tiers?: string[];
  price?: string;
};

function getOfferPrice(product: ProductInput): string {
  if (product.pricing?.some((tier) => tier.tier.toLowerCase() === 'free')) {
    return '0';
  }
  if (product.tiers?.includes('Free')) {
    return '0';
  }
  const ladderPrice = product.valueLadder?.[0]?.price?.replace(/[^0-9.]/g, '');
  if (ladderPrice) {
    return ladderPrice;
  }
  const productPrice = product.price?.replace(/[^0-9.]/g, '');
  if (productPrice) {
    return productPrice;
  }
  return '0';
}

function getOfferUrl(product: ProductInput): string {
  const url = product.ctaUrl ?? product.primaryCtaUrl ?? `/products/${product.id}`;
  if (url.startsWith('http')) {
    return url;
  }
  return `${baseUrl}${url.startsWith('/') ? url : `/${url}`}`;
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'unlovedproductions',
  url: baseUrl,
  logo: `${baseUrl}/logo.png`,
  description: 'A product studio building tools for creators, privacy seekers, independent operators, and anyone ignored by the software industry.',
  sameAs: [
    'https://twitter.com/unlovedprod',
    'https://github.com/unlovedproductions',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Support',
    email: 'hello@unlovedproductions.com',
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'US',
  },
};

export const productSchema = (product: ProductInput) => {
  const offer: Record<string, unknown> = {
    '@type': 'Offer',
    url: getOfferUrl(product),
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
  };

  // Puente is demo/contact sales — do not invent a $0 price
  if (product.id !== 'puente') {
    offer.price = getOfferPrice(product);
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    url: `${baseUrl}/products/${product.id}`,
    category: product.category,
    image: `${baseUrl}${product.image ?? '/og/default.png'}`,
    offers: offer,
  };
};

export const bookSchema = (book: Book) => {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Book',
    name: book.title,
    alternativeHeadline: book.subtitle,
    description: book.description,
    url: `${baseUrl}/books/${book.id}`,
    bookFormat: 'https://schema.org/Paperback',
    inLanguage: 'en',
    author: {
      '@type': 'Organization',
      name: book.author,
      url: baseUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: book.imprint,
      url: baseUrl,
    },
  };

  if (book.coverImage) {
    schema.image = `${baseUrl}${book.coverImage}`;
  }

  if (book.isbn) {
    schema.isbn = book.isbn;
  }

  if (book.pageCount !== undefined) {
    schema.numberOfPages = book.pageCount;
  }

  if (book.series) {
    schema.isPartOf = {
      '@type': 'BookSeries',
      name: book.series.name,
      url: `${baseUrl}/books`,
    };
    schema.position = String(book.series.position);
  }

  switch (book.status) {
    case 'live':
      if (book.amazonUrl) {
        schema.offers = {
          '@type': 'Offer',
          url: book.amazonUrl,
          availability: 'https://schema.org/InStock',
          priceCurrency: 'USD',
        };
      }
      break;
    case 'coming-soon':
      schema.offers = {
        '@type': 'Offer',
        url: `${baseUrl}/books/${book.id}`,
        availability: 'https://schema.org/PreOrder',
        priceCurrency: 'USD',
      };
      break;
    default: {
      const _exhaustive: never = book.status;
      throw new Error(`Unhandled book status: ${_exhaustive}`);
    }
  }

  return schema;
};

export const bookListSchema = (bookList: Book[]) => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'unlovedproductions books',
  itemListElement: bookList.map((book, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    url: `${baseUrl}/books/${book.id}`,
    name: book.title,
  })),
});

export const puenteSoftwareApplicationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Puente',
  description:
    'Offline Android conversational translator for face-to-face interpreting on shared devices. Speak in English, Spanish, French, or German pairs; hear the reply spoken aloud; export bilingual logs—without cloud dependency after setup.',
  url: `${baseUrl}/products/puente`,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Android 5.0+',
  offers: {
    '@type': 'Offer',
    url: `${baseUrl}/contact?subject=puente-demo`,
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
  },
  provider: {
    '@type': 'Organization',
    name: 'unlovedproductions',
    url: baseUrl,
  },
  featureList: [
    'On-device speech recognition (Vosk)',
    'Offline ML Kit translation after model download',
    'Auto English ↔ Spanish and manual EN↔ES / EN↔FR / EN↔DE',
    'Push-to-talk and turn-taking for shared devices',
    'Export bilingual logs as TXT, PDF, or CSV',
  ],
});

export const puenteHowToSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to use Puente for face-to-face offline interpreting',
  description:
    'Set up Puente once, choose a language mode, take turns speaking, and export bilingual conversation logs.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Set up once',
      text: 'Install Puente, grant microphone access, complete onboarding, and allow the first ML Kit model download.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Choose a mode',
      text: 'Auto EN↔ES for open conversation, or lock EN↔ES / EN↔FR / EN↔DE for known pairs.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Take turns',
      text: 'Speak (or hold push-to-talk). Puente shows and speaks the translation, then listens for the reply.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Keep or share the record',
      text: 'Favorite key turns; export TXT, PDF, or CSV when the visit or desk interaction ends.',
    },
  ],
});

export const breadcrumbSchema = (items: Array<{ name: string; url?: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, idx) => {
    const listItem: Record<string, unknown> = {
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
    };
    if (item.url) {
      listItem.item = item.url;
    }
    return listItem;
  }),
});

export const faqSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  url: baseUrl,
  name: 'unlovedproductions',
  description: 'Product studio for underserved markets',
};

// AEO: Direct answer content for common questions
export const answerEngineOptimization = {
  'what-is-unlovedproductions': {
    question: 'What is unlovedproductions?',
    answer: 'unlovedproductions is a product studio building tools for creators, privacy seekers, independent operators, and anyone ignored by the software industry.',
    context: 'A holding company with five products: KDP Creator Suite, Ghost Protocol, ReviveHQ, KDP Fast Launch, and Puente.',
  },
  'kdp-suite-price': {
    question: 'How much does KDP Creator Suite cost?',
    answer: 'KDP Creator Suite offers three pricing tiers: Free, Pro, and Studio.',
    context: 'Visit kdpsuite.com for current pricing and feature details.',
  },
  'ghost-protocol-cost': {
    question: 'What does Ghost Protocol cost?',
    answer: 'Ghost Protocol offers a tiered pricing model: $9 for Data Breach Response Playbook, $17 for Digital Ghost Protocol, $47 for Ghost Stack Setup Guide, and $97 for Family Protection Protocol.',
    context: 'A free privacy exposure quiz is also available to assess your personal data exposure.',
  },
  'revivehq-pricing': {
    question: 'How much is ReviveHQ?',
    answer: 'ReviveHQ pricing: Free (3 deals/week), $9 one-time (single deal report), $29/month Pro (20+ deals/week + full database).',
    context: 'ReviveHQ finds abandoned SaaS deals with real revenue potential.',
  },
  'puente-what': {
    question: 'What is Puente?',
    answer:
      'Puente is an Android conversational interpreter for shared devices. Two people take turns speaking into one device; speech recognition and translation run on-device after setup, without sending audio to the cloud for the core flow.',
    context:
      'Supports Auto English ↔ Spanish plus manual EN↔ES / EN↔FR / EN↔DE. Export bilingual logs as TXT, PDF, or CSV. Request a demo via unlovedproductions.com/contact.',
  },
  'puente-price': {
    question: 'How much is Puente?',
    answer:
      'Puente is offered through demo and sales contact—request a demo or email support@unlovedproductions.com. No self-serve storefront price is published on this site.',
    context: 'B2B shared-device Android interpreter for clinics, hospitality, and field desks.',
  },
};

// GEO: Local business and geographic optimization
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'unlovedproductions',
  description: 'Product studio for underserved markets',
  url: baseUrl,
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Support',
    email: 'hello@unlovedproductions.com',
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'US',
  },
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
};

// Service schema for each product
export const serviceSchema = (product: ProductInput) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: product.name,
  description: product.description,
  serviceType: product.category,
  provider: {
    '@type': 'Organization',
    name: 'unlovedproductions',
    url: baseUrl,
  },
  url: `${baseUrl}/products/${product.id}`,
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
});

// Aggregate rating schema template — use only with verified review data
export const aggregateRatingSchema = (name: string, ratingValue: number, reviewCount: number) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: name,
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: ratingValue,
    reviewCount: reviewCount,
  },
});
