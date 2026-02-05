# HubSpot Forms Setup

Contact and email (newsletter) forms are wired to HubSpot. Configure the following in your HubSpot account and environment.

## 1. HubSpot forms

1. In **HubSpot**: Marketing → Lead Capture → Forms.
2. Create (or use existing) forms:
   - **Contact form** – e.g. first name, last name, email, company, message.
   - **Newsletter form** – e.g. email (and optionally first name).
3. For each form, open it → **Share** → **Embed** and note:
   - **Portal ID** (in the embed URL or script).
   - **Form ID** (in the embed script, e.g. `formId: "xxxxx"`).

## 2. Environment variables

Add these to `.env.local` (and to your hosting provider, e.g. Vercel).

### Required for embedded forms (contact + newsletter pages)

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_HUBSPOT_PORTAL_ID` | Your HubSpot portal ID (e.g. from the form embed code). |
| `NEXT_PUBLIC_HUBSPOT_CONTACT_FORM_ID` | Form ID of the **contact** form. |
| `NEXT_PUBLIC_HUBSPOT_NEWSLETTER_FORM_ID` | Form ID of the **newsletter** form. |

### Required for footer newsletter (API submit)

The footer “Subscribe” form posts to `/api/newsletter-subscription`, which submits to HubSpot. Use the same newsletter form as above.

| Variable | Description |
|----------|-------------|
| `HUBSPOT_PORTAL_ID` | Same as `NEXT_PUBLIC_HUBSPOT_PORTAL_ID` (optional if that is set). |
| `HUBSPOT_NEWSLETTER_FORM_ID` | Same as `NEXT_PUBLIC_HUBSPOT_NEWSLETTER_FORM_ID` (optional if that is set). |

If only the `NEXT_PUBLIC_*` vars are set, the API route will use those for the newsletter submission.

### Example `.env.local`

```env
# HubSpot (contact + newsletter forms)
NEXT_PUBLIC_HUBSPOT_PORTAL_ID=12345678
NEXT_PUBLIC_HUBSPOT_CONTACT_FORM_ID=abc12345-xxxx-xxxx-xxxx-xxxxxxxxxxxx
NEXT_PUBLIC_HUBSPOT_NEWSLETTER_FORM_ID=def67890-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```

## 3. Field names for API (footer signup)

The newsletter API sends these to HubSpot:

- `email` – required.
- `firstname` – from “name” if provided, otherwise derived from email.
- `source` – e.g. `"Footer"` when coming from the footer.
- `campaign` – if you pass it from the form.

Ensure your HubSpot **newsletter** form has an **email** field (and optionally **firstname**). Internal names in HubSpot should match: `email`, `firstname`, `source`, `campaign` if you use them.

## 4. Where forms appear

- **Contact form**: `/contact` – HubSpot contact form embed.
- **Newsletter form (hero)**: `/newsletter` – HubSpot newsletter form embed.
- **Footer signup**: Footer “Subscribe” → `POST /api/newsletter-subscription` → HubSpot Forms API.

Once the env vars are set and the HubSpot form IDs match, contact and email forms will run through HubSpot.
