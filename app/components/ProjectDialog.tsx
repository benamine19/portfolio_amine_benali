'use client';

import { useCallback, useMemo, useState } from 'react';
import Image from 'next/image';
import { Box, Button, Dialog, DialogContent, DialogTitle, IconButton, Stack, Typography, useMediaQuery } from '@mui/material';
import { useTheme as useMuiTheme } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import HubIcon from '@mui/icons-material/Hub';
import type { ProjectDialogLabels, ProjectItem } from '@/app/types';
import { gradientButtonSx, outlineButtonSx, usePortfolio } from './ui';

interface ProjectDialogProps {
  project: ProjectItem;
  open: boolean;
  onClose: () => void;
  labels: ProjectDialogLabels;
}

const TITLE_ID = 'project-dialog-title';

// Icon of each highlight section
const SECTION_ICONS = { ai: AutoAwesomeIcon, system: HubIcon } as const;

// Round overlay button used on the gallery (arrows, enlarge, close)
const overlayButtonSx = {
  bgcolor: 'rgba(10,14,31,0.7)',
  color: '#FFFFFF',
  width: 44,
  height: 44,
  backdropFilter: 'blur(6px)',
  '&:hover': { bgcolor: 'rgba(10,14,31,0.9)' },
  '&.Mui-focusVisible': { outline: '2px solid #FFFFFF', outlineOffset: 2 },
} as const;

/**
 * Full project sheet: demo screenshots gallery (tabs by area, lightbox),
 * description, key features, role and detailed technology stack.
 * Mount it with a `key` per project so its state resets between projects.
 */
