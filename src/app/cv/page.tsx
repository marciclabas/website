import { notFound } from 'next/navigation'
import { ExtendedRecordMap } from 'notion-types'
import { notion } from '../../lib/notion'
import NotionPage from '../../lib/NotionPage'
import 'react-notion-x/src/styles.css'

export default async function CVPage() {
  const pageId = '8682129797a74c84945b3272974f44ba'
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
        <NotionPage recordMap={recordMap} />
      </div>
    </section>
  )
}
