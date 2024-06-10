import Link from 'next/link'
import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle } from '@openlabs/ui'
import Menu from '@/components/navbar'

const ourValues = [
  {
    icon: 'i-ph-heart',
    title: 'Passion',
    description: 'Trail blaze the web and learn all along the way.',
  },
  {
    icon: 'i-ph-sparkle',
    title: 'Innovation',
    description: 'Think bold and push web standards.',
  },
  {
    icon: 'i-ph-users',
    title: 'Community',
    description: 'Promote transparency and strive for collaboration.',
  },
]

export default function HomePage() {
  return (
    <>
      <Menu />
      <div className="py-24 relative bg-gradient pt-40 sm:py-32 md:py-40 bg-stars">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl gap-16 sm:gap-y-24 flex flex-col">
          <div className="text-center">
            <h1 className="tracking-tight dark:text-white inline-block text-gradient text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold">Open Labs</h1>
            <p className="mt-6 text-lg tracking-tight text-pretty max-w-xl mx-auto">
              Open Labs is a community of developers, designers, and writers who are passionate about open source software.
            </p>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 justify-center">
              <Button asChild size="lg" className="bg-default hover:bg-default/80 text-foreground" rippleColor="light">
                <Link href="https://github.com/OpenLabs-dev/" target="_blank">Github</Link>
              </Button>
              <Button asChild size="lg" className="bg-default hover:bg-default/80 text-foreground" rippleColor="light">
                <Link href="/">About us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl gap-16 sm:gap-y-16 flex flex-col">
        <div className="text-center flex flex-col items-center">
          <h2 className="tracking-tight dark:text-white lg:text-5xl text-gradient text-4xl sm:text-5xl md:text-6xl font-semibold inline-block">Our values.</h2>
        </div>
        <div className="p-10">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 sm:grid-cols-1 md:grid-cols-3">
            {ourValues.map((value, index) => (
              <Card key={index} border="sm">
                <CardHeader>
                  <CardTitle>
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
