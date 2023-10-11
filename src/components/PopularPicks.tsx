'use client'

import React from 'react'

import SectionHeading from './SectionHeading'
import Product from './Product'
import Slider from './Slider'

const popularPicks = [{}, {}, {}, {}, {}, {}]

const PopularPicks = () => {
  return (
    <section className="mt-12 w-[100%]">
      <SectionHeading>Popular picks</SectionHeading>
      <Slider>
        {popularPicks.map((popularPick, index) => (
          <Product key={index} {...popularPick} />
        ))}
      </Slider>
    </section>
  )
}

export default PopularPicks
