"use client";

import React from "react";
import { Box, Container, Typography, Stack, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import RocketLaunchRoundedIcon from "@mui/icons-material/RocketLaunchRounded";
import { COLORS } from "./constants";

interface AboutProps {
  t: any;
}

export default function About({ t }: AboutProps) {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";
  const colors = isDarkMode ? COLORS.DARK : COLORS.LIGHT;
  const common = COLORS.COMMON;

  return (
    <Box
      id="about"
      component="section"
      sx={{
        position: "relative",
        overflow: "hidden",
        py: { xs: 4, md: 8 },
        px: { xs: 0, md: 4 },
        backgroundColor: isDarkMode ? COLORS.DARK.BG : COLORS.LIGHT.BG_START,
        backgroundImage: isDarkMode
          ? `
            radial-gradient(
              ellipse at top right,
              rgba(163, 230, 53, 0.35) 0%,
              rgba(163, 230, 53, 0.18) 10%,
              transparent 65%
            ),
          
              radial-gradient(
              ellipse at bottom left,
              rgba(163, 230, 53, 0.35) 0%,
              rgba(163, 230, 53, 0.18) 10%,
              transparent 65%
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
      <Container maxWidth="lg">
        <Stack spacing={8} alignItems="center">
          {/* Title with decoration */}
          <Box sx={{ textAlign: "center", position: "relative" }}>
            <Typography
              variant="h2"
              fontWeight={700}
              sx={{
                fontSize: { xs: "2.5rem", md: "3.5rem" },
                background: isDarkMode
                  ? "linear-gradient(135deg, #ffffff 0%, #a3e635 100%)"
                  : "linear-gradient(135deg, #0f172a 0%, #059669 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                letterSpacing: "-0.02em",
              }}
            >
              {t.about.title}
            </Typography>

            {/* Decorative line */}
            <Box
              sx={{
                width: "120px",
                height: "4px",
                background: isDarkMode
                  ? "linear-gradient(90deg, #a3e635, transparent)"
                  : "linear-gradient(90deg, #059669, transparent)",
                margin: "20px auto",
                borderRadius: "2px",
              }}
            />
          </Box>

          {/* Main content with glass effect */}
          <Box
            sx={{
              maxWidth: 900,
              width: "100%",
              p: { xs: 0, md: 6 },
              borderRadius: "32px",
              backdropFilter: "blur(20px)",
              background: isDarkMode
                ? "rgba(20, 20, 20, 0.7)"
                : "rgba(255, 255, 255, 0.7)",
              border: `1px solid ${colors.GREEN_PRIMARY}${isDarkMode ? "20" : "20"}`,
              position: "relative",
              overflow: "hidden",
              boxShadow: isDarkMode
                ? "0 20px 60px rgba(0, 0, 0, 0.5)"
                : "0 20px 60px rgba(0, 0, 0, 0.1)",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "1px",
                background: `linear-gradient(90deg, transparent, ${colors.GREEN_PRIMARY}, transparent)`,
              },
            }}
          >
            <Stack spacing={4}>
              {/* Icon decoration */}
              <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: "24px",
                    background: isDarkMode
                      ? `linear-gradient(145deg, ${colors.GREEN_PRIMARY}, ${colors.GREEN_SECONDARY})`
                      : `linear-gradient(145deg, ${colors.GREEN_LIGHT}, ${colors.GREEN_DARK})`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: `0 0 40px ${colors.GREEN_SHADOW}`,
                    transform: "rotate(-5deg)",
                  }}
                >
                  <CodeRoundedIcon
                    sx={{
                      fontSize: 40,
                      color: isDarkMode ? "#000" : "#ffffff",
                    }}
                  />
                </Box>
              </Box>

              {/* Description text */}
              <Typography
                sx={{
                  fontSize: { xs: "1.1rem", md: "1.3rem" },
                  lineHeight: 1.8,
                  color: isDarkMode ? "#dcdcdc" : colors.TEXT_SECONDARY,
                  textAlign: "center",
                  "&::first-letter": {
                    fontSize: "2.5rem",
                    fontWeight: 700,
                    color: colors.GREEN_PRIMARY,
                    float: "left",
                    lineHeight: 0.8,
                    marginRight: "8px",
                    marginTop: "8px",
                  },
                }}
              >
                {t.about.description}
              </Typography>

              {/* Stats */}
              <Stack
                direction={{ xs: "row", sm: "row" }}
                spacing={4}
                sx={{ pt: 4, justifyContent: "center" }}
              >
                <Box sx={{ textAlign: "center" }}>
                  <Typography
                    sx={{
                      fontSize: "2.5rem",
                      fontWeight: 700,
                      background: isDarkMode
                        ? "linear-gradient(180deg, #a3e635, #65a30d)"
                        : "linear-gradient(180deg, #84cc16, #4d7c0f)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    +10
                  </Typography>
                  <Typography
                    sx={{
                      color: isDarkMode ? "#9ca3af" : colors.TEXT_SECONDARY,
                      fontSize: "0.9rem",
                    }}
                  >
                    Projects Completed
                  </Typography>
                </Box>
                <Box sx={{ textAlign: "center" }}>
                  <Typography
                    sx={{
                      fontSize: "2.5rem",
                      fontWeight: 700,
                      background: isDarkMode
                        ? "linear-gradient(180deg, #a3e635, #65a30d)"
                        : "linear-gradient(180deg, #84cc16, #4d7c0f)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    10+
                  </Typography>
                  <Typography
                    sx={{
                      color: isDarkMode ? "#9ca3af" : colors.TEXT_SECONDARY,
                      fontSize: "0.9rem",
                    }}
                  >
                    Technologies
                  </Typography>
                </Box>
              </Stack>
            </Stack>

            {/* CTA Button */}
            <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
              <Button
                variant="contained"
                startIcon={<RocketLaunchRoundedIcon />}
                sx={{
                  px: 6,
                  py: 2,
                  fontSize: { xs: "0.9rem", md: "1.1rem" },
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
                  transition: "all 0.3s ease",
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
                    transform: "translateY(-3px)",
                    boxShadow: `0 8px 40px ${colors.GREEN_SHADOW}`,
                    "&:before": {
                      left: "100%",
                    },
                  },
                }}
              >
                View My Projects
              </Button>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
