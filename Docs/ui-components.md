---
update-when: se agrega un componente que usan dos páginas o cambia la decisión que carga uno existente
---
# Componentes compartidos

Viven en `src/components/ui/` (sin contenido de negocio) y `src/components/layout/` (presentes en todas las páginas).

## Button
Lo usan: header, hero, sección del piloto, cierre, 404. Carga: `primary` = la acción principal (verde-cta con texto verde-900), `secondary` = demo/WhatsApp; con `href` es enlace, sin `href` es botón; `external` agrega pestaña nueva y aviso para lectores de pantalla. Alto mínimo 44 px.
No usar para: enlaces dentro de un párrafo.

## Section + SectionHeading
Lo usan: todas las secciones de la home y las preguntas frecuentes. Carga: el fondo por `tone` (white, soft, softer, dark) para alternar cortes y el espaciado vertical; el titular en oración con bajada opcional.

## FormField, Input, Select, Checkbox
Lo usan: formulario del piloto (y cualquier formulario futuro). Carga: etiqueta visible con "(obligatorio)/(opcional)", error junto al campo enlazado por `aria-describedby`, alto 48 px.

## Picture
Lo usan: todas las fotos. Carga: AVIF + WebP, anchos responsivos, carga diferida salvo `priority` (solo la foto del hero).

## Icon
Lo usan: header, footer, secciones. Carga: SVG de Tabler Icons (outline) en `src/icons/`, el nombre es el del archivo (`<Icon name="brand-whatsapp" />`); para sumar uno se baja el SVG de tabler.io/icons a esa carpeta. Decorativo por defecto (`aria-hidden`) o con `label` cuando es lo único que comunica; acepta atributos `data-*`. Un nombre inexistente rompe el build.

## Brand (layout)
Lo usan: header y footer. Carga: el logo oficial en PNG (`src/assets/logo-tambo360.png`), 32 px de alto en celular y 36 px desde `sm`; `tone="dark"` usa la versión blanca para fondos oscuros.

## SEO (layout)
Lo usan: todas las páginas, vía BaseLayout. Carga: title, description, canonical, robots, Open Graph, Twitter y JSON-LD.
