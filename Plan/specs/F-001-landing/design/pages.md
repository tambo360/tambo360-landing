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
| # | Sección | Fondo | Contenido | Origen |
|---|---|---|---|---|
| 1 | Hero | foto `hero.webp` + velo | Titular de Q-41 (ordeñe, rodeo y costos), bajada sobre fosa/sin señal, "Anotarme al piloto" (sin "Ver demo", Q-59), desde el lanzamiento "Registrarme gratis" (a la app). Viñeta: solo "Sin tarjeta" (ícono tarjeta tachada); la ayuda por WhatsApp la da el botón flotante; sin viñeta de meses/días gratis | Q-01, Q-03, Q-27, Q-46, Q-47, Q-50 |
| 2 | ¿Te suena? | papel | Los 3 problemas de Q-15, en palabras del tambero, como hoja de cuaderno numerada (sin tarjetas ni íconos, Q-57), con foto | Q-13, Q-14, Q-15 |
| 3 | La historia | verde-900 | Ramón y Manuel; mastitis; "hasta 40 litros por día" que no se anotan | Q-13 |
| 4 | Cómo funciona | blanco | 3 pasos con número grande sobre una línea (Q-57): anotás en la fosa → se junta todo → te avisa a tiempo | Q-08, Q-09, Q-22 |
| 5 | Qué podés hacer | papel | 6 funciones del lanzamiento, solo ícono y título (sin descripción): título de sección a la izquierda y renglones con línea divisoria a la derecha, a 2 columnas; en móvil todo a una columna | Q-06 |
| 6 | En la fosa, sin señal (`#sin-senal`) | foto del potrero a todo el ancho + blanco | H2 "En la fosa no hay señal. Igual queda anotado" + bajada; 3 ítems título/texto en filas con divisores, sin íconos (cualquier dispositivo, sin conexión, papeles); en celular el texto va debajo del título | Q-08, RN-sin-senal, Q-48 |
| 7 | Sin vueltas | blanco | Lo que no hace (Q-23) y la carga inicial de 1 a 30 minutos (Q-24) | Q-21, Q-23, Q-24 |
| 8 | Sumate al piloto | papel | Beneficios (Q-03) en hoja de cuaderno con tildes, 3 tambos fundadores (Q-18), formulario; no se muestra desde el lanzamiento | Q-03, Q-18, Q-32, Q-46 |
| 9 | Dudas frecuentes | blanco | 4 preguntas + enlace a `/preguntas-frecuentes` | Q-25 |
| 10 | Cierre | papel (claro, separa del footer verde-950) | Titular centrado + "Sumarme al piloto gratis"; desde el lanzamiento bajada "Registrate gratis hoy…" + "Registrarme gratis" a la app (también en `/equipo` y `/preguntas-frecuentes`) | RN-una-accion-principal, RN-desde-lanzamiento |

Desde el lanzamiento el header muestra "Registrarme" en lugar de "Anotarme" y el footer "Registrarme" en lugar de "Sumarme al piloto gratis". Antes del lanzamiento la acción tiene dos nombres y nada más: "Anotarme" en el header (corto) y "Sumarme al piloto gratis" en el resto (hero, formulario, cierre, footer; u40). El cambio lo hace `LaunchSwitch.astro` (ver README, "Lanzamiento").

Fondos de las páginas internas (Q-56): en `/equipo` y `/preguntas-frecuentes` el encabezado (H1 y bajada) va en papel, el contenido en blanco y el cierre en papel. En `/equipo`, entre la grilla y el cierre, "Lo que escuchamos en los tambos" va en verde-900 con los problemas como lista con divisores, sin íconos (Q-62).

## Celular
Todo a una columna; el hero muestra la foto arriba recortada y el texto debajo sobre verde-900 (sin texto sobre foto). Las tarjetas de problemas y módulos pasan a lista. El botón de WhatsApp no tapa el envío del formulario.

## Estados del formulario
Vacío · enviando · error de campo (junto al campo) · ya anotado (RN-inscripcion-repetida) · error al guardar con salida a WhatsApp (RN-inscripcion-falla) · éxito. Sin JS: el mismo flujo vía `/gracias?estado=…`.

## Pendiente
- Q-32 · campos del formulario (se construye con la propuesta del spec).
- Roles del equipo: el usuario decidió no mostrarlos (Q-51); se muestra solo el nombre. "Vero" no tiene apellido en el archivo.
- Q-34 · lo que viene después no se muestra.

## Fotos
| Foto | Dónde | Motivo |
|---|---|---|
| `hero.webp` (productor con tablet en el galpón) | Hero | Muestra al usuario real usando la app en el tambo |
| `vacas_5.webp` (Holando en el comedero) | ¿Te suena? | Rutina diaria del tambo |
| `vacas_2.webp` (una Holando sola) | La historia | Una vaca, un caso: la que se ordeña última |
| `tambo-engine.webp` (captura de alertas) | Cómo funciona, paso 3 | Lo que el productor ve cuando la app le avisa |
| `vacas_1.webp` (Holando en el campo) | En la fosa, sin señal | Campo abierto, lejos de la oficina |

**Descartadas:** `vacas.webp`, `vacas_3.webp` y `vacas_4.webp` muestran mayormente ganado de carne (Hereford y cruzas), no vacas lecheras. Un tambero lo nota al instante y le resta credibilidad a "te entendemos". Quedan en `assets/` sin usar.
