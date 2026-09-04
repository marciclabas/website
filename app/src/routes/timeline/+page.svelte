<script lang="ts">
  type Item = {
    /** Omitted where I don't have the real dates — never guessed. */
    period?: string
    name: string
    role: string
    href?: string
    lines: string[]
  }

  const items: Item[] = [
    {
      period: '2024 —',
      name: 'Tribulnation Labs',
      role: 'Founder & CEO',
      href: 'https://tribulnation.com',
      lines: [
        'A proprietary trading firm in Barcelona, trading its own book with a small team and outside capital.',
        'Began as my own algo trading experiments. Disappointed by CCXT and its alternatives, I wrote my own exchange connectors, execution layer and accounting software; the tooling ended up good enough to run a real book.',
        'We open source the stack underneath it: typed exchange clients with full endpoint coverage, a single-interface SDK across venues, and an open registry mapping the same asset across exchanges and chains.',
      ],
    },
    {
      period: '2023 — 2024',
      name: 'Moveread',
      role: 'Solo founder',
      href: 'https://moveread.com',
      lines: [
        'An AI service that read handwritten chess scoresheets, sold to 15+ tournaments across Spain, France, Germany and Brazil.',
        'Collected the dataset myself: over 500,000 annotated handwritten moves and 5,000 annotated grid images for table-structure recognition.',
        'Trained a Table Transformer past 95% accuracy and a handwriting OCR model past 90%, then tuned postprocessing to 99.5% precision at 50% recall — enough to score half of all games with no human involved at all.',
      ],
    },
    {
      period: '2023 —',
      name: 'Open source',
      role: 'Maintainer',
      href: 'https://github.com/marciclabas',
      lines: [
        'pipeteer, a simple and explicit durable execution framework.',
        'kv, an async key-value interface for Python, with backends for SQL, Redis, Azure Blob, Cosmos DB and the file system.',
        'haskellian, a functional programming library. cit, a CLI for scaffolding and running projects.',
      ],
    },
    {
      name: 'Universitat Politècnica de Catalunya',
      role: 'BS, Computer Science',
      href: '/fib-en.pdf',
      lines: [
        'Facultat d’Informàtica de Barcelona. Graduated with a 9.01/10 overall average, and 9.7/10 across the initial phase.',
      ],
    },
  ]
</script>

<svelte:head>
  <title>Timeline — Marcel Claramunt</title>
  <meta
    name="description"
    content="What Marcel Claramunt has built: Tribulnation Labs, Moveread, and open source work."
  />
</svelte:head>

<section class="head">
  <h1>Timeline</h1>
  <p class="lede">What I&rsquo;ve built, most recent first.</p>
</section>

<ol class="items">
  {#each items as item}
    <li>
      <div class="meta">
        {#if item.period}<span class="period">{item.period}</span>{/if}
        <span class="role">{item.role}</span>
      </div>
      <div class="entry">
        <h2>
          {#if item.href}
            <a href={item.href}>{item.name}<span class="mark">↗</span></a>
          {:else}
            {item.name}
          {/if}
        </h2>
        {#each item.lines as line}
          <p>{line}</p>
        {/each}
      </div>
    </li>
  {/each}
</ol>

<style>
  .head {
    margin-top: 6rem;
  }

  h1 {
    font-size: clamp(2.25rem, 6vw, 3rem);
  }

  .lede {
    margin-top: 1rem;
    color: var(--muted);
  }

  .items {
    list-style: none;
    margin-top: 3.5rem;
  }

  .items li {
    display: grid;
    grid-template-columns: 9rem 1fr;
    gap: 1.5rem;
    padding: 2rem 0;
    border-top: 1px solid var(--rule);
  }

  .meta {
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
    font-size: 0.8125rem;
    color: var(--muted);
    padding-top: 0.4rem;
  }

  .period {
    font-variant-numeric: tabular-nums;
  }

  .role {
    font-style: italic;
  }

  .entry h2 {
    font-size: 1.5rem;
  }

  .entry h2 a:hover {
    color: var(--accent);
  }

  .entry p {
    margin-top: 0.75rem;
    max-width: var(--measure);
    color: var(--muted);
  }

  .mark {
    display: inline-block;
    margin-left: 0.3em;
    font-family: var(--sans);
    font-size: 0.6em;
    color: var(--muted);
    vertical-align: 0.35em;
    transition: color 0.15s ease, transform 0.15s ease;
  }

  a:hover .mark {
    color: var(--accent);
    transform: translate(1px, -1px);
  }

  @media (max-width: 34rem) {
    .head {
      margin-top: 3.5rem;
    }

    .items li {
      grid-template-columns: 1fr;
      gap: 0.5rem;
    }

    .meta {
      flex-direction: row;
      gap: 0.75rem;
      padding-top: 0;
    }
  }
</style>