export default function ProjectDialog({ project, open, onClose, labels }: ProjectDialogProps) {
  const p = usePortfolio();
  const muiTheme = useMuiTheme();
  const fullScreen = useMediaQuery(muiTheme.breakpoints.down('md'));

  const groups = useMemo(() => Array.from(new Set(project.gallery.map((g) => g.group))), [project.gallery]);
  const [group, setGroup] = useState(groups[0] ?? '');
  const [index, setIndex] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  const shots = useMemo(() => project.gallery.filter((g) => g.group === group), [project.gallery, group]);
  const current = shots[index] ?? shots[0];
  const links = [
    { href: project.url, label: labels.viewProject, primary: true },
    { href: project.github, label: labels.code, primary: false },
  ].filter((l) => l.href);
  // Fall back to the card's stack line when no detailed stack is provided
  const stackGroups = project.stackDetails.length
    ? project.stackDetails
    : [{ label: '', items: project.stack.split(' · ').filter(Boolean) }];

  const go = useCallback(
    (step: number) => {
      if (shots.length > 1) setIndex((i) => (i + step + shots.length) % shots.length);
    },
    [shots.length],
  );

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') go(-1);
    if (e.key === 'ArrowRight') go(1);
  };

  const selectGroup = (g: string) => {
    setGroup(g);
    setIndex(0);
  };

  const chipSx = {
    display: 'inline-block',
    px: 1.5,
    py: 0.5,
    borderRadius: '999px',
    border: `1px solid ${p.chipBorder}`,
    bgcolor: p.chipBg,
    color: p.chipText,
    fontSize: '0.8rem',
    fontWeight: 600,
  } as const;

  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        fullScreen={fullScreen}
        maxWidth={false}
        scroll="paper"
        aria-labelledby={TITLE_ID}
        onKeyDown={onKeyDown}
        slotProps={{
          paper: {
            sx: {
              width: fullScreen ? '100%' : 'min(1120px, calc(100% - 48px))',
              borderRadius: fullScreen ? 0 : '28px',
              bgcolor: p.cardBg,
              backgroundImage: 'none',
              border: fullScreen ? 'none' : `1px solid ${p.cardBorder}`,
              boxShadow: p.cardShadow,
            },
          },
        }}
      >
        <DialogTitle
          id={TITLE_ID}
          component="div"
          sx={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: 2,
            px: { xs: 2.5, md: 4 },
            py: 2.5,
            borderBottom: `1px solid ${p.divider}`,
          }}
        >
          <Box sx={{ minWidth: 0 }}>
            <Box
              component="span"
              sx={{ ...chipSx, bgcolor: p.softBg, borderColor: p.softBorder, color: p.accent, fontSize: '0.75rem' }}
            >
              {project.category}
            </Box>
            <Typography
              variant="h3"
              component="h2"
              sx={{ mt: 1.25, fontSize: { xs: '1.3rem', md: '1.6rem' }, fontWeight: 700, lineHeight: 1.3, color: p.heading }}
            >
              {project.title}
            </Typography>
          </Box>
          <IconButton
            aria-label={labels.close}
            onClick={onClose}
            sx={{ color: p.heading, border: `1px solid ${p.cardBorder}`, flexShrink: 0 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent sx={{ px: { xs: 2.5, md: 4 }, py: { xs: 3, md: 4 } }}>
          {/* ---- Demo screenshots ---- */}
          {current && (
            <Box component="section" aria-label={labels.gallery} sx={{ mb: { xs: 4, md: 5 } }}>
              {groups.length > 1 && (
                <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: 'wrap', rowGap: 1 }} role="tablist">
                  {groups.map((g) => {
                    const active = g === group;
                    return (
                      <Button
                        key={g}
                        role="tab"
                        aria-selected={active}
                        onClick={() => selectGroup(g)}
                        sx={{
                          ...(active ? gradientButtonSx(p) : outlineButtonSx(p)),
                          height: 38,
                          px: 2,
                          fontSize: '0.85rem',
                        }}
                      >
                        {g}
                      </Button>
                    );
                  })}
                </Stack>
              )}

              <Box
                sx={{
                  position: 'relative',
                  aspectRatio: { xs: '4 / 3', md: '16 / 10' },
                  bgcolor: p.softBg,
                  border: `1px solid ${p.cardBorder}`,
                  borderRadius: '20px',
                  overflow: 'hidden',
                }}
              >
                <Image
                  key={current.src}
                  src={current.src}
                  alt={current.caption}
                  fill
                  sizes="(max-width: 1200px) 100vw, 1060px"
                  quality={90}
                  priority
                  style={{ objectFit: 'contain' }}
                />
                {/* Clicking the image opens the lightbox */}
                <Box
                  component="button"
                  type="button"
                  aria-label={labels.enlarge}
                  onClick={() => setLightbox(true)}
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    border: 0,
                    p: 0,
                    background: 'transparent',
                    cursor: 'zoom-in',
                    '&:focus-visible': { outline: `3px solid ${p.accent}`, outlineOffset: -3 },
                  }}
                />
                <IconButton aria-label={labels.enlarge} onClick={() => setLightbox(true)} sx={{ ...overlayButtonSx, position: 'absolute', top: 12, right: 12 }}>
                  <OpenInFullIcon fontSize="small" />
                </IconButton>
                {shots.length > 1 && (
                  <>
                    <IconButton aria-label={labels.previous} onClick={() => go(-1)} sx={{ ...overlayButtonSx, position: 'absolute', top: '50%', left: 12, transform: 'translateY(-50%)' }}>
                      <ChevronLeftIcon />
                    </IconButton>
                    <IconButton aria-label={labels.next} onClick={() => go(1)} sx={{ ...overlayButtonSx, position: 'absolute', top: '50%', right: 12, transform: 'translateY(-50%)' }}>
                      <ChevronRightIcon />
                    </IconButton>
                    <Box
                      aria-hidden
                      sx={{ position: 'absolute', bottom: 12, right: 12, px: 1.5, py: 0.5, borderRadius: '999px', bgcolor: 'rgba(10,14,31,0.7)', color: '#FFFFFF', fontSize: '0.8rem', fontWeight: 600 }}
                    >
                      {index + 1} / {shots.length}
                    </Box>
                  </>
                )}
              </Box>

              <Typography sx={{ mt: 1.75, fontSize: '0.92rem', lineHeight: 1.6, color: p.textSecondary }}>
                {current.caption}
              </Typography>

              {shots.length > 1 && (
                <Stack direction="row" spacing={1.25} sx={{ mt: 2, overflowX: 'auto', pb: 1 }}>
                  {shots.map((s, i) => (
                    <Box
                      key={s.src}
                      component="button"
                      type="button"
                      aria-label={s.caption}
                      aria-current={i === index}
                      onClick={() => setIndex(i)}
                      sx={{
                        position: 'relative',
                        flex: '0 0 auto',
                        width: 104,
                        height: 64,
                        p: 0,
                        overflow: 'hidden',
                        borderRadius: '12px',
                        bgcolor: p.softBg,
                        cursor: 'pointer',
                        border: `2px solid ${i === index ? p.accent : p.cardBorder}`,
                        opacity: i === index ? 1 : 0.7,
                        transition: 'opacity 0.2s ease, border-color 0.2s ease',
                        '&:hover': { opacity: 1 },
                        '&:focus-visible': { outline: `3px solid ${p.accent}`, outlineOffset: 2 },
                      }}
                    >
                      <Image src={s.src} alt="" fill sizes="104px" style={{ objectFit: 'cover', objectPosition: 'top' }} />
                    </Box>
                  ))}
                </Stack>
              )}
            </Box>
          )}

          {/* ---- Description, features, role, stack ---- */}
          <Box sx={{ display: 'grid', gap: { xs: 4, md: 5 }, gridTemplateColumns: { xs: '1fr', md: 'minmax(0, 1.35fr) minmax(0, 1fr)' } }}>
            <Box>
              <Typography variant="h4" component="h3" sx={{ fontSize: '1.15rem', fontWeight: 700, color: p.heading }}>
                {labels.about}
              </Typography>
              <Typography sx={{ mt: 1.5, fontSize: '0.98rem', lineHeight: 1.75, color: p.text }}>{project.details}</Typography>

              {project.features.length > 0 && (
                <>
                  <Typography variant="h4" component="h3" sx={{ mt: 4, fontSize: '1.15rem', fontWeight: 700, color: p.heading }}>
                    {labels.features}
                  </Typography>
                  <Box component="ul" sx={{ listStyle: 'none', m: 0, mt: 1.5, p: 0, display: 'grid', gap: 1.25 }}>
                    {project.features.map((f) => (
                      <Box key={f} component="li" sx={{ display: 'flex', gap: 1.25, alignItems: 'flex-start' }}>
                        <CheckCircleIcon sx={{ fontSize: 20, mt: '2px', color: p.accent, flexShrink: 0 }} aria-hidden />
                        <Typography sx={{ fontSize: '0.95rem', lineHeight: 1.6, color: p.text }}>{f}</Typography>
                      </Box>
                    ))}
                  </Box>
                </>
              )}
            </Box>

            <Box
              component="aside"
              sx={{ alignSelf: 'start', p: 3, borderRadius: '20px', bgcolor: p.softBg, border: `1px solid ${p.softBorder}` }}
            >
              {project.role && (
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h4" component="h3" sx={{ fontSize: '1.05rem', fontWeight: 700, color: p.heading }}>
                    {labels.role}
                  </Typography>
                  <Typography sx={{ mt: 1, fontSize: '0.95rem', lineHeight: 1.6, color: p.text }}>{project.role}</Typography>
                </Box>
              )}

              <Typography variant="h4" component="h3" sx={{ fontSize: '1.05rem', fontWeight: 700, color: p.heading }}>
                {labels.stack}
              </Typography>
              <Box sx={{ mt: 1.5, display: 'grid', gap: 2 }}>
                {stackGroups.map((sg) => (
                  <Box key={sg.label || 'stack'}>
                    {sg.label && (
                      <Typography sx={{ mb: 0.75, fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', color: p.textSecondary }}>
                        {sg.label}
                      </Typography>
                    )}
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                      {sg.items.map((item) => (
                        <Box key={item} component="span" sx={chipSx}>
                          {item}
                        </Box>
                      ))}
                    </Box>
                  </Box>
                ))}
              </Box>

              {links.length > 0 && (
                <Stack direction="row" spacing={1.25} sx={{ mt: 3 }}>
                  {links.map((l) => (
                    <Button
                      key={l.label}
                      component="a"
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ ...(l.primary ? gradientButtonSx(p) : outlineButtonSx(p)), height: 44, px: 2.5, fontSize: '0.9rem' }}
                    >
                      {l.label}
                    </Button>
                  ))}
                </Stack>
              )}
            </Box>
          </Box>

          {/* ---- Highlight sections (AI models, system architecture…), only for projects that define them ---- */}
          {project.sections?.map((section) => {
            const SectionIcon = SECTION_ICONS[section.icon];
            return (
              <Box key={section.title} component="section" sx={{ mt: { xs: 4, md: 5 } }}>
                <Typography
                  variant="h4"
                  component="h3"
                  sx={{ display: 'flex', alignItems: 'center', gap: 1, fontSize: '1.15rem', fontWeight: 700, color: p.heading }}
                >
                  <SectionIcon sx={{ fontSize: 22, color: p.accent }} aria-hidden />
                  {section.title}
                </Typography>
                <Typography sx={{ mt: 1.25, maxWidth: 820, fontSize: '0.95rem', lineHeight: 1.7, color: p.textSecondary }}>
                  {section.intro}
                </Typography>
                <Box sx={{ mt: 2.5, display: 'grid', gap: 2, gridTemplateColumns: { xs: '1fr', md: 'repeat(3, minmax(0, 1fr))' } }}>
                  {section.items.map((item) => (
                    <Box
                      key={item.name}
                      component="article"
                      sx={{ p: 2.5, borderRadius: '20px', bgcolor: p.softBg, border: `1px solid ${p.softBorder}`, display: 'flex', flexDirection: 'column' }}
                    >
                      <Typography variant="h5" component="h4" sx={{ fontSize: '1.02rem', fontWeight: 700, lineHeight: 1.35, color: p.heading }}>
                        {item.name}
                      </Typography>
                      <Box sx={{ mt: 1.5, display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                        {item.tech.split(' · ').map((t) => (
                          <Box key={t} component="span" sx={chipSx}>
                            {t}
                          </Box>
                        ))}
                      </Box>
                      <Typography sx={{ mt: 1.75, fontSize: '0.9rem', lineHeight: 1.7, color: p.text }}>{item.text}</Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            );
          })}
        </DialogContent>
      </Dialog>

      {/* ---- Lightbox ---- */}
      {current && (
        <Dialog
          open={open && lightbox}
          onClose={() => setLightbox(false)}
          fullScreen
          aria-label={current.caption}
          onKeyDown={onKeyDown}
          slotProps={{ paper: { sx: { bgcolor: 'rgba(5,6,5,0.97)', backgroundImage: 'none' } } }}
        >
          <Box sx={{ position: 'relative', flex: 1, m: { xs: 1, md: 3 }, mb: 0 }}>
            <Image key={current.src} src={current.src} alt={current.caption} fill sizes="100vw" quality={90} style={{ objectFit: 'contain' }} />
          </Box>
          <Typography sx={{ px: 3, py: 2, textAlign: 'center', fontSize: '0.95rem', color: '#E6E9E4' }}>
            {current.caption}
            {shots.length > 1 && ` (${index + 1} / ${shots.length})`}
          </Typography>
          <IconButton aria-label={labels.close} onClick={() => setLightbox(false)} sx={{ ...overlayButtonSx, position: 'absolute', top: 16, right: 16 }}>
            <CloseIcon />
          </IconButton>
          {shots.length > 1 && (
            <>
              <IconButton aria-label={labels.previous} onClick={() => go(-1)} sx={{ ...overlayButtonSx, position: 'absolute', top: '50%', left: 16, transform: 'translateY(-50%)' }}>
                <ChevronLeftIcon />
              </IconButton>
              <IconButton aria-label={labels.next} onClick={() => go(1)} sx={{ ...overlayButtonSx, position: 'absolute', top: '50%', right: 16, transform: 'translateY(-50%)' }}>
                <ChevronRightIcon />
              </IconButton>
            </>
          )}
        </Dialog>
      )}
    </>
  );
}
