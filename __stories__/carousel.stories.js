import React from 'react'
import { Carousel } from '../components/carousel'

export default {
  title: 'Components/Carousel',
  component: Carousel
}

export const SmallCarousel = args => <Carousel {...args} />
SmallCarousel.args = {
  slides: [
    <div></div>,
    <div></div>
  ],
  size: 'small'
}

export const LargeCarousel = args => <Carousel {...args} />
LargeCarousel.args = {
  slides: [
    <div></div>,
    <div></div>
  ],
  size: 'large'
}
