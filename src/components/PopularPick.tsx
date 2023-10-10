import Image from 'next/image'
import React from 'react'

import product from 'public/product.jpg'
import Rating from './Rating'

const PopularPick = () => {
  return (
    <div className="lg:basis-1/8 mx-2 cursor-pointer rounded-md bg-gray-100 transition hover:-translate-y-[2px] sm:basis-1/4 md:basis-1/6">
      <Image src={product} alt="product" />
      <div className="flex flex-col p-1">
        <p className="line-clamp-2 min-h-[1.5rem] text-xs leading-3">N200X Modern Style Chairs Chairs</p>
        <div className="my-2 basis-6/12 leading-3 text-red-500">
          <span className="text-xs">₫</span>
          <span className="text-sm">109.000</span>
        </div>
        <div className="flex basis-2/12 gap-2">
          <Rating value={3.5} />
          <span className="text-xs">Đã bán: 0</span>
        </div>
      </div>
    </div>
  )
}

export default PopularPick
