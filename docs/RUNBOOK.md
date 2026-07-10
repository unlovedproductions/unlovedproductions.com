# unlovedproductions.com Runbook

## Service Summary
- Framework: Next.js
- Default dev URL: `http://localhost:3000`

## Startup
```bash
npm install
npm run dev
```

## Health Checks
- Lint:
  - `npm run lint`
- Build:
  - `npm run build`
- Local HTTP:
  - `curl -fsS http://localhost:3000 >/dev/null`

## Release-Oriented Commands
- Production build:
  - `npm run build`
- Local prod start:
  - `npm run start`

## Shutdown
- Stop dev server terminal (`Ctrl+C`).

## Common Failures
- Dependency drift: use `npm ci` to align with `package-lock.json`.
- Build failures: resolve TypeScript/ESLint issues before deploy.
