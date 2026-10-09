import { describe, expect, it } from 'vitest';
import type { WaitlistEntry } from './waitlist';
import { saveWaitlistEntry } from './waitlist-repository';

const entry: WaitlistEntry = {
  nombre: 'Manuel Pereyra',
  telefono: '3434567890',
  rol: 'duenio',
  provincia: 'Entre Ríos',
  vacasCampo: '100-300',
  origen: null,
};

const fakeDb = (run: () => Promise<unknown>) => {
  const calls: { query: string; values: unknown[] }[] = [];
  return {
    calls,
    prepare: (query: string) => ({
      bind: (...values: unknown[]) => {
        calls.push({ query, values });
        return { run };
      },
    }),
  };
};

describe('saveWaitlistEntry', () => {
  it('inserts the entry with consent recorded and returns created', async () => {
    const db = fakeDb(async () => ({ success: true }));
    await expect(saveWaitlistEntry(db, entry)).resolves.toBe('created');
    expect(db.calls).toHaveLength(1);
    expect(db.calls[0].query).toMatch(/INSERT INTO waitlist/);
    expect(db.calls[0].query).toMatch(/acepto_privacidad/);
    expect(db.calls[0].values).toEqual(['Manuel Pereyra', '3434567890', 'duenio', 'Entre Ríos', '100-300', null]);
  });

  it('answers duplicate when the phone is already signed up', async () => {
    const db = fakeDb(async () => {
      throw new Error('D1_ERROR: UNIQUE constraint failed: waitlist.telefono: SQLITE_CONSTRAINT');
    });
    await expect(saveWaitlistEntry(db, entry)).resolves.toBe('duplicate');
  });

  it('lets any other database failure reach the caller', async () => {
    const db = fakeDb(async () => {
      throw new Error('D1_ERROR: no such table: waitlist');
    });
    await expect(saveWaitlistEntry(db, entry)).rejects.toThrow('no such table');
  });
});
