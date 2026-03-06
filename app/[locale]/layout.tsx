import { getTranslations, isValidLocale, Locale } from '@/app/lib/i18n';
import LayoutClient from './LayoutClient';

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  // Validate and get the locale
  const validLocale: Locale = isValidLocale(locale) ? locale : 'en';

  // Get translations for the locale
  const translations = getTranslations(validLocale);

  return <LayoutClient translations={translations} locale={validLocale} />;
}
