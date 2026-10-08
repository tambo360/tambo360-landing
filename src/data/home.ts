import type { IconName } from '../components/ui/Icon.astro';

type Item = { icon: IconName; title: string; body: string };

export const problems: Item[] = [
  {
    icon: 'clipboard-list',
    title: 'El cuaderno no alcanza',
    body: 'Los litros se anotan en la fosa y llegan a la oficina días después, si llegan. Una hoja mojada o perdida y ese día no existió.',
  },
  {
    icon: 'clock',
    title: 'Te enterás tarde',
    body: 'Una vaca con mastitis, un lote que baja los litros. Te lo cuentan de palabra, cuando ya pasaron días y la plata ya se perdió.',
  },
  {
    icon: 'trending-down',
    title: 'No sabés si el tambo rinde',
    body: 'Sabés cuánta leche sale, pero los gastos están en otro lado. Juntar todo para saber si te queda algo lleva horas frente a la computadora.',
  },
];

export const steps: Item[] = [
  {
    icon: 'device-mobile',
    title: 'Anotás en la fosa',
    body: 'Desde el celular, en pocos pasos. Si no hay señal se guarda igual, y se sincroniza solo cuando vuelve.',
  },
  {
    icon: 'refresh',
    title: 'Todo queda en un solo lugar',
    body: 'Ordeñe, leche tirada y plata gastada se juntan solos. Desde la oficina o desde la ciudad ves lo mismo que se anotó en la fosa.',
  },
  {
    icon: 'bell',
    title: 'Te avisa a tiempo',
    body: 'Tambo360 revisa tus números todos los días con inteligencia artificial y te avisa cuando algo se sale de lo normal, antes de que sea tarde.',
  },
];

export const modules: Item[] = [
  {
    icon: 'droplet',
    title: 'Producción del día',
    body: 'Registrás los litros de cada ordeñe en la fosa, aunque no haya señal.',
  },
  {
    icon: 'alert-circle',
    title: 'Mermas de leche',
    body: 'La leche que se descarta también se anota. Lo que se tira, se cuenta.',
  },
  {
    icon: 'wallet',
    title: 'Gastos del tambo',
    body: 'Cargás los gastos en el momento, no a fin de mes, y quedan al lado de la producción.',
  },
  {
    icon: 'bell',
    title: 'Avisos a tiempo',
    body: 'Si la merma de un lote se dispara o la producción cae, te enterás ese día y no de palabra.',
  },
  {
    icon: 'chart-bar',
    title: 'Tablero del tambo',
    body: 'Litros, mermas y gastos en una sola pantalla para ver cómo viene el mes y si el tambo es rentable.',
  },
  {
    icon: 'arrows-exchange',
    title: 'Tu rodeo, al día',
    body: 'El inventario de tu rodeo con las altas y bajas de animales, siempre actualizado.',
  },
];

export const honesty: { title: string; body: string }[] = [
  {
    title: 'No adivina',
    body: 'Si no se anota, no hay análisis. Por eso anotar en Tambo360 lleva pocos pasos, en el mismo momento del ordeñe.',
  },
  {
    title: 'La primera carga lleva un rato',
    body: 'Cargar el rodeo lleva de 1 a 30 minutos, según lo hagas vaca por vaca o por rodeo. Se hace una sola vez, y en el piloto te acompañamos por WhatsApp.',
  },
  {
    title: 'No es una app de Play Store',
    body: 'Se abre desde el navegador en la PC de la oficina, y la instalás en el celular o la tablet para llevarla a la fosa.',
  },
  {
    title: 'No va a ser gratis para siempre',
    body: 'El piloto sí: 3 meses sin pagar nada y sin tarjeta. Después se va a cobrar, y los precios todavía no están definidos.',
  },
];

export const pilotBenefits: Item[] = [
  {
    icon: 'gift',
    title: '3 meses gratis',
    body: 'Usás Tambo360 completo durante el piloto, sin pagar nada y sin poner tarjeta.',
  },
  {
    icon: 'brand-whatsapp',
    title: 'Te acompañamos 1 a 1',
    body: 'Por WhatsApp te ayudamos a configurar tu tambo y a sacarle provecho desde el primer día.',
  },
  {
    icon: 'users',
    title: 'Tu opinión cambia la app',
    body: 'Buscamos 3 tambos fundadores. Lo que nos cuentes en el piloto define cómo sigue Tambo360.',
  },
];
