# Tuki — Sitio web

Sitio web de **Tuki**, agencia digital de Bahía Blanca. Hecho con Next.js
(App Router), Tailwind CSS, GSAP + ScrollTrigger, Lenis y React Three Fiber.

## Estructura

- `/` — Inicio (hero 3D, propuesta de valor, servicios, herramientas, ejemplos, cómo trabajo)
- `/servicios` — Detalle de los 6 servicios
- `/trabajos` — Galería de 10 demos por rubro
- `/contacto` — Formulario que abre WhatsApp con el mensaje prellenado

Todo el contenido editable (textos, servicios, datos de contacto, demos) está
centralizado en [`src/lib/content.ts`](src/lib/content.ts).

## Desarrollo local

Requiere Node 18.18+.

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

## Build de producción

```bash
npm run build
npm run start
```

## Deploy a Netlify

El proyecto ya incluye `netlify.toml` con el plugin `@netlify/plugin-nextjs`.

**Opción 1 — desde el dashboard de Netlify:**

1. Conectá este repositorio en Netlify ("Add new site" → "Import an existing project").
2. Netlify detecta automáticamente el build command (`npm run build`) y el plugin de Next.js.
3. Deploy.

**Opción 2 — desde la terminal:**

```bash
npx netlify-cli deploy --build --prod
```

### Dominio propio

El sitio se publica por defecto en un subdominio `*.netlify.app`. Cuando se
compre un dominio propio (por ejemplo `tuki.com.ar`):

1. En Netlify: **Site settings → Domain management → Add a domain**.
2. Configurar los DNS según las instrucciones de Netlify.
3. Actualizar `SITE.url` en [`src/lib/content.ts`](src/lib/content.ts) con el
   nuevo dominio (se usa para SEO, sitemap, robots y la imagen de Open Graph).

## SEO

- Metadata (title/description/Open Graph) por página.
- `src/app/sitemap.ts` y `src/app/robots.ts` generados automáticamente.
- `src/app/opengraph-image.tsx` genera la imagen de previsualización para
  redes sociales con la paleta de marca.
