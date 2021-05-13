import React from 'react'

const Quote = () => (
  <div className="p-6 my-12 md:my-5 md:p-8 lg:p-16">
    <h1 className="text-5xl font-fancy-body text-center md:text-left md:text-7xl text-gray-500 dark:text-gray-300">
      Trying to define yourself is like trying to bite your own teeth. <span className="text-gray-700 font-bold dark:text-gray-50">- Alan Watts</span>
    </h1>
  </div>
)

export default React.memo(Quote)
