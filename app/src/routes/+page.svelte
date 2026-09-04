<script lang="ts">
  import { base } from '$app/paths'

  type Entry = {
    period: string
    name: string
    role: string
    body: string
    href?: string
  }

  const work: Entry[] = [
    {
      period: '2024 —',
      name: 'Tribulnation Labs',
      role: 'Founder & CEO',
      body: 'A proprietary trading firm in Barcelona. We trade our own book and open source the stack underneath it.',
      href: 'https://tribulnation.com',
    },
    {
      period: '2023 — 2024',
      name: 'Moveread',
      role: 'Solo founder',
      body: 'AI that read handwritten chess scoresheets, sold to tournaments in four countries on a dataset of 500,000 annotated moves I collected myself.',
      href: 'https://moveread.com',
    },
    {
      period: '2023 —',
      name: 'Open source',
      role: 'Maintainer',
      body: 'pipeteer, kv, haskellian, cit — durable execution, async key-value storage, and the other pieces I got tired of rewriting.',
      href: 'https://github.com/marciclabas',
    },
  ]

  const writing = [
    { label: 'Margining, in four parts', href: 'https://tribulnation.com/blog' },
    { label: 'Essays on Medium', href: 'https://medium.com/@marcelclaramunt' },
  ]
</script>

<section class="hero">
  <h1>I build the infrastructure I couldn&rsquo;t buy.</h1>
  <p class="lede">
    Founder and CEO of <a href="https://tribulnation.com">Tribulnation Labs</a>, a proprietary
    trading firm in Barcelona. Before that I built an AI company that read handwritten chess
    scoresheets, and sold it to tournaments in four countries.
  </p>
</section>

<section>
  <h2 class="label">Now</h2>
  <p class="prose">
    Tribulnation started as my own algo trading experiments in 2024. Disappointed by CCXT and
    everything like it, I wrote my own exchange connectors, execution layer and accounting
    software. The tooling got good enough to run a larger book &mdash; so now it does, with a small
    team and outside capital.
  </p>
  <p class="prose">
    We&rsquo;re a trading firm first. Open sourcing what we build is an afterthought, but we do it
    anyway: independent traders should get to run on the same infrastructure we do.
  </p>
</section>

<section>
  <h2 class="label">Selected work</h2>
  <ol class="work">
    {#each work as entry}
      <li>
        <div class="meta">
          <span class="period">{entry.period}</span>
          <span class="role">{entry.role}</span>
        </div>
        <div class="entry">
          <h3>
            {#if entry.href}
              <a href={entry.href}>{entry.name}<span class="mark">↗</span></a>
            {:else}
              {entry.name}
            {/if}
          </h3>
          <p>{entry.body}</p>
        </div>
      </li>
    {/each}
  </ol>
  <p class="more"><a href="{base}/timeline">Full timeline<span class="mark">→</span></a></p>
</section>

<section>
  <h2 class="label">Writing</h2>
  <ul class="links">
    {#each writing as item}
      <li><a href={item.href}>{item.label}<span class="mark">↗</span></a></li>
    {/each}
  </ul>
</section>

<section>
  <h2 class="label">Away from the desk</h2>
  <p class="prose quiet">
    Jazz piano and Catalan folk. Calisthenics, running and volleyball. And enough chess to have
    once built a company about it.
  </p>
</section>

<section class="contact">
  <h2 class="label">Contact</h2>
  <p class="prose">
    <a class="email" href="mailto:marcel@marcelc.uk">marcel@marcelc.uk</a>
  </p>
  <ul class="links inline">
    <li><a href="https://github.com/marciclabas">GitHub</a></li>
    <li><a href="https://www.linkedin.com/in/marcel-claramunt">LinkedIn</a></li>
  </ul>
</section>

<style>
  section {
    margin-top: 4.5rem;
  }

  .hero {
    margin-top: 7rem;
  }

  h1 {
    font-size: clamp(2.5rem, 7vw, 3.75rem);
    max-width: 18ch;
    text-wrap: balance;
  }

  .lede {
    margin-top: 1.75rem;
    max-width: var(--measure);
    font-size: 1.1875rem;
    color: var(--muted);
  }

  .lede a {
    color: var(--ink);
    box-shadow: inset 0 -1px 0 var(--rule);
    transition: box-shadow 0.15s ease;
  }

  .lede a:hover {
    box-shadow: inset 0 -1px 0 var(--accent);
  }

  .label {
    font-family: var(--sans);
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: 0.09em;
    text-transform: uppercase;
    color: var(--muted);
    padding-bottom: 0.875rem;
    border-bottom: 1px solid var(--rule);
  }

  .prose {
    max-width: var(--measure);
    margin-top: 1.25rem;
  }

  .quiet {
    color: var(--muted);
  }

  .work {
    list-style: none;
  }

  .work li {
    display: grid;
    grid-template-columns: 9rem 1fr;
    gap: 1.5rem;
    padding: 1.75rem 0;
    border-bottom: 1px solid var(--rule);
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

  .entry h3 {
    font-size: 1.5rem;
  }

  .entry p {
    margin-top: 0.5rem;
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

  .more {
    margin-top: 1.5rem;
    font-size: 0.9375rem;
  }

  .more a {
    color: var(--muted);
    transition: color 0.15s ease;
  }

  .more a:hover {
    color: var(--accent);
  }

  .links {
    list-style: none;
    margin-top: 1.25rem;
  }

  .links li + li {
    margin-top: 0.5rem;
  }

  .links a {
    box-shadow: inset 0 -1px 0 var(--rule);
    transition: box-shadow 0.15s ease;
  }

  .links a:hover {
    box-shadow: inset 0 -1px 0 var(--accent);
  }

  .inline {
    display: flex;
    gap: 1.5rem;
    font-size: 0.9375rem;
  }

  .inline li + li {
    margin-top: 0;
  }

  .email {
    font-family: var(--serif);
    font-size: 1.75rem;
  }

  .email:hover {
    color: var(--accent);
  }

  .entry h3 a:hover {
    color: var(--accent);
  }

  @media (max-width: 34rem) {
    .hero {
      margin-top: 4rem;
    }

    .work li {
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
