import Link from 'next/link'
import Categories from '~/components/Categories'
import FlashSales from '~/components/FlashSales'
import PopularPicks from '~/components/PopularPicks'

export default function Home() {
  return (
    <main className="mt-20 flex min-h-screen flex-col items-center bg-white px-1 py-4 sm:px-4 md:px-16 lg:px-28">
      <Link href={'/products/1'}>product detail</Link>
      <Categories />
      <FlashSales />
      <PopularPicks />
    </main>
  )
}
