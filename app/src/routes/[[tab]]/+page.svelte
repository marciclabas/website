<!-- svelte-ignore a11y_consider_explicit_label -->

<script lang="ts">
	import type { PageProps } from './$types'
  import { goto } from '$app/navigation';
  import { base } from '$app/paths';
  import Expertise from './Expertise.svelte';
	const { data }: PageProps = $props()
</script>

<!-- Tab Navigation -->
<div class='tabs'>
  <button class='tab-button {data.tab === 'coder' || data.tab === undefined ? 'active' : ''}' onclick={() => goto('coder')}>Coder</button>
  <button class='tab-button {data.tab === 'musician' ? 'active' : ''}' onclick={() => goto('musician')}>Musician</button>
  <button class='tab-button {data.tab === 'athlete' ? 'active' : ''}' onclick={() => goto('athlete')}>Athlete</button>
</div>

<!-- Tab Content with Transition -->
<div class='content'>
  {#if data.tab === 'musician'}
    <div>
      <a href='https://www.instagram.com/reel/DEstDHYtMoy/' target='_blank'>
        <video src={`${base}/media/jazz.mp4`} autoplay loop muted class='vertical-video'></video>
      </a>
      <div class='quick-links'>
        <p>Jazz Piano and Catalan Folklore.</p>
        <a href='https://www.instagram.com/marcel.claramunt' target='_blank'>See more on Instagram</a>
      </div>
    </div>
  {:else if data.tab === 'athlete'}
    <div>
      <a href='https://www.instagram.com/reel/DFD0N5ItTl9/' target='_blank'>
        <video src={`${base}/media/calisthenics.mp4`} autoplay loop muted class='vertical-video'></video>
      </a>
      <p>Calisthenics, Running and Volleyball.</p>
      <div class='quick-links'>
        <a href='https://www.instagram.com/marcel.claramunt' target='_blank'>See more on Instagram</a>
      </div>
    </div>
  {:else}
    <div>
      <img src={`${base}/media/entrepreneur.jpg`} alt='Marcel playing chess' />
      <p class='description'>Freelancer and Entrepreneur. AI & Full-Stack Developer.</p>
      <Expertise />
      <a href={`${base}/hire`} class='hire-button'>Hire Me</a>
    </div>
  {/if}
</div>

<style>
  .tabs {
    display: flex;
    justify-content: center;
    gap: 20px;
    view-transition-name: tabs;
  }

  .tab-button {
    background: none;
    border: none;
    color: #e0e0e0;
    font-size: 1.5rem;
    cursor: pointer;
    padding: 10px 20px;
    position: relative;
  }

  .tab-button.active::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 100%;
    height: 3px;
    background-color: var(--brand-color);
    view-transition-name: tab-border;
  }

  .tab-button.active {
    color: var(--brand-color);
  }

  .content {
    text-align: center;
    max-width: 800px;
    margin-top: 40px;
  }

  .content img, .content video {
    width: 100%;
    max-width: 600px;
    border-radius: 10px;
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.1);
  }

  .content .vertical-video {
    max-width: 300px;
    margin: 20px 0;
  }

  .description {
    font-size: 1.2rem;
    margin: 20px 0;
    opacity: 0.8;
  }

  .hire-button {
    background-color: var(--brand-color);
    border: none;
    padding: 15px 30px;
    font-size: 1.2rem;
    color: #121212;
    font-weight: bold;
    cursor: pointer;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    margin-top: 20px;
  }

  .hire-button:hover {
    background-color: #e0a800;
  }
</style>
