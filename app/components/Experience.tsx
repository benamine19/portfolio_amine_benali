"use client";

import React, { useState, memo, useCallback, useMemo, Suspense, lazy } from "react";
import {
  Box,
  Container,
  Typography,
  List,
  ListItem,
  Avatar,
  Divider,
  Paper,
  Button,
  Dialog,
  DialogContent,
  IconButton,
  Stack,
  Chip,
  Fade,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { COLORS } from "./constants";

// Lazy load icons to reduce initial bundle
const LocationOnRoundedIcon = lazy(() => import("@mui/icons-material/LocationOnRounded"));
const CalendarTodayRoundedIcon = lazy(() => import("@mui/icons-material/CalendarTodayRounded"));

interface ExperienceItem {
  id?: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  logo: string;
}

interface ExperienceTranslation {
  title: string;
  items: ExperienceItem[];
}

interface ExperienceProps {
  t: {
    experience: ExperienceTranslation;
  };
}

// Memoized style calculations - moved outside component
const createStyles = (isDarkMode: boolean, colors: any) => ({
  gradient: isDarkMode
    ? `radial-gradient(ellipse at top left, rgba(163, 230, 53, 0.35) 0%, rgba(163, 230, 53, 0.18) 10%, transparent 65%),
       radial-gradient(ellipse at bottom left, rgba(163, 230, 53, 0.35) 0%, rgba(163, 230, 53, 0.18) 10%, transparent 65%),
       linear-gradient(180deg, #0b0b0b 0%, #050505 100%)`
    : `radial-gradient(ellipse at top left, ${COLORS.COMMON.BLUE_DARK} 0%, ${COLORS.COMMON.BLUE_LIGHT} 30%, transparent 65%),
       radial-gradient(ellipse at top right, ${COLORS.COMMON.BLUE_DARK} 0%, ${COLORS.COMMON.BLUE_LIGHT} 30%, transparent 65%),
       radial-gradient(ellipse at bottom right, ${COLORS.COMMON.BLUE_DARK} 0%, ${COLORS.COMMON.BLUE_LIGHT} 30%, transparent 65%),
       radial-gradient(ellipse at bottom left, ${COLORS.COMMON.BLUE_DARK} 0%, ${COLORS.COMMON.BLUE_LIGHT} 30%, transparent 65%),
       linear-gradient(180deg, ${COLORS.LIGHT.BG_START} 0%, ${COLORS.LIGHT.BG_END} 100%)`,
  titleGradient: isDarkMode
    ? "linear-gradient(135deg, #ffffff 0%, #a3e635 100%)"
    : "linear-gradient(135deg, #0f172a 0%, #059669 100%)",
});

// Cached item styles - avoid recreating on every render
const itemListSx = (isDarkMode: string, greenColor: string, hoverBg: string) => ({
  p: { xs: 3.5, md: 4.5 },
  flexDirection: { xs: "column", sm: "row" },
  alignItems: { xs: "flex-start", sm: "center" },
  cursor: "pointer",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  borderRadius: "20px",
  willChange: "transform, background-color",
  "&:hover": {
    backgroundColor: hoverBg,
    transform: "translateX(8px)",
  },
});

// Avatar cached styles
const avatarSx = (greenColor: string) => ({
  objectFit: "contain" as const,
  width: 72,
  height: 72,
  mr: { xs: 0, sm: 3 },
  mb: { xs: 2, sm: 0 },
  bgcolor: `${greenColor}15`,
  border: `2.5px solid ${greenColor}40`,
  flexShrink: 0,
  boxShadow: `0 4px 16px ${greenColor}20`,
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  willChange: "transform",
});

// Composant Item optimisé avec memoization profonde
const ExperienceItem = memo(
  ({
    item,
    index,
    isDarkMode,
    colors,
    onOpenModal,
    totalItems,
  }: {
    item: ExperienceItem;
    index: number;
    isDarkMode: boolean;
    colors: any;
    onOpenModal: (item: ExperienceItem) => void;
    totalItems: number;
  }) => {
    const hoverBackground = useMemo(
      () => (isDarkMode ? "rgba(163, 230, 53, 0.08)" : "rgba(5, 150, 105, 0.04)"),
      [isDarkMode]
    );

    const handleClick = useCallback(
      () => onOpenModal(item),
      [item, onOpenModal]
    );

    return (
      <ListItem
        alignItems="flex-start"
        sx={itemListSx(isDarkMode ? "dark" : "light", colors.GREEN_PRIMARY, hoverBackground)}
        onClick={handleClick}
      >
          <Avatar
            src={item.logo}
            imgProps={{ loading: "lazy", decoding: "async" }}
            sx={avatarSx(colors.GREEN_PRIMARY)}
          />

          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                justifyContent: "space-between",
                alignItems: { xs: "flex-start", sm: "center" },
                mb: 1,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 800,
                  fontSize: "1.35rem",
                  color: isDarkMode ? "#ffffff" : colors.TEXT_PRIMARY,
                  letterSpacing: "-0.5px",
                }}
              >
                {item.role}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: isDarkMode ? "#a8b5c7" : colors.TEXT_SECONDARY,
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  whiteSpace: "nowrap",
                  ml: { xs: 0, sm: 2 },
                  mt: { xs: 0.5, sm: 0 },
                }}
              >
                {item.period}
              </Typography>
            </Box>

            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 700,
                color: colors.GREEN_PRIMARY,
                fontSize: "1.05rem",
                mb: 1,
                letterSpacing: "0.2px",
              }}
            >
              @ {item.company}
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: isDarkMode ? "#e5e7eb" : colors.TEXT_SECONDARY,
                fontSize: "0.98rem",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                lineHeight: 1.7,
                mb: 1.5,
                letterSpacing: "0.2px",
              }}
            >
              {item.description}
            </Typography>

            <Button
              size="small"
              sx={{
                color: colors.GREEN_PRIMARY,
                fontWeight: 700,
                fontSize: "0.9rem",
                textTransform: "none",
                p: 0,
                minWidth: "auto",
                letterSpacing: "0.3px",
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden',
                "&:before": {
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: 0,
                  height: '2px',
                  background: colors.GREEN_PRIMARY,
                  transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                },
                "&:hover": {
                  background: "transparent",
                  textDecoration: "none",
                  "&:before": {
                    width: '100%',
                  },
                },
              }}
            >
              En savoir plus →
            </Button>
          </Box>
            {index < totalItems - 1 && (
          <Divider
            sx={{
              mx: { xs: 3, md: 4 },
              borderColor: isDarkMode
                ? "rgba(255, 255, 255, 0.1)"
                : "rgba(0, 0, 0, 0.08)",
              opacity: 0.6,
            }}
          />
        )}
        </ListItem>
    );
  }
);

