# ScooterCoop 2026 Redesign Plan - Cyberpunk Edition

## Executive Summary

This comprehensive redesign transforms the ScooterCoop website from a luxury/gold aesthetic to a **dark cyberpunk with subtle neon touches** theme, incorporating React Three Fiber for 3D animations and modern reactive components using React integration with Astro.

## Current State Analysis

### Dependencies
- **Astro**: ^5.13.8
- **Tailwind CSS**: ^3.4.1
- **Boxicons**: External CDN
- **AOS**: External CDN (to be replaced)
- **Fonts**: Inter, Playfair Display

### Current Pages
- index.astro (homepage)
- contacto.astro (contact)
- galeria.astro (gallery)
- precios.astro (pricing)
- servicios.astro (services)
- ubicacion.astro (location)
- 404.astro, gracias.astro

### Current Design Issues
1. Uses gradients (to be removed per requirement)
2. Gold/luxury color scheme needs to transition to cyberpunk
3. AOS animations need to be replaced with more advanced animations
4. Static Astro components need to become reactive React components

---

## Phase 1: Dependencies & Configuration

### 1.1 New Dependencies

```json
{
  "dependencies": {
    "@astrojs/react": "^4.2.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "three": "^0.170.0",
    "@react-three/fiber": "^8.17.10",
    "@react-three/drei": "^9.117.0",
    "framer-motion": "^11.15.0",
    "clsx": "^2.1.1",
    "tailwind-merge": "^2.6.0"
  }
}
```

### 1.2 Updated astro.config.mjs

Add React integration:
```javascript
import react from '@astrojs/react';

export default defineConfig({
  integrations: [
    tailwind(),
    react()
  ],
});
```

---

## Phase 2: Design System

### 2.1 Color Palette (Dark Cyberpunk)

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| void-black | #030303 | Primary background |
| obsidian | #0A0A0A | Secondary background |
| carbon | #141414 | Card backgrounds |
| graphite | #1F1F1F | Surface elements |
| steel | #2D2D2D | Borders, dividers |
| silver | #8A8A8A | Body text |
| white-silver | #E5E5E5 | Headings |
| neon-cyan | #00F0FF | Primary accent |
| neon-magenta | #FF00FF | Secondary accent |
| electric-blue | #0066FF | Tertiary accent |
| neon-green | #00FF88 | Success states |

### 2.2 Typography

- **Headings**: JetBrains Mono (monospace, cyberpunk feel)
- **Body**: Space Grotesk (modern, readable)
- **Accents**: Orbitron (futuristic display font)

```css
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&family=Orbitron:wght@400;500;600;700;800&display=swap');
```

### 2.3 Design Tokens

```javascript
// tailwind.config.mjs additions
{
  colors: {
    // Solid dark backgrounds (no gradients)
    void: '#030303',
    obsidian: '#0A0A0A',
    carbon: '#141414',
    graphite: '#1F1F1F',
    steel: '#2D2D2D',
    
    // Text colors
    silver: '#8A8A8A',
    'white-silver': '#E5E5E5',
    
    // Cyberpunk neon accents
    cyan: '#00F0FF',
    magenta: '#FF00FF',
    'electric-blue': '#0066FF',
    'neon-green': '#00FF88',
  },
  
  fontFamily: {
    mono: ['JetBrains Mono', 'monospace'],
    sans: ['Space Grotesk', 'sans-serif'],
    display: ['Orbitron', 'sans-serif'],
  },
  
  boxShadow: {
    'neon-cyan': '0 0 20px rgba(0, 240, 255, 0.3)',
    'neon-magenta': '0 0 20px rgba(255, 0, 255, 0.3)',
    'neon-green': '0 0 20px rgba(0, 255, 136, 0.3)',
  }
}
```

---

## Phase 3: Component Architecture

### 3.1 React Components Structure

