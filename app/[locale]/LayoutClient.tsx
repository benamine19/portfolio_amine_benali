'use client';

import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { ThemeProvider } from '@/app/context/ThemeContext';
import { AppThemeProvider } from '@/app/context/AppThemeProvider';
import { Locale } from '@/app/lib/i18n';
import Navbar from '@/app/components/Navbar';
import Hero from '@/app/components/Hero';
import About from '@/app/components/About';
import Education from '@/app/components/Education';
import Skills from '@/app/components/Skills';
import Projects from '@/app/components/Projects';
import Contact from '@/app/components/Contact';
import Footer from '@/app/components/Footer';
import Experience from '../components/Experience';
import theme from '../lib/theme';
import { COLORS } from '@/app/components/constants';

interface LayoutClientProps {
  translations: any;
  locale: Locale;
}

function LayoutContent({ translations, locale }: LayoutClientProps) {
  const muiTheme = useTheme();
  const isDarkMode = muiTheme.palette.mode === 'dark';
  const colors = isDarkMode ? COLORS.DARK : COLORS.LIGHT;
  const common = COLORS.COMMON;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: isDarkMode ? COLORS.DARK.BG : COLORS.LIGHT.BG_START,
        backgroundImage: isDarkMode
          ? `
    radial-gradient(
      ellipse at top left,
      rgba(163, 230, 53, 0.35) 0%,
      rgba(163, 230, 53, 0.18) 10%,
      transparent 65%
    ),
     radial-gradient(
      ellipse at bottom right,
      rgba(163, 230, 53, 0.35) 0%,
      rgba(163, 230, 53, 0.18) 10%,
      transparent 35%
    ),
    linear-gradient(
      180deg,
      #0b0b0b 0%,
      #050505 100%
    )
  `
          : `
    radial-gradient(
      ellipse at top left,
      ${common.BLUE_DARK} 0%,
      ${common.BLUE_LIGHT} 30%,
      transparent 65%
    ),
      radial-gradient(
      ellipse at top right,
      ${common.BLUE_DARK} 0%,
      ${common.BLUE_LIGHT} 30%,
      transparent 65%
    ),
    radial-gradient(
      ellipse at bottom right,
      ${common.BLUE_DARK} 0%,
      ${common.BLUE_LIGHT} 30%,
      transparent 65%
    ),
     radial-gradient(
      ellipse at bottom left,
      ${common.BLUE_DARK} 0%,
      ${common.BLUE_LIGHT} 30%,
      transparent 65%
    ),
   
    linear-gradient(
      180deg,
      ${COLORS.LIGHT.BG_START} 0%,
      ${COLORS.LIGHT.BG_END} 100%
    )
  `,
        color: 'text.primary',
      }}
    >
      <Navbar locale={locale} t={translations} />
      
      <Box component="main" sx={{ flex: 1 }}>
        <Hero t={translations} />
        <About t={translations} />
        <Experience t={translations} />
        <Education t={translations} />
        <Skills t={translations} />
        <Projects t={translations} />
        <Contact t={translations} />
      </Box>

      <Footer t={translations} />
    </Box>
  );
}

export default function LayoutClient({ translations, locale }: LayoutClientProps) {
  return (
    <ThemeProvider defaultMode="dark">
      <AppThemeProvider>
        <LayoutContent translations={translations} locale={locale} />
      </AppThemeProvider>
    </ThemeProvider>
  );
}
