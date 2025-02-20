<script lang='ts'>
  import './index.css'
  import Header from './Header.svelte'
  
  import { onNavigate } from '$app/navigation'
  onNavigate((navigation) => {
    if (!document.startViewTransition) return;
    
    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete
      })
    })
  })

  const { children } = $props();
</script>

<div class='container'>
  <Header />
  {@render children()}

  <!-- Footer -->
  <div class='footer'>© 2025 Marcel Claramunt Bassegoda. All Rights Reserved.</div>
</div>

<svelte:head>
  <title>Marcel Claramunt Bassegoda</title>
  <meta name='description' content='Marcel Claramunt Bassegoda - Coder, Musician, Athlete. Personal website and portfolio.' />
</svelte:head>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .footer {
    margin-top: 4rem;
    padding: 1rem;
    font-size: 0.9rem;
    opacity: 0.7;
  }
</style>
