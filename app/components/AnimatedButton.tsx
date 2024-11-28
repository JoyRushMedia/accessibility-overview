'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { HTMLMotionProps } from 'framer-motion'

interface AnimatedButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary'
}

export default function AnimatedButton({ 
  children, 
  variant = 'primary',
  ...props 
}: AnimatedButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`px-4 py-2 rounded-md ${
        variant === 'primary' 
          ? 'bg-blue-600 text-white' 
          : 'bg-gray-200 text-gray-800'
      }`}
      {...props}
    >
      {children}
    </motion.button>
  )
} 