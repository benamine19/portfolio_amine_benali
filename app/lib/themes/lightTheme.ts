import { Theme } from '@mui/material/styles';
import { buildTheme, PortfolioTokens } from './buildTheme';

export const lightTokens: PortfolioTokens = {
  pageBg: '#DFE9F8',
  heroHalos: 'none',
  gridLine: 'rgba(15,23,42,0.08)',
  navBg: '#FFFFFF',
  navBorder: '#E2E8F0',
  navShadow: '0 10px 30px rgba(15,23,42,0.08)',
  cardBg: '#FFFFFF',
  cardBorder: '#D6E2F3',
  cardShadow: '0 12px 32px rgba(15,23,42,0.08)',
  softBg: '#EAF6F1',
  softBorder: '#CFE7DF',
  divider: '#E3EAF3',
  heading: '#0F172A',
  text: '#1E2A3A',
  textSecondary: '#4B5563',
  accent: '#0E9F6E',
  gradient: 'linear-gradient(135deg, #10A87A, #0A7956)',
  gradientText: '#FFFFFF',
  gradientShadow: '0 8px 30px rgba(14,159,110,0.30)',
  badgeBg: '#CFE6EE',
  badgeBorder: '#B5D8E0',
  badgeText: '#0E9F6E',
  chipBg: '#D3E3F4',
  chipBorder: '#C1D6EB',
  chipText: '#445365',
};

export const createLightTheme = (): Theme => buildTheme('light', lightTokens);

export default createLightTheme;
