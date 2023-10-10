import React from 'react'

import SectionHeading from './SectionHeading'
import PopularPick from './PopularPick'

const popularPicks = [{}, {}]

const PopularPicks = () => {
  return (
    <section className="mt-12">
      <SectionHeading>Popular picks</SectionHeading>
      <div className="flex flex-wrap">
        {popularPicks.map((popularPick, index) => (
          <PopularPick key={index} {...popularPick} />
        ))}
      </div>
    </section>
  )
}

export default PopularPicks
