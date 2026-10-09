import { SITE_URL } from './site-url.mjs';

export const site = {
    name: 'Tambo360',
    url: SITE_URL,
    locale: 'es_AR',
    lang: 'es-AR',
    description:
        'Registrás el ordeñe, controlás el rodeo y ordenás los costos desde un solo lugar. Funciona en la fosa, aunque no haya señal. Sumate al piloto gratis de 3 meses.',
    // Meta tags are fixed at build time: a build from the launch date on uses this one.
    launchedDescription:
        'Registrás el ordeñe, controlás el rodeo y ordenás los costos desde un solo lugar. Funciona en la fosa, aunque no haya señal. Probalo 30 días gratis.',
    ogImage: '/og-image.jpg',
    demoUrl: 'https://tambo360.vercel.app/iniciar-sesion',
    registerUrl: 'https://tambo360.vercel.app/registrarse',
    // Midnight in Argentina: a bare '2026-10-26' would be read as UTC, 21:00 of the day before here.
    launchDate: '2026-10-26T00:00:00-03:00',
    launchDateLabel: '26 de octubre',
    email: 't360.arg@gmail.com',
    // wa.me format: digits only, 54 + 9 (Argentine mobile) + area code without 0 + number without 15. Empty hides the floating button.
    whatsappNumber: '5491168318568',
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

export function isLaunched(now: Date = new Date()): boolean {
    return now.getTime() >= new Date(site.launchDate).getTime();
}

export const nav = [
    { href: '/#como-funciona', label: 'Cómo funciona' },
    { href: '/#que-podes-hacer', label: 'Qué podés hacer' },
    { href: '/equipo', label: 'Quiénes somos' },
    { href: '/preguntas-frecuentes', label: 'Preguntas' },
] as const;
