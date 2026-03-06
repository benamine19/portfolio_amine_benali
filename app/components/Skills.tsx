'use client';

import { memo, useMemo } from 'react';
import { Box, Container, Typography, Stack, Chip, Paper } from '@mui/material';
import Grid from '@mui/material/GridLegacy';
import { useTheme } from '@mui/material/styles';
import DeveloperModeRoundedIcon from '@mui/icons-material/DeveloperModeRounded';
import StorageRoundedIcon from '@mui/icons-material/StorageRounded';
import BuildRoundedIcon from '@mui/icons-material/BuildRounded';
import { COLORS } from './constants';

interface SkillsProps {
  t: any;
}

// Votre stack technique réelle (organisée par niveau)
const MY_SKILLS = {
  frontend: {
    primary: ['ReactJS', 'NextJS', 'TypeScript', 'Tailwind CSS'],
    secondary: ['JavaScript', 'CSS', 'Dart/Flutter']
  },
  backend: {
    primary: ['Python', 'Django', 'Node.js', 'PostgreSQL'],
    secondary: ['Java', 'C/C++', 'PHP', 'SQL', 'MongoDB']
  },
  tools: {
    primary: ['Docker', 'Kubernetes', 'Linux', 'Git/GitHub'],
    secondary: ['Firebase', 'VSCode', 'CI/CD', 'AWS']
  }
};

// Styles memoïsés - VOS backgrounds PRESERVES
const useStyles = (isDarkMode: boolean, colors: any, common: any) => useMemo(() => ({
  backgroundImage: isDarkMode
    ? `
      radial-gradient(
        ellipse at bottom left,
        rgba(163, 230, 53, 0.35) 0%,
        rgba(163, 230, 53, 0.18) 20%,
        transparent 65%
      ),
      radial-gradient(
        ellipse at top right,
        rgba(163, 230, 53, 0.25) 0%,
        rgba(163, 230, 53, 0.12) 15%,
        transparent 55%
      ),
      linear-gradient(
        180deg,
        #0b0b0b 0%,
        #050505 100%
      )
    `
    : `
      radial-gradient(
        ellipse at top left,
        ${common.BLUE_DARK} 0%,
        ${common.BLUE_LIGHT} 30%,
        transparent 65%
      ),
      radial-gradient(
        ellipse at top right,
        ${common.BLUE_DARK} 0%,
        ${common.BLUE_LIGHT} 30%,
        transparent 65%
      ),
      radial-gradient(
        ellipse at bottom right,
        ${common.BLUE_DARK} 0%,
        ${common.BLUE_LIGHT} 30%,
        transparent 65%
      ),
      radial-gradient(
        ellipse at bottom left,
        ${common.BLUE_DARK} 0%,
        ${common.BLUE_LIGHT} 30%,
        transparent 65%
      ),
      linear-gradient(
        180deg,
        ${COLORS.LIGHT.BG_START} 0%,
        ${COLORS.LIGHT.BG_END} 100%
      )
    `,
  titleGradient: isDarkMode
    ? 'linear-gradient(135deg, #ffffff 0%, #a3e635 100%)'
    : 'linear-gradient(135deg, #0f172a 0%, #059669 100%)',
  greenColor: colors.GREEN_PRIMARY,
}), [isDarkMode, colors, common]);

