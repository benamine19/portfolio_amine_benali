import { createTheme, Theme } from '@mui/material/styles';

// Design tokens for the portfolio, available as theme.palette.portfolio
export interface PortfolioTokens {
  pageBg: string;
  heroHalos: string;
  gridLine: string;
  navBg: string;
  navBorder: string;
  navShadow: string;
  cardBg: string;
  cardBorder: string;
  cardShadow: string;
  softBg: string;
  softBorder: string;
  divider: string;
  heading: string;
  text: string;
  textSecondary: string;
  accent: string;
  gradient: string;
  gradientText: string;
  gradientShadow: string;
  badgeBg: string;
  badgeBorder: string;
  badgeText: string;
  chipBg: string;
  chipBorder: string;
  chipText: string;
}

declare module '@mui/material/styles' {
  interface Palette {
    portfolio: PortfolioTokens;
  }
  interface PaletteOptions {
    portfolio?: PortfolioTokens;
  }
}

// Fonts loaded with next/font in app/layout.tsx (CSS variables)
const HEADING_FONT = 'var(--font-heading), "Segoe UI", "Helvetica", "Arial", sans-serif';
const BODY_FONT = 'var(--font-body), "Segoe UI", "Helvetica", "Arial", sans-serif';

export const buildTheme = (mode: 'light' | 'dark', tokens: PortfolioTokens): Theme =>
  createTheme({
    palette: {
      mode,
      primary: { main: tokens.accent, contrastText: tokens.gradientText },
      background: { default: tokens.pageBg, paper: tokens.cardBg },
      text: { primary: tokens.text, secondary: tokens.textSecondary },
      divider: tokens.divider,
      portfolio: tokens,
    },
    typography: {
      fontFamily: BODY_FONT,
      h1: { fontFamily: HEADING_FONT },
      h2: { fontFamily: HEADING_FONT },
      h3: { fontFamily: HEADING_FONT },
      h4: { fontFamily: HEADING_FONT },
      h5: { fontFamily: HEADING_FONT },
      h6: { fontFamily: HEADING_FONT },
      button: { textTransform: 'none', fontWeight: 600 },
    },
    shape: { borderRadius: 12 },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: { backgroundColor: tokens.pageBg, color: tokens.text },
        },
      },
      MuiButton: {
        defaultProps: { disableElevation: true },
      },
    },
  });
