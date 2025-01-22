<script lang='ts'>
  import Icon from '@iconify/svelte';

  let email = 'marcel@marcelc.uk';
  let copied = false;

  function copyEmail() {
    navigator.clipboard.writeText(email).then(() => {
      copied = true;
      setTimeout(() => copied = false, 2000);
    });
  }
</script>

<div class='hire-container'>
  <h1>Hire Me</h1>

  <div class='hire-buttons'>
    <a href='https://www.fiverr.com/marciclabas' target='_blank' class='hire-button'>
      <Icon icon='simple-icons:fiverr' width='40' height='40' />
      Fiverr
    </a>
    <a href='https://www.upwork.com/freelancers/marciclabas' target='_blank' class='hire-button'>
      <Icon icon='simple-icons:upwork' width='40' height='40' />
      Upwork
    </a>
  </div>

  <p class='or-text'>or reach me via email:</p>

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
</div>

<style>
  .hire-container {
    text-align: center;
    max-width: 700px;
    margin: 0 auto;
    padding: 60px 20px;
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }

  .hire-buttons {
    display: flex;
    justify-content: center;
    gap: 30px;
    margin-bottom: 40px;
  }

  .hire-button {
    display: flex;
    align-items: center;
    gap: 15px;
    font-size: 1.5rem;
    font-weight: bold;
    color: #e0e0e0;
    padding: 15px 30px;
    border-radius: 10px;
    text-decoration: none;
    border: 2px solid #f0b90b;
    transition: background 0.3s ease, transform 0.2s ease;
  }

  .hire-button:hover {
    background: rgba(240, 185, 11, 0.2);
    transform: translateY(-3px);
  }

  .or-text {
    font-size: 1.3rem;
    color: #e0e0e0;
    margin-bottom: 20px;
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
</style>
