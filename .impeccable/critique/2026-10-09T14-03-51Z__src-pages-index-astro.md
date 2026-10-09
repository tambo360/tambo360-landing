---
target: home y preguntas frecuentes
total_score: 26
max_score: 36
na_heuristics: 7
p0_count: 0
p1_count: 2
target_identity: "file:C:\\Users\\Joaquin\\Desktop\\projects\\tambo360\\tambo360-landing\\src\\pages\\index.astro"
target_fingerprint: "sha256:e8c81ce3503b813c894a5e9e57fe9bcad703e65242047c9de2fd242b70fd51e1"
target_path: "C:\\Users\\Joaquin\\Desktop\\projects\\tambo360\\tambo360-landing\\src\\pages\\index.astro"
timestamp: 2026-10-09T14-03-51Z
slug: src-pages-index-astro
---
⚠️ DEGRADED: single-context (las instrucciones globales del usuario, NZT, prohíben delegar a subagentes; A se cerró antes de leer el detector)

Objetivo: home (`src/pages/index.astro`) + `/preguntas-frecuentes`, estado previo al lanzamiento (build del 09/10/2026), 1366 y 390 px.

## Design Health Score

| # | Heurística | Puntaje | Problema principal |
|---|---|---|---|
| 1 | Visibilidad del estado | 3 | Nav marca la sección; el form tiene estados. Sin huecos grandes |
| 2 | Coincidencia con el mundo real | 3 | Vocabulario del tambo muy bien; "Organiza tus papeles" rompe el voseo y la captura de la app dice "Dashboard" y "TamboEngine" |
| 3 | Control y libertad | 3 | Navegación simple, sin trampas |
| 4 | Consistencia | 2 | La franja "sin señal" no sigue el sistema de secciones; cinco nombres distintos para la misma acción |
| 5 | Prevención de errores | 3 | Form con pistas de formato y validación junto al campo |
| 6 | Reconocer antes que recordar | 3 | Todo a la vista |
| 7 | Flexibilidad y eficiencia | n/a | Landing (Persuade) |
| 8 | Estético y minimalista | 3 | Limpia; ruido en la franja oscura y en el índice duplicado de preguntas |
| 9 | Recuperación de errores | 3 | Errores claros con salida por WhatsApp (probado en corridas anteriores, no en esta) |
| 10 | Ayuda | 3 | Preguntas frecuentes completas; el índice repite las preguntas |
| **Total** | | **26/36** | **Bueno (72 %)** |

## Design Specificity Verdict

Revisión: las palabras son de este producto (mastitis, fosa, "hasta 40 litros", Ramón y Manuel) y los verdes de pasto también. La composición no: hero partido, lista de tarjetas con ícono, pasos numerados, grilla de funciones, acordeón y cierre oscuro es el esqueleto de cualquier landing de software. La idea central, "Del cuaderno al bolsillo", no aparece en ningún lugar visual: no hay cuaderno, papel ni contraste antes/después.

Detector (archivos): 1 hallazgo, `side-tab` en `Story.astro:31` (la barra de la cita de los 40 litros). En el navegador: home 1366 px, 6; home 390 px, 4; preguntas 390 px, 1. `side-tab` y `kicker-above-heading` ("Así nació Tambo360") son decisiones documentadas en DESIGN.md (falsos positivos). `cramped-padding` (0 px vertical, 2 en la home, 1 en preguntas) coincide con los envoltorios `display: contents` de LaunchSwitch (probable falso positivo, no verificado nodo por nodo). `heading-rhythm` en "Tablero del tambo" y "Tu rodeo, al día" (20 px arriba, 149 px abajo) es real y viene de la franja "sin señal".

## Overall Impression

Base sólida y honesta, con un pico fuerte (los 40 litros). El problema más grande es la franja "sin señal": parece a medio terminar y rompe el ritmo justo antes de la acción principal. La oportunidad más grande es que la prueba del producto, la captura de la app, no se lee.

## What's Working

- La historia de los 40 litros: cifra enorme en verde sobre el galpón, foto real, cita con nombres. Es el pico emocional y está bien construido.
- La voz: voseo, vocabulario del tambo, problemas contados como el productor los vive ("Una hoja mojada o perdida y ese día no existió").
- El sistema de color se respeta: un solo verde de acción, texto verde-900 encima, cortes de fondo entre secciones.

