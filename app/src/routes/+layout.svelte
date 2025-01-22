<script lang='ts'>

  import './index.css'
  import { onNavigate } from '$app/navigation'

  import Icon from '@iconify/svelte'
    import { base } from '$app/paths';
  
  onNavigate((navigation) => {
    if (!document.startViewTransition) return;
    
    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });
  
  const { children } = $props()
</script>

<div class='container'>
  <!-- Header -->
  <div class='header'>
    <a class='logo' href={base}>
      <img src={`${base}/favicon.svg`} alt='Marcel Claramunt Logo' />
      <span>Marcel Claramunt</span>
    </a>
    <nav class='nav'>
      <a href={base}>Home</a>
      <a href={`${base}/projects`}>Projects</a>
      <a href={`${base}/cv`}>CV</a>
      <a href={`${base}/contact`}>Contact</a>
      <a href='https://medium.com/@marcelclaramunt' target='_blank'>Writing <Icon icon='lucide:external-link' inline /></a>
      <a href={`${base}/hire`} class='hire-button'>Hire Me</a>
    </nav>
  </div>

  {@render children()}

  <!-- Footer -->
  <div class='footer'>© 2025 Marcel Claramunt. All Rights Reserved.</div>

</div>

<svelte:head>
  <title>Marcel Claramunt</title>
  <meta name='description' content='Marcel Claramunt - Coder, Musician, Athlete. Personal website and portfolio.' />
</svelte:head>

<style>
  @keyframes fade-in {
    from {
      opacity: 0;
    }
  }

  @keyframes fade-out {
    to {
      opacity: 0;
    }
  }

  @keyframes slide-from-right {
    from {
      transform: translateX(30px);
    }
  }

  @keyframes slide-to-left {
    to {
      transform: translateX(-30px);
    }
  }

  :root::view-transition-old(root) {
    animation:
      90ms cubic-bezier(0.4, 0, 1, 1) both fade-out,
      300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-to-left;
  }

  :root::view-transition-new(root) {
    animation:
      210ms cubic-bezier(0, 0, 0.2, 1) 90ms both fade-in,
      300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-from-right;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .header {
    position: sticky;
    top: 0;
    background-color: var(--bg-color);
    width: 100%;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    z-index: 1;
    view-transition-name: header;
  }

  .logo {
    display: flex;
    align-items: center;
    text-decoration: none;
  }

  .logo img {
    width: 50px;
    height: auto;
    margin-right: 10px;
  }

  .logo span {
    font-size: 1.5rem;
    font-weight: bold;
    color: #f0b90b;
  }

  .nav {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .nav a {
    text-decoration: none;
    color: #e0e0e0;
    font-size: 1rem;
    transition: color 0.3s;
  }

  .nav a:hover {
    color: #f0b90b;
  }

  .nav .hire-button {
    font-weight: bold;
    color: #f0b90b;
  }

  .nav .hire-button:hover {
    color: #e0a800;
  }

  .footer {
    margin-top: 4rem;
    padding: 1rem;
    font-size: 0.9rem;
    opacity: 0.7;
    view-transition-name: footer;
  }
  
</style>