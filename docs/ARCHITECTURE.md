# unlovedproductions.com Architecture

## Intent
This repository hosts the web presence for unlovedproductions.com.

## Components
- Next.js app (`src/app/` routes: home, about, products listing, per-product pages including Puente, blog, contact, FAQ)
- Static assets in `public/` (product imagery, OG images, founder media)
- Analytics: `src/components/analytics.tsx` (GA)
- Styling and UI configuration (`tailwind.config.ts`, component config files)
- Audit artifacts under `docs/competitive/`, `docs/aeo/`, `docs/frontend/`, `docs/seo/`
- seo-god schedule + snapshots/readouts under `seo-god.json` and `dist/seo/`

## Build/Runtime
- Development: `pnpm dev` (`next dev`)
- Production build: `pnpm build` (`next build`)
- Production server: `pnpm start` (`next start`)
- Production host: Vercel

## Operational Notes
- Lockfile-driven **pnpm** dependency management (`pnpm-lock.yaml`)
- SEO / monitoring checklist: `docs/SEO_OPS.md`
- No direct runtime dependency on APF, ShadowCast, or Mission Control
