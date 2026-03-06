import enTranslations from '@/public/locales/en.json';
import frTranslations from '@/public/locales/fr.json';

export type Locale = 'en' | 'fr';

const translations: Record<Locale, typeof enTranslations> = {
  en: enTranslations,
  fr: frTranslations,
};

export function getTranslations(locale: Locale) {
  return translations[locale] || translations['en'];
}

export function isValidLocale(locale: string): locale is Locale {
  return ['en', 'fr'].includes(locale);
}
