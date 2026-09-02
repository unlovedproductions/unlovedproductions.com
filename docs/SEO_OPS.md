# SEO Operations Checklist

Post-launch SEO, analytics, and monitoring for unlovedproductions.com on Vercel.

## Google Search Console

1. Add property: `https://unlovedproductions.com`
2. Verify via DNS TXT record or HTML meta tag in [`src/app/layout.tsx`](../src/app/layout.tsx)
3. Submit sitemap: `https://unlovedproductions.com/sitemap.xml`
4. Monitor Coverage and Crawl Stats weekly

## IndexNow (Ahrefs)

- Key file: `https://unlovedproductions.com/vkrbkfbb8vymy2mrgxacjy6492d5hhh3.txt`
- After deploy changes, click **Recheck** in Ahrefs IndexNow settings
- Re-run Site Audit after major routing or metadata changes

## Analytics

Set `NEXT_PUBLIC_GA_MEASUREMENT_ID` in Vercel project environment variables. The site loads GA4 only when this variable is present.

Alternatively, enable [Vercel Web Analytics](https://vercel.com/docs/analytics) in the Vercel dashboard.

## Core Web Vitals

- Run [PageSpeed Insights](https://pagespeed.web.dev/) on `/`, `/products`, and one product detail page monthly
- Check CrUX data in Google Search Console after sufficient traffic

## Rich Results

- Validate homepage FAQ: [Rich Results Test](https://search.google.com/test/rich-results)
- Validate product pages after schema changes

## SERP and Citation Monitoring

Track weekly (manual, no paid tools required):

- Branded queries: `unlovedproductions`, `unloved productions`
- Product queries: `KDP Creator Suite`, `Ghost Protocol`, `ReviveHQ`, `Puente translator`
- AI citation checks: Perplexity / ChatGPT for "what is unlovedproductions"

## seo-god (scheduled SEO readout)

- Config: repo-root [`seo-god.json`](../seo-god.json)
- Schedule: Cursor cloud agent (see recent commits; OS/Claude Code runners superseded)
- Outputs: snapshots and readouts under `dist/seo/` (e.g. `dist/seo/snapshots/`, `dist/seo/readouts/`)
- After a run, skim the latest readout and fold actionable items into this checklist or a punchlist under `docs/seo/` / `dist/seo/`

## Reviews and Social Proof

Do **not** add `aggregateRating` schema until real verified reviews exist. Template is in [`src/lib/schema.ts`](../src/lib/schema.ts) (`aggregateRatingSchema`).

## Backlinks and Local SEO

- Google Business Profile (if applicable for studio presence)
- GitHub org link: https://github.com/unlovedproductions
- Twitter/X: @unlovedprod

## Post-Deploy Verification Commands

```bash
curl -I https://unlovedproductions.com/vkrbkfbb8vymy2mrgxacjy6492d5hhh3.txt
curl -I https://unlovedproductions.com/sitemap.xml
curl -I https://unlovedproductions.com/api/hello
curl -s https://unlovedproductions.com/about | rg '<title>|rel=\"canonical\"'
```

Expected: IndexNow 200, sitemap 200, `/api/hello` 200 JSON, About page has route-specific title and canonical.
