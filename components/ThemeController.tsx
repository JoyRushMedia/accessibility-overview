'use client'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const themes = [
  { name: "Light", value: "light" },
  { name: "Dark", value: "dark" },
  { name: "Cupcake", value: "cupcake" },
  { name: "Emerald", value: "emerald" },
  { name: "Corporate", value: "corporate" },
  { name: "Synthwave", value: "synthwave" },
  { name: "Retro", value: "retro" },
  { name: "Cyberpunk", value: "cyberpunk" }
]

export function ThemeController() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <div className="dropdown w-full">
      <div 
        tabIndex={0} 
        role="button" 
        className="btn btn-ghost w-full justify-between"
      >
        <span>Theme: {theme}</span>
        <svg
          width="12px"
          height="12px"
          className="h-2 w-2 fill-current opacity-60 inline-block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048"
        >
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow-2xl bg-base-200 rounded-box w-full"
      >
        {themes.map((t) => (
          <li key={t.value}>
            <button
              onClick={() => setTheme(t.value)}
              className={theme === t.value ? 'active' : ''}
            >
              {t.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
} 