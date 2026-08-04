# unlovedproductions.com Architecture

## Intent
This repository hosts the web presence for unlovedproductions.com.

## Components
- Next.js app (`src/app/` routes: home, about, products, blog, contact, FAQ)
- Static assets in `public/` (product imagery, OG images, founder media)
- Analytics: `src/components/analytics.tsx` (GA)
- Styling and UI configuration (`tailwind.config.ts`, component config files)

## Build/Runtime
- Development: `next dev`
- Production build: `next build`
- Production server: `next start`
- Production host: Vercel

## Operational Notes
- Lockfile-driven npm dependency management (`package-lock.json`)
- SEO / monitoring checklist: `docs/SEO_OPS.md`
- No direct runtime dependency on APF, ShadowCast, or Mission Control
