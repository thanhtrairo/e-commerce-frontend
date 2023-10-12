import Image from 'next/image'
import React from 'react'

import Rating from './Rating'
import product from 'public/product.jpg'

const Product = () => {
  return (
    <div className="mx-1 cursor-pointer rounded-md bg-gray-100 pb-2 transition hover:-translate-y-[1px]">
      <Image src={product} alt="product" />
      <div className="flex flex-col p-1">
        <p className="line-clamp-2 min-h-[1.5rem] text-sm leading-3">N200X Modern Style Chairs Chairs</p>
        <div className="my-2 flex basis-6/12 items-center gap-2 leading-3">
          <div className="text-xs text-gray-500 line-through">₫199.000</div>
          <div className="text-red-500">
            <span className="text-xs">₫</span>
            <span className="text-sm">109.000</span>
          </div>
        </div>
        <div className="flex basis-2/12 gap-2">
          <Rating value={3.5} />
          <span className="text-xs">Đã bán: 0</span>
        </div>
      </div>
    </div>
  )
}

export default Product
