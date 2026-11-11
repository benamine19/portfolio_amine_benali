'use client';

import { Box, Stack, Typography } from '@mui/material';
import { Translations } from '@/app/lib/i18n';
import { Section, cardSx, usePortfolio } from './ui';

interface SkillsProps {
  t: Translations;
}

export default function Skills({ t }: SkillsProps) {
  const p = usePortfolio();

  return (
    <Section id="skills" title={t.skills.title}>
      <Box
        sx={{
          display: 'grid',
          gap: 2.5,
          gridTemplateColumns: { xs: '1fr', md: 'repeat(3, minmax(0, 1fr))' },
        }}
      >
        {t.skills.categories.map((category) => (
          <Box key={category.key} sx={{ ...cardSx(p), p: { xs: 3, md: 3.5 } }}>
            <Typography variant="h3" component="h3" sx={{ fontSize: '1.2rem', fontWeight: 700, color: p.heading }}>
              {category.title}
            </Typography>
            <Typography sx={{ mt: 0.75, fontSize: '0.875rem', color: p.textSecondary }}>
              {category.subtitle}
            </Typography>
            <Stack direction="row" flexWrap="wrap" useFlexGap spacing={1} sx={{ mt: 2.5 }}>
              {category.primary.map((skill) => (
                <Box
                  key={skill}
                  component="span"
                  sx={{
                    px: 1.75,
                    py: 0.75,
                    borderRadius: '999px',
                    bgcolor: p.chipBg,
                    border: `1px solid ${p.chipBorder}`,
                    color: p.chipText,
                    fontSize: '0.875rem',
                    fontWeight: 500,
                  }}
                >
                  {skill}
                </Box>
              ))}
            </Stack>
          </Box>
        ))}
      </Box>
    </Section>
  );
}
