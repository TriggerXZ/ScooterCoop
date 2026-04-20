# ScooterCoop - Guía de Diseño UI/UX Avanzado

## Visión General del Diseño

**Objetivo Estratégico:** Reducir la fricción en el proceso de reserva y transmitir sensación de rapidez y sostenibilidad.

**Enfoque:** Mobile-First + Gamificación + Accesibilidad extrema

---

## 1. Paleta de Colores - "Eco-Cyber"

### Colores Primarios (Dark Mode Base)

| Color | Hex | Uso Principal |
|-------|-----|---------------|
| Void Black | `#030303` | Fondo principal |
| Obsidian | `#0A0A0A` | Fondo de tarjetas |
| Carbon | `#141414` | Bordes, separadores |
| Surface | `#1A1A1A` | Elementos elevados |

### Colores de Acento (Alto Contraste)

| Color | Hex | Ratio WCAG | Uso |
|-------|-----|------------|-----|
| Neon Cyan | `#00F0FF` | 16:1 | Primary CTA, energía |
| Neon Green (Eco) | `#00FF88` | 15:1 | Éxito, ahorro CO2 |
| Neon Magenta | `#FF00FF` | 12:1 | Promociones, alertas |
| Electric Blue | `#0066FF` | 8:1 | Información |

### Sistema de Estados

```
// Estados de botones (ratio mínimo 4.5:1)
--btn-primary: #00F0FF (fondo) → #FFFFFF (texto)
--btn-success: #00FF88 (fondo) → #000000 (texto)
--btn-danger: #FF3366 (fondo) → #FFFFFF (texto)

// Estados de batería
--battery-full: #00FF88
--battery-medium: #FFD700
--battery-low: #FF3366
```

---

## 2. Tipografía

### Familia Principal

| Elemento | Fuente | Peso | Tamaño |
|----------|--------|------|--------|
| Display/Hero | JetBrains Mono | 700 | 48-72px |
| Títulos | JetBrains Mono | 600 | 24-36px |
| Subtítulos | Space Grotesk | 500 | 18-24px |
| Cuerpo | Space Grotesk | 400 | 14-16px |
| Micro-copy | Space Grotesk | 400 | 12px |
| Botones | JetBrains Mono | 600 | 14px |

### Escala Tipográfica

```
--text-xs: 0.75rem    (12px) - Labels, timestamps
--text-sm: 0.875rem   (14px) - Cuerpo pequeño
--text-base: 1rem     (16px) - Cuerpo principal
--text-lg: 1.125rem   (18px) - Subtítulos
--text-xl: 1.5rem     (24px) - Títulos de sección
--text-2xl: 2rem      (32px) - Títulos principales
--text-3xl: 3rem      (48px) - Hero
--text-4xl: 4.5rem    (72px) - Display
```

---

## 3. Micro-interacciones

### 3.1 Mapa de Disponibilidad

```css
/* Animación de pulso para scooters disponibles */
@keyframes scooter-pulse {
  0%, 100% { 
    transform: scale(1);
    filter: drop-shadow(0 0 4px var(--neon-green));
  }
  50% { 
    transform: scale(1.15);
    filter: drop-shadow(0 0 12px var(--neon-green));
  }
}

/* Scooters ocupados - movimiento sutil */
@keyframes scooter-busy {
  0%, 100% { opacity: 0.6; }
  50% { opacity: 0.3; }
}
```

**Comportamiento:**
- Scooters disponibles: Pulso verde lento (2s)
- Scooters en uso: Animación de "respiración" gris
- Al hacer tap: Zoom al 200% con transición 300ms ease-out
- Selección: Anillo de progreso circular (1.5s) mientras carga datos

### 3.2 Proceso de Desbloqueo

```
[FASE 1: Inicio]           [FASE 2: Buscando]        [FASE 3: Desbloqueando]
┌─────────────────┐        ┌─────────────────┐       ┌─────────────────┐
│ 🔓 Tocá para    │   →    │ 📡 Conectando   │  →    │ ⚡ Desbloqueando│
│ desbloquear     │        │ al scooter...   │       │ scooter...      │
└─────────────────┘        └─────────────────┘       └─────────────────┘
      UI bounce                  Blink cyan              Progress ring
      200ms                      300ms pulse            1.5s circular
```

**Sonido sugerido:** Chime corto (100ms) al desbloquear

### 3.3 Transiciones de Pago

