import React from 'react'
import me from '../public/assets/me.jpg'

const About = () => (
  <div className="p-6 md:p-8 lg:p-16 bg-white dark:bg-gray-800">
    <h1 className="text-4xl mb-9 font-medium text-blue-500 dark:text-blue-300">A bit about me</h1>
    <div className="block lg:flex">
      <img src={me} className="m-auto w-64 shadow-lg rounded-2xl lg:mr-12" />
      <p className="leading-loose text-lg mt-5 font-body text-gray-500 dark:text-gray-200 lg:leading-loose lg:text-2xl lg:mt-0">
        I started programming and getting into tech when I was 12 years old. It all started with a Google search asking how to build a website. And years later, I am still Googling. Outside of tech I love travelling (that's me in Japan), meeting new friends, cooking some good meals. And I love watching films. I am an uplifting individual, very motivated, and value team collaboration. I keep an ideas list and continue to fill it up with all my favourite app ideas that come up in the most random places. Some goals I have for 2021 are to create my first course, build my personal website, and learn Japanese. はじめまして！
      </p>
    </div>
  </div>
)

export default React.memo(About)
