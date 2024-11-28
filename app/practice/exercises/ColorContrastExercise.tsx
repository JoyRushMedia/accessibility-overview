'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Paintbrush, Check, AlertTriangle } from 'lucide-react'

export default function ColorContrastExercise() {
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF')
  const [textColor, setTextColor] = useState('#000000')
  const [result, setResult] = useState<string | null>(null)
  const [ratio, setRatio] = useState<number | null>(null)

  const checkContrast = () => {
    const l1 = getLuminance(backgroundColor)
    const l2 = getLuminance(textColor)
    const contrastRatio = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05)
    setRatio(contrastRatio)
    
    setResult(
      contrastRatio >= 4.5 
        ? "success"
        : "failure"
    )
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6 bg-background text-foreground"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="badge badge-lg bg-muted text-muted-foreground p-3">
          <Paintbrush className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-foreground">
            Color Contrast Checker
          </h3>
          <p className="text-muted-foreground">
            Test your color combinations against WCAG standards
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="card bg-background border border-border">
            <div className="card-body space-y-3">
              <label className="form-control w-full">
                <div className="label">
                  <span className="text-foreground">Background Color</span>
                </div>
                <div className="join">
                  <input
                    type="color"
                    value={backgroundColor}
                    onChange={(e) => setBackgroundColor(e.target.value)}
                    className="join-item w-14 h-12 rounded-l-lg border-border"
                  />
                  <input 
                    type="text"
                    value={backgroundColor.toUpperCase()}
                    onChange={(e) => setBackgroundColor(e.target.value)}
                    className="join-item input bg-background text-foreground border-border w-full"
                  />
                </div>
              </label>
              
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Text Color</span>
                </div>
                <div className="join">
                  <input
                    type="color"
                    value={textColor}
                    onChange={(e) => setTextColor(e.target.value)}
                    className="join-item w-14 h-12 rounded-l-lg border-r-0"
                  />
                  <input 
                    type="text"
                    value={textColor.toUpperCase()}
                    onChange={(e) => setTextColor(e.target.value)}
                    className="join-item input input-bordered w-full"
                  />
                </div>
              </label>
            </div>
          </div>

          <button 
            onClick={checkContrast}
            className="w-full px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md transition-colors"
          >
            Check Contrast
          </button>
        </div>

        <div className="space-y-4">
          <div 
            className="card h-40 flex items-center justify-center text-2xl font-medium transition-colors"
            style={{ 
              '--dynamic-bg': backgroundColor, 
              '--dynamic-text': textColor 
            } as React.CSSProperties}
          >
            <div className="card-body items-center justify-center" style={{ backgroundColor: 'var(--dynamic-bg)', color: 'var(--dynamic-text)' }}>
              Preview Text
            </div>
          </div>

          {result && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`alert ${
                result === "success" 
                  ? "alert-success"
                  : "alert-error"
              }`}
            >
              {result === "success" ? (
                <Check className="w-5 h-5" />
              ) : (
                <AlertTriangle className="w-5 h-5" />
              )}
              <div>
                <h4 className="font-bold">
                  {result === "success" 
                    ? "Passes WCAG AA standard!" 
                    : "Fails WCAG AA standard"}
                </h4>
                <p className="text-sm">
                  Contrast ratio: {ratio?.toFixed(2)}:1 
                  (minimum required: 4.5:1)
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
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