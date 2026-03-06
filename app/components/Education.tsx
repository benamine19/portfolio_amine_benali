'use client';

import React, { memo, useMemo } from 'react';
import { Box, Container, Typography, Stack, Paper, Grid, Chip } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import CalendarTodayRoundedIcon from '@mui/icons-material/CalendarTodayRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import { COLORS } from './constants';

interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  location: string;
  summary: string;
}

interface EducationTranslation {
  title: string;
  items: EducationItem[];
}

interface EducationProps {
  t: {
    education: EducationTranslation;
  };
}

// Styles memoïsés
const useStyles = (isDarkMode: boolean, colors: any) => useMemo(() => ({
  gradient: isDarkMode
    ? `radial-gradient(ellipse at top left, rgba(163, 230, 53, 0.35) 0%, rgba(163, 230, 53, 0.18) 10%, transparent 65%),
       radial-gradient(ellipse at bottom right, rgba(163, 230, 53, 0.25) 0%, rgba(163, 230, 53, 0.12) 15%, transparent 55%),
       linear-gradient(180deg, #0b0b0b 0%, #050505 100%)`
    : `radial-gradient(ellipse at top left, ${COLORS.COMMON.BLUE_DARK} 0%, ${COLORS.COMMON.BLUE_LIGHT} 30%, transparent 65%),
       radial-gradient(ellipse at top right, ${COLORS.COMMON.BLUE_DARK} 0%, ${COLORS.COMMON.BLUE_LIGHT} 30%, transparent 65%),
       radial-gradient(ellipse at bottom right, ${COLORS.COMMON.BLUE_DARK} 0%, ${COLORS.COMMON.BLUE_LIGHT} 30%, transparent 65%),
       radial-gradient(ellipse at bottom left, ${COLORS.COMMON.BLUE_DARK} 0%, ${COLORS.COMMON.BLUE_LIGHT} 30%, transparent 65%),
       linear-gradient(180deg, ${COLORS.LIGHT.BG_START} 0%, ${COLORS.LIGHT.BG_END} 100%)`,
  titleGradient: isDarkMode
    ? 'linear-gradient(135deg, #ffffff 0%, #a3e635 100%)'
    : 'linear-gradient(135deg, #0f172a 0%, #059669 100%)',
  greenColor: colors.GREEN_PRIMARY,
}), [isDarkMode, colors]);

// Composant Education Card optimisé
const EducationCard = memo(({ 
  item, 
  index, 
  isDarkMode, 
  colors 
}: { 
  item: EducationItem; 
  index: number; 
  isDarkMode: boolean; 
  colors: any;
}) => {
  const styles = useStyles(isDarkMode, colors);
  const isRecent = index === 0;
  
  return (
      <Paper
        elevation={0}
        sx={{
          p: { xs: 3, md: 4 },
          height: '100%',
          borderRadius: '24px',
          backdropFilter: 'blur(20px)',
          background: isDarkMode
            ? 'rgba(20, 20, 20, 0.7)'
            : 'rgba(255, 255, 255, 0.7)',
          border: `1px solid ${styles.greenColor}20`,
          transition: 'transform 0.2s ease, border-color 0.2s ease',
          position: 'relative',
          overflow: 'hidden',
          '&:hover': {
            transform: 'translateY(-4px)',
            borderColor: `${styles.greenColor}40`,
          },
        }}
      >
        {/* Badge de décoration */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: 100,
            height: 100,
            background: `radial-gradient(circle at top right, ${styles.greenColor}15, transparent 70%)`,
            borderRadius: '0 0 0 100%',
          }}
        />
        
        <Stack spacing={2.5}>
          {/* En-tête avec icône et année */}
          <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 48,
                height: 48,
                borderRadius: '16px',
                background: `linear-gradient(145deg, ${styles.greenColor}20, ${styles.greenColor}05)`,
                color: styles.greenColor,
              }}
            >
              {isRecent ? (
                <SchoolRoundedIcon sx={{ fontSize: 28 }} />
              ) : (
                <SchoolRoundedIcon sx={{ fontSize: 28 }} />
              )}
            </Box>
            
            <Chip
              label={item.year}
              size="small"
              sx={{
                bgcolor: `${styles.greenColor}15`,
                color: styles.greenColor,
                fontWeight: 600,
                borderRadius: '12px',
                height: 32,
              }}
            />
          </Box>

          {/* Contenu principal */}
          <Box>
            <Typography
              sx={{
                fontSize: { xs: '1.25rem', md: '1.4rem' },
                fontWeight: 700,
                color: isDarkMode ? '#ffffff' : colors.TEXT_PRIMARY,
                lineHeight: 1.3,
                mb: 1,
              }}
            >
              {item.degree}
            </Typography>
            
            <Typography
              sx={{
                fontSize: '1rem',
                color: styles.greenColor,
                fontWeight: 600,
                mb: 1.5,
              }}
            >
              {item.institution}
            </Typography>
            
            {/* Localisation */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 2 }}>
              <LocationOnRoundedIcon sx={{ color: styles.greenColor, fontSize: 16 }} />
              <Typography
                sx={{
                  color: isDarkMode ? '#d1d5db' : colors.TEXT_SECONDARY,
                  fontSize: '0.9rem',
                }}
              >
                {item.location}
              </Typography>
            </Box>
            
            {/* Description */}
            <Typography
              sx={{
                fontSize: '0.95rem',
                lineHeight: 1.7,
                color: isDarkMode ? '#e5e5e5' : colors.TEXT_SECONDARY,
                borderTop: `1px solid ${styles.greenColor}15`,
                pt: 2,
              }}
            >
              {item.summary}
            </Typography>
          </Box>
        </Stack>
      </Paper>
  );
});

