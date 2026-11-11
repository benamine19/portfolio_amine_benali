'use client';

import React from 'react';
import Image from 'next/image';
import { Box, Button, Typography, Stack } from '@mui/material';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import { Translations } from '@/app/lib/i18n';
import { CV_URL, PROFILE_PHOTO } from '@/app/lib/config';
import { usePortfolio, gradientButtonSx, outlineButtonSx } from './ui';

interface HeroProps {
  t: Translations;
  hasPhoto: boolean;
}

// Height taken by the sticky navbar (16px margin + 72px bar): the hero slides under it
const NAV_OFFSET = 88;

export default function Hero({ t, hasPhoto }: HeroProps) {
  const p = usePortfolio();

  return (
    <Box
      component="section"
      sx={{
        mt: `-${NAV_OFFSET}px`,
        pt: `${NAV_OFFSET}px`,
        backgroundImage: p.heroHalos,
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* 1100px grid container: lines every 96px, vertical borders */}
      <Box
        sx={{
          maxWidth: 1100,
          mx: 'auto',
          px: { xs: 2.5, md: 7 },
          py: { xs: 8, md: 12 },
          borderLeft: `1px solid ${p.gridLine}`,
          borderRight: `1px solid ${p.gridLine}`,
          backgroundImage: `linear-gradient(${p.gridLine} 1px, transparent 1px), linear-gradient(90deg, ${p.gridLine} 1px, transparent 1px)`,
          backgroundSize: '96px 96px',
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'minmax(0, 1fr) 280px' },
          gap: { xs: 6, md: 8 },
          alignItems: 'center',
        }}
      >
        <Box>
          <Box
            component="span"
            sx={{
              display: 'inline-block',
              px: 2,
              py: 0.75,
              borderRadius: '999px',
              bgcolor: p.badgeBg,
              border: `1px solid ${p.badgeBorder}`,
              color: p.badgeText,
              fontSize: '0.875rem',
              fontWeight: 600,
            }}
          >
            {t.hero.badge}
          </Box>

          <Typography
            variant="h1" component="h1"
            sx={{
              mt: 3,
              fontSize: 'clamp(48px, 7vw, 92px)',
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              color: p.heading,
            }}
          >
            {t.hero.greeting}
          </Typography>

          <Typography
            variant="h2"
            component="p"
            sx={{
              mt: 2.5,
              fontSize: { xs: '1.6rem', md: '2.25rem' },
              fontWeight: 600,
              lineHeight: 1.45,
              color: p.accent,
            }}
          >
            {t.hero.title}
          </Typography>

          <Typography
            sx={{ mt: 3, maxWidth: 620, fontSize: '1.1rem', lineHeight: 1.75, color: p.textSecondary }}
          >
            {t.hero.description}
          </Typography>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 5 }}>
            <Button
              href={CV_URL}
              download
              startIcon={<DownloadRoundedIcon />}
              sx={{ ...gradientButtonSx(p), height: 56, px: 4, fontSize: '1rem' }}
            >
              {t.hero.ctaCv}
            </Button>
            <Button href="#projects" sx={{ ...outlineButtonSx(p), height: 56, px: 4, fontSize: '1rem' }}>
              {t.hero.ctaProjects}
            </Button>
          </Stack>

          <Stack
            direction="row"
            flexWrap="wrap"
            useFlexGap
            spacing={3}
            sx={{ mt: 4, fontSize: '0.875rem', color: p.textSecondary }}
          >
            <span>{t.hero.location}</span>
            <span>{t.hero.languages}</span>
          </Stack>
        </Box>

        {/* Photo card 4:5 */}
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            maxWidth: { xs: 320, md: 'none' },
            mx: { xs: 'auto', md: 0 },
            aspectRatio: '4 / 5',
            borderRadius: '28px',
            overflow: 'hidden',
            bgcolor: p.cardBg,
            border: `1px solid ${p.cardBorder}`,
            boxShadow: p.cardShadow,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {hasPhoto ? (
            <Image
              src={PROFILE_PHOTO}
              alt={t.hero.photoAlt}
              fill
              priority
              sizes="(max-width: 900px) 320px, 280px"
              style={{ objectFit: 'cover' }}
            />
          ) : (
            <Typography sx={{ fontSize: '0.9rem', color: p.textSecondary }}>
              {t.hero.photoPlaceholder}
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
}
