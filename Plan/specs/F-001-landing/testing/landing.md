# F-001 · Verificación de la landing

Las historias US-001..US-004 están indexadas en el spec pero no se escribieron (fuera del plan), así que los escenarios se derivan de las reglas y los NFR del spec. Estado del vocabulario cerrado: `pending`, `passed`, `failed`, `blocked`.

**Objetivos y herramientas:** endpoint `/api/inscripcion` con curl contra `astro preview` (workerd + D1 local); pantallas con Playwright sobre Microsoft Edge (headless); calidad con Lighthouse 13.5.0 en modo móvil sobre el build de producción.
**Datos:** D1 local de wrangler, filas creadas por los propios escenarios y borradas al final (5 filas → 0). Sin datos remanentes.

## Ejecución 2026-10-05

| # | Escenario | Objetivo | Esperado | Resultado | Estado |
|---|---|---|---|---|---|
| 1 | Alta con todos los datos (`+54 9 343 456-7890`, Entre Ríos, 100–300) | API | 201 `ok`, fila guardada con fecha | 201 `ok`; fila con teléfono `3434567890` y `creado_en` | passed |
| 2 | Mismo número escrito distinto (`03434567890`) | API | `repetido`, sin fila nueva | 200 `repetido`; sigue 1 fila | passed |
| 3 | Nombre de 1 letra, teléfono corto, rol fuera de lista, sin aceptar | API | 422 con un error por campo | 422 con 4 errores (nombre, teléfono, rol, aceptación) | passed |
| 4 | Envío sin JavaScript | API | 303 a `/gracias?estado=ok` | 303 → `/gracias?estado=ok` | passed |
| 5 | Bot completa el campo trampa | API | Respuesta de éxito, nada guardado | 200 `ok`; 0 filas del bot | passed |
| 6 | La base no responde (tabla renombrada) | API | 500 `error`, nunca éxito | 500 `error`; error registrado en el log | passed |
| 7 | POST sin cabecera Origin (otro sitio) | API | Rechazado | 403 (protección CSRF de Astro) | passed |
| 8 | GET al endpoint | API | 405 | 405 | passed |
| 9 | Enviar vacío desde el navegador | Pantalla 390 px | Resumen de errores, foco en el primer campo, error junto al campo | "Faltan corregir 3 datos…", foco en `nombre`, `aria-invalid`, error de WhatsApp junto al campo | passed |
| 10 | Alta desde el navegador | Pantalla 390 px | Mensaje de éxito visible y enfocado | "¡Listo, ya estás anotado!" centrado en pantalla y enfocado (`form-ok-390.png`) | passed |
| 11 | Repetido desde el navegador | Pantalla 390 px | Mensaje "Ya estabas en la lista" | visible | passed |
| 12 | `/gracias?estado=repetido` y `estado=error` | Pantalla (HTML) | Mensaje correcto, `noindex` | título correcto, `noindex, follow` | passed |
| 13 | Botón flotante sin número confirmado | Pantalla | No aparece | No se renderiza (número vacío en `site.ts`) | passed |
| 14 | Botón flotante con número cargado | Pantalla | Aparece y abre WhatsApp | No ejecutado: no hay número confirmado | blocked — falta el número (Q-30) |
| 15 | Sin desborde horizontal en celular | Pantalla 390 px | `scrollWidth = innerWidth` | 0 px de desborde en home y FAQ (`home-390.png`) | passed |
| 16 | Lighthouse móvil ≥ 95 en las 4 categorías | 4 páginas | ≥ 95 | home 99/100/100/100 · FAQ, privacidad, términos 100/100/100/100 | passed |
| 17 | Contraste AA | 4 páginas | Sin fallas | Auditoría de contraste de Lighthouse sin fallas (accesibilidad 100) + pares calculados en `Docs/design-system.md` | passed |
| 18 | Preview en redes | 6 páginas | og:title/description/image/url + twitter card en todas | Todas las meta presentes; imagen 1200×630 de 98 KB | passed |
| 19 | Indexación | build | robots.txt con sitemap; sitemap sin `/gracias` ni `/404`; un `h1` por página; JSON-LD válido | Todo como se esperaba; FAQPage con 13 preguntas | passed |
| 20 | Enlaces que abren otra pestaña con `rel=noopener` | build | 0 sin `noopener` | 1 sin `noopener` (enlace a privacidad del formulario) → corregido en el código y re-verificado en el build | passed (tras corregir) |

