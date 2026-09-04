<script lang="ts">
  import { page } from '$app/state'
  import { base } from '$app/paths'

  // The old site had /cv, /projects, /hire, /contact and the tab routes. Those
  // URLs still exist in the wild and land here once marcelc.uk redirects.
  const missing = $derived(page.status === 404)
</script>

<svelte:head>
  <title>{page.status} — Marcel Claramunt</title>
  <meta name="robots" content="noindex" />
</svelte:head>

<section>
  <h1>{page.status}</h1>
  <p class="prose">
    {#if missing}
      This page doesn&rsquo;t exist. It was probably part of an older version of
      this site.
    {:else}
      {page.error?.message ?? 'Something went wrong.'}
    {/if}
  </p>
  <p class="prose">
    <a href="{base}/">Back home</a> or the <a href="{base}/timeline">timeline</a>.
  </p>
</section>

<style>
  section {
    margin-top: 7rem;
  }

  h1 {
    font-size: clamp(2.25rem, 6vw, 3rem);
    font-variant-numeric: tabular-nums;
  }

  .prose {
    max-width: var(--measure);
    margin-top: 1.25rem;
    color: var(--muted);
  }

  .prose a {
    color: var(--ink);
    box-shadow: inset 0 -1px 0 var(--rule);
    transition: box-shadow 0.15s ease;
  }

  .prose a:hover {
    box-shadow: inset 0 -1px 0 var(--accent);
  }

  @media (max-width: 34rem) {
    section {
      margin-top: 4rem;
    }
  }
</style>
