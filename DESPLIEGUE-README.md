# Guías de Despliegue para ScooterCoop

Bienvenido a las guías de despliegue para tu proyecto ScooterCoop. Aquí encontrarás instrucciones paso a paso para desplegar tu sitio web en diferentes plataformas de hosting gratuitas.

## Índice de Guías

1. [**Guía General de Despliegue**](./GUIA-DESPLIEGUE.md) - Visión general de las opciones de despliegue y preparación del proyecto
2. [**Despliegue en Netlify**](./NETLIFY-CLI-GUIA.md) - Instrucciones para desplegar usando Netlify CLI
3. [**Despliegue en Vercel**](./VERCEL-GUIA.md) - Guía completa para desplegar en Vercel
4. [**Despliegue en GitHub Pages**](./GITHUB-PAGES-GUIA.md) - Pasos para utilizar GitHub Pages con GitHub Actions

## ¿Qué opción elegir?

### Netlify
✅ **Recomendado para principiantes**
- Interfaz sencilla y amigable
- Excelente rendimiento para sitios estáticos
- Formularios integrados (útil para tu página de contacto)
- Despliegue continuo desde Git

### Vercel
✅ **Ideal para desarrolladores**
- Optimizado para frameworks modernos como Astro
- Excelente rendimiento y análisis
- Vista previa automática para cada cambio
- Integración perfecta con GitHub

### GitHub Pages
✅ **Buena opción si ya usas GitHub**
- Totalmente gratuito
- Integración directa con tu repositorio
- Automatización mediante GitHub Actions
- Ideal para proyectos de código abierto

## Antes de Desplegar

Antes de seguir cualquiera de estas guías, asegúrate de:

1. Tener todas las dependencias instaladas (`npm install`)
2. Verificar que tu proyecto funciona correctamente en local (`npm run dev`)
3. Construir el proyecto para producción (`npm run build`)
4. Revisar la versión de producción localmente (`npm run preview`)

## Después del Despliegue

Una vez desplegado tu sitio, no olvides:

1. Verificar que todas las páginas funcionan correctamente
2. Comprobar la visualización en dispositivos móviles
3. Asegurarte de que los formularios de contacto funcionan
4. Revisar la velocidad de carga con herramientas como Google PageSpeed Insights

---

¡Buena suerte con el despliegue de tu proyecto ScooterCoop! Si tienes alguna duda, consulta la documentación específica de cada plataforma o busca ayuda en sus respectivas comunidades.