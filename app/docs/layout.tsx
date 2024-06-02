import { DocsLayout } from 'fumadocs-ui/layout'
import type { ReactNode } from 'react'
import { layoutOptions } from '@/app/layout.config'

export default function RootDocsLayout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout {...layoutOptions}>
      {children}
    </DocsLayout>
  )
}
