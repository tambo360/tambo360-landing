import { describe, expect, it } from 'vitest';
import { normalizePhone, validateWaitlist } from './waitlist';

const form = (fields: Record<string, string>) => {
  const data = new FormData();
  for (const [name, value] of Object.entries(fields)) data.set(name, value);
  return data;
};

const valid = { nombre: 'Manuel Pereyra', telefono: '343 4567890', acepto: '1' };

describe('normalizePhone', () => {
  it.each([
    ['+54 9 343 456-7890', '3434567890'],
    ['5493434567890', '3434567890'],
    ['03434567890', '3434567890'],
    ['343 4567890', '3434567890'],
    ['(0379) 412-3456', '3794123456'],
  ])('stores %s as %s so the same line is recognised', (raw, expected) => {
    expect(normalizePhone(raw)).toBe(expected);
  });
});

describe('validateWaitlist', () => {
  it('accepts the two required fields plus consent', () => {
    const result = validateWaitlist(form(valid));
    expect(result).toEqual({
      ok: true,
      isBot: false,
      entry: { nombre: 'Manuel Pereyra', telefono: '3434567890', rol: null, provincia: null, vacasCampo: null, origen: null },
    });
  });

  it('keeps the optional answers when they come from the lists', () => {
    const result = validateWaitlist(form({ ...valid, rol: 'encargado', provincia: 'Entre Ríos', vacas: '100-300', origen: 'instagram' }));
    expect(result.ok && result.entry).toMatchObject({ rol: 'encargado', provincia: 'Entre Ríos', vacasCampo: '100-300', origen: 'instagram' });
  });

  it('accepts Tambero as a role', () => {
    const result = validateWaitlist(form({ ...valid, rol: 'tambero' }));
    expect(result.ok && result.entry.rol).toBe('tambero');
  });

  it('trims the name and collapses inner spaces', () => {
    const result = validateWaitlist(form({ ...valid, nombre: '  Ramón    Gómez ' }));
    expect(result.ok && result.entry.nombre).toBe('Ramón Gómez');
  });

  it('reports every invalid field at once', () => {
    const result = validateWaitlist(form({ nombre: 'M', telefono: '123', rol: 'capataz', provincia: 'Uruguay', vacas: '5000' }));
    expect(result.ok).toBe(false);
    expect(!result.ok && Object.keys(result.errors).sort()).toEqual(['acepto', 'nombre', 'provincia', 'rol', 'telefono', 'vacas']);
  });

  it('asks for the WhatsApp number when it is missing', () => {
    const result = validateWaitlist(form({ nombre: 'Lucía', acepto: '1' }));
    expect(!result.ok && result.errors.telefono).toBe('Escribí tu número de WhatsApp.');
  });

  it('rejects a number too long to be an Argentine line', () => {
    const result = validateWaitlist(form({ ...valid, telefono: '3434567890123456' }));
    expect(!result.ok && result.errors.telefono).toMatch(/Revisá el número/);
  });

  it('does not sign anyone up without accepting the privacy policy', () => {
    const result = validateWaitlist(form({ nombre: 'Lucía', telefono: '351 6667788' }));
    expect(!result.ok && result.errors.acepto).toMatch(/política de privacidad/);
  });

  it('flags a bot when the hidden field is filled, without listing errors', () => {
    expect(validateWaitlist(form({ ...valid, website: 'http://spam.example' }))).toEqual({ ok: false, errors: {}, isBot: true });
  });

  it('cuts the campaign name to 60 characters', () => {
    const result = validateWaitlist(form({ ...valid, origen: 'x'.repeat(100) }));
    expect(result.ok && result.entry.origen).toHaveLength(60);
  });
});
