# 🔄 Component Migration Examples - Before & After

This file shows complete **before and after** examples for updating components to use the new theme system.

---

## 📌 General Pattern

Every component follows the same pattern:

**BEFORE:**
```typescript
// ❌ Hardcoded colors
const backgroundColor = '#0d1b2a';  // Dark blue
const textColor = '#ffffff';         // White
```

**AFTER:**
```typescript
// ✅ Dynamic theme colors
const theme = useTheme();
const backgroundColor = theme.palette.background.default;
const textColor = theme.palette.text.primary;
```

---

## 1️⃣ About.tsx - BEFORE & AFTER

### ❌ BEFORE (Current Version)

```typescript
'use client';

import { Box, Container, Typography, Grid } from '@mui/material';

export default function About({ t }: Props) {
  return (
    <Box
      sx={{
        py: 8,
        background: 'linear-gradient(135deg, #0d1b2a 0%, #1a2332 100%)',
        color: '#ffffff',
        borderBottom: '1px solid #263238',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                mb: 2,
                p: 3,
                border: '1px solid #263238',
                borderRadius: 2,
                background: '#1a2332',
              }}
            >
              <Typography variant="h6" sx={{ color: '#42a5f5', mb: 2 }}>
                {t.about.subtitle}
              </Typography>
              <Typography sx={{ color: '#b0bec5' }}>
                {t.about.description}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
```

### ✅ AFTER (Theme-Aware Version)

```typescript
'use client';

import { Box, Container, Typography, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';  // ← ADD THIS

export default function About({ t }: Props) {
  const theme = useTheme();  // ← ADD THIS

  return (
    <Box
      sx={{
        py: 8,
        // ← REPLACE hardcoded gradient with theme colors
        background:
          theme.palette.mode === 'dark'
            ? 'linear-gradient(135deg, #0d1b2a 0%, #1a2332 100%)'
            : 'linear-gradient(135deg, #f5f5f5 0%, #fff 100%)',
        // ← REPLACE hardcoded color
        color: theme.palette.text.primary,
        // ← REPLACE hardcoded border
        borderBottom: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                mb: 2,
                p: 3,
                // ← REPLACE hardcoded border
                border: `1px solid ${theme.palette.divider}`,
                borderRadius: 2,
                // ← REPLACE hardcoded background
                backgroundColor: theme.palette.background.paper,
              }}
            >
              <Typography
                variant="h6"
                // ← REPLACE hardcoded color
                sx={{ color: theme.palette.primary.main, mb: 2 }}
              >
                {t.about.subtitle}
              </Typography>
              <Typography sx={{ color: theme.palette.text.secondary }}>
                {t.about.description}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
```

### Changes Summary
| Change | Before | After |
|--------|--------|-------|
| Gradient bg | `linear-gradient(135deg, #0d1b2a 0%...)` | `theme.palette.mode === 'dark' ? ... : ...` |
| Text color | `#ffffff` | `theme.palette.text.primary` |
| Border color | `#263238` | `theme.palette.divider` |
| Subtitle color | `#42a5f5` | `theme.palette.primary.main` |
| Box bg | `#1a2332` | `theme.palette.background.paper` |
| Secondary text | `#b0bec5` | `theme.palette.text.secondary` |

---

## 2️⃣ Education.tsx - BEFORE & AFTER

### ❌ BEFORE (Current Version)

```typescript
'use client';

import { Box, Card, CardContent, Typography, ChipProps } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';

export default function Education({ t }: Props) {
  return (
    <Box sx={{ py: 8, background: '#ffffff', color: '#212121' }}>
      {t.education.items.map((item, idx) => (
        <Card
          key={idx}
          sx={{
            mb: 3,
            borderLeft: '4px solid #1e88e5',
            background: '#f5f5f5',
            '&:hover': {
              boxShadow: '0 8px 24px rgba(30, 136, 229, 0.2)',
            },
          }}
        >
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <SchoolIcon sx={{ color: '#1e88e5', mr: 1 }} />
              <Typography variant="h6" sx={{ color: '#212121' }}>
                {item.school}
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: '#757575' }}>
              {item.duration}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
```

