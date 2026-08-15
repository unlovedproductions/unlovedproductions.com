# SEO Auditor Report — unlovedproductions.com

**Date:** 2026-08-04  
**Skill:** `/seo-auditor` (adapted for Next.js App Router; not MkDocs)

## Scope

- Root: `README.md`, `PROJECT_SUMMARY.md`, `SEO_AEO_GEO_GUIDE.md`
- Ops docs: `docs/*.md`
- App metadata: `src/app/**/layout.tsx`, `src/app/blog/page.tsx`, `src/app/sitemap.ts`, `public/robots.txt`

## Pages / docs scanned

| Target | H1 / title | Notes |
|--------|------------|-------|
| README | unlovedproductions.com | Was thin (50 words); expanded + linked audit docs |
| docs/SEO_OPS | SEO Operations Checklist | OK; linked from README |
| docs/RUNBOOK / RECOVERY / ARCHITECTURE | Present | Ops-only; no public SEO weight |
| Home metadata | Full title + ~155-char description | OG/Twitter descriptions were too short (37 chars) → fixed |
| About / Products / Contact / FAQ / Blog layouts | Unique titles + descriptions | OK (150–160 char range) |
| Sitemap | `/`, products, about, contact, faq, blog, 5 product slugs | Complete |
| robots.txt | Allow `/`, Disallow `/api/` except hello | Crawl-delay removed earlier |

## Issues found

| Issue | Severity | Action |
|-------|----------|--------|
| Root OG/Twitter description 37 chars | High | Extended to match meta description |
| README missing primary keywords + orphan audit docs | Medium | Rewrote README with studio keywords + doc links |
| Competitive/AEO/frontend reports not in README nav | Medium | Linked under Audit artifacts |
| Product PNG weight (SEO/CWV) | High | Converted to ~134KB JPEGs (frontend pass) |
| Docs lack YAML `title:`/`description:` frontmatter | Low | Ops docs; skip MkDocs-style frontmatter |
| `seo_checker.py` needs built HTML | Info | Manual metadata checklist used instead |

## Keyword placement (public routes)

| Route | Primary keyword in title | Description | H1 |
|-------|--------------------------|-------------|-----|
| `/` | unlovedproductions | Yes | Yes (brand) |
| `/products` | Products | Yes | Yes |
| `/about` | About | Yes | Yes |
| `/faq` | FAQ | Yes | Yes |
| `/blog` | Blog | Yes | Yes |
| `/products/[slug]` | Product name | Via generateMetadata | Yes |

## Links

- Docs relative links to `src/app/layout.tsx` and `src/lib/schema.ts` resolve
- No orphan public routes vs sitemap
- Internal product links use `/products/{id}` matching `generateStaticParams`

## Auto-fixed this pass

1. Root Open Graph + Twitter descriptions lengthened
2. README keyword H1 context + audit artifact links
3. Product image paths → JPEG (CWV / page weight)

## Manual / preserve

- Do not rewrite `SEO_AEO_GEO_GUIDE.md` content wholesale (reference doc)
- AggregateRating still deferred until real reviews
- GSC/IndexNow recheck remains an ops step in `docs/SEO_OPS.md`

## Summary

| Metric | Count |
|--------|-------|
| Docs scanned | 10+ |
| Issues found | 5 |
| Auto-fixed | 3 |
| Manual/ops remaining | GSC submit, Ahrefs recrawl, real screenshots |
