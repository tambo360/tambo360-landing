// launchedAnswer replaces answer from the launch date (site.launchDate).
export type Faq = { id: string; question: string; answer: string; launchedAnswer?: string };

// Answers are HTML so they can link to other pages; they are rendered as-is and also flattened for FAQPage JSON-LD.
export const faqs: Faq[] = [
  {
    id: 'que-resuelve',
    question: '¿Qué problema me resuelve Tambo360 en el trabajo diario del tambo?',
    answer:
      'Junta en un solo lugar lo que hoy está repartido entre el cuaderno, la planilla y la cabeza del encargado: los litros de cada ordeñe, la leche que se tira y la plata que se gasta. Con eso calcula si el tambo es rentable y te avisa cuando algo se sale de lo normal, para que no te enteres de palabra días después.',
  },
  {
    id: 'sin-senal',
    question: '¿Funciona cuando hay poca señal o no tengo internet?',
    answer:
      'Sí. En la fosa anotás igual aunque no haya señal: los datos quedan guardados en el celular y se sincronizan solos cuando vuelve la conexión.',
  },
  {
    id: 'celular-tablet',
    question: '¿Puedo usar Tambo360 desde el celular o la tablet mientras estoy en el tambo?',
    answer:
      'Sí. Es una aplicación web: la usás en la PC de la oficina y la instalás en el celular o la tablet para llevarla a la fosa. No hace falta bajarla de Play Store.',
  },
  {
    id: 'costos',
    question: '¿Me ayuda a conocer mis costos y si el tambo me deja plata?',
    answer:
      'Sí. Cargás los gastos del tambo en el momento y quedan al lado de la producción y de las mermas. Así Tambo360 calcula la rentabilidad sin que tengas que sentarte horas a cruzar planillas.',
  },
  {
    id: 'produccion',
    question: '¿Puedo registrar la producción y los litros de cada ordeñe?',
    answer:
      'Sí. Es lo primero que se anota: los litros de cada ordeñe, en la fosa y en pocos pasos. También registrás la leche que se descarta, para que la merma quede contada.',
  },
  {
    id: 'rodeo',
    question: '¿Puedo controlar el rodeo, las altas, las bajas y las mermas?',
    answer:
      'Sí. Llevás el inventario de tu rodeo, registrás las altas y bajas de animales y anotás las mermas. Todo queda en el historial del tambo.',
  },
  {
    id: 'alertas',
    question: '¿Qué indicadores y avisos voy a recibir después de cargar mis datos?',
    answer:
      'En el tablero ves los litros, las mermas y los gastos de un vistazo. Además, Tambo360 revisa tus números con inteligencia artificial y te avisa cuando la merma de un lote supera lo habitual o la producción cae. No hace predicciones mágicas: trabaja con lo que se anota.',
  },
  {
    id: 'tiempo',
    question: '¿Cuánto tiempo tengo que dedicarle por día?',
    answer:
      'Lo que tardás en anotar, pero una sola vez: lo cargás en el celular en el momento y no hay que pasarlo después del cuaderno a la planilla. La carga inicial del rodeo lleva de 1 a 30 minutos y se hace una sola vez.',
  },
  {
    id: 'carga-inicial',
    question: '¿Tengo que cargar todo el rodeo a mano?',
    answer:
      'Por ahora sí, todavía no se puede importar desde Excel. Podés cargar animal por animal (hasta 100) o hacer la carga rápida por rodeo. Lleva de 1 a 30 minutos, se hace una sola vez, y en el piloto te acompañamos por WhatsApp.',
    launchedAnswer:
      'Por ahora sí, todavía no se puede importar desde Excel. Podés cargar animal por animal (hasta 100) o hacer la carga rápida por rodeo. Lleva de 1 a 30 minutos, se hace una sola vez, y te acompañamos por WhatsApp.',
  },
  {
    id: 'capacitacion',
    question: '¿Necesito hacer un curso para usarla?',
    answer:
      'No. Está pensada para usarse sin cursos. Vamos a subir tutoriales muy cortos a YouTube y, si te trabás, nos escribís por WhatsApp.',
  },
  {
    id: 'precio',
    question: '¿Cuánto cuesta?',
    answer:
      'El piloto es 100% gratis durante 3 meses y no pide tarjeta. Tambo360 no va a ser gratis para siempre: más adelante se va a cobrar en pesos, según la cantidad de usuarios, con una prueba gratis de 30 días. Los precios todavía no están definidos.',
    launchedAnswer:
      'Tambo360 no va a ser gratis para siempre: más adelante se va a cobrar en pesos, según la cantidad de usuarios, con una prueba gratis de 30 días. Los precios todavía no están definidos.',
  },
  {
    id: 'soporte',
    question: '¿Cómo me ayudan si tengo un problema?',
    answer: 'Por WhatsApp, las 24 horas. Es el único canal de soporte, para que no tengas que llenar formularios ni esperar mails.',
  },
  {
    id: 'datos',
    question: '¿Quién puede ver la información de mi tambo y cómo se usan mis datos?',
    answer:
      'La información de tu tambo la ve tu cuenta. Usamos los datos para que los avisos de la inteligencia artificial sean cada vez mejores. Todo el detalle está en la <a href="/privacidad">política de privacidad</a>.',
  },
];

export const homeFaqIds = ['sin-senal', 'tiempo', 'precio', 'datos'];
