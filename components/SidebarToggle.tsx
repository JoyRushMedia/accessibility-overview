"use client";

import React from 'react';
import { Menu, X } from 'lucide-react';
import { useSidebar } from './ui/sidebar';

const SidebarToggle = () => {
  const { openMobile, setOpenMobile } = useSidebar();

  return (
    <button
      onClick={() => setOpenMobile(!openMobile)}
      className="lg:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
      aria-label="Toggle Sidebar"
    >
      {openMobile ? <X size={20} /> : <Menu size={20} />}
    </button>
  );
};

export default SidebarToggle;
