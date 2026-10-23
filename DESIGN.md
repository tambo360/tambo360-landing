---
name: Tambo360 · landing
description: Del cuaderno al bolsillo. Ordeñe, rodeo y costos del tambo en el celular.
colors:
  verde-cta: "#80b718"
  verde-check: "#99c545"
  verde-nav: "#236342"
  verde-enlace: "#236342"
  verde-100: "#e0f5eb"
  verde-050: "#e8f5e9"
  verde-900: "#1c2a1c"
  verde-950: "#121c12"
  blanco: "#ffffff"
  papel: "#f5f1e6"
  gris-025: "#fafbfb"
  gris-050: "#f1f5f9"
  gris-100: "#e8eaed"
  borde-neutro: "#dee0e3"
  borde-verde: "#d4e6de"
  tinta: "#101828"
  texto: "#475569"
  error: "#b42318"
  whatsapp: "#25d366"
  lima-050: "#e9faca"
  lima-100: "#cfedba"
  lima-texto: "#4d7a10"
  lima-texto-hover: "#436b0d"
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
    backgroundColor: "{colors.lima-050}"
    textColor: "{colors.lima-texto}"
    rounded: "{rounded.md}"
    padding: "0 20px"
    height: "44px"
  button-secondary-hover:
    backgroundColor: "{colors.verde-100}"
    textColor: "{colors.verde-enlace}"
  input:
    backgroundColor: "{colors.blanco}"
    textColor: "{colors.tinta}"
    rounded: "{rounded.md}"
    padding: "0 16px"
    height: "48px"
  card-suave:
    backgroundColor: "{colors.blanco}"
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

La densidad es baja y el ritmo, de corte: secciones anchas que alternan blanco, papel y verde oscuro,
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

## Dirección "Libreta de tambo" (u66, 23/10/2026 · Q-55, Q-56, Q-57)

Aprobada por el usuario y aplicada en u67-u71 (home, `/equipo`, `/preguntas-frecuentes`); las reglas de abajo ya la reflejan.

**Por qué:** crítica del 23/10 sobre la home en 1366 px. 7 secciones blancas seguidas (ritmo plano, sev. 3),
WhatsApp `#25d366` junto al lima (sev. 2), el mismo molde de ícono en caja + título + texto repetido 4 veces
(sev. 2) y el lima usado en 5 roles (sev. 1). Se quedan las fotos reales, la franja de los 40 litros y Figtree.

**Superficies.** Blanco y **papel** (`#F5F1E6`, token nuevo `papel`) se alternan, y entre ellos van las franjas
verde-900. Nunca quedan dos secciones del mismo fondo seguidas, así que el borde de 1 px entre secciones sobra.

| Sección | Fondo | Qué cambia |
|---|---|---|
| Hero | foto + velo verde-900 | nada |
| Problemas | papel con renglones | notas de cuaderno: sin tarjetas ni cajas de ícono |
| Historia | verde-900 | nada; sigue siendo el único momento audaz |
| Cómo funciona | blanco | números grandes de anotación unidos por una línea, sin círculos lima |
| Qué podés hacer | papel | nada estructural (ya es una lista con divisores) |
| Sin señal | blanco + foto | los 3 ítems dejan la fila de íconos y pasan a lista con divisores |
| Piloto | papel con renglones | el formulario en blanco sobre papel; beneficios con su cifra, sin cajas lima |
| Preguntas | blanco | nada |
| Cierre | papel | sin borde superior |
| Footer | verde-950 | nada |

**Renglones.** Líneas horizontales de 1 px en borde-neutro cada 2 rem, con la línea de margen vertical en
verde-enlace al 30 %. Solo en problemas y piloto: es un recurso con medida, no una textura de fondo general.
Sin fuentes manuscritas.

**Lima con un solo rol.** verde-cta queda para los botones principales, la palabra clave del H1 y la cifra de los 40
litros. Salen los círculos de los pasos y las cajas del piloto.

**WhatsApp.** Píldora verde-900 con texto blanco y el ícono en verde WhatsApp (7.58:1). La sombra se queda: es
el único elemento flotante.

**Contraste calculado** (WCAG, 23/10): sobre papel, tinta da 15.72:1, texto 6.71:1, verde-enlace 6.34:1 y
lima-texto 4.53:1. Papel contra blanco da 1.13:1, y por eso las secciones se distinguen por el cambio de tono y
no por un borde.

## Colors

Verdes de pasto sobre blanco, con un verde casi negro para los momentos que tienen que pegar.

### Origen: la paleta de la app (Q-52)

