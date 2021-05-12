import React from 'react'
import { CarouselButton } from '../components/carouselButton'

export default {
  title: 'Components/CarouselButton',
  component: CarouselButton
}

export const Primary = args => <CarouselButton {...args} />

Primary.args = {
  direction: 'left'
}