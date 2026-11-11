'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import type { PortfolioTokens } from '@/app/lib/themes/buildTheme';

// Shorthand to read the portfolio design tokens from the MUI theme
export const usePortfolio = (): PortfolioTokens => useTheme().palette.portfolio;

// Standard card: 28px radius, 1px border, soft shadow
export const cardSx = (p: PortfolioTokens) => ({
  bgcolor: p.cardBg,
  border: `1px solid ${p.cardBorder}`,
  borderRadius: '28px',
  boxShadow: p.cardShadow,
});

// Pill-shaped primary button (green gradient)
export const gradientButtonSx = (p: PortfolioTokens) => ({
  background: p.gradient,
  color: p.gradientText,
  boxShadow: p.gradientShadow,
  borderRadius: '999px',
  fontWeight: 600,
  transition: 'transform 0.2s ease, filter 0.2s ease',
  '&:hover': { background: p.gradient, filter: 'brightness(1.06)', transform: 'translateY(-2px)' },
});

// Pill-shaped secondary button (outline)
export const outlineButtonSx = (p: PortfolioTokens) => ({
  color: p.accent,
  border: `1px solid ${p.cardBorder}`,
  borderRadius: '999px',
  fontWeight: 600,
  '&:hover': { borderColor: p.accent, bgcolor: p.softBg },
});

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  maxWidth?: number;
  children: React.ReactNode;
}

// Section wrapper: centered title + 64x4 gradient bar, then content
export function Section({ id, title, subtitle, maxWidth = 1100, children }: SectionProps) {
  const p = usePortfolio();

  return (
    <Box
      id={id}
      component="section"
      sx={{ py: { xs: 9, md: 12 }, px: { xs: 2, md: 3 } }}
    >
      <Box sx={{ maxWidth, mx: 'auto' }}>
        <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 6 } }}>
          <Typography
            variant="h2" component="h2"
            sx={{
              fontSize: { xs: '2.25rem', md: '3rem' },
              fontWeight: 700,
              letterSpacing: '-0.02em',
              lineHeight: 1.15,
              color: p.heading,
            }}
          >
            {title}
          </Typography>
          <Box
            sx={{ width: 64, height: 4, borderRadius: '2px', background: p.gradient, mx: 'auto', mt: 3 }}
          />
          {subtitle && (
            <Typography sx={{ mt: 3, fontSize: '1.05rem', color: p.textSecondary }}>
              {subtitle}
            </Typography>
          )}
        </Box>
        {children}
      </Box>
    </Box>
  );
}
