"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface InstructionsPageProps {
  onStartExam: () => void
}

const instructions = [
  "You have 100 minutes to complete the test.",
  "Test consists of 100 multiple-choice q.s.",
  "You are allowed 2 retest attempts if you do not pass on the first try.",
  "Each incorrect answer will incur a negative mark of -1/4.",
  "Ensure you are in a quiet environment and have a stable internet connection.",
  "Keep an eye on the timer, and try to answer all questions within the given time.",
  "Do not use any external resources such as dictionaries, websites, or assistance.",
  "Complete the test honestly to accurately assess your proficiency level.",
  "Check answers before submitting.",
  "Your test results will be displayed immediately after submission, indicating whether you have passed or need to retake the test.",
]

export default function InstructionsPage({ onStartExam }: InstructionsPageProps) {
  return (
    <div className="min-h-screen bg-blue-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 lg:px-12 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center">
            <span className="text-white text-lg font-bold">⎓</span>
          </div>
          <div>
            <h1 className="font-bold text-gray-900">NexLearn</h1>
            <p className="text-xs text-gray-500">futuristic learning</p>
          </div>
        </div>
        <Button variant="outline" className="text-teal-600 border-teal-600 bg-transparent">
          Logout
        </Button>
      </header>

      <main className="px-6 lg:px-12 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Exam Title */}
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Ancient Indian History MCQ</h2>

          {/* Exam Stats */}
          <Card className="bg-slate-800 text-white p-8 mb-8">
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <p className="text-gray-300 mb-2">Total MCQ's:</p>
                <p className="text-4xl font-bold">100</p>
              </div>
              <div className="text-center border-x border-gray-600">
                <p className="text-gray-300 mb-2">Total marks:</p>
                <p className="text-4xl font-bold">100</p>
              </div>
              <div className="text-center">
                <p className="text-gray-300 mb-2">Total time:</p>
                <p className="text-4xl font-bold">90:00</p>
              </div>
            </div>
          </Card>

          {/* Instructions */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6">Instructions:</h3>
            <ol className="space-y-3 mb-8">
              {instructions.map((instruction, index) => (
                <li key={index} className="flex gap-4">
                  <span className="font-semibold text-gray-900 flex-shrink-0">{index + 1}.</span>
                  <span className="text-gray-700">{instruction}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Start Button */}
          <div className="flex justify-center">
            <Button
              onClick={onStartExam}
              className="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-12 py-3 rounded-lg h-12"
            >
              Start Test
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
