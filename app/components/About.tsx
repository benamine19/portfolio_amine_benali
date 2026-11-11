'use client';

import { Box, Stack, Typography } from '@mui/material';
import { Translations } from '@/app/lib/i18n';
import { Section, cardSx, usePortfolio } from './ui';

interface AboutProps {
  t: Translations;
}

export default function About({ t }: AboutProps) {
  const p = usePortfolio();

  return (
    <Section id="about" title={t.about.title} maxWidth={1010}>
      <Box
        sx={{
          ...cardSx(p),
          p: { xs: 3, md: 6 },
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'minmax(0, 1fr) 240px' },
          gap: { xs: 4, md: 7 },
          alignItems: 'start',
        }}
      >
        <Stack spacing={2.5}>
          {t.about.description.split('\n\n').map((paragraph, index) => (
            <Typography key={index} sx={{ fontSize: '1.05rem', lineHeight: 1.8, color: p.text }}>
              {paragraph}
            </Typography>
          ))}
        </Stack>

        {/* Key figures */}
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 1.5 }}>
          {t.about.stats.map((stat) => (
            <Box
              key={stat.label}
              sx={{
                px: 1.5,
                py: 2.5,
                textAlign: 'center',
                borderRadius: '18px',
                bgcolor: p.softBg,
                border: `1px solid ${p.softBorder}`,
              }}
            >
              <Typography variant="h3" component="p" sx={{ fontSize: '1.9rem', fontWeight: 700, lineHeight: 1.2, color: p.accent }}>
                {stat.value}
              </Typography>
              <Typography sx={{ mt: 0.75, fontSize: '0.85rem', lineHeight: 1.5, color: p.textSecondary }}>
                {stat.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Section>
  );
}
