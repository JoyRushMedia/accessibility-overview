'use client'
import { useState } from 'react'
import { Keyboard, CheckCircle2, RotateCcw } from 'lucide-react'
import ExerciseLayout from './components/ExerciseLayout'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function KeyboardNavExercise() {
  const [completedSteps, setCompletedSteps] = useState<number[]>([])
  const [inputValue, setInputValue] = useState('')
  const [selectedOption, setSelectedOption] = useState('')

  const totalSteps = 5
  const progress = (completedSteps.length / totalSteps) * 100

  const completeStep = (step: number) => {
    if (!completedSteps.includes(step)) {
      setCompletedSteps([...completedSteps, step].sort((a, b) => a - b))
    }
  }

  const resetExercise = () => {
    setCompletedSteps([])
    setInputValue('')
    setSelectedOption('')
  }

  return (
    <ExerciseLayout
      icon={Keyboard}
      title="Keyboard Navigation Practice"
      description="Complete these tasks using only your keyboard"
      iconColor="bg-amber-100 text-amber-700"
    >
      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <Progress value={progress} className="flex-1" />
          <span className="text-sm font-medium">
            {completedSteps.length}/{totalSteps} completed
          </span>
        </div>

        <div className="grid gap-4">
          <motion.div
            className={`p-4 rounded-lg border transition-colors ${
              completedSteps.includes(1)
                ? 'bg-green-50 border-green-200'
                : 'hover:bg-muted/50'
            }`}
          >
            <Button
              onClick={() => completeStep(1)}
              variant={completedSteps.includes(1) ? "outline" : "default"}
              className="w-full justify-start"
            >
              <CheckCircle2 className={`w-4 h-4 mr-2 ${
                completedSteps.includes(1) ? 'text-green-500' : ''
              }`} />
              Click this button using Space or Enter
            </Button>
          </motion.div>

          <motion.div
            className={`p-4 rounded-lg border transition-colors ${
              completedSteps.includes(2)
                ? 'bg-green-50 border-green-200'
                : 'hover:bg-muted/50'
            }`}
          >
            <div className="space-y-2">
              <Label>Type something and press Enter</Label>
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && inputValue) {
                    completeStep(2)
                  }
                }}
                placeholder="Type here..."
              />
            </div>
          </motion.div>

          <motion.div
            className={`p-4 rounded-lg border transition-colors ${
              completedSteps.includes(3)
                ? 'bg-green-50 border-green-200'
                : 'hover:bg-muted/50'
            }`}
          >
            <div className="space-y-2">
              <Label>Use arrow keys to select an option</Label>
              <Select
                value={selectedOption}
                onValueChange={(value) => {
                  setSelectedOption(value)
                  completeStep(3)
                }}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="option1">Option 1</SelectItem>
                  <SelectItem value="option2">Option 2</SelectItem>
                  <SelectItem value="option3">Option 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </motion.div>

          <motion.div
            className={`p-4 rounded-lg border transition-colors ${
              completedSteps.includes(4)
                ? 'bg-green-50 border-green-200'
                : 'hover:bg-muted/50'
            }`}
          >
            <Button
              variant="link"
              onClick={() => completeStep(4)}
              className="text-blue-500 hover:text-blue-600"
            >
              Tab to and activate this link
              {completedSteps.includes(4) && 
                <CheckCircle2 className="w-4 h-4 ml-2 text-green-500" />
              }
            </Button>
          </motion.div>

          <motion.div
            className={`p-4 rounded-lg border transition-colors ${
              completedSteps.includes(5)
                ? 'bg-green-50 border-green-200'
                : 'hover:bg-muted/50'
            }`}
          >
            <div className="flex justify-between items-center">
              <span>Reset the exercise</span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  resetExercise()
                  completeStep(5)
                }}
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Reset
              </Button>
            </div>
          </motion.div>
        </div>

        {completedSteps.length === totalSteps && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 rounded-lg bg-green-100 text-green-800 border border-green-200"
          >
            <h3 className="font-semibold mb-1">🎉 Congratulations!</h3>
            <p>You&apos;ve successfully completed all keyboard navigation tasks.</p>
          </motion.div>
        )}
      </div>
    </ExerciseLayout>
  )
} 