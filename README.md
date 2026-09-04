# marcelc.uk

Personal site of Marcel Claramunt Bassegoda. SvelteKit, deployed to Cloudflare Workers.

## Development

```bash
cd app
yarn install
yarn dev
```

## Deployment

Deploys run from GitHub Actions (`.github/workflows/deploy.yml`), mirroring
[`tribulnation/landing`](https://github.com/tribulnation/landing):

| Branch | Environment   | URL                    |
| ------ | ------------- | ---------------------- |
| `dev`  | `development` | https://dev.marcelc.uk |
| `main` | `production`  | https://marcelc.uk     |

Every deploy is gated on `yarn check` (`svelte-check`), so a type error fails the
build before it reaches Cloudflare.

### Required GitHub secrets

Both live in the **personal** Cloudflare account (not the Tribulnation one):

- `CLOUDFLARE_API_TOKEN` — needs the *Edit Cloudflare Workers* template
- `CLOUDFLARE_ACCOUNT_ID`

### One-time migration off Cloudflare Pages

The site was previously served by the Cloudflare **Pages** project `website`.
Workers and Pages cannot both hold the same custom domain, so before the first
production deploy:

1. Disconnect the Pages project's Git integration, so it stops auto-building on push.
2. Remove the `marcelc.uk` and `www.marcelc.uk` custom domains from the Pages project.
3. Run the `main` deploy — Wrangler will claim both domains for the Worker.
4. Once the Worker is confirmed healthy, delete the Pages project.

The Worker is named `marcelc` rather than `website` to avoid colliding with the
existing Pages project of that name while both exist.
