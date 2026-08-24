# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

BEPASS's marketing site (bepass.com.ar) — a single-page Next.js 15 (App Router) landing page in Spanish for an AI-focused business consultancy, plus one contact-form API route. React 19, TypeScript, Tailwind CSS v4.

## Commands

```bash
npm run dev      # start dev server (Turbopack) at localhost:3000
npm run build    # production build (runs `next-sitemap` as postbuild to regenerate sitemap.xml/robots.txt)
npm run start    # serve the production build
npm run lint     # next lint (flat config: next/core-web-vitals + next/typescript)
```

There is no test suite/runner configured in this repo.

## Environment variables

Required in `.env` (see `.env` for the empty template):
- `RESEND_API_KEY` / `RESEND_TO_CONTACT` — used by the `/api/send` route to email contact-form submissions via Resend.
- `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` / `RECAPTCHA_PRIVATE_KEY` — invisible reCAPTCHA v2 on the contact form, verified server-side via `siteverify`.

## Architecture

- **Single page, section-composed**: `app/page.tsx` renders the whole home page as a stack of section components from `app/components/*` (`Hero`, `ProblemSection`, `HowWeWork`, `StorySection`, `OurTeam`, `ResultsSection`). `OurTeam` is loaded via `next/dynamic` + `Suspense` to defer it. `Header`/`Footer`/`Toaster`/`CookiesBanner` live in the root `app/layout.tsx` instead, so they persist outside the page tree.
- **Smooth scroll via context**: `app/context/ScrollContext.tsx` wraps the page in a `ScrollProvider` that owns a `Lenis` smooth-scroll instance and drives its `requestAnimationFrame` loop. Any component needing to scroll to a section (e.g. nav links, scroll buttons) calls `useScroll().scrollTo(...)` instead of native scroll APIs.
- **Consent-gated reCAPTCHA**: reCAPTCHA is not loaded until the user consents. `CookiesBanner.tsx` writes the choice to `localStorage["bepass-consent"]` and dispatches a `window` event `consent:ready`; `useRecaptchaConsent` (and `ContactForm` directly) listen for that event / read localStorage on mount to decide whether to load/mount the reCAPTCHA widget. The banner also pushes Google Consent Mode v2 updates (`gtag('consent', 'update', ...)`) matching the choice; default-denied consent is set in `app/layout.tsx` via an inline `beforeInteractive` script so it runs before any tag manager script.
- **Contact form flow**: `ContactForm.tsx` (client) collects fields, executes the invisible reCAPTCHA to get a token, and POSTs `FormData` to `app/api/send/route.ts`. That route: verifies the token against Google's `siteverify` endpoint, validates required fields with the shared `validateFormFields` (`app/lib/validateFormFields.ts`) — same validation shape should be kept in sync between client expectations and this server-side check — sanitizes/escapes all user input before interpolating it into the outgoing HTML email, then sends via Resend. Country codes for the phone-prefix `<select>` come from `app/lib/countries.ts`.
- **Styling**: Tailwind v4 via `@import "tailwindcss"` in `app/globals.css`, with theme tokens (`--background`, `--foreground`, `--title_color`, `--color-primary`) defined as CSS variables and exposed through `@theme inline`. There's no `tailwind.config.*` — theme customization lives directly in `globals.css`.
- **Path alias**: `@/*` maps to the repo root (`tsconfig.json`), e.g. `@/app/lib/validateFormFields`.
- **SEO**: `next-sitemap.config.js` generates `sitemap.xml`/`robots.txt` on build against `siteUrl: https://www.bepass.com.ar`, excluding `/api/*`. Page metadata (title, OG/Twitter tags, robots directives) is defined in `app/layout.tsx`.
