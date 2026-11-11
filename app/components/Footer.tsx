'use client';

import { Box, Typography } from '@mui/material';
import { Translations } from '@/app/lib/i18n';
import { usePortfolio } from './ui';

interface FooterProps {
  t: Translations;
}

export default function Footer({ t }: FooterProps) {
  const p = usePortfolio();

  return (
    <Box component="footer" sx={{ px: { xs: 2, md: 3 }, py: 4, borderTop: `1px solid ${p.divider}` }}>
      <Box
        sx={{
          maxWidth: 1100,
          mx: 'auto',
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 1,
          fontSize: '0.875rem',
          color: p.textSecondary,
        }}
      >
        <Typography sx={{ fontSize: 'inherit' }}>{t.footer.copyright}</Typography>
        <Typography sx={{ fontSize: 'inherit' }}>{t.footer.location}</Typography>
      </Box>
    </Box>
  );
}
