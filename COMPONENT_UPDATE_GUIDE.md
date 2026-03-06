# 🔄 Component Updating Guide

## How to Update Your Existing Components

This guide shows you how to update all components to use theme colors instead of hardcoded colors.

---

## Pattern: Before & After

### Pattern 1: Text Colors

**Before (Hardcoded):**
```typescript
import { Typography } from '@mui/material';

<Typography sx={{ color: '#212121' }}>
  Text
</Typography>
```

**After (Theme-based):**
```typescript
import { Typography, useTheme } from '@mui/material';

export default function MyComponent() {
  const theme = useTheme();

  return (
    <Typography sx={{ color: theme.palette.text.primary }}>
      Text
    </Typography>
  );
}
```

---

### Pattern 2: Background Colors

**Before:**
```typescript
sx={{
  backgroundColor: '#f5f5f5',
  padding: 2,
}}
```

**After:**
```typescript
const theme = useTheme();

sx={{
  backgroundColor: theme.palette.background.paper,
  padding: 2,
}}
```

---

### Pattern 3: Gradients

**Before:**
```typescript
sx={{
  background: 'linear-gradient(135deg, #ffffff 0%, #b0bec5 100%)',
}}
```

**After:**
```typescript
const theme = useTheme();

sx={{
  background: theme.palette.mode === 'dark'
    ? `linear-gradient(135deg, #ffffff 0%, #b0bec5 100%)`
    : `linear-gradient(135deg, #212121 0%, #666 100%)`,
}}
```

---

### Pattern 4: Border Colors

**Before:**
```typescript
sx={{
  border: '1px solid #e0e0e0',
}}
```

**After:**
```typescript
const theme = useTheme();

sx={{
  border: `1px solid ${theme.palette.divider}`,
}}
```

---

### Pattern 5: Box Shadow with Colors

**Before:**
```typescript
sx={{
  boxShadow: '0 8px 32px rgba(30, 136, 229, 0.2)',
}}
```

**After:**
```typescript
const theme = useTheme();

sx={{
  boxShadow: `0 8px 32px ${theme.palette.primary.main}33`, // 33 = 20% opacity in hex
}}
```

---

## Component-by-Component: Update Instructions

### About.tsx

**Current hardcoded colors:**
- Background: linear-gradient (hardcoded)
- Border: hardcoded color

**Changes needed:**
```typescript
// ADD this import
import { useTheme } from '@mui/material';

// ADD this inside component
const theme = useTheme();

// REPLACE background
sx={{
  background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 100%)`,
  border: `1px solid ${theme.palette.divider}`,
}}
```

---

### Education.tsx

**Changes needed:**
```typescript
import { useTheme } from '@mui/material';

const theme = useTheme();

// Replace CardContent background
sx={{
  background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 100%)`,
  border: `1px solid ${theme.palette.divider}`,
}}

// Replace icon color
sx={{ color: theme.palette.primary.main }}
```

---

### Skills.tsx

**Changes needed:**
```typescript
import { useTheme } from '@mui/material';

const theme = useTheme();

// For skill category boxes
sx={{
  background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 100%)`,
  border: `1px solid ${theme.palette.divider}`,
}}

// For skill chips
sx={{
  background: `linear-gradient(135deg, ${theme.palette.primary.main}20 0%, ${theme.palette.primary.light}20 100%)`,
  border: `1px solid ${theme.palette.primary.main}80`,
}}
```

---

### Projects.tsx

**Changes needed:**
```typescript
import { useTheme } from '@mui/material';

const theme = useTheme();

// For project cards
sx={{
  background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 100%)`,
  border: `1px solid ${theme.palette.divider}`,
  
  // For top border accent
  '&::before': {
    background: theme.palette.primary.main,
  }
}}

// For tech badge text
sx={{
  color: theme.palette.secondary.main,
}}
```

---

### Contact.tsx

**Changes needed:**
```typescript
import { useTheme } from '@mui/material';

const theme = useTheme();

