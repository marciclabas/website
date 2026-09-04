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

| Branch | Environment   | Worker        | Serves                  |
| ------ | ------------- | ------------- | ----------------------- |
| `dev`  | `development` | `marcelc-dev` | `*.workers.dev`         |
| `main` | `production`  | `marcelc`     | `https://claramunt.eu`  |

Every deploy is gated on `yarn check` (`svelte-check`), so a type error fails the
build before it reaches Cloudflare.

### Required GitHub secrets

The site lives in the same Cloudflare account as `tribulnation/landing`, so the
values are identical to the ones already set on that repo:

- `CLOUDFLARE_API_TOKEN` — *Edit Cloudflare Workers* template
- `CLOUDFLARE_ACCOUNT_ID`

Both Workers (`marcelc` and `marcelc-dev`) are created automatically on their
first deploy — there is nothing to register in the dashboard beforehand.

### Going live

The apex is attached to the production Worker. Before the first `main` deploy:

1. **Delete the existing `claramunt.eu` A/AAAA records.** They point at an origin
   with no valid TLS (hence the 525) and will conflict with the custom domain.
2. Deploy `main`. Wrangler claims the apex and creates the routing itself.
3. Add a Redirect Rule for `www.claramunt.eu` -> `claramunt.eu` (301).

`marcelc.uk` is untouched by this and keeps serving from the old `website` Pages
project. Once the new site is verified, redirect `marcelc.uk/*` to
`claramunt.eu/*` and retire the Pages project. Keep the domain registered:
`repogpt.marcelc.uk` is a separate subdomain and is unaffected, and the CV PDF
hardcodes `marcelc.uk` links.

The Worker is named `marcelc` rather than `website` to avoid colliding with the
existing Pages project of that name while both exist.
