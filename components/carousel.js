import React from 'react'
import { nanoid } from 'nanoid'
import { arrowsPlugin, autoplayPlugin } from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css';
import { CarouselButton } from './carouselButton';
import dynamic from 'next/dynamic'

const ReactCarousel = dynamic(
  () => import('@brainhubeu/react-carousel'),
  {
    ssr: false
  }
)

const styles = {
  'small': 'w-full',
  'large': 'w-4/5'
}

export const Carousel = ({ slides, size = 'small' }) => {
  if (Array.isArray(slides) && slides.length < 2 || !Array.isArray(slides)) {
    throw new Error("Carousel slides must be an array of JSX and greater than 2")
  }
  return (
    <div className={styles[size]}>
      <ReactCarousel
        plugins={[
          {
            resolve: arrowsPlugin,
            options: {
              arrowLeft: <button className="outline-none focus:outline-none"><CarouselButton /></button>,
              arrowRight: <button className="outline-none focus:outline-none"><CarouselButton direction="right" /></button>,
              addArrowClickHandler: true,
            }
          },
          'infinite',
          {
            resolve: autoplayPlugin,
            options: {
              interval: 5000,
            }
          },
        ]}
      >
        {
          slides.map(slide => (
            <div key={nanoid()} className='p-8'>
              {slide}
            </div>
          ))
        }
      </ReactCarousel>
    </div>
  )
}