```
src/components/
├── ui/
│   ├── Button.jsx          # Cyberpunk styled buttons
│   ├── Card.jsx           # Reusable card component
│   ├── Badge.jsx          # Neon badge components
│   └── Input.jsx          # Form inputs
├── three/
│   ├── HeroScene.jsx      # 3D R3F hero animation
│   ├── ParticleField.jsx # Background particles
│   ├── ScooterModel.jsx   # 3D scooter model
│   └── CyberGrid.jsx      # 3D grid floor
└── layout/
    ├── Navbar.jsx         # Reactive navigation
    └── Footer.jsx         # Reactive footer
```

### 3.2 Animation Strategy

1. **Framer Motion** for:
   - Page transitions
   - Scroll-triggered animations
   - Interactive hover states
   - Modal animations

2. **React Three Fiber** for:
   - Hero section 3D background
   - Floating 3D elements
   - Interactive 3D scooter visualization
   - Animated cyber grid

3. **CSS Animations** for:
   - Subtle glow effects
   - Neon pulse animations
   - Scan line effects

---

## Phase 4: File Changes

### 4.1 New Files to Create

| File | Purpose |
|------|---------|
| `src/components/ui/Button.jsx` | Cyberpunk button with neon glow |
| `src/components/ui/Card.jsx` | Glassmorphism card with neon borders |
| `src/components/ui/Input.jsx` | Form input with cyber styling |
| `src/components/three/HeroScene.jsx` | R3F 3D hero animation |
| `src/components/three/ParticleField.jsx` | Animated particles |
| `src/components/three/CyberGrid.jsx` | 3D grid floor |
| `src/components/Navbar.jsx` | React navigation |
| `src/components/Footer.jsx` | React footer |
| `src/styles/global.css` | Updated global styles |

### 4.2 Files to Modify

| File | Changes |
|------|---------|
| `package.json` | Add React, R3F, Framer Motion |
| `astro.config.mjs` | Add React integration |
| `tailwind.config.mjs` | New cyberpunk colors/fonts |
| `src/layouts/Layout.astro` | Update to new design system |
| `src/pages/index.astro` | Add 3D hero, update styling |
| `src/pages/contacto.astro` | Update form, styling |
| `src/pages/galeria.astro` | Update gallery, styling |
| `src/pages/precios.astro` | Update pricing cards |
| `src/pages/servicios.astro` | Update services section |
| `src/pages/ubicacion.astro` | Update map section |

---

## Phase 5: Implementation Plan

### Step 1: Install Dependencies
```
npm install @astrojs/react react react-dom three @react-three/fiber @react-three/drei framer-motion clsx tailwind-merge
```

### Step 2: Configure Tailwind
- Update tailwind.config.mjs with cyberpunk colors
- Add new font families
- Remove gradient utilities

### Step 3: Create UI Components
- Button with neon glow effect
- Card with border glow
- Input with focus animations

### Step 4: Build 3D Components
- Create HeroScene with R3F
- Add ParticleField for ambient effect
- Implement CyberGrid floor

### Step 5: Update Layout
- Replace static header/footer with React components
- Update global styles
- Add new font imports

### Step 6: Update Pages
- index.astro: Hero 3D + sections
- All other pages: New styling

---

## Key Features

### 1. Dark Solid Colors
- No gradients anywhere
- Pure solid backgrounds
- Subtle opacity layers

### 2. Cyberpunk Aesthetic
- Neon accent colors
- Monospace fonts
- Grid patterns
- Glow effects

### 3. 3D Animations (R3F)
- Interactive 3D hero scene
- Floating particles
- Animated grid floor
- Smooth camera movements

### 4. Reactive Components
- React-powered navigation
- Interactive forms
- Animated cards
- Real-time state

### 5. Modern Design
- Mobile-first approach
- Accessibility optimized
- Performance focused
- Clean code architecture

---

## Visual Preview

### Homepage Hero Section

- [3D Scene with particles & grid]
- SCOOTER COOP (Orbitron font)
- Explore the Malecón with futuristic style
- [Rent Now] [Services]
- [scroll indicator with neon glow]

