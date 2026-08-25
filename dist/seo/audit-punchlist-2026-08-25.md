# SEO audit punch list — 2026-08-25

Audit: OpenSEO `4ea27285-261e-436c-bf39-f3d4e6ed8a1d` against live `https://unlovedproductions.com`
Money pages (confirmed by plan): `/products`, `/products/*`, `/contact`, `/books`, `/books/*`

## Class 1 — Broken links / 4xx on money pages

### broken-page (5) + broken-internal-link (10)

- **URLs:** `/products/ghost-protocol`, `/products/kdp-creator-suite`, `/products/kdp-fast-launch`, `/products/puente`, `/products/revivehq` all return **404** on production. Homepage and `/products` link to them.
- **Also live:** `/books` returns **404** (linked from homepage).
- **What breaks:** Money-page product and book URLs are dead on the public site. Crawl treated every product detail as an error.
- **Exact change:** Redeploy current `main` to Vercel production. Local `npm run build` already emits these routes with correct titles/canonicals under `.next/server/app/products/*.html` and `books*.html`. Production HTML is stale (~36 days cache age on `/`) and does not match the repo.
- **Who:** Hosting / you — `vercel deploy --prod` or push a production deploy. Not a content edit.

## Class 2 — Titles / metas

### meta-description-too-long (5) + shared homepage title/canonical on live

- **URLs:** `/`, `/products`, `/about`, `/contact`, `/faq` on live all show the same ~215-char description, homepage title, and `canonical` → `https://unlovedproductions.com/`.
- **What breaks:** Subpages cannot rank on their own; SERP snippets truncated/wrong.
- **Exact change:** Same redeploy. Local layouts already set unique titles, ≤160-char descriptions, and self-canonicals via `src/lib/metadata.ts` + route `layout.tsx` files. Verified in built HTML after this audit.
- **Who:** Hosting / you.

## Class 3 — Uncrawlable / canonical

### canonicalized-page (4)

- **URLs:** live `/products`, `/about`, `/contact`, `/faq` canonicalize to `/`.
- **Fix:** Redeploy (see above). Repo already sets `alternates.canonical` per path.

## Class 4 — Thin content (residual)

### thin-content — about

- **URL:** live `/about` reported 135 words (stale deploy). Local built HTML is ~230 words.
- **Action after redeploy:** Re-crawl. Expand only if OpenSEO still flags it.
- **Who:** Content owner if still flagged post-deploy.

### thin-content — contact

- **URL:** `/contact` — expanded intro/support/privacy copy in repo this run (~180 words in built HTML). May still sit near OpenSEO’s thin threshold for a form page.
- **Action after redeploy:** Re-crawl; expand further only if still flagged.
- **Who:** Content owner if needed.

## Class 5 — Performance

### Lighthouse

- **Performance: not assessed — 10 of 10 Lighthouse runs failed** on this audit.
- **What breaks:** No CWV / slow-page data from this crawl.
- **Exact change:** Re-run audit after redeploy with OpenSEO Lighthouse healthy; investigate container Chromium if failures persist (`docker compose -p seo-god -f .seo-god/docker-compose.yml logs`).
- **Who:** Local OpenSEO operator / hosting.

## Not punched (fixed in repo this run)

- `heading-order-skip` on `/` — added Products `h2` before product cards (`src/app/page.tsx`).
- `heading-order-skip` on `/faq` — questions are `h2`; answers always in DOM for crawlability (`src/app/faq/page.tsx`).
- Contact thin copy expansion (`src/app/contact/page.tsx`).
- Gate: `npm run build` exit 0 after edits.
