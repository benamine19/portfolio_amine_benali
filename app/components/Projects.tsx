'use client';

import { useState, useMemo, memo, useCallback, useRef } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Stack, 
  Button, 
  Chip, 
  IconButton, 
  Dialog,
  DialogContent,
  Fade,
  Paper,
  Skeleton,
  alpha,
} from '@mui/material';
import Grid from '@mui/material/GridLegacy';
import { useTheme } from '@mui/material/styles';
import LaunchRoundedIcon from '@mui/icons-material/LaunchRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import CalendarTodayRoundedIcon from '@mui/icons-material/CalendarTodayRounded';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Image from 'next/image';
import { COLORS } from './constants';

interface ProjectsProps {
  t: any;
}

// Données des projets
const PROJECTS = [
  {
    id: 1,
    title: "evoravoyage",
    category: "Travel Platform",
    description:
      "Application web pour gérer les offres de voyages incluant hôtels, Omra, expéditions, compagnies aériennes (Air Algérie, Air France), visas et billets d'avion. B2C et B2B.",
    longDescription:
      "Application web permettant de gérer les offres de voyages incluant hôtels, Omra, expéditions, compagnies aériennes (Air Algérie, Air France), visas et billets d'avion pour les clients individuels (B2C) et les agences de voyage (B2B). L'application offre une interface intuitive pour la réservation, la gestion des offres et le suivi des réservations, avec des fonctionnalités avancées pour les administrateurs et les utilisateurs finaux.",
    image:"https://res.cloudinary.com/de2gmvbew/image/upload/v1771982219/evora_jkiy9c.jpg",
    gallery: {
      screenshots: [
        {
          url: "https://res.cloudinary.com/de2gmvbew/image/upload/v1771460071/omra-site_tpdiov.jpg",
          title: "Page d'accueil",
          description: "Design moderne avec animations",
        },
        {
          url: "https://res.cloudinary.com/de2gmvbew/image/upload/v1771460070/omra-dahsboard_oveg2i.jpg",
          title: "dashboard admin",
          description: "Interface d'administration pour gérer les offres et les réservations et les clients et les paiements et toutes les fonctionnalités d'un site de voyage",
        },
      ],
    },
    tech: "React, TypeScript, Material-UI, Node.js",
    technologies: [
      { name: "React", icon: "⚛️" },
      { name: "TypeScript", icon: "📘" },
      { name: "Material-UI", icon: "🎨" },
      { name: "Node.js", icon: "🚀" },
    ],
    year: "2025",
    duration: "3 mois",
    teamSize: "4",
    status: "Terminé",
    complexity: "Avancé",
    color: "#0a90efff",
    detailsUrl: "/projets/evoravoyage",
    github: "https://github.com/votrecompte/evoravoyage",
    demo: "https://evoravoyage-demo.com",
    stats: { performance: 98, accessibility: 95, seo: 100 },
    client: "InnoTech Solutions",
  },
  {
    id: 2,
    title: "Mujmma Medical",
    category: "B2B Platform",
    description:
      "Plateforme B2B pour équipements médicaux. Gestion de commandes, catalogue et support client.",
    longDescription:
      "Marketplace professionnelle pour équipements médicaux (scanners, dispositifs médicaux, télescopes médicaux), avec gestion fournisseurs et commandes.",
    image:"https://res.cloudinary.com/de2gmvbew/image/upload/v1771982218/mujmaa_pcmesm.jpg",
    gallery: {
      screenshots: [
        {
          url: "https://res.cloudinary.com/de2gmvbew/image/upload/v1771460071/mujmaa-site_vsbrqx.jpg",
          title: "Page d'accueil",
          description: "Design moderne avec animations",
        },
      ],
    },
    tech: "React, TypeScript, Material-UI, Node.js",
    technologies: [
      { name: "React", icon: "⚛️" },
      { name: "TypeScript", icon: "📘" },
      { name: "Material-UI", icon: "🎨" },
      { name: "Node.js", icon: "🚀" },
    ],
    year: "2024",
    duration: "3 mois",
    teamSize: "4",
    status: "Terminé",
    complexity: "Avancé",
    color: "#0a90efff",
    detailsUrl: "/projets/mujmma-medical",
    github: "https://github.com/votrecompte/mujmma-medical",
    demo: "https://mujmma-medical-demo.com",
    stats: { performance: 98, accessibility: 95, seo: 100 },
    client: "InnoTech Solutions",
  },
  {
    id: 3,
    title: "EquiposDz",
    category: "E-commerce",
    description: "Boutique en ligne de matériel informatique.",
    longDescription:
      "Une plateforme une entreprise spécialisée dans la vente de matériel de gestion des stocks logistiques et point de vente pour accompagner vos solutions software avec nos outils hardware afin d'amener la solution à la réalité et à l'application final du processus de fabrication logistique jusqu'à la vente au client. En offre plus de 12 catégories de produit pour toute solution erp a proposé. Lecteur code barre imprimante de tiket, Ecran caisse tiroir caisse verificateur compteuse badgeuse consommable",
    image:
      "https://res.cloudinary.com/de2gmvbew/image/upload/v1771982219/equiposdz_dwpsve.jpg",
    gallery: {
      screenshots: [
        {
          url: "https://res.cloudinary.com/de2gmvbew/image/upload/v1771460073/equipos-products-site_xlfgxx.jpg",
          title: "Page d'accueil",
          description: "Design moderne avec animations",
        },
        {
          url: "https://res.cloudinary.com/de2gmvbew/image/upload/v1771460073/equipos-products-site_xlfgxx.jpg",
          title: "Page de detail produit",
          description: "Design moderne avec animations",
        },
        {
          url: "https://res.cloudinary.com/de2gmvbew/image/upload/v1771460070/equipose-dashbaord1_zb2jnc.jpg",
          title: "dashboard admin",
          description: "Interface d'administration pour gérer les produits et les commandes et les clients et les paiements et toutes les fonctionnalités d'un site de e-commerce",
        },
      ],
    },
    tech: "React, TypeScript, Material-UI, Node.js",
    technologies: [
      { name: "React", icon: "⚛️" },
      { name: "TypeScript", icon: "📘" },
      { name: "Material-UI", icon: "🎨" },
      { name: "Node.js", icon: "🚀" },
    ],
    year: "2024",
    duration: "3 mois",
    teamSize: "4",
    status: "Terminé",
    complexity: "Avancé",
    color: "#0a90efff",
    detailsUrl: "/projets/equiposdz",
    github: "https://github.com/votrecompte/equiposdz",
    demo: "https://equiposdz-demo.com",
    stats: { performance: 98, accessibility: 95, seo: 100 },
    client: "InnoTech Solutions",
  },
  {
    id: 4,
    title: "CarPro",
    category: "E-commerce",
    description: "Boutique en ligne de véhicules et accessoires automobiles.",
    longDescription:
      "Une plateforme complète pour la vente d'accessoires automobiles. Ce projet a été conçu pour offrir une expérience utilisateur fluide et intuitive.",
    image:
"https://res.cloudinary.com/de2gmvbew/image/upload/v1771982219/carpro_td8xro.jpg",
    gallery: {
      screenshots: [
        {
          url: "https://res.cloudinary.com/de2gmvbew/image/upload/v1771460072/carpro1_w9ljtr.jpg",
          title: "Page d'accueil",
          description: "Design moderne avec animations",
        },
        {
          url: "https://res.cloudinary.com/de2gmvbew/image/upload/v1771460072/car-pro_qgokd3.jpg",
          title: "Page de contact",
          description: "Design moderne avec animations",
        },
      ],
    },
    tech: "React, TypeScript, Material-UI, Node.js",
    technologies: [
      { name: "React", icon: "⚛️" },
      { name: "TypeScript", icon: "📘" },
      { name: "Material-UI", icon: "🎨" },
      { name: "Node.js", icon: "🚀" },
    ],
    year: "2024",
    duration: "3 mois",
    teamSize: "4",
    status: "Terminé",
    complexity: "Avancé",
    color: "#0a90efff",
    detailsUrl: "/projets/carpro",
    github: "https://github.com/votrecompte/carpro",
    demo: "https://carpro-demo.com",
    stats: { performance: 98, accessibility: 95, seo: 100 },
    client: "InnoTech Solutions",
  },
  {
    id: 5,
    title: "DztechLab",
    category: "Digital Agency",
    description:
      "Agence digitale spécialisée dans la création de sites web et applications mobiles pour les entreprises.",
    longDescription:
      "Une agence digitale innovante qui offre des solutions sur mesure pour les entreprises. Ce projet a été conçu pour mettre en valeur les compétences de l'agence en matière de design et de développement web.",
    image:
"https://res.cloudinary.com/de2gmvbew/image/upload/v1771982219/dztechlab_jyygu0.jpg",
    gallery: {
      screenshots: [
        {
          url: "https://res.cloudinary.com/de2gmvbew/image/upload/v1771460264/dz-techlab_rrqwqj.png",
          title: "Page d'accueil",
          description: "Design moderne avec animations",
        },
      ],
    },
    tech: "React, TypeScript, Material-UI, Node.js",
    technologies: [
      { name: "React", icon: "⚛️" },
      { name: "TypeScript", icon: "📘" },
      { name: "Material-UI", icon: "🎨" },
      { name: "Node.js", icon: "🚀" },
    ],
    year: "2024",
    duration: "3 mois",
    teamSize: "4",
    status: "Terminé",
    complexity: "Avancé",
    color: "#0a90efff",
    detailsUrl: "/projets/dztechlab",
    github: "https://github.com/votrecompte/dztechlab",
    demo: "https://dztechlab-demo.com",
    stats: { performance: 98, accessibility: 95, seo: 100 },
    client: "InnoTech Solutions",
  },
    {
    id: 6,
    title: "SmartInvoice Pro",
    category: "SaaS Platform",
    description: "Création d'une plateforme SaaS permettant la génération de factures et devis multi-devises, gestion des clients et automatisation des processus financiers pour freelances et PME.",
    longDescription: "Plateforme SaaS complète de facturation et gestion financière. Permet aux freelances et PME de créer des devis et factures professionnels en multi-devises, gérer leur portefeuille clients, automatiser les relances de paiement et suivre leur trésorerie en temps réel. Intègre des tableaux de bord analytiques, des modèles personnalisables et des intégrations avec les principales passerelles de paiement.",
image:"https://res.cloudinary.com/de2gmvbew/image/upload/v1771982218/saas_gxrpjc.jpg",
    gallery: {
      screenshots: [
        {
          url: "https://res.cloudinary.com/de2gmvbew/image/upload/v1771460072/placeholder-saas1.jpg",
          title: "Dashboard financier",
          description: "Vue d'ensemble de la trésorerie et des factures en temps réel",
        },
        {
          url: "https://res.cloudinary.com/de2gmvbew/image/upload/v1771460072/placeholder-saas2.jpg",
          title: "Création de facture",
          description: "Éditeur de factures multi-devises avec modèles personnalisables",
        },
      ],
    },
    tech: "React, TypeScript, Material-UI, Node.js, Stripe API",
    technologies: [
      { name: "React", icon: "⚛️" },
      { name: "TypeScript", icon: "📘" },
      { name: "Material-UI", icon: "🎨" },
      { name: "Node.js", icon: "🚀" },
      { name: "Stripe", icon: "💳" },
    ],
    year: "2025",
    duration: "4 mois",
    teamSize: "2",
    status: "En développement",
    complexity: "Intermédiaire",
    color: "#6D28D9", // Violet profond
    detailsUrl: "/projets/smartinvoice-pro",
    github: "https://github.com/votrecompte/smartinvoice-pro",
    demo: "https://smartinvoice-pro-demo.com",
    stats: { performance: 95, accessibility: 92, seo: 90 },
    client: "Projet personnel",
  },
  {
    id: 7,
    title: "Primetech",
    category: "Digital Agency",
    description: "Site vitrine pour agence digitale spécialisée en solutions IA, automatisation et transformation digitale pour entreprises B2B, B2C et B2G.",
    longDescription: "Site web complet pour Primetech, une agence digitale innovante proposant des solutions sur mesure en intelligence artificielle, automatisation des processus, développement de plateformes digitales et optimisation de la conversion. Le site présente leurs services, portfolio, expertise sectorielle (B2B, B2C, B2G) et permet la prise de rendez-vous pour des audits gratuits. Design moderne avec animations dynamiques et interface utilisateur premium.",
    image: "https://res.cloudinary.com/de2gmvbew/image/upload/v1771982218/primetech_gumoy1.jpg",
    gallery: {
      screenshots: [
        {
          url:"https://res.cloudinary.com/de2gmvbew/image/upload/v1771460071/inootech-site_bnopoj.jpg",
          title: "Page d'accueil",
          description: "Design premium avec animations et présentation des services IA",
        },
        {
          url: "https://res.cloudinary.com/de2gmvbew/image/upload/v1771460264/primetech-services.jpg",
          title: "Page services",
          description: "Présentation détaillée des solutions digitales et automation",
        },
        {
          url: "https://res.cloudinary.com/de2gmvbew/image/upload/v1771460264/primetech-portfolio.jpg",
          title: "Portfolio",
          description: "Galerie des projets réalisés avec filtres par catégorie",
        },
      ],
    },
    tech: "React, TypeScript, Material-UI, Node.js, Framer Motion",
    technologies: [
      { name: "React", icon: "⚛️" },
      { name: "TypeScript", icon: "📘" },
      { name: "Material-UI", icon: "🎨" },
      { name: "Node.js", icon: "🚀" },
      { name: "Framer Motion", icon: "✨" },
    ],
    year: "2025",
    duration: "2 mois",
    teamSize: "1",
    status: "Terminé",
    complexity: "Avancé",
    color: "#0A1929", // Bleu espace profond
    detailsUrl: "/projets/primetech",
    github: "https://github.com/votrecompte/primetech",
    demo: "https://primetech-demo.com",
    stats: { performance: 98, accessibility: 96, seo: 100 },
    client: "Primetech",
  },
];

