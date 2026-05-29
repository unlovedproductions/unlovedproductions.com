import type { Metadata } from "next";
import { Bebas_Neue, Inter, JetBrains_Mono } from 'next/font/google';
import "./globals.css";
import { ThemeProvider } from "@/app/providers/theme-provider";

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
  description: "A product studio building tools for creators, privacy seekers, independent operators, and anyone ignored by the software industry.",
  openGraph: {
    title: "unlovedproductions",
    description: "Built for the ones nobody built for.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${bebasNeue.variable} ${jetbrainsMono.variable} antialiased dark`}
      >
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
