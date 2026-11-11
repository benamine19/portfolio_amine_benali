'use client';

import { Box, Typography } from '@mui/material';
import { Translations } from '@/app/lib/i18n';
import { Section, cardSx, usePortfolio } from './ui';

interface ExperienceProps {
  t: Translations;
}

export default function Experience({ t }: ExperienceProps) {
  const p = usePortfolio();
  const items = t.experience.items;

  return (
    <Section id="experience" title={t.experience.title} maxWidth={1010}>
      <Box sx={{ ...cardSx(p), px: { xs: 3, md: 5.5 }, py: { xs: 1, md: 2 } }}>
        {items.map((item, index) => (
          <Box
            key={`${item.company}-${index}`}
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '56px minmax(0, 1fr)' },
              gap: { xs: 2, sm: 2.5 },
              py: { xs: 3, md: 4 },
              borderBottom: index < items.length - 1 ? `1px solid ${p.divider}` : 'none',
            }}
          >
            {/* Initials */}
            <Box
              sx={{
                width: 56,
                height: 56,
                borderRadius: '50%',
                bgcolor: p.softBg,
                border: `1px solid ${p.softBorder}`,
                color: p.accent,
                fontWeight: 700,
                fontSize: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {item.initials}
            </Box>

            <Box sx={{ minWidth: 0 }}>
              {/* Role + period on the same line */}
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  justifyContent: 'space-between',
                  alignItems: { xs: 'flex-start', sm: 'baseline' },
                  gap: { xs: 0.5, sm: 2 },
                }}
              >
                <Typography variant="h3" component="h3" sx={{ fontSize: '1.25rem', fontWeight: 700, color: p.heading }}>
                  {item.role}
                </Typography>
                <Typography sx={{ fontSize: '0.875rem', color: p.textSecondary, whiteSpace: 'nowrap' }}>
                  {item.period}
                </Typography>
              </Box>

              <Typography sx={{ mt: 0.75, fontSize: '0.9rem', fontWeight: 600, color: p.accent }}>
                {item.company} · {item.location}
              </Typography>

              {/* Full description (paragraphs separated by line breaks in the JSON) */}
              <Typography
                sx={{ mt: 1.5, fontSize: '0.98rem', lineHeight: 1.75, color: p.text, whiteSpace: 'pre-line' }}
              >
                {item.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Section>
  );
}