// Styles memoïsés ultra légers
const useStyles = (isDarkMode: boolean, colors: any, common: any) => useMemo(() => ({
  backgroundImage: isDarkMode
    ? `radial-gradient(ellipse at top left, rgba(163, 230, 53, 0.25) 0%, rgba(163, 230, 53, 0.12) 10%, transparent 55%), linear-gradient(180deg, #0b0b0b 0%, #050505 100%)`
    : `radial-gradient(ellipse at top left, ${common.BLUE_DARK} 0%, ${common.BLUE_LIGHT} 30%, transparent 65%), radial-gradient(ellipse at top right, ${common.BLUE_DARK} 0%, ${common.BLUE_LIGHT} 30%, transparent 65%), radial-gradient(ellipse at bottom right, ${common.BLUE_DARK} 0%, ${common.BLUE_LIGHT} 30%, transparent 65%), radial-gradient(ellipse at bottom left, ${common.BLUE_DARK} 0%, ${common.BLUE_LIGHT} 30%, transparent 65%), linear-gradient(180deg, ${COLORS.LIGHT.BG_START} 0%, ${COLORS.LIGHT.BG_END} 100%)`,
  titleGradient: isDarkMode ? 'linear-gradient(135deg, #ffffff 0%, #a3e635 100%)' : 'linear-gradient(135deg, #0f172a 0%, #059669 100%)',
}), [isDarkMode, colors, common]);

