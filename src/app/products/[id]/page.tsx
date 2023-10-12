import Image from 'next/image'
import React from 'react'

import productDetail from 'public/productDetail.jpg'
import Rating from '~/components/Rating'
import { numberWithCommas } from '~/lib/helpers'

const ProductDetail = () => {
  return (
    <section className="flex flex-col md:flex-row">
      <div className="max-h-[450px] overflow-hidden md:basis-5/12">
        <Image src={productDetail} alt="product-detail" />
      </div>
      <div className="md:basis-7/12 md:px-6">
        <h1 className="mb-4 text-3xl font-semibold">Bar Chair With Wood Legs</h1>
        <div className="mb-4 flex items-center gap-2">
          <Rating value={4} />
          <p className="flex gap-1 border-l-[1px] border-l-gray-300 px-2">
            <span className="font-medium">4</span>
            <span className="font-light">Đánh giá</span>
          </p>
          <p className="flex gap-1 border-l-[1px] border-l-gray-300 px-2">
            <span className="font-medium">90</span>
            <span className="font-light">Đã bán</span>
          </p>
        </div>
        <p className="mb-4 text-xl">
          <span>₫</span>
          {numberWithCommas(99999)}{' '}
        </p>
        <p>Color: White</p>
      </div>
    </section>
  )
}

export default ProductDetail