## Métricas (home, móvil, Lighthouse)
LCP 2,1 s · CLS 0 · TBT 0 ms · 265 KiB transferidos en 9 pedidos. Detalle en `evidence/2026-10-05/lighthouse-*.json`.

## Sin escenario
- Navegación solo con teclado de punta a punta: se verificó el foco en el formulario (escenario 9) y la auditoría de Lighthouse, pero no un recorrido completo con Tab. No ejecutado.
- Lectores de pantalla reales (NVDA, VoiceOver): no ejecutado.
- Previsualización real en WhatsApp/Facebook/LinkedIn: requiere el sitio publicado en su dominio. No ejecutado.
- Safari y Firefox: solo se probó con Edge (Chromium).

## Defectos
Ninguno abierto. El escenario 20 se corrigió en la misma corrida; queda registrado arriba.

## Ejecución 2026-10-06 — después de los ajustes (datos disociados, marca nueva, Vitest)

| # | Escenario | Objetivo | Esperado | Resultado | Estado |
|---|---|---|---|---|---|
| 21 | Tests unitarios | `src/lib` | Todos en verde, y fallan si se rompe el código | 17/17 (`vitest.txt`). Rompiendo a propósito el reconocimiento de repetido y la normalización del teléfono, fallan 3; restaurado, 17/17 | passed |
| 22 | Alta, repetido con otro formato e inválido | API | 201 `ok` · 200 `repetido` · 422 con errores | 201 · 200 · 422 con 3 errores | passed |
| 23 | Alta y repetido desde el navegador | Pantalla 390 px | Éxito visible y enfocado; "Ya estabas en la lista"; 1 sola fila | Como se esperaba; 1 fila en D1 | passed |
| 24 | Marca nueva en header y footer | Pantalla 1366 y 360 px | Isotipo + "Tambo" + "360" verde; nombre accesible "Tambo360" | Correcto (`marca-header-footer-movil.png`); nombre del enlace "Tambo360" | passed |
| 25 | Sin desborde ni texto cortado | Pantalla 320/360/390 px | 0 px de desborde, ningún elemento fuera de pantalla | 0 en los tres anchos (antes: header +27 px a 360 y +24 px a 320, y "Hasta 40 litros" cortado; corregido) | passed (tras corregir) |
| 26 | Lighthouse móvil ≥ 95 | 4 páginas | ≥ 95 | Primera corrida: buenas prácticas 96 (isotipo servido a baja resolución). Corregido con 2x/3x → home 98/100/100/100; FAQ, privacidad y términos 100/100/100/100 | passed (tras corregir) |
| 27 | Legales con datos disociados | HTML | Privacidad §4 y §6 y términos §6 lo dicen | Presente en las dos páginas | passed |
| 14 | Botón flotante con número | Pantalla | Aparece y abre WhatsApp | Sin número todavía | blocked — falta el número (Q-30) |

Datos: D1 local vaciada al terminar (0 filas). Los defectos de las filas 25 y 26 se corrigieron en esta misma corrida y se volvieron a verificar; quedan registrados acá.

## Ejecución 2026-10-06 — indicador de sección activa en el nav

Playwright sobre Edge headless contra `astro preview` del build de producción. Salida completa en `evidence/2026-10-06/nav-indicador.txt` (21 PASS, 0 FAIL).

