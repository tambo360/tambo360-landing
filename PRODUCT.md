# Product

<!-- impeccable:product-schema 1 -->

Registro de producto para el trabajo de diseño. Las reglas detalladas viven en
`Plan/specs/F-001-landing/spec.md` y las decisiones con su origen en
`Plan/specs/F-001-landing/analysis.md` (Q-NN); si algo de acá choca con esos dos, mandan ellos.

## Platform

web

## Users

Dueños, hijos de dueños o administradores de tambos chicos y medianos de Argentina, sin acceso a grandes
tecnologías ni presupuestos (Q-04). Llegan a la landing desde campañas y mensajes directos en redes, casi
siempre desde el celular (Q-05). El dueño o administrador es quien se registra y a futuro paga; la app la usa
todo el personal, del tambero en la fosa al administrador en la oficina o en la ciudad (Q-11). También hay
establecimientos con varias cuencas y cooperativas con varios establecimientos (Q-12).

## Product Purpose

Tambo360 es una web app para registrar el ordeñe, controlar el rodeo y ordenar los costos del tambo desde un
solo lugar, y saber si el tambo es rentable. La landing tiene que hacerle sentir al productor que entendemos su
día y llevarlo a la acción principal: hasta el 25/10/2026, anotarse en el piloto; desde el 26/10/2026 00:00
(hora de Argentina), registrarse en la app (https://tambo360.vercel.app/registrarse) (Q-02, Q-46).

Medida de éxito después del lanzamiento: **sin definir** (el usuario la dejó abierta el 09/10/2026).

## Positioning

Junta en un solo lugar lo que hoy está repartido entre el cuaderno, la planilla y la cabeza del encargado:
los litros de cada ordeñe, la leche que se tira y la plata que se gasta, para calcular la rentabilidad. Se
anota en la fosa aunque no haya señal y sincroniza después, y una IA avisa de las caídas de producción y las
mermas fuera de lo normal antes de que sea tarde (Q-08, Q-09, Q-20). Compite contra cuadernos, Excel y
sistemas viejos que piden horas frente a una PC.

## Operating Context

- El problema, en palabras del campo: al crecer, el cuaderno no alcanza; una vaca con mastitis se ordeña
  última, la leche se tira y el dueño se entera de palabra días después: hasta 40 litros diarios sin anotar
  (Q-13, Q-15).
- Hoy usan cuadernos, planillas de papel o Excel (Q-14).
- La app se usa en la PC de la oficina o instalada en el celular o la tablet en la fosa (Q-08).
- La carga inicial del rodeo la hace el encargado, una sola vez: de 1 a 30 minutos (Q-24).
- Lo que frena a la persona: que la perciba difícil, ver el pago futuro como gasto, la carga inicial a mano (Q-21).

## Capabilities and Constraints

- Desde el lanzamiento: registro de producción sin señal, mermas, costos generales, alertas de IA, tablero,
  inventario del rodeo, altas y bajas de animales (Q-06).
- No hace predicciones mágicas, no carga datos sola, no es app de Play Store, no será gratis para siempre (Q-23).
- Sin integraciones hoy; no se promete Excel (Q-10).
- Precios: no se muestran. Se cobrará en pesos según usuarios, con prueba de 30 días sin tarjeta (Q-26).
- Soporte solo por WhatsApp, 24 h; número +54 11 6831-8568 (Q-24, Q-30, Q-49).
- Stack de la landing: Astro estático + Tailwind en Cloudflare Workers, inscripciones en D1
  (`Docs/frontend-stack-landing.md`).
- Abierto: si se anuncia lo que viene después (Q-34), dominio definitivo de la landing (Q-39), revisión legal
  y razón social/CUIT.

## Brand Commitments

- Voseo, tono cercano y práctico, sin abusar de modismos; referencia de comunicación: Mercado Pago (Q-27).
- Vocabulario del tambo (rodeo, ordeñe, fosa, litros, mastitis, lote, encargado, tambero, rentabilidad,
  planilla, tablero…) y nunca la lista NO de Q-16 (dashboard, onboarding, insights, SaaS, KPI, feature,
  machine learning, visión 360…).
- Se habla de lo que el productor hace y obtiene, no de cómo está construido (RN-producto-no-tecnologia).
- Los colores principales de marca no cambian; solo se ajustan para cumplir contraste (Q-28).
- Logo oficial: `src/assets/logo-tambo360.png` (negro) y `logo-tambo360-blanco.png` (Q-44).

## Evidence on Hand

- Fotos: `src/assets/images/` (hero, galpón, vacas). Las de ganado de carne se descartaron.
- Historia real de Ramón y Manuel (Q-13); el equipo está en `/equipo`.
- **No hay** testimonios, clientes, logos de aliados ni cifras de uso (Q-19). No inventarlos.
- El equipo no es del sector lechero ni de Entre Ríos, Corrientes o Patagonia (Q-17, Q-42).

## Product Principles

1. El productor tiene que reconocer su día antes de que le vendan nada.
2. Una sola acción principal por página; WhatsApp y "Ver demo" acompañan.
3. Prometer solo lo que la app hace hoy.
4. Pensado para el celular, en la fosa y al aire libre.

## Accessibility & Inclusion

Se lee bien en un celular de gama media al aire libre: todo texto cumple WCAG AA (4.5:1 cuerpo, 3:1 grande).
Todo se usa solo con teclado. Lighthouse móvil 95 o más en las cuatro categorías.
