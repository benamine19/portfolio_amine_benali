# Professional Portfolio - Amine

## Project Overview

A modern, responsive, and professionally designed personal portfolio built with **Next.js 16**, **TypeScript**, **Material-UI**, and **Internationalization (i18n)** support for French and English.

### 🎯 Key Features

- ✅ **App Router with Dynamic Locale Routing** (`/en` and `/fr`)
- ✅ **Server-Side Static Generation (SSG)** for optimal performance
- ✅ **TypeScript** for type safety
- ✅ **Material-UI (MUI)** with custom dark theme (blue accent)
- ✅ **Internationalization (i18n)** with JSON translation files
- ✅ **Fully Responsive** design (mobile-first)
- ✅ **Accessibility** best practices (WCAG 2.1)
- ✅ **SEO Optimized** with metadata and Open Graph
- ✅ **Clean Code Architecture** with separation of concerns
- ✅ **No hardcoded text** - all content from translations
- ✅ **Static content** - no API calls or backend dependency

## 📁 Project Structure

```
portfolio-amine/
├── app/
│   ├── [locale]/                    # Dynamic locale segment
│   │   ├── layout.tsx              # Layout with theme provider
│   │   └── page.tsx                # Main page (renders all sections)
│   ├── components/                  # Reusable components
│   │   ├── Navbar.tsx              # Navigation bar with language toggle
│   │   ├── Hero.tsx                # Hero section
│   │   ├── About.tsx               # About section
│   │   ├── Education.tsx           # Education section
│   │   ├── Skills.tsx              # Skills showcase
│   │   ├── Projects.tsx            # Projects portfolio
│   │   ├── Contact.tsx             # Contact information
│   │   └── Footer.tsx              # Footer
│   ├── lib/
│   │   ├── i18n.ts                 # i18n utility functions
│   │   └── theme.ts                # MUI theme configuration
│   ├── types/
│   │   └── index.ts                # TypeScript type definitions
│   ├── globals.css                 # Global styles
│   ├── layout.tsx                  # Root layout (HTML setup)
│   └── page.tsx                    # Root page (redirects to locale)
├── public/
│   └── locales/
│       ├── en.json                 # English translations
│       └── fr.json                 # French translations
├── middleware.ts                    # Locale routing middleware
├── next.config.ts                  # Next.js configuration
├── tsconfig.json                   # TypeScript configuration
├── package.json                    # Dependencies
└── README.md                        # This file

```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Install dependencies:**
```bash
cd portfolio-amine
npm install
```

2. **Run development server:**
```bash
npm run dev
```

