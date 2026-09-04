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

| Branch | Environment   | Worker         |
| ------ | ------------- | -------------- |
| `dev`  | `development` | `marcelc-dev`  |
| `main` | `production`  | `marcelc`      |

Both currently serve from `workers.dev`. **No custom domain is attached yet**,
so neither branch affects the live `marcelc.uk`, which is still served by the
old `website` Pages project. Deploying `main` is therefore safe: it will not
take the site live.

Every deploy is gated on `yarn check` (`svelte-check`), so a type error fails the
build before it reaches Cloudflare.

### Required GitHub secrets

The site lives in the same Cloudflare account as `tribulnation/landing`, so the
values are identical to the ones already set on that repo:

- `CLOUDFLARE_API_TOKEN` — *Edit Cloudflare Workers* template
- `CLOUDFLARE_ACCOUNT_ID`

Both Workers (`marcelc` and `marcelc-dev`) are created automatically on their
first deploy — there is nothing to register in the dashboard beforehand.

### Going live (later)

When the domain is settled, add `routes` back to `wrangler.jsonc`, then:

1. Disconnect the `website` Pages project's Git integration.
2. Remove its custom domains — Workers and Pages cannot both hold the same hostname.
3. Deploy `main`; Wrangler claims the domains for the Worker.
4. Once healthy, delete the Pages project.

The Worker is named `marcelc` rather than `website` to avoid colliding with the
existing Pages project of that name while both exist.
