# AEO Audit Report — unlovedproductions.com

**Date:** 2026-08-04  
**Industry:** saas (threshold 70)  
**Tool:** `aeo_audit.py` + `aeo_optimizer.py --mode balanced`  
**Source extracts:** `/tmp/up-aeo/*.md`

## Scores (pre-optimize)

| Page | Composite | Verdict | Word count |
|------|-----------|---------|------------|
| Home | 23/100 | BELOW_THRESHOLD | 224 |
| About | 19/100 | BELOW_THRESHOLD | 143 |
| FAQ | 33/100 | BELOW_THRESHOLD | 383 |
| Blog | 11/100 | BELOW_THRESHOLD | 74 |
| KDP Creator Suite | 18/100 | BELOW_THRESHOLD | 56 |

All five pages failed the SaaS threshold of 70.

## Shared gaps

1. **Experience (0)** — almost no first-person “we built / we ran” evidence in the first 200 words
2. **Expertise (0–23)** — no author byline; do **not** invent credentials
3. **Structure** — thin pages; need lists, more H2s, 800+ words for citation worthiness
4. **Trust** — need corrections path via real contact email (not fake `corrections@example.com`)
5. **Authority** — Organization/FAQ schema exists in app; Article placeholders from optimizer rejected

## Optimizer notes (balanced)

Optimizer added schema/Article stubs and `[n]` citation markers without primary sources. Those were **not** pasted into production. Applied instead:

- Fact-first ledes + first-person shipping evidence on About / FAQ / Blog
- Bullet extraction of the five markets and five products
- Corrections path → `hello@unlovedproductions.com`
- Stronger H2 structure on product detail (KDP)
- Blog hub definition block + topic list

## Changelog (applied to repo)

See Phase 5 code edits in `src/config/site.ts`, `src/app/faq/page.tsx`, `src/app/about/page.tsx`, `src/app/blog/page.tsx`, `src/app/products/[slug]/page.tsx`.

## Still open (needs assets / time)

- Real case metrics dated to a year (Experience)
- Named author bio without fabricated degrees
- Full 800+ word blog posts (Blog remains a hub until published)
- External authority links to primary sources when citing broker counts / deal stats
