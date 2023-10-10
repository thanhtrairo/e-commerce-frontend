import clock from '/public/clock.png'
import footwear from 'public/footwear.png'

const categoriesData = [
  {
    title: 'Clock',
    href: '/categories/clock',
    imageURL: clock,
  },
  {
    title: 'Footwear',
    href: '/categories/clock',
    imageURL: footwear,
  },
] as const

export { categoriesData }
