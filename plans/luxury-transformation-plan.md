# ScooterCoop Luxury Website Transformation Plan

## Executive Summary

Transform ScooterCoop from a futuristic/tech aesthetic (neon cyan/purple, glassmorphism) to a **luxury, exclusive, sophisticated** brand identity. The new design will communicate premium quality, established trust, and refined professionalism through minimalist elegance, generous white space, and a sophisticated neutral palette with gold accents.

---

## 1. Design Foundation

### 1.1 Color Palette Premium

| Color Role | Color Value | Usage |
|------------|-------------|-------|
| **Primary Background** | `#0A0A0A` | Deep black for main backgrounds |
| **Secondary Background** | `#141414` | Slightly lighter for cards/sections |
| **Surface Color** | `#1A1A1A` | Card backgrounds, containers |
| **Ivory White** | `#F5F5F0` | Primary text, headings |
| **Warm Gray** | `#A3A3A3` | Secondary text, body copy |
| **Graphite** | `#404040` | Borders, dividers, subtle elements |
| **Gold Accent** | `#C9A962` | CTAs, highlights, premium indicators |
| **Soft Gold** | `#E8D5B5` | Hover states, subtle accents |
| **Muted Gold** | `#8B7355` | Disabled states, borders |

### 1.2 Typography System

| Type | Font Family | Weight | Usage |
|------|-------------|--------|-------|
| **Display/Headings** | Playfair Display | 400, 500, 600, 700 | Hero titles, section headings |
| **Body** | Inter | 300, 400, 500, 600 | All body text, paragraphs |
| **Accent** | Inter | 500, 600 | Buttons, CTAs, navigation |

**Font Loading:**
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet">
```

### 1.3 Design Tokens

```css
:root {
  /* Colors */
  --color-black: #0A0A0A;
  --color-charcoal: #141414;
  --color-surface: #1A1A1A;
  --color-ivory: #F5F5F0;
  --color-warm-gray: #A3A3A3;
  --color-graphite: #404040;
  --color-gold: #C9A962;
  --color-gold-soft: #E8D5B5;
  --color-gold-muted: #8B7355;

  /* Spacing */
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;
  --space-2xl: 3rem;
  --space-3xl: 4rem;
  --space-4xl: 6rem;
  --space-5xl: 8rem;

  /* Corner Radius */
  --radius-sm: 4px;
  --radius-md: 6px;
  --radius-lg: 8px;
  --radius-xl: 12px;

  /* Shadows */
  --shadow-subtle: 0 2px 8px rgba(0, 0, 0, 0.3);
  --shadow-medium: 0 4px 16px rgba(0, 0, 0, 0.4);
  --shadow-elevated: 0 8px 32px rgba(0, 0, 0, 0.5);
  --shadow-gold: 0 4px 20px rgba(201, 169, 98, 0.2);

  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-smooth: 300ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-luxury: 500ms cubic-bezier(0.4, 0, 0.2, 1);
}
```

---

## 2. Component Transformations

### 2.1 Navigation Header

**Current:** Glassmorphism with rounded pill shape, cyan/purple accents
**Target:** Minimalist solid header with subtle gold line separator

```astro
<header class="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-sm border-b border-graphite/30 transition-all duration-smooth">
  <div class="container mx-auto px-6 py-5">
    <nav class="flex justify-between items-center">
      <!-- Logo -->
      <a href="/" class="text-2xl font-display font-semibold tracking-wide text-ivory">
        SCOOTER<span class="text-gold">COOP</span>
      </a>

      <!-- Desktop Menu -->
      <ul class="hidden md:flex items-center gap-10">
        <li><a href="/servicios" class="text-warm-gray hover:text-ivory transition-colors text-sm tracking-wide uppercase">Servicios</a></li>
        <li><a href="/precios" class="text-warm-gray hover:text-ivory transition-colors text-sm tracking-wide uppercase">Precios</a></li>
        <li><a href="/galeria" class="text-warm-gray hover:text-ivory transition-colors text-sm tracking-wide uppercase">Galería</a></li>
        <li><a href="/ubicacion" class="text-warm-gray hover:text-ivory transition-colors text-sm tracking-wide uppercase">Ubicación</a></li>
        <li><a href="/contacto" class="px-6 py-2.5 bg-gold text-black font-medium text-sm tracking-wide hover:bg-gold-soft transition-colors">Contacto</a></li>
      </ul>
    </nav>
  </div>
