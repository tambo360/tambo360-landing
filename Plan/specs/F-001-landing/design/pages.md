---
update-when: se agrega, quita o reordena una página o una sección de la home
---
# F-001 · Mapa de páginas y secciones

Tarea: el productor llega desde redes o un mensaje, entiende que Tambo360 resuelve su problema y se anota al piloto (RN-una-accion-principal).

## Páginas
| Ruta | Para qué | Indexa | Origen |
|---|---|---|---|
| `/` | Entender y anotarse | sí | spec, Alcance |
| `/equipo` | Conocer a las personas detrás de Tambo360: fotos y nombres | sí | Q-17, Q-42 |
| `/preguntas-frecuentes` | Sacarse dudas antes de anotarse | sí | Q-25, Q-21, Q-23 |
| `/privacidad` | Política de privacidad | sí | RN-inscripcion-consentimiento, RN-ia-* |
| `/terminos` | Términos y condiciones | sí | RN-retencion-sin-pago |
| `/gracias` | Resultado del formulario sin JavaScript | no | QT-09 |
| `/404` | Página no encontrada | no | spec, Alcance |
| `/api/inscripcion` | Endpoint POST (no es página) | no | QT-04 |

## Home, en orden
| # | Sección | Fondo | Contenido | Origen |
|---|---|---|---|---|
| 1 | Hero | foto `hero.webp` + velo | Titular de Q-41 (ordeñe, rodeo y costos), bajada sobre fosa/sin señal, "Anotarme al piloto" + "Ver demo", nota "Lanzamiento 26/10 · piloto 3 meses gratis"; desde el lanzamiento "Registrarme gratis" (a la app). Viñetas: "Sin tarjeta" (ícono tarjeta tachada) y "Te ayudamos por WhatsApp" (ícono WhatsApp), sin viñeta de meses/días gratis | Q-01, Q-03, Q-27, Q-46, Q-47 |
| 2 | ¿Te suena? | blanco | Los 3 problemas de Q-15, en palabras del tambero, con foto | Q-13, Q-14, Q-15 |
| 3 | La historia | verde-900 | Ramón y Manuel; mastitis; "hasta 40 litros por día" que no se anotan | Q-13 |
| 4 | Cómo funciona | verde-025 | 3 pasos: anotás en la fosa → se junta todo → te avisa a tiempo | Q-08, Q-09, Q-22 |
| 5 | Qué podés hacer | blanco | 6 funciones del lanzamiento, solo ícono y título (sin descripción): título de sección a la izquierda y renglones con línea divisoria a la derecha, a 2 columnas; en móvil todo a una columna | Q-06 |
| 6 | En la fosa, sin señal (`#sin-senal`) | foto del potrero a todo el ancho (corte) + verde-010, borde inferior | H2 "En la fosa no hay señal. Igual queda anotado" + bajada; 3 ítems con ícono, título y texto (cualquier dispositivo, sin conexión, papeles), a 3 columnas desde 1024 px | Q-08, RN-sin-senal, Q-48 |
| 7 | Sin vueltas | blanco | Lo que no hace (Q-23) y la carga inicial de 1 a 30 minutos (Q-24) | Q-21, Q-23, Q-24 |
| 8 | Sumate al piloto | verde-025 | Beneficios (Q-03), 3 tambos fundadores (Q-18), formulario; no se muestra desde el lanzamiento | Q-03, Q-18, Q-32, Q-46 |
| 9 | Dudas frecuentes | verde-010 | 4 preguntas + enlace a `/preguntas-frecuentes` | Q-25 |
| 10 | Cierre | verde-900 | Titular centrado + "Sumarme al piloto gratis"; desde el lanzamiento bajada "Registrate gratis hoy…" + "Registrarme gratis" a la app (también en `/equipo` y `/preguntas-frecuentes`) | RN-una-accion-principal, RN-desde-lanzamiento |

Desde el lanzamiento el header muestra "Registrarme" en lugar de "Anotarme" y el footer "Registrarme" en lugar de "Sumarme al piloto". El cambio lo hace `LaunchSwitch.astro` (ver README, "Lanzamiento").

## Celular
Todo a una columna; el hero muestra la foto arriba recortada y el texto debajo sobre verde-900 (sin texto sobre foto). Las tarjetas de problemas y módulos pasan a lista. El botón de WhatsApp no tapa el envío del formulario.

## Estados del formulario
Vacío · enviando · error de campo (junto al campo) · ya anotado (RN-inscripcion-repetida) · error al guardar con salida a WhatsApp (RN-inscripcion-falla) · éxito. Sin JS: el mismo flujo vía `/gracias?estado=…`.

## Pendiente
- Q-32 · campos del formulario (se construye con la propuesta del spec).
- Roles del equipo: no están en ninguna fuente; se muestra solo el nombre. "Vero" no tiene apellido en el archivo.
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