ExperienceItem.displayName = "ExperienceItem";

// Modal optimisé - memoized avec early return
const ExperienceModal = memo(
  ({
    open,
    onClose,
    experience,
    isDarkMode,
    colors,
  }: {
    open: boolean;
    onClose: () => void;
    experience: ExperienceItem | null;
    isDarkMode: boolean;
    colors: any;
  }) => {
    // Early return - ne rendre que si ouvert ET experience existe
    if (!open || !experience) return null;

    const greenColor = colors.GREEN_PRIMARY;
    const greenShadow = colors.GREEN_SHADOW;

    return (
      <Dialog
        open={open}
        onClose={onClose}
        maxWidth="md"
        fullWidth
        TransitionComponent={Fade}
        transitionDuration={250}
        keepMounted={false}
        slotProps={{
          backdrop: { sx: { backdropFilter: 'blur(4px)' } }
        }}
        PaperProps={{
          sx: {
            borderRadius: "28px",
            background: isDarkMode
              ? "linear-gradient(145deg, rgba(18, 18, 18, 0.99), rgba(12, 12, 12, 0.99))"
              : "linear-gradient(145deg, rgba(255, 255, 255, 0.99), rgba(255, 255, 255, 0.99))",
            backdropFilter: "blur(40px)",
            border: `1.5px solid ${greenColor}35`,
            boxShadow: `0 24px 72px ${greenShadow}`,
            m: { xs: 2, md: 4 },
            willChange: "transform, opacity",
          },
        }}
      >
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 20,
            top: 20,
            color: greenColor,
            zIndex: 1,
            background: `${greenColor}10`,
            border: `1.5px solid ${greenColor}30`,
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            "&:hover": {
              background: `${greenColor}20`,
              transform: 'rotate(90deg) scale(1.1)',
              boxShadow: `0 4px 16px ${greenShadow}`,
            },
          }}
        >
          <CloseRoundedIcon />
        </IconButton>

        <DialogContent sx={{ p: { xs: 5, md: 6 } }}>
          <Stack spacing={4}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
              <Avatar
                src={experience.logo}
                imgProps={{ loading: "lazy", decoding: "async" }}
                sx={{
                  width: 76,
                  height: 76,
                  bgcolor: `${greenColor}15`,
                  border: `2.5px solid ${greenColor}40`,
                  flexShrink: 0,
                  boxShadow: `0 4px 20px ${greenColor}20`,
                }}
              />
              <Box>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 800,
                    fontSize: { xs: "1.7rem", md: "2rem" },
                    color: isDarkMode ? "#ffffff" : colors.TEXT_PRIMARY,
                    mb: 0.5,
                    letterSpacing: "-0.5px",
                  }}
                >
                  {experience.role}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "1.3rem",
                    color: greenColor,
                    fontWeight: 700,
                    letterSpacing: "0.2px",
                  }}
                >
                  @ {experience.company}
                </Typography>
              </Box>
            </Box>

            <Suspense fallback={<Box sx={{ height: 40 }} />}>
              <Stack direction="row" spacing={3} flexWrap="wrap" useFlexGap>
                <Chip
                  icon={<CalendarTodayRoundedIcon sx={{ fontSize: 20 }} />}
                  label={experience.period}
                  sx={{
                    bgcolor: `${greenColor}18`,
                    color: greenColor,
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    height: 40,
                    borderRadius: "14px",
                    border: `1.5px solid ${greenColor}30`,
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    "&:hover": {
                      bgcolor: `${greenColor}25`,
                      transform: 'translateY(-2px)',
                      boxShadow: `0 4px 16px ${greenShadow}`,
                    },
                  }}
                />
                <Chip
                  icon={<LocationOnRoundedIcon sx={{ fontSize: 20 }} />}
                  label={experience.location}
                  sx={{
                    bgcolor: `${greenColor}18`,
                    color: greenColor,
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    height: 40,
                    borderRadius: "14px",
                    border: `1.5px solid ${greenColor}30`,
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    "&:hover": {
                      bgcolor: `${greenColor}25`,
                      transform: 'translateY(-2px)',
                      boxShadow: `0 4px 16px ${greenShadow}`,
                    },
                  }}
                />
              </Stack>
            </Suspense>

            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  color: isDarkMode ? "#ffffff" : colors.TEXT_PRIMARY,
                  mb: 2.5,
                  letterSpacing: "-0.3px",
                }}
              >
                À propos de ce poste
              </Typography>
              <Typography
                sx={{
                  fontSize: "1.05rem",
                  lineHeight: 1.9,
                  color: isDarkMode ? "#e8e8e8" : colors.TEXT_SECONDARY,
                  p: 3.5,
                  borderRadius: "18px",
                  background: `linear-gradient(145deg, ${greenColor}08, ${greenColor}04)`,
                  border: `1.5px solid ${greenColor}20`,
                  letterSpacing: "0.3px",
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                {experience.description}
              </Typography>
            </Box>
          </Stack>
        </DialogContent>
      </Dialog>
    );
  }
);

