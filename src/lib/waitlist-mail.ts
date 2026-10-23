import { HERD_SIZES, ROLES, type WaitlistEntry } from './waitlist';

export type MailConfig = { apiKey: string; from: string; to: string };
export type SendResult = 'sent' | 'failed';

const RESEND_URL = 'https://api.resend.com/emails';
const TIMEOUT_MS = 8000;

const labelOf = (value: string | null, options: readonly { value: string; label: string }[]) =>
  options.find((option) => option.value === value)?.label ?? 'sin dato';

const argentinaTime = new Intl.DateTimeFormat('es-AR', {
  timeZone: 'America/Argentina/Buenos_Aires',
  dateStyle: 'short',
  timeStyle: 'short',
  hourCycle: 'h23',
});

/** Plain text on purpose: nothing the person typed can be read as HTML by the team's mail client. */
export function buildWaitlistMail(entry: WaitlistEntry, receivedAt: Date) {
  return {
    subject: `Inscripción al piloto: ${entry.nombre}, ${entry.telefono}`,
    text: [
      `Nombre: ${entry.nombre}`,
      `WhatsApp: +54 9 ${entry.telefono} (https://wa.me/549${entry.telefono})`,
      `Rol en el tambo: ${labelOf(entry.rol, ROLES)}`,
      `Provincia: ${entry.provincia ?? 'sin dato'}`,
      `Vacas en el campo: ${labelOf(entry.vacasCampo, HERD_SIZES)}`,
      `Origen: ${entry.origen ?? 'sin dato'}`,
      `Fecha: ${argentinaTime.format(receivedAt)} (hora de Argentina)`,
      'Aceptó la política de privacidad: sí',
    ].join('\n'),
  };
}

// The key covers every field, so an identical resubmission within Resend's 24 h window sends nothing
// while any change sends a new mail (the same key with another body would be rejected with 409).
async function idempotencyKey(entry: WaitlistEntry) {
  const bytes = new TextEncoder().encode(JSON.stringify(entry));
  const digest = await crypto.subtle.digest('SHA-256', bytes);
  const hex = Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, '0')).join('');
  return `inscripcion-${hex}`;
}

export async function sendWaitlistMail(
  entry: WaitlistEntry,
  config: MailConfig,
  { fetch: send = fetch, now = new Date() }: { fetch?: typeof fetch; now?: Date } = {},
): Promise<SendResult> {
  const mail = buildWaitlistMail(entry, now);
  try {
    const response = await send(RESEND_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${config.apiKey}`,
        'Content-Type': 'application/json',
        // Resend rejects requests without a User-Agent with 403.
        'User-Agent': 'tambo360-landing',
        'Idempotency-Key': await idempotencyKey(entry),
      },
      body: JSON.stringify({ from: config.from, to: config.to, subject: mail.subject, text: mail.text }),
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
    if (response.ok) return 'sent';
    // Only Resend's error code: its message can carry the account's address, and the entry is personal data.
    const body = (await response.json().catch(() => ({}))) as { name?: string };
    console.error(`waitlist: Resend answered ${response.status} ${body.name ?? ''}`.trim());
    return 'failed';
  } catch (error) {
    console.error(`waitlist: Resend unreachable (${error instanceof Error ? error.name : 'unknown'})`);
    return 'failed';
  }
}
