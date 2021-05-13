import React from 'react'
import { Navbar } from './navbar'

const Footer = () => (
  <div className="p-6 md:p-6 lg:p-6 flex flex-col justify-center items-center">
    <p className="text-xl mb-8 font-medium font-body text-gray-600 dark:text-gray-200">&copy; Ethan Moffat - {(new Date()).getFullYear()}</p>
    <div className="md:block">
      <Navbar />
    </div>
    <div className="block lg:hidden">
      <Navbar footer />
    </div>
  </div>
)

export default React.memo(Footer)