// Image optimisée avec Next.js
const OptimizedImage = memo(({ src, alt, priority = false }: { src: string; alt: string; priority?: boolean }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  if (hasError) return null;

  return (
    <>
      {isLoading && (
        <Skeleton 
          variant="rectangular" 
          width="100%" 
          height="100%" 
          sx={{ position: 'absolute', top: 0, left: 0 }}
        />
      )}
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        quality={75}
        priority={priority}
        loading={priority ? undefined : "lazy"}
        onLoad={() => setIsLoading(false)}
        onError={() => setHasError(true)}
        style={{
          objectFit: 'cover',
          transition: 'opacity 0.2s ease',
          opacity: isLoading ? 0 : 1,
        }}
      />
    </>
  );
});

OptimizedImage.displayName = 'OptimizedImage';

// Galerie avec miniatures horizontales et image principale scrollable
const ImageGallery = memo(({ 
  images, 
  projectName, 
  isDarkMode, 
  colors 
}: { 
  images: string[]; 
  projectName: string;
  isDarkMode: boolean;
  colors: any;
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const scrollContainerRef = useRef<any>(null);

  if (!images.length) return null;

  const screenshots = images.map((url, idx) => ({
    url,
    title: `Screenshot ${idx + 1}`,
    description: projectName,
  }));

  const handlePrev = () => {
    setSelectedImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleScrollDown = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        top: 150,
        behavior: 'smooth',
      });
    }
  };

  const handleScrollUp = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        top: -150,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      {/* Miniatures horizontales */}
      {screenshots.length > 1 && (
        <Box
          sx={{
            display: "flex",
            gap: 1,
            overflowX: "auto",
            pb: 1,
            mb: 2,
            "&::-webkit-scrollbar": { height: 4 },
            "&::-webkit-scrollbar-thumb": { 
              bgcolor: colors.GREEN_PRIMARY, 
              borderRadius: 2 
            },
          }}
        >
          {screenshots.map((screenshot, idx) => (
            <Box
              key={idx}
              onClick={() => setSelectedImageIndex(idx)}
              sx={{
                width: 60,
                height: 60,
                borderRadius: 1,
                overflow: "hidden",
                border:
                  idx === selectedImageIndex
                    ? `3px solid ${colors.GREEN_PRIMARY}`
                    : "2px solid transparent",
                cursor: "pointer",
                opacity: idx === selectedImageIndex ? 1 : 0.7,
                transition: "all 0.2s",
                flexShrink: 0,
                "&:hover": { opacity: 1, transform: "scale(1.05)" },
              }}
            >
              <img
                src={screenshot.url}
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
          ))}
        </Box>
      )}

      {/* Image principale */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          // maxHeight: "500px",
          borderRadius: 2,
          overflow: "hidden",
          border: `2px solid ${alpha(colors.GREEN_PRIMARY, 0.2)}`,
          mb: 2,
          backgroundColor: '#0a0a0a',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: '100%',
            overflowY: 'scroll',
            overflowX: 'hidden',
            backgroundColor: '#000',
            '&::-webkit-scrollbar': {
              width: '6px',
            },
            '&::-webkit-scrollbar-track': {
              background: 'transparent',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: colors.GREEN_PRIMARY,
              borderRadius: '3px',
            },
          }}
        >
          <img
            src={screenshots[selectedImageIndex].url}
            alt={screenshots[selectedImageIndex].title}
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              objectFit: "cover",
            }}
          />
        </Box>

        {/* Navigation */}
        {screenshots.length > 1 && (
          <>
            <IconButton
              onClick={handlePrev}
              sx={{
                position: "absolute",
                left: 8,
                top: "50%",
                transform: "translateY(-50%)",
                bgcolor: alpha("#ffffff", 0.8),
                "&:hover": { bgcolor: "#ffffff" },
                zIndex: 10,
              }}
            >
              <ChevronLeftIcon sx={{ color: '#000' }} />
            </IconButton>

            <IconButton
              onClick={handleNext}
              sx={{
                position: "absolute",
                right: 8,
                top: "50%",
                transform: "translateY(-50%)",
                bgcolor: alpha("#ffffff", 0.8),
                "&:hover": { bgcolor: "#ffffff" },
                zIndex: 10,
              }}
            >
              <ChevronRightIcon sx={{ color: '#000' }} />
            </IconButton>
          </>
        )}

        {/* Compteur */}
        {screenshots.length > 1 && (
          <Chip
            label={`${selectedImageIndex + 1}/${screenshots.length}`}
            size="small"
            sx={{
              position: "absolute",
              bottom: 12,
              right: 12,
              bgcolor: alpha("#000000", 0.6),
              color: "#ffffff",
              zIndex: 10,
            }}
          />
        )}


        {/* Légende */}
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            p: 2,
            background: `linear-gradient(to top, ${alpha("#000000", 0.7)}, transparent)`,
            color: "#ffffff",
            zIndex: 5,
          }}
        >
          <Typography variant="subtitle2">
            {screenshots[selectedImageIndex].title}
          </Typography>
          {screenshots[selectedImageIndex].description && (
            <Typography variant="caption">
              {screenshots[selectedImageIndex].description}
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
});

