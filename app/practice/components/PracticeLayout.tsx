'use client'
import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface PracticeLayoutProps {
  icon: LucideIcon
  title: string
  description: string
  children: React.ReactNode
}

export default function PracticeLayout({
  icon: Icon,
  title,
  description,
  children
}: PracticeLayoutProps) {
  return (
    <div className="min-h-screen bg-base-200">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-4 py-8"
      >
        <div className="flex items-center gap-4 mb-8">
          <div className="bg-primary/10 text-primary p-4 rounded-box">
            <Icon className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-base-content">{title}</h1>
            <p className="text-base-content/60 text-lg">{description}</p>
          </div>
        </div>
        
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            {children}
          </div>
        </div>
      </motion.div>
    </div>
  )
} 