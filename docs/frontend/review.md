# Frontend Review — unlovedproductions.com

**Date:** 2026-08-04  
**Skill:** `/cs:frontend-review` + `frontend_decision_engine.py`

## Forcing answers (locked)

| Q | Answer |
|---|--------|
| Device | mobile-4G primary |
| LCP | &lt; 2500ms p75 (engine also surfaces 1200ms aspirational for static profile) |
| Rendering | Next App Router SSG (keep; runner-up to Astro) |
| Bundle | &lt; 100KB gzip marketing routes (engine static profile wants ≤30KB JS) |
| SEO | SEO-dependent |
| Design system | ad-hoc Tailwind + mauve tokens |
| WCAG | AA best-effort; owner = solo founder |

## Decision engine

- **Recommended:** `astro-or-static` (100% fit)
- **Runner-up:** `next-app-router` (89%) — current stack
- **Verdict:** Stay on Next SSG for now (already deployed/Vercel). Do **not** migrate to Astro this pass. Cut client JS and image weight to close the gap to the static profile’s 30KB JS / 250KB page budgets.

## CWV targets (p75, primary device)

| Metric | Target |
|--------|--------|
| LCP | 2500ms (stretch 1200ms) |
| INP | 200ms |
| CLS | 0.1 |

## A11y pass (lightweight)

- Landmarks: `main` + sticky `header` present on audited routes
- Product/founder images now have alt via `ProductImage` / `FounderImage`
- FAQ accordion buttons need visible focus (mauve border already on inputs; verify accordion button focus ring)
- Contrast: `#8B3A62` on `#0a0a0a` is brand accent — keep body text on `#a0a0a0`/`#ffffff` for AA body copy

## Perf findings

| Issue | Severity |
|-------|----------|
| Product PNGs were ~5.5MB each | **P0 — fixed** → JPEG ~134KB each |
| OG/logo/founder were ~1.2MB | **P1 — fixed** → OG ~108KB, logo 36KB, founder 12KB |
| `'use client'` on About + Products listing (no hooks) | **P1 — fixed** → server components |
| Unused Radix/shadcn under `components/ui/` (pages don’t import) | **P2** |
| Home tagline cycler requires client JS (acceptable island) | OK |

## Specialists invoked

- Decision engine only (a11y/perf as inline pass — no separate agent processes)

## Next sub-skill

- Compress images + demote unnecessary client pages (this suite Phase 5)
- Later: `dependency-auditor` before pruning remaining Radix packages