| # | Escenario | Objetivo | Esperado | Resultado | Estado |
|---|---|---|---|---|---|
| 28 | Clic en cada enlace de sección | Pantalla 1366 px | Se marca solo ese enlace | Cómo funciona, Qué podés hacer y Quiénes somos: uno solo marcado cada vez (`nav-desktop-seccion.png`) | passed |
| 29 | Fuera de las secciones del nav | Pantalla 1366 px | Nada marcado en hero, sin señal, piloto ni dudas | Nada marcado en los cuatro | passed |
| 30 | Entrada directa a `/#como-funciona` | Pantalla 1366 px | Marcado "Cómo funciona" | Correcto | passed |
| 31 | Página de preguntas | Pantalla 1366 y 390 px | Solo "Preguntas" con `aria-current="page"` y barra visible | Correcto (`nav-desktop-faq.png`, `nav-movil-faq.png`) | passed |
| 32 | Menú del celular | Pantalla 390 px | Marca la sección en pantalla con barra lateral; no cambia al abrir el menú; sin desborde | Primera corrida: al abrir el menú el header empuja la página y la marca saltaba a la sección anterior. Corregido (la marca no se recalcula con el menú abierto) → correcto (`nav-movil-seccion.png`) | passed (tras corregir) |
| 33 | Sin JavaScript | Pantalla 1366 px | Home sin marca; preguntas con `aria-current="page"` | Correcto | passed |
| 34 | Build y tests unitarios | build | `astro check` sin errores; 17/17 | 0 errores, 0 avisos; 17/17 | passed |

No ejecutado en esta corrida: Lighthouse (el cambio es un script chico en el header), Safari/Firefox y lectores de pantalla reales.

## Ejecución 2026-10-06 — H1 de la home alineado al contenido (Q-41)

| # | Escenario | Objetivo | Esperado | Resultado | Estado |
|---|---|---|---|---|---|
| 35 | H1, `<title>`, og:title y twitter:title | build | Nuevo titular y título de Q-41 | H1 "Todo tu tambo en el celular: ordeñe, rodeo y costos"; los tres títulos "Tambo360 · Ordeñe, rodeo y costos de tu tambo en el celular" | passed |
| 36 | Palabras del H1 en la página | build | Las palabras del titular aparecen en el contenido | tambo 29 · rodeo 6 · ordeñe 5 · celular 5 (antes: manejo 1 · alcance 1 · mano 1) | passed |
| 37 | Titular sin desborde | Pantalla 320/360/390/768/1366 px | 0 px de desborde, un solo `h1` | 3 líneas en todos los anchos, 0 px de desborde (`hero-h1-390.png`, `hero-h1-1366.png`) | passed |
| 38 | Build y tests unitarios | build | 0 errores; 17/17 | 0 errores, 0 avisos; 17/17 | passed |

No ejecutado: Lighthouse y volver a pasar la herramienta SEO que dio el aviso.


## Ejecución 2026-10-09 — Registro desde el lanzamiento (Q-46, RN-desde-lanzamiento)

Edge (Playwright) contra `dist/client` servido local, con el reloj del navegador fijado. Capturas en `evidence/2026-10-09/`.

| # | Escenario | Objetivo | Esperado | Resultado | Estado |
|---|---|---|---|---|---|
| 39 | Borde de la fecha | `isLaunched` | 25/10 23:59 AR = no lanzado; 26/10 00:00 AR = lanzado | false / true (`launchTime` 1792983600000 = 26/10 03:00 UTC) | passed |
| 40 | Antes del lanzamiento | Home y preguntas, 320/390/1366 px | Todo igual que hoy: "Anotarme", sección y formulario del piloto, 0 enlaces a /registrarse | Igual que hoy, 0 enlaces a /registrarse, sin desborde | passed |
| 41 | Desde el lanzamiento | Home y preguntas, 320/390/1366 px | Ninguna línea visible con piloto/fundadores/anotarse/3 meses; formulario oculto; header, hero, cierre y footer a /registrarse | 0 líneas del piloto; formulario oculto; 4 enlaces visibles en home, 3 en preguntas; sin desborde | passed |
| 42 | Sin JavaScript, después del 26/10 | Home y preguntas | Se ve la versión del piloto (decisión de diseño) | Versión del piloto, 0 enlaces a /registrarse | passed |
| 43 | Build posterior al lanzamiento | `launchDate` puesto el 01/10 solo para la prueba, restaurado después | HTML sin script ni versión del piloto; meta description, og:image:alt y JSON-LD con los textos nuevos | `data-launched` en `<html>`, 0 script, 0 "piloto" en index y preguntas; metas y JSON-LD nuevos | passed |
| 44 | Build y tests unitarios | build | `astro check` sin errores; 18/18 | 0 errores, 0 avisos; 18/18 | passed |

Primera corrida de la fila 41: faltaba el espacio en "antes de anotarse" (intro de preguntas). Corregido y vuelto a probar.
No ejecutado: Lighthouse, Safari/Firefox, lectores de pantalla reales. `/privacidad` y `/terminos` siguen mencionando el piloto (fuera del alcance de Q-46).

