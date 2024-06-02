import type { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Open UI Online',
  description: 'A design system built Shadcn and Tailwind CSS.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex min-h-[calc(100dvh-64px)] flex-col">
        <main className="flex-1">{children}</main>
      </div>
    </>
  )
}