</header>
```

### 2.2 Hero Section

**Current:** Large gradient radial background, floating elements, neon glow
**Target:** Clean typography-focused hero with generous negative space

```astro
<section class="relative min-h-screen flex items-center justify-center bg-black">
  <div class="container mx-auto px-6 text-center">
    <!-- Decorative Line -->
    <div class="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-10"></div>

    <!-- Eyebrow -->
    <p class="text-gold text-sm tracking-[0.3em] uppercase mb-6">Alquiler de scooters eléctricos</p>

    <!-- Main Heading -->
    <h1 class="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-ivory mb-8 leading-tight">
      Explora el Malecón<br/>
      <span class="italic font-light text-gold">con elegancia</span>
    </h1>

    <!-- Subheadline -->
    <p class="text-warm-gray text-lg max-w-xl mx-auto mb-12 font-light leading-relaxed">
      Movilidad premium en el corazón de Barranquilla. Experimenta libertad,
      estilo y sostenibilidad en cada recorrido.
    </p>

    <!-- CTAs -->
    <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
      <a href="/contacto" class="px-10 py-4 bg-gold text-black font-medium tracking-wide hover:bg-gold-soft transition-colors">
        Reservar Ahora
      </a>
      <a href="/servicios" class="px-10 py-4 border border-graphite text-ivory font-medium tracking-wide hover:border-gold hover:text-gold transition-colors">
        Ver Servicios
      </a>
    </div>
  </div>
</section>
```

### 2.3 Feature Cards (Bento Grid)

**Current:** 3xl rounded corners, gradient borders, glow effects
**Target:** Square corners, subtle borders, gold accent elements

```astro
<div class="grid grid-cols-1 md:grid-cols-3 gap-px bg-graphite/20">
  <!-- Card 1: Speed -->
  <div class="bg-charcoal p-10 hover:bg-surface transition-colors duration-smooth">
    <div class="w-12 h-12 border border-gold/40 flex items-center justify-center mb-6">
      <i class="bx bx-tachometer text-gold text-2xl"></i>
    </div>
    <h3 class="text-xl font-display font-medium text-ivory mb-3">Velocidad Controlada</h3>
    <p class="text-warm-gray font-light">Hasta 25 km/h de adrenalina segura por el Malecón.</p>
    <div class="mt-6 pt-6 border-t border-graphite/30">
      <span class="text-3xl font-display text-gold">25<span class="text-sm text-warm-gray ml-1">km/h</span></span>
    </div>
  </div>

  <!-- Card 2: Battery -->
  <div class="bg-charcoal p-10 hover:bg-surface transition-colors duration-smooth">
    <div class="w-12 h-12 border border-gold/40 flex items-center justify-center mb-6">
      <i class="bx bx-battery text-gold text-2xl"></i>
    </div>
    <h3 class="text-xl font-display font-medium text-ivory mb-3">Autonomía Total</h3>
    <p class="text-warm-gray font-light">Baterías de larga duración para toda tu aventura.</p>
  </div>

  <!-- Card 3: Safety -->
  <div class="bg-charcoal p-10 hover:bg-surface transition-colors duration-smooth">
    <div class="w-12 h-12 border border-gold/40 flex items-center justify-center mb-6">
      <i class="bx bx-shield-quarter text-gold text-2xl"></i>
    </div>
    <h3 class="text-xl font-display font-medium text-ivory mb-3">Seguridad Activa</h3>
    <p class="text-warm-gray font-light">Frenos ABS y luces LED de alta potencia.</p>
  </div>
