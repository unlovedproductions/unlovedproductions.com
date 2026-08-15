import type { Metadata } from "next";
import { Bebas_Neue, Inter, JetBrains_Mono } from 'next/font/google';
import "./globals.css";
import { ThemeProvider } from "@/app/providers/theme-provider";
import { Analytics } from "@/components/analytics";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "unlovedproductions — Built for the ones nobody built for",
  description: "A product studio building tools for creators, privacy seekers, and indie operators ignored by mainstream software. Five products, zero compromises.",
  keywords: ["unlovedproductions", "indie software", "product studio", "tools", "creators", "privacy", "deals", "translation"],
  authors: [{ name: "unlovedproductions" }],
  creator: "unlovedproductions",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  openGraph: {
    title: "unlovedproductions",
    description: "A product studio building tools for creators, privacy seekers, and indie operators ignored by mainstream software. Five products, zero compromises.",
    type: "website",
    url: "https://unlovedproductions.com",
    siteName: "unlovedproductions",
    images: [
      {
        url: "https://unlovedproductions.com/og/default.png",
        width: 1200,
        height: 630,
        alt: "unlovedproductions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "unlovedproductions",
    description: "A product studio building tools for creators, privacy seekers, and indie operators ignored by mainstream software. Five products, zero compromises.",
    images: ["https://unlovedproductions.com/og/default.png"],
    creator: "@unlovedprod",
    site: "@unlovedprod",
  },
  alternates: {
    canonical: "https://unlovedproductions.com",
    languages: {
      "en-US": "https://unlovedproductions.com",
      "x-default": "https://unlovedproductions.com",
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Organization Schema for SEO/GEO
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'unlovedproductions',
    url: 'https://unlovedproductions.com',
    logo: 'https://unlovedproductions.com/logo.png',
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

  // Website Schema for SEO
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: 'https://unlovedproductions.com',
    name: 'unlovedproductions',
    description: 'Product studio for underserved markets',
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {/* Additional SEO Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0a0a0a" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="unlovedproductions" />
        {/* Preconnect to external services */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${inter.variable} ${bebasNeue.variable} ${jetbrainsMono.variable} antialiased dark`}
      >
        <Analytics />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