### Color Application
- Background: void-black (#030303)
- Cards: carbon (#141414) with steel (#2D2D2D) borders
- Primary accent: cyan (#00F0FF)
- Secondary accent: magenta (#FF00FF)
- Text: silver (#8A8A8A) body, white-silver (#E5E5E5) headings

---

## Implementation Steps (Todo List)

- [ ] Step 1: Install dependencies (React, R3F, Framer Motion)
- [ ] Step 2: Configure Tailwind with cyberpunk colors/fonts
- [ ] Step 3: Create UI components (Button, Card, Input)
- [ ] Step 4: Build 3D components (HeroScene, ParticleField, CyberGrid)
- [ ] Step 5: Create layout components (Navbar, Footer)
- [ ] Step 6: Update Layout.astro with new design system
- [ ] Step 7: Update index.astro with 3D hero and styling
- [ ] Step 8: Update contacto.astro
- [ ] Step 9: Update galeria.astro
- [ ] Step 10: Update precios.astro
- [ ] Step 11: Update servicios.astro
- [ ] Step 12: Update ubicacion.astro
- [ ] Step 13: Test and verify implementation

---

## Success Criteria

- [ ] No gradients anywhere on the site
- [ ] Dark cyberpunk aesthetic with neon accents
- [ ] 3D animations running smoothly (60fps)
- [ ] All interactive components are reactive
- [ ] Mobile responsive
- [ ] Fast loading times
- [ ] Modern design library standards met

## Executive Summary

This comprehensive redesign transforms the ScooterCoop website from a luxury/gold aesthetic to a **dark cyberpunk with subtle neon touches** theme, incorporating React Three Fiber for 3D animations and modern reactive components using React integration with Astro.

## Current State Analysis

### Dependencies
- **Astro**: ^5.13.8
- **Tailwind CSS**: ^3.4.1
- **Boxicons**: External CDN
- **AOS**: External CDN (to be replaced)
- **Fonts**: Inter, Playfair Display

### Current Pages
- index.astro (homepage)
- contacto.astro (contact)
- galeria.astro (gallery)
- precios.astro (pricing)
- servicios.astro (services)
- ubicacion.astro (location)
- 404.astro, gracias.astro

### Current Design Issues
1. Uses gradients (to be removed per requirement)
2. Gold/luxury color scheme needs to transition to cyberpunk
3. AOS animations need to be replaced with more advanced animations
4. Static Astro components need to become reactive React components

---

## Phase 1: Dependencies & Configuration

### 1.1 New Dependencies

```json
{
  "dependencies": {
    "@astrojs/react": "^4.2.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "three": "^0.170.0",
    "@react-three/fiber": "^8.17.10",
    "@react-three/drei": "^9.117.0",
    "framer-motion": "^11.15.0",
    "clsx": "^2.1.1",
    "tailwind-merge": "^2.6.0"
  }
}
```

### 1.2 Updated astro.config.mjs

Add React integration:
```javascript
import react from '@astrojs/react';

export default defineConfig({
  integrations: [
    tailwind(),
    react()
  ],
});
```

---

## Phase 2: Design System

### 2.1 Color Palette (Dark Cyberpunk)

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| void-black | #030303 | Primary background |
| obsidian | #0A0A0A | Secondary background |
| carbon | #141414 | Card backgrounds |
| graphite | #1F1F1F | Surface elements |
| steel | #2D2D2D | Borders, dividers |
| silver | #8A8A8A | Body text |
| white-silver | #E5E5E5 | Headings |
| neon-cyan | #00F0FF | Primary accent |
| neon-magenta | #FF00FF | Secondary accent |
| electric-blue | #0066FF | Tertiary accent |
| neon-green | #00FF88 | Success states |

### 2.2 Typography

- **Headings**: JetBrains Mono (monospace, cyberpunk feel)
- **Body**: Space Grotesk (modern, readable)
- **Accents**: Orbitron (futuristic display font)

```css
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&family=Orbitron:wght@400;500;600;700;800&display=swap');
```

### 2.3 Design Tokens

```javascript
// tailwind.config.mjs additions
{
  colors: {
    // Solid dark backgrounds (no gradients)
    void: '#030303',
    obsidian: '#0A0A0A',
    carbon: '#141414',
    graphite: '#1F1F1F',
    steel: '#2D2D2D',
    
    // Text colors
    silver: '#8A8A8A',
    'white-silver': '#E5E5E5',
    
    // Cyberpunk neon accents
    cyan: '#00F0FF',
    magenta: '#FF00FF',
    'electric-blue': '#0066FF',
    'neon-green': '#00FF88',
  },
  
  fontFamily: {
    mono: ['JetBrains Mono', 'monospace'],
    sans: ['Space Grotesk', 'sans-serif'],
    display: ['Orbitron', 'sans-serif'],
  },
  
  boxShadow: {
    'neon-cyan': '0 0 20px rgba(0, 240, 255, 0.3)',
    'neon-magenta': '0 0 20px rgba(255, 0, 255, 0.3)',
    'neon-green': '0 0 20px rgba(0, 255, 136, 0.3)',
  }
}
```

---

## Phase 3: Component Architecture

### 3.1 React Components Structure

```
src/components/
├── ui/
│   ├── Button.jsx          # Cyberpunk styled buttons
│   ├── Card.jsx           # Reusable card component
│   ├── Badge.jsx          # Neon badge components
│   └── Input.jsx          # Form inputs
├── three/
│   ├── HeroScene.jsx      # 3D R3F hero animation
│   ├── ParticleField.jsx # Background particles
│   ├── ScooterModel.jsx   # 3D scooter model
│   └── CyberGrid.jsx      # 3D grid floor
└── layout/
    ├── Navbar.jsx         # Reactive navigation
    └── Footer.jsx         # Reactive footer
```

### 3.2 Animation Strategy

1. **Framer Motion** for:
   - Page transitions
   - Scroll-triggered animations
   - Interactive hover states
   - Modal animations

2. **React Three Fiber** for:
   - Hero section 3D background
   - Floating 3D elements
   - Interactive 3D scooter visualization
   - Animated cyber grid

3. **CSS Animations** for:
   - Subtle glow effects
   - Neon pulse animations
   - Scan line effects

---

## Phase 4: File Changes

### 4.1 New Files to Create

| File | Purpose |
|------|---------|
| `src/components/ui/Button.jsx` | Cyberpunk button with neon glow |
| `src/components/ui/Card.jsx` | Glassmorphism card with neon borders |
| `src/components/ui/Input.jsx` | Form input with cyber styling |
| `src/components/three/HeroScene.jsx` | R3F 3D hero animation |
| `src/components/three/ParticleField.jsx` | Animated particles |
| `src/components/three/CyberGrid.jsx` | 3D grid floor |
| `src/components/Navbar.jsx` | React navigation |
| `src/components/Footer.jsx` | React footer |
| `src/styles/global.css` | Updated global styles |

### 4.2 Files to Modify

| File | Changes |
|------|---------|
| `package.json` | Add React, R3F, Framer Motion |
| `astro.config.mjs` | Add React integration |
| `tailwind.config.mjs` | New cyberpunk colors/fonts |
| `src/layouts/Layout.astro` | Update to new design system |
| `src/pages/index.astro` | Add 3D hero, update styling |
| `src/pages/contacto.astro` | Update form, styling |
| `src/pages/galeria.astro` | Update gallery, styling |
| `src/pages/precios.astro` | Update pricing cards |
| `src/pages/servicios.astro` | Update services section |
| `src/pages/ubicacion.astro` | Update map section |

---

## Phase 5: Implementation Plan

### Step 1: Install Dependencies
```
npm install @astrojs/react react react-dom three @react-three/fiber @react-three/drei framer-motion clsx tailwind-merge
```

### Step 2: Configure Tailwind
- Update tailwind.config.mjs with cyberpunk colors
- Add new font families
- Remove gradient utilities

### Step 3: Create UI Components
- Button with neon glow effect
- Card with border glow
- Input with focus animations

### Step 4: Build 3D Components
- Create HeroScene with R3F
- Add ParticleField for ambient effect
- Implement CyberGrid floor

### Step 5: Update Layout
- Replace static header/footer with React components
- Update global styles
- Add new font imports

### Step 6: Update Pages
- index.astro: Hero 3D + sections
- All other pages: New styling

---

## Key Features

### 1. Dark Solid Colors
- No gradients anywhere
- Pure solid backgrounds
- Subtle opacity layers

### 2. Cyberpunk Aesthetic
- Neon accent colors
- Monospace fonts
- Grid patterns
- Glow effects

### 3. 3D Animations (R3F)
- Interactive 3D hero scene
- Floating particles
- Animated grid floor
- Smooth camera movements

### 4. Reactive Components
- React-powered navigation
- Interactive forms
- Animated cards
- Real-time state

### 5. Modern Design
- Mobile-first approach
- Accessibility optimized
- Performance focused
- Clean code architecture

---

## Visual Preview

### Homepage Hero Section

- [3D Scene with particles & grid]
- SCOOTER COOP (Orbitron font)
- Explore the Malecón with futuristic style
- [Rent Now] [Services]
- [scroll indicator with neon glow]

### Color Application
- Background: void-black (#030303)
- Cards: carbon (#141414) with steel (#2D2D2D) borders
- Primary accent: cyan (#00F0FF)
- Secondary accent: magenta (#FF00FF)
- Text: silver (#8A8A8A) body, white-silver (#E5E5E5) headings

---

## Implementation Steps (Todo List)

- [ ] Step 1: Install dependencies (React, R3F, Framer Motion)
- [ ] Step 2: Configure Tailwind with cyberpunk colors/fonts
- [ ] Step 3: Create UI components (Button, Card, Input)
- [ ] Step 4: Build 3D components (HeroScene, ParticleField, CyberGrid)
- [ ] Step 5: Create layout components (Navbar, Footer)
- [ ] Step 6: Update Layout.astro with new design system
- [ ] Step 7: Update index.astro with 3D hero and styling
- [ ] Step 8: Update contacto.astro
- [ ] Step 9: Update galeria.astro
- [ ] Step 10: Update precios.astro
- [ ] Step 11: Update servicios.astro
- [ ] Step 12: Update ubicacion.astro
- [ ] Step 13: Test and verify implementation

---

## Success Criteria

- [ ] No gradients anywhere on the site
- [ ] Dark cyberpunk aesthetic with neon accents
- [ ] 3D animations running smoothly (60fps)
- [ ] All interactive components are reactive
- [ ] Mobile responsive
- [ ] Fast loading times
- [ ] Modern design library standards met

- [ ] Mobile responsive
- [ ] Fast loading times
- [ ] Modern design library standards met

## Executive Summary

This comprehensive redesign transforms the ScooterCoop website from a luxury/gold aesthetic to a **dark cyberpunk with subtle neon touches** theme, incorporating React Three Fiber for 3D animations and modern reactive components using React integration with Astro.

## Current State Analysis

### Dependencies
- **Astro**: ^5.13.8
- **Tailwind CSS**: ^3.4.1
- **Boxicons**: External CDN
- **AOS**: External CDN (to be replaced)
- **Fonts**: Inter, Playfair Display

### Current Pages
- index.astro (homepage)
- contacto.astro (contact)
- galeria.astro (gallery)
- precios.astro (pricing)
- servicios.astro (services)
- ubicacion.astro (location)
- 404.astro, gracias.astro

### Current Design Issues
1. Uses gradients (to be removed per requirement)
2. Gold/luxury color scheme needs to transition to cyberpunk
3. AOS animations need to be replaced with more advanced animations
4. Static Astro components need to become reactive React components

---

## Phase 1: Dependencies & Configuration

### 1.1 New Dependencies

```json
{
  "dependencies": {
    "@astrojs/react": "^4.2.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "three": "^0.170.0",
    "@react-three/fiber": "^8.17.10",
    "@react-three/drei": "^9.117.0",
    "framer-motion": "^11.15.0",
    "clsx": "^2.1.1",
    "tailwind-merge": "^2.6.0"
  }
}
```

### 1.2 Updated astro.config.mjs

Add React integration:
```javascript
import react from '@astrojs/react';

export default defineConfig({
  integrations: [
    tailwind(),
    react()
  ],
});
```

---

## Phase 2: Design System

### 2.1 Color Palette (Dark Cyberpunk)

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| void-black | #030303 | Primary background |
| obsidian | #0A0A0A | Secondary background |
| carbon | #141414 | Card backgrounds |
| graphite | #1F1F1F | Surface elements |
| steel | #2D2D2D | Borders, dividers |
| silver | #8A8A8A | Body text |
| white-silver | #E5E5E5 | Headings |
| neon-cyan | #00F0FF | Primary accent |
| neon-magenta | #FF00FF | Secondary accent |
| electric-blue | #0066FF | Tertiary accent |
| neon-green | #00FF88 | Success states |

### 2.2 Typography

- **Headings**: JetBrains Mono (monospace, cyberpunk feel)
- **Body**: Space Grotesk (modern, readable)
- **Accents**: Orbitron (futuristic display font)

```css
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&family=Orbitron:wght@400;500;600;700;800&display=swap');
```

### 2.3 Design Tokens

```javascript
// tailwind.config.mjs additions
{
  colors: {
    // Solid dark backgrounds (no gradients)
    void: '#030303',
    obsidian: '#0A0A0A',
    carbon: '#141414',
    graphite: '#1F1F1F',
    steel: '#2D2D2D',
    
    // Text colors
    silver: '#8A8A8A',
    'white-silver': '#E5E5E5',
    
    // Cyberpunk neon accents
    cyan: '#00F0FF',
    magenta: '#FF00FF',
    'electric-blue': '#0066FF',
    'neon-green': '#00FF88',
  },
  
  fontFamily: {
    mono: ['JetBrains Mono', 'monospace'],
    sans: ['Space Grotesk', 'sans-serif'],
    display: ['Orbitron', 'sans-serif'],
  },
  
  boxShadow: {
    'neon-cyan': '0 0 20px rgba(0, 240, 255, 0.3)',
    'neon-magenta': '0 0 20px rgba(255, 0, 255, 0.3)',
    'neon-green': '0 0 20px rgba(0, 255, 136, 0.3)',
  }
}
```

---

## Phase 3: Component Architecture

### 3.1 React Components Structure

```
src/components/
├── ui/
│   ├── Button.jsx          # Cyberpunk styled buttons
│   ├── Card.jsx           # Reusable card component
│   ├── Badge.jsx          # Neon badge components
│   └── Input.jsx          # Form inputs
├── three/
│   ├── HeroScene.jsx      # 3D R3F hero animation
│   ├── ParticleField.jsx # Background particles
│   ├── ScooterModel.jsx   # 3D scooter model
│   └── CyberGrid.jsx      # 3D grid floor
└── layout/
    ├── Navbar.jsx         # Reactive navigation
    └── Footer.jsx         # Reactive footer
```

### 3.2 Animation Strategy

1. **Framer Motion** for:
   - Page transitions
   - Scroll-triggered animations
   - Interactive hover states
   - Modal animations

2. **React Three Fiber** for:
   - Hero section 3D background
   - Floating 3D elements
   - Interactive 3D scooter visualization
   - Animated cyber grid

3. **CSS Animations** for:
   - Subtle glow effects
   - Neon pulse animations
   - Scan line effects

---

## Phase 4: File Changes

### 4.1 New Files to Create

| File | Purpose |
|------|---------|
| `src/components/ui/Button.jsx` | Cyberpunk button with neon glow |
| `src/components/ui/Card.jsx` | Glassmorphism card with neon borders |
| `src/components/ui/Input.jsx` | Form input with cyber styling |
| `src/components/three/HeroScene.jsx` | R3F 3D hero animation |
| `src/components/three/ParticleField.jsx` | Animated particles |
| `src/components/three/CyberGrid.jsx` | 3D grid floor |
| `src/components/Navbar.jsx` | React navigation |
| `src/components/Footer.jsx` | React footer |
| `src/styles/global.css` | Updated global styles |

### 4.2 Files to Modify

| File | Changes |
|------|---------|
| `package.json` | Add React, R3F, Framer Motion |
| `astro.config.mjs` | Add React integration |
| `tailwind.config.mjs` | New cyberpunk colors/fonts |
| `src/layouts/Layout.astro` | Update to new design system |
| `src/pages/index.astro` | Add 3D hero, update styling |
| `src/pages/contacto.astro` | Update form, styling |
| `src/pages/galeria.astro` | Update gallery, styling |
| `src/pages/precios.astro` | Update pricing cards |
| `src/pages/servicios.astro` | Update services section |
| `src/pages/ubicacion.astro` | Update map section |

---

## Phase 5: Implementation Plan

### Step 1: Install Dependencies
```
npm install @astrojs/react react react-dom three @react-three/fiber @react-three/drei framer-motion clsx tailwind-merge
```

### Step 2: Configure Tailwind
- Update tailwind.config.mjs with cyberpunk colors
- Add new font families
- Remove gradient utilities

### Step 3: Create UI Components
- Button with neon glow effect
- Card with border glow
- Input with focus animations

### Step 4: Build 3D Components
- Create HeroScene with R3F
- Add ParticleField for ambient effect
- Implement CyberGrid floor

### Step 5: Update Layout
- Replace static header/footer with React components
- Update global styles
- Add new font imports

### Step 6: Update Pages
- index.astro: Hero 3D + sections
- All other pages: New styling

---

## Key Features

### 1. Dark Solid Colors
- No gradients anywhere
- Pure solid backgrounds
- Subtle opacity layers

### 2. Cyberpunk Aesthetic
- Neon accent colors
- Monospace fonts
- Grid patterns
- Glow effects

### 3. 3D Animations (R3F)
- Interactive 3D hero scene
- Floating particles
- Animated grid floor
- Smooth camera movements

### 4. Reactive Components
- React-powered navigation
- Interactive forms
- Animated cards
- Real-time state

### 5. Modern Design
- Mobile-first approach
- Accessibility optimized
- Performance focused
- Clean code architecture

---

## Visual Preview

### Homepage Hero Section
```
┌─────────────────────────────────────────────┐
│  [3D Scene with particles & grid]          │
│                                             │
│     SCOOTER COOP                           │
│     ═══════════════                        │
│                                             │
│     Explore the Malecón                    │
│     with futuristic style                  │
│                                             │
│     [Rent Now]  [Services]                 │
│                                             │
│  [scroll indicator with neon glow]          │
└─────────────────────────────────────────────┘
```

### Color Application
- Background: void-black (#030303)
- Cards: carbon (#141414) with steel (#2D2D2D) borders
- Primary accent: cyan (#00F0FF)
- Secondary accent: magenta (#FF00FF)
- Text: silver (#8A8A8A) body, white-silver (#E5E5E5) headings

---

## Timeline Estimate

1. **Setup**: 1 step - Install dependencies & configure
2. **Design System**: 1 step - Update Tailwind config
3. **UI Components**: 3 steps - Create Button, Card, Input
4. **3D Components**: 3 steps - Create HeroScene, Particles, Grid
5. **Layout Update**: 1 step - Update main layout
6. **Page Updates**: 6 steps - Each page individually

Total: ~15 implementation steps

---

## Success Criteria

- [ ] No gradients anywhere on the site
- [ ] Dark cyberpunk aesthetic with neon accents
- [ ] 3D animations running smoothly (60fps)
- [ ] All interactive components are reactive
- [ ] Mobile responsive
- [ ] Fast loading times
- [ ] Modern design library standards met

