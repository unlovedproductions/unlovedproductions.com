# unlovedproductions.com Recovery Guide

## 1) Purpose
This repository contains the unlovedproductions.com Next.js web application.

## 2) Source Of Truth
- Repository: `https://github.com/unlovedproductions/unlovedproductions.com`
- Default branch: `main`
- Local root: `/home/unloved/unlovedproductions.com`

## 3) Dependencies
- Node.js (project uses Next.js)
- pnpm (lockfile: `pnpm-lock.yaml`)

## 4) Secrets Inventory (names only)
- `NEXT_PUBLIC_FORMSPREE_FORM_ID`
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` (optional)
- `NEXT_PUBLIC_GSC_VERIFICATION` (optional)

Do not store secret values in docs. Keep values in Vercel env and local `.env` only.

## 5) Data To Back Up
- Source code
- Static assets in `public/`
- Any deployment/environment configuration managed outside git
- seo-god snapshots/readouts under `dist/seo/` (optional operational history)

## 6) Recovery A: New Machine
1. Clone repository.
2. Install dependencies:
   - `pnpm install`
3. Start dev server:
   - `pnpm dev`
4. Build sanity check:
   - `pnpm build`

## 7) Recovery B: Corrupted Working Tree
1. `git status`
2. `git stash push -u` (if needed)
3. `git fetch origin && git checkout main && git reset --hard origin/main`
4. `pnpm install`

## 8) Recovery C: Build/Deploy State Loss
Rebuild from source:
- `pnpm install --frozen-lockfile`
- `pnpm build`
- `pnpm start` (or redeploy through your platform pipeline)

## 9) Verification Checklist
- `pnpm build`
- `pnpm lint`
- `curl -fsS http://localhost:3000 >/dev/null` (after `pnpm dev`)

## 10) Stack Dependencies
This site is operationally independent from APF/ShadowCast/Mission Control.

## 11) Last Verified
- Date: 2026-08-30
- Commit: `5ad39fe`
