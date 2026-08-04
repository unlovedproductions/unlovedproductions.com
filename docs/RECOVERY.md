# unlovedproductions.com Recovery Guide

## 1) Purpose
This repository contains the unlovedproductions.com Next.js web application.

## 2) Source Of Truth
- Repository: `https://github.com/unlovedproductions/unlovedproductions.com`
- Default branch: `main`
- Local root: `/home/unloved/unlovedproductions.com`

## 3) Dependencies
- Node.js (project uses Next.js)
- npm (lockfile present: `package-lock.json`)

## 4) Secrets Inventory (names only)
No secret names are documented in this repo. Keep deployment secrets in your hosting platform and local env files only.

## 5) Data To Back Up
- Source code
- Static assets in `public/`
- Any deployment/environment configuration managed outside git

## 6) Recovery A: New Machine
1. Clone repository.
2. Install dependencies:
   - `npm install`
3. Start dev server:
   - `npm run dev`
4. Build sanity check:
   - `npm run build`

## 7) Recovery B: Corrupted Working Tree
1. `git status`
2. `git stash push -u` (if needed)
3. `git fetch origin && git checkout main && git reset --hard origin/main`
4. `npm install`

## 8) Recovery C: Build/Deploy State Loss
Rebuild from source:
- `npm ci`
- `npm run build`
- `npm run start` (or redeploy through your platform pipeline)

## 9) Verification Checklist
- `npm run build`
- `npm run lint`
- `curl -fsS http://localhost:3000 >/dev/null` (after `npm run dev`)

## 10) Stack Dependencies
This site is operationally independent from APF/ShadowCast/Mission Control.

## 11) Last Verified
- Date: 2026-08-02
- Commit: `c2b8f88`
