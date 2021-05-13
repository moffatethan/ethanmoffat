import React from 'react'
import { ArrowLeft, ArrowRight } from 'react-feather'

export const CarouselButton = ({
  direction = "left"
}) => {

  return (
    <div className={`m-2 inline-block p-5 rounded-full bg-white dark:bg-gray-300 shadow-md text-gray-700 hover:shadow-lg transition ease-in-out transform hover:-translate-y-1 cursor-pointer`}>
      {
        direction === 'left'
        ? <ArrowLeft />
        : <ArrowRight />
      }
    </div>
  )
}