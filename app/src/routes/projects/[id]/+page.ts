import { error } from '@sveltejs/kit'
import type { PageLoad } from './$types'
import { base } from '$app/paths'

export const load: PageLoad = async ({ params, fetch }) => {
  const r = await fetch(`${base}/media/projects/${params.id}.md`)
  if (r.status !== 200)
    return error(404, 'Project not found')
  const markdown = await r.text()
  return { markdown }
}