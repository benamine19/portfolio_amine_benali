import { createTheme, Theme } from '@mui/material/styles';

export const createLightTheme = (): Theme =>
  createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#84cc16',
        light: '#a3e635',
        dark: '#65a30d',
        contrastText: '#ffffff',
      },
      secondary: {
        main: '#8b5cf6',
        light: '#a78bfa',
        dark: '#7c3aed',
        contrastText: '#ffffff',
      },
      background: {
        default: '#fafaf9',
        paper: '#ffffff',
      },
      text: {
        primary: '#1f2937',
        secondary: '#6b7280',
      },
      divider: '#e5e7eb',
      success: {
        main: '#4caf50',
        light: '#81c784',
        dark: '#388e3c',
      },
      error: {
        main: '#f44336',
        light: '#ef5350',
        dark: '#d32f2f',
      },
      warning: {
        main: '#ff9800',
        light: '#ffb74d',
        dark: '#f57c00',
      },
      info: {
        main: '#2196f3',
        light: '#64b5f6',
        dark: '#1976d2',
      },
    },
    typography: {
      fontFamily: '"Segoe UI", "Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontSize: '3.5rem',
        fontWeight: 700,
        letterSpacing: '-0.015em',
        lineHeight: 1.2,
        '@media (max-width:600px)': {
          fontSize: '2rem',
        },
      },
      h2: {
        fontSize: '2.5rem',
        fontWeight: 600,
        letterSpacing: '-0.01em',
        lineHeight: 1.3,
        '@media (max-width:600px)': {
          fontSize: '1.75rem',
        },
      },
      h3: {
        fontSize: '2rem',
        fontWeight: 600,
        lineHeight: 1.4,
        '@media (max-width:600px)': {
          fontSize: '1.5rem',
        },
      },
      body1: {
        fontSize: '1rem',
        lineHeight: 1.6,
      },
      body2: {
        fontSize: '0.875rem',
        lineHeight: 1.5,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            fontSize: '1rem',
            fontWeight: 600,
            borderRadius: '8px',
            padding: '10px 24px',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-2px)',
            },
          },
          containedPrimary: {
            background: 'linear-gradient(135deg, #1e88e5 0%, #1565c0 100%)',
            boxShadow: '0 4px 12px rgba(30, 136, 229, 0.3)',
            '&:hover': {
              boxShadow: '0 8px 24px rgba(30, 136, 229, 0.4)',
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            background: 'linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)',
            border: '1px solid #e0e0e0',
            borderRadius: '12px',
            transition: 'all 0.3s ease',
            '&:hover': {
              borderColor: '#1e88e5',
              boxShadow: '0 8px 32px rgba(30, 136, 229, 0.15)',
              transform: 'translateY(-4px)',
            },
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            background: 'linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)',
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid #e0e0e0',
            boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)',
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            background: 'linear-gradient(135deg, rgba(30, 136, 229, 0.1) 0%, rgba(66, 165, 245, 0.1) 100%)',
            border: '1px solid rgba(30, 136, 229, 0.3)',
            '&:hover': {
              background: 'linear-gradient(135deg, rgba(30, 136, 229, 0.15) 0%, rgba(66, 165, 245, 0.15) 100%)',
            },
          },
        },
      },
    },
    shape: {
      borderRadius: 8,
    },
  });

export default createLightTheme;
