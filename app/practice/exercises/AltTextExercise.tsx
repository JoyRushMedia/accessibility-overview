'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import AnimatedButton from '../../../app/components/AnimatedButton'
import Image from 'next/image'
import { SAMPLE_IMAGES } from './mockImages'

export default function AltTextExercise() {
  const [currentImage, setCurrentImage] = useState(0)
  const [userInput, setUserInput] = useState('')
  const [feedback, setFeedback] = useState('')

  const checkAltText = () => {
    const currentIdealAlt = SAMPLE_IMAGES[currentImage].idealAlt.toLowerCase()
    const userAltText = userInput.toLowerCase()

    if (userInput.length < 10) {
      setFeedback('Try to be more descriptive! Good alt text should paint a picture.')
    } else if (userAltText.includes('image') || userAltText.includes('picture')) {
      setFeedback('Avoid using words like "image" or "picture" in alt text - screen readers already announce these.')
    } else if (currentIdealAlt.split(' ').some(word => userAltText.includes(word))) {
      setFeedback('Great job! Your alt text is descriptive and includes key elements.')
    } else {
      setFeedback('Good try! Consider mentioning the main subject and its context.')
    }
  }

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % SAMPLE_IMAGES.length)
    setUserInput('')
    setFeedback('')
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-4"
    >
      <h3 className="text-xl font-bold">Alt Text Exercise</h3>
      <div className="border rounded p-4">
        <Image 
          src={SAMPLE_IMAGES[currentImage].src}
          alt="Practice writing alt text for this image"
          className="max-w-md rounded mb-4"
          width={500}
          height={300}
        />
        <p className="text-gray-600 dark:text-gray-300">
          <strong>Context:</strong> {SAMPLE_IMAGES[currentImage].context}
        </p>
      </div>
      
      <textarea
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        className="w-full p-2 border rounded min-h-[100px] bg-white dark:bg-gray-800 
          text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600"
        placeholder="Write your alt text here..."
      />

      <div className="flex space-x-4">
        <AnimatedButton onClick={checkAltText}>
          Check Alt Text
        </AnimatedButton>
        <AnimatedButton variant="secondary" onClick={nextImage}>
          Next Image
        </AnimatedButton>
      </div>

      {feedback && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/50 rounded"
        >
          {feedback}
        </motion.div>
      )}
    </motion.div>
  )
} 