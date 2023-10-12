import Link from 'next/link'
import Categories from '~/components/Categories'
import FlashSales from '~/components/FlashSales'
import PopularPicks from '~/components/PopularPicks'

export default function Home() {
  return (
    <>
      <Link href={'/products/1'} prefetch={false}>
        product detail
      </Link>
      <Categories />
      <FlashSales />
      <PopularPicks />
    </>
  )
}
