// Image optimization utilities
// Prefer compressed JPEG for product/founder assets; OG stays PNG 1200x630

export const productImages = {
  'kdp-creator-suite': {
    src: '/products/kdp-creator-suite.webp',
    fallback: '/products/kdp-creator-suite.jpg',
    alt: 'KDP Creator Suite dashboard showing PDF processing and analytics features for Amazon KDP publishers',
    width: 1000,
    height: 1000,
  },
  'ghost-protocol': {
    src: '/products/ghost-protocol.webp',
    fallback: '/products/ghost-protocol.jpg',
    alt: 'Ghost Protocol interface displaying personal data exposure audit across 47+ data broker sites',
    width: 1000,
    height: 1000,
  },
  revivehq: {
    src: '/products/revivehq.webp',
    fallback: '/products/revivehq.jpg',
    alt: 'ReviveHQ dashboard showing abandoned SaaS deals scored across GitHub activity and revenue indicators',
    width: 1000,
    height: 1000,
  },
  'kdp-fast-launch': {
    src: '/products/kdp-fast-launch.webp',
    fallback: '/products/kdp-fast-launch.jpg',
    alt: 'KDP Fast Launch System resource pack including niche tracker, keyword swipe file, and 30-task checklist',
    width: 1000,
    height: 1000,
  },
  puente: {
    src: '/products/puente.webp',
    fallback: '/products/puente.jpg',
    alt: 'Puente offline translator interface showing speech recognition and multiple language pair options',
    width: 1000,
    height: 1000,
  },
};

export const ogImages = {
  home: {
    src: '/og/home.webp',
    fallback: '/og/home.png',
    alt: 'unlovedproductions — Built for the ones nobody built for',
  },
  products: {
    src: '/og/products.webp',
    fallback: '/og/products.png',
    alt: 'unlovedproductions products catalog',
  },
  about: {
    src: '/og/about.webp',
    fallback: '/og/about.png',
    alt: 'About unlovedproductions',
  },
  contact: {
    src: '/og/contact.webp',
    fallback: '/og/contact.png',
    alt: 'Contact unlovedproductions',
  },
};

export const founderImage = {
  src: '/founder/photo.webp',
  fallback: '/founder/photo.jpg',
  alt: 'Founder of unlovedproductions, high contrast portrait photograph',
  width: 600,
  height: 600,
};
