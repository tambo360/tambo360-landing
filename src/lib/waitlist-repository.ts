import type { WaitlistEntry } from './waitlist';

export type SaveResult = 'created' | 'duplicate';

type D1Like = {
  prepare(query: string): { bind(...values: unknown[]): { run(): Promise<unknown> } };
};

export async function saveWaitlistEntry(db: D1Like, entry: WaitlistEntry): Promise<SaveResult> {
  try {
    await db
      .prepare(
        `INSERT INTO waitlist (nombre, telefono, rol, provincia, vacas_ordene, acepto_privacidad, origen)
         VALUES (?, ?, ?, ?, ?, 1, ?)`,
      )
      .bind(entry.nombre, entry.telefono, entry.rol, entry.provincia, entry.vacasOrdene, entry.origen)
      .run();
    return 'created';
  } catch (error) {
    // The UNIQUE index on telefono is what makes "already signed up" true even under concurrent submits.
    if (error instanceof Error && /UNIQUE constraint failed/i.test(error.message)) return 'duplicate';
    throw error;
  }
}
