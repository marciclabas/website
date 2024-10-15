'use client'
import { NotionRenderer } from 'react-notion-x'

export type Props = Parameters<typeof NotionRenderer>[0]
export function Renderer(props: Props) {
  return <NotionRenderer darkMode={true} {...props} />
}

export default Renderer