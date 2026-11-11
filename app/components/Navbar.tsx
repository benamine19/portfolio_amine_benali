'use client';

import React, { useState } from 'react';
import { Box, Button, Stack, Typography, IconButton, Tooltip, Drawer } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import { Locale, Translations } from '@/app/lib/i18n';
import { useTheme } from '@/app/context/ThemeContext';
import { CV_URL } from '@/app/lib/config';
import { usePortfolio } from './ui';

interface NavbarProps {
  locale: Locale;
  t: Translations;
}

export default function Navbar({ locale, t }: NavbarProps) {
  const { mode, toggleTheme } = useTheme();
  const p = usePortfolio();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const otherLocale = locale === 'en' ? 'fr' : 'en';
  const isDarkMode = mode === 'dark';
  const themeLabel = isDarkMode ? t.nav.lightMode : t.nav.darkMode;

  // Keep the current section (#hash) when switching language
  const switchLocale = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push(`/${otherLocale}${window.location.hash}`);
  };

  const navItems = [
    { label: t.nav.about, href: '#about' },
    { label: t.nav.experience, href: '#experience' },
    { label: t.nav.education, href: '#education' },
    { label: t.nav.skills, href: '#skills' },
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.contact, href: '#contact' },
  ];

  // 46px rounded square buttons on the right
  const squareSx = {
    width: 46,
    height: 46,
    minWidth: 46,
    borderRadius: '14px',
    bgcolor: p.softBg,
    border: `1px solid ${p.softBorder}`,
    color: p.accent,
    fontWeight: 700,
    fontSize: '0.95rem',
    '&:hover': { bgcolor: p.softBg, borderColor: p.accent },
  };

  return (
    <Box
      component="header"
      sx={{ position: 'sticky', top: 16, mt: 2, zIndex: 1100, px: { xs: 1.5, md: 2 } }}
    >
      <Box
        component="nav"
        sx={{
          maxWidth: 1240,
          mx: 'auto',
          height: 72,
          px: { xs: 2.5, md: 4 },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 2,
          borderRadius: '999px',
          bgcolor: p.navBg,
          border: `1px solid ${p.navBorder}`,
          boxShadow: p.navShadow,
        }}
      >
        <Link href={`/${locale}`} style={{ flexShrink: 0 }}>
          <Typography
            variant="h6"
            component="span"
            sx={{
              fontWeight: 700,
              fontSize: '1.05rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: p.heading,
            }}
          >
            {t.hero.greeting}
          </Typography>
        </Link>

        {/* Links (desktop) */}
        <Stack
          direction="row"
          spacing={{ md: 2.5, lg: 3.5 }}
          sx={{ display: { xs: 'none', md: 'flex' }, flex: 1, justifyContent: 'center', whiteSpace: 'nowrap' }}
        >
          {navItems.map((item) => (
            <Box
              key={item.href}
              component="a"
              href={item.href}
              sx={{
                color: p.text,
                fontWeight: 500,
                fontSize: '0.95rem',
                transition: 'color 0.2s ease',
                '&:hover': { color: p.accent },
              }}
            >
              {item.label}
            </Box>
          ))}
        </Stack>

        {/* Actions */}
        <Stack direction="row" spacing={1.25} alignItems="center">
          <Tooltip title={themeLabel}>
            <IconButton onClick={toggleTheme} aria-label={themeLabel} sx={squareSx}>
              {isDarkMode ? <LightModeOutlinedIcon fontSize="small" /> : <DarkModeOutlinedIcon fontSize="small" />}
            </IconButton>
          </Tooltip>

          <Button
            component={Link}
            href={`/${otherLocale}`}
            onClick={switchLocale}
            aria-label={t.nav.switchLanguage}
            sx={squareSx}
          >
            {otherLocale.toUpperCase()}
          </Button>

          <Tooltip title={t.nav.cv}>
            <IconButton
              href={CV_URL}
              download
              aria-label={t.nav.cv}
              sx={{
                ...squareSx,
                display: { xs: 'none', sm: 'inline-flex' },
                background: p.gradient,
                border: 'none',
                color: p.gradientText,
                '&:hover': { background: p.gradient, filter: 'brightness(1.06)' },
              }}
            >
              <DownloadRoundedIcon fontSize="small" />
            </IconButton>
          </Tooltip>

          <IconButton
            onClick={() => setMenuOpen(true)}
            aria-label={t.nav.openMenu}
            sx={{ ...squareSx, display: { xs: 'inline-flex', md: 'none' } }}
          >
            <MenuRoundedIcon fontSize="small" />
          </IconButton>
        </Stack>
      </Box>

      {/* Burger menu (below 900px) */}
      <Drawer
        anchor="right"
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        slotProps={{ paper: { sx: { width: 280, p: 3, bgcolor: p.navBg, backgroundImage: 'none' } } }}
      >
        <Stack spacing={3}>
          <IconButton
            onClick={() => setMenuOpen(false)}
            aria-label={t.nav.closeMenu}
            sx={{ ...squareSx, alignSelf: 'flex-end' }}
          >
            <CloseRoundedIcon fontSize="small" />
          </IconButton>
          {navItems.map((item) => (
            <Box
              key={item.href}
              component="a"
              href={item.href}
              onClick={() => setMenuOpen(false)}
              sx={{ color: p.heading, fontWeight: 600, fontSize: '1.1rem', '&:hover': { color: p.accent } }}
            >
              {item.label}
            </Box>
          ))}
          <Button
            href={CV_URL}
            download
            startIcon={<DownloadRoundedIcon />}
            sx={{
              height: 48,
              background: p.gradient,
              color: p.gradientText,
              borderRadius: '999px',
              fontWeight: 600,
              '&:hover': { background: p.gradient, filter: 'brightness(1.06)' },
            }}
          >
            {t.nav.cv}
          </Button>
        </Stack>
      </Drawer>
    </Box>
  );
}
