'use client';

import { useEffect } from 'react';
import { Box } from '@mui/material';
import { ThemeProvider } from '@/app/context/ThemeContext';
import { AppThemeProvider } from '@/app/context/AppThemeProvider';
import { Locale, Translations } from '@/app/lib/i18n';
import Navbar from '@/app/components/Navbar';
import Hero from '@/app/components/Hero';
import About from '@/app/components/About';
import Experience from '@/app/components/Experience';
import Education from '@/app/components/Education';
import Skills from '@/app/components/Skills';
import Projects from '@/app/components/Projects';
import Contact from '@/app/components/Contact';
import Footer from '@/app/components/Footer';

interface LayoutClientProps {
  translations: Translations;
  locale: Locale;
  hasPhoto: boolean;
}

export default function LayoutClient({ translations, locale, hasPhoto }: LayoutClientProps) {
  // The root <html> is shared by both languages: keep its lang attribute in sync
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <ThemeProvider defaultMode="dark">
      <AppThemeProvider>
        <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', overflowX: 'clip' }}>
          <Navbar locale={locale} t={translations} />
          <Box component="main" sx={{ flex: 1 }}>
            <Hero t={translations} hasPhoto={hasPhoto} />
            <About t={translations} />
            <Experience t={translations} />
            <Education t={translations} />
            <Skills t={translations} />
            <Projects t={translations} />
            <Contact t={translations} />
          </Box>
          <Footer t={translations} />
        </Box>
      </AppThemeProvider>
    </ThemeProvider>
  );
}
