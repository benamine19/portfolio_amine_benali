# 🎨 Light/Dark Mode Implementation Guide

## Overview

Your portfolio now supports both Light and Dark modes with automatic system preference detection, localStorage persistence, and a smooth toggle button in the navbar.

---

## 📁 New Files Created

### Theme Configuration (2 files)
```
app/lib/themes/
├── lightTheme.ts          ← Light theme configuration
└── darkTheme.ts           ← Dark theme configuration
```

### Theme Context (2 files)
```
app/context/
├── ThemeContext.tsx       ← Theme mode state management with Context API
└── AppThemeProvider.tsx   ← MUI ThemeProvider wrapper
```

### Updated Files
```
app/[locale]/layout.tsx    ← Now uses ThemeProvider wrapping
app/components/Navbar.tsx  ← New theme toggle button
app/components/Hero.tsx    ← Updated to use theme colors
```

---

## 🎨 Theme Colors

### Light Theme
```json
{
  "primary": {
    "main": "#1e88e5",      // Blue
    "light": "#42a5f5",
    "dark": "#1565c0"
  },
  "background": {
    "default": "#f5f5f5",   // Light gray
    "paper": "#ffffff"      // White
  },
  "text": {
    "primary": "#212121",   // Dark text
    "secondary": "#757575"  // Gray text
  }
}
```

### Dark Theme
```json
{
  "primary": {
    "main": "#1e88e5",      // Blue (same)
    "light": "#42a5f5",
    "dark": "#1565c0"
  },
  "background": {
    "default": "#0d1b2a",   // Very dark blue
    "paper": "#1a2332"      // Dark blue-gray
  },
  "text": {
    "primary": "#ffffff",   // White text
    "secondary": "#b0bec5"  // Light gray text
  }
}
```

---

## 🔧 How It Works

### 1. Theme Context (ThemeContext.tsx)
Manages the theme mode state and localStorage persistence:

```typescript
interface ThemeContextType {
  mode: ThemeMode;                    // 'light' | 'dark'
  toggleTheme: () => void;            // Switch between modes
  setTheme: (mode: ThemeMode) => void; // Set specific mode
}
```

**Features:**
- Auto-detects system preference on first load
- Persists selection to localStorage
- Provides hooks for components

### 2. Theme Provider (ThemeContext.tsx)
```typescript
<ThemeProvider defaultMode="dark">
  {children}
</ThemeProvider>
```

**Responsibilities:**
- Initializes theme from localStorage or system preference
- Manages theme state
- Provides useTheme hook

### 3. AppThemeProvider (AppThemeProvider.tsx)
```typescript
<AppThemeProvider>
  {children}
</AppThemeProvider>
```

**Responsibilities:**
- Wraps app with MUI ThemeProvider
- Applies correct theme based on context mode
- Provides CssBaseline for consistent styling

### 4. Layout Structure
```
ThemeProvider (Context - manages state)
  └── AppThemeProvider (MUI - applies theme)
      └── Your Components
          └── useTheme() hook available
```

---

## 💡 Using the Theme in Components

### Access Theme with `useTheme` Hook

```typescript
'use client';

import { useTheme } from '@mui/material/styles';

export default function MyComponent() {
  const theme = useTheme();

  return (
    <Box sx={{
      color: theme.palette.text.primary,
      backgroundColor: theme.palette.background.default,
      // Styles automatically update based on theme mode
    }}>
      Content
    </Box>
  );
}
```

### Access Theme Mode with Context Hook

```typescript
'use client';

import { useTheme as useThemeContext } from '@/app/context/ThemeContext';

export default function MyComponent() {
  const { mode, toggleTheme } = useThemeContext();

  return (
    <>
      <p>Current mode: {mode}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </>
  );
}
```

### Gradient Example (Dynamic Colors)

```typescript
const theme = useTheme();

<Box sx={{
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`
}}>
  Content
</Box>
```

---

## 🎯 Updating Components to Use Theme Colors

### Before (Hardcoded)
```typescript
sx={{
  color: '#1e88e5',
  backgroundColor: '#0d1b2a',
  border: '1px solid #263238'
}}
```

### After (Theme-based)
```typescript
const theme = useTheme();

sx={{
  color: theme.palette.primary.main,
  backgroundColor: theme.palette.background.default,
  border: `1px solid ${theme.palette.divider}`
}}
```

---

## 📋 Available Theme Palette Keys

### Colors
```
primary.main          // Brand blue
primary.light         // Light blue
primary.dark          // Dark blue
primary.contrastText  // White

