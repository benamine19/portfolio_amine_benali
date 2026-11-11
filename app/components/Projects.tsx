'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Box, Button, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Translations } from '@/app/lib/i18n';
import type { ProjectItem } from '@/app/types';
import ProjectDialog from './ProjectDialog';
import { Section, cardSx, gradientButtonSx, outlineButtonSx, usePortfolio } from './ui';

interface ProjectsProps {
  t: Translations;
}

// The mockups leave a wide dark margin around the screens: zoom in so they fill the card
const IMAGE_ZOOM = 1.2;

// Local mockups exist in two versions (name-dark.jpg / name-light.jpg): pick the one matching the theme
const themedImage = (src: string, mode: 'light' | 'dark') =>
  mode === 'light' && src.startsWith('/images/') ? src.replace(/-dark\.(\w+)$/, '-light.$1') : src;

export default function Projects({ t }: ProjectsProps) {
  const p = usePortfolio();
  const mode = useTheme().palette.mode;
  const items = t.projects.items as unknown as ProjectItem[];
  // `selected` stays set while the dialog closes, so its exit animation can play
  const [selected, setSelected] = useState<number | null>(null);
  const [open, setOpen] = useState(false);

  const openProject = (i: number) => {
    setSelected(i);
    setOpen(true);
  };

  return (
    <Section id="projects" title={t.projects.title}>
      <Box
        sx={{
          display: 'grid',
          gap: 2.75,
          gridTemplateColumns: { xs: '1fr', md: 'repeat(3, minmax(0, 1fr))' },
        }}
      >
        {items.map((project, i) => (
          <Box
            key={project.title}
            component="article"
            sx={{ ...cardSx(p), overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
          >
            {/* 16:9 visual */}
            <Box
              sx={{
                position: 'relative',
                overflow: 'hidden',
                aspectRatio: '16 / 9',
                bgcolor: p.softBg,
                borderBottom: `1px solid ${p.cardBorder}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
              onClick={() => openProject(i)}
            >
              {project.image ? (
                <Image
                  src={themedImage(project.image, mode)}
                  alt={project.title}
                  fill
                  // Real rendered width (3 columns from 900px), so the browser downloads a sharp enough version
                  sizes="(max-width: 900px) 100vw, 34vw"
                  quality={90}
                  style={{ objectFit: 'cover', transform: `scale(${IMAGE_ZOOM})` }}
                />
              ) : (
                <Typography sx={{ fontSize: '0.85rem', color: p.textSecondary }}>
                  {t.projects.imagePlaceholder}
                </Typography>
              )}
            </Box>

            <Box sx={{ p: 3, flex: 1, display: 'flex', flexDirection: 'column' }}>
              <Box
                component="span"
                sx={{
                  alignSelf: 'flex-start',
                  px: 1.5,
                  py: 0.5,
                  borderRadius: '999px',
                  bgcolor: p.softBg,
                  color: p.accent,
                  fontSize: '0.75rem',
                  fontWeight: 600,
                }}
              >
                {project.category}
              </Box>
              <Typography
                variant="h3" component="h3"
                sx={{ mt: 1.75, fontSize: '1.2rem', fontWeight: 700, lineHeight: 1.35, color: p.heading }}
              >
                {project.title}
              </Typography>
              <Typography sx={{ mt: 1.25, fontSize: '0.92rem', lineHeight: 1.65, color: p.textSecondary }}>
                {project.description}
              </Typography>
              <Typography sx={{ mt: 1.5, fontSize: '0.85rem', fontWeight: 600, color: p.text }}>
                {project.stack}
              </Typography>

              {/* Buttons stick to the bottom so every card lines up; the external links only show once set in the JSON */}
              <Stack direction="row" spacing={1.25} sx={{ mt: 'auto', pt: 3, flexWrap: 'wrap', rowGap: 1.25 }}>
                <Button
                  onClick={() => openProject(i)}
                  aria-haspopup="dialog"
                  sx={{ ...gradientButtonSx(p), height: 44, px: 2.5, fontSize: '0.9rem' }}
                >
                  {t.projects.dialog.details}
                </Button>
                {project.url && (
                  <Button
                    component="a"
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ ...outlineButtonSx(p), height: 44, px: 2.5, fontSize: '0.9rem' }}
                  >
                    {t.projects.viewProject}
                  </Button>
                )}
                {project.github && (
                  <Button
                    component="a"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ ...outlineButtonSx(p), height: 44, px: 2.5, fontSize: '0.9rem' }}
                  >
                    {t.projects.code}
                  </Button>
                )}
              </Stack>
            </Box>
          </Box>
        ))}
      </Box>

      {selected !== null && (
        <ProjectDialog
          key={selected}
          project={items[selected]}
          open={open}
          onClose={() => setOpen(false)}
          labels={t.projects.dialog}
        />
      )}
    </Section>
  );
}
