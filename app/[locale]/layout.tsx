import { existsSync } from 'node:fs';
import path from 'node:path';
import { getTranslations, isValidLocale, Locale } from '@/app/lib/i18n';
import { PROFILE_PHOTO } from '@/app/lib/config';
import LayoutClient from './LayoutClient';

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

// Pre-render /en and /fr at build time instead of on every request
export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'fr' }];
}

export default async function LocaleLayout({ params }: LocaleLayoutProps) {
  const { locale } = await params;

  // Validate and get the locale
  const validLocale: Locale = isValidLocale(locale) ? locale : 'en';

  // Get translations for the locale
  const translations = getTranslations(validLocale);

  // Show the photo only once public/images/profile.jpg exists (otherwise a placeholder)
  const hasPhoto = existsSync(path.join(process.cwd(), 'public', PROFILE_PHOTO));

  return <LayoutClient translations={translations} locale={validLocale} hasPhoto={hasPhoto} />;
}
