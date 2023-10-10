import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs'

import { getRating } from '~/lib/helpers'

type RatingProps = {
  value: number
}

const Rating = (props: RatingProps) => {
  const { value } = props

  const { star, starFill, starHalf } = getRating(value)

  return (
    <div className="flex">
      {starFill.length > 0
        ? starFill.map((_starFil, index) => <BsStarFill key={index} className="text-xs text-yellow-400" />)
        : null}
      {starHalf.length > 0
        ? starHalf.map((_starHalf, index) => <BsStarHalf key={index} className="text-xs text-yellow-400" />)
        : null}
      {star.length > 0 ? star.map((_star, index) => <BsStar key={index} className="text-xs text-yellow-400" />) : null}
    </div>
  )
}

export default Rating
