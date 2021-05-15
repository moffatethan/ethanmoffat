import React from 'react'
import { Projects } from './projects'
import { Carousel } from './carousel'

import slides from '../shared/carouselSlides'

export const Showcase = ({ projects }) => (
  <div className="grid grid-cols-12 p-6 md:p-8 lg:p-16">
    <div className="col-span-12">
      <h2 className="text-3xl text-gray-700 dark:text-gray-200 mt-12 mb-4 lg:mb-12">Here are my projects</h2>
    </div>
    <div className="hidden lg:block col-span-12">
      <Carousel size="large" slides={projects} />
    </div>
    <div className="md:block lg:hidden col-span-12">
      <Carousel size="large" slides={projects} arrows={false} />
    </div>
  </div>
)
