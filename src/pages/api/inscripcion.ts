import type { APIRoute } from 'astro';
import { RESEND_API_KEY } from 'astro:env/server';
import { site } from '../../config/site';
import { type SubmitStatus, validateWaitlist } from '../../lib/waitlist';
import { sendWaitlistMail } from '../../lib/waitlist-mail';

export const prerender = false;

// Resend's testing sender only delivers to the mailbox that owns the account, which is the site's address.
// Sending from or to anything else needs a verified domain.
const MAIL_FROM = 'Tambo360 <onboarding@resend.dev>';

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

  if (!RESEND_API_KEY) {
    console.error('waitlist: RESEND_API_KEY missing, entry not sent');
    return respond('error', 503);
  }

  const sent = await sendWaitlistMail(result.entry, { apiKey: RESEND_API_KEY, from: MAIL_FROM, to: site.email });
  return sent === 'sent' ? respond('ok', 200) : respond('error', 503);
};

export const ALL: APIRoute = () => new Response(null, { status: 405, headers: { Allow: 'POST' } });
