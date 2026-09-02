# SEO audit punch list — 2026-09-01

Audit: OpenSEO `b9ecd136-5aab-4896-9a76-66e281985da1` against live `https://unlovedproductions.com`
Money pages: previously confirmed set — `/products`, `/products/*`, `/contact`, `/books`, `/books/*`

## Class 1 — Broken links / 4xx on money pages

None. All 17 crawled URLs returned 200, including every product and book URL.

## Class 3 — Uncrawlable / canonical

### canonicalized-page (2) — intentional

- **URLs:** `/contact?subject=download`, `/contact?subject=puente-demo`
- **What this is:** Query-string variants of the contact form. OpenSEO reports they canonicalize to `https://unlovedproductions.com/contact`.
- **Exact change:** None. That canonical is correct. Do not give those URLs self-canonicals.
- **Who:** No one. Leave as-is.

## Class 5 — Performance

### Lighthouse did not run

- **Performance: not assessed — Lighthouse total 0 / completed 0 / failed 0** on this audit (not a failed-run count).
- **What breaks:** No CWV or `slow-response` data from this crawl.
- **Exact change:** Re-run a crawl with OpenSEO Lighthouse healthy (`docker compose -p seo-god -f .seo-god/docker-compose.yml logs` if Chromium is dead).
- **Who:** Local OpenSEO operator.
