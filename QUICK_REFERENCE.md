# Portfolio Setup - Quick Reference

## 📋 File Checklist

### Core Files
- ✅ `app/layout.tsx` - Root layout with metadata
- ✅ `app/[locale]/layout.tsx` - Locale layout with theme provider
- ✅ `app/[locale]/page.tsx` - Main page (renders all sections)
- ✅ `app/globals.css` - Global styles
- ✅ `middleware.ts` - Locale routing

### Components
- ✅ `app/components/Navbar.tsx`
- ✅ `app/components/Hero.tsx`
- ✅ `app/components/About.tsx`
- ✅ `app/components/Education.tsx`
- ✅ `app/components/Skills.tsx`
- ✅ `app/components/Projects.tsx`
- ✅ `app/components/Contact.tsx`
- ✅ `app/components/Footer.tsx`

### Configuration & Utils
- ✅ `app/lib/i18n.ts` - i18n utilities
- ✅ `app/lib/theme.ts` - MUI theme
- ✅ `app/types/index.ts` - TypeScript types
- ✅ `public/locales/en.json` - English translations
- ✅ `public/locales/fr.json` - French translations

## 🎯 URL Structure

```
/                → Redirects to /en (middleware)
/en              → English version
/en/             → English version (same)
/fr              → French version
/fr/             → French version (same)
```

## 🎨 Color Scheme

### Primary Blue
- Main: `#1e88e5`
- Light: `#42a5f5`
- Dark: `#1565c0`

### Secondary Yellow
- Main: `#ffd54f`
- Light: `#ffeb99`
- Dark: `#fbc02d`

### Backgrounds
- Default: `#0d1b2a` (very dark blue)
- Paper: `#1a2332` (dark blue-gray)
- Divider: `#263238` (lighter blue-gray)

## 📝 Translation Keys

### Nav
- `nav.about`
- `nav.education`
- `nav.skills`
- `nav.projects`
- `nav.contact`
- `nav.language`

### Hero
- `hero.greeting`
- `hero.title`
- `hero.description`
- `hero.cta`

### About
- `about.title`
- `about.description`

### Education
- `education.title`
- `education.degree`
- `education.university`
- `education.year`
- `education.summary`

### Skills
- `skills.title`
- `skills.frontend`
- `skills.backend`
- `skills.tools`
- `skills.languages` (array)
- `skills.backendItems` (array)
- `skills.toolsItems` (array)

### Projects
- `projects.title`
- `projects.project1.name`
- `projects.project1.description`
- `projects.project1.tech`
- `projects.project2.*` (same structure)
- `projects.project3.*` (same structure)

### Contact
- `contact.title`
- `contact.description`
- `contact.name`
- `contact.email`
- `contact.phone`
- `contact.linkedin`
- `contact.github`
- `contact.twitter`

### Footer
- `footer.copyright`
- `footer.credit`

## 🚀 Quick Commands

```bash
# Development
npm run dev

# Build
npm run build

# Production
npm start

# Linting
npm run lint
```

## 💡 Component Usage Example

```typescript
// In a client component:
'use client';

interface MyComponentProps {
  t: any; // Translation object
}

export default function MyComponent({ t }: MyComponentProps) {
  return <h1>{t.about.title}</h1>;
}
```

## 🌐 Adding a New Language

1. Create `public/locales/xx.json` (replace xx with language code)
2. Copy structure from `en.json`
3. Translate all values
4. Update `app/lib/i18n.ts`:
   ```typescript
   import xxTranslations from '@/public/locales/xx.json';
   
   const translations: Record<Locale, typeof enTranslations> = {
     en: enTranslations,
     fr: frTranslations,
     xx: xxTranslations,
   };
   
   export type Locale = 'en' | 'fr' | 'xx'; // Add here
   ```
5. Update `middleware.ts`:
   ```typescript
   const locales = ['en', 'fr', 'xx'];
   ```

## 📱 Responsive Breakpoints

- Mobile (xs): < 600px
- Tablet (sm): 600px - 959px
- Desktop (md): 960px - 1279px
- Large (lg): 1280px - 1919px
- XL (xl): >= 1920px

## 🔒 Type Safety

All components have TypeScript support with:
- `Translation` type for translations
- `NavbarProps`, `ComponentProps` for component props
- `LocaleLayoutProps` for layout props
- Strict mode enabled

## 🎯 SEO Tags

Meta tags are set in `app/layout.tsx`:
- Title
- Description
- Keywords
- Author
- Open Graph
- Twitter Card

Update these for your specific portfolio.

## 🛠️ Common Customizations

### Change Logo Text
In `app/components/Navbar.tsx`, line ~58:
```typescript
A.Dev  →  Your.Name
```

### Change Primary Color
In `app/lib/theme.ts`, update:
```typescript
primary: {
  main: '#YOUR_COLOR',
  light: '#YOUR_LIGHT',
  dark: '#YOUR_DARK',
}
```

### Add Social Media Links
In `public/locales/en.json` and `fr.json`, update contact section and add href in `app/components/Contact.tsx`

### Modify Project Count
In `public/locales/en.json`, add `project4`, `project5`, etc., then update `app/components/Projects.tsx` to loop through them

## 📊 Performance Tips

1. **Images**: Use Next.js Image component when adding images
2. **Fonts**: Currently using system fonts - add via `next/font` if custom
3. **Stylesheets**: Use CSS modules or styled components for scoped styles
4. **Analytics**: Add via external script in layout if needed

## 🐛 Common Issues

### Locale not in URL after build
- Clear `.next` folder
- Rebuild: `npm run build`

### Flash of wrong theme
- The layout applies theme immediately
- Ensure no conflicting global styles

### Translations not working
- Check JSON syntax in translation files
- Verify keys match exactly (case-sensitive)
- Check component is receiving `t` prop

---

## 📞 Next Steps

1. ✅ Replace placeholder content in translation files
2. ✅ Update socail media links in Contact component
3. ✅ Customize colors in theme.ts if desired
4. ✅ Add personal projects in translations
5. ✅ Deploy to Vercel or your hosting
6. ✅ Configure custom domain
7. ✅ Set up analytics (optional)

---

**Happy building! 🚀**
