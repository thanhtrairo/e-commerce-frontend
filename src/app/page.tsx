import Categories from '~/components/Categories'
import FlashSales from '~/components/FlashSales'
import PopularPicks from '~/components/PopularPicks'

export default function Home() {
  return (
    <main className="mt-20 min-h-screen bg-white px-0 py-4 sm:px-4 md:px-16 lg:px-28">
      <Categories />
      <FlashSales />
      <PopularPicks />
    </main>
  )
}
