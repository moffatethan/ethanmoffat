import React from 'react'
import { Carousel } from './carousel'

export const Latest = ({ posts }) => {
  return (
    <div className="mt-8 max-w-4xl">
      <p className="uppercase text-lg text-gray-500 dark:text-gray-200 font-work-sans">latest from me</p>
      <div className="hidden md:block mt-5">
        <Carousel size="small" slides={posts} />
      </div>
      <div className="sm:block md:hidden">
        <Carousel size="small" slides={posts} arrows={false} />
      </div>
    </div>
  )  
}