## Ejecución 2026-10-09 (2) — Viñetas del hero (Q-47)

| # | Escenario | Objetivo | Esperado | Resultado | Estado |
|---|---|---|---|---|---|
| 45 | Viñetas antes y después del lanzamiento | Hero, 320/390/1366 px | Solo "Sin tarjeta" y "Te ayudamos por WhatsApp", con sus íconos; sin desborde | Esas dos en las 6 combinaciones, sin desborde (`hero-vinetas-*.png`); check 0 errores, build ok | passed |

## Ejecución 2026-10-09 (3) — Sección "sin señal" (Q-48)

| # | Escenario | Objetivo | Esperado | Resultado | Estado |
|---|---|---|---|---|---|
| 46 | Sección "sin señal" rediseñada | Home `#sin-senal`, 320/390/1366 px, Edge | h2 propio, 3 ítems con texto, foto sin la montaña en desktop, alineada al contenedor, sin desborde | h2 a 139/16/16 px igual que "Qué podés hacer"; overflow 0 en los tres anchos; foto 416/195/160 px de alto (`sin-senal-*.png`); detector 0 hallazgos; check 0 errores, build ok | passed |

Observación: en celular (2:1) asoma la base de la montaña de la foto (no es paisaje de cuenca lechera argentina); en desktop queda recortada.

## Ejecución 2026-10-09 (4) — Viñeta de WhatsApp fuera del hero (Q-50)

| # | Escenario | Objetivo | Esperado | Resultado | Estado |
|---|---|---|---|---|---|
| 47 | Hero sin viñeta de WhatsApp, antes y después del lanzamiento | Hero, 320/390/1366 px, Edge | Solo "Sin tarjeta"; el botón flotante no tapa ninguna viñeta; sin desborde | Solo "Sin tarjeta" en las 6 capturas (`hero-sin-whatsapp-*.png`); overflow 0; check 0 errores, build ok | passed |

Hallazgo nuevo (fuera de Q-50): en 320x640 el botón flotante de WhatsApp tapa la flecha de "Sumarme al piloto gratis" en la primera pantalla. Existe desde que se cargó el número (Q-49).

## Ejecución 2026-10-09 (5) — Botón flotante de WhatsApp más chico en celular

| # | Escenario | Objetivo | Esperado | Resultado | Estado |
|---|---|---|---|---|---|
| 48 | Flotante en celular: solo ícono, 48 px, a 8 px de la esquina | Home, 320x640, 360x640, 390x844, 1366x768, Edge | Objetivo táctil de 44 px o más; tapa menos el botón principal; desktop igual que antes ("Escribinos") | 48x48 en celular, 145x56 con texto en desktop; en 390x844 y 1366 no pisa nada; en 320x640 y 360x640 todavía tapa 40 px del extremo derecho de "Sumarme al piloto gratis" (se ve el texto, la flecha queda debajo) (`whatsapp-flotante-*.png`); check 0 errores | passed (con superposición residual, decisión del usuario) |


## Ejecución 2026-10-09 (6) — Cierre separado del footer (u38)

