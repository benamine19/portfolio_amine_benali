'use client';

import { Box, Typography } from '@mui/material';
import { Translations } from '@/app/lib/i18n';
import { Section, cardSx, usePortfolio } from './ui';

interface EducationProps {
  t: Translations;
}

export default function Education({ t }: EducationProps) {
  const p = usePortfolio();

  return (
    <Section id="education" title={t.education.title} maxWidth={920}>
      <Box
        sx={{
          display: 'grid',
          gap: 2.5,
          gridTemplateColumns: { xs: '1fr', md: 'repeat(2, minmax(0, 1fr))' },
        }}
      >
        {t.education.items.map((item) => (
          <Box key={item.degree} sx={{ ...cardSx(p), p: { xs: 3, md: 4 } }}>
            <Box
              component="span"
              sx={{
                display: 'inline-block',
                px: 1.5,
                py: 0.5,
                borderRadius: '999px',
                bgcolor: p.softBg,
                color: p.accent,
                fontSize: '0.8rem',
                fontWeight: 600,
              }}
            >
              {item.year}
            </Box>
            <Typography
              variant="h3" component="h3"
              sx={{ mt: 2.5, fontSize: '1.25rem', fontWeight: 700, lineHeight: 1.4, color: p.heading }}
            >
              {item.degree}
            </Typography>
            <Typography sx={{ mt: 1, fontSize: '0.9rem', fontWeight: 600, color: p.accent }}>
              {item.place}
            </Typography>
            <Typography sx={{ mt: 1.5, fontSize: '0.95rem', lineHeight: 1.7, color: p.textSecondary }}>
              {item.summary}
            </Typography>
          </Box>
        ))}
      </Box>
    </Section>
  );
}
