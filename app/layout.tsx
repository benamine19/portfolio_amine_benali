import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v16-appRouter';
import './globals.css';

// Plus Jakarta Sans for headings, Inter for body text (used by the MUI theme via CSS variables).
// Self-hosted variable fonts from @fontsource-variable: next/font/google fails in Turbopack dev for these fonts.
const headingFont = localFont({
  src: '../node_modules/@fontsource-variable/plus-jakarta-sans/files/plus-jakarta-sans-latin-wght-normal.woff2',
  weight: '200 800',
  variable: '--font-heading',
  display: 'swap',
});

const bodyFont = localFont({
  src: '../node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2',
  weight: '100 900',
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Amine Benali | Portfolio',
  description: 'Portfolio of Amine Benali, Full-Stack Developer · AI & Data Science',
  keywords: 'portfolio, developer, full-stack, react, next.js, typescript',
  authors: [{ name: 'Amine Benali' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${headingFont.variable} ${bodyFont.variable}`} suppressHydrationWarning>
      <body>
        {/* Collects MUI/Emotion styles on the server so they match on the client (fixes the hydration error) */}
        <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
      </body>
    </html>
  );
}
