# Stack frontend — tambo360-landing
componente: tambo360-landing · área: frontend

Único componente y única área del proyecto: sitio estático con un endpoint de inscripción. No hay backend separado; el endpoint vive dentro de este componente.

## Adoptado
| Eje | Elección | Desde |
|---|---|---|
| Runtime de build | Node >= 22.12 (requisito de astro 7.3.5) | 2026-10 |
| Lenguaje | TypeScript (modo strict de Astro) | 2026-10 |
| Framework | Astro 7.3.5 | 2026-10 |
| Salida | estática, con el endpoint de inscripción a pedido (QT-04) | 2026-10 |
| Estilos | Tailwind CSS 4.3.3, tokens en `@theme` de CSS | 2026-10 |
| JS en el cliente | sin framework de UI; scripts mínimos de Astro solo donde hay interacción (menú móvil, sección activa del nav, formulario, acordeón nativo `<details>`) | 2026-10 |
| Hosting | Vercel: assets estáticos + función para lo que se renderiza a pedido (QT-15) | 2026-10-19 |
| Persistencia | ninguna: cada inscripción se manda por mail al equipo con la API de Resend (`fetch`, sin SDK) y la bandeja es el registro (QT-20, QT-30, QT-34) | 2026-10-23 |
| Imágenes | `astro:assets` con optimización en build (QT-06) | 2026-10 |
| Tipografía | Figtree variable, archivo latino autoalojado en `public/fonts` (OFL) | 2026-10 |
| Iconos | Tabler Icons outline (MIT) descargados como SVG en `src/icons/`, renderizados inline en build con astro-icon 1.2.0 | 2026-10 |
| Sesiones | desactivadas (`session: false`): nada usa sesiones en el servidor | 2026-10 |
| Tests | Vitest 5.0.3, entorno node (QT-12) | 2026-10 |

## Opt-ins
- **Niveles de test:** unitario: sí, para la lógica de `src/lib` (validación, normalización del teléfono, armado y envío del mail con `fetch` simulado) · integración contra el motor real: no hay base (QT-34); el envío real a Resend queda para QA · contenedores efímeros: no · API en proceso: no.
- **Test primero:** no.
- **Tests end-to-end automatizados:** no. La verificación es build + Lighthouse + revisión manual.
- **Datos de test:** ninguno: no hay base (QT-34).

## Convenciones
- `src/components/ui/`: piezas reutilizables sin contenido de negocio (Button, Input, Select, Checkbox, Container, Section, Badge, Icon, Modal).
- `src/components/sections/`: secciones de página con contenido; cada una recibe sus datos de `src/content/` o de props.
- `src/components/layout/`: Header, Footer, WhatsAppButton, SEO.
- `src/layouts/`: BaseLayout (html, head, SEO) y LegalLayout.
- `src/pages/`: una ruta por archivo; `src/pages/api/` solo endpoints.
- `src/content/` y `src/data/`: textos y datos (FAQ, módulos, equipo) separados de la maquetación.
- `src/config/site.ts`: WhatsApp, email, redes, URL del registro en la app (vacía = sin botones "Registrarme"), fecha de lanzamiento. El dominio está en `src/config/site-url.mjs` (lo importa también `astro.config.mjs`). Nada de esto se repite en otro lugar.
- Variables de entorno: `PUBLIC_GOOGLE_SITE_VERIFICATION` (QT-25), opcional, solo en Production; se lee en el build. `RESEND_API_KEY` (QT-29, QT-36): secreto de servidor declarado en `env.schema` de `astro.config.mjs`, opcional, leído en cada pedido desde `astro:env/server`; si falta, el form responde `error`. Remitente `onboarding@resend.dev` fijo en el endpoint y destinatario `site.email` (QT-36).
- `src/lib/`: lógica sin UI (validación de la inscripción, mail a Resend), con sus tests `*.test.ts` al lado.
- Imágenes de contenido en `src/assets/` (las optimiza el build); en `public/` solo favicon y OG. `robots.txt` lo genera `src/pages/robots.txt.ts` con el dominio de la config.

## Paquetes
| Paquete | Versión | Por qué está |
|---|---|---|
| astro | 7.3.5 | Framework |
| @astrojs/vercel | 11.0.15 | Adaptador para Vercel: arma `.vercel/output` con los estáticos y una función para el endpoint y `/gracias`. 11.0.16 no se usa: salió el 2026-10-19 y la frena `minimumReleaseAge` de pnpm |
| @astrojs/sitemap | 3.7.4 | `sitemap-index.xml` + `sitemap-0.xml`; deja afuera `/gracias` y `/404` (`NOT_INDEXED` en `astro.config.mjs`) |
| tailwindcss / @tailwindcss/vite | 4.3.3 | Estilos |
| sharp | 0.35.5 | Optimización de imágenes en build |
| astro-icon | 1.2.0 | Lee `src/icons/*.svg` por nombre y los incrusta en el HTML en build (sin JS en el cliente). No declara compatibilidad con Astro 7; verificado con build. Sus tipos de nombres se generan después de `astro check`, por eso `IconName` es `string` |
| vitest | 5.0.3 | Tests unitarios (`pnpm test`), archivos `*.test.ts` junto al código |
| @astrojs/check / typescript | 0.9.10 / 6.0.3 | `astro check` en el build (TS 7 no es compatible con @astrojs/check) |

## Planeado

## Evidencia
Versiones leídas de `package.json` y `pnpm-lock.yaml` el 2026-10-05. @astrojs/vercel: versión, peer `astro ^7.0.0` y licencia MIT leídos de npm (`npm view`) el 2026-10-19. Imágenes: el log de `astro build` del 2026-10-19 muestra que sharp las sigue transformando en el build.
Build local en Windows: el adaptador falla al copiar dependencias de la función (`EPERM` al crear symlinks; Windows los permite solo con Developer Mode o como administrador). En Linux, que es donde construye Vercel, no aplica; sin verificar hasta el primer deploy.
Para medir la salida estática en Windows: una config temporal que importa `astro.config.mjs` y borra `adapter.hooks['astro:build:done']` construye sin error (u73, no se commitea). La salida queda en formato directorio (`equipo/index.html`) aunque la config dice `build.format: 'file'`; los canonical salen igual sin barra.
Indeterminado: dominio de la app para `site.registerUrl` (Q-60).
