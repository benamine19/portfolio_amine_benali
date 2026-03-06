import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Amine | Portfolio',
  description: 'Professional portfolio of Amine, Full Stack Developer & UI/UX Enthusiast',
  keywords: 'portfolio, developer, full-stack, react, next.js, typescript',
  authors: [{ name: 'Amine' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://example.com',
    title: 'Amine Portfolio',
    description: 'Professional portfolio showcasing my projects and skills',
    images: [
      {
        url: 'https://example.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Amine Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@amine',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  );
}
