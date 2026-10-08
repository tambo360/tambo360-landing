import { SITE_URL } from './site-url.mjs';

export const site = {
    name: 'Tambo360',
    productionDate: new Date("2026-10-26"),
    url: SITE_URL,
    locale: 'es_AR',
    lang: 'es-AR',
    description:
        'Registrás el ordeñe, controlás el rodeo y ordenás los costos desde un solo lugar. Funciona en la fosa, aunque no haya señal. Sumate al piloto gratis de 3 meses.',
    ogImage: '/og-image.jpg',
    demoUrl: 'https://tambo360.vercel.app/iniciar-sesion',
    launchDate: '2026-10-26',
    launchDateLabel: '26 de octubre',
    email: 't360.arg@gmail.com',
    // Empty until the support number is confirmed: the floating button stays hidden meanwhile.
    whatsappNumber: '',
    whatsappMessage: 'Hola, quiero saber más sobre Tambo360 para mi tambo.',
    social: {
        instagram: 'https://www.instagram.com/tambo360.app/',
        facebook: 'https://www.facebook.com/profile.php?id=61573415774990',
        linkedin: 'https://www.linkedin.com/company/tambo360/',
        tiktok: 'https://www.tiktok.com/@tambo3601',
    },
} as const;

export function whatsappUrl(message: string = site.whatsappMessage): string | null {
    if (!site.whatsappNumber) return null;
    return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const nav = [
    { href: '/#como-funciona', label: 'Cómo funciona' },
    { href: '/#que-podes-hacer', label: 'Qué podés hacer' },
    { href: '/equipo', label: 'Quiénes somos' },
    { href: '/preguntas-frecuentes', label: 'Preguntas' },
] as const;