3. **Open in browser:**
- English: [http://localhost:3000/en](http://localhost:3000/en)
- French: [http://localhost:3000/fr](http://localhost:3000/fr)

The root URL `/` will automatically redirect to `/en`

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Architecture & Components

### Root Layout (`app/layout.tsx`)
- Sets up basic HTML structure
- Configures metadata for SEO
- Provides HTML lang attribute

### Locale Layout (`app/[locale]/layout.tsx`)
- Wraps all content with **MUI ThemeProvider**
- Applies **CssBaseline** for consistent styling
- Fetches translations based on locale
- Renders all main components in order:
  1. Navbar
  2. Hero
  3. About
  4. Education
  5. Skills
  6. Projects
  7. Contact
  8. Footer

### Components

#### **Navbar.tsx**
- Sticky navigation bar with blur effect
- Language toggle button (`en` ↔ `fr`)
- Smooth scroll links to sections
- Responsive design with hidden desktop nav on mobile
- Gradient logo with hover effect

#### **Hero.tsx**
- Full-screen hero section with gradient background
- Animated text with gradient effects
- Call-to-action buttons
- Responsive typography

#### **About.tsx**
- Personal description and introduction
- Hover animation effects
- Responsive card design

#### **Education.tsx**
- Educational background with icon
- Year badge
- Summary text
- Smooth hover transitions

#### **Skills.tsx**
- Three-column grid (Frontend, Backend, Tools)
- Skill chips with gradient backgrounds
- Hover animations
- Responsive for mobile

#### **Projects.tsx**
- Project cards with gradient borders
- Technology stack display
- Smooth hover transitions
- Responsive grid layout

#### **Contact.tsx**
- Contact information (email, phone)
- Social media links (LinkedIn, GitHub, Twitter)
- Icon-based buttons with hover effects
- Direct action links

#### **Footer.tsx**
- Copyright information with current year
- Credit text
- Responsive layout
- Divider elements

## 🎨 Theme Customization

The custom MUI theme is defined in `app/lib/theme.ts`:

### Colors
- **Primary**: Blue gradient (`#1e88e5` → `#1565c0`)
- **Secondary**: Yellow (`#ffd54f`)
- **Background**: Dark (`#0d1b2a`)
- **Surface**: Darker (`#1a2332`)

### Typography
- **Font Family**: Segoe UI, Roboto, Helvetica, Arial
- **H1**: 3.5rem (2rem on mobile)
- **H2**: 2.5rem (1.75rem on mobile)
- **H3**: 2rem (1.5rem on mobile)
- **Body**: 1rem, line-height 1.6

### Components
- **Button**: Custom gradient, hover effects
- **Card**: Glass-morphism effect, smooth transitions
- **AppBar**: Blur effect, gradient background

## 🌍 Internationalization (i18n)

### Translation Files
Located in `public/locales/`:
- `en.json` - English translations
- `fr.json` - French translations

### Translation Structure
Each file contains:
- `nav` - Navigation labels
- `hero` - Hero section text
- `about` - About section
- `education` - Educational info
- `skills` - Skills categories and items
- `projects` - Project descriptions
- `contact` - Contact information
- `footer` - Footer text

### Using Translations

```typescript
// Get translations for a locale
import { getTranslations } from '@/app/lib/i18n';

const translations = getTranslations('en');
console.log(translations.nav.about); // "About"
```

### Adding New Translations

1. Edit `public/locales/en.json` and `public/locales/fr.json`
2. Add new keys following the existing structure
3. Use in components via props: `t.section.key`

## 📱 Responsive Design

### Breakpoints (MUI defaults)
- **xs**: 0px+
- **sm**: 600px+
- **md**: 960px+
- **lg**: 1280px+
- **xl**: 1920px+

### Mobile Optimizations
- Stack navigation vertically
- Responsive typography sizes
- Adjusted padding/margins
- Touch-friendly button sizes

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Focus visible outlines
- Color contrast compliance
- Reduced motion support
- Form input labels
- Image alt text support

## 🔍 SEO Optimization

### Metadata
- Title and description
- Keywords
- Author information
- Open Graph tags
- Twitter Card tags

### Structured Data
Ready for JSON-LD integration if needed

### Sitemap & Robots
Create `public/sitemap.xml` and `public/robots.txt` as needed

## 🚀 Performance

### Static Generation
- All pages are statically generated at build time
- No runtime data fetching
- Instant page loads

### Image Optimization
- Next.js Image component ready
- CSS Grid/Flex for layouts
- CSS variables for theming

### Code Splitting
- Component-based architecture
- Tree-shaking friendly
- Optimized bundle size

## 🔧 Configuration Files

### `next.config.ts`
Basic Next.js configuration (can be extended for image optimization, etc.)

### `tsconfig.json`
- Strict mode enabled
- Path alias `@/*` for absolute imports
- React JSX transformation
- ES2017 target

### `middleware.ts`
- Automatic locale routing
- Default locale: English
- Redirects root to `/en`

### `app/lib/theme.ts`
- MUI theme provider setup
- Custom colors and typography
- Component style overrides

## 📝 Environment Variables

None required for basic functionality. Optional:
- `NEXT_PUBLIC_SITE_URL` - For absolute URLs in meta tags

## 🎯 Customization Guide

### Change Default Locale
Edit `middleware.ts`:
```typescript
const defaultLocale = 'fr'; // Change to French
```

### Update Personal Information
Edit translation files:
- `public/locales/en.json`
- `public/locales/fr.json`

### Modify Colors
Edit `app/lib/theme.ts`:
```typescript
primary: {
  main: '#YOUR_COLOR',
}
```

### Add New Section
1. Create new component in `app/components/`
2. Add translations in `public/locales/*.json`
3. Import in `app/[locale]/layout.tsx`
4. Render before Footer

### Add New Language
1. Create `public/locales/xx.json` (xx = language code)
2. Update `app/lib/i18n.ts`:
```typescript
const translations: Record<Locale, typeof enTranslations> = {
  en: enTranslations,
  fr: frTranslations,
  xx: xxTranslations, // Add here
};
```
3. Update middleware.ts locales array

## 🐛 Troubleshooting

### Locale not changing
- Clear `.next/` folder and rebuild
- Check middleware.ts is at root level
- Verify locale in URL

### Components not rendering
- Check component import paths in `[locale]/layout.tsx`
- Verify all components are exported as default
- Check console for TypeScript errors

### Styles not applying
- Clear cache and rebuild
- Verify MUI theme is imported in layout
- Check CSS specificity in globals.css

## 📚 Dependencies

### Main
- `next`: 16.1.6
- `react`: 19.2.3
- `react-dom`: 19.2.3
- `@mui/material`: ^7.3.7
- `@mui/icons-material`: ^7.3.7
- `@emotion/react`: ^11.14.0
- `@emotion/styled`: ^11.14.1

### Dev
- `typescript`: ^5
- `eslint`: Latest
- `tailwindcss`: ^4

## 📄 License

© 2024 Amine Portfolio. All rights reserved.

## 🤝 Support

For issues or questions, please check:
1. The code comments
2. Console error messages
3. Browser DevTools Network tab
4. Next.js documentation

---

**Built with ❤️ using Next.js & Material-UI**
