// app/components/Hero.tsx
"use client";

import React from "react";
import { Box, Button, Typography, Chip, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import RocketLaunchRoundedIcon from "@mui/icons-material/RocketLaunchRounded";
import { COLORS } from "./constants";

interface HeroProps {
  t: any;
}

const Hero: React.FC<HeroProps> = ({ t }) => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  const colors = isDarkMode ? COLORS.DARK : COLORS.LIGHT;
  const common = COLORS.COMMON;

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 4,
        backgroundColor: isDarkMode ? COLORS.DARK.BG : COLORS.LIGHT.BG_START,
        backgroundImage: isDarkMode
          ? `
    radial-gradient(
      ellipse at top left,
      rgba(163, 230, 53, 0.35) 0%,
      rgba(163, 230, 53, 0.18) 10%,
      transparent 65%
    ),
     radial-gradient(
      ellipse at bottom right,
      rgba(163, 230, 53, 0.35) 0%,
      rgba(163, 230, 53, 0.18) 10%,
      transparent 35%
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
      {/* Main Content */}
      <Box
        sx={{
          maxWidth: 900,
          textAlign: "left",
          zIndex: 2,
          position: "relative",
        }}
      >
        {/* Grid Background - Côté gauche en dark mode */}
        {isDarkMode && (
          <Box
            sx={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: "120%",
              height: "120%",
              zIndex: 0,
              mx: "-10%",
              my: "-5%",
              backgroundImage: `linear-gradient(#ffffff 0.5px, transparent 0.5px, transparent calc(100% - 0.5px), #ffffff calc(100% - 0.5px)), linear-gradient(90deg, #ffffff 0.5px, transparent 0.5px, transparent calc(100% - 0.5px), #ffffff calc(100% - 0.5px))`,
              backgroundSize: "10% 10%",
              border: "2px solid #ffffff",
              opacity: 0.15,
            }}
          />
        )}

        {/* Grid Background - Côté droit en light mode */}
        {!isDarkMode && (
          <Box
            sx={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: "120%",
              height: "120%",
              zIndex: 0,
              mx: "-10%",
              my: "-5%",
              backgroundImage: `linear-gradient(#000000 0.5px, transparent 0.5px, transparent calc(100% - 0.5px), #000000 calc(100% - 0.5px)), linear-gradient(90deg, #000000 0.5px, transparent 0.5px, transparent calc(100% - 0.5px), #000000 calc(100% - 0.5px))`,
              backgroundSize: "10% 10%",
              border: "0.5px solid #000000",
              opacity: 0.1,
            }}
          />
        )}

        <Typography
          variant="h2"
          fontWeight={600}
          lineHeight={1.2}
          sx={{
            fontSize: { xs: "2.5rem", md: "4rem" },
            background: isDarkMode
              ? "linear-gradient(135deg, #ffffff 0%, #a3e635 100%)"
              : "linear-gradient(135deg, #0f172a 0%, #059669 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
          }}
        >
          {t.hero.greeting}
          {" "}
          {t.hero.turn_your}
          {" "}
          <Box
            component="span"
            sx={{
              background: isDarkMode ? colors.GREEN_ACCENT : colors.GREEN_LIGHT,
              px: 2,
              py: 0.5,
              borderRadius: "12px",
              display: "inline-block",
              transform: "rotate(-3deg)",
              color: isDarkMode
                ? COLORS.LIGHT.BG_START
                : COLORS.DARK.TEXT_PRIMARY,
              border: `1px solid ${colors.GREEN_PRIMARY}${isDarkMode ? "30" : "20"}`,
              fontWeight: 700,
            }}
          >
            {t.hero.idea}
          </Box>{" "}
          {t.hero.into_app}
        </Typography>

        <Typography
          sx={{
            mt: 3,
            fontSize: { xs: "1.1rem", md: "1.4rem" },
            color: colors.TEXT_SECONDARY,
            maxWidth: "700px",
          }}
        >
          {t.hero.description}
        </Typography>

        {/* Bouton avec effet moderne */}
        <Button
          variant="contained"
          sx={{
            mt: 6,
            px: 6,
            py: 2,
            fontSize: "1.2rem",
            borderRadius: "999px",
            background: isDarkMode
              ? `linear-gradient(135deg, ${colors.GREEN_PRIMARY} 0%, ${colors.GREEN_SECONDARY} 100%)`
              : `linear-gradient(135deg, ${colors.GREEN_LIGHT} 0%, ${colors.GREEN_DARK} 100%)`,
            color: isDarkMode ? COLORS.DARK.BG : "#ffffff",
            fontWeight: 600,
            boxShadow: `0 4px 30px ${colors.GREEN_SHADOW}`,
            textTransform: "none",
            position: "relative",
            overflow: "hidden",
            "&:before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: "-100%",
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
              transition: "left 0.7s",
            },
            "&:hover": {
              background: isDarkMode
                ? `linear-gradient(135deg, ${colors.GREEN_LIGHT} 0%, ${colors.GREEN_DARK} 100%)`
                : `linear-gradient(135deg, ${colors.GREEN_PRIMARY} 0%, ${colors.GREEN_SECONDARY} 100%)`,
              transform: "translateY(-2px)",
              boxShadow: `0 8px 40px ${colors.GREEN_SHADOW}`,
              "&:before": {
                left: "100%",
              },
            },
            transition: "all 0.3s ease",
          }}
        >
          {t.hero.cta}
        </Button>
      </Box>

      {/* Arrow */}
      <Box
        component="svg"
        viewBox="0 0 200 200"
        sx={{
          position: "absolute",
          top: 80,
          right: 180,
          width: 200,
          height: 200,
          display: { xs: "none", lg: "block" },
          zIndex: 3,
        }}
      >
        <path
          d="M10 10 C 150 0, 180 120, 100 170"
          stroke={common.PURPLE_GRADIENT_END}
          strokeWidth="4"
          fill="transparent"
          markerEnd="url(#arrowhead)"
        />
        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="7"
            refX="0"
            refY="3.5"
            orient="auto"
          >
            <polygon
              points="0 0, 10 3.5, 0 7"
              fill={common.PURPLE_GRADIENT_END}
            />
          </marker>
        </defs>
      </Box>

      {/* Rocket Blob */}
      <Box
        sx={{
          position: "absolute",
          right: 120,
          top: 200,
          width: 90,
          height: 90,
          background: `linear-gradient(145deg, ${common.PURPLE_GRADIENT_START}, ${common.PURPLE_GRADIENT_END})`,
          borderRadius: "30px",
          display: { xs: "none", lg: "flex" },
          alignItems: "center",
          justifyContent: "center",
          boxShadow: `0 0 40px ${common.PURPLE_SHADOW}`,
          zIndex: 3,
          animation: "float 3s ease-in-out infinite",
          "@keyframes float": {
            "0%, 100%": { transform: "translateY(0)" },
            "50%": { transform: "translateY(-10px)" },
          },
        }}
      >
        <RocketLaunchRoundedIcon sx={{ fontSize: 40, color: "#ffffff" }} />
      </Box>

      {/* Éléments décoratifs en premier plan */}
      <Box
        sx={{
          position: "absolute",
          top: "15%",
          left: "5%",
          width: "100px",
          height: "100px",
          border: `1px solid ${colors.GREEN_PRIMARY}${isDarkMode ? "20" : "10"}`,
          borderRadius: "50%",
          zIndex: 2,
          animation: "pulseSoft 8s ease-in-out infinite",
          "@keyframes pulseSoft": {
            "0%, 100%": { transform: "scale(1)", opacity: 0.2 },
            "50%": { transform: "scale(1.1)", opacity: 0.4 },
          },
        }}
      />
    </Box>
  );
};

export default Hero;