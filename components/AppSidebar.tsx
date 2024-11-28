"use client"

import React from "react"
import { BookOpen, FileText, Users, ShoppingBag, TrendingUp, Briefcase, TestTube2, Clock, Settings, Box } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Sidebar, SidebarContent, SidebarGroup, SidebarHeader, SidebarMenu, SidebarMenuItem } from "./ui/sidebar"
import { NavigationData } from "../types/navigation"
import { ThemeController } from './ThemeController'

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
      title: "Practice",
      url: "/practice",
      icon: Box,
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

  return (
    <Sidebar className="border-r border-base-300 bg-base-100">
      <SidebarHeader className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-base-content">
            A11y Dashboard
          </h2>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {navigationData.navMain.map((item) => (
              <SidebarMenuItem key={item.url}>
                <Link
                  href={item.url}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors duration-200
                    ${pathname === item.url 
                      ? 'bg-primary/10 text-primary' 
                      : 'text-base-content hover:bg-base-200'
                    }`}
                >
                  <item.icon className={`h-5 w-5 ${
                    pathname === item.url
                      ? 'text-primary'
                      : 'text-base-content/70'
                  }`} />
                  <span className="font-medium">{item.title}</span>
                </Link>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      
      <div className="mt-auto p-4 border-t border-base-300">
        <ThemeController />
      </div>
    </Sidebar>
  )
}

