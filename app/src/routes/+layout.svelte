<script lang="ts">
  import './index.css'
  import { base } from '$app/paths'

  const { children } = $props()
  const year = new Date().getFullYear()
</script>

<svelte:head>
  <title>Marcel Claramunt</title>
  <meta
    name="description"
    content="Marcel Claramunt — founder and CEO of Tribulnation Labs, a proprietary trading firm in Barcelona."
  />
</svelte:head>

<div class="shell">
  <header>
    <a class="wordmark" href="{base}/">Marcel Claramunt</a>
    <nav>
      <a href="{base}/cv">CV</a>
      <a href="mailto:marcel@marcelc.uk">Email</a>
    </nav>
  </header>

  <main>
    {@render children()}
  </main>

  <footer>
    <span>Barcelona</span>
    <span>&copy; {year}</span>
  </footer>
</div>

<style>
  .shell {
    max-width: var(--page);
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 1.5rem;
    padding: 2.5rem 0 0;
  }

  .wordmark {
    font-family: var(--serif);
    font-size: 1.0625rem;
    letter-spacing: 0.01em;
  }

  nav {
    display: flex;
    gap: 1.25rem;
    font-size: 0.875rem;
    color: var(--muted);
  }

  nav a {
    transition: color 0.15s ease;
  }

  nav a:hover,
  .wordmark:hover {
    color: var(--accent);
  }

  footer {
    display: flex;
    justify-content: space-between;
    margin-top: 6rem;
    padding: 1.75rem 0 3rem;
    border-top: 1px solid var(--rule);
    font-size: 0.8125rem;
    color: var(--muted);
  }

  @media (max-width: 34rem) {
    header {
      padding-top: 1.75rem;
    }
  }
</style>
