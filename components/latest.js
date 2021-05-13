import React from 'react'
import { Carousel } from './carousel'
import slides from '../shared/carouselSlides'

export const Latest = () => (
  <div className="mt-8">
    <p className="uppercase text-lg text-gray-500 dark:text-gray-200 font-work-sans">latest from me</p>
    <div className="hidden md:block mt-5">
      <Carousel size="small" slides={slides.smallSlides} />
    </div>
    <div className="sm:block md:hidden">
      <Carousel size="small" slides={slides.smallSlides} arrows={false} />
    </div>
  </div>
)
