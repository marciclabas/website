<script lang='ts'>
  import Icon from '@iconify/svelte';

  let email = 'marcel@marcelc.uk';
  let copied = false;

  function copyEmail() {
    navigator.clipboard.writeText(email).then(() => {
      copied = true;
      setTimeout(() => copied = false, 700);
    });
  }
</script>

<div class='contact-container'>
  <h1>Contact</h1>

  <div class='email-section'>
    <div class='email-box'>
      <span class='email-text'>{email}</span>
      <button class='copy-button' on:click={copyEmail} aria-label='Copy email'>
        <Icon icon='lucide:copy' width='28' height='28' />
      </button>
    </div>
    <div class={`copied-popover ${copied ? '' : 'hidden'}`}>
      Copied!
      <div class='popover-arrow'></div>
    </div>
  </div>

  <p class='find-me-title'>You can also find me here:</p>
  <div class='social-links'>
    <a href='https://github.com/marciclabas' target='_blank' class='social-link'>
      <Icon icon='mdi:github' />
    </a>
    <a href='https://www.instagram.com/marcel.claramunt' target='_blank' class='social-link'>
      <Icon icon='mdi:instagram' />
    </a>
    <a href='https://www.linkedin.com/in/marcel-claramunt' target='_blank' class='social-link'>
      <Icon icon='mdi:linkedin' />
    </a>
  </div>
</div>

<style>
  .contact-container {
    text-align: center;
    max-width: 700px;
    margin: 0 auto;
    padding: 60px 20px;
    min-height: 70vh;
  }

  h1 {
    font-size: 2.5rem;
    color: #f0b90b;
    margin-bottom: 40px;
  }

  .email-section {
    position: relative;
    margin-bottom: 50px;
  }

  .email-box {
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.05);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
  }

  .email-text {
    font-size: 1.8rem;
    color: #f0b90b;
    font-weight: bold;
    margin-right: 15px;
  }

  .copy-button {
    background: none;
    border: none;
    cursor: pointer;
    color: #f0b90b;
  }

  .copy-button:hover {
    color: #e0a800;
  }

  .copied-popover {
    position: absolute;
    top: 90%;
    left: 50%;
    transform: translateX(-50%);
    background: white;
    color: #121212;
    padding: 10px 15px;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: bold;
    white-space: nowrap;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    transition: opacity 0.3s ease;
  }

  .copied-popover.hidden {
    opacity: 0;
  }

  .popover-arrow {
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid white;
  }

  .find-me-title {
    margin-bottom: 20px;
  }

  .social-links {
    display: flex;
    justify-content: center;
    gap: 30px;
  }

  .social-link {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 1.2rem;
    color: #f0b90b;
    text-decoration: none;
  }

  :global(.social-link svg) {
    width: 48px;
    height: 48px;
  }

  .social-link:hover {
    color: #e0a800;
  }

</style>