// Skill Card - DESIGN AMELIORE
const SkillCard = memo(({ 
  category, 
  icon: Icon,
  skills,
  isDarkMode, 
  colors,
}: { 
  category: string;
  icon: any;
  skills: typeof MY_SKILLS.frontend;
  isDarkMode: boolean; 
  colors: any;
}) => {
  return (
    <Grid item xs={12} md={4}>
      <Paper
        elevation={0}
        sx={{
          p: { xs: 4, md: 5 },
          borderRadius: '32px',
          background: isDarkMode
            ? 'linear-gradient(145deg, rgba(20,20,20,0.8), rgba(15,15,15,0.9))'
            : 'linear-gradient(145deg, rgba(255,255,255,0.8), rgba(255,255,255,0.9))',
          backdropFilter: 'blur(20px)',
          border: `1px solid ${colors.GREEN_PRIMARY}20`,
          height: '100%',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '3px',
            background: `linear-gradient(90deg, ${colors.GREEN_PRIMARY}, ${colors.GREEN_SECONDARY || colors.GREEN_PRIMARY})`,
            opacity: 0.6,
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '100%',
            height: '100%',
            background: `radial-gradient(circle at center, ${colors.GREEN_PRIMARY}10, transparent 70%)`,
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
          },
          '&:hover': {
            transform: 'translateY(-8px)',
            borderColor: `${colors.GREEN_PRIMARY}50`,
            boxShadow: `0 25px 50px -8px ${colors.GREEN_SHADOW}`,
            '& .icon-wrapper': {
              transform: 'scale(1.1) rotate(5deg)',
              background: isDarkMode
                ? `linear-gradient(145deg, ${colors.GREEN_PRIMARY}, ${colors.GREEN_SECONDARY})`
                : `linear-gradient(145deg, ${colors.GREEN_LIGHT}, ${colors.GREEN_DARK})`,
            },
          },
        }}
      >
        <Stack spacing={4}>
          {/* Header avec icône amélioré */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2.5 }}>
            <Box
              className="icon-wrapper"
              sx={{
                width: 60,
                height: 60,
                borderRadius: '20px',
                background: isDarkMode
                  ? `linear-gradient(145deg, ${colors.GREEN_PRIMARY}CC, ${colors.GREEN_SECONDARY}CC)`
                  : `linear-gradient(145deg, ${colors.GREEN_LIGHT}, ${colors.GREEN_DARK})`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: `0 8px 20px ${colors.GREEN_SHADOW}`,
              }}
            >
              <Icon sx={{ 
                fontSize: 32, 
                color: isDarkMode ? '#0b0b0b' : '#ffffff',
              }} />
            </Box>
            <Typography
              variant="h4"
              sx={{
                fontSize: '1.75rem',
                fontWeight: 700,
                color: isDarkMode ? '#ffffff' : colors.TEXT_PRIMARY,
                letterSpacing: '-0.01em',
              }}
            >
              {category}
            </Typography>
          </Box>

          {/* Compétences principales - Badges plus visibles */}
          <Box>
            <Typography
              sx={{
                fontSize: '0.8rem',
                fontWeight: 600,
                color: colors.GREEN_PRIMARY,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                mb: 1.5,
              }}
            >
              • Stack principale
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              {skills.primary.map((skill, index) => (
                <Chip
                  key={`primary-${index}`}
                  label={skill}
                  sx={{
                    height: 36,
                    px: 1.5,
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    background: `${colors.GREEN_PRIMARY}15`,
                    border: `1.5px solid ${colors.GREEN_PRIMARY}40`,
                    color: isDarkMode ? '#ffffff' : colors.TEXT_PRIMARY,
                    borderRadius: '12px',
                    '&:hover': {
                      background: `${colors.GREEN_PRIMARY}25`,
                      borderColor: colors.GREEN_PRIMARY,
                      transform: 'translateY(-2px)',
                    },
                  }}
                />
              ))}
            </Stack>
          </Box>

          {/* Compétences secondaires */}
          <Box>
            <Typography
              sx={{
                fontSize: '0.75rem',
                fontWeight: 500,
                color: isDarkMode ? '#9ca3af' : colors.TEXT_SECONDARY,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                mb: 1.5,
              }}
            >
              • Technologies associées
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              {skills.secondary.map((skill, index) => (
                <Chip
                  key={`secondary-${index}`}
                  label={skill}
                  size="small"
                  sx={{
                    height: 28,
                    fontSize: '0.8rem',
                    fontWeight: 500,
                    background: 'transparent',
                    border: `1px solid ${colors.GREEN_PRIMARY}25`,
                    color: isDarkMode ? '#d1d5db' : colors.TEXT_SECONDARY,
                    borderRadius: '10px',
                    '&:hover': {
                      background: `${colors.GREEN_PRIMARY}10`,
                      borderColor: `${colors.GREEN_PRIMARY}50`,
                    },
                  }}
                />
              ))}
            </Stack>
          </Box>

          {/* Indicateur de niveau */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              mt: 1,
              pt: 2,
              borderTop: `1px solid ${colors.GREEN_PRIMARY}15`,
            }}
          >
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: colors.GREEN_PRIMARY,
                boxShadow: `0 0 10px ${colors.GREEN_PRIMARY}`,
              }}
            />
            <Typography
              sx={{
                fontSize: '0.75rem',
                color: isDarkMode ? '#9ca3af' : colors.TEXT_SECONDARY,
              }}
            >
              {category === 'Frontend' ? 'UI/UX & Applications web' :
               category === 'Backend' ? 'API & Base de données' :
               'DevOps & Cloud'}
            </Typography>
          </Box>
        </Stack>
      </Paper>
    </Grid>
  );
});

SkillCard.displayName = 'SkillCard';

// Composant principal
export default function Skills({ t }: SkillsProps) {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  const colors = isDarkMode ? COLORS.DARK : COLORS.LIGHT;
  const common = COLORS.COMMON;
  const styles = useStyles(isDarkMode, colors, common);

  return (
    <Box
      id="skills"
      component="section"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        py: { xs: 10, md: 14 },
        px: 4,
        backgroundColor: isDarkMode ? COLORS.DARK.BG : COLORS.LIGHT.BG_START,
        backgroundImage: styles.backgroundImage, // ✅ VOS backgrounds intacts
        color: colors.TEXT_PRIMARY,
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={8}>
          {/* Title - VOTRE design */}
          <Box sx={{ textAlign: 'center', position: 'relative' }}>
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
              }}
            >
              {t.skills?.title || 'Compétences'}
            </Typography>
            
            <Box
              sx={{
                width: '120px',
                height: '4px',
                background: isDarkMode
                  ? 'linear-gradient(90deg, #a3e635, transparent)'
                  : 'linear-gradient(90deg, #059669, transparent)',
                margin: '20px auto',
                borderRadius: '2px',
              }}
            />
          </Box>

          {/* Grille avec DESIGN AMELIORE */}
          <Grid container spacing={4}>
            <SkillCard
              category={t.skills?.frontend || 'Frontend'}
              icon={DeveloperModeRoundedIcon}
              skills={MY_SKILLS.frontend}
              isDarkMode={isDarkMode}
              colors={colors}
            />
            <SkillCard
              category={t.skills?.backend || 'Backend'}
              icon={StorageRoundedIcon}
              skills={MY_SKILLS.backend}
              isDarkMode={isDarkMode}
              colors={colors}
            />
            <SkillCard
              category={t.skills?.tools || 'DevOps'}
              icon={BuildRoundedIcon}
              skills={MY_SKILLS.tools}
              isDarkMode={isDarkMode}
              colors={colors}
            />
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
}