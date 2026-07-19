export const baseUrl = 'https://unlovedproductions.com';

export const generateMetadata = (
  title: string,
  description: string,
  path: string,
  imageUrl?: string
) => {
  const url = `${baseUrl}${path}`;
  const ogImage = imageUrl || `${baseUrl}/og/default.png`;

  return {
    title,
    description,
    canonical: url,
    openGraph: {
      title,
      description,
      url,
      type: 'website' as const,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image' as const,
      title,
      description,
      images: [ogImage],
    },
  };
};

export const breadcrumb = (items: { name: string; url?: string }[]) => {
  return {
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
  };
};

export const productSchema = (product: any) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    url: `${baseUrl}/products/${product.id}`,
  };
};
