export type Project = {
  title: string
  description: string
  image: string
  id: string
}

export const PROJECTS: Project[] = [
  {
    title: 'Moveread',
    description: 'An AI-powered scoresheet digitation service for chess tournaments.',
    image: '/media/projects/moveread-screenshot.png',
    id: 'moveread'
  },
  {
    title: 'RepoGPT',
    description: 'A Chrome Extension to create custom GPTs from GitHub repos.',
    image: '/media/projects/repogpt-screenshot.png',
    id: 'repogpt'
  },
]