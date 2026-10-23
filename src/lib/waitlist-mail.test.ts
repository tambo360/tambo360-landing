import { afterEach, describe, expect, it, vi } from 'vitest';
import type { WaitlistEntry } from './waitlist';
import { buildWaitlistMail, sendWaitlistMail } from './waitlist-mail';

const entry: WaitlistEntry = {
  nombre: 'Manuel Pereyra',
  telefono: '3434567890',
  rol: 'duenio',
  provincia: 'Entre Ríos',
  vacasCampo: '100-300',
  origen: 'hero',
};

const config = { apiKey: 're_test', from: 'onboarding@resend.dev', to: 'equipo@example.com' };
// 15:30 UTC is 12:30 in Argentina.
const receivedAt = new Date('2026-10-23T15:30:00Z');

const answering = (response: Response) => vi.fn<typeof fetch>(async () => response);
const sentRequest = (send: ReturnType<typeof answering>) => {
  const [url, init] = send.mock.calls[0];
  return { url, init: init!, headers: init!.headers as Record<string, string>, body: JSON.parse(String(init!.body)) };
};

describe('buildWaitlistMail', () => {
  it('puts name and phone in the subject so the team spots repeated sign-ups', () => {
    expect(buildWaitlistMail(entry, receivedAt).subject).toBe('Inscripción al piloto: Manuel Pereyra, 3434567890');
  });

  it('lists every field with its label, a WhatsApp link and the Argentine time', () => {
    const { text } = buildWaitlistMail(entry, receivedAt);
    expect(text.split('\n')).toEqual([
      'Nombre: Manuel Pereyra',
      'WhatsApp: +54 9 3434567890 (https://wa.me/5493434567890)',
      'Rol en el tambo: Dueño o dueña del tambo',
      'Provincia: Entre Ríos',
      'Vacas en el campo: Entre 100 y 300',
      'Origen: hero',
      'Fecha: 23/10/26, 12:30 (hora de Argentina)',
      'Aceptó la política de privacidad: sí',
    ]);
  });

  it('says "sin dato" for the optional fields left empty', () => {
    const { text } = buildWaitlistMail({ ...entry, rol: null, provincia: null, vacasCampo: null, origen: null }, receivedAt);
    expect(text).toContain('Rol en el tambo: sin dato');
    expect(text).toContain('Provincia: sin dato');
    expect(text).toContain('Vacas en el campo: sin dato');
    expect(text).toContain('Origen: sin dato');
  });
});

describe('sendWaitlistMail', () => {
  afterEach(() => vi.restoreAllMocks());

  it('sends the mail to the team through Resend and reports it sent', async () => {
    const send = answering(Response.json({ id: 'abc' }));

    const result = await sendWaitlistMail(entry, config, { fetch: send, now: receivedAt });

    expect(result).toBe('sent');
    const request = sentRequest(send);
    expect(request.url).toBe('https://api.resend.com/emails');
    expect(request.headers.Authorization).toBe('Bearer re_test');
    expect(request.headers['User-Agent']).toBeTruthy();
    expect(request.body).toEqual({
      from: 'onboarding@resend.dev',
      to: 'equipo@example.com',
      subject: buildWaitlistMail(entry, receivedAt).subject,
      text: buildWaitlistMail(entry, receivedAt).text,
    });
  });

  it('gives an identical resubmission the same idempotency key', async () => {
    const first = answering(Response.json({ id: 'abc' }));
    const second = answering(Response.json({ id: 'abc' }));

    await sendWaitlistMail(entry, config, { fetch: first });
    await sendWaitlistMail({ ...entry }, config, { fetch: second });

    expect(sentRequest(second).headers['Idempotency-Key']).toBe(sentRequest(first).headers['Idempotency-Key']);
  });

  it('gives a resubmission with a changed field a new idempotency key', async () => {
    const first = answering(Response.json({ id: 'abc' }));
    const second = answering(Response.json({ id: 'def' }));

    await sendWaitlistMail(entry, config, { fetch: first });
    await sendWaitlistMail({ ...entry, provincia: 'Santa Fe' }, config, { fetch: second });

    expect(sentRequest(second).headers['Idempotency-Key']).not.toBe(sentRequest(first).headers['Idempotency-Key']);
  });

  it.each([
    ['the testing domain refuses the recipient', 403, 'validation_error'],
    ['the daily quota is used up', 429, 'daily_quota_exceeded'],
    ['Resend is down', 503, 'service_unavailable'],
  ])('reports failed when %s', async (_case, status, name) => {
    vi.spyOn(console, 'error').mockImplementation(() => {});
    const send = answering(Response.json({ name, message: 'detail' }, { status }));

    await expect(sendWaitlistMail(entry, config, { fetch: send })).resolves.toBe('failed');
  });

  it('reports failed when Resend cannot be reached or does not answer in time', async () => {
    vi.spyOn(console, 'error').mockImplementation(() => {});
    const send = vi.fn<typeof fetch>(async () => {
      throw new DOMException('The operation was aborted due to timeout', 'TimeoutError');
    });

    await expect(sendWaitlistMail(entry, config, { fetch: send })).resolves.toBe('failed');
  });

  it('logs the failure without the person\'s data', async () => {
    const log = vi.spyOn(console, 'error').mockImplementation(() => {});
    const send = answering(Response.json({ name: 'validation_error', message: 'only to owner@example.com' }, { status: 403 }));

    await sendWaitlistMail(entry, config, { fetch: send });

    const logged = log.mock.calls.flat().join(' ');
    expect(logged).toContain('403');
    expect(logged).not.toContain(entry.telefono);
    expect(logged).not.toContain(entry.nombre);
    expect(logged).not.toContain('owner@example.com');
  });
});