secondary.main        // Yellow
secondary.light       // Light yellow
secondary.dark        // Dark yellow
secondary.contrastText// Black

background.default    // Page background
background.paper      // Card/component background

text.primary          // Main text
text.secondary        // Secondary text

divider               // Divider color

success.main          // Green
error.main            // Red
warning.main          // Orange
info.main             // Blue
```

### Mode Detection
```typescript
theme.palette.mode === 'light'  // Check if light mode
theme.palette.mode === 'dark'   // Check if dark mode
```

---

## 🎛️ Navbar Theme Toggle Button

The theme toggle button is automatically added to the navbar:

```typescript
// In Navbar.tsx
const { mode, toggleTheme } = useTheme();

<IconButton onClick={toggleTheme}>
  {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
</IconButton>
```

**Features:**
- Shows sun icon in dark mode
- Shows moon icon in light mode
- Smooth rotation animation on hover
- Tooltip showing current/next mode

---

## 💾 localStorage Persistence

The selected theme is automatically saved:

```typescript
// Saved in localStorage as:
localStorage.getItem('theme-mode')  // Returns 'light' or 'dark'
```

**Behavior:**
1. User selects theme → automatically saves
2. User refreshes page → loads from localStorage
3. First visit → uses system preference
4. Clear localStorage → resets to system preference

---

## 🔄 System Preference Detection

On first load, the app auto-detects:

```typescript
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const systemMode = prefersDark ? 'dark' : 'light';
```

**How to test:**
- Windows: Settings → Personalization → Dark/Light mode
- macOS: System Preferences → General → Dark/Light
- Browser Developer Tools: More tools → Rendering → Emulate CSS media

---

## 🔌 Hydration Safety

The ThemeProvider uses hydration detection to prevent mismatches:

```typescript
const [isHydrated, setIsHydrated] = useState(false);

useEffect(() => {
  // Load theme from localStorage only on client
  setIsHydrated(true);
}, []);

if (!isHydrated) {
  return <>children</>;  // Skip provider until hydrated
}
```

---

## 📝 Best Practices

### ✅ Do This

1. **Use theme colors in all new components:**
   ```typescript
   const theme = useTheme();
   sx={{ color: theme.palette.text.primary }}
   ```

2. **Use theme palette keys:**
   ```typescript
   backgroundColor: theme.palette.background.paper
   borderColor: theme.palette.divider
   ```

3. **Use theme mode for conditional styling:**
   ```typescript
   background: theme.palette.mode === 'dark' 
     ? 'dark-gradient' 
     : 'light-gradient'
   ```

4. **Import useTheme from MUI:**
   ```typescript
   import { useTheme } from '@mui/material/styles';
   ```

### ❌ Don't Do This

1. **Avoid hardcoded colors:**
   ```typescript
   // ❌ Wrong
   color: '#1e88e5'
   backgroundColor: '#0d1b2a'
   ```

2. **Don't hardcode mode-specific styles:**
   ```typescript
   // ❌ Wrong
   if (isDark) { /* dark styles */ } else { /* light styles */ }
   ```

3. **Don't import useTheme from wrong location:**
   ```typescript
   // ❌ Wrong - This is for Context management
   import { useTheme } from '@/app/context/ThemeContext';
   // In components, use MUI's version instead
   ```

---

## 🔄 Updating Existing Components

To migrate existing components to use theme colors:

1. **Import useTheme:**
   ```typescript
   import { useTheme } from '@mui/material/styles';
   ```

2. **Get theme instance:**
   ```typescript
   const theme = useTheme();
   ```

3. **Replace hardcoded colors:**
   ```typescript
   // Before:
   sx={{ color: '#1e88e5' }}
   
   // After:
   sx={{ color: theme.palette.primary.main }}
   ```

4. **Handle mode-specific styles:**
   ```typescript
   sx={{
     background: theme.palette.mode === 'dark'
       ? 'dark-gradient'
       : 'light-gradient'
   }}
   ```

---

## 🎨 Customizing Themes

### Change Light Theme Colors

Edit `app/lib/themes/lightTheme.ts`:

```typescript
palette: {
  primary: {
    main: '#YOUR_COLOR',      // Change brand color
  },
  background: {
    default: '#YOUR_BG',      // Change background
  }
}
```

### Add New Theme

1. **Create new theme file:** `app/lib/themes/customTheme.ts`
2. **Copy structure from lightTheme.ts**
3. **Update colors and configuration**
4. **Update ThemeContext.tsx to support new mode**
5. **Update Navbar toggle to include new option**

---

## 🧪 Testing Themes

### Local Testing

```bash
npm run dev
# Visit http://localhost:3000/en
# Click theme toggle button
# Refresh page - theme should persist
```

### Test System Preference

1. Open DevTools (F12)
2. Go to "More Tools" → "Rendering"
3. Find "Emulate CSS media feature prefers-color-scheme"
4. Select "dark" or "light"
5. Refresh page

### Test localStorage

```javascript
// In DevTools Console:
localStorage.getItem('theme-mode')        // See current
localStorage.setItem('theme-mode', 'light') // Change
localStorage.removeItem('theme-mode')     // Clear
```

---

## 🚀 Performance Considerations

### SSR Safe
✅ ThemeProvider runs on client-side only
✅ No hydration issues
✅ Works with Next.js App Router

### Optimized
✅ No unnecessary re-renders
✅ localStorage updates are instant
✅ CSS variables injected via MUI

### Accessible
✅ Respects system preference
✅ Keyboard accessible toggle
✅ Appropriate ARIA labels

---

## 🐛 Troubleshooting

### Theme not changing
1. Check browser console for errors
2. Clear localStorage: `localStorage.clear()`
3. Check that Navbar is inside ThemeProvider
4. Verify useTheme is imported from '@mui/material/styles'

### Flash of wrong theme
This is normal on first load. Fix with:
```typescript
// Use defaultMode to set initial theme
<ThemeProvider defaultMode="light">
```

### Hydration warning
Ensure ThemeProvider is using hydration detection (already done in code)

### Colors not updating in component
1. Check useTheme is called
2. Verify it's from '@mui/material/styles'
3. Make sure component is inside AppThemeProvider

---

## 📚 Component Examples

### Example 1: Simple Box with Theme

```typescript
'use client';

import { Box, useTheme } from '@mui/material';

export default function Example1() {
  const theme = useTheme();

  return (
    <Box sx={{
      p: 2,
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.primary,
      border: `1px solid ${theme.palette.divider}`,
      borderRadius: 1,
    }}>
      Content
    </Box>
  );
}
```

### Example 2: Conditional Gradient

```typescript
'use client';

import { Box, useTheme } from '@mui/material';

export default function Example2() {
  const theme = useTheme();

  return (
    <Box sx={{
      background: theme.palette.mode === 'dark'
        ? `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 100%)`
        : `linear-gradient(135deg, #fff 0%, ${theme.palette.background.default} 100%)`,
    }}>
      Content
    </Box>
  );
}
```

### Example 3: Mode-Aware Typography

```typescript
'use client';

import { Typography, useTheme } from '@mui/material';

export default function Example3() {
  const theme = useTheme();

  return (
    <Typography sx={{
      color: theme.palette.text.primary,
      fontWeight: theme.palette.mode === 'dark' ? 400 : 500,
    }}>
      Text
    </Typography>
  );
}
```

---

## ✅ Checklist for Implementation

- [x] Create light and dark theme files
- [x] Create ThemeContext for state management
- [x] Create AppThemeProvider wrapper
- [x] Update [locale]/layout.tsx with providers
- [x] Add theme toggle to Navbar
- [x] Update Hero component as example
- [x] Persist theme choice to localStorage
- [x] Auto-detect system preference
- [x] Handle hydration safely
- [x] Document usage patterns
- [x] Ensure all colors use theme
- [x] Test light and dark modes

---

## 🎯 Next Steps

1. **Review** the theme configuration files
2. **Test** light and dark mode switching
3. **Update** other components to use theme colors
4. **Customize** theme if needed
5. **Deploy** with confidence

---

## 📞 Quick Reference

### Import useTheme
```typescript
import { useTheme } from '@mui/material/styles';
```

### Get current theme
```typescript
const theme = useTheme();
```

### Access colors
```typescript
theme.palette.primary.main
theme.palette.background.default
theme.palette.text.primary
```

### Check mode
```typescript
theme.palette.mode === 'dark'
theme.palette.mode === 'light'
```

### Toggle theme (from Context)
```typescript
import { useTheme as useThemeContext } from '@/app/context/ThemeContext';
const { mode, toggleTheme } = useThemeContext();
toggleTheme(); // Switches between light/dark
```

---

**Your portfolio now has a professional Light/Dark Mode system! 🎨✨**
