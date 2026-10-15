---
target: /equipo
total_score: 16
max_score: 24
na_heuristics: 5,7,9,10
p0_count: 0
p1_count: 0
target_identity: "file:C:\\Users\\Joaquin\\Desktop\\projects\\tambo360\\tambo360-landing\\src\\pages\\equipo.astro"
target_fingerprint: "sha256:0782785a23b178696838fe8a0c9c71d2c8f59eab5a6f65c88d773896d182ba30"
target_path: "C:\\Users\\Joaquin\\Desktop\\projects\\tambo360\\tambo360-landing\\src\\pages\\equipo.astro"
timestamp: 2026-10-09T15-31-30Z
slug: src-pages-equipo-astro
---
⚠️ DEGRADED: single-context (las instrucciones globales del usuario, NZT, prohíben delegar a subagentes; A se cerró antes de leer el detector)

Objetivo: `/equipo` (`src/pages/equipo.astro`), estado previo al lanzamiento, 1366, 390 y 320 px (Edge, build del 09/10/2026).

## Design Health Score

| # | Heurística | Puntaje | Problema principal |
|---|---|---|---|
| 1 | Visibilidad del estado | 3 | El nav marca "Quiénes somos" como página actual |
| 2 | Coincidencia con el mundo real | 3 | Texto honesto y en voseo ("No venimos del tambo"); "conforma" suena formal |
| 3 | Control y libertad | 3 | Navegación simple |
| 4 | Consistencia | 2 | La intro usa el contenedor angosto (borde izquierdo en 303 px a 1366) y la grilla, el ancho (140 px): dos márgenes en la misma página. Las fotos tienen tratamientos distintos (una en blanco y negro, fondos y encuadres de todo tipo) |
| 5 | Prevención de errores | n/a | Sin entradas |
| 6 | Reconocer antes que recordar | 3 | Todo a la vista |
| 7 | Flexibilidad y eficiencia | n/a | Persuade |
| 8 | Estético y minimalista | 2 | 12 caras iguales sin ningún dato además del nombre: una pared pareja sin jerarquía ni historia |
| 9 | Recuperación de errores | n/a | Sin errores posibles |
| 10 | Ayuda | n/a | Persuade |
| **Total** | | **16/24** | **Aceptable (67 %)** |

## Design Specificity Verdict

Revisión: es la grilla de equipo de cualquier startup: título, párrafo y una cuadrícula de círculos con el nombre. Lo único propio es la frase "No venimos del tambo. Por eso fuimos a buscarlo", que es buena y honesta, pero la página no la prueba: no hay nada del trabajo de campo (los tambos recorridos, lo que escucharon, Ramón y Manuel), ni roles, ni quién atiende al productor. Un tambero que entra a ver "quiénes son" se va sabiendo 12 nombres.

Detector: archivo `equipo.astro`, 0 hallazgos. Navegador a 1366 px: 1 hallazgo, `cramped-padding` (envoltorio `display: contents` de LaunchSwitch en el cierre, falso positivo). A 390 px no corrió: el servidor de preview se cayó al cargar la página por segunda vez (no es un defecto del sitio; las capturas a 390 y 320 sí se hicieron).

## Overall Impression

La página cumple lo mínimo, mostrar caras reales, y eso ya genera algo de confianza. Pero no responde la pregunta con la que llega el productor: ¿quiénes son, entienden mi tambo y a quién le hablo si algo falla? La oportunidad más grande es usar la frase de la intro como eje y mostrar el trabajo de campo que ya está documentado (Q-13).

## What's Working

- La intro es honesta y en la voz de la marca: admite que no vienen del tambo y lo convierte en método.
- Fotos reales de personas reales, sin avatares ni ilustraciones.
- El nav marca la página actual y en celular la grilla de 2 columnas no desborda (320 y 390 px).

## Priority Issues

**[P2] La página no prueba lo que promete**
- Por qué importa: la intro dice "recorrimos tambos y escuchamos a quienes los trabajan", y lo que sigue son solo nombres. Para alguien que desconfía del software (Q-21), la cercanía es el argumento, y acá no se ve.
- Arreglo: un bloque con lo que escucharon en el campo, a partir del material que ya existe (la historia de Ramón y Manuel, Q-13, o los problemas de la home), y los roles de cada persona o al menos el área (producto, desarrollo, diseño, campo). Los roles los tiene que pasar el equipo: no están en ninguna fuente.
- Comando: /impeccable layout (y /impeccable clarify para los textos)

**[P2] Las fotos no forman un conjunto y algunas se ven borrosas**
- Por qué importa: una en blanco y negro, fondos que van de pared blanca a atardecer, encuadres distintos (Lorena cortada arriba, Nicolás Pavón de 480x1066). Tres originales miden 200x200 (Cintia, Facundo, Nicolás Mansilla) y en pantallas de alta densidad necesitan unos 352 px: se ven blandas. Eliana sale a 150 px de ancho natural y se estira a 176.
- Arreglo: pedir fotos de al menos 400x400 con encuadre de hombros para arriba; mientras tanto, unificar el tratamiento (por ejemplo, todas en blanco y negro con el aro de color, o un fondo verde-050 parejo).
- Comando: /impeccable polish

**[P2] Dos márgenes izquierdos en la misma página**
- Por qué importa: el título y la intro van en el contenedor angosto (empiezan en 303 px a 1366) y la grilla en el ancho (140 px). El ojo salta de un borde al otro; el resto del sitio alinea todo al mismo borde.
- Arreglo: el mismo contenedor para la intro y la grilla, con la intro limitada a su medida de lectura.
- Comando: /impeccable layout

**[P3] El texto alternativo repite el nombre**
- Por qué importa: el lector de pantalla dice "Foto de Cintia Duarte, Cintia Duarte" doce veces.
- Arreglo: `alt=""` en la foto (el nombre ya está debajo) o una `figure` con `figcaption`.
- Comando: /impeccable polish

## Persona Red Flags

**Jordan (primera vez):** busca a quién escribirle y no encuentra ni roles ni contacto en la página (el contacto está recién en el footer).

**Riley (escéptico):** "recorrimos tambos" sin una sola foto, lugar o cita del campo: lo lee como frase de marketing.

**Ramón (encargado):** ve 12 caras jóvenes sin rol y no sabe cuál entiende de tambos; la página no lo conecta con la historia que él mismo contó.

## Minor Observations

- "Conocé al equipo que conforma Tambo360": "conforma" es más formal que el resto del sitio (título elegido en Q-42; cambiarlo requiere tu aprobación).
- El cierre oscuro y el footer forman la misma masa oscura que en la home (lo cubre la u38).
- En la captura aparece la barra de herramientas de Astro: es un artefacto del servidor de preview, no del sitio publicado.

## Questions to Consider

- ¿Y si la página empezara por una foto del equipo en un tambo, en lugar de la grilla?
- ¿Hace falta mostrar a las 12 personas por igual, o al productor le sirve más saber quién lo atiende?
- ¿Qué escucharon en los tambos que cambió lo que construyeron?