Los verdes se alinean con la app (`tambo360-frontend`, commit `53615f5` del 30/09/2026). Los valores se
**copian**, no se importan: la landing compila y se publica sola. Fuente de cada valor: `app/globals.css`
(`@theme`) y clases usadas en `components/`. Se mantienen los nombres de los tokens; cambia el valor.

| Token | Hoy | Pasa a | Fuente en la app | Rol nuevo | Contraste |
|---|---|---|---|---|---|
| verde-cta | `#80b718` | `#29845A` | `--color-green-main`, botón `darkGreen` | Fondo del botón principal, tildes | blanco encima 4.62:1; sobre blanco 4.62:1 |
| verde-check | `#99c545` | `#236342` | `BatchSuccessScreen`, `ChangeBatch` | Hover del botón principal | blanco encima 7.16:1 |
| verde-enlace | `#4d7a10` | `#236342` | ídem | Enlaces sobre claro, anillo de foco | sobre blanco 7.16:1; sobre verde-050 6.36:1 |
| verde-nav | `#669213` | `#236342` | ídem | Reservado a la marca | — |
| verde-100 | `#cfedba` | `#E0F5EB` | `--color-dialogs` | Hover de la acción secundaria, insignias | verde-enlace encima 6.28:1 |
| verde-050 | `#e9faca` | `#E8F5E9` | clases en 8 componentes | Fondo de la acción secundaria | verde-enlace encima 6.36:1 |
| verde-025 / verde-010 | `#f7ffe6` / `#f3ffe2` | eliminados | la app usa fondos blancos | Secciones claras en blanco, separadas por borde-verde | — |
| borde-verde | `#e0e8dc` | `#D4E6DE` | clases en 2 componentes | Separadores de 1 px | decorativo |
| verde-900 | `#1c2a1c` | sin cambio | la app no tiene superficies oscuras | Hero e historia | blanco encima sin cambio |
| verde-950 | `#121c12` | sin cambio | ídem | Footer | ídem |

Consecuencias (aplicadas en u53):
- **El botón principal pasa a texto blanco.** verde-900 sobre el verde nuevo da 3.25:1 y no alcanza. La Regla del
  Blanco Prohibido pasa a ser la Regla del Texto Blanco: sobre verde-cta va blanco, nunca verde-900.
- **Sobre oscuro, verde-cta solo en texto grande o íconos** (3.25:1 sobre verde-900, 3.78:1 sobre verde-950: pasa
  el 3:1 de texto grande y gráficos, no el 4.5:1 de texto chico). La etiqueta de la historia y el hover del
  footer pasan a blanco.
- El botón principal sobre verde-900 (hero) se distingue del fondo con 3.25:1, por encima del mínimo de 3:1
  para controles.
- **Q-53 (20/10/2026) revierte el verde principal:** verde-cta vuelve a `#80b718` y verde-check a `#99c545` (hover);
  el resto del mapeo sigue. Blanco sobre `#80b718` da 2.41:1, así que encima va verde-900 (6.23:1; hover 7.46:1).
  Sobre verde-900, verde-cta da 6.23:1 y sobre verde-950 7.25:1: ya pasa también en texto chico.
- No se tocan: tinta, texto, error, WhatsApp (verde-900 encima, 7.58:1), grises, el logo PNG ni la imagen OG.
- Decisión del usuario (15/10/2026): fondos claros en blanco como en la app y un solo verde, sin acento aparte.

### Primary
- **Verde Pasto Nuevo** (verde-cta): la acción principal y nada más. Fondo de botones principales, y sobre
  verde-900 las cifras y palabras clave. Siempre con texto verde-900 encima, nunca blanco.
- **Verde Brote** (verde-check): el hover del botón principal.
- **Verde Lote** (verde-enlace): todo texto de enlace sobre fondo claro, el anillo de foco y la marca de sección
  activa del nav.
- **Verde Potrero** (verde-nav): reservado a la marca; no se usa para texto sobre claro.

### Secondary
- **Verde Galpón** (verde-900): las superficies de corte con texto blanco encima. En la home: hero y la
  historia. El cierre va en blanco para que no se funda con el footer.
- **Verde Noche** (verde-950): el footer, un paso más profundo que el galpón.