ImageGallery.displayName = 'ImageGallery';

// Modal de détails optimisé avec mise en page deux colonnes
const ProjectDetailModal = memo(({ 
  open, 
  onClose, 
  project, 
  projectKey,
  isDarkMode, 
  colors 
}: { 
  open: boolean; 
  onClose: () => void; 
  project: any; 
  projectKey: string;
  isDarkMode: boolean; 
  colors: any;
}) => {
  if (!project) return null;

  const demoImages = project.gallery?.screenshots?.map((s: any) => s.url) || [];

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="lg"
      fullWidth
      TransitionComponent={Fade}
      transitionDuration={200}
      PaperProps={{
        sx: {
          borderRadius: '20px',
          bgcolor: isDarkMode ? 'rgba(18,18,18,0.98)' : 'rgba(255,255,255,0.98)',
          backdropFilter: 'blur(40px)',
          border: `1px solid ${colors.GREEN_PRIMARY}30`,
          m: { xs: 2, md: 3 },
          height: { xs: '90vh', md: '85vh' },
          maxHeight: { xs: '90vh', md: '85vh' },
        },
      }}
    >
      <IconButton
        onClick={onClose}
        sx={{
          position: 'absolute',
          right: 12,
          top: 12,
          color: '#fff',
          zIndex: 20,
          bgcolor: 'rgba(0,0,0,0.5)',
          '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' },
          width: 36,
          height: 36,
        }}
      >
        <CloseRoundedIcon sx={{ fontSize: 20 }} />
      </IconButton>

      <DialogContent sx={{ p: { xs: 2, md: 3 }, height: '100%', overflow: 'hidden' }}>
        <Grid container spacing={3} sx={{ height: '100%' }}>
          {/* Partie gauche - Galerie avec miniatures horizontales et image principale */}
          <Grid item xs={12} md={7} sx={{ height: '100%', display: 'flex', flexDirection: 'column', overflowY: 'auto', pr: 1, '&::-webkit-scrollbar': { width: '4px' }, '&::-webkit-scrollbar-track': { background: 'transparent' }, '&::-webkit-scrollbar-thumb': { backgroundColor: colors.GREEN_PRIMARY, borderRadius: '3px' } }}>
            <Box>
              <ImageGallery 
                images={demoImages} 
                projectName={project.name}
                isDarkMode={isDarkMode}
                colors={colors}
              />
            </Box>
          </Grid>

          {/* Partie droite - Contenu du projet */}
          <Grid item xs={12} md={5} sx={{ height: 'auto', maxHeight: '100%' }}>
            <Box
              sx={{
                height: 'auto',
              }}
            >
              <Stack spacing={3}>
                {/* Header */}
                <Box>
                  <Typography
                    sx={{
                      fontSize: { xs: '1.6rem', md: '1.8rem' },
                      fontWeight: 700,
                      color: isDarkMode ? '#fff' : colors.TEXT_PRIMARY,
                      mb: 2,
                      lineHeight: 1.2,
                    }}
                  >
                    {project.name}
                  </Typography>
                  <Stack direction="row" spacing={1.5} flexWrap="wrap">
                    <Chip
                      icon={<CalendarTodayRoundedIcon sx={{ fontSize: 14 }} />}
                      label="2024"
                      size="small"
                      sx={{
                        bgcolor: `${colors.GREEN_PRIMARY}15`,
                        color: colors.GREEN_PRIMARY,
                        borderRadius: '8px',
                        height: 26,
                        fontSize: '0.75rem',
                      }}
                    />
                  </Stack>
                </Box>

                {/* Description */}
                <Box>
                  <Typography
                    sx={{
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: colors.GREEN_PRIMARY,
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      mb: 1.5,
                    }}
                  >
                    À propos du projet
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '0.95rem',
                      lineHeight: 1.7,
                      color: isDarkMode ? '#e5e5e5' : colors.TEXT_SECONDARY,
                    }}
                  >
                    {project.description}
                  </Typography>
                </Box>

                {/* Technologies */}
                <Box>
                  <Typography
                    sx={{
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: colors.GREEN_PRIMARY,
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      mb: 1.5,
                    }}
                  >
                    Technologies utilisées
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                    {project.tech.split(', ').map((tech: string, i: number) => (
                      <Chip
                        key={i}
                        label={tech}
                        size="small"
                        sx={{
                          height: 28,
                          fontSize: '0.8rem',
                          bgcolor: isDarkMode ? 'rgba(163,230,53,0.1)' : 'rgba(5,150,105,0.1)',
                          border: `1px solid ${colors.GREEN_PRIMARY}30`,
                          color: isDarkMode ? '#dcdcdc' : colors.TEXT_SECONDARY,
                          borderRadius: '8px',
                          mb: 1,
                        }}
                      />
                    ))}
                  </Stack>
                </Box>

                {/* Actions */}
                <Stack direction="row" spacing={2} sx={{ mt: 2, pt: 2, borderTop: `1px solid ${colors.GREEN_PRIMARY}20` }}>
                  <Button
                    startIcon={<GitHubIcon sx={{ fontSize: 16 }} />}
                    href={project.github}
                    target="_blank"
                    fullWidth
                    size="medium"
                    sx={{
                      py: 1.2,
                      borderRadius: '10px',
                      border: `1px solid ${colors.GREEN_PRIMARY}40`,
                      color: colors.GREEN_PRIMARY,
                      fontWeight: 600,
                      textTransform: 'none',
                      fontSize: '0.85rem',
                      '&:hover': { bgcolor: `${colors.GREEN_PRIMARY}10` },
                    }}
                  >
                    Voir le code
                  </Button>
                  <Button
                    startIcon={<LaunchRoundedIcon sx={{ fontSize: 16 }} />}
                    href={project.demo}
                    target="_blank"
                    fullWidth
                    size="medium"
                    sx={{
                      py: 1.2,
                      borderRadius: '10px',
                      bgcolor: colors.GREEN_PRIMARY,
                      color: isDarkMode ? '#000' : '#fff',
                      fontWeight: 600,
                      textTransform: 'none',
                      fontSize: '0.85rem',
                      '&:hover': { bgcolor: colors.GREEN_SECONDARY || colors.GREEN_PRIMARY },
                    }}
                  >
                    Voir la démo
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
});

