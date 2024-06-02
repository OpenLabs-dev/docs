import Menu from '@/components/navbar'

export default function HomePage() {
  return (
    <>
      <Menu />
      <main className="flex h-screen flex-col justify-center text-center">
        <h1 className="mb-4 text-2xl font-bold">Hello World</h1>
      </main>
    </>
  )
}
