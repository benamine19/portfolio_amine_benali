'use client';

import { Box, Container, Typography, Stack, Divider, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import { COLORS } from './constants';

interface FooterProps {
  t: any;
}

export default function Footer({ t }: FooterProps) {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  const colors = isDarkMode ? COLORS.DARK : COLORS.LIGHT;
  const common = COLORS.COMMON;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box
      component="footer"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        py: 6,
        px: 4,
        backgroundColor: isDarkMode ? COLORS.DARK.BG : COLORS.LIGHT.BG_START,
        backgroundImage: isDarkMode
          ? `
            radial-gradient(
              ellipse at bottom right,
              rgba(163, 230, 53, 0.15) 0%,
              rgba(163, 230, 53, 0.08) 30%,
              transparent 70%
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
        color: colors.TEXT_PRIMARY,
        borderTop: `1px solid ${colors.GREEN_PRIMARY}15`,
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={5}>
          {/* Main footer content */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-between',
              alignItems: { xs: 'center', md: 'flex-start' },
              gap: 4,
            }}
          >
            {/* Logo and description */}
            <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 800,
                  fontSize: '1.8rem',
                  background: isDarkMode
                    ? 'linear-gradient(135deg, #ffffff 0%, #a3e635 100%)'
                    : 'linear-gradient(135deg, #0f172a 0%, #059669 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mb: 2,
                }}
              >
                A.Dev
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: isDarkMode ? '#dcdcdc' : colors.TEXT_SECONDARY,
                  maxWidth: '300px',
                  fontSize: '1rem',
                }}
              >
                Crafting digital experiences with passion and precision
              </Typography>
            </Box>

            {/* Social links */}
            <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Typography
                variant="h6"
                sx={{
                  color: colors.GREEN_PRIMARY,
                  fontWeight: 600,
                  mb: 3,
                }}
              >
                Follow Me
              </Typography>
              <Stack direction="row" spacing={2} sx={{ justifyContent: { xs: 'center', md: 'flex-start' } }}>
                <Button
                  href="https://github.com"
                  target="_blank"
                  sx={{
                    minWidth: 'auto',
                    p: 1.5,
                    borderRadius: '12px',
                    background: isDarkMode
                      ? 'rgba(163,230,53,0.1)'
                      : 'rgba(5,150,105,0.1)',
                    border: `1px solid ${colors.GREEN_PRIMARY}20`,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: isDarkMode
                        ? 'rgba(163,230,53,0.2)'
                        : 'rgba(5,150,105,0.2)',
                      transform: 'translateY(-3px)',
                      boxShadow: `0 10px 30px ${colors.GREEN_SHADOW}`,
                    },
                  }}
                >
                  <GitHubIcon sx={{ fontSize: '1.5rem', color: colors.GREEN_PRIMARY }} />
                </Button>
                <Button
                  href="https://linkedin.com"
                  target="_blank"
                  sx={{
                    minWidth: 'auto',
                    p: 1.5,
                    borderRadius: '12px',
                    background: isDarkMode
                      ? 'rgba(163,230,53,0.1)'
                      : 'rgba(5,150,105,0.1)',
                    border: `1px solid ${colors.GREEN_PRIMARY}20`,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: isDarkMode
                        ? 'rgba(163,230,53,0.2)'
                        : 'rgba(5,150,105,0.2)',
                      transform: 'translateY(-3px)',
                      boxShadow: `0 10px 30px ${colors.GREEN_SHADOW}`,
                    },
                  }}
                >
                  <LinkedInIcon sx={{ fontSize: '1.5rem', color: colors.GREEN_PRIMARY }} />
                </Button>
              </Stack>
            </Box>

            {/* Back to top button */}
            <Button
              onClick={scrollToTop}
              sx={{
                width: 60,
                height: 60,
                borderRadius: '16px',
                background: isDarkMode
                  ? `linear-gradient(145deg, ${colors.GREEN_PRIMARY}, ${colors.GREEN_SECONDARY})`
                  : `linear-gradient(145deg, ${colors.GREEN_LIGHT}, ${colors.GREEN_DARK})`,
                border: `1px solid ${colors.GREEN_PRIMARY}30`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                '&:hover': {
                  background: isDarkMode
                    ? `linear-gradient(145deg, ${colors.GREEN_LIGHT}, ${colors.GREEN_DARK})`
                    : `linear-gradient(145deg, ${colors.GREEN_PRIMARY}, ${colors.GREEN_SECONDARY})`,
                  transform: 'translateY(-5px)',
                  boxShadow: `0 15px 40px ${colors.GREEN_SHADOW}`,
                },
              }}
            >
              <ArrowUpwardRoundedIcon sx={{ color: isDarkMode ? '#000' : '#ffffff', fontSize: '1.8rem' }} />
            </Button>
          </Box>

          <Divider sx={{ borderColor: `${colors.GREEN_PRIMARY}15` }} />

          {/* Copyright */}
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              variant="body2"
              sx={{
                color: isDarkMode ? '#9ca3af' : colors.TEXT_SECONDARY,
                fontSize: '0.9rem',
                letterSpacing: 1,
              }}
            >
              {t.footer.copyright.replace('2024', currentYear.toString())}
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: colors.GREEN_PRIMARY,
                fontSize: '0.8rem',
                display: 'block',
                mt: 1,
                fontWeight: 500,
              }}
            >
              {t.footer.credit}
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}