// Comprehensive Schema.org markup for SEO, AEO, and GEO optimization

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

export const productSchema = (product: ProductInput) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: product.name,
  description: product.description,
  url: `${baseUrl}/products/${product.id}`,
  category: product.category,
  image: `${baseUrl}${product.image ?? '/og/default.png'}`,
  offers: {
    '@type': 'Offer',
    url: getOfferUrl(product),
    price: getOfferPrice(product),
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
  },
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
  'puente-price': {
    question: 'How much is Puente?',
    answer: 'Puente is a one-time purchase app for offline translation in healthcare, travel, and service industry settings.',
    context: 'Available on Gumroad with support for multiple language pairs and speech recognition.',
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
