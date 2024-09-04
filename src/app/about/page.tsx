import { notFound } from 'next/navigation'
import { notion } from '../../lib/notion'
import { ExtendedRecordMap } from 'notion-types'
import Renderer from './Renderer'
import 'react-notion-x/src/styles.css'

export default async function AboutPage() {
  const pageId = 'a5ba59ca631044be9debd34edf8789dc'
  let recordMap: ExtendedRecordMap

  try {
    recordMap = await notion.getPage(pageId)
  } catch (error) {
    console.error('Failed to load Notion page', error)
    return notFound() // Show a 404 page if there's an error fetching the Notion page
  }

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-900 text-gray-200">
      <div className="container mx-auto p-6">
        <Renderer recordMap={recordMap} />
      </div>
    </section>
  )
}
