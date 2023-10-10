import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs'

import { useRating } from '~/lib/hooks'

type RatingProps = {
  value: number
}

const Rating = (props: RatingProps) => {
  const { value } = props

  const { star, starFill, starHalf } = useRating(value)

  return (
    <div className="flex">
      {starFill.length > 0 ? starFill.map((_starFil, index) => <BsStarFill key={index} />) : null}
      {starHalf.length > 0 ? starHalf.map((_starHalf, index) => <BsStarHalf key={index} />) : null}
      {star.length > 0 ? star.map((_star, index) => <BsStar key={index} />) : null}
    </div>
  )
}

export default Rating
