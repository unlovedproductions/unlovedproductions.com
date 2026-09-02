# Changelog

All notable changes to unlovedproductions.com are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

### Added

- seo-god snapshots/readouts (e.g. `dist/seo/` for 2026-08-29) and Cursor-cloud schedule / Windows runner (`5ad39fe`, `c4e08fb`, `fb3bf9a`)
- `pnpm-lock.yaml` + workspace config for package management (`0669da0`)
- Full Puente product page with SEO/AEO schema and aligned copy (`c059bff`)
- Competitive, AEO, frontend, and SEO audit artifacts under `docs/competitive/`, `docs/aeo/`, `docs/frontend/`, `docs/seo/`
- Fact-first About/FAQ/Blog copy for AEO citation readiness
- Tracked `.env.example` (Formspree / GA / optional GSC verification)

### Changed

- Ops docs (README, RECOVERY, RUNBOOK, ARCHITECTURE) standardized on **pnpm**
- Four-skill audit suite applied; high-priority site fixes shipped (`b9b857a`)
- Compressed product/OG/founder media (JPEG product assets ~134KB; OG ~108KB)
- Removed unnecessary `'use client'` from About and Products listing pages
- Lengthened root Open Graph / Twitter descriptions
- Added missing KDP Fast Launch product image
- OS seo-god schedule pointed at Cursor agent; Claude Code / OS schedule paths retired where superseded

## [2026-08-02]

### Added

- SEO ops checklist (`docs/SEO_OPS.md`), GA analytics component, and blog page (`c2b8f88`)
- Site media assets (founder photo, product/OG imagery, logo refresh)

### Changed

- Documented Vercel as production host; removed Netlify config (`c5e7f4d`)

## [2026-07]

### Fixed

- Ahrefs SEO audit issues; IndexNow verification added (`24a8abe`)

### Added

- Ops guides under `docs/` (architecture, recovery, runbook)
