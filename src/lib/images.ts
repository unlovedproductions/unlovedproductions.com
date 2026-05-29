// Image optimization utilities
// All product mockups and assets should use WebP format with fallbacks

export const productImages = {
  'kdp-suite': {
    src: '/products/kdp-suite.webp',
    fallback: '/products/kdp-suite.png',
    alt: 'KDP Creator Suite dashboard showing PDF processing and analytics features for Amazon KDP publishers',
    width: 1200,
    height: 800,
  },
  'ghost-protocol': {
    src: '/products/ghost-protocol.webp',
    fallback: '/products/ghost-protocol.png',
    alt: 'Ghost Protocol interface displaying personal data exposure audit across 47+ data broker sites',
    width: 1200,
    height: 800,
  },
  'revivehq': {
    src: '/products/revivehq.webp',
    fallback: '/products/revivehq.png',
    alt: 'ReviveHQ dashboard showing abandoned SaaS deals scored across GitHub activity and revenue indicators',
    width: 1200,
    height: 800,
  },
  'kdp-fast-launch': {
    src: '/products/kdp-fast-launch.webp',
    fallback: '/products/kdp-fast-launch.png',
    alt: 'KDP Fast Launch System resource pack including niche tracker, keyword swipe file, and 30-task checklist',
    width: 1200,
    height: 800,
  },
  'puente': {
    src: '/products/puente.webp',
    fallback: '/products/puente.png',
    alt: 'Puente offline translator interface showing speech recognition and multiple language pair options',
    width: 1200,
    height: 800,
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
  fallback: '/founder/photo.png',
  alt: 'Founder of unlovedproductions, high contrast portrait photograph',
  width: 600,
  height: 600,
};
