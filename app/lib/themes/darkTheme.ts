import { Theme } from '@mui/material/styles';
import { buildTheme, PortfolioTokens } from './buildTheme';

export const darkTokens: PortfolioTokens = {
  pageBg: '#050605',
  heroHalos:
    'radial-gradient(800px 600px at 0% 35%, rgba(110,170,30,0.45), transparent 70%), radial-gradient(700px 500px at 100% 100%, rgba(110,170,30,0.30), transparent 70%)',
  gridLine: 'rgba(255,255,255,0.10)',
  navBg: '#0A0A0A',
  navBorder: '#1F2B16',
  navShadow: '0 10px 30px rgba(0,0,0,0.5)',
  cardBg: '#0D100C',
  cardBorder: '#2F4A1C',
  cardShadow: '0 12px 32px rgba(0,0,0,0.45)',
  softBg: '#172211',
  softBorder: '#25381A',
  divider: '#1E2A17',
  heading: '#FFFFFF',
  text: '#E6E9E4',
  textSecondary: '#C9CFC6',
  accent: '#8DD63B',
  gradient: 'linear-gradient(135deg, #9BE43C, #6AAE1E)',
  gradientText: '#0A1400',
  gradientShadow: '0 8px 30px rgba(141,214,59,0.35)',
  badgeBg: 'rgba(28,62,72,0.55)',
  badgeBorder: '#2D5A63',
  badgeText: '#8DD63B',
  chipBg: '#0F1E30',
  chipBorder: '#2A4766',
  chipText: '#DCE4EE',
};

export const createDarkTheme = (): Theme => buildTheme('dark', darkTokens);

export default createDarkTheme;