| # | Escenario | Objetivo | Esperado | Resultado | Estado |
|---|---|---|---|---|---|
| 49 | Cierre en fondo claro antes del footer oscuro | Home 320/390/1366, `/equipo` 390/1366, `/preguntas-frecuentes` 390 (fecha simulada 27/10), Edge | Cierre verde-025 con titular tinta y botón verde-cta; corte nítido contra el footer; home con 2 bloques verde-900; sin desborde | Así en las 6 capturas (`cierre-claro-*.png`), post-lanzamiento muestra "Registrarme gratis"; overflow 0; detector 0 hallazgos; build ok | passed |
| 50 | `/preguntas-frecuentes` sin el índice duplicado | 390/1366 px, Edge | Intro y las 13 preguntas cerradas directo; `#precio` abre su respuesta; sin desborde | Así (`faq-sin-indice-*.png`, `faq-hash-precio-390.png`); overflow 0; build ok | passed |
| 51 | La acción pre-lanzamiento con dos nombres | Código + home 390/1366, Edge | "Anotarme" solo en el header; "Sumarme al piloto gratis" en hero, formulario, cierre y footer; el título del formulario ya no repite la acción | Así (`grep` en `src`, `accion-dos-nombres-*.png`); título del form "Tus datos"; 18 tests, check 0 errores, build ok; overflow 0 | passed |
| 52 | `/equipo`: intro y grilla con el mismo margen; fotos sin alt repetido | 390/1366 px, Edge + HTML del build | Borde izquierdo del h1 igual al de la grilla; fotos con `alt` vacío (el nombre ya está debajo); sin desborde | h1 y grilla en el contenedor ancho (`equipo-un-margen-*.png`); 12 `img` con `alt` vacío; overflow 0; build ok | passed |
| 53 | `/equipo`: fotos en blanco y negro (Q-51 c) | 390/1366 px, Edge | Las 12 fotos en escala de grises con el mismo tratamiento; sin desborde | Así (`equipo-byn-*.png`), filtro CSS `grayscale` (se quita cuando lleguen fotos nuevas); el aro pasa a gris claro; overflow 0; build ok | passed |

Pendiente del equipo (u50): 4 fotos por debajo de 352 px (lo que pide el 2x de 176 px): Cintia Duarte, Facundo Fernández y Nicolás Mansilla (200 px), Juan Meza (210 px). Pedirlas de 400 px o más.

## Ejecución 2026-10-09 (7) — Verificación u22 (home y `/equipo`)

| # | Escenario | Objetivo | Esperado | Resultado | Estado |
|---|---|---|---|---|---|
| 54 | Build, check y tests | repo | 0 errores, tests verdes | check 0 errores (1 aviso: `Badge` sin uso en Hero, lo saca u46); 18 tests passed; build ok | passed |
| 55 | Head y datos estructurados | HTML del build de `/` y `/equipo` | title, description, og:*, twitter:*, canonical, un h1, JSON-LD válido, imágenes con alt | Todo presente; JSON-LD Organization+WebSite y AboutPage parsean; 1 h1 por página; 0 `img` sin alt; `/equipo` en el sitemap | passed |
| 56 | Página entera sin desborde, antes y después del lanzamiento | `/` y `/equipo` 390/1366, home 390 con fecha 27/10, Edge | overflow 0; secciones en orden | overflow 0 en las 5 (`u22-*.png`) | passed |

Observación: en las capturas de página entera la figura de "Cómo funciona" y la foto de "sin señal" salen vacías; en el navegador cargan (`complete`, 683 y 1366 px de ancho) y por elemento se ven. Es un límite de la captura de página completa en Edge, no del sitio.

## Ejecución 2026-10-15 — Paleta de la app (u52-u55, Q-52)

| # | Escenario | Objetivo | Esperado | Resultado | Estado |
|---|---|---|---|---|---|
| 57 | Build, check y tests con la paleta nueva | repo | 0 errores, tests verdes | check 0 errores (1 aviso de antes: `Badge` sin uso); 18 tests passed; build ok | passed |
| 58 | Botón principal con el verde de la app | `/`, `/preguntas-frecuentes`, `/equipo` a 390/1366, Edge | Fondo `#29845A` y texto blanco (4.62:1) | Estilo calculado `rgb(41,132,90)` / `rgb(255,255,255)` en las 6 vistas (`paleta-app-*.png`) | passed |
| 59 | Secciones claras en blanco, sin desborde | ídem | Sin fondos verdes de sección; secciones blancas seguidas separadas por borde; overflow 0 | Fondos de sección solo blanco y verde-900; overflow 0 en las 6; foto de "sin señal" vacía solo en la captura de página entera, carga por elemento (`paleta-app-home-sin-senal-1366.png`) | passed |
| 60 | Cajas de ícono claras (u55) | Home y `/equipo` 1366 | verde-050 con ícono verde-enlace (6.36:1) | Así (`paleta-app-home-iconos-1366.png`, `paleta-app-equipo-1366.png`); aceptado por el usuario | passed |

Hallazgo: en `/equipo` quedó un hueco blanco grande entre la intro y la grilla del equipo (~130 px a 1366). Antes la intro tenía fondo verde-025 y el corte de color justificaba el doble padding; con las dos en blanco sobra. Pendiente de decisión.