## Priority Issues

**[P1] La franja "sin señal" está a medio terminar** (`Offline.astro`)
- Por qué importa: no tiene titular propio (sus h3 cuelgan de "Lo que podés hacer", y el detector lo marca), los textos de cada ítem están escritos pero no se muestran, "Organiza" rompe el voseo, no usa Section ni Container (su borde izquierdo no se alinea con el resto) y suma un cuarto bloque oscuro. Además, "funciona sin señal" es el diferencial del producto y acá se ve como un pie de página.
- Arreglo: rehacerla como sección con titular y los tres ítems con su texto, en fondo claro, alineada al contenedor; o fundirla en "Cómo funciona". Corregir "Organiza" a "Organizá" (o redactarla de nuevo, con tu aprobación).
- Comando: /impeccable layout

**[P1] La captura de la app no se lee** (`HowItWorks.astro`, `tambo-engine.webp`)
- Por qué importa: es la única prueba de que el producto existe. Mide 683 px de ancho, el texto es ilegible en celular y muestra "Dashboard" y "TamboEngine", que no son vocabulario del tambo.
- Arreglo: una captura nueva de 1400 px o más, recortada a uno o dos avisos, sin términos de la lista NO. La tiene que sacar el equipo de la app.
- Comando: /impeccable polish (con el material nuevo)

**[P2] Demasiado verde oscuro y un final que se apaga**
- Por qué importa: cuatro bloques verde-900 más el footer verde-950. El cierre y el footer se leen como una sola masa oscura, y la página termina sin contraste. Contradice la Regla del Corte (DESIGN.md).
- Arreglo: pasar la franja "sin señal" a fondo claro (sale con el P1) y separar el cierre del footer con otro tratamiento: fondo claro con el botón principal, o una foto del tambo detrás del verde.
- Comando: /impeccable layout

**[P2] El índice de preguntas frecuentes repite las 13 preguntas**
- Por qué importa: en el celular ocupa más de una pantalla y abajo vienen exactamente las mismas 13 preguntas. El productor scrollea el doble para llegar a la primera respuesta.
- Arreglo: sacar el índice, o agruparlo en 3 o 4 temas (uso, datos, precio, ayuda).
- Comando: /impeccable distill

**[P3] Cinco nombres para la misma acción**
- Por qué importa: "Anotarme", "Sumarme al piloto gratis", "Anotate al piloto", "Quiero sumarme al piloto", "Sumarme al piloto". Después del 26/10 pasa a "Registrarme" y se acota solo, así que el costo dura 17 días.
- Arreglo: dos variantes como máximo (corta en el header, larga en el resto).
- Comando: /impeccable clarify

## Persona Red Flags

**Jordan (primera vez):** "Ver demo" lleva a `/iniciar-sesion` de la app. Si no hay usuario de demo a la vista, el que no tiene cuenta llega a un login y se va (sin verificar qué muestra esa pantalla).

**Casey (celular, apurado):** el formulario empieza a unos 6.000 px de alto en 390 px; la única forma rápida de llegar es el botón del header. Funciona, pero la franja oscura y la grilla de funciones están en el medio.

**Ramón (encargado, en la fosa, al sol):** la captura de la app no se lee en su celular; la franja oscura dice "No necesitás conexión a internet" sin explicar qué pasa con los datos (el texto que lo explica no se muestra).

## Minor Observations

- La foto del hero es un hombre con tablet en un galpón genérico; no se ve ni fosa ni ordeñe argentino.
- "Lo que podés hacer": solo ícono y título; la última fila queda con 20 px arriba y 149 px abajo, separada de lo que sigue por un hueco grande (heading-rhythm).
- La bajada del cierre ("Buscamos 3 tambos fundadores…") repite lo que ya dijo la sección del piloto unos párrafos antes.
- Las preguntas frecuentes no tienen el botón flotante de WhatsApp (número sin confirmar): la ayuda real es un mail.

## Questions to Consider

- ¿Y si "Del cuaderno al bolsillo" se viera de verdad: una hoja de cuaderno mojada al lado de la misma información en el celular?
- ¿La franja "sin señal" merece ser el segundo momento fuerte de la página, después de los 40 litros?
- ¿Hace falta mostrar la app, o alcanza con un aviso grande y legible en lugar de la pantalla entera?
