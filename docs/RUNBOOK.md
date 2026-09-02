# unlovedproductions.com Runbook

## Service Summary
- Framework: Next.js
- Production host: Vercel (`unlovedproductions.com` project)
- Default dev URL: `http://localhost:3000`
- Package manager: **pnpm** (`pnpm-lock.yaml`)

## Startup
```bash
pnpm install
pnpm dev
```

## Health Checks
- Lint:
  - `pnpm lint`
- Build:
  - `pnpm build`
- Local HTTP:
  - `curl -fsS http://localhost:3000 >/dev/null`

## Release-Oriented Commands
- Production build:
  - `pnpm build`
- Local prod start:
  - `pnpm start`
- Vercel preview/production deploys happen via Git push to the linked repo.

## Production DNS (Namecheap)
Point the domain at Vercel from Namecheap Advanced DNS:

| Host | Type | Value |
|---|---|---|
| `@` | A | `216.198.79.1` |
| `@` | A | `64.29.17.1` |
| `www` | CNAME | `e7b42db3bdd11c1a.vercel-dns-017.com` |

Remove Netlify records:
- A `@` → `75.2.60.5`, `99.83.231.61`
- CNAME `www` → `unlovedproductions.netlify.app`

Keep existing MX/TXT records (email forwarding, SPF, verification).

Verify after DNS propagation:
```bash
dig +short unlovedproductions.com A
dig +short www.unlovedproductions.com CNAME
curl -I https://unlovedproductions.com
```

## Shutdown
- Stop dev server terminal (`Ctrl+C`).

## Common Failures
- Dependency drift: use `pnpm install --frozen-lockfile` to align with `pnpm-lock.yaml`.
- Build failures: resolve TypeScript/ESLint issues before deploy.
- Domain still on Netlify: confirm Namecheap A/CNAME records match Vercel, then remove the custom domain from the Netlify project.
