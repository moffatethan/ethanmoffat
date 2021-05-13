import { useTheme } from 'next-themes'
import React from 'react'
import { Moon, Sun } from 'react-feather'

export const DarkModeToggle = () => {
  const { theme, setTheme } = useTheme()
  return (
    <div onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="fixed z-50 bottom-0 right-0 bg-gray-700 text-gray-200 dark:bg-gray-200 dark:text-gray-700 shadow-xl p-5 rounded-full cursor-pointer m-6 transition hover:shadow-2xl transform hover:-translate-y-1">
      {
        theme === 'light'
        ? <Moon />
        : <Sun />
      }
    </div>
  )
}