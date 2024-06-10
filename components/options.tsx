'use client'

import * as React from 'react'
import Link from 'next/link'

import { cn } from '@openlabs/ui/tailwind'
import { FlaskConical } from 'lucide-react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/navigations/menu-options'
import { docs } from '@/utils/constants'

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none m-2 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-default',
            className,
          )}
          {...props}
        >
          <h5 className="text-small font-bold leading-none">{title}</h5>
          <p className="line-clamp-2 text-small leading-snug py-1">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Open Source</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-default/50 to-default p-4 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <FlaskConical />
                    <div className="mb-2 mt-4 text-large font-medium">
                      Labs
                    </div>
                    <p className="text-small leading-tight">
                      This is a collection of open-source projects built by Open Labs
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/ui" title="Open UI">
                Open UI is a design system built Radix UI and Tailwind CSS.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Docs</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {docs.map(doc => (
                <ListItem
                  key={doc.title}
                  title={doc.title}
                  href={doc.href}
                >
                  {doc.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/faq" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              FAQ
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
