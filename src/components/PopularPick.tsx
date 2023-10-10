import Image from 'next/image'
import React from 'react'

import product from 'public/product.jpg'
import Rating from './Rating'

const PopularPick = () => {
  return (
    <div className="lg:basis-1/8 rounded-sm bg-gray-100 px-1 sm:basis-1/4 md:basis-1/6">
      <Image src={product} alt="product" />
      <div className="flex flex-col p-1">
        <p className="line-clamp-2 basis-1/3 text-sm">N200X Modern Style Chairs</p>
        <Rating value={3.5} />
      </div>
    </div>
  )
}

export default PopularPick
