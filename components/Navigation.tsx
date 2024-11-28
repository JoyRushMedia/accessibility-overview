"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { GlobalSearch } from '../components/GlobalSearch';
import SidebarToggle from './SidebarToggle';
import { 
  Home, 
  Book, 
  Users, 
  ShoppingBag, 
  TrendingUp, 
  Briefcase, 
  TestTube, 
  Clock, 
  Moon, 
  Sun 
} from 'lucide-react';
import { useTheme } from 'next-themes';

const Navigation = () => {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  const navLinks = [
    { href: '/', label: 'Home', icon: <Home size={20} /> },
    { href: '/wcag', label: 'WCAG Guide', icon: <Book size={20} /> },
    { href: '/roles', label: 'Roles', icon: <Users size={20} /> },
    { href: '/procurement', label: 'Procurement', icon: <ShoppingBag size={20} /> },
    { href: '/impact', label: 'Impact', icon: <TrendingUp size={20} /> },
    { href: '/business', label: 'Business', icon: <Briefcase size={20} /> },
    { href: '/testing', label: 'Testing', icon: <TestTube size={20} /> },
    { href: '/implementation', label: 'Implementation', icon: <Clock size={20} /> },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* Left Section: Sidebar Toggle */}
          <div className="flex items-center">
            <SidebarToggle />
          </div>

          {/* Middle Section: Navigation Links (Hidden on Small Screens) */}
          <ul className="hidden md:flex space-x-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href} 
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 
                    ${pathname === link.href 
                      ? 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white' 
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}
                  `}
                >
                  <span className="mr-2">{link.icon}</span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Section: Search & Theme Toggle */}
          <div className="flex items-center space-x-3">
            <div className="hidden md:block">
              <GlobalSearch />
            </div>
            {/* Theme Toggle Button */}
            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} 
              className="p-2 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
              aria-label="Toggle Dark Mode"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      <div className="md:hidden">
        <ul className="flex flex-col bg-white dark:bg-gray-800 shadow-lg">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link 
                href={link.href} 
                className={`flex items-center px-4 py-3 text-base font-medium transition-colors duration-200 
                  ${pathname === link.href 
                    ? 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white' 
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}
                `}
              >
                <span className="mr-3">{link.icon}</span>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
