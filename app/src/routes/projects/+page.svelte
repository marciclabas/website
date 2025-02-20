<script lang='ts'>
  import ProjectPreview from './ProjectPreview.svelte'
  import MovereadImg from './media/moveread-screenshot.png?enhanced'
  import RepoGPTImg from './media/repogpt-screenshot.png?enhanced'
  import ProcustesImg from './media/procrustes-screenshot.png?enhanced'
</script>

<div class='projects-container'>
  <h1 class='projects-title'>Projects</h1>
  <div class='projects-wrapper'>
    <ProjectPreview
      title='Moveread'
      description='An AI-powered scoresheet digitation service for chess tournaments.'
      id='moveread'
    >
      {#snippet image()}
        <enhanced:img src={MovereadImg} alt='Moveread Screenshot' width="100%" />
      {/snippet}
    </ProjectPreview>
    <ProjectPreview
      title='RepoGPT'
      description='A Chrome Extension to create custom GPTs from GitHub repos.'
      id='repogpt'
    >
      {#snippet image()}
        <enhanced:img src={RepoGPTImg} alt='RepoGPT Screenshot' width="100%" />
      {/snippet}
    </ProjectPreview>
    <ProjectPreview
      title='Bed of Procrustes'
      description='Aphorisms in random order from The Bed of Procrustes, by Nassim Taleb.'
      id='procrustes'
    >
      {#snippet image()}
        <enhanced:img src={ProcustesImg} alt='Procrustes Screenshot' width="100%" />
      {/snippet}
    </ProjectPreview>
  </div>
</div>

<style>
  .projects-container {
    text-align: center;
    padding: 60px 20px;
    max-width: 1200px;
    margin: 0 auto;
  }

  .projects-title {
    font-size: 2.5rem;
    color: #f0b90b;
    margin-bottom: 40px;
  }

  .projects-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
  }

  @media (max-width: 768px) {
    .projects-wrapper {
      flex-direction: column;
      align-items: center;
    }
  }
</style>
