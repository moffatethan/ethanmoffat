import React from 'react'
import { Carousel } from './carousel'
import slides from '../shared/carouselSlides'

export const Latest = () => (
  <div className="mt-8">
    <p className="uppercase text-lg text-gray-500 font-work-sans">latest from me</p>
    <div className="mt-5">
      <Carousel size="small" slides={slides.smallSlides} />
    </div>
  </div>
)
