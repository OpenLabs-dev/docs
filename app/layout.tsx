import './global.css'
import { RootProvider } from 'fumadocs-ui/provider'
import type { ReactNode } from 'react'
import Menu from '@/components/navbar'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <RootProvider>
          <Menu />
          {children}
        </RootProvider>
      </body>
    </html>
  )
}
