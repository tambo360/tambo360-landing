---
target: hero
total_score: 17
max_score: 24
na_heuristics: 5,7,9,10
p0_count: 0
p1_count: 1
target_identity: "file:C:\\Users\\Joaquin\\Desktop\\projects\\tambo360\\tambo360-landing\\src\\components\\sections\\home\\Hero.astro"
target_fingerprint: "sha256:8a1b0135c68462e0a9af5c0d840eedf4f5b7fd7420da06e46ea153c36962ffc0"
target_path: "C:\\Users\\Joaquin\\Desktop\\projects\\tambo360\\tambo360-landing\\src\\components\\sections\\home\\Hero.astro"
timestamp: 2026-10-09T14-35-28Z
slug: src-components-sections-home-hero-astro
---
⚠️ DEGRADED: single-context (las instrucciones globales del usuario, NZT, prohíben delegar a subagentes; A se cerró antes de leer el detector)

Objetivo: hero de la home (`src/components/sections/home/Hero.astro`), antes y después del lanzamiento, en 1366, 390 y 320 px (Edge, build del 09/10/2026).

## Design Health Score

| # | Heurística | Puntaje | Problema principal |
|---|---|---|---|
| 1 | Visibilidad del estado | 3 | El header y la acción son claros; no hay estados que mostrar |
| 2 | Coincidencia con el mundo real | 3 | Vocabulario del tambo; la foto es de stock y muestra una tablet mientras el titular dice "en el celular" |
| 3 | Control y libertad | 3 | "Ver demo" abre otra pestaña y lo anuncia; el destino es el login de la app |
| 4 | Consistencia | 2 | Dos nombres para la acción en la misma pantalla ("Anotarme" y "Sumarme al piloto gratis"), "Ver demo" dos veces y WhatsApp dos veces |
| 5 | Prevención de errores | n/a | El hero no tiene entradas |
| 6 | Reconocer antes que recordar | 3 | Todo a la vista |
| 7 | Flexibilidad y eficiencia | n/a | Landing (Persuade) |
| 8 | Estético y minimalista | 3 | Limpio; la primera pantalla tiene 4 botones para 2 acciones, más el flotante |
| 9 | Recuperación de errores | n/a | Sin errores posibles en el hero |
| 10 | Ayuda | n/a | Landing (Persuade) |
| **Total** | | **17/24** | **Bueno (71 %)** |

## Design Specificity Verdict

Revisión: el titular es de este producto. "Todo tu tambo en el celular: ordeñe, rodeo y costos", con las tres palabras del campo en verde-cta, y la bajada dice el diferencial (la fosa sin señal) en una sola línea. El resto es el hero de cualquier SaaS: foto de stock a sangre con velo, dos botones y viñetas de confianza. La foto es la parte más genérica: un hombre con camisa a cuadros y tablet en un galpón de estabulación del hemisferio norte. No se ve fosa, ni ordeñe, ni celular, ni el cuaderno de "Del cuaderno al bolsillo".

Detector: archivo `Hero.astro`, 0 hallazgos. En el navegador, la home tiene 6 hallazgos en 1366 px y 4 en 390 px, y ninguno cae dentro del hero. `cramped-padding` son los envoltorios `display: contents` de LaunchSwitch (falso positivo; uno de ellos es el del botón del hero). `side-tab` y `kicker-above-heading` están en Story y son decisiones documentadas. `heading-rhythm` ("Tablero del tambo", "Tu rodeo, al día", 20 px arriba y 117 px abajo) sigue en la home después del arreglo de "sin señal", fuera del hero.

## Overall Impression

Es un hero correcto y legible, con el mejor texto de la página. Pierde en dos lugares. La foto no muestra la escena que promete el titular. Y antes del lanzamiento no dice qué es el piloto: el botón pide "Sumarme al piloto gratis", pero ni en el hero ni en el header aparece cuánto dura, cuándo empieza ni para cuántos tambos es. La oportunidad más grande es que la imagen cuente el "del cuaderno al bolsillo".

## What's Working

