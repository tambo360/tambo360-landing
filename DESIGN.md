---
name: Tambo360 · landing
description: Del cuaderno al bolsillo. Ordeñe, rodeo y costos del tambo en el celular.
colors:
  verde-cta: "#80b718"
  verde-check: "#99c545"
  verde-nav: "#669213"
  verde-enlace: "#4d7a10"
  verde-100: "#cfedba"
  verde-050: "#e9faca"
  verde-025: "#f7ffe6"
  verde-010: "#f3ffe2"
  verde-900: "#1c2a1c"
  verde-950: "#121c12"
  blanco: "#ffffff"
  gris-025: "#fafbfb"
  gris-050: "#f1f5f9"
  gris-100: "#e8eaed"
  borde-neutro: "#dee0e3"
  borde-verde: "#e0e8dc"
  tinta: "#101828"
  texto: "#475569"
  error: "#b42318"
  whatsapp: "#25d366"
typography:
  display:
    fontFamily: "Figtree, system-ui, -apple-system, Segoe UI, Helvetica, Arial, sans-serif"
    fontSize: "3.5rem"
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Figtree, system-ui, -apple-system, Segoe UI, Helvetica, Arial, sans-serif"
    fontSize: "2.5rem"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Figtree, system-ui, -apple-system, Segoe UI, Helvetica, Arial, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 700
    lineHeight: 1.4
  bajada:
    fontFamily: "Figtree, system-ui, -apple-system, Segoe UI, Helvetica, Arial, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "Figtree, system-ui, -apple-system, Segoe UI, Helvetica, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Figtree, system-ui, -apple-system, Segoe UI, Helvetica, Arial, sans-serif"
    fontSize: "15px"
    fontWeight: 600
    lineHeight: 1.4
rounded:
  md: "8px"
  lg: "16px"
  xl: "24px"
  full: "9999px"
spacing:
  gutter-sm: "16px"
  gutter-md: "24px"
  gutter-lg: "32px"
  seccion-sm: "64px"
  seccion-md: "80px"
  seccion-lg: "96px"
components:
  button-primary:
    backgroundColor: "{colors.verde-cta}"
    textColor: "{colors.verde-900}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "0 20px"
    height: "44px"
  button-primary-hover:
    backgroundColor: "{colors.verde-check}"
    textColor: "{colors.verde-900}"
  button-primary-lg:
    backgroundColor: "{colors.verde-cta}"
    textColor: "{colors.verde-900}"
    rounded: "{rounded.md}"
    padding: "0 24px"
    height: "52px"
  button-secondary:
    backgroundColor: "{colors.verde-050}"
    textColor: "{colors.verde-enlace}"
    rounded: "{rounded.md}"
    padding: "0 20px"
    height: "44px"
  button-secondary-hover:
    backgroundColor: "{colors.verde-100}"
    textColor: "{colors.verde-enlace}"
  button-ghost-dark:
    textColor: "{colors.blanco}"
    rounded: "{rounded.md}"
    padding: "0 24px"
    height: "52px"
  input:
    backgroundColor: "{colors.blanco}"
    textColor: "{colors.tinta}"
    rounded: "{rounded.md}"
    padding: "0 16px"
    height: "48px"
  card-suave:
    backgroundColor: "{colors.verde-025}"
    textColor: "{colors.texto}"
    rounded: "{rounded.lg}"
    padding: "20px"
  badge:
    backgroundColor: "{colors.verde-050}"
    textColor: "{colors.verde-enlace}"
    rounded: "{rounded.full}"
    padding: "4px 12px"
---

# Design System: Tambo360 · landing

Valores normativos: el frontmatter de este archivo, que refleja `src/styles/global.css` (`@theme`). Si cambia
un valor, se cambia en los dos. Los pares de contraste calculados y la forma de cumplir accesibilidad viven en
`Docs/design-system.md`.

## Overview

**Creative North Star: "Del cuaderno al bolsillo"**

La landing muestra un cambio concreto: lo que hoy se anota en un cuaderno mojado pasa al celular, ordenado. El
diseño se pone al servicio de esa claridad práctica. El campo real va de fondo (fotos de tambo a sangre, verdes
de pasto, el verde casi negro del galpón) y adelante va lo que el productor hace y obtiene, dicho en grande y sin
vueltas.

La densidad es baja y el ritmo, de corte: secciones anchas que alternan blanco, verde muy claro y verde oscuro,
con mucho aire entre bloques. La audacia se gasta en un solo lugar por página (en la home, la franja oscura de
la historia con la cifra de los 40 litros); el resto es sobrio y respira. Todo tiene que leerse en un celular de
gama media al sol de la fosa.

Rechazos confirmados: nada de fondos de "startup" (degradados violetas, glassmorphism, ilustraciones 3D), nada
de etiquetas en mayúsculas encima de cada titular, nada que se esconda esperando el scroll.

