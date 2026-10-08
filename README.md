# tambo360-landing

Landing de Tambo360 para tamberos. Astro 7 + Tailwind 4, publicada en Cloudflare Workers; las inscripciones al piloto se guardan en Cloudflare D1.

## Desarrollo

```sh
pnpm install
pnpm db:migrate:local   # crea la tabla en la D1 local (.wrangler/)
pnpm dev                # http://localhost:4321
pnpm test               # tests unitarios (Vitest)
pnpm build && pnpm preview   # build de producción servido con workerd
```

## Configuración

Todo lo que cambia entre entornos o se define más adelante está en un solo lugar:

| Qué | Dónde |
|---|---|
| Dominio (canonical, sitemap, previews) | `src/config/site-url.mjs` |
| Número de WhatsApp (vacío = el botón flotante no se muestra) | `src/config/site.ts` → `whatsappNumber`, solo dígitos con código de país, ej. `5493434567890` |
| Email, redes, URL de la demo, fecha de lanzamiento | `src/config/site.ts` |
| Base de datos | `wrangler.jsonc` → `d1_databases` |

## Base de datos de inscripciones (D1)

1. `pnpm exec wrangler login`
2. `pnpm exec wrangler d1 create tambo360-waitlist` y copiar el `database_id` que imprime en `wrangler.jsonc`.
3. `pnpm db:migrate:remote`
4. `pnpm run deploy`

Para ver las inscripciones:

```sh
pnpm exec wrangler d1 execute tambo360-waitlist --remote --command "SELECT nombre, telefono, rol, provincia, vacas_ordene, origen, creado_en FROM waitlist ORDER BY creado_en DESC"
```

El campo `origen` guarda el `utm_source` (o `ref`) del enlace con que llegó la persona, para saber qué campaña funcionó.

## Estructura

```
src/
  config/        datos del sitio (dominio, WhatsApp, redes)
  data/          textos de la home, preguntas frecuentes, equipo
  lib/           validación de la inscripción y acceso a D1
  components/
    ui/          piezas reutilizables sin contenido (Button, Input, Section…)
    layout/      Header, Footer, SEO, botón de WhatsApp
    sections/    secciones con contenido (home/, formulario, cierre)
  layouts/       BaseLayout y LegalLayout
  pages/         una ruta por archivo; api/ para endpoints
migrations/      esquema de D1
Docs/            stack, decisiones técnicas, sistema de diseño
Plan/            spec, análisis y estado del trabajo
```
