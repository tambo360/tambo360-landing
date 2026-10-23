---
update-when: cambia un color de marca, la tipografía, un rol o una convención que usen dos páginas
---
# Sistema de diseño — landing Tambo360

> Desde el 09/10/2026 la referencia visual principal es `DESIGN.md` (raíz): valores, roles de color, tipografía,
> formas, componentes y reglas. Este documento se queda con los pares de contraste calculados y la
> accesibilidad; si algo de acá choca con `DESIGN.md`, se corrige acá.

Los valores viven en `src/styles/global.css` (`@theme`), tomados de
`assets/tambo360-design-system.json`. Este documento dice **para qué** se usa cada cosa y
**hasta dónde**. No se copian valores acá, salvo los pares de contraste que justifican una
decisión.

## Dirección visual
- **Referencia del contenido:** Mercado Pago (Q-27). Primero lo que el productor hace y obtiene; la tecnología no se nombra.
- **Anclada en el tambo:** fotos reales de vacas y campo a sangre, verdes de pasto, fondo oscuro verde-900 para los momentos que tienen que pegar (la historia de los 40 litros). Nada de fondos de "startup": ni degradados violetas, ni glassmorphism, ni ilustraciones 3D.
- **La audacia se gasta en un solo lugar:** la franja oscura de la historia, con la cifra "40 litros" grande en verde-cta. El resto es sobrio y respira.
- **Vida sin decoración gratuita:** la vida la ponen las fotos, los cortes de color entre secciones (blanco con bordes de 1 px → verde-900) y textos en primera persona del tambero. Decoración descartada antes de presentar: la etiqueta en mayúsculas sobre cada titular (queda solo en el hero y en la franja oscura).
- **Tipografía:** Figtree (variable, autoalojada, solo subconjunto latino). Redondeada y muy legible en pantallas chicas al sol. Decisión del agente: el design system declara fuentes del sistema y pide reemplazarlas por la real, que está en Figma y no es accesible desde acá. Si la de Figma es otra, se cambia en un solo lugar.
- **Íconos:** línea de trazo uniforme, 24 px, estilo Lucide, en SVG inline (sin librería en el cliente).
- **Sin sombras:** las tarjetas se separan por borde de 1 px y por su fondo (design system, "elevation").

## Roles de color
| Rol | Cuándo se usa | Su límite |
|---|---|---|
| Acción principal | Anotarse al piloto. Fondo verde-cta (#80B718) con texto verde-900 (6.23:1); hover verde-check (#99C545, 7.46:1) | Una sola acción principal por página; puede repetirse en el header y al final |
| Acción secundaria | Reintentar, WhatsApp, ver preguntas: fondo lima-050 (#E9FACA) con texto lima-texto (#4D7A10, 4.62:1); hover lima-100 (#CFEDBA) con texto #436B0D (4.92:1). Q-54 | Solo en el botón secundario |
| Texto de enlace | Enlaces sobre fondo claro: verde-enlace (7.16:1 sobre blanco, 6.36:1 sobre verde-050) | No usar verde-cta ni verde-nav para texto sobre claro |
| Acento sobre oscuro | Cifras y palabras clave grandes sobre verde-900: verde-cta (6.23:1) | Una por bloque; texto chico sobre oscuro va en blanco |
| Superficie de corte | verde-900 con texto blanco (15:1) | Una o dos secciones por página |
| Superficie clara | blanco y papel (#F5F1E6: tinta 15.72:1, texto 6.71:1, verde-enlace 6.34:1) alternados, Q-56 | Nunca dos secciones del mismo fondo seguidas; sin fondos verdes de sección |
| Texto | tinta para titulares, texto (#475569) para párrafos | texto-suave y texto-tenue no se usan: no cumplen contraste |

Paleta de la app (Q-52, 15/10/2026; reemplaza Q-28): los verdes son los de `tambo360-frontend` y el detalle token por token está en `DESIGN.md` § Origen. Excepción Q-53 (20/10/2026): verde-cta vuelve a `#80B718` y verde-check a `#99C545`; encima va texto verde-900, nunca blanco (2.41:1).

## Convenciones
- **Marca:** logo oficial completo (isotipo de la vaca + "Tambo360") de `assets/logos/tambo-logo-360.png`: negro sobre fondos claros, blanco (`logo-tambo360-blanco.png`, mismo dibujo recoloreado) sobre fondos oscuros. Imagen con texto alternativo "Tambo360" (Q-44). No usar verde-cta para texto que no sea la marca.
- **Header:** marca a la izquierda; enlaces a secciones de la home y a preguntas frecuentes; "Anotarme" (principal; desde el lanzamiento, "Registrarme"). Sin "Ver demo" (Q-59). En celular, menú desplegable con los mismos enlaces; el botón queda visible. El enlace de la página actual (`aria-current="page"`) y, en la home, el de la sección del nav que está en pantalla (`aria-current="true"`) se marcan en verde-enlace con una barra: debajo del texto en desktop, a la izquierda en el menú del celular. Entre secciones que no están en el nav no se marca ninguna; con el menú del celular abierto la marca no cambia.
- **Hero:** foto a sangre con velo oscuro desde la izquierda (design system); el texto nunca va sobre la foto sin velo.
- **Sección:** titular en oración, sin punto final, dos líneas como máximo; bajada de una sola idea. Encabezado a la izquierda; centrado solo en el cierre.
- **Imágenes:** toda foto lleva `alt` que describe lo que se ve; las decorativas llevan `alt=""`. Ancho y alto declarados para que no salte el contenido. Solo la foto del hero carga con prioridad; el resto, diferida.
- **Formulario:** etiqueta visible arriba de cada campo; el error va junto al campo y se resume arriba del botón; un formulario que falló conserva lo escrito; el botón muestra "Enviando…" y no se puede tocar dos veces.
- **Botón flotante de WhatsApp:** abajo a la derecha, píldora verde-900 con texto blanco (15:1) e ícono verde WhatsApp (7.58:1), Q-55; nunca tapa el botón de envío del formulario en celular.
- **Movimiento:** solo la entrada del texto del hero y los estados de hover. Nada se oculta esperando el scroll: un bot o una captura de página completa tiene que ver todo. Todo se desactiva con `prefers-reduced-motion`.
- **Números:** en cifra ("3 meses", "40 litros"). Sin emoji.

## Accesibilidad — cómo se cumple
- Contraste: los pares de "Roles de color" están calculados (WCAG 2.x). Todo par nuevo se calcula antes de usarse.
- Foco visible en todo control: anillo verde-enlace de 2 px con 2 px de separación; sobre fondo oscuro, anillo verde-cta.
- Objetivos táctiles de 44×44 px como mínimo (se usa en la fosa, con guantes o manos mojadas).
- Un solo `h1` por página, jerarquía de títulos sin saltos, landmarks `header`/`nav`/`main`/`footer`, enlace "Saltar al contenido".
- El menú móvil se abre con botón que declara `aria-expanded`; Escape lo cierra.
- Ningún estado se comunica solo por color: los errores llevan texto e ícono.