**Key Characteristics:**
- Fotos reales de tambo, nunca ilustraciones ni ganado de carne.
- Cortes de color entre secciones en lugar de sombras o adornos.
- Un solo verde de acción (verde-cta) con texto verde-900 encima.
- Tipografía redondeada y gruesa en los titulares, cómoda en el cuerpo.
- Objetivos táctiles grandes: se usa con guantes o con las manos mojadas.

## Colors

Verdes de pasto sobre blanco, con un verde casi negro para los momentos que tienen que pegar.

### Primary
- **Verde Pasto Nuevo** (verde-cta): la acción principal y nada más. Fondo de botones principales, y sobre
  verde-900 las cifras y palabras clave. Siempre con texto verde-900 encima, nunca blanco.
- **Verde Brote** (verde-check): el hover del botón principal y los tildes.
- **Verde Lote** (verde-enlace): todo texto de enlace sobre fondo claro, el anillo de foco y la marca de sección
  activa del nav.
- **Verde Potrero** (verde-nav): reservado a la marca; no se usa para texto sobre claro.

### Secondary
- **Verde Galpón** (verde-900): las superficies de corte con texto blanco encima. En la home: hero, la
  historia y el cierre.
- **Verde Noche** (verde-950): el footer, un paso más profundo que el galpón.

### Neutral
- **Rocío** (verde-025) y **Rocío Tenue** (verde-010): fondos suaves para alternar secciones y tarjetas.
- **Brote Pálido** (verde-050) y **Brote Claro** (verde-100): fondo y hover de la acción secundaria, insignias.
- **Tinta de Libreta** (tinta): titulares y etiquetas.
- **Pizarra** (texto): párrafos y bajadas.
- **Bordes de Alambrado** (borde-verde, borde-neutro): separadores de 1 px, tarjetas y campos.
- **Grises de Oficina** (gris-025, gris-050, gris-100): cajas neutras como el índice de preguntas.
- **Rojo Alerta** (error): solo errores, siempre con texto e ícono.
- **Verde WhatsApp** (whatsapp): solo el botón flotante, con ícono verde-900.

### Named Rules
**La Regla del Verde Único.** verde-cta es la acción principal: aparece en un solo botón por bloque visual y,
sobre oscuro, en una sola cifra o palabra por bloque. Si dos cosas son verde-cta, una sobra.

**La Regla del Blanco Prohibido.** Nunca texto blanco sobre verde-cta (2.41:1) ni sobre verde-nav (3.69:1).
Sobre verde-cta va verde-900.

**La Regla del Corte.** Dos secciones seguidas nunca comparten fondo; se alterna blanco, verde claro y
verde-900. Diferencia abierta (09/10/2026): `Docs/design-system.md` pide verde-900 en una o dos secciones por
página y la home hoy tiene tres (hero, historia, cierre; "sin señal" pasó a fondo claro el 09/10/2026, Q-48).
Se baja en u38.

## Typography

**Display Font:** Figtree (con system-ui, Segoe UI, Helvetica, Arial)
**Body Font:** Figtree (la misma familia variable, 300 a 900)

**Character:** una sola familia geométrica y redondeada, autoalojada. Gruesa y apretada en los titulares para que
se lea de un vistazo; abierta y cómoda en el cuerpo para leer al sol.

### Hierarchy
- **Display** (800, 2.25 rem en celular a 3.5 rem en desktop, 1.08): solo el H1 del hero.
- **Headline** (800, 1.875 rem en celular, 2.5 rem desde 640 px, 1.15): titulares de sección, en oración, sin
  punto final, dos líneas como máximo. El H1 de las páginas internas sube a 2.75 rem.
- **Title** (700, 1.125 rem): títulos de tarjetas, pasos y preguntas.
- **Bajada** (400, 1.125 rem, 1.6): la línea debajo de cada titular, una sola idea, hasta 42 rem de ancho.
- **Body** (400, 1 rem, 1.625): párrafos; la prosa legal y de preguntas se limita a 48 rem de ancho.
- **Label** (600, 15 px): etiquetas de formulario, botones y enlaces del nav.

### Named Rules
**La Regla de la Cifra.** Los números van en cifra ("40 litros", "3 pasos") y, cuando son el punto, en
display sobre oscuro en verde-cta. Sin emoji.

## Layout

Columna central de 72 rem como máximo (48 rem para lectura), con márgenes laterales de 16, 24 y 32 px según el
ancho. Las secciones tienen 64 px de aire arriba y abajo en celular, 80 px desde 640 px y 96 px desde 1024 px.
Desde 1024 px las secciones de contenido pasan a dos columnas (texto y foto, o título a la izquierda y lista a
la derecha); en celular todo va a una columna, el texto primero. Encabezados a la izquierda; centrado solo en el
cierre. El hero es la única foto a sangre con el texto encima, siempre detrás de un velo oscuro que nace a la
izquierda.

