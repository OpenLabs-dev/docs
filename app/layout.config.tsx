import type { DocsLayoutProps } from 'fumadocs-ui/layout'
import { pageTree } from '@/app/source'
import { Title } from '@/app/layout.client'

export const layoutOptions: Omit<DocsLayoutProps, 'children'> = {
  tree: pageTree,
  nav: {
    transparentMode: 'top',
    title: <Title />,
    url: '/docs/ui',
    githubUrl: 'https://github.com/OpenLabs/openui',
  },
  links: [
    {
      text: 'Our website',
      url: '/',
    },
    {
      text: 'Components',
      url: '/docs/ui/components/accordion',
      active: 'none',
    },
  ],
}
