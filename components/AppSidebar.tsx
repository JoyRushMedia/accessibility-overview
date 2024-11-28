"use client"

import React from "react"
import { BookOpen, FileText, Users, ShoppingBag, TrendingUp, Briefcase, TestTube2, Clock, Sun, Moon, Settings } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from 'next-themes'
import { Sidebar, SidebarContent, SidebarGroup, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarMenuSub, SidebarMenuSubItem, SidebarMenuSubButton } from "./ui/sidebar"
import { useSidebar } from "./ui/sidebar"
import { NavigationData, NavigationItem } from "../types/navigation"

const navigationData: NavigationData = {
  navMain: [
    {
      title: "Overview",
      url: "/",
      icon: BookOpen,
    },
    {
      title: "WCAG Guidelines",
      url: "/wcag",
      icon: FileText,
    },
    {
      title: "Roles",
      url: "/roles",
      icon: Users,
    },
    {
      title: "Procurement",
      url: "/procurement",
      icon: ShoppingBag,
    },
    {
      title: "Impact",
      url: "/impact",
      icon: TrendingUp,
    },
    {
      title: "Business",
      url: "/business",
      icon: Briefcase,
    },
    {
      title: "Testing",
      url: "/testing",
      icon: TestTube2,
    },
    {
      title: "Implementation",
      url: "/implementation",
      icon: Clock,
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings,
    },
  ]
}

export function AppSidebar() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const { openMobile, setOpenMobile } = useSidebar()

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem className="px-2 py-1">
            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} 
              className="w-full flex items-center justify-center gap-3 p-2.5 rounded-full 
                bg-gray-100 dark:bg-gray-800 
                text-gray-700 dark:text-gray-300 
                hover:bg-gray-200 dark:hover:bg-gray-700 
                ring-1 ring-gray-200 dark:ring-gray-700
                transition-all duration-200 group"
              aria-label="Toggle Dark Mode"
            >
              {theme === 'dark' ? (
                <>
                  <Sun size={18} className="text-amber-500 group-hover:rotate-90 transition-transform duration-200" />
                  <span className="text-sm font-medium">Light Mode</span>
                </>
              ) : (
                <>
                  <Moon size={18} className="text-indigo-500 group-hover:rotate-90 transition-transform duration-200" />
                  <span className="text-sm font-medium">Dark Mode</span>
                </>
              )}
            </button>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu className="space-y-1">
            {navigationData.navMain.map((item: NavigationItem) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton>
                  <Link 
                    href={item.url} 
                    className={`flex items-center w-full truncate ${
                      pathname === item.url ? 'text-indigo-600' : 'text-gray-700 dark:text-gray-300'
                    } hover:text-indigo-600`}
                  >
                    <item.icon className="mr-2 h-5 w-5" />
                    <span className="truncate">{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