// For contact card
sx={{
  background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 100%)`,
  border: `1px solid ${theme.palette.divider}`,
}}

// For button hover
sx={{
  backgroundColor: theme.palette.mode === 'dark'
    ? 'rgba(30, 136, 229, 0.1)'
    : 'rgba(30, 136, 229, 0.05)',
}}

// For icon color in buttons
sx={{
  color: theme.palette.primary.main,
}}
```

---

### Footer.tsx

**Changes needed:**
```typescript
import { useTheme } from '@mui/material';

const theme = useTheme();

// For footer background
sx={{
  background: `linear-gradient(180deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 100%)`,
  borderTop: `1px solid ${theme.palette.divider}`,
}}
```

---

## Opacity Values Reference

When you need to add transparency to colors:

```
Hex Opacity Values:
100% = FF
90%  = E6
80%  = CC
70%  = B3
60%  = 99
50%  = 80
40%  = 66
30%  = 4D
20%  = 33
10%  = 1A
5%   = 0D
```

**Example:**
```typescript
// 20% opacity blue
`${theme.palette.primary.main}33`  // #1e88e533

// 50% opacity
`${theme.palette.primary.main}80`  // #1e88e580
```

---

## Quick Update Template

Copy this template for each component:

```typescript
'use client';

import { Box, Container, Typography, Stack, useTheme } from '@mui/material';

interface ComponentProps {
  t: any;
}

export default function MyComponent({ t }: ComponentProps) {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        py: 12,
        background: theme.palette.mode === 'dark'
          ? `linear-gradient(180deg, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 100%)`
          : `linear-gradient(180deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 100%)`,
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{
            color: theme.palette.primary.main,
            fontWeight: 700,
          }}
        >
          {t.section.title}
        </Typography>
      </Container>
    </Box>
  );
}
```

---

## Testing After Updates

1. **Run dev server:**
   ```bash
   npm run dev
   ```

2. **Test both themes:**
   - Visit `/en` and `/fr`
   - Click theme toggle
   - Verify colors look good

3. **Check contrast:**
   - Text should be readable
   - Buttons should stand out
   - Borders visible

4. **Verify consistency:**
   - All components use theme colors
   - No hardcoded colors visible
   - Smooth transitions between modes

---

## Checklist: Components to Update

- [ ] About.tsx
- [ ] Education.tsx
- [ ] Skills.tsx
- [ ] Projects.tsx
- [ ] Contact.tsx
- [ ] Footer.tsx

---

## Tips for Efficient Updating

1. **Update one component at a time**
2. **Test after each update**
3. **Use Find & Replace for repeated patterns**
4. **Compare light and dark preview side-by-side**
5. **Keep a backup of original files** (Git does this!)

---

## Color Mapping Quick Reference

| Use Case | Theme Key |
|----------|-----------|
| Main text | `text.primary` |
| Secondary text | `text.secondary` |
| Page background | `background.default` |
| Card background | `background.paper` |
| Dividing lines | `divider` |
| Brand color | `primary.main` |
| Disabled/muted | `text.secondary` |
| Accent color | `secondary.main` |
| Error messages | `error.main` |
| Success states | `success.main` |
| Warnings | `warning.main` |

---

## Common Patterns to Replace

### Hardcoded Dark Colors:
- `#0d1b2a` → `theme.palette.background.default`
- `#1a2332` → `theme.palette.background.paper`
- `#263238` → `theme.palette.divider`
- `#ffffff` (in dark mode) → `theme.palette.text.primary`

### Hardcoded Light Colors:
- `#f5f5f5` → `theme.palette.background.default`
- `#ffffff` (in light mode) → `theme.palette.background.paper`
- `#e0e0e0` → `theme.palette.divider`
- `#212121` → `theme.palette.text.primary`

### Blue Colors:
- `#1e88e5` → `theme.palette.primary.main`
- `#42a5f5` → `theme.palette.primary.light`
- `#1565c0` → `theme.palette.primary.dark`

### Yellow Colors:
- `#ffd54f` → `theme.palette.secondary.main`
- `#ffeb99` → `theme.palette.secondary.light`
- `#fbc02d` → `theme.palette.secondary.dark`

---

## Preserve Original Functionality

When updating, make sure to:

✅ Keep the same CSS structure
✅ Preserve hover states
✅ Maintain transitions
✅ Keep media queries
✅ Preserve accessibility features

---

## Build & Deploy

After updating all components:

```bash
# Test locally
npm run dev

# Build for production
npm run build

# Check for errors
npm start
```

---

**Your components are now theme-aware and will elegantly adapt to light and dark modes! 🎨**
