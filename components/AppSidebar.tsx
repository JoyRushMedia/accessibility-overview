"use client"

import React from "react"
import { BookOpen, FileText, Users, ShoppingBag, TrendingUp, Briefcase, TestTube2, Clock, Settings, Box } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Sidebar, SidebarContent, SidebarGroup, SidebarHeader, SidebarMenu, SidebarMenuItem } from "./ui/sidebar"
// End of Selection
import { NavigationData } from "../types/navigation"
import { ThemeToggle } from './ThemeToggle'

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
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem className="px-2 py-1">
            <ThemeToggle variant="sidebar" />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup title="Main">
          {navigationData.navMain.map((item) => (
            <SidebarMenuItem 
              key={item.url} 
              className={pathname === item.url ? 'active' : ''}
            >
              <Link href={item.url} className="flex items-center gap-2">
                <item.icon className="h-5 w-5" />
                {item.title}
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

