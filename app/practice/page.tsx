'use client'

import { motion } from 'framer-motion'
import { Code, Image, Keyboard } from 'lucide-react'
import Link from 'next/link'
import { cloneElement } from 'react'
import { ThemeController } from '@/components/ThemeController'

interface Exercise {
  id: number
  title: string
  description: string
  icon: React.ReactElement
  href: string
  difficulty: string
  duration: string
}

export default function PracticePage() {
  const exercises: Exercise[] = [
    {
      id: 1,
      title: "Color Contrast Tool",
      description: "Try out different color combinations and check if they meet accessibility standards in real-time",
      icon: <Code className="h-6 w-6" />,
      href: "/practice/exercises/color-contrast",
      difficulty: "Quick test",
      duration: "Interactive"
    },
    {
      id: 2,
      title: "Alt Text Generator",
      description: "Upload images and practice writing descriptive alt text with instant feedback",
      icon: <Image className="h-6 w-6" />,
      href: "/practice/exercises/alt-text",
      difficulty: "Sandbox",
      duration: "Interactive"
    },
    {
      id: 3,
      title: "Keyboard Navigation Tester",
      description: "Interactive playground to test and validate keyboard navigation patterns",
      icon: <Keyboard className="h-6 w-6" />,
      href: "/practice/exercises/keyboard-nav",
      difficulty: "Testing tool",
      duration: "Interactive"
    }
  ]

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-base-100"
    >
      <div className="container mx-auto p-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-bold text-base-content">
              Interactive Accessibility Tools
            </h1>
            <p className="text-xl text-base-content/60 mt-2">
              Hands-on tools to build more accessible web experiences
            </p>
          </div>
          <ThemeController />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {exercises.map((exercise) => (
            <Link 
              href={exercise.href} 
              key={exercise.id} 
              className="group"
            >
              <div className="card bg-base-200 hover:bg-base-300 transition-all duration-300 
                             border border-base-300 h-full overflow-hidden">
                <div className="card-body">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center 
                                justify-center mb-4 group-hover:scale-110 transition-transform">
                    {cloneElement(exercise.icon, { 
                      className: 'w-7 h-7 text-primary' 
                    })}
                  </div>
                  
                  <h2 className="card-title text-xl mb-2 text-base-content group-hover:text-primary transition-colors">
                    {exercise.title}
                  </h2>
                  <p className="text-base-content/70 mb-6 line-clamp-2">
                    {exercise.description}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <div className="badge badge-outline text-base-content border-base-content/20">
                      {exercise.difficulty}
                    </div>
                    <div className="badge badge-primary">
                      {exercise.duration}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="stats shadow inline-flex">
            <div className="stat place-items-center">
              <div className="stat-title">Exercises</div>
              <div className="stat-value text-primary">{exercises.length}</div>
              <div className="stat-desc">Available to try</div>
            </div>
            
            <div className="stat place-items-center">
              <div className="stat-title">Interactive</div>
              <div className="stat-value">100%</div>
              <div className="stat-desc">Real-time feedback</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
} 