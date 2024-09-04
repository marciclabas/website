'use client'
import { NotionRenderer } from 'react-notion-x'
import { ExtendedRecordMap } from 'notion-types'

export type Props = {
  recordMap: ExtendedRecordMap
}
export function Renderer({ recordMap }: Props) {
  return <NotionRenderer recordMap={recordMap} darkMode={true} />
}

export default Renderer