import React from 'react'
import './globals.css'
import type { Metadata } from 'next'
import { SearchProvider } from './contexts/SearchContext'
import { SidebarProvider } from '../components/ui/sidebar'
import { AppSidebar } from '../components/AppSidebar'
import { ThemeProvider } from 'next-themes'

export const metadata: Metadata = {
  title: 'Accessibility Dashboard',
  description: 'WCAG Implementation Dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 transition-colors duration-300">
        <ThemeProvider 
          attribute="class" 
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SearchProvider>
            <SidebarProvider>
              <div className="flex">
                <AppSidebar />
                <main className="flex-1 p-6">
                  {children}
                </main>
              </div>
            </SidebarProvider>
          </SearchProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
