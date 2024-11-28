'use client'
import { useState } from 'react'
import { Paintbrush, RefreshCw } from 'lucide-react'
import ExerciseLayout from './components/ExerciseLayout'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function ColorContrastExercise() {
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF')
  const [textColor, setTextColor] = useState('#000000')
  const [result, setResult] = useState<{
    ratio: number;
    passes: boolean;
  } | null>(null)

  // HSL color: hsl(82, 84.5%, 67.1%)
  const buttonBgColor = "hsl(82, 84.5%, 67.1%)"
  const buttonTextColor = "#000000" // Ensuring good contrast with the background

  const checkContrast = () => {
    const l1 = getLuminance(backgroundColor)
    const l2 = getLuminance(textColor)
    const contrastRatio = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05)
    setResult({
      ratio: contrastRatio,
      passes: contrastRatio >= 4.5
    })
  }

  return (
    <ExerciseLayout
      icon={Paintbrush}
      title="Color Contrast Checker"
      description="Test color combinations against WCAG 2.1 contrast requirements"
      iconColor="bg-indigo-100 text-indigo-700"
    >
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="space-y-6">
            <div className="space-y-4">
              <Label className="text-lg">Background Color</Label>
              <div className="flex gap-3">
                <div className="relative">
                  <Input
                    type="color"
                    value={backgroundColor}
                    onChange={(e) => setBackgroundColor(e.target.value)}
                    className="w-20 h-20 rounded-2xl cursor-pointer border-2 p-1"
                  />
                </div>
                <Input
                  type="text"
                  value={backgroundColor.toUpperCase()}
                  onChange={(e) => setBackgroundColor(e.target.value)}
                  className="text-lg font-mono rounded-xl"
                />
              </div>
            </div>

            <div className="space-y-4">
              <Label className="text-lg">Text Color</Label>
              <div className="flex gap-3">
                <div className="relative">
                  <Input
                    type="color"
                    value={textColor}
                    onChange={(e) => setTextColor(e.target.value)}
                    className="w-20 h-20 rounded-2xl cursor-pointer border-2 p-1"
                  />
                </div>
                <Input
                  type="text"
                  value={textColor.toUpperCase()}
                  onChange={(e) => setTextColor(e.target.value)}
                  className="text-lg font-mono rounded-xl"
                />
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <Button 
              onClick={checkContrast}
              className="flex-1 text-lg h-12 rounded-full font-medium"
              style={{
                backgroundColor: buttonBgColor,
                color: buttonTextColor,
              }}
            >
              Check Contrast
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-12 w-12 rounded-full"
              onClick={() => {
                setBackgroundColor('#FFFFFF')
                setTextColor('#000000')
                setResult(null)
              }}
            >
              <RefreshCw className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="space-y-8">
          <motion.div 
            className="rounded-2xl h-64 flex items-center justify-center text-3xl font-medium shadow-lg"
            style={{ 
              backgroundColor,
              color: textColor
            }}
          >
            Preview Text
          </motion.div>

          {result && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-6 rounded-2xl border-2 ${
                result.passes 
                  ? 'bg-success/10 border-success/20 text-success-content'
                  : 'bg-error/10 border-error/20 text-error-content'
              }`}
            >
              <h3 className="text-xl font-semibold mb-2">
                {result.passes ? 'Passes WCAG AA' : 'Fails WCAG AA'}
              </h3>
              <p className="text-lg opacity-90">
                Contrast ratio: {result.ratio.toFixed(2)}:1
                <span className="opacity-75 ml-2">
                  (minimum required: 4.5:1)
                </span>
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </ExerciseLayout>
  )
}

function getLuminance(hex: string) {
  const rgb = parseInt(hex.slice(1), 16)
  const r = (rgb >> 16) & 0xff
  const g = (rgb >> 8) & 0xff
  const b = (rgb >> 0) & 0xff
  
  const [rs, gs, bs] = [r, g, b].map(c => {
    c = c / 255
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
  })
  
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs
} 