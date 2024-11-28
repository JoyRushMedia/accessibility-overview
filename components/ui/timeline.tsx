import React from "react"

interface TimelineItemProps {
  title?: string
  children: React.ReactNode
}

export function TimelineItem({ title, children }: TimelineItemProps) {
  return (
    <li className="mb-10 ml-4">
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
      {title && <h3 className="font-semibold">{title}</h3>}
      <div className="mb-4 text-base font-normal">{children}</div>
    </li>
  )
}

export function Timeline({ children }: { children: React.ReactNode }) {
  return (
    <ol className="relative border-l border-gray-200 dark:border-gray-700">
      {children}
    </ol>
  )
}
