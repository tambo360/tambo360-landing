// Shared by the form script (browser) and the endpoint (server): the server never trusts the browser's check.

export const ROLES = [
  { value: 'tambero', label: 'Tambero' },
  { value: 'duenio', label: 'Dueño o dueña del tambo' },
  { value: 'hijo', label: 'Hijo o hija del dueño' },
  { value: 'administrador', label: 'Administrador' },
  { value: 'encargado', label: 'Encargado' },
  { value: 'otro', label: 'Otro' },
] as const;

export const HERD_SIZES = [
  { value: 'menos-100', label: 'Menos de 100 vacas' },
  { value: '100-300', label: 'Entre 100 y 300' },
  { value: '300-600', label: 'Entre 300 y 600' },
  { value: 'mas-600', label: 'Más de 600' },
] as const;

export const PROVINCES = [
  'Buenos Aires',
  'Catamarca',
  'Chaco',
  'Chubut',
  'Córdoba',
  'Corrientes',
  'Entre Ríos',
  'Formosa',
  'Jujuy',
  'La Pampa',
  'La Rioja',
  'Mendoza',
  'Misiones',
  'Neuquén',
  'Río Negro',
  'Salta',
  'San Juan',
  'San Luis',
  'Santa Cruz',
  'Santa Fe',
  'Santiago del Estero',
  'Tierra del Fuego',
  'Tucumán',
].map((name) => ({ value: name, label: name }));

export type WaitlistEntry = {
  nombre: string;
  telefono: string;
  rol: string | null;
  provincia: string | null;
  vacasCampo: string | null;
  origen: string | null;
};

export type FieldName = 'nombre' | 'telefono' | 'rol' | 'provincia' | 'vacas' | 'acepto';
export type ValidationResult =
  | { ok: true; entry: WaitlistEntry; isBot: false }
  | { ok: false; errors: Partial<Record<FieldName, string>>; isBot: false }
  | { ok: false; errors: Record<string, never>; isBot: true };

const text = (form: FormData, name: string) => String(form.get(name) ?? '').trim();
const optionalIn = (value: string, allowed: readonly { value: string }[]) =>
  value && allowed.some((option) => option.value === value) ? value : null;

/** Keeps only digits and drops the country code, the mobile 9 and the trunk 0 so the same line is stored once. */
export function normalizePhone(raw: string): string {
  let digits = raw.replace(/\D/g, '');
  if (digits.startsWith('54')) digits = digits.slice(2);
  if (digits.startsWith('9') && digits.length === 11) digits = digits.slice(1);
  if (digits.startsWith('0')) digits = digits.slice(1);
  return digits;
}

export function validateWaitlist(form: FormData): ValidationResult {
  // Honeypot: hidden from people, filled in by bots.
  if (text(form, 'website')) return { ok: false, errors: {}, isBot: true };

  const errors: Partial<Record<FieldName, string>> = {};
  const nombre = text(form, 'nombre').replace(/\s+/g, ' ');
  const telefono = normalizePhone(text(form, 'telefono'));
  const rolRaw = text(form, 'rol');
  const provinciaRaw = text(form, 'provincia');
  const vacasRaw = text(form, 'vacas');

  if (nombre.length < 2) errors.nombre = 'Escribí tu nombre.';
  else if (nombre.length > 80) errors.nombre = 'El nombre es muy largo: usá hasta 80 letras.';

  if (!text(form, 'telefono')) errors.telefono = 'Escribí tu número de WhatsApp.';
  else if (telefono.length < 10 || telefono.length > 13)
    errors.telefono = 'Revisá el número: poné el código de área sin el 0 y el número sin el 15. Ej.: 343 4567890.';

  if (rolRaw && !optionalIn(rolRaw, ROLES)) errors.rol = 'Elegí una opción de la lista.';
  if (provinciaRaw && !optionalIn(provinciaRaw, PROVINCES)) errors.provincia = 'Elegí una provincia de la lista.';
  if (vacasRaw && !optionalIn(vacasRaw, HERD_SIZES)) errors.vacas = 'Elegí una opción de la lista.';

  if (text(form, 'acepto') !== '1') errors.acepto = 'Para anotarte tenés que aceptar la política de privacidad.';

  if (Object.keys(errors).length > 0) return { ok: false, errors, isBot: false };

  return {
    ok: true,
    isBot: false,
    entry: {
      nombre,
      telefono,
      rol: optionalIn(rolRaw, ROLES),
      provincia: optionalIn(provinciaRaw, PROVINCES),
      vacasCampo: optionalIn(vacasRaw, HERD_SIZES),
      origen: text(form, 'origen').slice(0, 60) || null,
    },
  };
}

export type SubmitStatus = 'ok' | 'repetido' | 'invalido' | 'error';
