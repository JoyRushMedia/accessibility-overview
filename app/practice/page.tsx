'use client'

import { motion } from 'framer-motion'
import { Code, Image, Keyboard } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card'
import Link from 'next/link'

interface Exercise {
  id: number
  title: string
  description: string
  icon: React.ReactNode
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
      icon: <Code className="h-6 w-6 text-indigo-500" />,
      href: "/practice/color-contrast",
      difficulty: "Quick test",
      duration: "Interactive"
    },
    {
      id: 2,
      title: "Alt Text Generator",
      description: "Upload images and practice writing descriptive alt text with instant feedback",
      icon: <Image className="h-6 w-6 text-emerald-500" />,
      href: "/practice/alt-text",
      difficulty: "Sandbox",
      duration: "Interactive"
    },
    {
      id: 3,
      title: "Keyboard Navigation Tester",
      description: "Interactive playground to test and validate keyboard navigation patterns",
      icon: <Keyboard className="h-6 w-6 text-amber-500" />,
      href: "/practice/keyboard-nav",
      difficulty: "Testing tool",
      duration: "Interactive"
    }
  ]

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6 min-h-screen pb-8"
    >
      <div>
        <h1 className="text-3xl font-bold">Accessibility Playground</h1>
        <p className="text-muted-foreground mt-2">
          Interactive tools to test and validate your accessibility implementations
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 h-full">
        {exercises.map((exercise) => (
          <Link href={exercise.href} key={exercise.id} className="h-full">
            <Card className="h-full hover:shadow-lg transition-all duration-200 flex flex-col">
              <CardHeader className="flex-1">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4">
                  {exercise.icon}
                </div>
                <CardTitle>{exercise.title}</CardTitle>
                <CardDescription>{exercise.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>{exercise.difficulty}</span>
                  <span>{exercise.duration}</span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </motion.div>
  )
} 