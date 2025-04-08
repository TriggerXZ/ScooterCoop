# Guía de Despliegue en GitHub Pages

Esta guía te muestra paso a paso cómo desplegar tu proyecto ScooterCoop en GitHub Pages, un servicio de hosting gratuito ofrecido por GitHub.

## Requisitos Previos

- Cuenta en GitHub
- Git instalado en tu sistema
- Node.js instalado en tu sistema

## Paso 1: Preparar tu Repositorio

### Si aún no tienes tu proyecto en GitHub:

1. Crea un nuevo repositorio en GitHub.
2. Inicializa Git en tu proyecto local (si aún no lo has hecho):

```bash
git init
```

3. Añade el repositorio remoto:

```bash
git remote add origin https://github.com/tu-usuario/ScooterCoop.git
```

4. Añade todos los archivos, haz commit y push:

```bash
git add .
git commit -m "Versión inicial"
git push -u origin main
```

> Nota: Si tu rama principal se llama "master" en lugar de "main", ajusta el comando anterior.

## Paso 2: Configurar Astro para GitHub Pages

1. Modifica tu archivo `astro.config.mjs` para incluir la configuración necesaria para GitHub Pages:

```javascript
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://tu-usuario.github.io',
  base: '/ScooterCoop',  // Solo si tu repositorio no es tu-usuario.github.io
  integrations: [tailwind()]
});
```

> Nota: Si tu repositorio se llama `tu-usuario.github.io`, no necesitas la línea `base: '/ScooterCoop'`.

2. Guarda los cambios, haz commit y push:

```bash
git add astro.config.mjs
git commit -m "Configuración para GitHub Pages"
git push
```

## Paso 3: Configurar GitHub Actions para el Despliegue Automático

1. Crea una carpeta `.github/workflows` en la raíz de tu proyecto:

```bash
mkdir -p .github/workflows
```

2. Crea un archivo `deploy.yml` dentro de esa carpeta con el siguiente contenido:

```yaml
name: Deploy to GitHub Pages

on:
  # Ejecutar en push a la rama principal
  push:
    branches: [main]  # Cambia a 'master' si esa es tu rama principal
  # Permite ejecutar este workflow manualmente desde la pestaña Actions
  workflow_dispatch:

# Permite que este job escriba en el repositorio
permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build Astro
        run: npm run build
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v1
        with:
          path: ./dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v1
```

3. Guarda los cambios, haz commit y push:

```bash
git add .github/workflows/deploy.yml
git commit -m "Añadir workflow de GitHub Actions"
git push
```

## Paso 4: Habilitar GitHub Pages en tu Repositorio

1. Ve a la página de tu repositorio en GitHub.
2. Haz clic en "Settings" (Configuración).
3. En el menú lateral, haz clic en "Pages".
4. En la sección "Build and deployment" > "Source", selecciona "GitHub Actions".

## Paso 5: Verificar el Despliegue

1. Ve a la pestaña "Actions" en tu repositorio.
2. Deberías ver el workflow "Deploy to GitHub Pages" en ejecución o completado.
3. Una vez completado, tu sitio estará disponible en:
   - `https://tu-usuario.github.io/ScooterCoop` (si usaste `base: '/ScooterCoop'`)
   - `https://tu-usuario.github.io` (si tu repositorio es `tu-usuario.github.io`)

## Solución de Problemas

### Rutas Incorrectas

Si las imágenes, CSS o enlaces no funcionan correctamente:

1. Asegúrate de que estás usando rutas relativas en tu proyecto.
2. Verifica que la configuración `base` en `astro.config.mjs` coincida con el nombre de tu repositorio.
3. Para referencias a archivos estáticos, usa `import.meta.env.BASE_URL` como prefijo:

```astro
<img src={`${import.meta.env.BASE_URL}imagen.jpg`} alt="Descripción" />
```

### El Workflow Falla

Si el workflow de GitHub Actions falla:

1. Revisa los logs en la pestaña "Actions" para identificar el error.
2. Asegúrate de que el proyecto se construye correctamente en local con `npm run build`.
3. Verifica que todas las dependencias estén correctamente listadas en `package.json`.

### Cambios No Reflejados

Si los cambios no se reflejan después de hacer push:

1. Verifica que estás haciendo push a la rama correcta (la que configuraste en el workflow).
2. Comprueba el estado del workflow en la pestaña "Actions".
3. Puedes ejecutar manualmente el workflow desde la pestaña "Actions" > "Deploy to GitHub Pages" > "Run workflow".

## Consejos Adicionales

### Dominio Personalizado

Para usar un dominio personalizado con GitHub Pages:

1. Ve a la configuración de GitHub Pages en tu repositorio.
2. En la sección "Custom domain", ingresa tu dominio.
3. Configura los registros DNS de tu dominio según las instrucciones proporcionadas.
4. Asegúrate de actualizar la configuración `site` en `astro.config.mjs` para que coincida con tu dominio personalizado.

### Caché y Actualizaciones

GitHub Pages puede tardar unos minutos en reflejar los cambios debido al caché:

1. Si no ves los cambios inmediatamente, espera unos minutos y actualiza la página.
2. Puedes forzar una actualización en tu navegador con Ctrl+F5 o Cmd+Shift+R.

---

Siguiendo esta guía, podrás desplegar tu proyecto ScooterCoop en GitHub Pages de manera gratuita y con despliegue automático cada vez que hagas cambios en tu repositorio.