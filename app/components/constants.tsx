// app/constants/colors.ts
export const COLORS = {
  // Mode sombre (garder comme avant - c'est parfait)
  DARK: {
    BG: '#0b0b0b',
    TEXT_PRIMARY: '#ffffff',
    TEXT_SECONDARY: '#dcdcdc',
    GREEN_PRIMARY: '#a3e635',
    GREEN_SECONDARY: '#65a30d',
    GREEN_LIGHT: '#bef264',
    GREEN_DARK: '#4d7c0f',
    GREEN_ACCENT: '#4b6f1d',
    CHIP_BG_1: 'rgba(163,230,53,0.1)',
    CHIP_BG_2: 'rgba(163,230,53,0.15)',
    CHIP_BG_3: 'rgba(163,230,53,0.2)',
    GREEN_SHADOW: 'rgba(163,230,53,0.6)',
    HIGHLIGHT: '#d9f99d',
  },
  
  // Mode clair (background presque blanc avec gris très léger)
  LIGHT: {
    BG_START: '#ffffff',
    BG_END: '#f8fafc',
    TEXT_PRIMARY: '#0f172a',
    TEXT_SECONDARY: '#475569',
    GREEN_PRIMARY: '#059669', // Vert émeraude élégant
    GREEN_SECONDARY: '#047857',
    GREEN_LIGHT: '#10b981',
    GREEN_DARK: '#065f46',
    GREEN_ACCENT: '#f0fdf4', // Très léger
    CHIP_BG_1: 'rgba(5,150,105,0.05)',
    CHIP_BG_2: 'rgba(5,150,105,0.08)',
    CHIP_BG_3: 'rgba(5,150,105,0.12)',
    GREEN_SHADOW: 'rgba(5,150,105,0.15)',
    HIGHLIGHT: '#065f46',
    GRID_COLOR: 'rgba(148,163,184,0.1)',
  },
  
  // Couleurs communes
  COMMON: {
    PURPLE_GRADIENT_START: '#c084fc',
    PURPLE_GRADIENT_END: '#7c3aed',
    PURPLE_SHADOW: 'rgba(124,58,237,0.4)',
    BLUE_ACCENT: '#3b82f6',
    BLUE_LIGHT: 'rgba(59,130,246,0.1)',
    BLUE_DARK: 'rgba(59,130,246,0.2)',
  }
} as const;