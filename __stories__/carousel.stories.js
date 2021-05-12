import React from 'react'
import { Carousel } from '../components/carousel'

import slides from '../shared/carouselSlides'

export default {
  title: 'Components/Carousel',
  component: Carousel
}

export const SmallCarousel = args => <Carousel {...args} />
SmallCarousel.args = {
  slides: slides.smallSlides,
  size: 'small'
}

export const LargeCarousel = args => <Carousel {...args} />
LargeCarousel.args = {
  slides: slides.largeSlides,
  size: 'large'
}
