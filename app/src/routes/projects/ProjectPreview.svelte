<script lang='ts'>
  import { base } from '$app/paths'
  import type { Project } from './projects'

  const { title, description, image, id }: Project = $props();
  const imageUrl = image.startsWith('/') ? `${base}${image}` : image
</script>

<div class='project-preview'>
  <img class='project-image' src={imageUrl} alt={title} />
  <div class='project-info'>
    <h2 class='project-title'>{title}</h2>
    <p class='project-description'>{description}</p>
    <a href={`${base}/projects/${id}`} class='view-more-button'>View Project</a>
  </div>
</div>

<style>
  .project-preview {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgba(255, 255, 255, 0.05);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
    max-width: 400px;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .project-preview:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
  }

  .project-image {
    width: 100%;
    height: auto;
    border-radius: 10px;
    margin-bottom: 15px;
  }

  .project-info {
    padding: 0 15px;
  }

  .project-title {
    font-size: 1.5rem;
    color: #f0b90b;
    margin-bottom: 10px;
  }

  .project-description {
    font-size: 1rem;
    color: #e0e0e0;
    opacity: 0.9;
    margin-bottom: 20px;
  }

  .view-more-button {
    text-decoration: none;
    color: #121212;
    background-color: #f0b90b;
    padding: 10px 20px;
    border-radius: 5px;
    font-weight: bold;
    transition: background 0.3s ease, transform 0.2s ease;
  }

  .view-more-button:hover {
    background-color: #e0a800;
    transform: translateY(-2px);
  }
</style>
