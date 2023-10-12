'use client'

import SectionHeading from './SectionHeading'
import Category from './Category'
import { categoriesData } from '~/lib/data'

const Categories = () => {
  return (
    <section className="w-[100%]">
      <SectionHeading>Categories</SectionHeading>
      <div className="flex flex-wrap">
        {categoriesData.map((category, index) => (
          <Category key={index} {...category} />
        ))}
      </div>
    </section>
  )
}

export default Categories
