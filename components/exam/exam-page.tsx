"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import Image from "next/image"

interface ExamPageProps {
  onSubmit: () => void
}

const questions = [
  {
    id: 1,
    question:
      "Identify the site shown in the image below, which is one of the major urban centers of the Indus Valley Civilization.",
    image: "/ancient-indus-valley-ruins.jpg",
    options: ["A. Pataliputra", "B. Harappa", "C. Mohenjo-Daro", "D. Lothal"],
    status: "attended",
  },
  {
    id: 2,
    question: "What was the primary script used in the Indus Valley Civilization?",
    options: ["A. Brahmi script", "B. Kharoshthi script", "C. Indus script", "D. Sanskrit"],
    status: "not-attended",
  },
  {
    id: 3,
    question: "Which ruler is known for spreading Buddhism across Asia?",
    options: ["A. Ashoka", "B. Chandragupta Maurya", "C. Samudragupta", "D. Harsha"],
    status: "not-attended",
  },
]

export default function ExamPage({ onSubmit }: ExamPageProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({})
  const [markedForReview, setMarkedForReview] = useState<Set<number>>(new Set())
  const [showComprehension, setShowComprehension] = useState(false)
  const [showSubmitDialog, setShowSubmitDialog] = useState(false)

  const handleSelectAnswer = (optionIndex: number) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion]: String(optionIndex),
    })
  }

  const toggleMarkForReview = () => {
    const newMarked = new Set(markedForReview)
    if (newMarked.has(currentQuestion)) {
      newMarked.delete(currentQuestion)
    } else {
      newMarked.add(currentQuestion)
    }
    setMarkedForReview(newMarked)
  }

  const getQuestionStatus = (index: number): "attended" | "not-attended" | "marked" | "review" => {
    if (markedForReview.has(index) && selectedAnswers[index]) return "review"
    if (markedForReview.has(index)) return "marked"
    return selectedAnswers[index] ? "attended" : "not-attended"
  }

  const getButtonColor = (index: number) => {
    const status = getQuestionStatus(index)
    if (status === "attended") return "bg-green-500 hover:bg-green-600"
    if (status === "not-attended") return "bg-red-500 hover:bg-red-600"
    if (status === "marked") return "bg-purple-500 hover:bg-purple-600"
    if (status === "review") return "bg-cyan-500 hover:bg-cyan-600"
    return "bg-gray-300 hover:bg-gray-400"
  }

  const question = questions[currentQuestion]
  const answeredCount = Object.keys(selectedAnswers).length
  const reviewCount = markedForReview.size

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 lg:px-12 py-4 flex items-center justify-between">
        <div>
          <h1 className="font-bold text-gray-900">Ancient Indian History MCQ</h1>
          <p className="text-sm text-gray-600">01/100</p>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm">Remaining Time: 87:13</span>
          <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center text-white font-bold">
            ⏱
          </div>
        </div>
        <Button variant="outline" className="text-teal-600 border-teal-600 bg-transparent">
          Logout
        </Button>
      </header>

      <main className="p-6 lg:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Question Section */}
            <Card className="p-6 bg-white">
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">{question.question}</h3>
                  {question.image && (
                    <Image
                      src={question.image || "/placeholder.svg"}
                      alt="Question"
                      width={300}
                      height={200}
                      className="rounded-lg mb-6 w-full max-w-sm"
                    />
                  )}
                </div>

                {question.id === 1 && (
                  <Button
                    variant="outline"
                    className="bg-teal-600 hover:bg-teal-700 text-white border-0"
                    onClick={() => setShowComprehension(true)}
                  >
                    Read Comprehensive Paragraph
                  </Button>
                )}

                <div className="space-y-3">
                  <p className="text-sm text-gray-600">Choose the answer:</p>
                  {question.options.map((option, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <input
                        type="radio"
                        name={`q${currentQuestion}`}
                        id={`q${currentQuestion}-${index}`}
                        checked={selectedAnswers[currentQuestion] === String(index)}
                        onChange={() => handleSelectAnswer(index)}
                        className="w-5 h-5 cursor-pointer"
                      />
                      <label
                        htmlFor={`q${currentQuestion}-${index}`}
                        className="text-gray-700 cursor-pointer flex-1 p-3 border border-gray-300 rounded-lg hover:bg-gray-50"
                      >
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Navigation */}
            <div className="flex gap-3 flex-wrap">
              <Button
                variant="outline"
                className="bg-purple-600 hover:bg-purple-700 text-white border-0"
                onClick={toggleMarkForReview}
              >
                {markedForReview.has(currentQuestion) ? "✓ Marked for review" : "Mark for review"}
              </Button>
              <div className="flex-1" />
              <Button
                variant="outline"
                disabled={currentQuestion === 0}
                onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
              >
                Previous
              </Button>
              <Button
                onClick={() => {
                  if (currentQuestion < questions.length - 1) {
                    setCurrentQuestion(currentQuestion + 1)
                  } else {
                    setShowSubmitDialog(true)
                  }
                }}
              >
                {currentQuestion === questions.length - 1 ? "Submit" : "Next"}
              </Button>
            </div>
          </div>

          {/* Question Sheet */}
          <div className="lg:col-span-1">
            <Card className="p-4 bg-white sticky top-4">
              <h4 className="font-bold text-gray-900 mb-4">Question Numbers:</h4>
              <div className="grid grid-cols-4 gap-2">
                {Array.from({ length: 100 }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentQuestion(index)}
                    className={`
                      w-full aspect-square text-xs font-semibold rounded-lg transition-all
                      ${currentQuestion === index ? "ring-2 ring-offset-2 ring-blue-500" : ""}
                      ${getButtonColor(index)} text-white
                    `}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>

              <div className="mt-6 space-y-2 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-green-500 rounded" />
                  <span>Attended</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-red-500 rounded" />
                  <span>Not Attended</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-purple-500 rounded" />
                  <span>Marked For Review</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-cyan-500 rounded" />
                  <span>Answered and Marked For Review</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>

      {/* Comprehension Modal */}
      <Dialog open={showComprehension} onOpenChange={setShowComprehension}>
        <DialogContent className="max-w-2xl max-h-96 overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Comprehensive Paragraph</DialogTitle>
          </DialogHeader>
          <div className="text-sm text-gray-700 space-y-4">
            <p>
              Ancient Indian history spans several millennia and offers a profound glimpse into the origins of one of
              the world's oldest and most diverse civilizations. It begins with the Indus Valley Civilization (c.
              2500–1500 BCE), which is renowned for its advanced urban planning, architecture, and water management
              systems. Cities like Harappa and Mohenjo-Daro were highly developed, with sophisticated drainage systems
              and well-organized streets, showcasing the early brilliance of Indian civilization. The decline of this
              civilization remains a mystery, but it marks the transition to the next significant phase in Indian
              history.
            </p>
            <p>
              Following the Indus Valley Civilization, the Vedic Period (c. 1500–600 BCE) saw the arrival of the Aryans
              in northern India. This period is characterized by the composition of the Vedas, which laid the
              foundations of Hinduism and early Indian society.
            </p>
          </div>
        </DialogContent>
      </Dialog>

      {/* Submit Dialog */}
      <Dialog open={showSubmitDialog} onOpenChange={setShowSubmitDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you sure you want to submit the test?</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-xl">⏱</span>
              <div>
                <p className="text-sm text-gray-600">Remaining Time:</p>
                <p className="font-bold text-gray-900">87:13</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xl">📄</span>
              <div>
                <p className="text-sm text-gray-600">Total Questions:</p>
                <p className="font-bold text-gray-900">100</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xl">✓</span>
              <div>
                <p className="text-sm text-gray-600">Questions Answered:</p>
                <p className="font-bold text-gray-900">003</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xl">🔖</span>
              <div>
                <p className="text-sm text-gray-600">Marked for review:</p>
                <p className="font-bold text-gray-900">001</p>
              </div>
            </div>
          </div>
          <div className="flex gap-3 pt-4">
            <Button variant="outline" onClick={() => setShowSubmitDialog(false)}>
              Cancel
            </Button>
            <Button className="flex-1 bg-slate-900 hover:bg-slate-800 text-white" onClick={onSubmit}>
              Submit Test
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