EducationCard.displayName = 'EducationCard';

// Composant principal
export default function Education({ t }: EducationProps) {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  const colors = useMemo(
    () => (isDarkMode ? COLORS.DARK : COLORS.LIGHT),
    [isDarkMode]
  );
  const styles = useStyles(isDarkMode, colors);

  if (!t?.education?.items?.length) return null;

  return (
    <Box
      id="education"
      component="section"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        py: { xs: 10, md: 14 },
    
        px: 4,
        backgroundColor: isDarkMode ? COLORS.DARK.BG : COLORS.LIGHT.BG_START,
        backgroundImage: styles.gradient,
        color: colors.TEXT_PRIMARY,
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={6} alignItems="center">
          {/* Titre avec dégradé */}
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              variant="h2"
              fontWeight={700}
              sx={{
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                background: styles.titleGradient,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '-0.02em',
                mb: 2,
              }}
            >
              {t.education.title}
            </Typography>
            
            <Box
              sx={{
                width: '80px',
                height: '4px',
                background: `linear-gradient(90deg, ${styles.greenColor}, transparent)`,
                margin: '0 auto',
                borderRadius: '2px',
              }}
            />
          </Box>

          {/* Cartes en grille moderne */}
          <Grid container spacing={3} sx={{ mt: 2,maxWidth: '900px',  mx: 'auto',
           }}>
            {t.education.items.map((item, index) => (
              <EducationCard
                key={`${item.institution}-${index}`}
                item={item}
                index={index}
                isDarkMode={isDarkMode}
                colors={colors}
              />
            ))}
          </Grid>

          {/* Statistiques rapides (optionnel) */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 4,
              mt: 4,
              flexWrap: 'wrap',
            }}
          >
            <Box sx={{ textAlign: 'center' }}>
              <Typography
                sx={{
                  fontSize: '2rem',
                  fontWeight: 700,
                  color: styles.greenColor,
                }}
              >
                {t.education.items.length}
              </Typography>
              <Typography
                sx={{
                  fontSize: '0.9rem',
                  color: isDarkMode ? '#9ca3af' : colors.TEXT_SECONDARY,
                }}
              >
                Diplômes
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <Typography
                sx={{
                  fontSize: '2rem',
                  fontWeight: 700,
                  color: styles.greenColor,
                }}
              >
                {new Date().getFullYear() - 2018}+
              </Typography>
              <Typography
                sx={{
                  fontSize: '0.9rem',
                  color: isDarkMode ? '#9ca3af' : colors.TEXT_SECONDARY,
                }}
              >
                Années d'études
              </Typography>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}