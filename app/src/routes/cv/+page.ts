import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
  const markdown = await fetch('/media/marcel-claramunt-cv.md').then(r => r.text())
  return { markdown }
}