'use client'
import { useState } from 'react'
import { Image as ImageIcon, ChevronRight, CheckCircle } from 'lucide-react'
import ExerciseLayout from './components/ExerciseLayout'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { SAMPLE_IMAGES } from './mockImages'
import Image from 'next/image'

export default function AltTextExercise() {
  const [currentImage, setCurrentImage] = useState(0)
  const [userInput, setUserInput] = useState('')
  const [feedback, setFeedback] = useState<{
    message: string
    status: 'success' | 'warning' | 'error'
  } | null>(null)

  const checkAltText = () => {
    if (!userInput.trim()) {
      setFeedback({
        message: 'Please provide alt text before checking',
        status: 'warning'
      })
      return
    }

    // Add your alt text validation logic here
    const isGood = userInput.length > 20 && userInput.length < 125
    
    setFeedback({
      message: isGood 
        ? 'Great job! Your alt text is descriptive and concise.'
        : 'Consider making your alt text more descriptive while keeping it concise.',
      status: isGood ? 'success' : 'warning'
    })
  }

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % SAMPLE_IMAGES.length)
    setUserInput('')
    setFeedback(null)
  }

  const statusColors = {
    success: 'bg-green-100 text-green-800 border-green-200',
    warning: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    error: 'bg-red-100 text-red-800 border-red-200'
  }

  return (
    <ExerciseLayout
      icon={ImageIcon}
      title="Alt Text Generator"
      description="Practice writing effective alt text for images"
      iconColor="bg-emerald-100 text-emerald-700"
    >
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="relative aspect-video rounded-lg overflow-hidden border bg-muted">
            <Image
              src={SAMPLE_IMAGES[currentImage].src}
              alt="Practice writing alt text for this image"
              fill
              className="object-cover"
            />
          </div>
          
          <div className="bg-muted/50 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Context</h3>
            <p className="text-muted-foreground">
              {SAMPLE_IMAGES[currentImage].context}
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="font-semibold">Your Alt Text</h3>
            <Textarea
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Write descriptive alt text for this image..."
              className="min-h-[120px]"
            />
          </div>

          <div className="flex gap-3">
            <Button 
              onClick={checkAltText}
              className="flex-1"
              size="lg"
            >
              <CheckCircle className="w-4 h-4 mr-2" />
              Check Alt Text
            </Button>
            <Button 
              onClick={nextImage}
              variant="outline"
              size="lg"
            >
              <ChevronRight className="w-4 h-4 mr-2" />
              Next Image
            </Button>
          </div>

          {feedback && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-4 rounded-lg border ${statusColors[feedback.status]}`}
            >
              {feedback.message}
            </motion.div>
          )}
        </div>
      </div>
    </ExerciseLayout>
  )
} 