</div>
```

### 2.4 Pricing Cards

**Current:** 2xl rounded corners, gradient borders, "MÁS POPULAR" badge
**Target:** Square corners, single gold accent line, subtle hover lift

```astro
<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
  <!-- Plan 1 -->
  <div class="bg-charcoal border border-graphite/30 p-8 hover:border-gold/40 transition-all duration-smooth group">
    <div class="mb-6">
      <h3 class="text-xl font-display font-medium text-ivory mb-1">30 Minutos</h3>
      <p class="text-gold text-sm tracking-wide">PLAN BÁSICO</p>
    </div>
    <div class="mb-8">
      <span class="text-4xl font-display font-medium text-ivory">$25.000</span>
      <span class="text-warm-gray ml-2">COP</span>
    </div>
    <ul class="space-y-4 mb-8">
      <li class="flex items-center text-warm-gray">
        <i class="bx bx-check text-gold mr-3"></i>Casco incluido
      </li>
      <li class="flex items-center text-warm-gray">
        <i class="bx bx-check text-gold mr-3"></i>Asesoría inicial
      </li>
      <li class="flex items-center text-warm-gray">
        <i class="bx bx-check text-gold mr-3"></i>Guía turístico
      </li>
    </ul>
    <a href="/contacto" class="block w-full py-3 border border-graphite text-ivory text-center font-medium tracking-wide hover:border-gold hover:text-gold transition-colors">
      Reservar
    </a>
  </div>

  <!-- Plan 2 (Featured) -->
  <div class="bg-surface border border-gold/50 p-8 relative hover:shadow-gold transition-all duration-smooth">
    <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-gold text-black text-xs font-semibold tracking-wider uppercase">
      Más Popular
    </div>
    <div class="mb-6">
      <h3 class="text-xl font-display font-medium text-ivory mb-1">40 Minutos</h3>
      <p class="text-gold text-sm tracking-wide">PLAN ESTÁNDAR</p>
    </div>
    <div class="mb-8">
      <span class="text-4xl font-display font-medium text-ivory">$30.000</span>
      <span class="text-warm-gray ml-2">COP</span>
    </div>
    <ul class="space-y-4 mb-8">
      <li class="flex items-center text-warm-gray">
        <i class="bx bx-check text-gold mr-3"></i>Casco incluido
      </li>
      <li class="flex items-center text-warm-gray">
        <i class="bx bx-check text-gold mr-3"></i>Asesoría inicial
      </li>
      <li class="flex items-center text-warm-gray">
        <i class="bx bx-check text-gold mr-3"></i>Guía turístico
      </li>
      <li class="flex items-center text-warm-gray">
        <i class="bx bx-check text-gold mr-3"></i>Acompañamiento
      </li>
    </ul>
    <a href="/contacto" class="block w-full py-3 bg-gold text-black text-center font-medium tracking-wide hover:bg-gold-soft transition-colors">
      Reservar
    </a>
  </div>

  <!-- Plan 3 -->
  <div class="bg-charcoal border border-graphite/30 p-8 hover:border-gold/40 transition-all duration-smooth group">
    <div class="mb-6">
      <h3 class="text-xl font-display font-medium text-ivory mb-1">1 Hora</h3>
      <p class="text-gold text-sm tracking-wide">PLAN PREMIUM</p>
    </div>
    <div class="mb-8">
      <span class="text-4xl font-display font-medium text-ivory">$40.000</span>
      <span class="text-warm-gray ml-2">COP</span>
    </div>
    <ul class="space-y-4 mb-8">
      <li class="flex items-center text-warm-gray">
        <i class="bx bx-check text-gold mr-3"></i>Casco incluido
      </li>
      <li class="flex items-center text-warm-gray">
        <i class="bx bx-check text-gold mr-3"></i>Asesoría inicial
      </li>
      <li class="flex items-center text-warm-gray">
        <i class="bx bx-check text-gold mr-3"></i>Guía turístico
      </li>
      <li class="flex items-center text-warm-gray">
        <i class="bx bx-check text-gold mr-3"></i>Acompañamiento
      </li>
    </ul>
    <a href="/contacto" class="block w-full py-3 border border-graphite text-ivory text-center font-medium tracking-wide hover:border-gold hover:text-gold transition-colors">
      Reservar
    </a>
  </div>
</div>
```

### 2.5 Testimonials Section

**Current:** Rounded cards, colored borders matching accent
**Target:** Elegant cards with quote icon, subtle gold accents

```astro
<section class="py-24 bg-black">
  <div class="container mx-auto px-6">
    <!-- Section Header -->
    <div class="text-center mb-16">
      <div class="w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6"></div>
      <h2 class="text-3xl md:text-4xl font-display font-medium text-ivory mb-4">Lo que dicen nuestros clientes</h2>
      <p class="text-warm-gray max-w-xl mx-auto font-light">Experiencias reales de quienes han descubierto el Malecón con nosotros.</p>
    </div>

    <!-- Testimonials Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Testimonial 1 -->
      <div class="bg-charcoal p-8 border border-graphite/20 hover:border-gold/30 transition-colors duration-smooth">
        <div class="flex text-gold mb-6">
          <i class="bx bxs-star"></i><i class="bx bxs-star"></i><i class="bx bxs-star"></i><i class="bx bxs-star"></i><i class="bx bxs-star"></i>
        </div>
        <i class="bx bxs-quote-alt-left text-4xl text-graphite/50 mb-4"></i>
        <p class="text-warm-gray mb-6 italic font-light leading-relaxed">
          Una experiencia absolutamente increíble. Los scooters son elegantes y fáciles de manejar.
          El servicio fue impecable de principio a fin.
        </p>
        <div class="pt-6 border-t border-graphite/20">
          <p class="text-ivory font-medium">Carlos Martínez</p>
          <p class="text-gold text-sm">Turista de Medellín</p>
        </div>
      </div>

      <!-- More testimonials... -->
    </div>
  </div>
