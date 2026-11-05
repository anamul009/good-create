# Good Create — corporate website (redesign)

Static corporate site built with [Astro](https://astro.build). Output is plain HTML/CSS/JS — no CMS, no database, no server runtime.

## Run

```bash
npm install
npm run dev       # http://localhost:4321 (live reload)
npm run build     # outputs ./dist
npm run preview   # serve ./dist locally
```

Deploy = upload the contents of `dist/` to any static host.

## Structure

| Path | Purpose |
| --- | --- |
| `src/data/content/en.ts`, `ja.ts` | **Shared content** per language — company profile, solutions, patents, news, history, menu. Both files have the same shape (type-checked). |
| `src/i18n/index.ts` | Language helpers (`getLang`, `localize`) and shared UI strings (header, footer, CTA) |
| `src/views/` | One template per page. Page-specific copy sits at the top of each file in an `{ en, ja }` block. |
| `src/pages/` and `src/pages/en/` | Thin routes: Japanese (default) at `/`, English at `/en/`. Each just renders its view. |
| `src/styles/global.css` | Design system (tokens, grid, components) |
| `public/js/site.js` | Menu, scroll reveal, hero video controls, form validation (no dependencies) |
| `src/data/images.ts` | Image registry (all photos optimized to AVIF/WebP at build) |
| `public/og/` | Social share images (ja.png, en.png, 1200×630) and square logo for structured data. Regenerate with `python scripts/make-og.py` |
| `public/docs/` | Waravi flyer and @CREATOR brochure PDFs (copied from the current site; old WordPress PDF URLs 301 here) |
| `public/media/hero.mp4` | Hero video (1.9 MB, from the current site, logo intro removed) |
| `public/.htaccess` | Security headers + HTTPS for Apache hosts (Xserver, Sakura, etc.) |
| `public/_headers` | Same headers for Netlify / Cloudflare Pages |
| `public/.well-known/security.txt` | Vulnerability disclosure contact |

## Security design

- **No WordPress / no server code** → removes plugin, login and database attack surface entirely.
- **Strict Content-Security-Policy**: `default-src 'none'`, scripts/styles/fonts only from own origin, no inline code, no `eval`, `frame-ancestors 'none'`.
- **Zero third-party requests**: fonts are self-hosted, no analytics, no CDNs, no tracking cookies.
- HSTS (preload-ready), `nosniff`, `X-Frame-Options: DENY`, strict Referrer-Policy, Permissions-Policy (camera/mic/geo off), COOP/COEP/CORP.
- Old WordPress probe URLs (`/wp-admin`, `/xmlrpc.php`…) return `410 Gone`.
- Contact form: client-side validation, honeypot + timing bot check, JSON POST to same origin only.

## Before launch — open items

1. **Contact form backend**: form posts JSON to `/api/contact`. Needs a small handler (e.g. Cloudflare Pages Function, or PHP on the current host) that validates server-side, rate-limits and emails the team.
2. **Confirm conflicting facts** (marked `CONFIRM` in `src/data/site.ts`):
   - Capital / issued shares: website ¥258,175,000 / 3,627 vs. 2026 PDF ¥243,550,000 / 3,588
   - Chairman’s name spelling: "Hiroshi Inage" vs. "Hiroshi Inamo"
3. **Official logo (vector)**: header uses the PNG logo from the current site (`src/assets/brand/`). An SVG version would be sharper.
8. **Photos**: images come from the company PDFs and stills of the current hero video (`src/assets/img/`). Confirm usage rights for any stock/AI-generated images, and add a real portrait of the President on the Company page (placeholder: skyline).
4. **Languages**: Japanese is the default at `/`, English at `/en/`. Wording reused from the current site where it existed (president's message, company profile, news titles); the rest is new translation — have a native reviewer read it. Chairman's kanji name is unknown, so JA lists only the President (TODO in `ja.ts`). Old WordPress Japanese URLs such as `/company/` and `/news/` keep working.
5. **Privacy policy**: draft text — review with legal counsel (APPI).
6. **security.txt**: set a monitored security mailbox.
7. Brochures: Waravi flyer and @CREATOR brochure are self-hosted in `public/docs/`. @CREATOR also has its own page (`src/views/AtCreator.astro`, `/solutions/atcreator/`) built from the brochure, with screenshots extracted into `src/assets/img/creator/`. The brochure cites 2017 MIC smartphone data and shows old Twitter branding — consider a refresh.
