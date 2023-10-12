import React from 'react'
import SliderLib from 'react-slick'

type SliderProps = {
  children: React.ReactNode
}

type SampleArrow = {
  className?: string
  style?: React.CSSProperties
  onClick?: React.MouseEventHandler<HTMLDivElement>
}

const SampleNextArrow = (props: SampleArrow) => {
  const { className, style, onClick } = props
  return (
    <div
      className={`${className} !-right-3 z-[2] !hidden before:!text-2xl before:!text-gray-950 sm:!block`}
      style={style}
      onClick={onClick}
    />
  )
}

const SamplePrevArrow = (props: SampleArrow) => {
  const { className, style, onClick } = props
  return (
    <div
      className={`${className} !-left-3 z-[2] !hidden before:!text-2xl before:!text-gray-950 sm:!block`}
      style={style}
      onClick={onClick}
    />
  )
}

const Slider = (props: SliderProps) => {
  const { children } = props

  const settings = {
    speed: 500,
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 6,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  return <SliderLib {...settings}>{children}</SliderLib>
}

export default Slider