</section>
```

### 2.6 Footer

**Current:** Colored glow accents, rounded social icons
**Target:** Clean layout with subtle gold dividers

```astro
<footer class="bg-black border-t border-graphite/30 py-16">
  <div class="container mx-auto px-6">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
      <!-- Brand -->
      <div class="md:col-span-1">
        <h3 class="text-xl font-display font-medium text-ivory mb-4">
          SCOOTER<span class="text-gold">COOP</span>
        </h3>
        <p class="text-warm-gray text-sm leading-relaxed mb-6">
          Revolucionando la movilidad urbana en el Malecón con estilo y sostenibilidad.
        </p>
        <!-- Social Icons -->
        <div class="flex gap-4">
          <a href="#" class="w-10 h-10 border border-graphite flex items-center justify-center text-warm-gray hover:border-gold hover:text-gold transition-colors">
            <i class="bx bxl-instagram text-lg"></i>
          </a>
          <a href="#" class="w-10 h-10 border border-graphite flex items-center justify-center text-warm-gray hover:border-gold hover:text-gold transition-colors">
            <i class="bx bxl-facebook text-lg"></i>
          </a>
          <a href="#" class="w-10 h-10 border border-graphite flex items-center justify-center text-warm-gray hover:border-gold hover:text-gold transition-colors">
            <i class="bx bxl-whatsapp text-lg"></i>
          </a>
        </div>
      </div>

      <!-- Contact -->
      <div>
        <h4 class="text-ivory font-medium mb-6">Contacto</h4>
        <ul class="space-y-4 text-warm-gray text-sm">
          <li class="flex items-start">
            <i class="bx bx-map text-gold mr-3 mt-0.5"></i>
            <span>Malecón del Río, Barranquilla</span>
          </li>
          <li class="flex items-center">
            <i class="bx bx-phone text-gold mr-3"></i>
            <span>+57 300 123 4567</span>
          </li>
          <li class="flex items-center">
            <i class="bx bx-envelope text-gold mr-3"></i>
            <span>info@scootercoop.com</span>
          </li>
        </ul>
      </div>

      <!-- Hours -->
      <div>
        <h4 class="text-ivory font-medium mb-6">Horario</h4>
        <ul class="space-y-4 text-warm-gray text-sm">
          <li class="flex items-center">
            <i class="bx bx-time text-gold mr-3"></i>
            <span>Lun - Vie: 3PM - 10PM</span>
          </li>
          <li class="flex items-center">
            <i class="bx bx-time text-gold mr-3"></i>
            <span>Sáb - Dom: 2PM - 11PM</span>
          </li>
        </ul>
      </div>

      <!-- Links -->
      <div>
        <h4 class="text-ivory font-medium mb-6">Legal</h4>
        <ul class="space-y-3 text-warm-gray text-sm">
          <li><button id="terms-btn" class="hover:text-gold transition-colors">Términos y Condiciones</button></li>
          <li><button id="privacy-btn" class="hover:text-gold transition-colors">Política de Privacidad</button></li>
        </ul>
      </div>
    </div>

    <div class="mt-16 pt-8 border-t border-graphite/20 text-center">
      <p class="text-warm-gray text-sm">
        &copy; {new Date().getFullYear()} ScooterCoop. Todos los derechos reservados.
      </p>
    </div>
  </div>
</footer>
```

---

## 3. Implementation Tasks

### 3.1 Tailwind Configuration Updates

**File:** `tailwind.config.mjs`

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        black: '#0A0A0A',
        charcoal: '#141414',
        surface: '#1A1A1A',
        ivory: '#F5F5F0',
        'warm-gray': '#A3A3A3',
        graphite: '#404040',
        gold: '#C9A962',
        'gold-soft': '#E8D5B5',
        'gold-muted': '#8B7355',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        gold: '0 4px 20px rgba(201, 169, 98, 0.2)',
        elevated: '0 8px 32px rgba(0, 0, 0, 0.5)',
      },
      borderRadius: {
        sm: '4px',
        md: '6px',
        lg: '8px',
        xl: '12px',
      },
    },
  },
  plugins: [],
};
```

