const NUMBER_OF_STAR = 5

const createArrayFromNumber = (num: number) => {
  return Array.from({ length: num }, (_, i) => i + 1)
}

const getRating = (value: number) => {
  const newValue = value <= NUMBER_OF_STAR && value > 0 ? value : 0
  const starFill = Math.floor(newValue)
  const starHalf = Math.round(newValue - starFill)
  const star = NUMBER_OF_STAR - starFill - starHalf

  return {
    starFill: createArrayFromNumber(starFill),
    starHalf: createArrayFromNumber(starHalf),
    star: createArrayFromNumber(star),
  }
}

export { getRating }
