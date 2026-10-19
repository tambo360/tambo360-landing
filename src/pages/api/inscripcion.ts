import type { APIRoute } from 'astro';
import { type SubmitStatus, validateWaitlist } from '../../lib/waitlist';

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

  // No store is configured on this host yet; until one is chosen,
  // answering ok would tell the person they are on the list when nothing was saved.
  console.error('waitlist: no storage configured, entry not saved');
  return respond('error', 503);
};

export const ALL: APIRoute = () => new Response(null, { status: 405, headers: { Allow: 'POST' } });
