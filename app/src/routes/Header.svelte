<!-- svelte-ignore a11y_no_static_element_interactions a11y_click_events_have_key_events -->

<script lang='ts'>
  import Icon from '@iconify/svelte';
  import { base } from '$app/paths';
  import { slide } from 'svelte/transition';

  let mobileMenuOpen = false;

  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }

  const navLinks = [
    { label: 'Home', href: `${base}/` },
    { label: 'Projects', href: `${base}/projects` },
    { label: 'CV', href: `${base}/cv` },
    { label: 'Contact', href: `${base}/contact` },
    { label: 'Writing', href: 'https://medium.com/@marcelclaramunt', external: true },
  ];
</script>

<header class='header'>
  <a class='logo' href={`${base}/`}>
    <img src={`${base}/favicon.svg`} alt='Marcel Claramunt Bassegoda Logo' />
    <span>Marcel Claramunt Bassegoda</span>
  </a>

  <!-- Desktop Navigation -->
  <nav class='nav desktop-nav'>
    {#each navLinks as link}
      <a href={link.href} target={link.external ? '_blank' : '_self'}>
        {link.label} {#if link.external} <Icon icon='lucide:external-link' inline /> {/if}
      </a>
    {/each}
    <a href={`${base}/hire`} class='hire-button'>Hire Me</a>
  </nav>

  <!-- Mobile Menu Button -->
  <button class='menu-button' onclick={toggleMobileMenu} aria-label='Open menu'>
    <Icon icon='lucide:menu' width='32' height='32' />
  </button>

  <!-- Mobile Navigation -->
  {#if mobileMenuOpen}
    <div class='mobile-nav-overlay' onclick={toggleMobileMenu}></div>
    <nav class='mobile-nav' transition:slide={{ duration: 300, axis: 'x' }}>
      <button class='close-menu' onclick={toggleMobileMenu} aria-label='Close menu'>
        <Icon icon='lucide:x' width='32' height='32' />
      </button>
      {#each navLinks as link}
        <a href={link.href} target={link.external ? '_blank' : '_self'} onclick={toggleMobileMenu}>
          {link.label} {#if link.external} <Icon icon='lucide:external-link' inline /> {/if}
        </a>
      {/each}
      <a href={`${base}/hire`} class='hire-button' onclick={toggleMobileMenu}>Hire Me</a>
    </nav>
  {/if}
</header>

<style>
  .header {
    position: sticky;
    top: 0;
    background-color: var(--bg-color);
    width: 100%;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 40px;
    z-index: 2;
    transition: padding 0.3s ease-in-out;
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

  .menu-button {
    display: none;
    background: none;
    border: none;
    color: #e0e0e0;
    cursor: pointer;
  }

  .mobile-nav-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.7);
    z-index: 999;
  }

  .mobile-nav {
    position: fixed;
    top: 0;
    right: 0;
    width: 70%;
    max-width: 300px;
    height: 100vh;
    background: #1a1a1a;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    box-shadow: -5px 0 10px rgba(0, 0, 0, 0.3);
    white-space: nowrap;
  }

  .mobile-nav a {
    text-decoration: none;
    color: #e0e0e0;
    font-size: 2rem;
    transition: color 0.3s;
  }

  .mobile-nav .hire-button {
    font-weight: bold;
    color: #f0b90b;
  }

  .mobile-nav a:hover {
    color: #f0b90b;
  }

  .close-menu {
    position: absolute;
    top: 20px;
    right: 20px;
    background: none;
    border: none;
    color: #e0e0e0;
    cursor: pointer;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .desktop-nav {
      display: none;
    }

    .menu-button {
      display: block;
    }

    .header {
      padding: 15px 20px; /* Adjust padding for mobile */
    }
  }
</style>