ProjectDetailModal.displayName = 'ProjectDetailModal';

// Project Card ultra optimisée
const ProjectCard = memo(({ 
  project, 
  projectKey,
  isDarkMode, 
  colors,
  onOpenModal 
}: { 
  project: any; 
  projectKey: string;
  isDarkMode: boolean; 
  colors: any;
  onOpenModal: (project: any, key: string) => void;
}) => {
  const techs = useMemo(() => project.tech.split(', '), [project.tech]);
  const displayTechs = techs.slice(0, 3);
  const remainingTechs = techs.length - 3;

  return (
    <Grid item xs={12} md={6} lg={4}>
      <Paper
        elevation={0}
        onClick={() => onOpenModal(project, projectKey)}
        sx={{
          height: '100%',
          borderRadius: '16px',
          bgcolor: isDarkMode ? 'rgba(20,20,20,0.8)' : 'rgba(255,255,255,0.8)',
          backdropFilter: 'blur(12px)',
          border: `1px solid ${colors.GREEN_PRIMARY}20`,
          overflow: 'hidden',
          transition: 'transform 0.2s ease, border-color 0.2s ease',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          '&:hover': {
            transform: 'translateY(-4px)',
            borderColor: `${colors.GREEN_PRIMARY}50`,
          },
        }}
      >
        {/* Image container */}
        <Box sx={{ position: 'relative', width: '100%', height: 160, bgcolor: '#000' }}>
          <OptimizedImage 
            src={project.image} 
            alt={project.name} 
          />
        </Box>

        {/* Content */}
        <Box sx={{ p: 2.5, flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Typography
            sx={{
              fontSize: '1rem',
              fontWeight: 700,
              color: isDarkMode ? '#fff' : colors.TEXT_PRIMARY,
              mb: 1,
              lineHeight: 1.3,
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              minHeight: '2.6rem',
            }}
          >
            {project.name}
          </Typography>

          <Typography
            sx={{
              color: isDarkMode ? '#d1d5db' : colors.TEXT_SECONDARY,
              fontSize: '0.8rem',
              lineHeight: 1.6,
              mb: 2,
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              flex: 1,
            }}
          >
            {project.description}
          </Typography>

          {/* Tech chips */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
            {displayTechs.map((tech: string, i: number) => (
              <Chip
                key={i}
                label={tech}
                size="small"
                sx={{
                  height: 22,
                  fontSize: '0.65rem',
                  fontWeight: 600,
                  bgcolor: `${colors.GREEN_PRIMARY}10`,
                  border: `1px solid ${colors.GREEN_PRIMARY}30`,
                  color: isDarkMode ? '#d1d5db' : colors.TEXT_SECONDARY,
                  borderRadius: '6px',
                  '& .MuiChip-label': { px: 1 },
                }}
              />
            ))}
            {remainingTechs > 0 && (
              <Chip
                label={`+${remainingTechs}`}
                size="small"
                sx={{
                  height: 22,
                  fontSize: '0.65rem',
                  fontWeight: 600,
                  bgcolor: 'transparent',
                  border: `1px solid ${colors.GREEN_PRIMARY}30`,
                  color: colors.GREEN_PRIMARY,
                  borderRadius: '6px',
                  '& .MuiChip-label': { px: 1 },
                }}
              />
            )}
          </Box>

          {/* Mini aperçu des images */}
          <Stack direction="row" spacing={0.5} sx={{ mb: 1.5 }}>
            {project.gallery?.screenshots?.slice(0, 3).map((_: any, i: number) => (
              <Box
                key={i}
                sx={{
                  width: 24,
                  height: 24,
                  borderRadius: '4px',
                  bgcolor: `${colors.GREEN_PRIMARY}15`,
                  border: `1px solid ${colors.GREEN_PRIMARY}30`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography sx={{ fontSize: '0.6rem', color: colors.GREEN_PRIMARY }}>
                  {i + 1}
                </Typography>
              </Box>
            ))}
          </Stack>

          {/* Actions */}
          <Button
            startIcon={<VisibilityIcon sx={{ fontSize: 14 }} />}
            fullWidth
            size="small"
            onClick={(e) => {
              e.stopPropagation();
              onOpenModal(project, projectKey);
            }}
            sx={{
              py: 0.8,
              borderRadius: '8px',
              bgcolor: colors.GREEN_PRIMARY,
              color: isDarkMode ? '#000' : '#fff',
              fontSize: '0.75rem',
              fontWeight: 600,
              textTransform: 'none',
              '&:hover': { bgcolor: colors.GREEN_SECONDARY || colors.GREEN_PRIMARY, transform: 'translateY(-2px)' },
              transition: 'all 0.2s ease',
            }}
          >
            Aperçu rapide
          </Button>
        </Box>
      </Paper>
    </Grid>
  );
});

ProjectCard.displayName = 'ProjectCard';

// Composant principal
export default function Projects({ t }: ProjectsProps) {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  const colors = isDarkMode ? COLORS.DARK : COLORS.LIGHT;
  const common = COLORS.COMMON;
  const styles = useStyles(isDarkMode, colors, common);

  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedProjectKey, setSelectedProjectKey] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const allProjects = useMemo(() => {
    return PROJECTS.map((p, index) => ({
      ...p,
      key: `project${index + 1}`,
    }));
  }, []);

  const handleOpenModal = useCallback((project: any, key: string) => {
    setSelectedProject(project);
    setSelectedProjectKey(key);
    setModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setModalOpen(false);
    setTimeout(() => {
      setSelectedProject(null);
      setSelectedProjectKey('');
    }, 150);
  }, []);

  if (!allProjects.length) return null;

  return (
    <Box
      id="projects"
      component="section"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        py: { xs: 6, md: 10 },
        px: 4,
        bgcolor: isDarkMode ? COLORS.DARK.BG : COLORS.LIGHT.BG_START,
        backgroundImage: styles.backgroundImage,
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={4}>
          {/* Title */}
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              variant="h2"
              fontWeight={700}
              sx={{
                fontSize: { xs: '2rem', md: '2.8rem' },
                background: styles.titleGradient,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '-0.02em',
                mb: 2,
              }}
            >
              {t.projects?.title || 'Selected Projects'}
            </Typography>
            <Box
              sx={{
                width: '60px',
                height: '4px',
                background: `linear-gradient(90deg, ${colors.GREEN_PRIMARY}, transparent)`,
                mx: 'auto',
                borderRadius: '2px',
              }}
            />
          </Box>

          {/* Grille de projets */}
          <Grid container spacing={2.5}>
            {allProjects.map((project) => (
              <ProjectCard
                key={project.key}
                project={project}
                projectKey={project.key}
                isDarkMode={isDarkMode}
                colors={colors}
                onOpenModal={handleOpenModal}
              />
            ))}
          </Grid>
        </Stack>
      </Container>

      <ProjectDetailModal
        open={modalOpen}
        onClose={handleCloseModal}
        project={selectedProject}
        projectKey={selectedProjectKey}
        isDarkMode={isDarkMode}
        colors={colors}
      />
    </Box>
  );
}