### ✅ AFTER (Theme-Aware Version)

```typescript
'use client';

import { Box, Card, CardContent, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';  // ← ADD THIS
import SchoolIcon from '@mui/icons-material/School';

export default function Education({ t }: Props) {
  const theme = useTheme();  // ← ADD THIS

  return (
    <Box
      sx={{
        py: 8,
        // ← REPLACE hardcoded colors
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
      }}
    >
      {t.education.items.map((item, idx) => (
        <Card
          key={idx}
          sx={{
            mb: 3,
            // ← REPLACE hardcoded border and background
            borderLeft: `4px solid ${theme.palette.primary.main}`,
            backgroundColor: theme.palette.background.paper,
            '&:hover': {
              // ← REPLACE hardcoded color in shadow
              boxShadow: `0 8px 24px ${theme.palette.primary.main}33`,
            },
          }}
        >
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              {/* ← REPLACE hardcoded icon color */}
              <SchoolIcon sx={{ color: theme.palette.primary.main, mr: 1 }} />
              {/* ← REPLACE hardcoded text color */}
              <Typography variant="h6" sx={{ color: theme.palette.text.primary }}>
                {item.school}
              </Typography>
            </Box>
            {/* ← REPLACE hardcoded secondary text color */}
            <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
              {item.duration}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
```

### Changes Summary
| Change | Before | After |
|--------|--------|-------|
| Main background | `#ffffff` | `theme.palette.background.default` |
| Main text | `#212121` | `theme.palette.text.primary` |
| Left border | `#1e88e5` | `theme.palette.primary.main` |
| Card bg | `#f5f5f5` | `theme.palette.background.paper` |
| Hover shadow | `rgba(30, 136, 229, 0.2)` | `${theme.palette.primary.main}33` |
| Icon color | `#1e88e5` | `theme.palette.primary.main` |
| Secondary text | `#757575` | `theme.palette.text.secondary` |

---

## 3️⃣ Skills.tsx - BEFORE & AFTER

### ❌ BEFORE (Current Version)

```typescript
'use client';

import { Box, Chip, Grid, Typography } from '@mui/material';

export default function Skills({ t }: Props) {
  return (
    <Box sx={{ py: 8, background: '#f5f5f5' }}>
      <Typography variant="h4" sx={{ mb: 4, color: '#212121' }}>
        {t.skills.title}
      </Typography>

      {t.skills.categories.map((category) => (
        <Box key={category.name} sx={{ mb: 4 }}>
          <Box
            sx={{
              p: 2,
              background: 'linear-gradient(135deg, #1e88e5 0%, #42a5f5 100%)',
              borderRadius: 1,
              mb: 2,
            }}
          >
            <Typography variant="h6" sx={{ color: '#ffffff' }}>
              {category.name}
            </Typography>
          </Box>
          <Grid container spacing={1}>
            {category.skills.map((skill) => (
              <Grid item key={skill}>
                <Chip
                  label={skill}
                  sx={{
                    background: '#1a2332',
                    color: '#b0bec5',
                    '&:hover': { background: '#0d1b2a' },
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Box>
  );
}
```

### ✅ AFTER (Theme-Aware Version)

