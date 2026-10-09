# F-001 · Landing de Tambo360

## Qué resuelve
El dueño o administrador de un tambo chico o mediano llega desde redes sociales o un mensaje
directo y no sabe qué es Tambo360 ni si es para él. La página tiene que hacerle sentir que
entendemos su día (el cuaderno que no alcanza, la leche que se tira y nadie anota, enterarse
tarde) y llevarlo a anotarse en el piloto gratuito antes del lanzamiento del 26/10/2026; desde
el lanzamiento, a registrarse en la app (RN-desde-lanzamiento).

## Alcance

**Entra**
- Página de inicio que cuenta los 3 problemas, cómo los resuelve Tambo360, qué hay el día del lanzamiento, que funciona sin señal, qué recibe quien se anota y quién está detrás.
- Formulario para anotarse en el piloto o en la lista de espera, hasta el lanzamiento.
- Botón "Registrarme" que lleva a la app (https://tambo360.vercel.app/registrarse), desde el lanzamiento.
- Botón flotante de WhatsApp en todas las páginas.
- Botón "Ver demo" en la barra superior que lleva al entorno de prueba (https://tambo360.vercel.app/iniciar-sesion).
- Página de preguntas frecuentes con las preguntas de Q-25 y las dudas de Q-21 y Q-23.
- Política de privacidad y términos y condiciones.
- Página de "no encontrada".
- Enlaces a email y redes oficiales (Q-27).

**Sale**
- Precios: todavía no se muestran (Q-26). Sí se puede decir que habrá prueba de 30 días sin tarjeta y que no será gratis para siempre.
- Testimonios y logos de aliados: no hay (Q-19). La confianza se apoya en el equipo y en el trabajo de campo.
- Lo que viene después (Q-07): no se anuncia hasta que se responda Q-34.
- Cuenta, login o alta dentro de la landing: eso vive en la app. La landing solo enlaza a la demo y, desde el lanzamiento, al registro.
- Botón de arrepentimiento: no hay pagos durante el piloto (Q-27). Se agrega cuando se cobre.
- Integración con Excel: está pensada, no existe (Q-10). No se promete.

## Reglas de negocio

### RN-una-accion-principal · origin: Q-02
La acción principal de cada página es anotarse en el piloto hasta el lanzamiento y registrarse en la app desde el lanzamiento (RN-desde-lanzamiento); WhatsApp y "Ver demo" son acciones secundarias.

### RN-desde-lanzamiento · origin: Q-46
Desde el 26/10/2026 a las 00:00 hora de Argentina (`site.launchDate`) ninguna página muestra el piloto: no hay formulario, ni sección del piloto, ni "Anotarme", ni textos sobre el piloto, y los botones de acción llevan a https://tambo360.vercel.app/registrarse. Antes de esa fecha el sitio no cambia. RN-beneficio-piloto, RN-tres-fundadores y las RN-inscripcion-* rigen solo hasta el lanzamiento.

### RN-beneficio-piloto · origin: Q-03
Quien se anota recibe acceso gratuito al piloto de 3 meses y acompañamiento 1 a 1 por WhatsApp para configurar su tambo.

### RN-tres-fundadores · origin: Q-18
El piloto oficial arranca con los 3 primeros tambos fundadores; quien se anota después queda en lista de espera.

### RN-voz-del-tambero · origin: Q-16
Los textos usan voseo y el vocabulario del tambo, y nunca usan palabras de la lista NO de Q-16.

### RN-producto-no-tecnologia · origin: Q-27
Los textos hablan de lo que el productor hace y obtiene (registrar, controlar, ordenar, enterarse a tiempo), no de cómo está construido.

### RN-no-prometer · origin: Q-23
La página nunca promete predicciones, carga automática de datos, una app de Play Store ni gratuidad permanente.

### RN-sin-senal · origin: Q-08
La página dice que la app se usa en la PC, el celular o la tablet, y que en la fosa funciona sin señal y sincroniza después.

### RN-inscripcion-consentimiento · origin: Q-29
Para anotarse, la persona acepta la política de privacidad de forma explícita; sin esa aceptación la inscripción no se envía.

### RN-inscripcion-incompleta · origin: Q-02
Si falta un dato obligatorio o tiene un formato inválido, entonces la inscripción no se envía y se indica qué dato corregir, junto al campo.

### RN-inscripcion-repetida · origin: Q-02
Si el mismo teléfono ya está anotado, entonces no se crea una segunda inscripción y se le confirma a la persona que ya estaba en la lista.

### RN-inscripcion-falla · origin: Q-31
Si la inscripción no se puede guardar, entonces se le dice a la persona que no se guardó y se le ofrece escribir por WhatsApp; nunca se muestra éxito sin haber guardado.

### RN-inscripcion-guardada · origin: Q-31
Cada inscripción queda guardada con su fecha para saber cuántos tambos están interesados.

### RN-whatsapp-a-confirmar · origin: Q-30
Mientras el número de WhatsApp no esté confirmado, el botón flotante no aparece y en su lugar no se muestra un número falso.

### RN-ia-entrenamiento · origin: Q-29
Los legales informan que los datos se usan para entrenar y mejorar los agentes de IA de Tambo360.

### RN-retencion-sin-pago · origin: Q-29
Los legales informan que, si no se paga, el tambo y la información del usuario se eliminan después del plazo que fije la plataforma, nunca antes de 3 meses.

### RN-ia-tras-eliminacion · origin: Q-29, Q-37
Los legales informan que, después de eliminada la cuenta, los datos se siguen usando para la IA solo de forma disociada: sin nada que permita identificar a la persona ni al establecimiento.

### RN-campos-inscripcion · origin: Q-36, Q-45
La inscripción pide nombre y WhatsApp como obligatorios, y rol en el tambo, provincia y cantidad de vacas en el campo como opcionales (Q-45: antes eran vacas en ordeñe).

### RN-soporte-whatsapp · origin: Q-24
El soporte se ofrece solo por WhatsApp, las 24 horas.

## Requisitos no funcionales
- Se lee bien en un celular de gama media al aire libre: todo texto cumple contraste WCAG AA (4.5:1 cuerpo, 3:1 texto grande).
- Puntaje Lighthouse móvil de 95 o más en Performance, Accesibilidad, Buenas prácticas y SEO, medido sobre el build de producción.
- Al compartir cualquier página en WhatsApp, Facebook, LinkedIn o X se ve imagen, título y descripción.
- Los buscadores pueden indexar todas las páginas públicas; las páginas de resultado del formulario no se indexan.
- Se navega y se completa el formulario solo con teclado.

## Historias
| Historia | Qué cubre |
|---|---|
| US-001-entender-tambo360 | El productor entiende en la home qué problemas resuelve y cómo |
| US-002-anotarse-piloto | Anotarse, con datos inválidos, repetidos o error al guardar |
| US-003-consultar-dudas | Encontrar respuestas en preguntas frecuentes y escribir por WhatsApp |
| US-004-leer-legales | Leer privacidad y términos antes de anotarse |

## Abierto
- Q-34 · ¿Se anuncia lo que viene después?
- Q-39 · Dominio de la landing (tambo360.vercel.app es el de la app).
- Q-30 · Número de WhatsApp.
- Revisión legal de privacidad y términos; razón social, CUIT y domicilio.