### 3.2 Global CSS Updates

**File:** `src/styles/global.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --color-black: #0A0A0A;
    --color-charcoal: #141414;
    --color-surface: #1A1A1A;
    --color-ivory: #F5F5F0;
    --color-warm-gray: #A3A3A3;
    --color-graphite: #404040;
    --color-gold: #C9A962;
    --color-gold-soft: #E8D5B5;
  }

  body {
    @apply font-sans text-ivory bg-black antialiased;
  }

  h1, h2, h3, h4, h5, h6 {
    @apply font-display;
  }
}

@layer components {
  .section-padding {
    @apply py-20 md:py-32;
  }

  .btn-gold {
    @apply px-10 py-4 bg-gold text-black font-medium tracking-wide
           hover:bg-gold-soft transition-colors duration-smooth;
  }

  .btn-outline {
    @apply px-10 py-4 border border-graphite text-ivory font-medium tracking-wide
           hover:border-gold hover:text-gold transition-colors duration-smooth;
  }

  .card-luxury {
    @apply bg-charcoal border border-graphite/30 p-8
           hover:border-gold/40 transition-all duration-smooth;
  }
}

@layer utilities {
  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background: #0A0A0A;
  }

  ::-webkit-scrollbar-thumb {
    background: #404040;
    border-radius: 3px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #C9A962;
  }
}
```

---

## 4. Page-by-Page Transformation

### 4.1 Homepage (`src/pages/index.astro`)
- [ ] Hero section redesign with clean typography
- [ ] Features grid with luxury card styling
- [ ] Pricing section with premium card design
- [ ] Testimonials with elegant layout
- [ ] Remove all neon gradients and glow effects
- [ ] Add subtle gold accent lines and dividers

### 4.2 Servicios Page (`src/pages/servicios.astro`)
- [ ] Redesign service cards with consistent luxury styling
- [ ] Update FAQ section with elegant accordion
- [ ] Clean up CTA section with minimal design

### 4.3 Precios Page (`src/pages/precios.astro`)
- [ ] Redesign pricing cards with new color scheme
- [ ] Update group/corporate sections
- [ ] Remove gradient backgrounds

### 4.4 Galería Page (`src/pages/galeria.astro`)
- [ ] Simplify gallery filter buttons
- [ ] Redesign image cards with subtle gold borders
- [ ] Remove HUD/futuristic overlay elements
- [ ] Add elegant hover transitions

### 4.5 Contacto Page (`src/pages/contacto.astro`)
- [ ] Redesign form with elegant styling
- [ ] Update contact info cards
- [ ] Clean up map section

### 4.6 Layout (`src/layouts/Layout.astro`)
- [ ] Update navigation header
- [ ] Redesign footer
- [ ] Update modal designs
- [ ] Change font loading to include Playfair Display

---

## 5. Visual Reference: Before vs After

### Before (Current)
- **Colors:** Neon cyan (#00f0ff), purple (#7000ff), dark blue
- **Typography:** Space Grotesk (display), Inter (body)
- **Corners:** 2rem (heavily rounded)
- **Effects:** Glassmorphism, glows, gradients
- **Style:** Futuristic, tech-focused

### After (Target)
- **Colors:** Deep black (#0A0A0A), ivory white (#F5F5F0), gold (#C9A962)
- **Typography:** Playfair Display (headings), Inter (body)
- **Corners:** 4-8px (subtly rounded)
- **Effects:** Subtle shadows, gold accents, clean lines
- **Style:** Luxury, exclusive, sophisticated

---

## 6. Implementation Priority

| Priority | Component | Estimated Impact |
|----------|-----------|------------------|
| P1 | Global CSS & Tailwind config | Foundation for all changes |
| P1 | Layout (header/footer) | Site-wide brand consistency |
| P1 | Homepage hero | Primary visual impression |
| P2 | Homepage features & pricing | Core business conversion |
| P2 | Servicios page | Service presentation |
| P3 | Precios page | Pricing transparency |
| P3 | Galería page | Visual showcase |
| P3 | Contacto page | Conversion point |

---

## 7. Next Steps

1. **Review and approve** this transformation plan
2. **Switch to Code mode** to begin implementation
3. **Start with** Tailwind config and global CSS updates
4. **Progress through** pages in priority order
5. **Test** responsive behavior and interactions
6. **Refine** based on visual feedback

---

*Plan created for ScooterCoop luxury website transformation*
*Target: Minimalist elegance with premium color palette and sophisticated typography*