### Neutral
- **Brote Pálido** (verde-050) y **Brote Claro** (verde-100): fondo y hover de la acción secundaria, insignias.
- **Tinta de Libreta** (tinta): titulares y etiquetas.
- **Pizarra** (texto): párrafos y bajadas.
- **Bordes de Alambrado** (borde-verde, borde-neutro): separadores de 1 px, tarjetas y campos.
- **Grises de Oficina** (gris-025, gris-050, gris-100): cajas neutras (hoy sin uso en las páginas; el índice de preguntas se sacó el 09/10/2026, u39).
- **Rojo Alerta** (error): solo errores, siempre con texto e ícono.
- **Verde WhatsApp** (whatsapp): solo el ícono del botón flotante, sobre píldora verde-900 (7.58:1). Q-55.
- **Papel de Libreta** (papel): superficie clara que alterna con el blanco (Q-56).

### Named Rules
**La Regla del Verde Único.** verde-cta es la acción principal: aparece en un solo botón por bloque visual y,
sobre oscuro, en una sola cifra o palabra por bloque. Si dos cosas son verde-cta, una sobra.

**La Regla del Texto Oscuro.** Sobre verde-cta y verde-check va texto verde-900 (6.23:1 y 7.46:1), nunca blanco (2.41:1). Q-53.

**La Regla del Corte.** Blanco y papel se alternan: nunca dos secciones seguidas con el mismo fondo, y sin borde
entre secciones. verde-900 en una o dos secciones por página. La última sección antes del footer (verde-950) nunca es oscura (u38).

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

Plano por defecto. La profundidad sale del color de fondo (tarjetas blancas con borde, bloques verde-900
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
- **Secondary:** lima-050 con texto lima-texto ("Ver preguntas frecuentes", "Escribir por WhatsApp"; 4.62:1); hover lima-100 con texto lima-texto-hover (4.92:1). Colores de la landing anterior, solo en este botón (Q-54). Nunca más llamativo que el
  principal.
- **Ghost sobre oscuro:** borde blanco al 40 % y texto blanco, solo sobre verde-900.
- Si abre otra pestaña, lo anuncia al lector de pantalla.

### Chips
- **Insignias:** píldora verde-050 con texto verde-enlace sobre claro; sobre oscuro, blanco al 10 % con un aro
  blanco al 25 %.

### Cards / Containers
- **Corner Style:** 16 px; la caja del formulario y las figuras, 24 px.
- **Background:** blanco, con borde de 1 px.
- **Shadow Strategy:** ninguna (ver Elevation & Depth).
- **Border:** 1 px borde-verde.
- **Internal Padding:** 20 px; el formulario, 24 a 32 px.
- **Ícono en caja:** 44 a 48 px, esquinas de 8 px, verde-050 con ícono verde-enlace (6.36:1); o verde-cta con ícono verde-900 (6.23:1).

### Inputs / Fields
- **Style:** fondo blanco, borde de 1 px borde-neutro, esquinas de 8 px, 48 px de alto, texto de 16 px.
- **Focus:** el borde pasa a verde-enlace con un halo verde-enlace al 30 %.
- **Error:** borde rojo alerta con halo, mensaje con ícono debajo del campo; obligatorios con asterisco rojo.

### Navigation
- **Header:** blanco al 95 % con desenfoque, borde inferior borde-verde, 72 px de alto, fijo arriba. Enlaces en
  tinta, 15 px, 500 de peso; hover con fondo verde-050 y texto verde-enlace; la página o sección actual en
  verde-enlace con una barra de 2 px debajo. A la derecha, la acción secundaria y la principal.
- **Celular:** menú desplegable debajo del header, enlaces de 48 px de alto, actual con barra de 3 px a la
  izquierda; la acción principal queda siempre visible al lado del botón del menú.

### Preguntas desplegables (Accordion)
Pregunta en title con un círculo verde-050 que gira su flecha al abrir; separadas por un borde de 1 px. Se
abren solas cuando se llega con `#id`.

## Do's and Don'ts

### Do:
- **Do** usar verde-cta solo para la acción principal y para una cifra por bloque sobre verde-900.
- **Do** alternar blanco y papel; si dos secciones quedan con el mismo fondo, cambiar una, no agregar un borde.
- **Do** mantener objetivos táctiles de 44 px o más.
- **Do** declarar ancho y alto de cada foto, con `alt` que describa lo que se ve.
- **Do** calcular el contraste de todo par de colores nuevo antes de usarlo (registro en
  `Docs/design-system.md`).

### Don't:
- **Don't** poner texto blanco sobre verde-cta ni sobre verde-check.
- **Don't** usar sombras para separar tarjetas o secciones.
- **Don't** usar degradados violetas, glassmorphism ni ilustraciones 3D.
- **Don't** poner etiquetas en mayúsculas encima de los titulares (solo hero y franja oscura).
- **Don't** usar fotos de ganado de carne.
- **Don't** usar texto sobre la foto del hero sin el velo oscuro.
