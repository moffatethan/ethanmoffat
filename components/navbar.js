import React, { useState } from 'react'
import { GitHub, Linkedin, Twitter, Menu, X, Moon } from 'react-feather';
import { useTransition, animated, config } from 'react-spring'

const mobileNavClasses = 'p-4 block w-full transition hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600'

export const Navbar = ({ footer = false }) => {
  const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false)
  const toggleMobileNav = () => setMobileNavIsOpen(!mobileNavIsOpen)

  const transitions = useTransition(mobileNavIsOpen, {
    from: { opacity: '0', transform: 'scale(0.95)' },
    enter: { opacity: '1', transform: 'scale(1)' },
    leave: { opacity: '0', transform: 'scale(0.95)' },
    reverse: mobileNavIsOpen
  })

  const iconTransitions = useTransition(mobileNavIsOpen, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    reverse: mobileNavIsOpen,
    delay: 200,
    config: config.gentle
  })

  return (
    <>
      <div>
        <ul className={`${!footer ? 'hidden' : 'block'} md:flex text-gray-500 dark:text-gray-50 text-2xl`}>
          <div className="flex flex-col lg:flex-row flex-1">
            <li className={`hover:text-gray-600 dark:hover:text-gray-300 cursor-pointer transition-colors ease-in-out font-medium ${footer ? 'dot-separated' : null} mb-4 lg:mb-0`}><a href="#">portfolio</a></li>
            <li className="dot-separated hover:text-gray-600 dark:hover:text-gray-300 cursor-pointer transition-colors ease-in-out font-medium mb-4 lg:mb-0"><a href="#">about</a></li>
            <li className="dot-separated hover:text-gray-600 dark:hover:text-gray-300 cursor-pointer transition-colors ease-in-out font-medium mb-4 lg:mb-0"><a href="#">courses</a></li>
            <li className="dot-separated hover:text-gray-600 dark:hover:text-gray-300 cursor-pointer transition-colors ease-in-out font-medium mb-4 lg:mb-0"><a href="#">contact me</a></li>
            <li className="dot-separated mb-4 lg:mb-0">
              <span className="mr-2 inline-block hover:text-gray-600 dark:hover:text-gray-300 cursor-pointer transition-colors ease-in-out font-medium"><GitHub /></span>
              <span className="mr-2 inline-block hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors ease-in-out font-medium"><Linkedin /></span>
              <span className="mr-2 inline-block hover:text-blue-400 dark:hover:text-blue-300 cursor-pointer transition-colors ease-in-out font-medium"><Twitter /></span>
            </li>
          </div>
        </ul>
        {
          !footer && (
            <div className="bg-white border-none dark:bg-gray-800 cursor-pointer z-50 fixed w-full md:hidden shadow-2xl p-4 flex items-center text-center border text-gray-600 dark:text-gray-200">
              <div className="flex flex-1">
                {
                  !mobileNavIsOpen 
                  ? <div>
                      <Menu onClick={toggleMobileNav} className="transition hover:text-gray-800 dark:hover:text-gray-300" />
                    </div>
                  : iconTransitions(
                    (styles, item) => item && <animated.div style={styles}>
                      <X onClick={toggleMobileNav} className="transition hover:text-red-500 dark:hover:text-red-300" />
                    </animated.div>
                  )
                }
                <div className="ml-3 text-gray-600 dark:text-gray-200 flex">
                  <span className="mr-2 inline-block hover:text-gray-800 dark:hover:text-gray-300 cursor-pointer transition-colors ease-in-out font-medium"><GitHub /></span>
                  <span className="mr-2 inline-block hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors ease-in-out font-medium"><Linkedin /></span>
                  <span className="mr-2 inline-block hover:text-blue-400 cursor-pointer transition-colors ease-in-out font-medium dark:hover:text-blue-300"><Twitter /></span>
                </div>
              </div>
            </div>
          )
        }
      </div>
      {
        transitions(
          (styles, item) => item && <animated.div style={styles} className="bg-white h-screen w-screen fixed pt-16 z-40 dark:bg-gray-700">
            <div>
              <a className={mobileNavClasses} href="#">portfolio</a>
              <a className={mobileNavClasses} href="#">about</a>
              <a className={mobileNavClasses} href="#">courses</a>
              <a className={mobileNavClasses} href="#">contact me</a>
            </div>
          </animated.div>
        )
      }
    </>
  )
}