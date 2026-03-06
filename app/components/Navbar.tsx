"use client";

import React from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Stack,
  Typography,
  IconButton,
  Tooltip,
  Container,
} from '@mui/material';
import { useTheme as useMuiTheme } from '@mui/material/styles';
import Link from 'next/link';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Locale } from '@/app/lib/i18n';
import { useTheme } from '@/app/context/ThemeContext';
import { COLORS } from './constants';

interface NavbarProps {
  locale: Locale;
  t: any;
}

export default function Navbar({ locale, t }: NavbarProps) {
  const { mode, toggleTheme } = useTheme();
  const theme = useMuiTheme();
  const otherLocale = locale === 'en' ? 'fr' : 'en';

  const isDarkMode = mode === 'dark';
  const colors = isDarkMode ? COLORS.DARK : COLORS.LIGHT;
  const common = COLORS.COMMON;

  const navItems = [
    { label: t.nav.about, href: '#about' },
    { label: 'Expérience', href: '#experience' },
    { label: t.nav.education, href: '#education' },
    { label: t.nav.skills, href: '#skills' },
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.contact, href: '#contact' },
  ];

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        top: '15px',
        zIndex: 1100,
        maxWidth: '1200px',
        mx: 'auto',
        borderRadius: '999px',
        left: { xs: '10px', md: '0' },
        right: { xs: '10px', md: '0' },
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
      }}
    >
      <Box
        sx={{
          width: '100%',
          background: isDarkMode
            ? 'linear-gradient(90deg, rgba(11, 11, 11, 0.92) 0%, rgba(5, 5, 5, 0.92) 100%)'
            : 'linear-gradient(90deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.95) 100%)',
          borderRadius: '999px',
          border: `1.5px solid ${colors.GREEN_PRIMARY}${isDarkMode ? '20' : '12'}`,
          boxShadow: `0 8px 32px ${isDarkMode ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0.08)'}`,
        }}
      >
        <Toolbar
          sx={{
            background: isDarkMode
              ? 'rgba(11, 11, 11, 0.88)'
              : 'rgba(255, 255, 255, 0.88)',
            backdropFilter: 'blur(12px)',
            border: `1.5px solid ${colors.GREEN_PRIMARY}${isDarkMode ? '25' : '15'}`,
            borderRadius: '999px',
            height: 80,
            px: { xs: 3, md: 4 },
            display: 'flex',
            justifyContent: 'space-between',
            maxWidth: 1200,
            mx: 'auto',
            position: 'relative',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            '&:hover': {
              background: isDarkMode
                ? 'rgba(11, 11, 11, 0.96)'
                : 'rgba(255, 255, 255, 0.98)',
              borderColor: `${colors.GREEN_PRIMARY}${isDarkMode ? '40' : '25'}`,
              boxShadow: `0 16px 48px ${colors.GREEN_SHADOW}`,
            },
          }}
        >
          {/* Logo */}
          <Link href={`/${locale}`} style={{ textDecoration: 'none' }}>
         <Stack spacing={0}>
  <Typography
    sx={{
      fontWeight: 700,
      fontSize: '1.1rem',
      letterSpacing: 1,
      color: isDarkMode ? '#ffffff' : '#0f172a',
    }}
  >
    AMINE BENALI
  </Typography>

  <Typography
    sx={{
      fontSize: '0.75rem',
      color: colors.TEXT_SECONDARY,
      letterSpacing: 1,
    }}
  >
    Information Systems & Software Engineering
  </Typography>
</Stack>

          </Link>

          {/* Links */}
          <Stack
            direction="row"
            spacing={4}
            sx={{ 
              display: { xs: 'none', md: 'flex' },
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          >
            {navItems.map((item) => (
              <Box
                key={item.href}
                component="a"
                href={item.href}
                sx={{
                  color: colors.TEXT_SECONDARY,
                  fontWeight: 500,
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  letterSpacing: '0.3px',
                  '&:hover': {
                    color: colors.GREEN_PRIMARY,
                    transform: 'translateY(-3px)',
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -5,
                    left: 0,
                    width: 0,
                    height: '2.5px',
                    background: `linear-gradient(90deg, ${colors.GREEN_PRIMARY}, ${colors.GREEN_SECONDARY})`,
                    transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    borderRadius: '2px',
                  },
                  '&:hover::after': {
                    width: '100%',
                  },
                }}
              >
                {item.label}
              </Box>
            ))}
          </Stack>

          {/* Right Side */}
          <Stack direction="row" spacing={2} alignItems="center">
            {/* Theme Toggle */}
            <Tooltip title={isDarkMode ? 'Light Mode' : 'Dark Mode'}>
              <IconButton
                onClick={toggleTheme}
                sx={{
                  color: colors.GREEN_PRIMARY,
                  background: colors.CHIP_BG_1,
                  border: `1.5px solid ${colors.GREEN_PRIMARY}${isDarkMode ? '30' : '20'}`,
                  borderRadius: '12px',
                  width: 44,
                  height: 44,
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    background: colors.CHIP_BG_3,
                    transform: 'rotate(18deg) scale(1.12)',
                    boxShadow: `0 4px 24px ${colors.GREEN_SHADOW}`,
                  },
                }}
              >
                {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
              </IconButton>
            </Tooltip>

            {/* Language Switcher */}
            <Link href={`/${otherLocale}`} style={{ textDecoration: 'none' }}>
              <Button
                sx={{
                  minWidth: 50,
                  borderRadius: '12px',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  background: colors.CHIP_BG_1,
                  color: colors.GREEN_PRIMARY,
                  border: `1.5px solid ${colors.GREEN_PRIMARY}${isDarkMode ? '30' : '20'}`,
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  height: 44,
                  letterSpacing: '0.5px',
                  '&:hover': {
                    background: colors.CHIP_BG_3,
                    transform: 'translateY(-3px)',
                    boxShadow: `0 6px 28px ${colors.GREEN_SHADOW}`,
                    color: colors.HIGHLIGHT,
                  },
                }}
              >
                {otherLocale.toUpperCase()}
              </Button>
            </Link>
          </Stack>
        </Toolbar>
      </Box>
    </AppBar>
  );
}