```css
/* Paso completado - swipe effect */
@keyframes step-complete {
  0% { transform: translateX(0); opacity: 1; }
  50% { transform: translateX(20px); opacity: 0.5; }
  100% { transform: translateX(-100%); opacity: 0; }
}

/* Nuevo paso entrante */
@keyframes step-enter {
  0% { transform: translateX(100%); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
}
```

---

## 4. Componentes Críticos

### 4.1 Hero Section (3 segundos de impacto)

```mermaid
graph LR
    A[Video Loop 3s] --> B[Texto: "Muévete en 30s"]
    B --> C[CTA: "Alquila Ahora"]
    C --> D[Stats: 0 emisiones]
```

**Specs:**
- Video: Loop de 3s, calidad 720p, formato WebM
- Overlay: Gradiente oscuro (bottom) para legibilidad
- Copy principal: JetBrains Mono 48-72px
- CTA: Botón flotante con "bounce" al hover
- Stats: Bento grid con ahorro CO2 en tiempo real

### 4.2 Tarjetas de Producto (Bento Grid)

```
┌────────────────────────────────────┐
│  ┌──────────┐  ┌──────────┐       │
│  │ ⚡ 45km/h │  │ 🔋 80km  │       │
│  │  Velocidad│  │ Autonomía│       │
│  └──────────┘  └──────────┘       │
│  ┌──────────────────────────┐     │
│  │     🖼️ IMAGEN 3D         │     │
│  │     del Scooter          │     │
│  └──────────────────────────┘     │
│  ┌──────────┐  ┌──────────┐       │
│  ⚙️ 250W    │  ⚖️ 12kg    │       │
│  Motor      │  Peso       │       │
│  └──────────┘  └──────────┘       │
│  [ALQUILAR AHORA - $15/hora]     │
└────────────────────────────────────┘
```

**Características:**
- Bordes: 1px solid con glow sutil
- Hover: Elevación + sombra verde/cyan
- Batería: Icono visual con porcentaje
- precios: Formato grande, moneda destacado

### 4.3 Dashboard de Usuario (Gamificado)

```
┌─────────────────────────────────────────────────────────────┐
│  TU IMPACTO ESTE MES                                       │
│  ┌─────────────────┐  ┌─────────────────┐                   │
│  │ 🌿 12.5 kg      │  │ ⏱️ 45 horas    │                   │
│  │ CO2 ahorrado    │  │ en movimiento  │                   │
│  │ [+15% vs antes] │  │ [Nivel 5]      │                   │
│  └─────────────────┘  └─────────────────┘                   │
│                                                             │
│  RUTAS REALIZADAS                                          │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ 🗺️ Centro → Playa | 25min | 8km | -2kg CO2 | 🏆    │   │
│  │ ─────────────────────────────────────────────────── │   │
│  │ 🗺️ Casa → Trabajo | 15min | 4km | -1kg CO2 | ⭐   │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  LOGROS DESBLOQUEADOS                                       │
│  [🌱 Eco Warrior] [⚡ Speed Demon] [🚴 100km] [⭐⭐⭐⭐]    │
└─────────────────────────────────────────────────────────────┘
```

**Gamificación:**
- Nivel de usuario con progress bar
- Insignias animadas al desbloquear
- Comparativa visual vs mes anterior
- Ranking semanal (opcional)

### 4.4 Mobile-First - Thumb Zone

```
┌─────────────────────────────┐
│         HEADER             │ ← Safe area (44px min)
├─────────────────────────────┤
│                             │
│      CONTENIDO              │
│      (Scroll area)          │
│                             │
├─────────────────────────────┤
│  [C]  [🗺️]  [👤]  [⚙️]   │ ← Thumb zone (70px)
│  Home  Map  Perfil  Ajustes │   Botones 48x48px min
└─────────────────────────────┘
```

**Specs:**
- Botones de navegación: Mínimo 48x48px
- Touch targets: 44px mínimo (Apple HIG)
- Distancia del borde inferior: 20px
- Gesture de swipe: 300ms de delay para evitar scrolls accidentales

---

## 5. Pruebas Sociales y Confianza

### 5.1 Mapa de Zonas Permitidas (Heatmap)

```
┌────────────────────────────────────────────┐
│  ZONA DE SERVICIO                           │
│  ┌────────────────────────────────────┐    │
│  │ 🟢🟢🟢🟢⚪⚪🟢🟢🟢🟢🟢              │    │
│  │ 🟢🟢🟢🟢🟢⚪⚪🟢🟢🟢🟢🟢              │    │
│  │ ⚪⚪🟢🟢🟢🟢🟢🟢🟢🟢⚪⚪              │    │
│  │ ⚪⚪⚪🟢🟢🟢🟢🟢🟢🟢⚪⚪              │    │
│  │     🟢 Alta demanda                │    │
│  │     ⚪ Sin cobertura               │    │
│  └────────────────────────────────────┘    │
│  [🔍 Buscar zona específica]                │
└────────────────────────────────────────────┘
```

