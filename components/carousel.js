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

export const Carousel = ({ slides, arrows = true }) => {
  if (Array.isArray(slides) && slides.length < 2 || !Array.isArray(slides)) {
    throw new Error("Carousel slides must be an array of JSX and greater than 2")
  }

  const setupPlugins = () => {
    const plugins = [
      'infinite',
      {
        resolve: autoplayPlugin,
        options: {
          interval: 5000
        }
      }
    ]

    if (arrows) {
      plugins.push({
        resolve: arrowsPlugin,
        options: {
          arrowLeft: <button className="outline-none focus:outline-none"><CarouselButton /></button>,
          arrowRight: <button className="outline-none focus:outline-none"><CarouselButton direction="right" /></button>,
          addArrowClickHandler: true,
        }
      })
    }

    return plugins
  }

  return (
    <div className="w-full">
      <ReactCarousel
        plugins={setupPlugins()}
      >
        {
          slides.map(slide => (
            <div key={nanoid()} className='p-2 md:p-8 w-full'>
              {slide}
            </div>
          ))
        }
      </ReactCarousel>
    </div>
  )
}