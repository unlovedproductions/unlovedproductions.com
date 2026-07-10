# unlovedproductions.com Architecture

## Intent
This repository hosts the web presence for unlovedproductions.com.

## Components
- Next.js app (`app/` and `src/`)
- Static assets in `public/`
- Styling and UI configuration (`tailwind.config.ts`, component config files)

## Build/Runtime
- Development: `next dev`
- Production build: `next build`
- Production server: `next start`

## Operational Notes
- Lockfile-driven npm dependency management (`package-lock.json`)
- No direct runtime dependency on APF, ShadowCast, or Mission Control
