import React from 'react'
import './globals.css'
import type { Metadata } from 'next'
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
      <body>
        <ThemeProvider 
          attribute="data-theme"
          defaultTheme="light"
          enableSystem
        >
          <div className="min-h-screen bg-base-100 text-base-content">
            <SidebarProvider>
              <div className="flex">
                <AppSidebar />
                <main className="flex-1 bg-base-100">
                  {children}
                </main>
              </div>
            </SidebarProvider>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
