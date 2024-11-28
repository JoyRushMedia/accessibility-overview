'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import AnimatedButton from '../../../app/components/AnimatedButton'

export default function KeyboardNavExercise() {
  const [completedSteps, setCompletedSteps] = useState<number[]>([])
  const [inputValue, setInputValue] = useState('')
  const [selectedOption, setSelectedOption] = useState('')

  const completeStep = (step: number) => {
    if (!completedSteps.includes(step)) {
      setCompletedSteps([...completedSteps, step])
    }
  }

  const resetExercise = () => {
    setCompletedSteps([])
    setInputValue('')
    setSelectedOption('')
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-4"
    >
      <h3 className="text-xl font-bold">Keyboard Navigation Exercise</h3>
      <p className="text-gray-600 dark:text-gray-300">Use only your keyboard to complete these tasks:</p>
      
      <div className="space-y-2">
        <button 
          onClick={() => completeStep(1)}
          className={`block w-full text-left p-2 rounded border ${
            completedSteps.includes(1) 
              ? 'bg-green-50 dark:bg-green-900/50 border-green-500' 
              : 'hover:bg-gray-100 dark:hover:bg-gray-800'
          }`}
        >
          1. Click this button {completedSteps.includes(1) && '✓'}
        </button>

        <a 
          href="#"
          onClick={(e) => {
            e.preventDefault()
            completeStep(2)
          }}
          className={`block w-full text-left p-2 rounded border ${
            completedSteps.includes(2) 
              ? 'bg-green-50 dark:bg-green-900/50 border-green-500' 
              : 'hover:bg-gray-100 dark:hover:bg-gray-800'
          }`}
        >
          2. Follow this link {completedSteps.includes(2) && '✓'}
        </a>

        <input 
          type="text"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value)
            if (e.target.value.length > 0) completeStep(3)
          }}
          placeholder="3. Type your name"
          className={`block w-full p-2 border rounded ${
            completedSteps.includes(3) 
              ? 'bg-green-50 dark:bg-green-900/50 border-green-500' 
              : 'bg-white dark:bg-gray-800'
          }`}
        />

        <select 
          value={selectedOption}
          onChange={(e) => {
            setSelectedOption(e.target.value)
            if (e.target.value) completeStep(4)
          }}
          aria-label="Select an option"
          className={`block w-full p-2 border rounded ${
            completedSteps.includes(4) 
              ? 'bg-green-50 dark:bg-green-900/50 border-green-500' 
              : 'bg-white dark:bg-gray-800'
          }`}
        >
          <option value="">4. Select an option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </select>
      </div>

      <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/50 rounded">
        <h4 className="font-bold mb-2">Keyboard Tips:</h4>
        <ul className="list-disc list-inside space-y-1">
          <li>Use Tab to move between elements</li>
          <li>Use Enter or Space to activate buttons</li>
          <li>Use Arrow keys for select dropdowns</li>
          <li>Use Enter to follow links</li>
        </ul>
      </div>

      {completedSteps.length === 4 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-green-50 dark:bg-green-900/50 rounded"
        >
          🎉 Congratulations! You&apos;ve completed all tasks using keyboard navigation!
        </motion.div>
      )}

      <AnimatedButton variant="secondary" onClick={resetExercise}>
        Reset Exercise
      </AnimatedButton>
    </motion.div>
  )
} 