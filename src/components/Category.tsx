import React from 'react'
import Image from 'next/image'
import { categoriesData } from '~/lib/data'
import Link from 'next/link'

type CategoryProps = (typeof categoriesData)[number]

const Category = (props: CategoryProps) => {
  const { href, imageURL, title } = props

  return (
    <Link href={href} className="mx-2 basis-1/6 border border-transparent hover:border-gray-300">
      <Image src={imageURL} alt={title} />
    </Link>
  )
}

export default Category