### Named Rules
**La Regla de la Pantalla Completa.** Nada se oculta esperando el scroll: una captura de la página entera tiene
que mostrar todo. El único movimiento es la entrada del texto del hero y los hover, y se apaga con
`prefers-reduced-motion`.

## Elevation & Depth

Plano por defecto. La profundidad sale del color de fondo (tarjetas verde-025 sobre blanco, bloques verde-900
entre secciones claras) y de bordes de 1 px, no de sombras. La única sombra es la del botón flotante de
WhatsApp, que tiene que despegarse de cualquier fondo.

### Named Rules
**La Regla del Alambrado.** Para separar, un borde de 1 px o un cambio de fondo; una sombra nunca.

## Shapes

Esquinas suavemente redondeadas: 8 px en botones, campos e íconos en caja; 16 px en tarjetas; 24 px en fotos y
en la caja del formulario; píldora completa en insignias, botón flotante y botones de ícono. Las citas del
tambero llevan una barra verde-cta de 4 px a la izquierda, como marca de cita, no como tarjeta.

## Components

Firmes y francos: grandes, fáciles de tocar, sin sombras ni efectos.

### Buttons
- **Shape:** esquinas suaves (8 px), alto mínimo de 44 px (52 px en la versión grande).
- **Primary:** verde-cta con texto verde-900, 600 de peso; flecha a la derecha cuando lleva a otra parte.
- **Hover / Focus:** el fondo pasa a verde-check; foco con anillo Verde Lote (verde-enlace) de 2 px a 2 px de distancia
  (verde-cta sobre oscuro).
- **Secondary:** verde-050 con texto verde-enlace ("Ver demo"); hover verde-100. Nunca más llamativo que el
  principal.
- **Ghost sobre oscuro:** borde blanco al 40 % y texto blanco, solo sobre verde-900.
- Si abre otra pestaña, lo anuncia al lector de pantalla.

### Chips
- **Insignias:** píldora verde-050 con texto verde-enlace sobre claro; sobre oscuro, blanco al 10 % con un aro
  blanco al 25 %.

### Cards / Containers
- **Corner Style:** 16 px; la caja del formulario y las figuras, 24 px.
- **Background:** verde-025 sobre blanco; blanco sobre verde-025.
- **Shadow Strategy:** ninguna (ver Elevation & Depth).
- **Border:** 1 px borde-verde.
- **Internal Padding:** 20 px; el formulario, 24 a 32 px.
- **Ícono en caja:** 44 a 48 px, esquinas de 8 px, verde-900 con ícono verde-cta (o al revés).

### Inputs / Fields
- **Style:** fondo blanco, borde de 1 px borde-neutro, esquinas de 8 px, 48 px de alto, texto de 16 px.
- **Focus:** el borde pasa a verde-enlace con un halo verde-enlace al 30 %.
- **Error:** borde rojo alerta con halo, mensaje con ícono debajo del campo; obligatorios con asterisco rojo.

### Navigation
- **Header:** blanco al 95 % con desenfoque, borde inferior borde-verde, 72 px de alto, fijo arriba. Enlaces en
  tinta, 15 px, 500 de peso; hover con fondo verde-025 y texto verde-enlace; la página o sección actual en
  verde-enlace con una barra de 2 px debajo. A la derecha, la acción secundaria y la principal.
- **Celular:** menú desplegable debajo del header, enlaces de 48 px de alto, actual con barra de 3 px a la
  izquierda; la acción principal queda siempre visible al lado del botón del menú.

### Preguntas desplegables (Accordion)
Pregunta en title con un círculo verde-050 que gira su flecha al abrir; separadas por un borde de 1 px. Se
abren solas cuando se llega con `#id`.

## Do's and Don'ts

### Do:
- **Do** usar verde-cta solo para la acción principal y para una cifra por bloque sobre verde-900.
- **Do** alternar el fondo de cada sección (blanco, verde-025 o verde-010, verde-900).
- **Do** mantener objetivos táctiles de 44 px o más.
- **Do** declarar ancho y alto de cada foto, con `alt` que describa lo que se ve.
- **Do** calcular el contraste de todo par de colores nuevo antes de usarlo (registro en
  `Docs/design-system.md`).

### Don't:
- **Don't** poner texto blanco sobre verde-cta ni sobre verde-nav.
- **Don't** usar sombras para separar tarjetas o secciones.
- **Don't** usar degradados violetas, glassmorphism ni ilustraciones 3D.
- **Don't** poner etiquetas en mayúsculas encima de los titulares (solo hero y franja oscura).
- **Don't** usar fotos de ganado de carne.
- **Don't** usar texto sobre la foto del hero sin el velo oscuro.
