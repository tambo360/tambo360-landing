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
| Hosting | Cloudflare Workers + assets estáticos (QT-03) | 2026-10 |
| Persistencia | Cloudflare D1 (QT-02) | 2026-10 |
| Imágenes | `astro:assets` con optimización en build (QT-06) | 2026-10 |
| Tipografía | Figtree variable, archivo latino autoalojado en `public/fonts` (OFL) | 2026-10 |
| Iconos | Tabler Icons outline (MIT) descargados como SVG en `src/icons/`, renderizados inline en build con astro-icon 1.2.0 | 2026-10 |
| Sesiones | desactivadas (`session: false`): sin esto el adaptador exige un KV | 2026-10 |
| Tests | Vitest 5.0.3, entorno node (QT-12) | 2026-10 |

## Opt-ins
- **Niveles de test:** unitario: sí, para la lógica de `src/lib` (validación, normalización del teléfono, guardado con una D1 simulada) · integración contra el motor real: no — el endpoint contra D1 local se verifica en la fase de verificación con `astro preview` · contenedores efímeros: no · API en proceso: no.
- **Test primero:** no.
- **Tests end-to-end automatizados:** no. La verificación es build + Lighthouse + revisión manual.
- **Datos de test:** D1 local de wrangler (`--local`), cargado por el agente cuando haga falta.

## Convenciones
- `src/components/ui/`: piezas reutilizables sin contenido de negocio (Button, Input, Select, Checkbox, Container, Section, Badge, Icon, Modal).
- `src/components/sections/`: secciones de página con contenido; cada una recibe sus datos de `src/content/` o de props.
- `src/components/layout/`: Header, Footer, WhatsAppButton, SEO.
- `src/layouts/`: BaseLayout (html, head, SEO) y LegalLayout.
- `src/pages/`: una ruta por archivo; `src/pages/api/` solo endpoints.
- `src/content/` y `src/data/`: textos y datos (FAQ, módulos, equipo) separados de la maquetación.
- `src/config/site.ts`: dominio, WhatsApp, email, redes, URL de la demo. Nada de esto se repite en otro lugar.
- `src/lib/`: lógica sin UI (validación de la inscripción, acceso a D1), con sus tests `*.test.ts` al lado.
- Imágenes de contenido en `src/assets/` (las optimiza el build); en `public/` solo favicon, OG y robots.

## Paquetes
| Paquete | Versión | Por qué está |
|---|---|---|
| astro | 7.3.5 | Framework |
| @astrojs/cloudflare | 14.3.3 | Adaptador para Workers y acceso a D1 |
| @astrojs/sitemap | 3.7.4 | sitemap.xml |
| tailwindcss / @tailwindcss/vite | 4.3.3 | Estilos |
| wrangler | 4.147.0 | D1 local, migraciones y deploy (peer del adaptador: ^4.125.0) |
| sharp | 0.35.5 | Optimización de imágenes en build |
| astro-icon | 1.2.0 | Lee `src/icons/*.svg` por nombre y los incrusta en el HTML en build (sin JS en el cliente). No declara compatibilidad con Astro 7; verificado con build. Sus tipos de nombres se generan después de `astro check`, por eso `IconName` es `string` |
| vitest | 5.0.3 | Tests unitarios (`pnpm test`), archivos `*.test.ts` junto al código |
| @astrojs/check / typescript | 0.9.10 / 6.0.3 | `astro check` en el build (TS 7 no es compatible con @astrojs/check) |

## Planeado

## Evidencia
Versiones leídas de `package.json` y `pnpm-lock.yaml` el 2026-10-05. API de bindings e image service: docs.astro.build/en/guides/integrations-guide/cloudflare/ y developers.cloudflare.com/d1/get-started/, leídos el 2026-10-05.
Indeterminado: dominio (QT-11).
