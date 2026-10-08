import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';
import { type SubmitStatus, validateWaitlist } from '../../lib/waitlist';
import { saveWaitlistEntry } from '../../lib/waitlist-repository';

export const prerender = false;

export const POST: APIRoute = async ({ request, redirect }) => {
  const wantsJson = request.headers.get('accept')?.includes('application/json') ?? false;

  const respond = (status: SubmitStatus, httpStatus: number, errors?: Record<string, string>) =>
    wantsJson
      ? Response.json({ status, errors }, { status: httpStatus })
      : redirect(`/gracias?estado=${status}`, 303);

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return respond('invalido', 400);
  }

  const result = validateWaitlist(form);
  // Bots get the same answer as a person so the honeypot is not revealed.
  if (result.isBot) return respond('ok', 200);
  if (!result.ok) return respond('invalido', 422, result.errors);

  try {
    const saved = await saveWaitlistEntry(env.DB, result.entry);
    return saved === 'duplicate' ? respond('repetido', 200) : respond('ok', 201);
  } catch (error) {
    console.error('waitlist: could not save entry', error);
    return respond('error', 500);
  }
};

export const ALL: APIRoute = () => new Response(null, { status: 405, headers: { Allow: 'POST' } });
