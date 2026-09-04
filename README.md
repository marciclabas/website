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

The site lives in the same Cloudflare account as `tribulnation/landing`, so the
values are identical to the ones already set on that repo:

- `CLOUDFLARE_API_TOKEN` — *Edit Cloudflare Workers* template
- `CLOUDFLARE_ACCOUNT_ID`

Both Workers (`marcelc` and `marcelc-dev`) are created automatically on their
first deploy — there is nothing to register in the dashboard beforehand.

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
