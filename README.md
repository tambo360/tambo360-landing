# tambo360-landing

Landing de Tambo360 para tamberos. Astro 7 + Tailwind 4, publicada en Vercel. **Las inscripciones al piloto todavía no se guardan**: falta elegir la base de datos (ver abajo).

## Desarrollo

```sh
pnpm install
pnpm dev                # http://localhost:4321
pnpm test               # tests unitarios (Vitest)
pnpm build               # build de producción en .vercel/output
```

## Configuración

Todo lo que cambia entre entornos o se define más adelante está en un solo lugar:

| Qué | Dónde |
|---|---|
| Dominio (canonical, sitemap, previews) | `src/config/site-url.mjs` |
| Número de WhatsApp (vacío = el botón flotante no se muestra) | `src/config/site.ts` → `whatsappNumber`, solo dígitos con código de país, ej. `5493434567890` |
| Email, redes, URL de la demo y del registro, fecha de lanzamiento | `src/config/site.ts` |

## Lanzamiento

Desde `site.launchDate` (26/10/2026 00:00, hora de Argentina) el sitio deja el piloto y lleva a `site.registerUrl`.
El sitio es estático, así que `src/components/ui/LaunchSwitch.astro` mete las dos versiones en el HTML y un script
en el `<head>` (BaseLayout) muestra la que corresponde según la fecha de quien visita; sin JavaScript se ve la del piloto.

**Hay que volver a hacer build y deploy el 26/10 o después.** La meta descripción, el texto alternativo de la imagen
para redes y el JSON-LD de preguntas frecuentes se fijan en el build, y un build posterior a la fecha ya no lleva la
versión del piloto ni el script.

## Base de datos de inscripciones

Pendiente de definir. Mientras tanto `src/pages/api/inscripcion.ts` valida el formulario, no guarda nada y lleva a
`/gracias?estado=error` ("No pudimos guardar tus datos"). El esquema sigue en `migrations/` (SQL de SQLite) y el
acceso en `src/lib/waitlist-repository.ts`, listos para la base que se elija.

**No publicar con el formulario visible hasta conectar una base**: quien se anote pierde sus datos.

En Windows, `pnpm build` falla en el último paso (`EPERM` al crear symlinks) salvo con Developer Mode activado
o como administrador. Vercel construye en Linux, donde no pasa.

## Estructura

```
src/
  config/        datos del sitio (dominio, WhatsApp, redes)
  data/          textos de la home, preguntas frecuentes, equipo
  lib/           validación de la inscripción y acceso a la base
  components/
    ui/          piezas reutilizables sin contenido (Button, Input, Section…)
    layout/      Header, Footer, SEO, botón de WhatsApp
    sections/    secciones con contenido (home/, formulario, cierre)
  layouts/       BaseLayout y LegalLayout
  pages/         una ruta por archivo; api/ para endpoints
migrations/      esquema SQL de la inscripción
Docs/            stack, decisiones técnicas, sistema de diseño
Plan/            spec, análisis y estado del trabajo
```
