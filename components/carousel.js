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

const ProjectCarouselSlide = ({ logoUrl, projectImageUrl, description }) => (
  <div className='flex-col lg:flex-row flex bg-white dark:bg-gray-200 shadow-lg rounded-3xl p-8'>
    <div className='flex-1 px-5'>
      <img className='w-96' src={logoUrl} />
      <p className='font-body text-xl text-gray-600 mt-5 leading-10 line-clamp-5'>
        {description}
      </p>
      <button className='mt-12 bg-blue-500 border shadow-md border-blue-500 text-blue-100 text-md px-12 py-4 rounded-lg transition hover:bg-blue-600 transform hover:-translate-y-1'>View Project</button>
    </div>
    <img className='hidden lg:block flex-1 h-96 shadow-md rounded-3xl' src={projectImageUrl} />
  </div>
)

const CarouselSlide = ({ imgUrl, title, description, small = true }) => (
  <div className="bg-white dark:bg-gray-200 shadow-lg rounded-3xl px-8 py-6">
    <div className='block md:flex h-48'>
      <img src={imgUrl} className="md:w-56 mb-4 md:mb-0 rounded-3xl" />
      <div className='md:ml-8 max-h-36 md:text-left text-center cursor-default'>
        <h3 className='text-3xl font-medium text-gray-700 line-clamp-2 md:line-clamp-3'>{title}</h3>
        <p className='font-body text-gray-500 leading-relaxed text-lg mt-3 line-clamp-2 mb-3 md:line-clamp-4'>
          {description}
        </p>
      </div>
    </div>
    {
      small
      ? (
        <div className="block md:flex justify-end mt-4">
          <button className='w-full md:w-auto text-blue-100 bg-blue-500 px-6 py-2 rounded-xl shadow-md cursor-pointer mt-3 transition transform hover:-translate-y-1 hover:bg-blue-600'>Read more</button>
        </div>
      ) : null
    }
  </div>
)

export const Carousel = ({ slides, arrows = true, size = 'small' }) => {
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
                {
                  size === 'small'
                  ? <CarouselSlide imgUrl={slide.postImage?.url} title={slide.title} description={slide.description} small={true} />
                  : <ProjectCarouselSlide logoUrl={slide.projectLogo?.url} title={slide.title} description={slide.description} projectImageUrl={slide.projectImage?.url} small={false} />
                }
              </div>
            )
          )
        }
      </ReactCarousel>
    </div>
  )
}

