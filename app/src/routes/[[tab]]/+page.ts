import { error } from '@sveltejs/kit'
import type { PageLoad } from './$types'
import { TABS, type Tab } from './tabs'

export type Data = {
  tab?: Tab
}

export const load: PageLoad = ({ params }): Data => {
	if (TABS.includes(params.tab as Tab) || params.tab === undefined)
    return { tab: params.tab as Tab | undefined }
  
  error(404, 'Not found')
}