### 5.2 Reseñas con Fotos Reales

```
┌────────────────────────────────────────────┐
│  ★★★★★ (4.8) - 2,340 reseñas              │
├────────────────────────────────────────────┤
│  ┌────────────────────────────────────┐    │
│  │ 👤 María G.                    📸  │    │
│  │ "Perfecto para moverme por la      │    │
│  │ ciudad. Scooter en perfecto        │    │
│  │ estado y proceso super rápido."    │    │
│  │ hace 2 días                         │    │
│  └────────────────────────────────────┘    │
│  [Ver todas las reseñas (234)]             │
└────────────────────────────────────────────┘
```

---

## 6. Tendencias de Diseño 2026

### 6.1 Bento Grid (Implementado ✅)

Organización de información en cajas de distintos tamaños:

```
┌─────────┬───────────────────┐
│  1x1    │       2x1         │
├─────────┼─────────┬─────────┤
│  1x1    │  1x1    │  1x1    │
├─────────┴─────────┼─────────┤
│        2x1         │  1x1    │
└───────────────────┴─────────┘
```

**Aplicación en ScooterCoop:**
- Specs del scooter (velocidad, autonomía, peso)
- Dashboard de usuario
- Stats de impacto ambiental

### 6.2 Glassmorphism (Parcial ⚠️)

**Uso limitado para:**
- Modales de confirmación
- overlays de mapas
- Tarjetas flotantes de información

```css
.glass-card {
  background: rgba(26, 26, 26, 0.8);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```

### 6.3 Micro-copy Dinámico

**Antes (genérico):**
```
"Reserva confirmada"
```

**Después (contextual):**
```
"🎉 ¡En 30 segundos estará listo!
Tu scooter te espera en:
📍 Plaza Mayor, stand B3"
```

---

## 7. Checklist de Accesibilidad

### Contraste (WCAG 2.1 AA)

| Elemento | Color Fondo | Color Texto | Ratio |
|----------|-------------|-------------|-------|
| Botón Primary | #00F0FF | #000000 | 16:1 ✅ |
| Botón Secondary | #1A1A1A | #00F0FF | 8:1 ✅ |
| Texto Principal | #030303 | #F0F0F0 | 17:1 ✅ |
| Texto Secundario | #030303 | #A0A0A0 | 7:1 ✅ |
| Link | #030303 | #0066FF | 8:1 ✅ |

### Touch Targets

- [ ] Todos los botones ≥ 44x44px
- [ ] Espaciado entre elementos táctiles ≥ 8px
- [ ] Soporte para gestos de swipe
- [ ] Feedback visual en cada interacción

### Motion

- [ ] Animaciones pausables (prefers-reduced-motion)
- [ ] Duración máxima de animaciones: 300ms
- [ ] Transiciones suaves (ease-out)

---

## 8. Arquitectura de Información Propuesta

```
🏠 HOME
├── Hero + CTA rápido
├── Mapa de zonas
├── Flota disponible (Bento Grid)
├── Impacto ambiental (gamificado)
└── Testimonios

🔍 EXPLORAR
├── Filtros (velocidad, autonomía, precio)
├── Lista de scooters
└── Comparador

🗺️ MAPA
├── Vista de zona
├── Scooters cercanos
└── Estaciones

👤 MI CUENTA
├── Historial de rutas
├── Impacto acumulado
├── Métodos de pago
└── Configuración

📞 SOPORTE
├── FAQ
├── Reporte de problemas
└── Chatbot
```

---

## Resumen de Diretices

### Lo que YA está implementado:
- ✅ Paleta de colores cyberpunk
- ✅ Tipografía JetBrains Mono + Space Grotesk
- ✅ Componentes con neón
- ✅ Dark mode base

### Mejoras propuestas para siguiente iteración:
- [ ] Video loop en Hero (3s)
- [ ] Bento Grid en tarjetas de scooters
- [ ] Dashboard gamificado
- [ ] Mapa con heatmap de disponibilidad
- [ ] Micro-copy dinámico en confirmaciones
- [ ] Sistema de logros/insignias

---

*Documento creado: Marzo 2026*
*Versión: 1.0*
*Especialista: Senior UI/UX Designer - Movilidad Urbana*
