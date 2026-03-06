'use client';

import { Box, Container, Typography, Stack, Button, Card, CardContent } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import { COLORS } from './constants';

interface ContactProps {
  t: any;
}

export default function Contact({ t }: ContactProps) {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  const colors = isDarkMode ? COLORS.DARK : COLORS.LIGHT;
  const common = COLORS.COMMON;

  const contactInfo = [
    {
      icon: EmailIcon,
      label: t.contact.email,
      href: `mailto:${t.contact.email}`,
      color: colors.GREEN_PRIMARY,
    },
    {
      icon: PhoneIcon,
      label: t.contact.phone,
      href: `tel:${t.contact.phone}`,
      color: colors.GREEN_SECONDARY,
    },
  ];

  const socialLinks = [
    {
      icon: LinkedInIcon,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/amine-benali-4b0056256/',
      color: '#0077b5',
    },
    {
      icon: GitHubIcon,
      label: 'GitHub',
      href: 'https://github.com/benamine19',
      color: isDarkMode ? '#ffffff' : '#000000',
    },
  ];

  return (
    <Box
      id="contact"
      component="section"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        py: { xs: 10, md: 14 },
        px: 4,
        backgroundColor: isDarkMode ? COLORS.DARK.BG : COLORS.LIGHT.BG_START,
        backgroundImage: isDarkMode
          ? `
            radial-gradient(
              ellipse at center,
              rgba(163, 230, 53, 0.25) 0%,
              rgba(163, 230, 53, 0.12) 30%,
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
      }}
    >
      <Container maxWidth="md">
        <Stack spacing={8} alignItems="center">
          {/* Title - Style Hero/About */}
          <Box sx={{ textAlign: 'center', position: 'relative' }}>
            <Typography
              variant="h2"
              fontWeight={700}
              sx={{
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                background: isDarkMode
                  ? 'linear-gradient(135deg, #ffffff 0%, #a3e635 100%)'
                  : 'linear-gradient(135deg, #0f172a 0%, #059669 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                letterSpacing: '-0.02em',
              }}
            >
              {t.contact.title}
            </Typography>
            
            {/* Decorative line */}
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
            
            <Typography 
              variant="body1" 
              sx={{ 
                color: isDarkMode ? '#dcdcdc' : colors.TEXT_SECONDARY,
                fontSize: '1.2rem',
                maxWidth: '600px',
                mx: 'auto',
                mt: 3,
              }}
            >
              {t.contact.description}
            </Typography>
          </Box>

          {/* Contact Card */}
          <Card
            sx={{
              width: '100%',
              maxWidth: '600px',
              borderRadius: '28px',
              backdropFilter: 'blur(20px)',
              background: isDarkMode
                ? 'rgba(20, 20, 20, 0.7)'
                : 'rgba(255, 255, 255, 0.7)',
              border: `1px solid ${colors.GREEN_PRIMARY}${isDarkMode ? '15' : '15'}`,
              transition: 'all 0.4s ease',
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '1px',
                background: `linear-gradient(90deg, transparent, ${colors.GREEN_PRIMARY}, transparent)`,
              },
              '&:hover': {
                borderColor: `${colors.GREEN_PRIMARY}40`,
                boxShadow: `0 30px 80px ${colors.GREEN_SHADOW}`,
                transform: 'translateY(-5px)',
              },
            }}
          >
            <CardContent sx={{ p: 5 }}>
              <Stack spacing={4}>
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <Button
                      key={index}
                      href={item.href}
                      fullWidth
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 3,
                        textAlign: 'left',
                        color: isDarkMode ? '#ffffff' : colors.TEXT_PRIMARY,
                        borderRadius: '16px',
                        p: 3,
                        background: isDarkMode
                          ? 'rgba(163,230,53,0.05)'
                          : 'rgba(5,150,105,0.05)',
                        border: `1px solid ${colors.GREEN_PRIMARY}10`,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          background: isDarkMode
                            ? 'rgba(163,230,53,0.1)'
                            : 'rgba(5,150,105,0.1)',
                          borderColor: item.color,
                          transform: 'translateY(-3px)',
                          boxShadow: `0 10px 30px ${colors.GREEN_SHADOW}`,
                          '& .contact-icon': {
                            color: item.color,
                            transform: 'scale(1.2)',
                          },
                        },
                      }}
                    >
                      <IconComponent
                        className="contact-icon"
                        sx={{
                          fontSize: '2rem',
                          color: colors.GREEN_PRIMARY,
                          transition: 'all 0.3s ease',
                        }}
                      />
                      <Typography 
                        variant="body1" 
                        sx={{ 
                          fontSize: '1.1rem',
                          fontWeight: 500,
                          flex: 1,
                        }}
                      >
                        {item.label}
                      </Typography>
                    </Button>
                  );
                })}
              </Stack>
            </CardContent>
          </Card>

          {/* Social Links */}
          <Box sx={{ textAlign: 'center', width: '100%' }}>
            <Typography 
              variant="h4" 
              sx={{ 
                color: colors.GREEN_PRIMARY,
                fontWeight: 600,
                mb: 4,
              }}
            >
              Connect With Me
            </Typography>
            
            <Stack direction="row" spacing={3} sx={{ justifyContent: 'center' }}>
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <Button
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: '18px',
                      background: isDarkMode
                        ? 'rgba(163,230,53,0.1)'
                        : 'rgba(5,150,105,0.1)',
                      border: `1px solid ${colors.GREEN_PRIMARY}20`,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        background: isDarkMode
                          ? `rgba(${parseInt(social.color.slice(1,3), 16)}, ${parseInt(social.color.slice(3,5), 16)}, ${parseInt(social.color.slice(5,7), 16)}, 0.2)`
                          : `rgba(${parseInt(social.color.slice(1,3), 16)}, ${parseInt(social.color.slice(3,5), 16)}, ${parseInt(social.color.slice(5,7), 16)}, 0.15)`,
                        borderColor: social.color,
                        transform: 'translateY(-5px) scale(1.1)',
                        boxShadow: `0 15px 40px ${social.color}40`,
                      },
                    }}
                  >
                    <IconComponent sx={{ fontSize: '1.8rem', color: social.color }} />
                  </Button>
                );
              })}
            </Stack>
          </Box>

          {/* CTA Button - Style Hero/About */}
          <Button
            variant="contained"
            startIcon={<SendRoundedIcon />}
            href={`mailto:${t.contact.email}`}
            sx={{
              px: 6,
              py: 2,
              fontSize: '1.1rem',
              borderRadius: '999px',
              background: isDarkMode
                ? `linear-gradient(135deg, ${colors.GREEN_PRIMARY} 0%, ${colors.GREEN_SECONDARY} 100%)`
                : `linear-gradient(135deg, ${colors.GREEN_LIGHT} 0%, ${colors.GREEN_DARK} 100%)`,
              color: isDarkMode ? COLORS.DARK.BG : '#ffffff',
              fontWeight: 600,
              boxShadow: `0 4px 30px ${colors.GREEN_SHADOW}`,
              textTransform: 'none',
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
              '&:before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: '-100%',
                width: '100%',
                height: '100%',
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                transition: 'left 0.7s',
              },
              '&:hover': {
                background: isDarkMode
                  ? `linear-gradient(135deg, ${colors.GREEN_LIGHT} 0%, ${colors.GREEN_DARK} 100%)`
                  : `linear-gradient(135deg, ${colors.GREEN_PRIMARY} 0%, ${colors.GREEN_SECONDARY} 100%)`,
                transform: 'translateY(-3px)',
                boxShadow: `0 8px 40px ${colors.GREEN_SHADOW}`,
                '&:before': {
                  left: '100%',
                },
              },
            }}
          >
            Send Message
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}