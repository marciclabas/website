<script lang="ts">
  import Markdown, { tableThemes, textThemes } from '$lib/renderer'
  import type { Theme } from '$lib/renderer/Markdown.svelte'
  import type { PageProps } from './$types'

  let { data }: PageProps = $props()

  const theme: Theme = {
    table: {
      ...tableThemes.light,
      headerBg: 'var(--paper)',
      oddRowBg: 'var(--paper)',
      evenRowBg: 'var(--paper)',
      border: '1px solid var(--rule)',
      font: 'var(--sans)',
    },
    text: {
      ...textThemes.light,
      font: 'var(--sans)',
      backgroundColor: 'var(--paper)',
      textColor: 'var(--ink)',
      linkColor: 'var(--accent)',
      linkHoverColor: 'var(--ink)',
      h1Color: 'var(--ink)',
      h2Color: 'var(--ink)',
      h3Color: 'var(--ink)',
    },
  }
</script>

<svelte:head>
  <title>CV — Marcel Claramunt</title>
</svelte:head>

<div class="cv">
  <Markdown markdown={data.markdown} {theme} />
</div>

<style>
  .cv {
    margin-top: 4rem;
  }

  .cv :global(h1) {
    font-family: var(--serif);
    font-weight: 400;
    font-size: 2rem;
    margin-top: 2.5rem;
  }

  .cv :global(h1:first-child) {
    margin-top: 0;
  }

  .cv :global(p),
  .cv :global(li) {
    max-width: var(--measure);
  }

  .cv :global(li) {
    margin-left: 1.1rem;
  }
</style>
