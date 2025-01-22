<script lang="ts">
  import ProjectPreview from './ProjectPreview.svelte'
  import { PROJECTS } from './projects'

</script>

<div class="projects-container">
  <h1 class="projects-title">My Projects</h1>
  <div class="projects-wrapper">
    {#each PROJECTS as project}
      <ProjectPreview {...project} />
    {/each}
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
