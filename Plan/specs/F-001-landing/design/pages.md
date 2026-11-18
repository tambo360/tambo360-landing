---
update-when: se agrega, quita o reordena una página o una sección de la home
---
# F-001 · Mapa de páginas y secciones

Tarea: el productor llega desde redes o un mensaje, entiende que Tambo360 resuelve su problema y se anota al piloto (RN-una-accion-principal).

## Páginas
| Ruta | Para qué | Indexa | Origen |
|---|---|---|---|
| `/` | Entender y anotarse | sí | spec, Alcance |
| `/equipo` | Conocer a las personas detrás de Tambo360: fotos en blanco y negro y nombres, sin roles | sí | Q-17, Q-42, Q-51 |
| `/preguntas-frecuentes` | Sacarse dudas antes de anotarse: intro y 13 preguntas desplegables, sin índice aparte (las preguntas cerradas ya son el índice) | sí | Q-25, Q-21, Q-23 |
| `/privacidad` | Política de privacidad | sí | RN-inscripcion-consentimiento, RN-ia-* |
| `/terminos` | Términos y condiciones | sí | RN-retencion-sin-pago |
| `/gracias` | Resultado del formulario sin JavaScript | no | QT-09 |
| `/404` | Página no encontrada | no | spec, Alcance |
| `/api/inscripcion` | Endpoint POST (no es página) | no | QT-04 |

## Home, en orden
Dirección B2 "La app en la mano" (Q-63, 04/11/2026); la forma de cada sección está en `DESIGN.md` § Dirección B2.

| # | Sección | Fondo | Contenido | Origen |
|---|---|---|---|---|
| 1 | Hero | verde-900 con foto | Volvió el hero anterior (Q-66): foto del productor con la tablet (`hero.webp`) y gradiente oscuro a la izquierda (abajo en celular). Titular de Q-41, bajada sobre fosa/sin señal, "Sumarme al piloto gratis", desde el lanzamiento "Registrarme gratis". Viñeta: solo "Sin tarjeta" | Q-01, Q-03, Q-27, Q-46, Q-47, Q-50, Q-66 |
| 2 | ¿Te suena? / Cómo funciona (`#como-funciona`) | papel | Una sola sección (Q-66): cada problema de Q-15 ("Hoy") frente a su paso en tarjeta numerada con fragmento de pantalla ("Con Tambo360") | Q-08, Q-09, Q-13, Q-14, Q-15, Q-22, Q-66 |
| 3 | Qué podés hacer | blanco | 6 funciones del lanzamiento con título y una línea de descripción (Q-64); Gastos, Rodeo y Avisos con su pantalla real | Q-06, Q-64 |
| 4 | En la fosa, sin señal (`#sin-senal`) | verde-900 | H2 "En la fosa no hay señal. Igual queda anotado" + bajada; los 3 ítems con ícono y solo su título | Q-08, RN-sin-senal, Q-48, Q-63 |
| 5 | Instalar la app (`#instalar`) | blanco | Lo que era el hero B2 (Q-66): "En la PC de la oficina y en el celular de la fosa"; se instala desde el navegador, sin Play Store (Q-08, Q-23); tablero en la computadora y crear lote en el celular; misma acción que el hero | Q-08, Q-23, Q-66 |
| 6 | La historia | papel | Ramón y Manuel; mastitis; "hasta 40 litros por día" que no se anotan, como cita | Q-13, Q-63 |
| 7 | Sumate al piloto | blanco | Beneficios (Q-03) en tarjetas con su cifra, 3 tambos fundadores (Q-18), formulario; no se muestra desde el lanzamiento | Q-03, Q-18, Q-32, Q-46 |
| 8 | Dudas frecuentes | papel | 4 preguntas + enlace a `/preguntas-frecuentes` | Q-25 |
| 9 | Cierre | verde-cta (separa del footer verde-950) | Titular y bajada a la izquierda + "Sumarme al piloto gratis" a la derecha; desde el lanzamiento bajada "Registrate gratis hoy…" + "Registrarme gratis" a la app (también en `/equipo` y `/preguntas-frecuentes`) | RN-una-accion-principal, RN-desde-lanzamiento, Q-63 |

"Sin vueltas" (lo que no hace y la carga inicial, Q-23 y Q-24) ya no es una sección de la home: hoy vive solo en las preguntas frecuentes (`src/data/faq.ts`). Observado el 04/11/2026 al preparar B2; B2 no lo cambia.

Desde el lanzamiento el header muestra "Registrarme" en lugar de "Anotarme" y el footer "Registrarme" en lugar de "Sumarme al piloto gratis". Antes del lanzamiento la acción tiene dos nombres y nada más: "Anotarme" en el header (corto) y "Sumarme al piloto gratis" en el resto (hero, formulario, cierre, footer; u40). El cambio lo hace `LaunchSwitch.astro` (ver README, "Lanzamiento").

Fondos de las páginas internas (B2): en `/equipo` y `/preguntas-frecuentes` el encabezado (H1 y bajada) va en papel, el contenido en blanco y el cierre en verde-cta. En `/equipo` (oculta, Q-65), entre la grilla y el cierre, "Lo que escuchamos en los tambos" va en verde-900, con el texto a la izquierda y los problemas como lista con divisores a la derecha (Q-62).

## Celular
Todo a una columna; en el hero el texto va primero y las pantallas debajo, achicadas, sin scroll horizontal. En "¿Te suena?" cada bloque lleva su etiqueta ("Hoy" / "Con Tambo360") encima. El mosaico y los pasos pasan a una columna. El botón de WhatsApp no tapa el envío del formulario.

## Estados del formulario
Vacío · enviando · error de campo (junto al campo) · ya anotado (RN-inscripcion-repetida) · error al guardar con salida a WhatsApp (RN-inscripcion-falla) · éxito. Sin JS: el mismo flujo vía `/gracias?estado=…`.

## Pendiente
- Q-32 · campos del formulario (se construye con la propuesta del spec).
- Roles del equipo: el usuario decidió no mostrarlos (Q-51); se muestra solo el nombre. "Vero" no tiene apellido en el archivo.
- Q-34 · lo que viene después no se muestra.

## Fotos y pantallas
| Imagen | Dónde | Motivo |
|---|---|---|
| `app/app-dashboard-md.png` (tablero) | Hero, en la computadora | La app real, lo primero que se ve (Q-63) |
| `app/nuevo-lote-mobile.png` (crear lote) | Hero, en el celular | Lo que se hace en la fosa |
| `app/costos-mobile.png` | Qué podés hacer, Gastos del tambo | La pantalla de esa función |
| `app/catalogo-mobile.png` (inventario por animal) | Qué podés hacer, Tu rodeo, al día | La pantalla de esa función |
| `tambo-engine.webp` (captura de alertas) | Qué podés hacer, Avisos a tiempo | Lo que el productor ve cuando la app le avisa |
| `vacas-2.webp` (una Holando sola) | La historia | Una vaca, un caso: la que se ordeña última |

Salen de la home con B2: `hero.webp`, `vacas-5.webp` y `vacas-1.webp` (quedan en `assets/` sin usar). `app-dashboard-xl.png` queda sin usar: el usuario eligió el tablero `md` por su ancho.

**Descartadas:** `vacas.webp`, `vacas_3.webp` y `vacas_4.webp` muestran mayormente ganado de carne (Hereford y cruzas), no vacas lecheras. Un tambero lo nota al instante y le resta credibilidad a "te entendemos". Quedan en `assets/` sin usar.
