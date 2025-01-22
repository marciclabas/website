<script lang='ts'>
  import Markdown, { tableThemes, textThemes } from '$lib/renderer';
    import type { Theme } from '$lib/renderer/Markdown.svelte';
  import type { PageProps } from './$types';
  let { data }: PageProps = $props();
  const theme: Theme = {
    table: { ...tableThemes.dark, headerBg: 'var(--bg-color)' },
    text: { ...textThemes.dark, backgroundColor: 'var(--bg-color)' },
  }
</script>

<div class='container'>
  <Markdown markdown={data.markdown} {theme} />
</div>

<style>
  .container {
    max-width: 800px;
    margin: 0 auto;
  }
</style>