'use client';

import { Box, Button, Stack, Typography } from '@mui/material';
import { Translations } from '@/app/lib/i18n';
import { Section, cardSx, outlineButtonSx, usePortfolio } from './ui';

interface ContactProps {
  t: Translations;
}

export default function Contact({ t }: ContactProps) {
  const p = usePortfolio();
  const c = t.contact;

  const rows = [
    { label: c.emailLabel, value: c.email, href: `mailto:${c.email}`, external: false },
    { label: c.whatsappLabel, value: c.whatsappCta, href: c.whatsappUrl, external: true },
  ];

  const links = [
    { label: c.linkedin, href: c.linkedinUrl },
    { label: c.github, href: c.githubUrl },
  ];

  return (
    <Section id="contact" title={c.title} subtitle={c.description} maxWidth={700}>
      <Box sx={{ ...cardSx(p), p: { xs: 2.5, md: 4 } }}>
        <Stack spacing={1.75}>
          {rows.map((row) => (
            <Box
              key={row.label}
              component="a"
              href={row.href}
              {...(row.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 2,
                px: { xs: 2.5, md: 3 },
                py: 2.5,
                borderRadius: '18px',
                bgcolor: p.softBg,
                border: `1px solid ${p.softBorder}`,
                transition: 'border-color 0.2s ease',
                '&:hover': { borderColor: p.accent },
                '&:hover .arrow': { transform: 'translateX(4px)' },
              }}
            >
              <Box sx={{ minWidth: 0 }}>
                <Typography sx={{ fontSize: '0.8rem', color: p.textSecondary }}>{row.label}</Typography>
                <Typography
                  sx={{ mt: 0.25, fontSize: '1.05rem', fontWeight: 600, color: p.heading, overflowWrap: 'anywhere' }}
                >
                  {row.value}
                </Typography>
              </Box>
              <Box
                component="span"
                className="arrow"
                aria-hidden
                sx={{ color: p.accent, fontSize: '1.25rem', transition: 'transform 0.2s ease' }}
              >
                →
              </Box>
            </Box>
          ))}

          <Stack direction="row" spacing={1.5} sx={{ pt: 0.5 }}>
            {links.map((link) => (
              <Button
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                fullWidth
                sx={{ ...outlineButtonSx(p), height: 50, fontSize: '1rem' }}
              >
                {link.label}
              </Button>
            ))}
          </Stack>
        </Stack>
      </Box>
    </Section>
  );
}