ExperienceModal.displayName = "ExperienceModal";

// Composant principal - optimisé
export default function Experience({ t }: ExperienceProps) {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";
  
  // Memoize colors and avoid object recreation
  const colors = useMemo(
    () => (isDarkMode ? COLORS.DARK : COLORS.LIGHT),
    [isDarkMode]
  );

  const styles = useMemo(
    () => createStyles(isDarkMode, colors),
    [isDarkMode, colors]
  );

  // State optimisé
  const [selectedExperience, setSelectedExperience] = useState<ExperienceItem | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  // Callbacks optimisés - stable references
  const handleOpenModal = useCallback((experience: ExperienceItem) => {
    setSelectedExperience(experience);
    setModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setModalOpen(false);
    // Cleanup after animation
    const timeoutId = setTimeout(() => setSelectedExperience(null), 250);
    return () => clearTimeout(timeoutId);
  }, []);

  // Vérification rapide - early return
  const items = useMemo(() => t?.experience?.items || [], [t?.experience?.items]);
  if (!items.length) return null;

  // Memoize list items to avoid re-rendering
  const listItems = useMemo(
    () =>
      items.map((item, index) => (
        <ExperienceItem
          key={item.id || `${item.company}-${item.role}-${index}`}
          item={item}
          index={index}
          isDarkMode={isDarkMode}
          colors={colors}
          onOpenModal={handleOpenModal}
          totalItems={items.length}
        />
      )),
    [items, isDarkMode, colors, handleOpenModal]
  );

  return (
    <Box
      id="experience"
      component="section"
      sx={{
        position: "relative",
        overflow: "hidden",
        py: { xs: 10, md: 14 },
        px: 4,
        backgroundColor: isDarkMode ? COLORS.DARK.BG : COLORS.LIGHT.BG_START,
        backgroundImage: styles.gradient,
        color: colors.TEXT_PRIMARY,
        willChange: "background",
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={8} alignItems="center">
          {/* Title Section - optimized */}
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="h2"
              fontWeight={700}
              sx={{
                fontSize: { xs: "2.5rem", md: "3.5rem" },
                background: styles.titleGradient,
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                letterSpacing: "-0.02em",
              }}
            >
              {t.experience.title}
            </Typography>

            <Box
              sx={{
                width: "140px",
                height: "5px",
                background: `linear-gradient(90deg, ${colors.GREEN_PRIMARY}, ${colors.GREEN_PRIMARY}40, transparent)`,
                margin: "24px auto",
                borderRadius: "3px",
              }}
            />
          </Box>

          {/* Experience List - optimized */}
          <Paper
            elevation={0}
            sx={{
              width: "100%",
              maxWidth: 900,
              borderRadius: "28px",
              backdropFilter: "blur(24px)",
              background: isDarkMode
                ? "linear-gradient(145deg, rgba(20, 20, 20, 0.85), rgba(15, 15, 15, 0.92))"
                : "linear-gradient(145deg, rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.92))",
              border: `1.5px solid ${colors.GREEN_PRIMARY}25`,
              boxShadow: `0 12px 48px ${isDarkMode ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0.08)'}`,
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              "&:hover": {
                borderColor: `${colors.GREEN_PRIMARY}40`,
                boxShadow: `0 20px 64px ${colors.GREEN_SHADOW}`,
              },
              willChange: "box-shadow, border-color",
            }}
          >
            <List sx={{ p: 0 }}>
              {listItems}
            </List>
          </Paper>
        </Stack>
      </Container>

      {/* Modal - only rendered when needed */}
      <ExperienceModal
        open={modalOpen}
        onClose={handleCloseModal}
        experience={selectedExperience}
        isDarkMode={isDarkMode}
        colors={colors}
      />
    </Box>
  );
}