```typescript
'use client';

import { Box, Chip, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';  // ← ADD THIS

export default function Skills({ t }: Props) {
  const theme = useTheme();  // ← ADD THIS

  return (
    <Box sx={{ py: 8, backgroundColor: theme.palette.background.default }}>
      <Typography
        variant="h4"
        sx={{ mb: 4, color: theme.palette.text.primary }}
      >
        {t.skills.title}
      </Typography>

      {t.skills.categories.map((category) => (
        <Box key={category.name} sx={{ mb: 4 }}>
          <Box
            sx={{
              p: 2,
              // ← REPLACE gradient with theme primary gradient
              background:
                theme.palette.mode === 'dark'
                  ? `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`
                  : `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
              borderRadius: 1,
              mb: 2,
            }}
          >
            {/* ← Use white text on colored background */}
            <Typography variant="h6" sx={{ color: '#ffffff' }}>
              {category.name}
            </Typography>
          </Box>
          <Grid container spacing={1}>
            {category.skills.map((skill) => (
              <Grid item key={skill}>
                <Chip
                  label={skill}
                  sx={{
                    // ← REPLACE hardcoded colors
                    backgroundColor: theme.palette.background.paper,
                    color: theme.palette.text.primary,
                    border: `1px solid ${theme.palette.divider}`,
                    '&:hover': {
                      backgroundColor: theme.palette.action.hover,
                    },
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Box>
  );
}
```

### Changes Summary
| Change | Before | After |
|--------|--------|-------|
| Main bg | `#f5f5f5` | `theme.palette.background.default` |
| Title color | `#212121` | `theme.palette.text.primary` |
| Category gradient | `#1e88e5 → #42a5f5` | `${theme.palette.primary.main} → ${theme.palette.primary.light}` |
| Chip bg | `#1a2332` | `theme.palette.background.paper` |
| Chip text | `#b0bec5` | `theme.palette.text.primary` |
| Chip border | (none) | `theme.palette.divider` |
| Chip hover | `#0d1b2a` | `theme.palette.action.hover` |

---

## 4️⃣ Projects.tsx - BEFORE & AFTER

### ❌ BEFORE (Current Version - Excerpt)

```typescript
<Card
  sx={{
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    borderTop: '3px solid #1e88e5',
    background: 'linear-gradient(135deg, #1a2332 0%, #263238 100%)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'translateY(-8px)',
      boxShadow: '0 12px 32px rgba(30, 136, 229, 0.3)',
    },
  }}
>
  <CardContent>
    <Typography variant="h6" sx={{ color: '#fff' }}>
      {project.title}
    </Typography>
    <Typography sx={{ color: '#b0bec5', my: 1 }}>
      {project.description}
    </Typography>
    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt: 2 }}>
      {project.techs.map((tech) => (
        <Chip
          key={tech}
          label={tech}
          size="small"
          sx={{
            background: '#1e88e5',
            color: '#fff',
          }}
        />
      ))}
    </Box>
  </CardContent>
</Card>
```

### ✅ AFTER (Theme-Aware Version)

```typescript
const theme = useTheme();  // ← ADD AT COMPONENT TOP

<Card
  sx={{
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    // ← REPLACE hardcoded top border
    borderTop: `3px solid ${theme.palette.primary.main}`,
    // ← REPLACE hardcoded gradient
    background:
      theme.palette.mode === 'dark'
        ? `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.divider} 100%)`
        : `linear-gradient(135deg, ${theme.palette.primary.light}15 0%, ${theme.palette.primary.main}10 100%)`,
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'translateY(-8px)',
      // ← REPLACE hardcoded shadow color
      boxShadow: `0 12px 32px ${theme.palette.primary.main}4d`,
    },
  }}
>
  <CardContent>
    {/* ← REPLACE hardcoded white */}
    <Typography variant="h6" sx={{ color: theme.palette.text.primary }}>
      {project.title}
    </Typography>
    {/* ← REPLACE hardcoded gray */}
    <Typography sx={{ color: theme.palette.text.secondary, my: 1 }}>
      {project.description}
    </Typography>
    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt: 2 }}>
      {project.techs.map((tech) => (
        <Chip
          key={tech}
          label={tech}
          size="small"
          sx={{
            // ← REPLACE hardcoded colors
            background: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
          }}
        />
      ))}
    </Box>
  </CardContent>
</Card>
```

### Changes Summary
| Change | Before | After |
|--------|--------|-------|
| Top border | `#1e88e5` | `theme.palette.primary.main` |
| Card gradient | `#1a2332 → #263238` | Dynamic based on mode |
| Hover shadow | `rgba(30, 136, 229, 0.3)` | `${theme.palette.primary.main}4d` |
| Title text | `#fff` | `theme.palette.text.primary` |
| Description | `#b0bec5` | `theme.palette.text.secondary` |
| Tech chip bg | `#1e88e5` | `theme.palette.primary.main` |
| Tech chip text | `#fff` | `theme.palette.primary.contrastText` |

---

## 5️⃣ Contact.tsx - BEFORE & AFTER

### ❌ BEFORE (Current Version - Excerpt)

```typescript
<Box
  sx={{
    p: 3,
    borderRadius: 2,
    background: '#1a2332',
    border: '1px solid #263238',
    mb: 2,
  }}
>
  <TextField
    fullWidth
    label={t.contact.name}
    variant="outlined"
    sx={{
      '& .MuiOutlinedInput-root': {
        color: '#b0bec5',
        '& fieldset': {
          borderColor: '#263238',
        },
      },
      '& .MuiInputBase-input::placeholder': {
        color: '#757575',
      },
    }}
  />
  <Button
    fullWidth
    variant="contained"
    sx={{
      background: '#1e88e5',
      color: '#fff',
      '&:hover': {
        background: '#1565c0',
      },
      mt: 2,
    }}
  >
    {t.contact.send}
  </Button>
</Box>
```

### ✅ AFTER (Theme-Aware Version)

```typescript
const theme = useTheme();  // ← ADD AT COMPONENT TOP

<Box
  sx={{
    p: 3,
    borderRadius: 2,
    // ← REPLACE hardcoded background and border
    backgroundColor: theme.palette.background.paper,
    border: `1px solid ${theme.palette.divider}`,
    mb: 2,
  }}
>
  <TextField
    fullWidth
    label={t.contact.name}
    variant="outlined"
    sx={{
      '& .MuiOutlinedInput-root': {
        // ← REPLACE hardcoded text color
        color: theme.palette.text.primary,
        '& fieldset': {
          // ← REPLACE hardcoded border color
          borderColor: theme.palette.divider,
        },
      },
      '& .MuiInputBase-input::placeholder': {
        // ← REPLACE hardcoded placeholder color
        color: theme.palette.text.secondary,
      },
    }}
  />
  <Button
    fullWidth
    variant="contained"
    sx={{
      // ← REPLACE hardcoded button colors
      background: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      '&:hover': {
        background: theme.palette.primary.dark,
      },
      mt: 2,
    }}
  >
    {t.contact.send}
  </Button>
</Box>
```

### Changes Summary
| Change | Before | After |
|--------|--------|-------|
| Card background | `#1a2332` | `theme.palette.background.paper` |
| Card border | `#263238` | `theme.palette.divider` |
| Input text | `#b0bec5` | `theme.palette.text.primary` |
| Input border | `#263238` | `theme.palette.divider` |
| Placeholder | `#757575` | `theme.palette.text.secondary` |
| Button bg | `#1e88e5` | `theme.palette.primary.main` |
| Button text | `#fff` | `theme.palette.primary.contrastText` |
| Button hover | `#1565c0` | `theme.palette.primary.dark` |

---

## 6️⃣ Footer.tsx - BEFORE & AFTER

### ❌ BEFORE (Current Version - Excerpt)

```typescript
<Box
  component="footer"
  sx={{
    py: 4,
    px: 2,
    background: 'linear-gradient(135deg, #0d1b2a 0%, #1a2332 100%)',
    borderTop: '1px solid #263238',
    color: '#b0bec5',
    textAlign: 'center',
    marginTop: 'auto',
  }}
>
  <Typography variant="body2" sx={{ mb: 2, color: '#b0bec5' }}>
    {t.footer.text}
  </Typography>
  <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
    <Link href="#" sx={{ color: '#1e88e5', '&:hover': { color: '#42a5f5' } }}>
      LinkedIn
    </Link>
  </Box>
</Box>
```

### ✅ AFTER (Theme-Aware Version)

```typescript
import { useTheme } from '@mui/material/styles';  // ← ADD

const theme = useTheme();  // ← ADD AT COMPONENT TOP

<Box
  component="footer"
  sx={{
    py: 4,
    px: 2,
    // ← REPLACE hardcoded gradient
    background:
      theme.palette.mode === 'dark'
        ? 'linear-gradient(135deg, #0d1b2a 0%, #1a2332 100%)'
        : 'linear-gradient(135deg, #f5f5f5 0%, #fff 100%)',
    // ← REPLACE hardcoded border
    borderTop: `1px solid ${theme.palette.divider}`,
    // ← REPLACE hardcoded text color
    color: theme.palette.text.secondary,
    textAlign: 'center',
    marginTop: 'auto',
  }}
>
  {/* ← REPLACE hardcoded color */}
  <Typography variant="body2" sx={{ mb: 2, color: theme.palette.text.secondary }}>
    {t.footer.text}
  </Typography>
  <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
    {/* ← REPLACE hardcoded link colors */}
    <Link
      href="#"
      sx={{
        color: theme.palette.primary.main,
        '&:hover': { color: theme.palette.primary.light },
      }}
    >
      LinkedIn
    </Link>
  </Box>
</Box>
```

### Changes Summary
| Change | Before | After |
|--------|--------|-------|
| Background gradient | `#0d1b2a → #1a2332` | Dynamic based on mode |
| Border top | `#263238` | `theme.palette.divider` |
| Main text | `#b0bec5` | `theme.palette.text.secondary` |
| Footer text | `#b0bec5` | `theme.palette.text.secondary` |
| Link color | `#1e88e5` | `theme.palette.primary.main` |
| Link hover | `#42a5f5` | `theme.palette.primary.light` |

---

## 📋 Master Checklist for Updates

### For Each Component:

- [ ] Add `import { useTheme } from '@mui/material/styles';` at top
- [ ] Add `const theme = useTheme();` inside component function
- [ ] Replace all background colors:
  - `#ffffff` → `theme.palette.background.default`
  - `#f5f5f5` → `theme.palette.background.default`
  - `#1a2332` → `theme.palette.background.paper`
  - `#0d1b2a` → Use dynamic gradient
- [ ] Replace all text colors:
  - `#212121` → `theme.palette.text.primary`
  - `#ffffff` → `theme.palette.text.primary`
  - `#b0bec5` → `theme.palette.text.secondary`
  - `#757575` → `theme.palette.text.secondary`
- [ ] Replace all borders:
  - `#263238` → `theme.palette.divider`
  - `#e0e0e0` → `theme.palette.divider`
- [ ] Replace all primary colors:
  - `#1e88e5` → `theme.palette.primary.main`
  - `#42a5f5` → `theme.palette.primary.light`
  - `#1565c0` → `theme.palette.primary.dark`
- [ ] Replace gradients with conditional mode check
- [ ] Update shadows with theme colors instead of hardcoded
- [ ] Test in light mode
- [ ] Test in dark mode
- [ ] Test hover/focus states in both modes
- [ ] Commit changes

---

## 🎯 Quick Copy-Paste Imports

**Add to every component top:**

```typescript
'use client';

import { useTheme } from '@mui/material/styles';
```

**Add inside component:**

```typescript
const theme = useTheme();
```

---

## ✅ Validation for Each Component

After updating, verify:
1. **Light Mode:** Background is light, text is dark
2. **Dark Mode:** Background is dark, text is light
3. **Colors:** Primary blue appears consistently
4. **Borders:** Gray dividers visible in both modes
5. **Hover States:** Visible and obvious in both modes
6. **Accessibility:** Good contrast in both modes
7. **Consistency:** Matches pattern from Hero.tsx

---

## 🚀 Implementation Order

Recommended update order (easiest to hardest):

1. **Footer.tsx** - Single background gradient + border (5 min)
2. **About.tsx** - Single gradient + borders + colors (8 min)
3. **Education.tsx** - Cards + borders + icons (10 min)
4. **Contact.tsx** - Form + buttons + inputs (12 min)
5. **Projects.tsx** - Cards + gradients + badges (15 min)
6. **Skills.tsx** - Grid + categories + chips (15 min)

**Total estimated time:** 60 minutes for all 6 components

---

**All examples follow the same pattern. Adapt as needed for your specific component structure!** ✨