- El titular nombra los tres módulos con palabras del productor, y el verde-cta marca justo lo que se compra.
- La bajada mete el diferencial, sin señal en la fosa, en 14 palabras.
- En el celular la acción principal ocupa todo el ancho con 52 px de alto y cae en la zona del pulgar (608 px de alto en 390x844). Las viñetas bajan la objeción del pago ("Sin tarjeta").

## Priority Issues

**[P1] El botón de WhatsApp tapa la viñeta de WhatsApp en el celular** (`Hero.astro` y `WhatsAppButton.astro`)
- Por qué importa: desde que se cargó el número (Q-49), el botón flotante aparece y en 390 px se monta sobre "Te ayudamos por WhatsApp" (corta "WhatsApp"). Son dos señales de WhatsApp pegadas, y una de ellas tapa la otra.
- Arreglo: sacar la viñeta de WhatsApp del hero, que ya está el botón, o dejar aire abajo del hero en celular para que el flotante no la pise.
- Comando: /impeccable layout

**[P2] La foto no es la escena del producto**
- Por qué importa: el titular dice "en el celular" y la foto muestra una tablet, un galpón estabulado genérico y un modelo de stock. El productor de Q-04 no se reconoce, y eso va contra el principio 1 de PRODUCT.md ("reconocer su día antes de que le vendan nada").
- Arreglo: una foto propia o licenciada de una fosa o un corral de espera argentino con alguien usando el celular, o la misma composición con el celular en primer plano. Mientras tanto, el texto alternativo tiene que describir lo que se ve.
- Comando: /impeccable polish (con material nuevo)

**[P2] Antes del lanzamiento, el hero no dice qué es el piloto**
- Por qué importa: el código dejó de mostrar la nota "Lanzamiento 26/10 · piloto 3 meses gratis" (Q-47 sacó la viñeta; el Badge quedó importado sin usar y el `mt-5` del h1 es su resto). `pages.md`, en la fila 1, todavía la lista. Jordan aprieta "Sumarme al piloto gratis" sin saber qué compromiso asume ni hasta cuándo.
- Arreglo: decidir si la nota vuelve (fecha y cupo, sin "3 meses" si Q-47 lo sacó) y alinear `pages.md` con esa decisión; sacar el import y el margen sobrantes.
- Comando: /impeccable clarify

**[P3] Dos acciones con cuatro botones en la primera pantalla**
- Por qué importa: en desktop, el header ("Ver demo" y "Anotarme") repite el hero ("Sumarme al piloto gratis" y "Ver demo"), con dos verde-cta a la vista y con nombres distintos. Lo cubre la u40 (nombres de la acción).
- Arreglo: un solo nombre de la acción (u40); evaluar ocultar los botones del header mientras el hero está a la vista.
- Comando: /impeccable clarify

## Persona Red Flags

**Jordan (primera vez):** no sabe qué es "el piloto" ni qué pasa después. "Ver demo" lo deja en el login de la app sin usuario de demo a la vista (sin verificar qué muestra esa pantalla).

**Casey (celular, apurado):** el hero ocupa 745 px más el header; las viñetas quedan abajo del pliegue en 390x844 y el flotante pisa una. La acción principal sí está a mano.

**Ramón (encargado en la fosa):** ve una tablet en un galpón que no se parece al suyo; el titular le habla bien, la foto no.

## Minor Observations

- La entrada del texto (`aparecer`, opacidad 0 a 1) arranca invisible; se apaga con `prefers-reduced-motion`. Lighthouse dio 98-100, pero el H1 es candidato a LCP.
- En celular la foto (16:10) corta la cabeza cerca del header; el velo inferior funciona.
- `Badge` está importado y no se usa (astro check lo marca como aviso).

## Questions to Consider

- ¿Y si la foto mostrara un cuaderno mojado en la fosa con el celular al lado, el "del cuaderno al bolsillo" en una sola imagen?
- ¿Hace falta "Ver demo" en el hero si lleva a un login?
- ¿Qué tiene que saber alguien en 5 segundos para anotarse en el piloto: la fecha, el cupo o que es gratis?
