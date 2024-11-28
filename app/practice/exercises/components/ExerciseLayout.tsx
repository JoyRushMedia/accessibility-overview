'use client'
import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface ExerciseLayoutProps {
  icon: LucideIcon
  title: string
  description: string
  iconColor: string
  children: React.ReactNode
}

export default function ExerciseLayout({
  icon: Icon,
  title,
  description,
  iconColor,
  children
}: ExerciseLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto p-6 pb-20"
      >
        <div className="flex items-center gap-4 mb-8">
          <div className={`p-4 rounded-2xl ${iconColor} backdrop-blur-sm shadow-lg`}>
            <Icon className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
            <p className="text-muted-foreground text-lg">{description}</p>
          </div>
        </div>
        
        <div className="bg-card/80 backdrop-blur-sm rounded-3xl border shadow-xl">
          <div className="p-8">
            {children}
          </div>
        </div>
      </motion.div>
    </div>
  )
} 