"use client"

import React from 'react'
import SidebarToggle from './SidebarToggle'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { GlobalSearch } from './GlobalSearch'

const Header = () => {
  const { theme, setTheme } = useTheme()

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white dark:bg-gray-800 shadow-md flex items-center justify-between px-4 sm:px-6 lg:px-8 z-50">
      <div className="flex items-center">
        <SidebarToggle />
      </div>
      <div className="flex items-center space-x-4">
        <div className="hidden sm:block">
          <GlobalSearch />
        </div>
        <button 
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} 
          className="p-2 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
          aria-label="Toggle Dark Mode"
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </header>
  )
}

export default Header 