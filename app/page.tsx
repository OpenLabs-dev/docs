import Menu from '@/components/navbar'
import Link from "next/link"
import { Button } from "@openlabs/ui"

export default function HomePage() {
  return (
    <>
      <Menu />
       <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Join our waitlist</h2>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Be the first to know when we launch.
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-2">
          <div className="flex flex-col items-center space-y-2">
            <Button className="w-full" asChild>
              <Link href="https://github.com/OpenLabs-dev">
                Github
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
