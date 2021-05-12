import React from 'react'
import { GitHub, Linkedin, Twitter } from 'react-feather';

export const Navbar = () => (
  <div>
    <ul className="flex text-gray-500 text-2xl">
      <li className="hover:text-gray-600 cursor-pointer transition-colors ease-in-out font-medium"><a href="#">portfolio</a></li>
      <li className="dot-separated hover:text-gray-600 cursor-pointer transition-colors ease-in-out font-medium"><a href="#">about</a></li>
      <li className="dot-separated hover:text-gray-600 cursor-pointer transition-colors ease-in-out font-medium"><a href="#">courses</a></li>
      <li className="dot-separated hover:text-gray-600 cursor-pointer transition-colors ease-in-out font-medium"><a href="#">contact me</a></li>
      <li className="dot-separated">
        <span className="mr-2 inline-block hover:text-gray-600 cursor-pointer transition-colors ease-in-out font-medium"><GitHub /></span>
        <span className="mr-2 inline-block hover:text-blue-600 cursor-pointer transition-colors ease-in-out font-medium"><Linkedin /></span>
        <span className="mr-2 inline-block hover:text-blue-400 cursor-pointer transition-colors ease-in-out font-medium"><Twitter /></span>
      </li>
    </ul>
  </div>
)